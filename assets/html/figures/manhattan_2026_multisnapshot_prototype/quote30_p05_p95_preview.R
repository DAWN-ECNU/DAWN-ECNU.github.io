# Manhattan Airbnb: fixed 30-night quotations, P5-P95 primary analysis.
# Run this script from its folder or use Rscript quote30_p05_p95_preview.R.
# Raw inputs are preserved; Chapter 5 includes the exported figures.

Sys.setlocale("LC_CTYPE", ".UTF-8")
script_arg <- grep("^--file=", commandArgs(FALSE), value = TRUE)
work_dir <- if (length(script_arg)) {
  dirname(normalizePath(sub("^--file=", "", script_arg[1])))
} else {
  getwd()
}
local_lib <- file.path(work_dir, "R_library")
if (dir.exists(local_lib)) .libPaths(c(local_lib, .libPaths()))
suppressPackageStartupMessages({
  library(dplyr)
  library(readr)
  library(sf)
  library(spdep)
  library(classInt)
  library(ggplot2)
  library(ggspatial)
  library(patchwork)
})

output_dir <- file.path(work_dir, "output", "quote30_p05_p95_preview_20261016")
dir.create(output_dir, recursive = TRUE, showWarnings = FALSE)
seed <- 20261016L
n_permutations <- 9999L
scheme_ids <- c("full_30", "log_iqr", "p05_p95")
primary_scheme <- "p05_p95"
scheme_labels <- c(full_30 = "All valid 30-night quotes",
                   log_iqr = "Log-price IQR",
                   p05_p95 = "Price P5–P95")
scheme_colours <- c(full_30 = "#758E98", log_iqr = "#287D8E",
                    p05_p95 = "#B07967")

# 1. 读取报价日期、房型和价格字段；长 ID 保持字符型。
releases <- tibble::tibble(
  snapshot = c("2026-03", "2026-06", "2026-09"),
  file = c("nyc_2026-03-16.csv.gz", "nyc_2026-06-14.csv.gz",
           "nyc_2026-09-14.csv.gz")
)
fields <- c("id", "longitude", "latitude", "price", "room_type",
            "minimum_nights", "price_quote_checkin_date",
            "price_quote_checkout_date", "price_quote_total_price",
            "price_quote_price_per_night")
read_release <- function(i) {
  read_csv(file.path(work_dir, "data", releases$file[i]),
           col_select = all_of(fields),
           col_types = cols(.default = col_character(),
                            longitude = col_double(), latitude = col_double()),
           show_col_types = FALSE, progress = FALSE) %>%
    mutate(snapshot = releases$snapshot[i],
           price_usd = parse_number(price, locale = locale(grouping_mark = ",")),
           quote_total_usd = parse_number(price_quote_total_price),
           quote_per_night_usd = parse_number(price_quote_price_per_night),
           quote_checkin = as.Date(price_quote_checkin_date),
           quote_checkout = as.Date(price_quote_checkout_date),
           quote_nights = as.integer(quote_checkout - quote_checkin),
           min_nights = parse_number(minimum_nights))
}
records <- bind_rows(lapply(seq_len(nrow(releases)), read_release))
main_island <- st_read(file.path(work_dir, "data",
                                "manhattan_main_island_original_boundary.gpkg"),
                       quiet = TRUE) %>% st_transform(4326)
stopifnot(nrow(main_island) == 1L, all(st_is_valid(main_island)))
positive <- records %>%
  filter(is.finite(longitude), is.finite(latitude),
         is.finite(price_usd), price_usd > 0)
inside <- lengths(st_intersects(
  st_as_sf(positive, coords = c("longitude", "latitude"), crs = 4326),
  main_island)) > 0L
positive <- positive[inside, ] %>%
  mutate(longitude = round(longitude, 12), latitude = round(latitude, 12))
stopifnot(!anyDuplicated(positive[c("snapshot", "id")]))
quote_30 <- positive %>% filter(quote_nights == 30L)
stopifnot(nrow(positive) == 27736L, nrow(quote_30) == 19061L,
          all(abs(quote_30$price_usd - quote_30$quote_per_night_usd) < 0.011),
          all(abs(quote_30$price_usd - quote_30$quote_total_usd / 30) < 0.011),
          !any(quote_30$min_nights > 30, na.rm = TRUE))
# price 已是报价中的每夜金额，不能再除以 30。
# 主方案先在记录层取 P5–P95；对数 IQR 仅保留为反思中的敏感性对照。
# 点图可在 log10 尺度分类；格网中位价和 Moran's I 仍使用美元原价。
log_quartiles <- quantile(log10(quote_30$price_usd), c(0.25, 0.75))
log_fences <- 10^(c(log_quartiles[1] - 1.5 * diff(log_quartiles),
                    log_quartiles[2] + 1.5 * diff(log_quartiles)))
percentile_fences <- quantile(quote_30$price_usd, c(0.05, 0.95))
fences <- tibble::tibble(
  scheme = scheme_ids,
  lower_usd = c(0, log_fences[1], percentile_fences[1]),
  upper_usd = c(Inf, log_fences[2], percentile_fences[2])
)
selected <- lapply(seq_along(scheme_ids), function(i) {
  quote_30 %>% filter(price_usd >= fences$lower_usd[i],
                     price_usd <= fences$upper_usd[i])
})
names(selected) <- scheme_ids
write_csv(positive %>% count(snapshot, quote_nights, name = "records"),
          file.path(output_dir, "quote_duration_counts.csv"))
write_csv(quote_30 %>% group_by(snapshot, room_type) %>%
            summarise(records = n(), median_usd = median(price_usd),
                      .groups = "drop"),
          file.path(output_dir, "quote30_room_type_by_release.csv"))

# 2. 固定原有 0.1 km² 完整网格；显示裁切不参与统计。
island_2263 <- st_transform(main_island, 2263)
cellsize_ft <- sqrt(2 * 100000 / sqrt(3)) * (3937 / 1200)
hex_side_m <- sqrt(2 * 100000 / (3 * sqrt(3)))
hex_grid <- st_make_grid(island_2263, cellsize = cellsize_ft,
                         square = FALSE) %>% st_sf() %>%
  mutate(hex_id = row_number()) %>%
  st_filter(island_2263, .predicate = st_intersects)
stopifnot(nrow(hex_grid) == 653L,
          max(abs(as.numeric(st_area(hex_grid)) / (3937 / 1200)^2 - 100000)) < 0.01)
vertices <- st_coordinates(st_geometry(hex_grid)[[1]])[, 1:2]
edge_lengths_m <- sqrt(rowSums((vertices[-1, ] - vertices[-nrow(vertices), ])^2)) /
  (3937 / 1200)
stopifnot(max(abs(edge_lengths_m - hex_side_m)) < 0.01)
write_csv(data.frame(area_km2 = .10, side_length_m = hex_side_m,
                      flat_to_flat_m = cellsize_ft / (3937 / 1200)),
          file.path(output_dir, "hex_geometry.csv"))
make_hex_values <- function(rows) {
  gps <- rows %>%
    # 同坐标先按批次求均价，再对已观测批次等权平均；缺席批次不补零。
    group_by(longitude, latitude, snapshot) %>%
    summarise(release_mean_usd = mean(price_usd), .groups = "drop") %>%
    group_by(longitude, latitude) %>%
    summarise(mean_price_usd = mean(release_mean_usd), n_releases = n(),
              .groups = "drop")
  hit <- st_intersects(st_transform(st_as_sf(
    gps, coords = c("longitude", "latitude"), crs = 4326), 2263), hex_grid)
  stopifnot(all(lengths(hit) > 0L))
  gps$hex_id <- hex_grid$hex_id[vapply(hit, min, integer(1))]
  values <- gps %>% group_by(hex_id) %>%
    summarise(gps_count = n(), median_price_usd = median(mean_price_usd),
              .groups = "drop")
  list(gps = gps, hex = left_join(hex_grid, values, by = "hex_id"))
}
cohorts <- lapply(selected, make_hex_values)

# 3. 每方案重新构建有效格的 Queen 邻接与行标准化权重。
# 置换 p 值用于空间推断；不依据 Moran's I 大小反向挑选筛选规则。
analyse_hex <- function(hex, ids = NULL, do_local = TRUE) {
  x_sf <- if (is.null(ids)) hex %>% filter(gps_count >= 5L) else
    hex %>% filter(hex_id %in% ids)
  x_sf <- x_sf %>% arrange(hex_id)
  x <- x_sf$median_price_usd
  stopifnot(all(is.finite(x)), all(x_sf$gps_count >= 5L), !anyDuplicated(x_sf$hex_id))
  neighbours <- poly2nb(x_sf, queen = TRUE, row.names = as.character(x_sf$hex_id))
  weights <- nb2listw(neighbours, style = "W", zero.policy = TRUE)
  no_neighbour <- card(neighbours) == 0L
  z <- as.numeric(scale(x))
  # 行标准化后，空间滞后是邻居标准化报价的加权平均。
  lag_z <- lag.listw(weights, z, zero.policy = TRUE)
  # 解析统计量用于核对；主文显著性使用下方随机置换检验。
  test <- moran.test(x, weights, alternative = "greater", zero.policy = TRUE)
  set.seed(seed)
  mc <- moran.mc(x, weights, nsim = n_permutations, alternative = "greater",
                 zero.policy = TRUE)
  x_sf$price_z <- z
  x_sf$spatial_lag_z <- lag_z
  if (do_local) {
    set.seed(seed)
    local_test <- localmoran_perm(x, weights, nsim = n_permutations,
                                  alternative = "two.sided", iseed = seed,
                                  zero.policy = TRUE)
    p_name <- "Pr(z != E(Ii)) Sim"
    stopifnot(p_name %in% colnames(local_test))
    x_sf$local_p <- local_test[, p_name]
    # 每个方案内，对所有有效格的双侧局部模拟 p 值统一做 BH 调整。
    x_sf$local_p_bh <- p.adjust(x_sf$local_p, method = "BH")
    x_sf$local_i <- local_test[, "Ii"]
    cluster <- rep("Not significant", length(x))
    sig <- !no_neighbour & x_sf$local_p_bh <= 0.05
    cluster[sig & z > 0 & lag_z > 0] <- "High-High"
    cluster[sig & z < 0 & lag_z < 0] <- "Low-Low"
    cluster[sig & z > 0 & lag_z < 0] <- "High-Low"
    cluster[sig & z < 0 & lag_z > 0] <- "Low-High"
    cluster[no_neighbour] <- "No neighbours"
    x_sf$cluster <- cluster
  }
  # 对无孤立格的行标准化 W，过原点散点斜率应等于 Moran's I。
  if (!any(no_neighbour)) {
    stopifnot(abs(sum(z * lag_z) / sum(z^2) - test$estimate[1]) < 1e-10)
  }
  list(values = x_sf, neighbours = neighbours, weights = weights,
       moran_i = unname(test$estimate[1]), p = mc$p.value,
       components = n.comp.nb(neighbours)$nc, isolates = sum(no_neighbour))
}
analyses <- lapply(cohorts, function(x) analyse_hex(x$hex))
common_ids <- Reduce(intersect, lapply(analyses, function(x) x$values$hex_id))
common_analyses <- lapply(cohorts, function(x) analyse_hex(x$hex, common_ids, FALSE))
full_on_primary_support <- analyse_hex(cohorts$full_30$hex,
                                       analyses[[primary_scheme]]$values$hex_id, FALSE)
stopifnot(all(vapply(common_analyses, function(x) identical(
  x$values$hex_id, common_analyses[[1]]$values$hex_id), logical(1))))
summary_table <- bind_rows(lapply(seq_along(scheme_ids), function(i) {
  id <- scheme_ids[i]
  a <- analyses[[id]]
  rows <- selected[[id]]
  tibble::tibble(
    scheme = id, label = scheme_labels[id],
    lower_usd = fences$lower_usd[i], upper_usd = fences$upper_usd[i],
    records = nrow(rows), removed_low = sum(quote_30$price_usd < fences$lower_usd[i]),
    removed_high = sum(quote_30$price_usd > fences$upper_usd[i]),
    gps_points = nrow(cohorts[[id]]$gps), eligible_hex = nrow(a$values),
    neighbour_components = a$components, isolates = a$isolates,
    moran_i = a$moran_i, permutation_p = a$p,
    common_hex = length(common_ids), common_moran_i = common_analyses[[id]]$moran_i,
    common_permutation_p = common_analyses[[id]]$p,
    hh = sum(a$values$cluster == "High-High"),
    ll = sum(a$values$cluster == "Low-Low"),
    hl = sum(a$values$cluster == "High-Low"),
    lh = sum(a$values$cluster == "Low-High"),
    not_significant = sum(a$values$cluster == "Not significant")
  )
}))
write_csv(summary_table, file.path(output_dir, "analysis_comparison.csv"))
support_decomposition <- tibble::tibble(
  comparison = c("Full quotes, original coverage", "Full quotes, primary coverage",
                 "P5-P95 quotes, primary coverage"),
  eligible_hex = c(nrow(analyses$full_30$values),
                   nrow(full_on_primary_support$values), nrow(analyses[[primary_scheme]]$values)),
  moran_i = c(analyses$full_30$moran_i, full_on_primary_support$moran_i,
              analyses[[primary_scheme]]$moran_i))
write_csv(support_decomposition, file.path(output_dir, "primary_support_comparison.csv"))
lost_cells <- cohorts$full_30$hex %>% st_drop_geometry() %>%
  filter(gps_count >= 5L, !hex_id %in% analyses[[primary_scheme]]$values$hex_id) %>%
  rename(full_gps_count = gps_count, full_median_usd = median_price_usd) %>%
  left_join(st_drop_geometry(cohorts[[primary_scheme]]$hex) %>%
              select(hex_id, primary_gps_count = gps_count,
                     primary_median_usd = median_price_usd), by = "hex_id")
write_csv(lost_cells, file.path(output_dir, "cells_losing_eligibility.csv"))
write_csv(bind_rows(lapply(scheme_ids, function(id) {
  selected[[id]] %>% count(snapshot, room_type, name = "retained_records") %>%
    mutate(scheme = id)
})), file.path(output_dir, "room_type_retention.csv"))
write_csv(bind_rows(lapply(scheme_ids, function(id) {
  cohorts[[id]]$gps %>% mutate(scheme = id)
})), file.path(output_dir, "gps_values_all_schemes.csv"))
write_csv(bind_rows(lapply(scheme_ids, function(id) {
  st_drop_geometry(analyses[[id]]$values) %>% mutate(scheme = id)
})), file.path(output_dir, "hex_statistics_all_schemes.csv"))
write_csv(bind_rows(lapply(scheme_ids, function(id) {
  st_drop_geometry(common_analyses[[id]]$values) %>% mutate(scheme = id)
})), file.path(output_dir, "common_support_hex_values.csv"))
write_csv(selected[[primary_scheme]] %>% select(snapshot, id, longitude, latitude,
                                     room_type, quote_checkin, quote_checkout,
                                     quote_nights, price_usd),
          file.path(output_dir, "retained_p05_p95_records.csv"))
saveRDS(list(summary = summary_table, cohorts = cohorts, analyses = analyses,
             common_analyses = common_analyses, common_ids = common_ids,
             full_on_primary_support = full_on_primary_support),
        file.path(output_dir, "experiment_results.rds"))
print(summary_table, width = Inf)

# 4. 沿用灰色瓦片、显式经纬网、左下比例尺、右下指北针。
# 主图与三方案对照图共用主方案的 Fisher 五级价格断点。
x_limits <- c(-74.055, -73.895)
y_limits <- c(40.690, 40.885)
frame <- st_as_sfc(st_bbox(c(xmin = x_limits[1], ymin = y_limits[1],
                            xmax = x_limits[2], ymax = y_limits[2]), crs = 4326))
graticule <- st_graticule(frame, crs = st_crs(4326), datum = st_crs(4326),
                          lon = seq(-74.04, -73.90, 0.02),
                          lat = seq(40.70, 40.88, 0.02))
tile_cache <- file.path(output_dir, "tile_cache")
dir.create(tile_cache, recursive = TRUE, showWarnings = FALSE)
rosm::register_tile_source(quote30_esri_gray = rosm::as.tile_source(
  paste0("https://server.arcgisonline.com/ArcGIS/rest/services/",
         "Canvas/World_Light_Gray_Base/MapServer/tile/${z}/${y}/${x}"),
  attribution = "Esri, HERE, Garmin, OpenStreetMap and the GIS User Community",
  extension = "jpg", max_zoom = 16))
map_theme <- theme_minimal(base_family = "Arial", base_size = 11) +
  theme(panel.grid = element_blank(), axis.title = element_blank(),
        axis.text = element_text(size = 9.4, colour = "#52646C"),
        panel.background = element_rect(fill = "#F0F3F3", colour = NA),
        panel.border = element_rect(fill = NA, colour = "#CAD2D5", linewidth = 0.35),
        plot.background = element_rect(fill = "white", colour = NA),
        plot.title = element_text(face = "bold", size = 14, colour = "#263841"),
        plot.subtitle = element_text(size = 10.2, colour = "#526A74"),
        plot.caption = element_text(size = 8.5, hjust = 0, colour = "#647680"),
        legend.position = "right", legend.title = element_text(size = 10, face = "bold"),
        legend.text = element_text(size = 9.4),
        legend.key.size = grid::unit(0.25, "in"), plot.margin = margin(10, 12, 10, 12))
tile_credit <- "Tiles © Esri and contributors · Boundary: NYC · Data: Inside Airbnb"
map_canvas <- function() {
  ggplot() + annotation_map_tile(type = "quote30_esri_gray", zoom = 12,
                                 alpha = 0.55, cachedir = tile_cache, quiet = TRUE)
}
map_frame <- function(p, title, subtitle, small = FALSE) {
  p + geom_sf(data = graticule, colour = "#688B98", alpha = 0.45, linewidth = 0.22) +
    geom_sf(data = main_island, fill = NA, colour = "#3E5A66", linewidth = 0.55) +
    # 比例尺置于主岛外侧；小衬底避免经纬线穿过距离文字。
    annotate("rect", xmin = -74.054, xmax = -74.010,
             ymin = 40.691, ymax = 40.699, fill = "white", alpha = 0.90,
             colour = NA) +
    scale_x_continuous(breaks = seq(-74.04, -73.90, 0.04),
                       labels = function(x) sprintf("%.2f°W", abs(x))) +
    scale_y_continuous(breaks = seq(40.70, 40.88, 0.04),
                       labels = function(x) sprintf("%.2f°N", x)) +
    coord_sf(crs = st_crs(4326), default_crs = st_crs(4326), datum = st_crs(4326),
             xlim = x_limits, ylim = y_limits, expand = FALSE) +
    annotation_scale(location = "bl", width_hint = 0.19, style = "ticks",
                     unit_category = "metric", text_cex = if (small) 0.72 else 0.9,
                     pad_x = grid::unit(0.12, "in"), pad_y = grid::unit(0.17, "in")) +
    annotation_north_arrow(location = "br", which_north = "true",
      height = grid::unit(if (small) 0.40 else 0.57, "in"),
      width = grid::unit(if (small) 0.34 else 0.49, "in"),
      pad_x = grid::unit(0.13, "in"), pad_y = grid::unit(0.14, "in"),
      style = north_arrow_fancy_orienteering(line_col = "#29434E",
        fill = c("white", "#29434E"), text_col = "#29434E",
        text_family = "Arial", text_size = if (small) 9 else 11)) +
    labs(title = title, subtitle = subtitle, caption = if (small) NULL else tile_credit) +
    map_theme
}
clip_hex <- function(x) {
  suppressWarnings(st_intersection(x, st_geometry(island_2263))) %>% st_transform(4326)
}
# Fisher 断点只决定绘图颜色；Moran / LISA 继续使用未分级的美元中位报价。
price_edges <- classIntervals(analyses[[primary_scheme]]$values$median_price_usd,
                              n = 5, style = "fisher")$brks
price_breaks <- c(-Inf, price_edges[2:5], Inf)
price_labels <- c(sprintf("≤ $%.0f", price_edges[2]),
                  sprintf("$%.0f–%.0f", price_edges[2:4], price_edges[3:5]),
                  sprintf("> $%.0f", price_edges[5]))
price_palette <- c(setNames(viridisLite::inferno(5, begin = 0.20, end = 0.85,
                                               direction = -1), price_labels),
                    "<5 GPS points" = "#B9AAA0")
price_map <- function(id, small = FALSE) {
  a <- analyses[[id]]
  d <- cohorts[[id]]$hex
  d$price_class <- as.character(cut(d$median_price_usd, price_breaks,
                                    labels = price_labels))
  d$price_class[is.na(d$gps_count) | d$gps_count < 5] <- "<5 GPS points"
  d$price_class <- factor(d$price_class, levels = names(price_palette))
  map_frame(map_canvas() + geom_sf(data = clip_hex(d), aes(fill = price_class),
                                   colour = "#F1F4F2", linewidth = 0.10, alpha = 0.96,
                                   show.legend = TRUE) +
              scale_fill_manual(values = price_palette, limits = names(price_palette),
                                drop = FALSE,
                                name = sprintf("Median quote (USD/night)\nHexagon area: 0.10 km²\nSide length: %.0f m", hex_side_m),
                                guide = guide_legend(override.aes = list(
                                  alpha = 1, fill = unname(price_palette)))),
            if (small) scheme_labels[id] else "30-night quotations | hexagon median",
            sprintf("%d eligible hexagons · 0.10 km² per cell", nrow(a$values)),
            small)
}
lisa_palette <- c("High-High" = "#BF554B", "Low-Low" = "#337DA7",
                   "High-Low" = "#DF9A60", "Low-High" = "#79B9BE",
                   "Not significant" = "#E7ECEB", "No neighbours" = "#A49CA8",
                   "<5 GPS points" = "#B9AAA0")
main_values <- analyses[[primary_scheme]]$values
lisa_counts <- table(factor(main_values$cluster, levels = names(lisa_palette)))
lisa_levels <- c(names(lisa_counts)[lisa_counts > 0], "<5 GPS points")
lisa_d <- left_join(hex_grid, st_drop_geometry(main_values) %>%
                      select(hex_id, cluster), by = "hex_id")
lisa_d$cluster[is.na(lisa_d$cluster)] <- "<5 GPS points"
lisa_d$cluster <- factor(lisa_d$cluster, levels = lisa_levels)
lisa_labels <- setNames(sprintf("%s (%d)", lisa_levels,
  c(as.integer(lisa_counts[lisa_levels[-length(lisa_levels)]]),
    nrow(hex_grid) - nrow(main_values))), lisa_levels)
lisa_map <- map_frame(map_canvas() +
  geom_sf(data = clip_hex(lisa_d), aes(fill = cluster), colour = "#F1F4F2",
          linewidth = 0.10, alpha = 0.95) +
  scale_fill_manual(values = lisa_palette, breaks = lisa_levels, labels = lisa_labels,
                    name = "Local Moran cluster", drop = FALSE,
                    guide = guide_legend(override.aes = list(alpha = 1))),
  "30-night quotations | local clusters",
  "P5–P95 · BH-adjusted p ≤ 0.05")
gps_sf <- st_as_sf(cohorts[[primary_scheme]]$gps,
                   coords = c("longitude", "latitude"), crs = 4326)
point_edges <- 10^classIntervals(log10(gps_sf$mean_price_usd), n = 7,
  style = "fisher", largeN = max(30000L, nrow(gps_sf)))$brks
point_breaks <- c(-Inf, point_edges[2:7], Inf)
point_labels <- c(sprintf("≤ $%.0f", point_edges[2]),
                   sprintf("$%.0f–%.0f", point_edges[2:6], point_edges[3:7]),
                   sprintf("> $%.0f", point_edges[7]))
gps_sf$price_class <- cut(gps_sf$mean_price_usd, point_breaks, labels = point_labels)
point_map <- map_frame(map_canvas() + geom_sf(data = gps_sf, aes(colour = price_class),
                                             size = 0.62, alpha = 0.70) +
  scale_colour_manual(values = viridisLite::viridis(7, begin = 0.10, end = 0.90,
                                                   direction = -1),
                       drop = FALSE, name = "Coordinate mean\nnightly quote (USD)",
                       guide = guide_legend(override.aes = list(size = 3, alpha = 1))),
  "30-night quotations | coordinate means",
  sprintf("P5–P95 · %s coordinates", format(nrow(gps_sf), big.mark = ",")))

# 三个发布批次展示筛选前的 30 夜正报价，共享原始样本的 Fisher 七级断点。
# 入住时长已统一，价格百分位筛选在随后步骤实施。
raw_edges <- 10^classIntervals(log10(quote_30$price_usd), n = 7,
  style = "fisher", largeN = max(30000L, nrow(quote_30)))$brks
raw_breaks <- c(-Inf, raw_edges[2:7], Inf)
raw_labels <- c(sprintf("≤ $%.0f", raw_edges[2]),
                 sprintf("$%.0f–%.0f", raw_edges[2:6], raw_edges[3:7]),
                 sprintf("> $%.0f", raw_edges[7]))
raw_palette <- setNames(viridisLite::viridis(7, begin = .10, end = .90,
                                            direction = -1), raw_labels)
raw_points <- st_as_sf(quote_30 %>% mutate(price_class = cut(
  price_usd, raw_breaks, labels = raw_labels)),
  coords = c("longitude", "latitude"), crs = 4326)
release_titles <- c("16 MAR 2026", "14 JUN 2026", "14 SEP 2026")
raw_maps <- lapply(seq_len(nrow(releases)), function(i) {
  d <- raw_points %>% filter(snapshot == releases$snapshot[i])
  map_frame(map_canvas() + geom_sf(data = d, aes(colour = price_class),
                                    size = .60, alpha = .62, show.legend = TRUE) +
    scale_colour_manual(values = raw_palette, limits = raw_labels, drop = FALSE,
      name = "Nightly quote\n(USD, before P5–P95)",
      guide = guide_legend(override.aes = list(size = 3, alpha = 1,
                                              colour = unname(raw_palette)))),
    release_titles[i], sprintf("%s listing–release records", format(nrow(d), big.mark = ",")),
    small = TRUE)
})
raw_release_plot <- wrap_plots(raw_maps, nrow = 1, guides = "collect") &
  theme(legend.position = "right")
write_csv(data.frame(class = raw_labels, lower = head(raw_breaks, -1),
                      upper = tail(raw_breaks, -1), colour = unname(raw_palette)),
          file.path(output_dir, "raw_point_price_classes.csv"))
write_csv(data.frame(class = point_labels, lower = head(point_breaks, -1),
                      upper = tail(point_breaks, -1)),
          file.path(output_dir, "filtered_point_price_classes.csv"))

# 5. Moran 散点用与 LISA 一致的象限底色；普通 OLS CI 仅为描述性拟合带。
scatter_data <- bind_rows(lapply(scheme_ids, function(id) {
  st_drop_geometry(analyses[[id]]$values) %>% mutate(scheme = id)
}))
scatter_limits <- list(x = range(scatter_data$price_z),
                       y = range(scatter_data$spatial_lag_z))
quadrants <- data.frame(xmin = c(-Inf, 0, -Inf, 0), xmax = c(0, Inf, 0, Inf),
                       ymin = c(0, 0, -Inf, -Inf), ymax = c(Inf, Inf, 0, 0),
                       group = c("Low-High", "High-High", "Low-Low", "High-Low"))
scatter_plot <- function(id, shared_limits = FALSE) {
  d <- st_drop_geometry(analyses[[id]]$values)
  fit <- lm(spatial_lag_z ~ 0 + price_z, data = d)
  new_x <- data.frame(price_z = seq(min(d$price_z), max(d$price_z), length.out = 200))
  band <- cbind(new_x, as.data.frame(predict(fit, new_x, interval = "confidence")))
  p <- ggplot(d, aes(price_z, spatial_lag_z)) +
    geom_rect(data = quadrants, aes(xmin = xmin, xmax = xmax, ymin = ymin,
                                    ymax = ymax, fill = group),
              inherit.aes = FALSE, alpha = 0.11, colour = NA) +
    geom_hline(yintercept = 0, linetype = "22", colour = "#506D7A", linewidth = 0.80) +
    geom_vline(xintercept = 0, linetype = "22", colour = "#506D7A", linewidth = 0.80) +
    geom_ribbon(data = band, aes(x = price_z, ymin = lwr, ymax = upr),
                inherit.aes = FALSE,
                fill = "#C56D4B", alpha = 0.18) +
    geom_point(shape = 21, fill = "#547D90", colour = "white", stroke = 0.22,
                size = 2.0, alpha = 0.75) +
    geom_line(data = band, aes(x = price_z, y = fit), inherit.aes = FALSE,
               colour = "#C56D4B", linewidth = 0.9) +
    annotate("label", x = -Inf, y = Inf,
               label = sprintf("Wz = %.3f z", unname(coef(fit)[1])),
               hjust = -0.10, vjust = 1.30, size = 4.0, fontface = "bold",
               colour = "#935034", fill = "white", alpha = .94, linewidth = 0) +
    scale_fill_manual(values = lisa_palette, guide = "none") +
    labs(title = scheme_labels[id],
         subtitle = sprintf("%d hexagons · Moran’s I = %.3f · permutation p = %.4f",
                            nrow(d), analyses[[id]]$moran_i, analyses[[id]]$p),
         x = "Standardised hexagon median price (z)",
         y = "Spatial lag of z (Queen, row-standardised)") +
    theme_minimal(base_size = 11, base_family = "Arial") +
    theme(panel.grid.minor = element_blank(),
          panel.grid.major = element_line(colour = "#E8EEF0", linewidth = 0.28),
          plot.background = element_rect(fill = "white", colour = NA),
          plot.title = element_text(size = 13, face = "bold", colour = "#263841"),
          plot.subtitle = element_text(size = 10, colour = "#526A74"),
          plot.margin = margin(12, 14, 12, 12))
  if (shared_limits) p <- p + coord_cartesian(xlim = scatter_limits$x, ylim = scatter_limits$y)
  p
}
main_scatter <- scatter_plot(primary_scheme) +
  labs(caption = "Shading: sign quadrants. Orange band: descriptive 95% OLS mean-fit CI; spatial inference uses permutations.") +
  theme(plot.caption = element_text(size = 8.5, hjust = 0, colour = "#647680"))
hist_breaks <- seq(floor(log10(min(quote_30$price_usd)) * 10) / 10,
                   ceiling(log10(max(quote_30$price_usd)) * 10) / 10, by = 0.05)
histogram <- hist(log10(quote_30$price_usd), breaks = hist_breaks, plot = FALSE)
hist_data <- data.frame(xmin = head(histogram$breaks, -1),
                        xmax = tail(histogram$breaks, -1),
                        count = histogram$counts, mid = histogram$mids)
raw_q <- quantile(quote_30$price_usd, c(.25, .5, .75))
# KDE 在 log10 价格上估计，再按 N × log10 组距缩放为预期频数；不增加第二纵轴。
kde <- density(log10(quote_30$price_usd), bw = "nrd0", n = 1024,
               from = min(histogram$breaks), to = max(histogram$breaks))
kde_data <- data.frame(log_price = kde$x,
                        expected_count = kde$y * nrow(quote_30) * diff(histogram$breaks)[1])
dist_plot <- ggplot(hist_data) +
  annotate("rect", xmin = log10(percentile_fences[1]), xmax = log10(percentile_fences[2]),
           ymin = 0, ymax = Inf, fill = "#B8D7D9", alpha = 0.18) +
  geom_rect(aes(xmin = xmin, xmax = xmax, ymin = 0, ymax = count, fill = mid),
              colour = "white", linewidth = 0.15) +
  geom_line(data = kde_data, aes(x = log_price, y = expected_count),
              inherit.aes = FALSE, colour = "#294F65", linewidth = 0.85) +
  geom_rug(data = quote_30, aes(x = log10(price_usd)), inherit.aes = FALSE,
             sides = "b", length = grid::unit(0.028, "npc"),
             alpha = 0.035, colour = "#243F4C", linewidth = 0.25) +
  geom_vline(xintercept = log10(raw_q), colour = "#485E69", linetype = "22",
               linewidth = 0.45) +
  geom_vline(xintercept = log10(percentile_fences), colour = "#A65F47", linetype = "42",
               linewidth = 0.75) +
  annotate("label", x = log10(c(percentile_fences[1], raw_q, percentile_fences[2])),
           y = max(hist_data$count) * c(0.91, 1.01, 0.88, 1.01, 0.91),
           label = c(sprintf("P5\n$%.2f", percentile_fences[1]),
                     sprintf("Q1\n$%.2f", raw_q[1]),
                     sprintf("Median\n$%.2f", raw_q[2]),
                     sprintf("Q3\n$%.2f", raw_q[3]),
                     sprintf("P95\n$%.2f", percentile_fences[2])),
           size = 3.2, linewidth = 0, fill = "white", colour = "#314D59") +
  scale_fill_gradientn(colours = viridisLite::viridis(256, begin = .1, end = .9,
                                                     direction = -1), guide = "none") +
  scale_x_continuous(breaks = log10(c(20, 50, 100, 200, 500, 1000, 3000, 10000)),
                       labels = scales::label_dollar()(c(20, 50, 100, 200, 500, 1000, 3000, 10000))) +
  scale_y_continuous(expand = expansion(mult = c(0, .12))) +
  labs(title = "30-night quotations | price screening", x = "Nightly quote (USD, log10 axis)",
       y = "Listing–release records", subtitle = "P5–P95 retained · curve: KDE · rug: individual quotations") +
  theme_minimal(base_family = "Arial", base_size = 11) +
  theme(panel.grid.minor = element_blank(), plot.title = element_text(face = "bold"),
        plot.margin = margin(12, 16, 12, 12))

# 6. 输出教材引用的图件：PNG 用于网页，独立 PDF 便于检查与编辑。
save_plot <- function(p, stem, width, height) {
  ggsave(file.path(output_dir, paste0(stem, ".png")), p, width = width, height = height,
         units = "in", dpi = 220, device = ragg::agg_png, bg = "white")
  ggsave(file.path(output_dir, paste0(stem, ".pdf")), p, width = width, height = height,
         units = "in", device = grDevices::cairo_pdf, bg = "white")
}
# 附图经纬网、borough 编号及紧凑来源说明由独立函数脚本生成。
source(file.path(work_dir, "quote30_p05_p95_locator.R"), encoding = "UTF-8")
save_plot(raw_release_plot, "02_three_release_quotes", 17.0, 8.0)
save_plot(dist_plot, "03_price_distribution", 10.5, 5.2)
save_plot(point_map, "04_filtered_coordinates", 8.0, 9.1)
save_plot(price_map(primary_scheme), "05_hex_median", 8.0, 9.1)
save_plot(main_scatter, "06_moran_scatter", 9.5, 6.3)
save_plot(lisa_map, "07_lisa_clusters", 8.0, 9.1)
map_comparison <- wrap_plots(lapply(scheme_ids, function(id) price_map(id, TRUE)),
                             nrow = 1, guides = "collect") &
  theme(legend.position = "right")
save_plot(map_comparison, "reflection_hex_comparison", 17.0, 8.0)
scatter_comparison <- wrap_plots(lapply(scheme_ids, function(id) scatter_plot(id, TRUE)),
                                 nrow = 1)
save_plot(scatter_comparison, "reflection_moran_comparison", 17.0, 5.5)
write_csv(data.frame(class = price_labels, lower = head(price_breaks, -1),
                      upper = tail(price_breaks, -1),
                      colour = unname(price_palette[price_labels])),
          file.path(output_dir, "shared_hex_price_classes.csv"))
writeLines(c(
  "# 30-night quotations | P5-P95 primary analysis | 2026-10-16",
  "Main analysis: positive-price records on Manhattan main island, quoted checkout minus check-in exactly 30 nights; no second nightly-price conversion.",
  sprintf("Primary P5-P95 range: [%.8f, %.8f] USD; pooled R quantile(type=7), endpoints included. Price filtering occurs at listing-release level before coordinate averaging. Retained %d/%d records (%.2f%%); tied prices mean this need not equal exactly 90%%.", percentile_fences[1], percentile_fences[2], nrow(selected[[primary_scheme]]), nrow(quote_30), 100 * nrow(selected[[primary_scheme]]) / nrow(quote_30)),
  "Coordinates: average within each release, then average the observed release means equally. Coordinates are not unique properties.",
  "Hexagons: complete 0.1 km² cells in EPSG:2263, same origin as the existing case. At least five distinct public coordinates; the displayed land clipping never affects analysis.",
  "Moran's I uses untransformed USD hexagon medians, Queen neighbours and row-standardised W. One-sided global permutation test: 9,999 simulations. It is a descriptive spatial association, not a causal effect.",
  "Local Moran: 9,999 conditional permutations, two-sided simulated p values, BH adjustment separately within each scheme. Fixed local seed is reset for reproducibility.",
  sprintf("Common-support comparison: %d identical hexagons and the same Queen graph in every scheme; native-coverage statistics are also retained.", length(common_ids)),
  sprintf("Primary-support diagnostic: using the same %d cells, full-quote I=%.9f and filtered-quote I=%.9f. The larger native-coverage jump also reflects removal of %d cells that fall below five GPS points; see cells_losing_eligibility.csv.",
          nrow(full_on_primary_support$values), full_on_primary_support$moran_i,
          analyses[[primary_scheme]]$moran_i, nrow(lost_cells)),
  "OLS confidence bands in scatter plots are descriptive and unadjusted for spatial dependence; use permutation p values for inference.",
  "Quote dates vary: the 2026 releases are not equal to 2026 stay dates. A 30-night quotation is not a realised payment or a one-night stay price.",
  "Excluded prices can be valid offers. Percentile trimming preferentially removes some private/shared-room observations and changes the population.",
  "Maps: WGS84 display, Esri Light Gray Base at alpha 0.55, explicit graticules, metric scale and true-north arrow. Shared five-class Fisher breaks are fitted on the primary P5-P95 case. Hexagons use reversed inferno (begin=.20, end=.85); point maps retain viridis. The NYC locator includes graticules and verified borough number labels.",
  sprintf("Regular hexagons: area 0.10 km², side length %.6f m, flat-to-flat width %.6f m. Legend uses rounded 196 m side length.", hex_side_m, cellsize_ft / (3937 / 1200)),
  "Distribution rug shows individual 30-night quote records. KDE is estimated in log10-price space (R density, nrd0 bandwidth), then scaled by record count times log10 bin width for the count axis.",
  "Point prices use seven Fisher classes fitted separately to log10 record quotes (shared across releases) and log10 coordinate means. All points are plotted. Labels are USD. The established reversed viridis palette and British spelling are retained.",
  "Inputs: local Inside Airbnb releases 2026-03-16, 2026-06-14 and 2026-09-14; NYC main-island boundary. No raw data are uploaded.",
  "Chapter 5 sections 2.0 and 3.0 now use this primary analysis and the exported figures. This script writes the figure/result directory; the formal chapter HTML is generated separately from its Rmd.",
  "", capture.output(print(summary_table, width = Inf)), "", capture.output(sessionInfo())
), file.path(output_dir, "ANALYSIS_NOTES.md"))
manifest <- list(created = as.character(Sys.time()), seed = seed,
  permutations = n_permutations, primary_scheme = primary_scheme,
  source_files = as.list(setNames(as.character(tools::md5sum(
    file.path(work_dir, "data", releases$file))), releases$file)),
  hex_area_m2 = 100000, crs_analysis = "EPSG:2263", crs_display = "EPSG:4326",
  palette = list(hex_price = "inferno begin=0.20 end=0.85 direction=-1",
                 point_price = "viridis begin=0.10 end=0.90 direction=-1",
                 lisa = as.list(lisa_palette)),
  software = as.list(sapply(c("sf", "spdep", "ggplot2", "classInt"),
                            function(x) as.character(packageVersion(x)))))
jsonlite::write_json(manifest, file.path(output_dir, "manifest.json"),
                     pretty = TRUE, auto_unbox = TRUE)


# 7. Build the local review gallery from the same result tables.
sys.source(file.path(work_dir, "build_quote30_p05_p95_gallery.R"),
           envir = new.env(parent = globalenv()))
cat("Preview written to:", output_dir, "\n")
