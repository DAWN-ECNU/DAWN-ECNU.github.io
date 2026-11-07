# 三年融合AOI分析。请在第5章目录按模块顺序运行。
# 课堂CSV是唯一记录数据入口，辅助函数公开保存网格与集合运算细节。

## ---- c5_fused_environment ----
# 模块1. 加载依赖与设定参数。
# install.packages(c("sf", "terra", "MASS", "dplyr", "readr", "digest", "jsonlite"))
library(sf)
library(terra)
library(dplyr)
library(readr)
chapter_dir <- normalizePath(".", winslash = "/", mustWork = TRUE)
fused_asset_dir <- file.path(chapter_dir, "figures", "social-fused-aoi")
fused_result_dir <- file.path(fused_asset_dir, "output", "results")
fused_raster_dir <- file.path(fused_result_dir, "rasters")
dir.create(fused_raster_dir, recursive = TRUE, showWarnings = FALSE)
fused_groups <- data.frame(group_id = paste0("fused_", 2023:2025), year = 2023:2025)
fused_config <- list(
  district_names = c("闵行区", "普陀区"), district_slugs = c("minhang", "putuo"),
  groups = fused_groups, years = 2023:2025, grid_m = 75, aoi_quantile = 0.95,
  bandwidth_multiplier = 1.0, analysis_crs = 32651L, display_crs = 3857L,
  records_per_group = 12000L, records_per_source = 6000L,
  bandwidth_rule = "Automatic X/Y bandwidth from all pooled records, multiplied by bandwidth_multiplier",
  threshold_rule = "Within district, P95 of the equal mean of three normalized annual KDE surfaces",
  coordinate_reference = list(
    weibo = "WGS84 as recorded by source",
    xhs = "Provisionally treated as WGS84; note-associated locations",
    xhs_status = "assumed_WGS84",
    boundary = "AMap GCJ-02 approximately converted to WGS84"
  )
)
stopifnot(fused_config$bandwidth_multiplier > 0, fused_config$grid_m > 0,
  fused_config$aoi_quantile > 0, fused_config$aoi_quantile < 1)
helper_path <- file.path(fused_asset_dir, "fused_aoi_helpers.R")
if (!file.exists(helper_path)) {
  dir.create(fused_asset_dir, recursive = TRUE, showWarnings = FALSE)
  download.file(
    "https://dawn-ecnu.github.io/data/social_fused_aoi/fused_aoi_helpers.R",
    helper_path, mode = "wb"
  )
}
source(helper_path, encoding = "UTF-8")

## ---- c5_fused_inputs ----
# 模块2. 读取同一份学生CSV与本地边界，缺少时下载缓存。
sample_path <- file.path(chapter_dir, "data", "social_media_gps_2023_2025.csv")
boundary_dir <- file.path(chapter_dir, "data", "social_fused_aoi")
dir.create(boundary_dir, recursive = TRUE, showWarnings = FALSE)
if (!file.exists(sample_path)) {
  download.file(
    "https://dawn-ecnu.github.io/data/social_media_gps_2023_2025.csv",
    sample_path, mode = "wb"
  )
}
boundary_files <- c("shanghai_city.geojson", "shanghai_districts.geojson", "study_area.geojson")
for (filename in boundary_files) {
  local_path <- file.path(boundary_dir, filename)
  if (!file.exists(local_path)) {
    download.file(paste0("https://dawn-ecnu.github.io/data/social_fused_aoi/", filename),
      local_path, mode = "wb")
  }
}
input_paths <- c(sample_path, file.path(boundary_dir, boundary_files))
input_hashes <- vapply(input_paths,
  function(path) digest::digest(file = path, algo = "sha256"), character(1))
expected_csv_sha256 <- "1be39b08ae71b766fb4a0bebec79256ed871a5f734377f27f0445efb13244ac6"
stopifnot(unname(input_hashes[1]) == expected_csv_sha256)
fused_raw <- read_csv(sample_path, show_col_types = FALSE,
  col_types = cols(posted_at = col_character(), x = col_double(), y = col_double(),
    user_id = col_character(), platform = col_character()))
study_districts <- st_read(file.path(boundary_dir, "study_area.geojson"), quiet = TRUE)
stopifnot(nrow(study_districts) == 2L, all(st_is_valid(study_districts)))
study_districts <- st_transform(study_districts, fused_config$analysis_crs)
study_districts <- study_districts[match(fused_config$district_names, study_districts$district_name), ]
study_districts$district_name <- as.character(study_districts$district_name)
study_districts$slug <- fused_config$district_slugs

## ---- c5_fused_preprocess ----
# 模块3. 检查字段和坐标，提取年份，再确定区属；同坐标记录逐条保留。
required_fields <- c("posted_at", "x", "y", "user_id", "platform")
stopifnot(identical(names(fused_raw), required_fields), nrow(problems(fused_raw)) == 0L,
  nrow(fused_raw) == 72000L, all(fused_raw$platform %in% c("微博", "小红书")),
  all(is.finite(fused_raw$x)), all(is.finite(fused_raw$y)),
  all(abs(fused_raw$x) <= 180), all(abs(fused_raw$y) <= 90),
  !anyNA(fused_raw$posted_at), !anyNA(fused_raw$user_id), all(nzchar(fused_raw$user_id)))
fused_raw <- fused_raw %>% mutate(
  year = as.integer(substr(posted_at, 1, 4)),
  record_id = sprintf("r%06d", row_number()),
  group_id = paste0("fused_", year)
)
stopifnot(!anyNA(fused_raw$year), all(fused_raw$year %in% fused_config$years))
fused_points <- st_as_sf(fused_raw, coords = c("x", "y"), crs = 4326, remove = FALSE) %>%
  st_transform(fused_config$analysis_crs)
district_hits <- st_intersects(fused_points, study_districts)
stopifnot(all(lengths(district_hits) == 1L))
district_index <- vapply(district_hits, function(hit) hit[[1]], integer(1))
fused_points$district_name <- study_districts$district_name[district_index]
fused_points$slug <- study_districts$slug[district_index]
fused_composition <- fused_points %>% st_drop_geometry() %>%
  count(district_name, slug, year, platform, name = "n_records")
fused_group_counts <- fused_points %>% st_drop_geometry() %>%
  count(district_name, slug, year, name = "n_records")
stopifnot(nrow(fused_composition) == 12L, all(fused_composition$n_records == 6000L),
  nrow(fused_group_counts) == 6L, all(fused_group_counts$n_records == 12000L))

## ---- c5_fused_kde_compute ----
# 模块4. 对每区每年的12000条融合记录估计KDE，三年共用网格。
# bandwidth_multiplier同时作用于X、Y带宽，默认1.0延续当前主方案。
density_result <- estimate_annual_kde(fused_points, study_districts, fused_config)
reference_summary <- density_result$reference_summary

## ---- c5_fused_aoi_extract ----
# 模块5. 以每区三年参照面的P95划定年度AOI，汇总面积、连通块及记录覆盖。
aoi_result <- extract_annual_aoi(density_result, fused_config)
fused_summary <- aoi_result$summary
annual_aoi <- aoi_result$aoi
aoi_patches <- aoi_result$patches

## ---- c5_fused_evolution ----
# 模块6. 叠加年度AOI，计算保持、新增、退出和交并比，再识别三年成员状态。
evolution_result <- compare_annual_footprints(aoi_result, study_districts, fused_config)
annual_overlap <- evolution_result$annual_overlap
annual_changes <- evolution_result$changes
trajectory_summary <- evolution_result$trajectory_summary
trajectory_codes <- evolution_result$trajectory_codes
three_year_trajectories <- evolution_result$trajectories
persistent_aoi <- evolution_result$persistent_aoi

## ---- c5_fused_sensitivity ----
# 模块7. 选学对照。各区三年共用自动带宽中位数，并重算参照面及阈值。
sensitivity_result <- shared_bandwidth_sensitivity(density_result, aoi_result, fused_config)
sensitivity_summary <- sensitivity_result$summary
fused_bandwidths <- sensitivity_result$bandwidths

## ---- c5_fused_save_results ----
# 模块8. 保存年度表、空间结果及三年持续AOI，供后续研究读取。
tables <- list(summary = fused_summary, annual_overlap = annual_overlap,
  bandwidth_summary = fused_bandwidths, analysis_checks = aoi_result$checks,
  reference_summary = reference_summary, sensitivity_summary = sensitivity_summary,
  trajectory_summary = trajectory_summary, trajectory_codes = trajectory_codes,
  supplied_group_counts = fused_group_counts, source_composition = fused_composition)
for (name in names(tables)) write_csv(tables[[name]], file.path(fused_result_dir, paste0(name, ".csv")))
surfaces <- aoi_result$surfaces
for (slug in fused_config$district_slugs) {
  density <- density_result$districts[[slug]]
  grid <- evolution_result$grids[[slug]]
  write_grid_raster(density$reference, grid,
    file.path(fused_raster_dir, paste0(slug, "_three_year_reference.tif")))
  for (index in seq_len(nrow(fused_groups))) {
    group <- fused_groups[index, ]
    key <- paste(slug, group$group_id, sep = "_")
    values <- grid$data[[paste0("relative_", group$group_id)]]
    selected <- grid$data[[paste0("aoi_", group$group_id)]]
    paths <- file.path(fused_raster_dir, paste0(key, c("_relative.tif", "_records.tif", "_aoi.tif")))
    write_grid_raster(values, grid, paths[1])
    write_grid_raster(values * fused_config$records_per_group, grid, paths[2])
    write_grid_raster(as.integer(selected), grid, paths[3], integer = TRUE)
    write_grid_raster(as.integer(sensitivity_result$selected_masks[[key]]), grid,
      file.path(fused_raster_dir, paste0(key, "_fixed_bandwidth_aoi.tif")), integer = TRUE)
    surfaces[[key]]$raster_relative_path <- paths[1]
    surfaces[[key]]$raster_records_path <- paths[2]
    surfaces[[key]]$aoi_raster_path <- paths[3]
  }
}
geometry_path <- file.path(fused_result_dir, "fused_aoi_results.gpkg")
layers <- list(study_boundaries = study_districts, year_aoi = annual_aoi,
  annual_changes = annual_changes, year_patches = aoi_patches,
  three_year_trajectories = three_year_trajectories, persistent_aoi = persistent_aoi)
for (name in names(layers)) st_write(layers[[name]], geometry_path,
  layer = name, delete_layer = TRUE, quiet = TRUE)
fused_analysis <- list(config = fused_config, boundaries = study_districts, points = fused_points,
  surfaces = surfaces, aoi = annual_aoi, patches = aoi_patches, changes = annual_changes,
  trajectories = three_year_trajectories, persistent_aoi = persistent_aoi,
  summary = fused_summary, annual_overlap = annual_overlap, bandwidths = fused_bandwidths,
  grids = lapply(evolution_result$grids, function(grid) grid$data),
  sensitivity_summary = sensitivity_summary, reference_summary = reference_summary,
  trajectory_summary = trajectory_summary, trajectory_codes = trajectory_codes)
saveRDS(fused_analysis, file.path(fused_result_dir, "analysis.rds"), compress = "gzip")
stopifnot(identical(input_hashes, vapply(input_paths,
  function(path) digest::digest(file = path, algo = "sha256"), character(1))))
jsonlite::write_json(list(status = "analysis_complete", input_sha256 = as.list(input_hashes),
  rows = 72000L, pooled_groups = 6L, config = fused_config,
  analysis_sha256 = digest::digest(file = file.path(fused_result_dir, "analysis.rds"), algo = "sha256")),
  file.path(fused_result_dir, "analysis_manifest.json"), pretty = TRUE, auto_unbox = TRUE)
