# 以原始XY记录估计密度面，提取等值面AOI，再进行向量集合运算。

## ---- c5_fused_geometry_utilities ----
# 保留面要素，统一合并，并为合法空结果保留空间参考。
polygon_union <- function(geometry, crs) {
  geometry <- sf::st_make_valid(sf::st_geometry(geometry))
  if (any(sf::st_geometry_type(geometry) == "GEOMETRYCOLLECTION")) {
    geometry <- sf::st_collection_extract(geometry, "POLYGON", warn = FALSE)
  }
  geometry <- geometry[!sf::st_is_empty(geometry)]
  if (!length(geometry)) return(sf::st_sfc(sf::st_multipolygon(), crs = crs))
  sf::st_union(geometry)
}
area_km2 <- function(geometry) sum(as.numeric(sf::st_area(geometry))) / 1e6

## ---- c5_fused_point_kde_method ----
# 输入一个区的全部记录，输出三年的带宽、求值范围与KDE矩阵。
fit_annual_kde <- function(points, boundary, config) {
  yearly_points <- lapply(config$years, function(year) points[points$year == year, ])
  xy <- lapply(yearly_points, sf::st_coordinates)
  stopifnot(all(vapply(xy, nrow, integer(1)) == config$records_per_group))
  h_argument <- t(vapply(xy, function(coordinates) c(
    MASS::bandwidth.nrd(coordinates[, 1]),
    MASS::bandwidth.nrd(coordinates[, 2])), numeric(2))) * config$bandwidth_multiplier
  stopifnot(all(is.finite(h_argument)), all(h_argument > 0))
  # MASS将h除以4。外围增加三倍最大实际核尺度，便于提取闭合等值面。
  margin <- config$kernel_margin_sigma * apply(h_argument / 4, 2, max)
  bbox <- sf::st_bbox(boundary)
  limits <- c(bbox[["xmin"]] - margin[1], bbox[["xmax"]] + margin[1],
    bbox[["ymin"]] - margin[2], bbox[["ymax"]] + margin[2])
  fits <- lapply(seq_along(config$years), function(index) {
    MASS::kde2d(xy[[index]][, 1], xy[[index]][, 2], h = h_argument[index, ],
      n = c(config$evaluation_n, config$evaluation_n), lims = limits)
  })
  list(yearly_points = yearly_points, xy = xy, h_argument = h_argument,
    fits = fits, limits = limits, margin = margin)
}

## ---- c5_fused_reference_method ----
# 在区内数值求值位置计算三年平均密度，取得共同P95。
density_reference <- function(density, boundary, config) {
  x <- density$fits[[1]]$x
  y <- density$fits[[1]]$y
  stopifnot(all(vapply(density$fits, function(fit)
    identical(fit$x, x) && identical(fit$y, y), logical(1))))
  evaluation_points <- sf::st_as_sf(expand.grid(x = x, y = y),
    coords = c("x", "y"), crs = config$analysis_crs)
  inside_boundary <- matrix(lengths(sf::st_intersects(evaluation_points, boundary)) > 0L,
    nrow = length(x), ncol = length(y))
  z_relative <- lapply(density$fits, function(fit) fit$z * 1e6)
  reference <- Reduce("+", z_relative) / length(config$years)
  threshold <- unname(stats::quantile(reference[inside_boundary],
    probs = config$aoi_quantile, type = 7))
  list(x = x, y = y, z_relative = z_relative, reference = reference,
    inside_boundary = inside_boundary, threshold = threshold)
}

## ---- c5_fused_contour_method ----
# 先生成闭合的高密度等值面，再按行政区裁切。
contour_aoi <- function(fit, threshold, boundary, config) {
  z <- fit$z * 1e6
  edge_max <- max(c(z[1, ], z[nrow(z), ], z[, 1], z[, ncol(z)]))
  stopifnot(edge_max < threshold)
  # MASS矩阵为X行、Y列；isoband要求Y行、X列，因此转置一次。
  bands <- isoband::isobands(x = fit$x, y = fit$y, z = t(z),
    levels_low = threshold, levels_high = Inf)
  contours <- sf::st_sfc(isoband::iso_to_sfg(bands), crs = config$analysis_crs)
  geometry <- polygon_union(sf::st_intersection(
    sf::st_make_valid(contours), sf::st_geometry(boundary)), config$analysis_crs)
  list(geometry = geometry, outer_limit_max_relative = edge_max)
}

## ---- c5_fused_pair_method ----
# 直接对两个年度AOI求交集、差集与交并比。
compare_aoi_pair <- function(before, after, crs) {
  pieces <- list(
    retained = polygon_union(sf::st_intersection(before, after), crs),
    gained = polygon_union(sf::st_difference(after, before), crs),
    lost = polygon_union(sf::st_difference(before, after), crs))
  areas <- vapply(pieces, area_km2, numeric(1))
  union_area <- area_km2(sf::st_union(c(before, after)))
  conservation <- max(abs(c(areas["retained"] + areas["lost"] - area_km2(before),
    areas["retained"] + areas["gained"] - area_km2(after))))
  stopifnot(conservation < 1e-7)
  list(pieces = pieces, areas = areas, union_area = union_area,
    conservation = conservation,
    jaccard = if (union_area > 0) unname(areas["retained"]) / union_area else NA_real_)
}

## ---- c5_fused_states_method ----
# 三个年度AOI的交集与差集给出八种成员组合。
three_year_pieces <- function(geometries, boundary, crs) {
  aoi_2023 <- geometries[["2023"]]
  aoi_2024 <- geometries[["2024"]]
  aoi_2025 <- geometries[["2025"]]
  pieces <- list(
    "000" = sf::st_difference(sf::st_geometry(boundary),
      sf::st_union(c(aoi_2023, aoi_2024, aoi_2025))),
    "001" = sf::st_difference(aoi_2025, sf::st_union(c(aoi_2023, aoi_2024))),
    "010" = sf::st_difference(aoi_2024, sf::st_union(c(aoi_2023, aoi_2025))),
    "011" = sf::st_difference(sf::st_intersection(aoi_2024, aoi_2025), aoi_2023),
    "100" = sf::st_difference(aoi_2023, sf::st_union(c(aoi_2024, aoi_2025))),
    "101" = sf::st_difference(sf::st_intersection(aoi_2023, aoi_2025), aoi_2024),
    "110" = sf::st_difference(sf::st_intersection(aoi_2023, aoi_2024), aoi_2025),
    "111" = sf::st_intersection(sf::st_intersection(aoi_2023, aoi_2024), aoi_2025))
  lapply(pieces, polygon_union, crs = crs)
}

## ---- c5_fused_patch_utilities ----
# 斑块按裁切后有效联合几何的POLYGON部分计数，孔洞保留在所属斑块中。
aoi_polygon_parts <- function(aoi) {
  parts <- sf::st_cast(sf::st_geometry(aoi), "POLYGON", warn = FALSE)
  parts <- parts[!sf::st_is_empty(parts)]
  patches <- sf::st_sf(district_name = rep(aoi$district_name[[1]], length(parts)),
    slug = rep(aoi$slug[[1]], length(parts)), group_id = rep(aoi$group_id[[1]], length(parts)),
    year = rep(aoi$year[[1]], length(parts)),
    patch_id = sprintf("%s_%s_p%02d", aoi$slug[[1]], aoi$group_id[[1]], seq_along(parts)),
    geometry = parts)
  patches$area_km2 <- as.numeric(sf::st_area(patches)) / 1e6
  patches
}

## ---- c5_fused_summary_utilities ----
# 表格仅汇总已生成的AOI与原始点，不改变密度或边界。
annual_aoi_statistics <- function(aoi, patches, density, index, boundary) {
  district_name <- aoi$district_name[[1]]
  slug <- aoi$slug[[1]]
  group_id <- aoi$group_id[[1]]
  year <- aoi$year[[1]]
  points <- density$yearly_points[[index]]
  h <- density$h_argument[index, ]
  inside <- lengths(sf::st_intersects(points, aoi)) > 0L
  data.frame(district_name, slug, group_id, year,
    n_records = nrow(points), n_weibo = sum(points$platform == "微博"),
    n_rednote = sum(points$platform == "小红书"),
    n_unique_locations = nrow(unique(density$xy[[index]])),
    n_pseudonymous_users = dplyr::n_distinct(points$user_id),
    boundary_area_km2 = area_km2(boundary), analyzed_area_km2 = area_km2(boundary),
    hx_m = h[1] / 4, hy_m = h[2] / 4, h_argument_x_m = h[1], h_argument_y_m = h[2],
    threshold_relative = aoi$threshold_relative[[1]], aoi_area_km2 = area_km2(aoi),
    aoi_area_percent = 100 * area_km2(aoi) / area_km2(boundary),
    aoi_records = sum(inside), aoi_record_percent = 100 * mean(inside),
    n_components = nrow(patches))
}
