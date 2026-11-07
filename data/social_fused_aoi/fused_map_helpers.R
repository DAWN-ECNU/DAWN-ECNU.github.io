# 第五章融合AOI地图辅助函数，底图读取已有本地缓存。

interval_window <- function(boundary_display, pad = 1.20, aspect = 1.30) {
  bounds <- sf::st_bbox(boundary_display)
  centre_x <- mean(bounds[c("xmin", "xmax")])
  centre_y <- mean(bounds[c("ymin", "ymax")])
  height <- max(
    (bounds[["xmax"]] - bounds[["xmin"]]) / aspect,
    bounds[["ymax"]] - bounds[["ymin"]]
  ) * pad
  c(
    xmin = unname(centre_x - height * aspect / 2),
    xmax = unname(centre_x + height * aspect / 2),
    ymin = unname(centre_y - height / 2),
    ymax = unname(centre_y + height / 2)
  )
}

read_interval_basemap <- function(window, cache_dirs, opacity = 0.38, theme = "light") {
  half_world <- 20037508.342789244
  selected <- NULL
  for (zoom in c(12L, 11L, 10L)) {
    tile_span <- 2 * half_world / 2^zoom
    tile_x <- seq.int(
      floor((window[["xmin"]] + half_world) / tile_span),
      floor((window[["xmax"]] + half_world) / tile_span)
    )
    tile_y <- seq.int(
      floor((half_world - window[["ymax"]]) / tile_span),
      floor((half_world - window[["ymin"]]) / tile_span)
    )
    paths <- matrix(NA_character_, nrow = length(tile_y), ncol = length(tile_x))
    for (row in seq_along(tile_y)) {
      for (column in seq_along(tile_x)) {
        candidates <- file.path(
          cache_dirs,
          sprintf("%d_%d_%d.jpg", zoom, tile_x[column], tile_y[row])
        )
        available <- candidates[file.exists(candidates)]
        if (length(available)) paths[row, column] <- available[[1]]
      }
    }
    if (!anyNA(paths)) {
      selected <- list(
        zoom = zoom, tile_span = tile_span,
        tile_x = tile_x, tile_y = tile_y, paths = paths
      )
      break
    }
  }
  if (is.null(selected)) {
    return(list(
      image = NULL, paths = character(), zoom = NA_integer_,
      status = "Neutral fill. Complete local tile coverage unavailable."
    ))
  }
  mosaic <- array(
    0, dim = c(nrow(selected$paths) * 256L, ncol(selected$paths) * 256L, 3L)
  )
  for (row in seq_len(nrow(selected$paths))) {
    for (column in seq_len(ncol(selected$paths))) {
      tile <- jpeg::readJPEG(selected$paths[row, column])
      stopifnot(identical(dim(tile), c(256L, 256L, 3L)))
      rows <- (row - 1L) * 256L + seq_len(256L)
      columns <- (column - 1L) * 256L + seq_len(256L)
      mosaic[rows, columns, ] <- tile
    }
  }
  background <- as.numeric(grDevices::col2rgb(fused_palette$panel)) / 255
  for (channel in 1:3) {
    if (theme == "dark") {
      mosaic[, , channel] <- pmin(1, background[channel] + (1 - mosaic[, , channel]) * .36)
    } else {
      mosaic[, , channel] <- mosaic[, , channel] * opacity + background[channel] * (1 - opacity)
    }
  }
  span <- selected$tile_span
  list(
    image = grDevices::as.raster(mosaic),
    bounds = c(
      xmin = min(selected$tile_x) * span - half_world,
      xmax = (max(selected$tile_x) + 1) * span - half_world,
      ymin = half_world - (max(selected$tile_y) + 1) * span,
      ymax = half_world - min(selected$tile_y) * span
    ),
    paths = as.vector(selected$paths), zoom = selected$zoom,
    status = "Existing Esri Light Gray JPG cache", opacity = opacity
  )
}

interval_map_base <- function(window, basemap, boundary_display) {
  plot <- ggplot2::ggplot()
  if (!is.null(basemap$image)) {
    plot <- plot + ggplot2::annotation_raster(
      basemap$image,
      basemap$bounds[["xmin"]], basemap$bounds[["xmax"]],
      basemap$bounds[["ymin"]], basemap$bounds[["ymax"]]
    )
  } else {
    plot <- plot + ggplot2::geom_sf(
      data = boundary_display, fill = fused_palette$land, colour = NA
    )
  }
  plot
}

interval_graticule <- function(window) {
  frame <- sf::st_as_sfc(sf::st_bbox(
    window[c("xmin", "ymin", "xmax", "ymax")], crs = sf::st_crs(3857)
  ))
  geographic_bounds <- sf::st_bbox(sf::st_transform(frame, 4326))
  longitude <- pretty(unname(geographic_bounds[c("xmin", "xmax")]), n = 4)
  latitude <- pretty(unname(geographic_bounds[c("ymin", "ymax")]), n = 4)
  longitude <- longitude[longitude > geographic_bounds[["xmin"]] & longitude < geographic_bounds[["xmax"]]]
  latitude <- latitude[latitude > geographic_bounds[["ymin"]] & latitude < geographic_bounds[["ymax"]]]
  lines <- sf::st_graticule(frame, crs = sf::st_crs(3857), datum = sf::st_crs(4326),
    lon = longitude, lat = latitude)
  list(longitude = longitude, latitude = latitude, lines = lines)
}

interval_map_frame <- function(plot, window, boundary_display) {
  graticule <- interval_graticule(window)
  plot +
    ggplot2::geom_sf(data = graticule$lines, inherit.aes = FALSE,
      colour = fused_palette$graticule, linewidth = 0.22, alpha = 0.36,
      show.legend = FALSE) +
    ggplot2::geom_sf(
      data = boundary_display, fill = NA, colour = fused_palette$boundary_halo, linewidth = 1.65
    ) +
    ggplot2::geom_sf(
      data = boundary_display, fill = NA, colour = fused_palette$boundary, linewidth = 0.95
    ) +
    ggplot2::scale_x_continuous(breaks = graticule$longitude,
      labels = function(x) sprintf("%.2f\u00B0E", x)) +
    ggplot2::scale_y_continuous(breaks = graticule$latitude,
      labels = function(y) sprintf("%.2f\u00B0N", y)) +
    ggplot2::coord_sf(
      crs = sf::st_crs(3857), default_crs = sf::st_crs(3857),
      datum = sf::st_crs(4326),
      label_axes = list(bottom = "E", left = "N"),
      xlim = window[c("xmin", "xmax")],
      ylim = window[c("ymin", "ymax")], expand = FALSE
    ) +
    ggspatial::annotation_scale(
      location = "bl", width_hint = 0.23, style = "ticks",
      unit_category = "metric", line_col = fused_palette$ink, text_col = fused_palette$ink,
      text_family = "Arial", text_cex = 0.95, line_width = 0.55,
      pad_x = grid::unit(0.14, "in"), pad_y = grid::unit(0.16, "in")
    ) +
    ggspatial::annotation_north_arrow(
      location = "br", which_north = "true",
      height = grid::unit(0.45, "in"), width = grid::unit(0.39, "in"),
      pad_x = grid::unit(0.14, "in"), pad_y = grid::unit(0.14, "in"),
      style = ggspatial::north_arrow_fancy_orienteering(
        line_col = fused_palette$ink, fill = c(fused_palette$panel, fused_palette$ink),
        text_col = fused_palette$ink, text_family = "Arial", text_size = 11
      )
    ) +
    ggplot2::theme_minimal(base_family = "Arial", base_size = 15) +
    ggplot2::theme(
      panel.background = ggplot2::element_rect(fill = fused_palette$panel, colour = NA),
      plot.background = ggplot2::element_rect(fill = "transparent", colour = NA),
      panel.grid = ggplot2::element_blank(),
      panel.border = ggplot2::element_rect(fill = NA, colour = fused_palette$frame, linewidth = 0.45),
      axis.title = ggplot2::element_blank(),
      axis.text = ggplot2::element_text(colour = fused_palette$muted, size = 12),
      axis.ticks = ggplot2::element_line(colour = fused_palette$muted, linewidth = 0.35),
      plot.title = ggplot2::element_text(colour = fused_palette$ink, face = "bold", size = 16),
      plot.subtitle = ggplot2::element_text(colour = fused_palette$muted, size = 12),
      axis.ticks.length = grid::unit(2.5, "pt"),
      plot.margin = ggplot2::margin(8, 11, 8, 8),
      legend.title = ggplot2::element_text(size = 14),
      legend.text = ggplot2::element_text(size = 13)
    )
}

interval_png_dimensions <- function(file) {
  connection <- file(file, open = "rb")
  on.exit(close(connection))
  signature <- readBin(connection, "raw", n = 8L)
  stopifnot(identical(signature, as.raw(c(137, 80, 78, 71, 13, 10, 26, 10))))
  seek(connection, where = 16, origin = "start")
  dimensions <- readBin(connection, integer(), n = 2L, size = 4L, endian = "big")
  stats::setNames(dimensions, c("width", "height"))
}
