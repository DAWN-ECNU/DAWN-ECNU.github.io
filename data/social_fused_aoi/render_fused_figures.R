# 教师制图入口。先运行analysis_fused_aoi.R，再在第5章目录运行本脚本。
# Light/Dark图从同一份分析对象生成，数值、范围与分类保持一致。
invisible(Sys.setlocale("LC_CTYPE", ".UTF-8"))
suppressPackageStartupMessages({
  library(sf)
  library(terra)
  library(ggplot2)
  library(patchwork)
  library(dplyr)
})
chapter_dir <- normalizePath(".", winslash = "/")
asset_dir <- file.path(chapter_dir, "figures", "social-fused-aoi")
output_dir <- file.path(asset_dir, "output")
analysis_path <- file.path(output_dir, "results", "analysis.rds")
analysis_hash <- digest::digest(file = analysis_path, algo = "sha256")
analysis <- readRDS(analysis_path)
source(file.path(asset_dir, "fused_map_helpers.R"), local = environment(), encoding = "UTF-8")
boundaries <- st_transform(analysis$boundaries, 3857)
points <- st_transform(analysis$points, 3857)
aoi <- st_transform(analysis$aoi, 3857)
changes <- st_transform(analysis$changes, 3857)
trajectories <- st_transform(analysis$trajectories, 3857)
district_labels <- c(minhang = "Minhang", putuo = "Putuo")
years <- analysis$config$years
group_ids <- analysis$config$groups$group_id
cache_dirs <- file.path(chapter_dir, "cache", "map_tiles", c("weibo_light_gray", "esri_light_gray"))
boundary_dir <- file.path(chapter_dir, "data", "social_fused_aoi")
shanghai_districts <- st_read(file.path(boundary_dir, "shanghai_districts.geojson"), quiet = TRUE) %>%
  st_transform(3857)
shanghai_city <- st_read(file.path(boundary_dir, "shanghai_city.geojson"), quiet = TRUE) %>%
  st_transform(3857)
palettes <- list(
  light = list(background = "transparent", page = "#FFFFFF", panel = "#F3F3F2", land = "#E6E7E5",
    ink = "#29353A", muted = "#4A555D", boundary = "#265A68", boundary_halo = "#FFFFFF", frame = "#9BA6A8",
    graticule = "#788E95", points = "#1F7787", study_minhang = "#2F7E93", study_putuo = "#956A31",
    context = "#E1E4E2", context_line = "#8A989A", grid = "#D9DEDC",
    retained = "#8798A6", gained = "#259D84", lost = "#CE6D70",
    persistent = "#4467A3", fluctuating = "#BE8A27", minhang = "#2C70A4", putuo = "#1D7567"),
  dark = list(background = "transparent", page = "#211F25", panel = "#27262A", land = "#36363A",
    ink = "#F1EDF1", muted = "#CAC3CD", boundary = "#9FDEEB", boundary_halo = "#211F25", frame = "#817987",
    graticule = "#A8A1B0", points = "#70D2DD", study_minhang = "#71C8D6", study_putuo = "#E8BB78",
    context = "#343238", context_line = "#817C88", grid = "#514C57",
    retained = "#8299AD", gained = "#5AD1B6", lost = "#F299A0",
    persistent = "#8AB8FF", fluctuating = "#F0C25D", minhang = "#7EBBF4", putuo = "#6AD6BF")
)
assets <- list()
map_references <- list()
save_figure <- function(plot, filename, width, height) {
  path <- file.path(output_dir, figure_theme, paste0(filename, ".png"))
  dir.create(dirname(path), recursive = TRUE, showWarnings = FALSE)
  ggsave(path, plot, width = width, height = height, units = "px", dpi = 200,
    device = ragg::agg_png, bg = fused_palette$background, limitsize = FALSE)
  stopifnot(identical(as.integer(interval_png_dimensions(path)), as.integer(c(width, height))))
  assets[[length(assets) + 1L]] <<- list(file = paste0(figure_theme, "/", filename, ".png"),
    width = width, height = height, sha256 = digest::digest(file = path, algo = "sha256"))
  cat("Rendered ", figure_theme, "/", filename, "\n", sep = "")
}
map_frame <- function(plot, reference) {
  framed <- interval_map_frame(plot, reference$window, reference$boundary) +
    theme(
      legend.position = "bottom", legend.direction = "horizontal",
      legend.box = "horizontal", legend.background = element_rect(fill = "transparent", colour = NA),
      legend.key = element_rect(fill = "transparent", colour = NA),
      legend.title = element_text(colour = fused_palette$ink),
      legend.text = element_text(colour = fused_palette$ink),
      plot.title = element_text(size = 15, face = "bold"),
      plot.subtitle = element_text(size = 11))
  stopifnot(framed$coordinates$datum$epsg == 4326L,
    isTRUE(all.equal(unname(framed$coordinates$limits$x), unname(reference$window[c("xmin", "xmax")]))),
    isTRUE(all.equal(unname(framed$coordinates$limits$y), unname(reference$window[c("ymin", "ymax")]))))
  framed
}
annotation_theme <- function() theme(
  text = element_text(family = "Arial", colour = fused_palette$ink),
  plot.title = element_text(size = 24, face = "bold", colour = fused_palette$ink),
  plot.subtitle = element_text(size = 14, colour = fused_palette$muted),
  plot.caption = element_text(size = 12, hjust = 0, colour = fused_palette$muted),
  plot.background = element_rect(fill = "transparent", colour = NA),
  plot.margin = margin(13, 15, 13, 15))
chart_theme <- function() theme_minimal(base_family = "Arial", base_size = 17) +
  theme(text = element_text(colour = fused_palette$ink),
    axis.text = element_text(colour = fused_palette$muted),
    panel.grid.major = element_line(colour = fused_palette$grid),
    panel.grid.minor = element_blank(), panel.grid.major.x = element_blank(),
    strip.text = element_text(face = "bold", size = 17, colour = fused_palette$ink),
    plot.background = element_rect(fill = "transparent", colour = NA),
    panel.background = element_rect(fill = "transparent", colour = NA),
    legend.position = "none", plot.margin = margin(20, 25, 20, 20))

for (figure_theme in names(palettes)) {
  fused_palette <- palettes[[figure_theme]]
  # 1. 上海16区与两研究区定位。
  city_window <- interval_window(shanghai_districts, pad = 1.07)
  study_window <- interval_window(boundaries, pad = 1.16)
  # 地名位置仅用于制图，放在两区较宽的内部位置，并核对空间归属。
  labels <- st_as_sf(data.frame(slug = c("minhang", "putuo"),
    longitude = c(121.43, 121.40), latitude = c(31.03, 31.26)),
    coords = c("longitude", "latitude"), crs = 4326) %>% st_transform(3857)
  stopifnot(all(vapply(seq_len(nrow(labels)), function(index) {
    lengths(st_within(labels[index, ], boundaries[boundaries$slug == labels$slug[index], ])) == 1L
  }, logical(1))))
  labels$label <- unname(district_labels[labels$slug])
  study_colours <- c(Minhang = fused_palette$study_minhang, Putuo = fused_palette$study_putuo)
  locator_boundaries <- boundaries
  locator_boundaries$study_area <- factor(district_labels[locator_boundaries$slug], levels = c("Minhang", "Putuo"))
  study_scale <- scale_fill_manual(name = "Study area", values = study_colours,
    guide = guide_legend(nrow = 1, byrow = TRUE,
      override.aes = list(alpha = 1, colour = fused_palette$boundary, linewidth = 0.7)))
  neutral <- list(image = NULL)
  city_reference <- list(boundary = shanghai_city, window = city_window)
  study_reference <- list(boundary = boundaries, window = study_window)
  for (name in c("city", "study")) {
    locator_window <- if (name == "city") city_window else study_window
    coordinates <- interval_graticule(locator_window)
    map_references[[paste(figure_theme, name, sep = "_")]] <- list(window = locator_window,
      longitude_breaks = coordinates$longitude, latitude_breaks = coordinates$latitude,
      datum_epsg = 4326L, labelled_axes = c("bottom", "left"))
  }
  study_box <- st_as_sfc(st_bbox(study_window[c("xmin", "ymin", "xmax", "ymax")], crs = st_crs(3857)))
  city_plot <- interval_map_base(city_window, neutral, shanghai_city) +
    geom_sf(data = shanghai_districts, fill = fused_palette$context,
      colour = fused_palette$context_line, linewidth = .42) +
    geom_sf(data = locator_boundaries, aes(fill = study_area), colour = fused_palette$boundary_halo, linewidth = 1.65) +
    geom_sf(data = locator_boundaries, aes(fill = study_area), colour = fused_palette$boundary, linewidth = .95) +
    study_scale +
    geom_sf(data = study_box, fill = NA, colour = fused_palette$ink, linewidth = .5, linetype = "dashed") +
    labs(title = "Shanghai · 16 districts", subtitle = "Location of the two study areas")
  study_plot <- interval_map_base(study_window, neutral, shanghai_city) +
    geom_sf(data = shanghai_districts, fill = fused_palette$context,
      colour = fused_palette$context_line, linewidth = .45) +
    geom_sf(data = locator_boundaries, aes(fill = study_area), colour = fused_palette$boundary_halo, linewidth = 1.65) +
    geom_sf(data = locator_boundaries, aes(fill = study_area), colour = fused_palette$boundary, linewidth = .95) +
    study_scale +
    labs(title = "Study areas · Minhang and Putuo", subtitle = "Cached AMap district boundaries")
  framed_study <- map_frame(study_plot, study_reference) +
    geom_sf_label(data = labels, aes(label = label), colour = fused_palette$ink,
      fill = if (figure_theme == "light") "#FFFFFFEB" else "#211F25EB",
      family = "Arial", size = 5.3, fontface = "bold", linewidth = .25,
      label.padding = grid::unit(.18, "lines"), label.r = grid::unit(.12, "lines"))
  locator <- map_frame(city_plot, city_reference) + framed_study +
    plot_layout(ncol = 2, guides = "collect") + plot_annotation(theme = annotation_theme()) &
    theme(legend.position = "bottom", legend.direction = "horizontal",
      legend.title = element_text(colour = fused_palette$ink, size = 16, face = "bold"),
      legend.text = element_text(colour = fused_palette$ink, size = 16),
      legend.key.width = grid::unit(.30, "in"), legend.key.height = grid::unit(.18, "in"),
      legend.background = element_rect(fill = "transparent", colour = NA),
      legend.key = element_rect(fill = "transparent", colour = NA))
  save_figure(locator, "study_area", 2800L, 1500L)

  row_panels <- list(points = list(), kde = list(), aoi = list(), annual = list(), trajectories = list())
  for (slug in names(district_labels)) {
    boundary <- boundaries[boundaries$slug == slug, ]
    window <- interval_window(boundary, pad = 1.14)
    basemap <- read_interval_basemap(window, cache_dirs, theme = figure_theme)
    reference <- list(boundary = boundary, window = window)
    coordinates <- interval_graticule(window)
    map_references[[paste(figure_theme, slug, sep = "_")]] <- list(window = window,
      basemap = basemap$status, longitude_breaks = coordinates$longitude,
      latitude_breaks = coordinates$latitude, datum_epsg = 4326L,
      labelled_axes = c("bottom", "left"))
    rasters <- lapply(group_ids, function(id)
      terra::rast(analysis$surfaces[[paste(slug, id, sep = "_")]]$raster_relative_path))
    names(rasters) <- group_ids
    maximum <- max(vapply(rasters, function(raster)
      terra::global(raster, "max", na.rm = TRUE)[1, 1], numeric(1)))
    template <- terra::rast(xmin = window[["xmin"]], xmax = window[["xmax"]],
      ymin = window[["ymin"]], ymax = window[["ymax"]], ncols = 800, nrows = 620, crs = "EPSG:3857")
    by_kind <- list(points = list(), kde = list(), aoi = list())
    for (year in years) {
      points_year <- points[points$slug == slug & points$year == year, ]
      aoi_year <- aoi[aoi$slug == slug & aoi$year == year, ]
      raster_data <- as.data.frame(terra::project(rasters[[paste0("fused_", year)]],
        template, method = "near"), xy = TRUE, na.rm = TRUE)
      names(raster_data)[3] <- "relative"
      base <- interval_map_base(window, basemap, boundary)
      point_plot <- base + geom_sf(data = points_year, colour = fused_palette$points,
        size = .52, alpha = if (figure_theme == "light") .85 else .68, stroke = 0) +
        labs(title = paste(district_labels[[slug]], "·", year), subtitle = "12,000 pooled records")
      density_plot <- base + geom_raster(data = raster_data, aes(x, y, fill = relative), alpha = .92) +
        scale_fill_viridis_c(option = "inferno", limits = c(0, maximum),
          breaks = c(0, maximum / 2, maximum), labels = scales::label_number(accuracy = .001),
          name = paste(district_labels[[slug]], "relative KDE (km⁻²)"),
          guide = guide_colourbar(title.position = "top", title.hjust = .5,
            barwidth = grid::unit(68, "mm"), barheight = grid::unit(3, "mm"))) +
        labs(title = paste(district_labels[[slug]], "·", year),
          subtitle = "Automatic X/Y bandwidth; shared 75 m grid")
      aoi_plot <- density_plot + geom_sf(data = aoi_year, fill = NA, colour = "#15592A", linewidth = 1.0) +
        geom_sf(data = aoi_year, fill = NA, colour = "#83F5A5", linewidth = .6) +
        labs(subtitle = "AOI from one three-year P95 threshold")
      by_kind$points[[as.character(year)]] <- map_frame(point_plot, reference)
      by_kind$kde[[as.character(year)]] <- map_frame(density_plot, reference)
      by_kind$aoi[[as.character(year)]] <- map_frame(aoi_plot, reference)
    }
    for (kind in names(by_kind)) {
      row_panels[[kind]][[slug]] <- wrap_plots(by_kind[[kind]], ncol = 3, guides = "collect") &
        theme(legend.position = "bottom")
    }
    comparisons <- data.frame(from_year = c(2023L, 2024L, 2023L), to_year = c(2024L, 2025L, 2025L))
    annual_panels <- lapply(seq_len(nrow(comparisons)), function(index) {
      from_year <- comparisons$from_year[index]
      to_year <- comparisons$to_year[index]
      pieces <- changes[changes$slug == slug & changes$from_year == from_year & changes$to_year == to_year, ]
      pieces <- pieces[!st_is_empty(pieces), ]
      pieces$change_type <- factor(pieces$change_type, levels = c("retained", "gained", "lost"))
      plot <- interval_map_base(window, basemap, boundary) +
        geom_sf(data = pieces, aes(fill = change_type), colour = NA, alpha = .95) +
        scale_fill_manual(values = unlist(fused_palette[c("retained", "gained", "lost")]),
          labels = c("Retained", "Gained", "Lost"), drop = FALSE, name = NULL) +
        labs(title = paste(district_labels[[slug]], "·", from_year, "→", to_year),
          subtitle = "Geographic AOI footprint overlay")
      map_frame(plot, reference)
    })
    row_panels$annual[[slug]] <- wrap_plots(annual_panels, ncol = 3, guides = "collect")
    pieces <- trajectories[trajectories$slug == slug & trajectories$trajectory_type != "never", ]
    pieces <- pieces[!st_is_empty(pieces), ]
    pieces$trajectory_type <- factor(pieces$trajectory_type,
      levels = c("persistent", "entered", "exited", "fluctuating"))
    trajectory <- interval_map_base(window, basemap, boundary) +
      geom_sf(data = pieces, aes(fill = trajectory_type), colour = NA, alpha = .96) +
      scale_fill_manual(values = unlist(fused_palette[c("persistent", "gained", "lost", "fluctuating")]) %>%
          stats::setNames(c("persistent", "entered", "exited", "fluctuating")),
        labels = c("Persistent · 111", "Entered · 001/011", "Exited · 100/110", "Fluctuating · 010/101"),
        drop = FALSE, name = NULL,
        guide = guide_legend(nrow = 2, byrow = TRUE)) +
      labs(title = paste(district_labels[[slug]], "· Three-year AOI"),
        subtitle = "Membership in 2023 / 2024 / 2025")
    row_panels$trajectories[[slug]] <- map_frame(trajectory, reference)
  }
  for (kind in c("points", "kde", "aoi")) {
    plate <- wrap_plots(row_panels[[kind]], ncol = 1, guides = "keep") +
      plot_annotation(theme = annotation_theme())
    save_figure(plate, kind, 3300L, 2300L)
  }
  annual_plate <- wrap_plots(row_panels$annual, ncol = 1, guides = "collect") +
    plot_annotation(theme = annotation_theme()) & theme(legend.position = "bottom")
  save_figure(annual_plate, "annual_changes", 3500L, 2400L)
  trajectory_plate <- wrap_plots(row_panels$trajectories, ncol = 2, guides = "collect") +
    plot_annotation(theme = annotation_theme()) & theme(legend.position = "bottom")
  save_figure(trajectory_plate, "trajectories", 2900L, 1650L)

  # 2. 面积与范围交并比分别呈现，保留各区量级。
  summary <- analysis$summary
  summary$district <- factor(district_labels[summary$slug], levels = unname(district_labels))
  district_colours <- c(Minhang = fused_palette$minhang, Putuo = fused_palette$putuo)
  area_plot <- ggplot(summary, aes(year, aoi_area_km2, colour = district, group = district)) +
    geom_line(linewidth = 1.1) + geom_point(size = 3.8) +
    geom_text(aes(label = sprintf("%.2f", aoi_area_km2)), vjust = -1, size = 5, show.legend = FALSE) +
    scale_colour_manual(values = district_colours) + scale_x_continuous(breaks = years) +
    scale_y_continuous(limits = c(0, NA), expand = expansion(mult = c(0, .16))) +
    facet_wrap(~district, scales = "free_y") + labs(x = NULL, y = "AOI area (km²)") + chart_theme()
  save_figure(area_plot, "aoi_area", 2400L, 1100L)
  overlap <- analysis$annual_overlap
  overlap$district <- factor(district_labels[overlap$slug], levels = unname(district_labels))
  overlap$comparison <- factor(paste(overlap$from_year, overlap$to_year, sep = "–"),
    levels = c("2023–2024", "2024–2025", "2023–2025"))
  overlap_plot <- ggplot(overlap, aes(comparison, jaccard, fill = district)) +
    geom_col(width = .58, colour = fused_palette$ink, linewidth = .25) +
    geom_text(aes(label = sprintf("%.3f", jaccard)), vjust = -.45, size = 5, colour = fused_palette$ink) +
    scale_fill_manual(values = district_colours) +
    scale_y_continuous(limits = c(0, 1), expand = expansion(mult = c(0, .03))) +
    facet_wrap(~district) + labs(x = NULL, y = "AOI intersection / union") + chart_theme()
  save_figure(overlap_plot, "annual_overlap", 2600L, 1100L)
}
stopifnot(digest::digest(file = analysis_path, algo = "sha256") == analysis_hash)
jsonlite::write_json(list(analysis_sha256 = analysis_hash,
  render_script_sha256 = digest::digest(file = file.path(asset_dir, "render_fused_figures.R"), algo = "sha256"),
  map_helper_sha256 = digest::digest(file = file.path(asset_dir, "fused_map_helpers.R"), algo = "sha256"),
  map_elements = list(display_crs = 3857L, graticule_crs = 4326L,
    coordinate_labels = "Longitude east and latitude north, visible on bottom and left axes",
    north_arrow = "True north, fancy orienteering; 0.45 by 0.39 inches",
    scale_bar = "Metric, tick style, bottom left",
    study_legend = c("Minhang", "Putuo"),
    district_boundary_linewidth_mm = 0.95, district_boundary_halo_mm = 1.65,
    png_canvas = "Transparent; neutral map panels and theme-aware text"),
  assets = assets,
  map_references = map_references, palettes = palettes, font = "Arial"),
  file.path(output_dir, "plot_manifest.json"), pretty = TRUE, auto_unbox = TRUE)
