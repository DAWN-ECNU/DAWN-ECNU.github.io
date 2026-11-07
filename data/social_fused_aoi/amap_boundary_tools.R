# 高德行政区查询的选学辅助函数。正常课程分析直接读取已缓存GeoJSON。
# 调用前加载amap_coordinates.R。凭据通过AMAP_WEB_KEY环境变量提供。
amap_request_district <- function(adcode, subdistrict, api_key) {
  endpoint <- "https://restapi.amap.com/v3/config/district"
  parameters <- c(key = api_key, keywords = adcode, subdistrict = subdistrict,
    extensions = "all", filter = "310000", output = "JSON")
  query <- paste(names(parameters), vapply(parameters, utils::URLencode,
    character(1), reserved = TRUE), sep = "=", collapse = "&")
  response <- tryCatch(withCallingHandlers(
    curl::curl_fetch_memory(paste0(endpoint, "?", query),
      handle = curl::new_handle(timeout = 60, connecttimeout = 20)),
    warning = function(warning) invokeRestart("muffleWarning")),
    error = function(error) NULL)
  if (is.null(response)) stop("行政区域查询网络错误，行政代码 ", adcode)
  if (response$status_code != 200L) stop("行政区域查询HTTP状态 ", response$status_code)
  body <- rawToChar(response$content)
  if (grepl(api_key, body, fixed = TRUE)) stop("响应含凭据信息，已停止处理。")
  parsed <- tryCatch(jsonlite::fromJSON(body, simplifyVector = FALSE),
    error = function(error) NULL)
  if (is.null(parsed)) stop("行政区域查询返回的数据无法解析。")
  if (!identical(parsed$status, "1") || !identical(parsed$info, "OK")) {
    safe_code <- gsub("[^0-9]", "", as.character(parsed$infocode))
    safe_info <- gsub("[^A-Z0-9_]", "", as.character(parsed$info))
    stop("行政区域查询返回 ", safe_info, " (", safe_code, ")")
  }
  parsed$districts
}

amap_collect_district_codes <- function(nodes) {
  codes <- character()
  for (node in nodes) {
    if (identical(node$level, "district")) codes <- c(codes, as.character(node$adcode))
    if (length(node$districts)) codes <- c(codes, amap_collect_district_codes(node$districts))
  }
  unique(codes)
}

amap_node_to_feature <- function(node) {
  parts <- strsplit(node$polyline, "|", fixed = TRUE)[[1]]
  polygons <- lapply(parts, function(part) {
    pairs <- strsplit(strsplit(part, ";", fixed = TRUE)[[1]], ",", fixed = TRUE)
    ring <- matrix(as.numeric(unlist(pairs)), ncol = 2, byrow = TRUE)
    stopifnot(nrow(ring) >= 3L, all(is.finite(ring)))
    if (!identical(unname(ring[1, ]), unname(ring[nrow(ring), ]))) ring <- rbind(ring, ring[1, ])
    list(gcj02_to_wgs84_approx(ring)$coordinates)
  })
  sf::st_sf(district_name = node$name, district_code = as.character(node$adcode),
    source = "AMap district API", source_crs = "GCJ-02",
    processing = "Iterative approximate inverse to WGS84",
    geometry = sf::st_sfc(sf::st_multipolygon(polygons), crs = 4326))
}

query_amap_shanghai <- function(api_key = Sys.getenv("AMAP_WEB_KEY", unset = ""),
                                request_function = amap_request_district) {
  if (!nzchar(api_key)) stop("请先在本地配置AMAP_WEB_KEY环境变量并重启R。")
  city_nodes <- request_function("310000", "2", api_key)
  city_index <- which(vapply(city_nodes, function(node)
    identical(as.character(node$adcode), "310000"), logical(1)))
  stopifnot(length(city_index) == 1L)
  city_node <- city_nodes[[city_index]]
  district_codes <- sort(amap_collect_district_codes(city_nodes))
  stopifnot(length(district_codes) > 0L,
    all(c("310112", "310107") %in% district_codes))
  features <- lapply(district_codes, function(code) {
    Sys.sleep(.4)
    nodes <- request_function(code, "0", api_key)
    index <- which(vapply(nodes, function(node)
      identical(as.character(node$adcode), code), logical(1)))
    stopifnot(length(index) == 1L, nzchar(nodes[[index]]$polyline))
    amap_node_to_feature(nodes[[index]])
  })
  districts <- do.call(rbind, features)
  city <- amap_node_to_feature(city_node)
  study_area <- districts[match(c("310112", "310107"), districts$district_code), ]
  study_area$slug <- c("minhang", "putuo")
  stopifnot(all(sf::st_is_valid(districts)), all(sf::st_is_valid(city)),
    !any(sf::st_is_empty(districts)), !any(sf::st_is_empty(city)))
  metadata <- list(provider = "AMap district API",
    query_local_date = format(Sys.Date(), "%Y-%m-%d"), district_count = nrow(districts),
    native_coordinate_system = "GCJ-02",
    output_coordinate_system = "Approximate WGS84 from iterative inverse model",
    api_documentation = "https://lbs.amap.com/api/webservice/guide/api/district/",
    coordinate_model_reference = "https://github.com/wandergis/coordtransform",
    source_epoch_note = "Retrieval date is recorded; source boundary update date is unspecified",
    accuracy_note = "Model roundtrip consistency does not establish positional accuracy")
  list(shanghai_city = city, shanghai_districts = districts, study_area = study_area,
    provenance = metadata)
}
