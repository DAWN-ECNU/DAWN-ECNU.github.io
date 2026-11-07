# 数值辅助函数。评价网格、裁界面积和集合计算保持同一口径。
## ---- c5_fused_geometry_helpers ----
area_km2 <- function(geometry) sum(as.numeric(st_area(geometry))) / 1e6
polygon_union <- function(geometry, config) {
  geometry <- st_make_valid(st_geometry(geometry))
  if (any(st_geometry_type(geometry) == "GEOMETRYCOLLECTION")) {
    geometry <- st_collection_extract(geometry, "POLYGON", warn = FALSE)
  }
  geometry <- geometry[!st_is_empty(geometry)]
  if (!length(geometry)) return(st_sfc(st_multipolygon(), crs = config$analysis_crs))
  st_union(geometry)
}
component_geometry <- function(geometry, config) {
  parts <- st_cast(polygon_union(geometry, config), "POLYGON", warn = FALSE)
  parts <- parts[!st_is_empty(parts)]
  if (!length(parts)) return(parts)
  neighbours <- st_intersects(parts)
  labels <- integer(length(parts))
  group <- 0L
  for (start in seq_along(parts)) {
    if (labels[start] > 0L) next
    group <- group + 1L
    pending <- start
    labels[start] <- group
    while (length(pending)) {
      current <- pending[[1]]
      pending <- pending[-1]
      new_parts <- neighbours[[current]][labels[neighbours[[current]]] == 0L]
      labels[new_parts] <- group
      pending <- c(pending, new_parts)
    }
  }
  combined <- lapply(seq_len(group), function(index) st_union(parts[labels == index])[[1]])
  st_sfc(combined, crs = config$analysis_crs)
}
make_reference_grid <- function(boundary, config) {
  box <- st_bbox(boundary)
  edges_x <- seq(floor(box[["xmin"]] / config$grid_m) * config$grid_m,
    ceiling(box[["xmax"]] / config$grid_m) * config$grid_m, by = config$grid_m)
  edges_y <- seq(floor(box[["ymin"]] / config$grid_m) * config$grid_m,
    ceiling(box[["ymax"]] / config$grid_m) * config$grid_m, by = config$grid_m)
  x <- head(edges_x, -1) + config$grid_m / 2
  y <- head(edges_y, -1) + config$grid_m / 2
  xyz <- expand.grid(x = x, y = y)
  xyz$value <- 1
  template <- terra::rast(xyz, type = "xyz", crs = "EPSG:32651")
  template <- terra::mask(template, terra::vect(boundary), touches = FALSE)
  mask <- is.finite(terra::values(template, mat = FALSE))
  cell_ids <- which(mask)
  id_raster <- template
  terra::values(id_raster) <- ifelse(mask, seq_len(terra::ncell(template)), NA_real_)
  names(id_raster) <- "cell_id"
  cells <- st_as_sf(terra::as.polygons(id_raster, dissolve = FALSE, na.rm = TRUE))
  cells <- suppressWarnings(st_intersection(cells, st_geometry(boundary)))
  cells <- cells[match(cell_ids, cells$cell_id), ]
  stopifnot(!anyNA(cells$cell_id), nrow(cells) == length(cell_ids))
  xy <- terra::xyFromCell(template, cell_ids)
  data <- data.frame(cell_id = cell_ids, x = xy[, 1], y = xy[, 2],
    weight_m2 = as.numeric(st_area(cells)))
  list(x = x, y = y, template = template, mask = mask, cell_ids = cell_ids,
    cells = cells, data = data)
}
mask_geometry <- function(selected, grid, boundary, config) {
  raster <- grid$template
  values <- rep(NA_real_, terra::ncell(raster))
  values[grid$cell_ids[selected]] <- 1
  terra::values(raster) <- values
  if (!any(selected)) return(st_sfc(st_multipolygon(), crs = config$analysis_crs))
  polygons <- st_as_sf(terra::as.polygons(raster, dissolve = TRUE, na.rm = TRUE))
  polygon_union(st_intersection(st_geometry(polygons), st_geometry(boundary)), config)
}
## ---- c5_fused_density_helpers ----
fit_density <- function(xy, h_argument, grid) {
  fit <- MASS::kde2d(xy[, 1], xy[, 2], h = h_argument,
    n = c(length(grid$x), length(grid$y)), lims = c(range(grid$x), range(grid$y)))
  stopifnot(isTRUE(all.equal(fit$x, grid$x)), isTRUE(all.equal(fit$y, grid$y)))
  xyz <- expand.grid(x = fit$x, y = fit$y)
  xyz$relative <- as.vector(fit$z) * 1e6
  raster <- terra::rast(xyz, type = "xyz", crs = "EPSG:32651")
  positions <- unique(c(which.max(xyz$relative),
    as.integer(round(seq(1, nrow(xyz), length.out = 9)))))
  extracted <- terra::extract(raster, as.matrix(xyz[positions, c("x", "y")]))[, 1]
  stopifnot(max(abs(extracted - xyz$relative[positions])) < 1e-12)
  list(fit = fit, values = terra::values(raster, mat = FALSE)[grid$cell_ids])
}
write_grid_raster <- function(values, grid, path, integer = FALSE) {
  raster <- grid$template
  all_values <- rep(NA_real_, terra::ncell(raster))
  all_values[grid$cell_ids] <- values
  terra::values(raster) <- all_values
  terra::writeRaster(raster, path, overwrite = TRUE,
    datatype = if (integer) "INT1U" else "FLT8S",
    NAflag = if (integer) 255 else NaN, gdal = "COMPRESS=DEFLATE")
  invisible(path)
}

## ---- c5_fused_density_module ----
# 每区三年共用评价网格，密度按完整12000条记录归一化。
estimate_annual_kde <- function(points, boundaries, config) {
  results <- list()
  reference_rows <- list()
  for (district_index in seq_along(config$district_slugs)) {
    slug <- config$district_slugs[district_index]
    boundary <- boundaries[district_index, ]
    grid <- make_reference_grid(boundary, config)
    group_points <- lapply(config$groups$group_id,
      function(id) points[points$slug == slug & points$group_id == id, ])
    xy <- lapply(group_points, sf::st_coordinates)
    automatic_h <- t(vapply(xy, function(coordinates) c(
      MASS::bandwidth.nrd(coordinates[, 1]),
      MASS::bandwidth.nrd(coordinates[, 2])), numeric(2))) * config$bandwidth_multiplier
    stopifnot(all(is.finite(automatic_h)), all(automatic_h > 0))
    fits <- lapply(seq_len(nrow(config$groups)),
      function(index) fit_density(xy[[index]], automatic_h[index, ], grid))
    relative_matrix <- do.call(cbind, lapply(fits, function(fit) fit$values))
    reference <- rowMeans(relative_matrix)
    threshold <- unname(stats::quantile(reference, config$aoi_quantile, type = 7))
    results[[slug]] <- list(grid = grid, boundary = boundary, group_points = group_points,
      xy = xy, automatic_h = automatic_h, fits = fits, relative_matrix = relative_matrix,
      reference = reference, threshold = threshold)
    reference_rows[[slug]] <- data.frame(district_name = config$district_names[district_index],
      slug = slug, threshold_relative = threshold,
      analyzed_area_km2 = sum(grid$data$weight_m2) / 1e6,
      boundary_area_km2 = area_km2(boundary))
  }
  list(districts = results, reference_summary = dplyr::bind_rows(reference_rows))
}

## ---- c5_fused_aoi_module ----
# 用每区共同阈值截取年度AOI，并保留网格到多边形的面积对应关系。
extract_annual_aoi <- function(density_result, config) {
  surfaces <- list()
  grids <- list()
  summary_rows <- list()
  patch_rows <- list()
  qa_rows <- list()
  for (slug in config$district_slugs) {
    result <- density_result$districts[[slug]]
    grid <- result$grid
    boundary <- result$boundary
    district_name <- as.character(boundary$district_name[1])
    for (index in seq_len(nrow(config$groups))) {
      group <- config$groups[index, ]
      key <- paste(slug, group$group_id, sep = "_")
      values <- result$relative_matrix[, index]
      selected <- values >= result$threshold
      geometry <- mask_geometry(selected, grid, boundary, config)
      aoi <- sf::st_sf(district_name = district_name, slug = slug,
        group_id = group$group_id, year = group$year,
        threshold_relative = result$threshold, geometry = geometry)
      components <- component_geometry(aoi, config)
      patches <- sf::st_sf(district_name = rep(district_name, length(components)),
        slug = rep(slug, length(components)), group_id = rep(group$group_id, length(components)),
        year = rep(group$year, length(components)),
        patch_id = sprintf("%s_p%02d", key, seq_along(components)), geometry = components)
      patches$area_km2 <- as.numeric(sf::st_area(patches)) / 1e6
      patch_rows[[key]] <- patches
      group_points <- result$group_points[[index]]
      inside <- lengths(sf::st_intersects(group_points, aoi)) > 0L
      h <- result$automatic_h[index, ]
      grid$data[[paste0("relative_", group$group_id)]] <- values
      grid$data[[paste0("aoi_", group$group_id)]] <- selected
      summary_rows[[key]] <- data.frame(district_name, slug, group,
        n_records = nrow(group_points), n_weibo = sum(group_points$platform == "微博"),
        n_rednote = sum(group_points$platform == "小红书"),
        n_unique_locations = nrow(unique(result$xy[[index]])),
        n_pseudonymous_users = dplyr::n_distinct(group_points$user_id),
        boundary_area_km2 = area_km2(boundary),
        analyzed_area_km2 = sum(grid$data$weight_m2) / 1e6,
        hx_m = h[1] / 4, hy_m = h[2] / 4, h_argument_x_m = h[1], h_argument_y_m = h[2],
        grid_m = config$grid_m, threshold_relative = result$threshold,
        aoi_area_km2 = area_km2(aoi),
        aoi_area_percent = 100 * area_km2(aoi) / area_km2(boundary),
        aoi_records = sum(inside), aoi_record_percent = 100 * mean(inside),
        n_components = nrow(patches), n_valid_cells = nrow(grid$data),
        n_selected_cells = sum(selected),
        relative_integral_within_district = sum(values * grid$data$weight_m2) / 1e6)
      geometry_error <- area_km2(sf::st_difference(sf::st_geometry(aoi), sf::st_geometry(boundary)))
      weight_error <- abs(sum(grid$data$weight_m2[selected]) / 1e6 - area_km2(aoi))
      stopifnot(all(sf::st_is_valid(aoi)), geometry_error < 1e-7, weight_error < 1e-7)
      qa_rows[[key]] <- data.frame(district_name, group,
        valid_geometry = all(sf::st_is_valid(aoi)),
        aoi_within_boundary_error_km2 = geometry_error, area_weight_error_km2 = weight_error,
        shared_grid_and_mask = TRUE)
      surfaces[[key]] <- list(district_name = district_name, slug = slug,
        group_id = group$group_id, year = group$year,
        x = grid$x, y = grid$y, z_relative = result$fits[[index]]$fit$z * 1e6, aoi = aoi)
    }
    grid$data$slug <- slug
    grid$data$district_name <- district_name
    grids[[slug]] <- grid
  }
  list(surfaces = surfaces, grids = grids, summary = dplyr::bind_rows(summary_rows),
    aoi = do.call(rbind, lapply(surfaces, function(surface) surface$aoi)),
    patches = do.call(rbind, patch_rows), checks = dplyr::bind_rows(qa_rows))
}

## ---- c5_fused_evolution_helpers ----
# 范围演化按同一地理位置的集合变化定义，不匹配单个斑块的身份。
compare_annual_footprints <- function(aoi_result, boundaries, config) {
  comparisons <- data.frame(from_year = c(2023L, 2024L, 2023L), to_year = c(2024L, 2025L, 2025L))
  comparisons$comparison_id <- paste(comparisons$from_year, comparisons$to_year, sep = "_")
  comparisons$comparison_label <- paste(comparisons$from_year, comparisons$to_year, sep = "–")
  annual_rows <- list()
  annual_geometry_rows <- list()
  trajectory_rows <- list()
  trajectory_code_rows <- list()
  trajectory_geometry_rows <- list()
  grids <- aoi_result$grids
  trajectory_types <- c("000" = "never", "001" = "entered", "010" = "fluctuating",
    "011" = "entered", "100" = "exited", "101" = "fluctuating",
    "110" = "exited", "111" = "persistent")
  for (slug in config$district_slugs) {
    boundary <- boundaries[boundaries$slug == slug, ]
    district_name <- as.character(boundary$district_name[1])
    grid <- grids[[slug]]
    weights <- grid$data$weight_m2 / 1e6
    domain_area <- sum(weights)
    for (comparison_index in seq_len(nrow(comparisons))) {
      comparison <- comparisons[comparison_index, ]
      before <- grid$data[[paste0("aoi_fused_", comparison$from_year)]]
      after <- grid$data[[paste0("aoi_fused_", comparison$to_year)]]
      selections <- list(retained = before & after, gained = !before & after, lost = before & !after)
      areas <- vapply(selections, function(chosen) sum(weights[chosen]), numeric(1))
      conservation <- max(abs(c(areas["retained"] + areas["lost"] - sum(weights[before]),
        areas["retained"] + areas["gained"] - sum(weights[after]))))
      stopifnot(conservation < 1e-7)
      union_area <- sum(weights[before | after])
      key <- paste(slug, comparison$comparison_id, sep = "_")
      annual_rows[[key]] <- data.frame(district_name, slug, comparison,
        from_area_km2 = sum(weights[before]), to_area_km2 = sum(weights[after]),
        retained_km2 = unname(areas["retained"]), gained_km2 = unname(areas["gained"]),
        lost_km2 = unname(areas["lost"]),
        net_area_change_km2 = sum(weights[after]) - sum(weights[before]),
        jaccard = if (union_area > 0) unname(areas["retained"]) / union_area else NA_real_,
        area_conservation_max_abs_error_km2 = conservation)
      for (type in names(selections)) {
        annual_geometry_rows[[paste(key, type, sep = "_")]] <- sf::st_sf(
          district_name = district_name, slug = slug, comparison, change_type = type,
          geometry = mask_geometry(selections[[type]], grid, boundary, config))
      }
    }
    codes <- paste0(as.integer(grid$data$aoi_fused_2023),
      as.integer(grid$data$aoi_fused_2024), as.integer(grid$data$aoi_fused_2025))
    types <- unname(trajectory_types[codes])
    stopifnot(!anyNA(types))
    grid$data$trajectory_code <- codes
    grid$data$trajectory_type <- types
    for (code in names(trajectory_types)) {
      chosen <- codes == code
      trajectory_code_rows[[paste(slug, code, sep = "_")]] <- data.frame(district_name, slug,
        trajectory_code = code, trajectory_type = unname(trajectory_types[code]),
        n_cells = sum(chosen), area_km2 = sum(weights[chosen]),
        area_percent = 100 * sum(weights[chosen]) / domain_area)
    }
    for (type in c("persistent", "entered", "exited", "fluctuating", "never")) {
      chosen <- types == type
      codes_for_type <- paste(names(trajectory_types)[trajectory_types == type], collapse = "/")
      key <- paste(slug, type, sep = "_")
      entry <- data.frame(district_name, slug, trajectory_type = type,
        trajectory_codes = codes_for_type, n_cells = sum(chosen),
        area_km2 = sum(weights[chosen]), area_percent = 100 * sum(weights[chosen]) / domain_area)
      trajectory_rows[[key]] <- entry
      trajectory_geometry_rows[[key]] <- sf::st_sf(entry,
        geometry = mask_geometry(chosen, grid, boundary, config))
    }
    grids[[slug]] <- grid
  }
  trajectory_summary <- dplyr::bind_rows(trajectory_rows)
  for (slug in config$district_slugs) {
    subset <- trajectory_summary[trajectory_summary$slug == slug, ]
    domain_area <- sum(grids[[slug]]$data$weight_m2) / 1e6
    stopifnot(abs(sum(subset$area_km2) - domain_area) < 1e-7,
      abs(sum(subset$area_percent) - 100) < 1e-9)
  }
  trajectories <- do.call(rbind, trajectory_geometry_rows)
  list(annual_overlap = dplyr::bind_rows(annual_rows),
    changes = do.call(rbind, annual_geometry_rows), trajectory_summary = trajectory_summary,
    trajectory_codes = dplyr::bind_rows(trajectory_code_rows), trajectories = trajectories,
    persistent_aoi = trajectories[trajectories$trajectory_type == "persistent", ], grids = grids)
}

## ---- c5_fused_sensitivity_helpers ----
# 同一区三年共用自动带宽的中位数，对照平滑尺度变化。
shared_bandwidth_sensitivity <- function(density_result, aoi_result, config) {
  rows <- list()
  bandwidth_rows <- list()
  selected_masks <- list()
  for (slug in config$district_slugs) {
    result <- density_result$districts[[slug]]
    grid <- aoi_result$grids[[slug]]
    boundary <- result$boundary
    district_name <- as.character(boundary$district_name[1])
    fixed_h <- apply(result$automatic_h, 2, stats::median)
    fixed_fits <- lapply(result$xy, function(xy) fit_density(xy, fixed_h, grid))
    fixed_reference <- rowMeans(do.call(cbind, lapply(fixed_fits, function(fit) fit$values)))
    fixed_threshold <- unname(stats::quantile(fixed_reference, config$aoi_quantile, type = 7))
    for (index in seq_len(nrow(config$groups))) {
      group <- config$groups[index, ]
      key <- paste(slug, group$group_id, sep = "_")
      auto_selected <- grid$data[[paste0("aoi_", group$group_id)]]
      fixed_selected <- fixed_fits[[index]]$values >= fixed_threshold
      fixed_geometry <- mask_geometry(fixed_selected, grid, boundary, config)
      auto_geometry <- aoi_result$surfaces[[key]]$aoi
      intersection_area <- sum(grid$data$weight_m2[auto_selected & fixed_selected])
      union_area <- sum(grid$data$weight_m2[auto_selected | fixed_selected])
      rows[[key]] <- data.frame(district_name, slug, group,
        auto_area_km2 = area_km2(auto_geometry), fixed_area_km2 = area_km2(fixed_geometry),
        auto_components = nrow(aoi_result$patches[aoi_result$patches$group_id == group$group_id &
          aoi_result$patches$slug == slug, ]),
        fixed_components = length(component_geometry(fixed_geometry, config)),
        auto_fixed_iou = if (union_area > 0) intersection_area / union_area else NA_real_,
        fixed_hx_m = fixed_h[1] / 4, fixed_hy_m = fixed_h[2] / 4,
        auto_threshold_relative = result$threshold, fixed_threshold_relative = fixed_threshold)
      h <- result$automatic_h[index, ]
      bandwidth_rows[[key]] <- data.frame(district_name, slug, group,
        n_records = nrow(result$group_points[[index]]), hx_m = h[1] / 4, hy_m = h[2] / 4,
        h_argument_x_m = h[1], h_argument_y_m = h[2],
        fixed_hx_m = fixed_h[1] / 4, fixed_hy_m = fixed_h[2] / 4)
      selected_masks[[key]] <- fixed_selected
    }
  }
  list(summary = dplyr::bind_rows(rows), bandwidths = dplyr::bind_rows(bandwidth_rows),
    selected_masks = selected_masks)
}

