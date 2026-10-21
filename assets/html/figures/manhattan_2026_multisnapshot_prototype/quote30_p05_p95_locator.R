# Manhattan study-area map and New York City's five-borough locator.
# Run with Rscript, or source this file from any working directory.
# The locator is contextual; all distance/area analysis stays in a metric CRS.

local({
  Sys.setlocale("LC_CTYPE", ".UTF-8")
  source_files <- vapply(sys.frames(), function(frame) {
    if (is.null(frame$ofile)) "" else as.character(frame$ofile)[1]
  }, character(1))
  source_files <- source_files[nzchar(source_files)]
  script_arg <- sub("^--file=", "", grep("^--file=", commandArgs(FALSE),
                                       value = TRUE))
  locator_path <- if (length(source_files)) {
    tail(source_files, 1)
  } else if (length(script_arg)) {
    script_arg[1]
  } else {
    file.path(getwd(), "quote30_p05_p95_locator.R")
  }
  locator_dir <- dirname(normalizePath(locator_path, mustWork = TRUE))
  local_lib <- file.path(locator_dir, "R_library")
  if (dir.exists(local_lib)) .libPaths(c(local_lib, .libPaths()))
  suppressPackageStartupMessages({
    library(sf)
    library(ggplot2)
    library(ggspatial)
  })
  font_family <- "sans"
  output_dir <- file.path(locator_dir, "output", "quote30_p05_p95_preview_20261016")
  dir.create(output_dir, recursive = TRUE, showWarnings = FALSE)

  # 1. 保留研究区原始边界；纽约五区仅作为定位参照。
  main_island <- st_transform(st_read(file.path(locator_dir, "data",
    "manhattan_main_island_original_boundary.gpkg"), quiet = TRUE), 4326)
  nyc_boroughs <- st_transform(st_read(file.path(locator_dir, "data",
    "nyc-borough-boundaries-20261015.geojson"), quiet = TRUE), 4326)
  borough_order <- c("Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island")
  stopifnot(nrow(main_island) == 1L, all(st_is_valid(main_island)),
            nrow(nyc_boroughs) == 5L,
            setequal(nyc_boroughs$boroname, borough_order))

  # 编号锚点在 EPSG:2263 中从各区最大陆地多边形内部求得，避开离岛与水域。
  borough_metric <- st_transform(nyc_boroughs, 2263)
  label_list <- lapply(seq_along(borough_order), function(i) {
    one_borough <- borough_metric[borough_metric$boroname == borough_order[i], ]
    parts <- suppressWarnings(st_cast(st_geometry(one_borough), "POLYGON"))
    largest_part <- parts[which.max(as.numeric(st_area(parts)))]
    label_point <- st_point_on_surface(largest_part)
    stopifnot(lengths(st_within(label_point, largest_part)) == 1L,
              lengths(st_within(label_point, one_borough)) == 1L)
    st_sf(number = as.character(i), borough = borough_order[i],
          geometry = label_point)
  })
  borough_labels <- st_transform(do.call(rbind, label_list), 4326)
  label_xy <- st_coordinates(borough_labels)
  label_audit <- data.frame(number = borough_labels$number,
                            borough = borough_labels$borough,
                            longitude = label_xy[, 1], latitude = label_xy[, 2],
                            within_largest_polygon = TRUE)
  write.csv(label_audit, file.path(output_dir, "locator_label_positions.csv"),
            row.names = FALSE, fileEncoding = "UTF-8")

  # 2. 主图与定位附图都用 WGS84 显示，保证经纬网横平竖直、上北下南。
  x_limits <- c(-74.055, -73.895)
  y_limits <- c(40.690, 40.885)
  main_frame <- st_as_sfc(st_bbox(c(xmin = x_limits[1], ymin = y_limits[1],
    xmax = x_limits[2], ymax = y_limits[2]), crs = st_crs(4326)))
  main_graticule <- st_graticule(main_frame, crs = st_crs(4326),
    datum = st_crs(4326), lon = seq(-74.04, -73.90, by = 0.02),
    lat = seq(40.70, 40.88, by = 0.02))
  locator_x <- c(-74.29, -73.68)
  locator_y <- c(40.47, 40.94)
  locator_frame <- st_as_sfc(st_bbox(c(xmin = locator_x[1], ymin = locator_y[1],
    xmax = locator_x[2], ymax = locator_y[2]), crs = st_crs(4326)))
  locator_graticule <- st_graticule(locator_frame, crs = st_crs(4326),
    datum = st_crs(4326), lon = c(-74.2, -74.0, -73.8),
    lat = c(40.5, 40.7, 40.9))
  stopifnot(sum(locator_graticule$type == "E") == 3L,
            sum(locator_graticule$type == "N") == 3L)

  tile_cache <- file.path(tempdir(), "manhattan_esri_gray_locator")
  dir.create(tile_cache, recursive = TRUE, showWarnings = FALSE)
  rosm::register_tile_source(esri_gray_locator = rosm::as.tile_source(
    paste0("https://server.arcgisonline.com/ArcGIS/rest/services/",
      "Canvas/World_Light_Gray_Base/MapServer/tile/${z}/${y}/${x}"),
    attribution = paste("Esri, HERE, Garmin, \u00A9 OpenStreetMap contributors,",
      "and the GIS User Community"), extension = "jpg", max_zoom = 16))
  study_fill <- "#388AA0"
  longitude_labels <- function(x) sprintf("%.1f\u00B0W", abs(x))
  latitude_labels <- function(y) sprintf("%.1f\u00B0N", y)

  # 附图使用显式网格，五区编号在图内；地名 key 单独置于附图下方。
  locator <- ggplot() +
    geom_sf(data = nyc_boroughs, fill = "#E3EAEB", colour = "#8FA8B0",
            linewidth = 0.19) +
    geom_sf(data = main_island, fill = study_fill, colour = "#176B84",
            linewidth = 0.38) +
    geom_sf(data = locator_graticule, colour = "#718E9A", alpha = 0.55,
            linewidth = 0.23) +
    geom_sf_label(data = borough_labels, aes(label = number),
      fun.geometry = function(x) x,
      size = 2.6, fontface = "bold", family = font_family,
      colour = "#263F4C", fill = "#FFFFFFEB", linewidth = 0.16,
      label.padding = grid::unit(0.10, "lines"),
      label.r = grid::unit(0.08, "lines")) +
    scale_x_continuous(breaks = c(-74.2, -74.0, -73.8),
                        labels = longitude_labels) +
    scale_y_continuous(breaks = c(40.5, 40.7, 40.9), labels = latitude_labels) +
    coord_sf(crs = st_crs(4326), default_crs = st_crs(4326),
      datum = st_crs(4326), xlim = locator_x, ylim = locator_y, expand = FALSE) +
    annotation_scale(location = "br", width_hint = 0.22, style = "ticks",
      unit_category = "metric", line_width = 0.45, text_cex = 0.61,
      pad_x = grid::unit(0.08, "in"), pad_y = grid::unit(0.26, "in")) +
    labs(title = "NEW YORK CITY", subtitle = "Five boroughs") +
    theme_minimal(base_family = font_family) +
    theme(panel.grid = element_blank(), axis.title = element_blank(),
      axis.text = element_text(size = 6.5, colour = "#526A76"),
      axis.ticks = element_line(colour = "#82939A", linewidth = 0.25),
      axis.ticks.length = grid::unit(1.5, "pt"),
      panel.background = element_rect(fill = "#F4F8F8", colour = NA),
      panel.border = element_rect(fill = NA, colour = "#8DA7AE", linewidth = 0.4),
      plot.background = element_rect(fill = "white", colour = NA),
      plot.title = element_text(size = 10, face = "bold", colour = "#2E5364",
        margin = margin(b = 1)),
      plot.subtitle = element_text(size = 8, colour = "#486B77", margin = margin(b = 4)),
      plot.margin = margin(3, 3, 3, 3))

  map <- ggplot() +
    annotation_map_tile(type = "esri_gray_locator", zoom = 12, alpha = 0.55,
      cachedir = tile_cache, quiet = TRUE) +
    geom_sf(data = main_graticule, colour = "#688B98", alpha = 0.43,
            linewidth = 0.22) +
    geom_sf(data = main_island, aes(fill = "Manhattan main island"),
      alpha = 0.20, colour = "#1E667D", linewidth = 0.76) +
    # 比例尺的小衬底遮住穿过文字的经纬线，位置在研究主岛以外。
    annotate("rect", xmin = -74.054, xmax = -74.010,
      ymin = 40.691, ymax = 40.699, fill = "white", alpha = 0.90,
      colour = NA) +
    scale_fill_manual(name = "Study area",
      values = c("Manhattan main island" = study_fill),
      guide = guide_legend(override.aes = list(alpha = 0.5, linewidth = 0.7))) +
    scale_x_continuous(breaks = seq(-74.04, -73.90, by = 0.04),
      labels = function(x) sprintf("%.2f\u00B0W", abs(x))) +
    scale_y_continuous(breaks = seq(40.70, 40.88, by = 0.04),
      labels = function(y) sprintf("%.2f\u00B0N", y)) +
    coord_sf(crs = st_crs(4326), default_crs = st_crs(4326),
      datum = st_crs(4326), xlim = x_limits, ylim = y_limits, expand = FALSE) +
    annotation_scale(location = "bl", width_hint = 0.19, style = "ticks",
      unit_category = "metric", line_width = 0.55, text_cex = 0.9,
      pad_x = grid::unit(0.20, "in"), pad_y = grid::unit(0.23, "in")) +
    annotation_north_arrow(location = "br", which_north = "true",
      height = grid::unit(0.57, "in"), width = grid::unit(0.49, "in"),
      pad_x = grid::unit(0.19, "in"), pad_y = grid::unit(0.18, "in"),
      style = north_arrow_fancy_orienteering(line_col = "#29434E",
        fill = c("white", "#29434E"), text_col = "#29434E",
        text_family = font_family, text_size = 11)) +
    labs(title = "Manhattan study area", subtitle = "New York City | main island",
      caption = paste0("Tiles: Esri, HERE, Garmin, \u00A9 OpenStreetMap contributors, GIS User Community\n",
        "Boundaries: NYC / NYC Planning")) +
    theme_minimal(base_family = font_family, base_size = 11) +
    theme(panel.grid = element_blank(), axis.title = element_blank(),
      axis.text = element_text(size = 9.2, colour = "#52646C"),
      axis.ticks = element_line(colour = "#82939A", linewidth = 0.30),
      axis.ticks.length = grid::unit(2.5, "pt"),
      panel.background = element_rect(fill = "#F0F3F3", colour = NA),
      panel.border = element_rect(fill = NA, colour = "#CAD2D5", linewidth = 0.35),
      plot.background = element_rect(fill = "white", colour = NA),
      plot.title = element_text(size = 14, face = "bold", colour = "#263841"),
      plot.subtitle = element_text(size = 9.8, colour = "#566A72", margin = margin(b = 6)),
      plot.caption = element_text(size = 8.1, colour = "#53656D", hjust = 0,
        lineheight = 1.15, margin = margin(t = 9)),
      legend.position = "right", legend.direction = "vertical",
      legend.title.position = "top",
      legend.title = element_text(size = 10, face = "bold", colour = "#33474F"),
      legend.text = element_text(size = 9.2, colour = "#445860"),
      legend.key.size = grid::unit(0.28, "in"),
      plot.margin = margin(10, 13, 12, 13))

  # 3. 主地图占主要画面；定位图与说明置于右侧，不盖住研究区。
  study_legend <- cowplot::get_legend(map)
  figure <- cowplot::ggdraw() +
    cowplot::draw_plot(map + theme(legend.position = "none"),
      x = 0.005, y = 0, width = 0.69, height = 1) +
    cowplot::draw_plot(locator, x = 0.70, y = 0.565, width = 0.295, height = 0.355) +
    cowplot::draw_label("Borough key", x = 0.735, y = 0.550,
      hjust = 0, vjust = 1, size = 10, fontface = "bold", fontfamily = font_family,
      colour = "#33474F") +
    cowplot::draw_label(paste0(seq_along(borough_order), "  ", borough_order,
      collapse = "\n"), x = 0.735, y = 0.520, hjust = 0, vjust = 1,
      size = 9.2, lineheight = 1.35, fontfamily = font_family, colour = "#445860") +
    cowplot::draw_grob(study_legend, x = 0.72, y = 0.305, width = 0.275, height = 0.10)

  ggsave(file.path(output_dir, "01_study_area.png"), plot = figure,
    width = 8.8, height = 9.1, units = "in", dpi = 200,
    device = ragg::agg_png, bg = "white")
  ggsave(file.path(output_dir, "01_study_area.pdf"), plot = figure,
    width = 8.8, height = 9.1, units = "in", device = grDevices::cairo_pdf, bg = "white")
  message("Updated study-area locator: ", output_dir)
})
