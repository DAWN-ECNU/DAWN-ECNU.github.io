# 高德底图纠偏探针：只改变底图采样，不修改分析数据的坐标。
# 正向WGS84→GCJ-02公式核对来源：
# https://github.com/wandergis/coordTransform_py/blob/master/coordTransform_utils.py
# 此处按每个输出像素的真实WGS84位置，找到高德底图中的对应GCJ-02像素。
# 不把GCJ-02直接声明为EPSG:4326后与真实WGS84要素叠加。

wgs84_to_gcj02 <- function(longitude, latitude) {
  a <- 6378245.0
  ee <- 0.00669342162296594323
  x <- longitude - 105
  y <- latitude - 35
  dlat <- -100 + 2 * x + 3 * y + 0.2 * y^2 + 0.1 * x * y +
    0.2 * sqrt(abs(x))
  dlat <- dlat + (20 * sin(6 * x * pi) + 20 * sin(2 * x * pi)) * 2 / 3 +
    (20 * sin(y * pi) + 40 * sin(y * pi / 3)) * 2 / 3 +
    (160 * sin(y * pi / 12) + 320 * sin(y * pi / 30)) * 2 / 3
  dlon <- 300 + x + 2 * y + 0.1 * x^2 + 0.1 * x * y +
    0.1 * sqrt(abs(x))
  dlon <- dlon + (20 * sin(6 * x * pi) + 20 * sin(2 * x * pi)) * 2 / 3 +
    (20 * sin(x * pi) + 40 * sin(x * pi / 3)) * 2 / 3 +
    (150 * sin(x * pi / 12) + 300 * sin(x * pi / 30)) * 2 / 3
  radlat <- latitude / 180 * pi
  magic <- 1 - ee * sin(radlat)^2
  sqrt_magic <- sqrt(magic)
  dlat <- dlat * 180 / ((a * (1 - ee)) / (magic * sqrt_magic) * pi)
  dlon <- dlon * 180 / (a / sqrt_magic * cos(radlat) * pi)
  inside <- longitude >= 72.004 & longitude <= 137.8347 &
    latitude >= 0.8293 & latitude <= 55.8271
  cbind(
    longitude = longitude + ifelse(inside, dlon, 0),
    latitude = latitude + ifelse(inside, dlat, 0)
  )
}

amap_corrected_raster <- function(
    window, zoom, cache_dir, target_crs = 32651, output_width = 1100L) {
  stopifnot(
    all(c("xmin", "xmax", "ymin", "ymax") %in% names(window)),
    zoom >= 1, zoom <= 18
  )
  dir.create(cache_dir, recursive = TRUE, showWarnings = FALSE)
  tile_dir <- file.path(cache_dir, "amap_style_7")
  warp_dir <- file.path(cache_dir, "amap_corrected")
  dir.create(tile_dir, recursive = TRUE, showWarnings = FALSE)
  dir.create(warp_dir, recursive = TRUE, showWarnings = FALSE)
  cache_key <- digest::digest(list(
    version = "gcj_forward_bilinear_v1", window = window,
    zoom = zoom, crs = target_crs, width = output_width
  ))
  image_path <- file.path(warp_dir, paste0(cache_key, ".png"))
  if (file.exists(image_path)) {
    return(list(image = png::readPNG(image_path), window = window, path = image_path))
  }

  # 输出格心始终处在实际的米制投影中。仅底图的取样位置转换为GCJ-02。
  output_height <- max(1L, as.integer(round(
    output_width * (window["ymax"] - window["ymin"]) /
      (window["xmax"] - window["xmin"])
  )))
  dx <- (window["xmax"] - window["xmin"]) / output_width
  dy <- (window["ymax"] - window["ymin"]) / output_height
  xs <- seq(window["xmin"] + dx / 2, window["xmax"] - dx / 2,
            length.out = output_width)
  ys <- seq(window["ymax"] - dy / 2, window["ymin"] + dy / 2,
            length.out = output_height)
  projected <- as.matrix(expand.grid(x = xs, y = ys))
  longitude_latitude <- sf::sf_project(
    from = sf::st_crs(target_crs)$wkt,
    to = sf::st_crs(4326)$wkt,
    pts = projected
  )
  gcj <- wgs84_to_gcj02(longitude_latitude[, 1], longitude_latitude[, 2])
  # XYZ栅格坐标：原点在左上，x向右、y向下；瓦片像素中心位于0.5。
  px <- (gcj[, 1] + 180) / 360 * 2^zoom * 256
  py <- (1 - asinh(tan(gcj[, 2] * pi / 180)) / pi) / 2 * 2^zoom * 256
  tile_x <- seq(floor((min(px) - 1) / 256), floor((max(px) + 1) / 256))
  tile_y <- seq(floor((min(py) - 1) / 256), floor((max(py) + 1) / 256))
  source_width <- length(tile_x) * 256L
  source_height <- length(tile_y) * 256L
  mosaic <- array(1, dim = c(source_height, source_width, 3L))
  for (ix in seq_along(tile_x)) {
    for (iy in seq_along(tile_y)) {
      tile_path <- file.path(
        tile_dir, sprintf("%d_%d_%d.png", zoom, tile_x[ix], tile_y[iy])
      )
      if (!file.exists(tile_path)) {
        tile_url <- sprintf(paste0(
          "https://wprd01.is.autonavi.com/appmaptile?x=%d&y=%d&z=%d",
          "&lang=zh_cn&size=1&scl=1&style=7&ext=.png"
        ), tile_x[ix], tile_y[iy], zoom)
        utils::download.file(tile_url, tile_path, mode = "wb", quiet = TRUE)
      }
      tile <- png::readPNG(tile_path)
      if (length(dim(tile)) == 2L) tile <- array(rep(tile, 3), dim = c(256, 256, 3))
      rows <- (iy - 1L) * 256L + seq_len(256L)
      cols <- (ix - 1L) * 256L + seq_len(256L)
      mosaic[rows, cols, ] <- tile[, , 1:3, drop = FALSE]
    }
  }

  # 双线性插值只平滑底图的像素，不平滑或重估KDE。
  sx <- px - min(tile_x) * 256 + 0.5
  sy <- py - min(tile_y) * 256 + 0.5
  x0 <- floor(sx)
  y0 <- floor(sy)
  fx <- sx - x0
  fy <- sy - y0
  stopifnot(min(x0) >= 1, max(x0) < source_width,
            min(y0) >= 1, max(y0) < source_height)
  i00 <- y0 + (x0 - 1L) * source_height
  i10 <- y0 + x0 * source_height
  i01 <- y0 + 1L + (x0 - 1L) * source_height
  i11 <- y0 + 1L + x0 * source_height
  image <- array(NA_real_, dim = c(output_height, output_width, 3L))
  for (channel in seq_len(3L)) {
    source <- mosaic[, , channel]
    sampled <- (1 - fx) * (1 - fy) * source[i00] +
      fx * (1 - fy) * source[i10] +
      (1 - fx) * fy * source[i01] + fx * fy * source[i11]
    image[, , channel] <- matrix(
      sampled, nrow = output_height, ncol = output_width, byrow = TRUE
    )
  }
  png::writePNG(image, target = image_path)
  list(image = image, window = window, path = image_path)
}

amap_corrected_layer <- function(raster, alpha = 0.4) {
  # 固定透明度体现在RGB与白底的混合中，避免annotation_raster版本差异。
  faded_image <- raster$image * alpha + (1 - alpha)
  ggplot2::annotation_raster(
    raster = faded_image,
    xmin = raster$window["xmin"], xmax = raster$window["xmax"],
    ymin = raster$window["ymin"], ymax = raster$window["ymax"],
    interpolate = FALSE
  )
}
