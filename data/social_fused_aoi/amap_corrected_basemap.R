# 高德底图坐标匹配：只调整底图采样，不修改分析坐标。
# 正向WGS84→GCJ-02公式核对来源：
# https://github.com/wandergis/coordTransform_py/blob/master/coordTransform_utils.py
# MIT Copyright (c) 2015 记忆的残骸，发布包许可全文见同目录coordtransform_LICENSE.txt。
# 栅格反向取样沿用本课程weibo-multidistrict/amap_corrected_basemap.R。
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

valid_amap_tile <- function(path) {
  if (!file.exists(path)) return(FALSE)
  tryCatch({
    size <- dim(png::readPNG(path))
    identical(as.integer(size[1:2]), c(256L, 256L)) &&
      (length(size) == 2L || size[3] %in% c(3L, 4L))
  }, error = function(error) FALSE)
}

promote_amap_cache <- function(temporary_path, path) {
  if (file.exists(path)) unlink(path)
  if (!file.rename(temporary_path, path)) {
    if (!file.exists(path) || digest::digest(file = path, algo = "sha256") !=
        digest::digest(file = temporary_path, algo = "sha256")) {
      stop("高德底图派生缓存写入失败 ", basename(path))
    }
    unlink(temporary_path)
  }
}

amap_corrected_raster <- function(
    window, zoom, cache_dir, target_crs = 3857L, output_width = 1600L) {
  dir.create(cache_dir, recursive = TRUE, showWarnings = FALSE)
  tile_dir <- file.path(cache_dir, "amap_style_7")
  warp_dir <- file.path(cache_dir, "amap_corrected")
  dir.create(tile_dir, recursive = TRUE, showWarnings = FALSE)
  dir.create(warp_dir, recursive = TRUE, showWarnings = FALSE)
  cache_key <- digest::digest(list(
    version = "gcj_forward_bilinear_locator_v2", window = window,
    zoom = zoom, crs = target_crs, width = output_width
  ))
  image_path <- file.path(warp_dir, paste0(cache_key, ".png"))
  metadata_path <- file.path(warp_dir, paste0(cache_key, ".json"))
  output_height <- max(1L, as.integer(round(
    output_width * (window["ymax"] - window["ymin"]) /
      (window["xmax"] - window["xmin"])
  )))
  if (file.exists(image_path) && file.exists(metadata_path)) {
    cached <- tryCatch({
      metadata <- jsonlite::read_json(metadata_path, simplifyVector = TRUE)
      image <- png::readPNG(image_path)
      valid <- is.data.frame(metadata$tiles) && nrow(metadata$tiles) > 0L &&
        identical(as.integer(dim(image)), c(output_height, output_width, 3L)) &&
        digest::digest(file = image_path, algo = "sha256") == metadata$image_sha256 &&
        all(vapply(metadata$tiles$path, valid_amap_tile, logical(1))) &&
        all(vapply(metadata$tiles$path, function(path) {
          digest::digest(file = path, algo = "sha256")
        }, character(1)) == metadata$tiles$sha256)
      if (valid) list(image = image, window = window,
        path = image_path, metadata = metadata) else NULL
    }, error = function(error) NULL)
    if (!is.null(cached)) return(cached)
  }

  # 输出格心始终处在实际的米制投影中。仅底图的取样位置转换为GCJ-02。
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
  tile_records <- list()
  for (ix in seq_along(tile_x)) {
    for (iy in seq_along(tile_y)) {
      tile_path <- file.path(
        tile_dir, sprintf("%d_%d_%d.png", zoom, tile_x[ix], tile_y[iy])
      )
      if (!valid_amap_tile(tile_path)) {
        tile_url <- sprintf(paste0(
          "https://wprd01.is.autonavi.com/appmaptile?x=%d&y=%d&z=%d",
          "&lang=zh_cn&size=1&scl=1&style=7&ext=.png"
        ), tile_x[ix], tile_y[iy], zoom)
        temporary_path <- tempfile(pattern = paste0(basename(tile_path), "."),
          tmpdir = tile_dir, fileext = ".part")
        for (attempt in 1:3) {
          success <- tryCatch({
            handle <- curl::new_handle(connecttimeout = 15, timeout = 45,
              useragent = "ECNU R course mapping")
            curl::curl_download(tile_url, temporary_path, handle = handle, quiet = TRUE)
            valid_amap_tile(temporary_path)
          }, error = function(error) FALSE)
          if (success) break
          Sys.sleep(attempt)
        }
        if (!success) {
          unlink(temporary_path)
          stop("高德底图瓦片下载或校验失败 ", basename(tile_path))
        }
        promote_amap_cache(temporary_path, tile_path)
        stopifnot(valid_amap_tile(tile_path))
      }
      tile <- png::readPNG(tile_path)
      if (length(dim(tile)) == 2L) tile <- array(rep(tile, 3), dim = c(256, 256, 3))
      rows <- (iy - 1L) * 256L + seq_len(256L)
      cols <- (ix - 1L) * 256L + seq_len(256L)
      mosaic[rows, cols, ] <- tile[, , 1:3, drop = FALSE]
      tile_records[[length(tile_records) + 1L]] <- data.frame(
        zoom = zoom, tile_x = tile_x[ix], tile_y = tile_y[iy], path = tile_path,
        sha256 = digest::digest(file = tile_path, algo = "sha256"))
    }
  }

  # 双线性插值只平滑底图的像素，不平滑或重估KDE。
  sx <- px - min(tile_x) * 256 + 0.5
  sy <- py - min(tile_y) * 256 + 0.5
  x0 <- floor(sx)
  y0 <- floor(sy)
  fx <- sx - x0
  fy <- sy - y0
  stopifnot(all(is.finite(sx)), all(is.finite(sy)),
    min(x0) >= 1L, max(x0) + 1L <= source_width,
    min(y0) >= 1L, max(y0) + 1L <= source_height,
    min(fx) >= 0, max(fx) <= 1, min(fy) >= 0, max(fy) <= 1)
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
  stopifnot(all(is.finite(image)), min(image) >= 0, max(image) <= 1)
  temporary_image_path <- tempfile(pattern = paste0(cache_key, "."),
    tmpdir = warp_dir, fileext = ".png")
  temporary_metadata_path <- tempfile(pattern = paste0(cache_key, "."),
    tmpdir = warp_dir, fileext = ".json")
  on.exit(unlink(c(temporary_image_path, temporary_metadata_path)), add = TRUE)
  png::writePNG(image, target = temporary_image_path)
  stopifnot(identical(dim(png::readPNG(temporary_image_path)), dim(image)))
  controls <- data.frame(control = c("shanghai_center", "shanghai_southwest",
    "shanghai_north", "beijing", "outside_china"),
    longitude = c(121.47, 121.35, 121.60, 116.397, 0),
    latitude = c(31.23, 31.05, 31.50, 39.908, 0))
  control_gcj <- wgs84_to_gcj02(controls$longitude, controls$latitude)
  controls$gcj_longitude <- control_gcj[, 1]
  controls$gcj_latitude <- control_gcj[, 2]
  metadata <- list(provider = "AMap style 7", native_coordinate_system = "GCJ-02",
    output_crs = sf::st_crs(target_crs)$epsg, window = window,
    zoom = zoom, output_width = output_width, output_height = output_height,
    sampling = "WGS84 output pixel centre -> forward GCJ-02 -> source tile bilinear interpolation",
    source_origin = "XYZ upper left; source pixel centres at global integer + 0.5",
    source_pixel_x_range = range(px), source_pixel_y_range = range(py),
    sample_coordinates_finite = TRUE, bilinear_fraction_range = range(c(fx, fy)),
    image_channel_range = range(image), control_points = controls,
    tiles = dplyr::bind_rows(tile_records), image_path = image_path,
    image_sha256 = digest::digest(file = temporary_image_path, algo = "sha256"),
    limitation = "Public approximate coordinate conversion; background pixels only")
  jsonlite::write_json(metadata, temporary_metadata_path,
    pretty = TRUE, auto_unbox = TRUE, digits = 15)
  stopifnot(jsonlite::read_json(temporary_metadata_path)$image_sha256 == metadata$image_sha256)
  promote_amap_cache(temporary_image_path, image_path)
  promote_amap_cache(temporary_metadata_path, metadata_path)
  list(image = png::readPNG(image_path), window = window, path = image_path,
    metadata = metadata)
}

amap_themed_basemap <- function(raster, theme, alpha, panel_colour) {
  stopifnot(theme %in% c("light", "dark"), alpha >= 0, alpha <= 1)
  image <- raster$image
  background <- as.numeric(grDevices::col2rgb(panel_colour)) / 255
  if (theme == "dark") {
    # 明度反转与原色度分开处理，绿地仍保留绿色，文字对比受上限约束。
    luminance <- .2126 * image[, , 1] + .7152 * image[, , 2] + .0722 * image[, , 3]
    contrast <- pmin(1 - luminance, .45) * .38
    for (channel in 1:3) {
      chroma <- image[, , channel] - luminance
      image[, , channel] <- pmin(1, pmax(0,
        background[channel] + contrast + chroma * .80))
    }
  }
  for (channel in 1:3) {
    image[, , channel] <- image[, , channel] * alpha + background[channel] * (1 - alpha)
  }
  list(image = grDevices::as.raster(image), bounds = raster$window,
    paths = raster$metadata$tiles$path, zoom = raster$metadata$zoom,
    status = "AMap style 7, GCJ-02 pixel sampling corrected to WGS84/EPSG:3857",
    alpha = alpha, metadata = raster$metadata)
}
