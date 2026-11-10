# 三年融合AOI分析。请在第5章目录按模块顺序运行。
# 原始点KDE、密度等值面与向量叠加共用一份课堂数据。

## ---- c5_fused_environment ----
# 加载空间数据和表格处理包，KDE与等值面函数使用包名调用。
# install.packages(c("sf", "MASS", "dplyr", "readr", "isoband", "digest", "jsonlite"))
library(sf)
library(dplyr)
library(readr)

## ---- c5_fused_paths ----
# 相对第5章目录读取文件，分析结果与图件分别保存。
chapter_dir <- normalizePath(".", winslash = "/", mustWork = TRUE)
fused_asset_dir <- file.path(chapter_dir, "figures", "social-fused-aoi")
fused_result_dir <- file.path(fused_asset_dir, "output", "results")
dir.create(fused_result_dir, recursive = TRUE, showWarnings = FALSE)

## ---- c5_fused_parameters ----
# 每区每年12000条完整记录，三年共用512×512密度求值范围。
fused_groups <- data.frame(group_id = paste0("fused_", 2023:2025), year = 2023:2025)
fused_config <- list(years = 2023:2025, groups = fused_groups,
  district_names = c("闵行区", "普陀区"), district_slugs = c("minhang", "putuo"),
  analysis_crs = 32651L, display_crs = 3857L,
  records_per_group = 12000L, records_per_source = 6000L,
  bandwidth_multiplier = 1, aoi_quantile = 0.95,
  evaluation_n = 512L, kernel_margin_sigma = 3)

## ---- c5_fused_helper_setup ----
# 首次运行下载计算函数，后续读取本地文件。
helper_path <- file.path(fused_asset_dir, "fused_aoi_helpers.R")
helper_current <- file.exists(helper_path) && any(grepl("^fit_annual_kde <- function",
  readLines(helper_path, encoding = "UTF-8", warn = FALSE)))
if (!helper_current) {
  dir.create(fused_asset_dir, recursive = TRUE, showWarnings = FALSE)
  download.file("https://dawn-ecnu.github.io/data/social_fused_aoi/fused_aoi_helpers.R",
    helper_path, mode = "wb")
}
source(helper_path, encoding = "UTF-8")

## ---- c5_fused_inputs ----
# 读取公开课堂CSV，保留全部记录和重复坐标。
sample_path <- file.path(chapter_dir, "data", "social_media_gps_2023_2025.csv")
boundary_dir <- file.path(chapter_dir, "data", "social_fused_aoi")
dir.create(boundary_dir, recursive = TRUE, showWarnings = FALSE)
if (!file.exists(sample_path)) {
  download.file("https://dawn-ecnu.github.io/data/social_media_gps_2023_2025.csv",
    sample_path, mode = "wb")
}

## ---- c5_fused_boundary_download ----
# 两区用于分析，上海市及16区用于研究区定位图。
boundary_files <- c("shanghai_city.geojson", "shanghai_districts.geojson", "study_area.geojson")
for (filename in boundary_files) {
  local_path <- file.path(boundary_dir, filename)
  if (!file.exists(local_path)) {
    download.file(paste0("https://dawn-ecnu.github.io/data/social_fused_aoi/", filename),
      local_path, mode = "wb")
  }
}

## ---- c5_fused_read_csv ----
# 核对课堂文件指纹，并按五个字段读取。
input_paths <- c(sample_path, file.path(boundary_dir, boundary_files))
input_hashes <- vapply(input_paths,
  function(path) digest::digest(file = path, algo = "sha256"), character(1))
stopifnot(unname(input_hashes[1]) ==
  "1be39b08ae71b766fb4a0bebec79256ed871a5f734377f27f0445efb13244ac6")
fused_raw <- readr::read_csv(sample_path, show_col_types = FALSE,
  col_types = cols(posted_at = col_character(), x = col_double(), y = col_double(),
    user_id = col_character(), platform = col_character()))

## ---- c5_fused_read_boundaries ----
# 区界转换为米制坐标，并固定两区的处理顺序。
stopifnot(unname(input_hashes[4]) ==
  "af0dfe13d2d256c2eddeeb5adb11f8365a4dab87fdb404c1c0b501cedff8ece4")
study_districts <- sf::st_read(file.path(boundary_dir, "study_area.geojson"), quiet = TRUE) %>%
  sf::st_transform(fused_config$analysis_crs)
study_districts <- study_districts[match(fused_config$district_names, study_districts$district_name), ]
study_districts$slug <- fused_config$district_slugs
stopifnot(nrow(study_districts) == 2L, all(sf::st_is_valid(study_districts)))

## ---- c5_fused_preprocess ----
# 检查字段、坐标与平台标签。
stopifnot(identical(names(fused_raw), c("posted_at", "x", "y", "user_id", "platform")),
  nrow(fused_raw) == 72000L, !anyNA(fused_raw),
  all(is.finite(fused_raw$x)), all(is.finite(fused_raw$y)),
  all(abs(fused_raw$x) <= 180), all(abs(fused_raw$y) <= 90),
  all(fused_raw$platform %in% c("微博", "小红书")))

## ---- c5_fused_years ----
# 从两平台的源时间字符串提取年份，保留逐条记录。
fused_raw <- fused_raw %>% mutate(year = as.integer(substr(posted_at, 1, 4)),
  group_id = paste0("fused_", year), record_id = sprintf("r%06d", row_number()))
stopifnot(all(fused_raw$year %in% fused_config$years))

## ---- c5_fused_spatial_join ----
# 建立空间点，按行政区确定归属。
fused_points <- sf::st_as_sf(fused_raw, coords = c("x", "y"), crs = 4326, remove = FALSE) %>%
  sf::st_transform(fused_config$analysis_crs)
district_hits <- sf::st_intersects(fused_points, study_districts)
stopifnot(all(lengths(district_hits) == 1L))
district_index <- vapply(district_hits, function(hit) hit[[1]], integer(1))
fused_points$district_name <- study_districts$district_name[district_index]
fused_points$slug <- study_districts$slug[district_index]

## ---- c5_fused_group_counts ----
# 核对每区每年两平台各6000条，融合后共12000条。
fused_composition <- fused_points %>% sf::st_drop_geometry() %>%
  dplyr::count(district_name, slug, year, platform, name = "n_records")
fused_group_counts <- fused_points %>% sf::st_drop_geometry() %>%
  dplyr::count(district_name, slug, year, name = "n_records")
stopifnot(nrow(fused_composition) == 12L, all(fused_composition$n_records == 6000L),
  nrow(fused_group_counts) == 6L, all(fused_group_counts$n_records == 12000L))

## ---- c5_fused_kde_compute ----
# 输入原始点，输出每区三年的自动带宽与KDE矩阵。
density_result <- list()
for (district_index in seq_len(nrow(study_districts))) {
  boundary <- study_districts[district_index, ]
  slug <- boundary$slug[[1]]
  district_points <- fused_points[fused_points$slug == slug, ]
  density_result[[slug]] <- fit_annual_kde(district_points, boundary, fused_config)
}

## ---- c5_fused_reference ----
# 三年密度面取平均，在区内求值位置上提取共同P95。
reference_result <- list()
reference_rows <- list()
evaluation_contract <- list()
for (district_index in seq_len(nrow(study_districts))) {
  boundary <- study_districts[district_index, ]
  slug <- boundary$slug[[1]]
  density <- density_result[[slug]]
  reference <- density_reference(density, boundary, fused_config)
  reference_result[[slug]] <- reference
  evaluation_contract[[slug]] <- list(limits = density$limits,
    n = c(length(reference$x), length(reference$y)), dx_m = diff(reference$x)[1],
    dy_m = diff(reference$y)[1], kernel_margin_m = density$margin,
    n_inside_boundary = sum(reference$inside_boundary), matrix_order = "rows X, columns Y")
  reference_rows[[slug]] <- data.frame(district_name = boundary$district_name[[1]], slug,
    boundary_area_km2 = area_km2(boundary), analyzed_area_km2 = area_km2(boundary),
    threshold_relative = reference$threshold, evaluation_n_x = length(reference$x),
    evaluation_n_y = length(reference$y), evaluation_dx_m = diff(reference$x)[1],
    evaluation_dy_m = diff(reference$y)[1], n_inside_evaluation = sum(reference$inside_boundary))
}
reference_summary <- dplyr::bind_rows(reference_rows)

## ---- c5_fused_aoi_extract ----
# 等值面先闭合，再裁切到行政区，得到年度AOI与斑块。
aoi_result <- list()
patch_result <- list()
contour_result <- list()
for (district_index in seq_len(nrow(study_districts))) {
  boundary <- study_districts[district_index, ]
  slug <- boundary$slug[[1]]
  for (index in seq_along(fused_config$years)) {
    year <- fused_config$years[index]
    group_id <- paste0("fused_", year)
    key <- paste(slug, group_id, sep = "_")
    contour <- contour_aoi(density_result[[slug]]$fits[[index]],
      reference_result[[slug]]$threshold, boundary, fused_config)
    aoi_result[[key]] <- sf::st_sf(district_name = boundary$district_name[[1]],
      slug = slug, group_id = group_id, year = year,
      threshold_relative = reference_result[[slug]]$threshold, geometry = contour$geometry)
    patch_result[[key]] <- aoi_polygon_parts(aoi_result[[key]])
    contour_result[[key]] <- contour
  }
}
annual_aoi <- do.call(rbind, aoi_result)
aoi_patches <- do.call(rbind, patch_result)

## ---- c5_fused_aoi_summary ----
# 汇总面积、记录覆盖与带宽，保留原始密度矩阵供制图读取。
summary_rows <- list()
surfaces <- list()
for (district_index in seq_len(nrow(study_districts))) {
  boundary <- study_districts[district_index, ]
  slug <- boundary$slug[[1]]
  density <- density_result[[slug]]
  reference <- reference_result[[slug]]
  for (index in seq_along(fused_config$years)) {
    year <- fused_config$years[index]
    group_id <- paste0("fused_", year)
    key <- paste(slug, group_id, sep = "_")
    aoi <- aoi_result[[key]]
    summary_rows[[key]] <- annual_aoi_statistics(aoi, patch_result[[key]],
      density, index, boundary)
    surfaces[[key]] <- list(district_name = boundary$district_name[[1]], slug = slug,
      group_id = group_id, year = year, x = reference$x, y = reference$y,
      z_probability = density$fits[[index]]$z, z_relative = reference$z_relative[[index]],
      inside_boundary = reference$inside_boundary, aoi = aoi)
  }
}
fused_summary <- dplyr::bind_rows(summary_rows)
fused_bandwidths <- fused_summary %>% dplyr::select(district_name, slug, group_id, year,
  hx_m, hy_m, h_argument_x_m, h_argument_y_m)

## ---- c5_fused_evolution ----
# 向量交集表示保持，两个方向的差集表示新增与退出。
comparisons <- data.frame(from_year = c(2023L, 2024L, 2023L),
  to_year = c(2024L, 2025L, 2025L))
overlap_rows <- list()
change_rows <- list()
for (slug in fused_config$district_slugs) {
  district_name <- study_districts$district_name[study_districts$slug == slug][[1]]
  for (index in seq_len(nrow(comparisons))) {
    from_year <- comparisons$from_year[index]
    to_year <- comparisons$to_year[index]
    before <- sf::st_geometry(annual_aoi[annual_aoi$slug == slug & annual_aoi$year == from_year, ])
    after <- sf::st_geometry(annual_aoi[annual_aoi$slug == slug & annual_aoi$year == to_year, ])
    comparison <- compare_aoi_pair(before, after, fused_config$analysis_crs)
    comparison_id <- paste(from_year, to_year, sep = "_")
    comparison_label <- paste(from_year, to_year, sep = "–")
    key <- paste(slug, comparison_id, sep = "_")
    overlap_rows[[key]] <- data.frame(district_name, slug, from_year, to_year,
      comparison_id, comparison_label, from_area_km2 = area_km2(before),
      to_area_km2 = area_km2(after), retained_km2 = unname(comparison$areas["retained"]),
      gained_km2 = unname(comparison$areas["gained"]), lost_km2 = unname(comparison$areas["lost"]),
      net_area_change_km2 = area_km2(after) - area_km2(before), jaccard = comparison$jaccard,
      area_conservation_max_abs_error_km2 = comparison$conservation)
    for (type in names(comparison$pieces)) {
      change_rows[[paste(key, type, sep = "_")]] <- sf::st_sf(district_name = district_name,
        slug = slug, from_year = from_year, to_year = to_year, comparison_id = comparison_id,
        comparison_label = comparison_label, change_type = type, geometry = comparison$pieces[[type]])
    }
  }
}
annual_overlap <- dplyr::bind_rows(overlap_rows)
annual_changes <- do.call(rbind, change_rows)

## ---- c5_fused_trajectories ----
# 按八种年度成员组合汇总五类状态，面积分母为完整行政区。
state_types <- c("000" = "never", "001" = "entered", "010" = "fluctuating",
  "011" = "entered", "100" = "exited", "101" = "fluctuating",
  "110" = "exited", "111" = "persistent")
code_rows <- list()
trajectory_rows <- list()
trajectory_summary_rows <- list()
for (district_index in seq_len(nrow(study_districts))) {
  boundary <- study_districts[district_index, ]
  slug <- boundary$slug[[1]]
  district_name <- boundary$district_name[[1]]
  geometries <- lapply(fused_config$years, function(year)
    sf::st_geometry(annual_aoi[annual_aoi$slug == slug & annual_aoi$year == year, ]))
  names(geometries) <- as.character(fused_config$years)
  pieces <- three_year_pieces(geometries, boundary, fused_config$analysis_crs)
  areas <- vapply(pieces, area_km2, numeric(1))
  stopifnot(abs(sum(areas) - area_km2(boundary)) < 1e-7)
  for (code in names(pieces)) {
    code_rows[[paste(slug, code, sep = "_")]] <- data.frame(district_name, slug,
      trajectory_code = code, trajectory_type = unname(state_types[code]),
      area_km2 = areas[[code]], area_percent = 100 * areas[[code]] / area_km2(boundary))
  }
  for (type in unique(unname(state_types))) {
    geometry <- polygon_union(do.call(c, pieces[names(state_types)[state_types == type]]),
      fused_config$analysis_crs)
    trajectory_rows[[paste(slug, type, sep = "_")]] <- sf::st_sf(
      district_name = district_name, slug = slug, trajectory_type = type, geometry = geometry)
    trajectory_summary_rows[[paste(slug, type, sep = "_")]] <- data.frame(district_name, slug,
      trajectory_type = type, area_km2 = area_km2(geometry),
      area_percent = 100 * area_km2(geometry) / area_km2(boundary))
  }
}
three_year_trajectories <- do.call(rbind, trajectory_rows)
trajectory_summary <- dplyr::bind_rows(trajectory_summary_rows)
trajectory_codes <- dplyr::bind_rows(code_rows)
persistent_aoi <- three_year_trajectories[three_year_trajectories$trajectory_type == "persistent", ]

## ---- c5_fused_save_results ----
# 保存可直接读取的年度汇总表、参考阈值与演化表。
tables <- list(summary = fused_summary, annual_overlap = annual_overlap,
  reference_summary = reference_summary, bandwidth_summary = fused_bandwidths,
  trajectory_summary = trajectory_summary, trajectory_codes = trajectory_codes,
  source_composition = fused_composition)
for (name in names(tables)) {
  readr::write_csv(tables[[name]], file.path(fused_result_dir, paste0(name, ".csv")))
}

## ---- c5_fused_save_geopackage ----
# 各类空间结果写入同一个GeoPackage的不同图层。
geometry_path <- file.path(fused_result_dir, "fused_aoi_results.gpkg")
layers <- list(study_boundaries = study_districts, year_aoi = annual_aoi,
  year_patches = aoi_patches, annual_changes = annual_changes,
  three_year_trajectories = three_year_trajectories, persistent_aoi = persistent_aoi)
for (name in names(layers)) {
  sf::st_write(layers[[name]], geometry_path, layer = name, delete_layer = TRUE, quiet = TRUE)
}

## ---- c5_fused_save_analysis ----
# 同一份分析对象供所有浅深色图件读取。
fused_analysis <- list(config = fused_config, boundaries = study_districts, points = fused_points,
  surfaces = surfaces, aoi = annual_aoi, patches = aoi_patches, changes = annual_changes,
  trajectories = three_year_trajectories, persistent_aoi = persistent_aoi,
  summary = fused_summary, annual_overlap = annual_overlap, reference_summary = reference_summary,
  bandwidths = fused_bandwidths, trajectory_summary = trajectory_summary,
  trajectory_codes = trajectory_codes, evaluation_contract = evaluation_contract)
saveRDS(fused_analysis, file.path(fused_result_dir, "analysis.rds"), compress = "gzip")

## ---- c5_fused_save_integrity ----
# 核对输入文件，记录方法与输出指纹。
stopifnot(identical(input_hashes, vapply(input_paths,
  function(path) digest::digest(file = path, algo = "sha256"), character(1))))
method_notes <- list(
  bandwidth_rule = "Annual X/Y MASS::bandwidth.nrd from all raw pooled records",
  evaluation_rule = "Common district bbox expanded by three times maximum annual effective sigma per axis",
  threshold_rule = "P95 of three-year mean relative density at evaluation locations inside the district",
  aoi_rule = "Interpolated density superlevel isoband clipped to the administrative boundary",
  component_rule = "POLYGON parts of the valid clipped union returned by sf::st_cast",
  area_denominator = "Full administrative boundary area",
  coordinate_reference = "Weibo WGS84; RedNote provisionally WGS84; AMap boundaries approximately converted to WGS84")
jsonlite::write_json(list(status = "analysis_complete", input_sha256 = as.list(input_hashes),
  rows = nrow(fused_points), pooled_groups = nrow(fused_summary), config = fused_config,
  method_notes = method_notes, evaluation_contract = evaluation_contract,
  analysis_sha256 = digest::digest(file = file.path(fused_result_dir, "analysis.rds"), algo = "sha256")),
  file.path(fused_result_dir, "analysis_manifest.json"), pretty = TRUE, auto_unbox = TRUE, digits = 15)
