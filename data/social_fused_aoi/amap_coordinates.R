# GCJ-02坐标的本地数值转换，供候选边界对照使用。
# forward公式改写自wandergis/coordtransform，MIT，Copyright(c)2015 记忆的残骸。
# 来源 https://github.com/wandergis/coordtransform/blob/master/index.js
# 许可证见coordtransform_LICENSE.txt。逆解采用forward模型的迭代求根。
gcj_latitude_offset <- function(x, y) {
  offset <- -100 + 2 * x + 3 * y + .2 * y^2 + .1 * x * y + .2 * sqrt(abs(x))
  offset <- offset + (20 * sin(6 * x * pi) + 20 * sin(2 * x * pi)) * 2 / 3
  offset <- offset + (20 * sin(y * pi) + 40 * sin(y / 3 * pi)) * 2 / 3
  offset + (160 * sin(y / 12 * pi) + 320 * sin(y * pi / 30)) * 2 / 3
}
gcj_longitude_offset <- function(x, y) {
  offset <- 300 + x + 2 * y + .1 * x^2 + .1 * x * y + .1 * sqrt(abs(x))
  offset <- offset + (20 * sin(6 * x * pi) + 20 * sin(2 * x * pi)) * 2 / 3
  offset <- offset + (20 * sin(x * pi) + 40 * sin(x / 3 * pi)) * 2 / 3
  offset + (150 * sin(x / 12 * pi) + 300 * sin(x / 30 * pi)) * 2 / 3
}
wgs84_to_gcj02 <- function(coordinates) {
  coordinates <- as.matrix(coordinates)
  stopifnot(ncol(coordinates) == 2L, all(is.finite(coordinates)))
  longitude <- coordinates[, 1]
  latitude <- coordinates[, 2]
  inside <- longitude > 73.66 & longitude < 135.05 & latitude > 3.86 & latitude < 53.55
  x <- longitude - 105
  y <- latitude - 35
  radian_latitude <- latitude / 180 * pi
  eccentricity_squared <- .00669342162296594323
  major_axis <- 6378245
  magic <- 1 - eccentricity_squared * sin(radian_latitude)^2
  latitude_delta <- gcj_latitude_offset(x, y) * 180 /
    (major_axis * (1 - eccentricity_squared) / (magic * sqrt(magic)) * pi)
  longitude_delta <- gcj_longitude_offset(x, y) * 180 /
    (major_axis / sqrt(magic) * cos(radian_latitude) * pi)
  result <- coordinates
  result[inside, 1] <- longitude[inside] + longitude_delta[inside]
  result[inside, 2] <- latitude[inside] + latitude_delta[inside]
  result
}
gcj02_to_wgs84_approx <- function(coordinates, tolerance = 1e-10, max_iterations = 20L) {
  coordinates <- as.matrix(coordinates)
  guess <- coordinates
  for (iteration in seq_len(max_iterations)) {
    error <- wgs84_to_gcj02(guess) - coordinates
    if (max(abs(error)) <= tolerance) break
    guess <- guess - error
  }
  residual <- max(abs(wgs84_to_gcj02(guess) - coordinates))
  stopifnot(residual <= tolerance)
  list(coordinates = guess, iterations = iteration, max_forward_residual_degrees = residual)
}
