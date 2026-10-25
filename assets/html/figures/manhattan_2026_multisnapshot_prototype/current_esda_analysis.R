# 第五章专题研究1：当前ESDA分析
# 从第5章.Rmd的具名分析模块自动导出，请修改Rmd后重新导出。
# 在第5章目录运行；依赖安装说明见模块1。
if (!dir.exists("figures/manhattan_2026_multisnapshot_prototype")) {
  stop("请先将工作目录设为第5章目录。")
}

# ---- 01 · c5_2026_packages ----
# 模块 1：声明本专题依赖；缺少的包只需在 Console 安装一次。
# install.packages(c("dplyr", "readr", "sf", "spdep", "ggplot2", "classInt"))
library(dplyr)
library(readr)
library(sf)
library(spdep)
library(ggplot2)
library(classInt)

# ---- 02 · c5_2026_read_data ----
# 模块 2：按发布批次读取原始表，解析每夜报价与报价日期。
# 缓存不存在时下载；此处不按报价夜数筛选。
data_dir <- "figures/manhattan_2026_multisnapshot_prototype/data"
release_dates <- c("2026-03-16", "2026-06-14", "2026-09-14")
source_base <- "https://data.insideairbnb.com/united-states/ny/new-york-city"

read_release <- function(release_date) {
  file_path <- file.path(data_dir, paste0("nyc_", release_date, ".csv.gz"))
  if (!file.exists(file_path)) {
    dir.create(data_dir, recursive = TRUE, showWarnings = FALSE)
    source_url <- paste0(source_base, "/", release_date, "/data/listings.csv.gz")
    download.file(source_url, file_path, mode = "wb")
  }
  quote_fields <- c("id", "longitude", "latitude", "price", "room_type",
                    "minimum_nights", "price_quote_checkin_date",
                    "price_quote_checkout_date")
  read_csv(file_path,
           col_select = all_of(quote_fields),
           col_types = cols(.default = col_character(),
                            longitude = col_double(), latitude = col_double()),
           show_col_types = FALSE, progress = FALSE) %>%
    mutate(snapshot = release_date,
           price_usd = parse_number(price,
                                    locale = locale(grouping_mark = ",")),
           quote_checkin = as.Date(price_quote_checkin_date),
           quote_checkout = as.Date(price_quote_checkout_date),
           quote_nights = as.integer(quote_checkout - quote_checkin))
}

listing_rows <- bind_rows(lapply(release_dates, read_release))

# ---- 03 · c5_2026_study_area ----
# 模块 3：读取主岛边界；缺失时从官方曼哈顿多边形取最大陆地主体。
boundary_path <- file.path(data_dir, "manhattan_main_island_original_boundary.gpkg")
if (file.exists(boundary_path)) {
  main_island <- st_read(boundary_path, quiet = TRUE)
} else {
  boundary_url <- paste0(
    "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/",
    "NYC_Borough_Boundary/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=pgeojson"
  )
  main_island <- st_read(boundary_url, quiet = TRUE) %>%
    filter(BoroName == "Manhattan") %>%
    st_make_valid() %>%
    st_cast("POLYGON") %>%
    mutate(area_ft2 = as.numeric(st_area(st_transform(geometry, 2263)))) %>%
    slice_max(area_ft2, n = 1, with_ties = FALSE) %>%
    select(BoroName)
  st_write(main_island, boundary_path, quiet = TRUE)
}
main_island <- st_transform(main_island, 4326)

# ---- 04 · c5_2026_spatial_subset ----
# 模块 4：先检查坐标，再确定主岛内记录；保留报价缺失以便统计。
# 先检查原表，再用有效坐标确定主岛内的记录；此时尚未筛掉价格缺失值。
valid_location <- is.finite(listing_rows$longitude) &
  is.finite(listing_rows$latitude)
located_rows <- listing_rows[valid_location, ]
on_main_island <- lengths(st_intersects(
  st_as_sf(located_rows, coords = c("longitude", "latitude"), crs = 4326),
  main_island
)) > 0L
main_island_rows <- located_rows[on_main_island, ]

# ---- 05 · c5_2026_price_eda ----
# 模块 5：分别报告原表与主岛记录的价格缺失、解析和正负状态。
count_price_status <- function(rows, scope) {
  price_missing <- is.na(rows$price) | trimws(rows$price) == ""
  price_valid <- is.finite(rows$price_usd)
  tibble::tibble(
    scope = scope,
    records = nrow(rows),
    missing = sum(price_missing),
    parse_failed = sum(!price_missing & !price_valid),
    negative = sum(price_valid & rows$price_usd < 0),
    zero = sum(price_valid & rows$price_usd == 0),
    positive = sum(price_valid & rows$price_usd > 0)
  )
}
price_eda <- bind_rows(
  count_price_status(listing_rows, "纽约市三期原表"),
  count_price_status(main_island_rows, "曼哈顿主岛")
)
price_eda %>%
  mutate(across(-scope, ~ format(.x, big.mark = ",", trim = TRUE))) %>%
  knitr::kable(
    format = "html",
    caption = "三期 Airbnb 价格字段状态",
    col.names = c("统计范围", "记录数", "价格缺失", "解析失败",
                  "负价", "零价", "正价"),
    align = c("l", rep("r", 6))
  )

# ---- 06 · c5_2026_quote_cohort ----
# 模块 6：保留可用且大于零的每夜报价，供分布检查与 ID 汇总。
positive_rows <- main_island_rows %>%
  filter(is.finite(price_usd), price_usd > 0)

# ---- 07 · c5_2026_listing_means ----
# 模块 7：按房源 ID 汇总全部有效正价，计算原始美元每夜报价的均值。
# 单期、两期和三期均使用同一规则；未出现的批次不补零。
stopifnot(!anyNA(positive_rows$id),
          !any(positive_rows$id == ""),
          !anyDuplicated(positive_rows[c("id", "snapshot")]))
listing_mean_all <- positive_rows %>%
  arrange(id, snapshot) %>%
  group_by(id) %>%
  summarise(longitude = dplyr::last(longitude),
            latitude = dplyr::last(latitude),
            listing_mean_usd = mean(price_usd),
            n_releases = n_distinct(snapshot),
            n_records = n(), .groups = "drop")

# ---- 08 · c5_2026_screen_and_average ----
# 模块 8：每个 ID 贡献一个均价；在均价层计算 P5–P95，包含上下界。
# 分位点使用完整精度；显示时的四舍五入不参与筛选。
price_bounds <- quantile(listing_mean_all$listing_mean_usd,
                         probs = c(0.05, 0.95), type = 7)
price_lower <- unname(price_bounds[1])
price_upper <- unname(price_bounds[2])
listing_clean <- listing_mean_all %>%
  filter(listing_mean_usd >= price_lower,
         listing_mean_usd <= price_upper)
stopifnot(nrow(positive_rows) == 27736L,
          nrow(listing_mean_all) == 11853L,
          nrow(listing_clean) == 10669L,
          !anyDuplicated(listing_clean$id),
          all(listing_mean_all$n_records == listing_mean_all$n_releases))

# ---- 09 · c5_2026_stage_counts ----
# 模块 9：按处理阶段报告数量，并明确记录与房源 ID 的单位变化。
data.frame(
  stage = c("主岛内原始记录", "有效正价记录", "按 ID 求均价",
            "均价 P5–P95 筛选后"),
  unit = c("房源—批次记录", "房源—批次记录", "不同房源 ID", "不同房源 ID"),
  count = c(nrow(main_island_rows), nrow(positive_rows),
            nrow(listing_mean_all), nrow(listing_clean))
) %>% knitr::kable(col.names = c("处理阶段", "统计单位", "保留数量"),
                   format.args = list(big.mark = ","))

# ---- 10 · c5_2026_hex_grid ----
library(sf)
library(dplyr)
library(spdep)

# 1. 网格构建：使用上一节的入选房源与原始主岛边界。
stopifnot(nrow(listing_clean) == 10669L,
          !anyDuplicated(listing_clean$id),
          all(is.finite(listing_clean$listing_mean_usd)),
          all(listing_clean$listing_mean_usd > 0))
main_island_2263 <- st_transform(main_island, 2263)
target_area_m2 <- 100000
feet_per_metre <- 3937 / 1200
cellsize_ft <- sqrt(2 * target_area_m2 / sqrt(3)) * feet_per_metre
hex_side_m <- sqrt(2 * target_area_m2 / (3 * sqrt(3)))

# 沿用主岛原始外包框的默认起点，先编号，再保留相交的完整格。
grid_origin_ft <- unname(st_bbox(main_island_2263)[c("xmin", "ymin")])
stopifnot(max(abs(grid_origin_ft -
  c(978886.7706350009, 194226.33300118599))) < 1e-6)
hex_grid <- st_make_grid(main_island_2263,
                         cellsize = cellsize_ft,
                         offset = grid_origin_ft,
                         square = FALSE) %>%
  st_sf() %>%
  mutate(hex_id = row_number()) %>%
  st_filter(main_island_2263, .predicate = st_intersects)
stopifnot(nrow(hex_grid) == 653L, all(st_is_valid(hex_grid)))

current_esda_dir <- paste0(
  "figures/manhattan_2026_multisnapshot_prototype/output/",
  "current_esda_20261026"
)

# ---- 11 · c5_2026_hex_analysis ----
# 2. 空间归属：每个 ID 只归入一个格，不按坐标删除房源。
listing_points_2263 <- st_as_sf(listing_clean,
  coords = c("longitude", "latitude"), crs = 4326,
  remove = FALSE) %>% st_transform(2263)
hex_hits <- st_intersects(listing_points_2263, hex_grid)
within_hits <- st_within(listing_points_2263, hex_grid)

# 当前数据中，每个点恰好落入一个完整格；出现零归属或多归属时先检查。
stopifnot(all(lengths(hex_hits) == 1L),
          all(lengths(within_hits) == 1L),
          identical(vapply(hex_hits, `[[`, integer(1), 1),
                    vapply(within_hits, `[[`, integer(1), 1)))
listing_members <- listing_clean %>%
  mutate(hex_id = hex_grid$hex_id[
    vapply(within_hits, `[[`, integer(1), 1)])
stopifnot(nrow(listing_members) == 10669L,
          !anyDuplicated(listing_members$id),
          !anyNA(listing_members$hex_id))

# 3. 先数不同 ID，再对达到门槛的格计算中位数。
hex_support <- listing_members %>%
  group_by(hex_id) %>%
  summarise(n_ids = n_distinct(id),
            n_coordinates = n_distinct(longitude, latitude),
            .groups = "drop")
hex_medians <- listing_members %>%
  semi_join(filter(hex_support, n_ids >= 5L), by = "hex_id") %>%
  group_by(hex_id) %>%
  summarise(median_usd = median(listing_mean_usd), .groups = "drop")
hex_values <- left_join(hex_support, hex_medians, by = "hex_id")
hex_all <- hex_grid %>%
  left_join(hex_values, by = "hex_id") %>%
  mutate(n_ids = coalesce(n_ids, 0L),
         n_coordinates = coalesce(n_coordinates, 0L),
         eligible = n_ids >= 5L)
hex_eligible <- hex_all %>% filter(eligible) %>% arrange(hex_id)
stopifnot(nrow(hex_all) == 653L, nrow(hex_eligible) == 365L,
          sum(hex_all$n_ids) == 10669L,
          all(is.na(hex_all$median_usd[!hex_all$eligible])),
          all(is.finite(hex_eligible$median_usd)))

# ---- 12 · c5_2026_neighbors ----
# 4. 邻居与孤立格：先识别无邻居格，再重建参检格的W。
neighbors_365 <- poly2nb(hex_eligible, queen = TRUE,
                        row.names = as.character(hex_eligible$hex_id))
queen_isolates <- card(neighbors_365) == 0L
isolated_hex_ids <- hex_eligible$hex_id[queen_isolates]
stopifnot(sum(queen_isolates) == 3L,
          identical(as.integer(isolated_hex_ids), c(1042L, 1389L, 1596L)))
analysis_hex <- hex_eligible[!queen_isolates, ]
neighbors <- poly2nb(analysis_hex, queen = TRUE,
                    row.names = as.character(analysis_hex$hex_id))
w <- nb2listw(neighbors, style = "W", zero.policy = FALSE)
stopifnot(nrow(analysis_hex) == 362L, all(card(neighbors) > 0L),
          n.comp.nb(neighbors)$nc == 2L,
          identical(as.character(analysis_hex$hex_id), attr(w, "region.id")))

# ---- 13 · c5_2026_global_moran ----
# 5. 标准化与全局检验：使用连续的原美元中位报价。
hex_price <- analysis_hex$median_usd
z <- as.numeric(scale(hex_price))
wz <- lag.listw(w, z, zero.policy = FALSE)
analysis_n <- length(z)
weight_sum <- Szero(w)
global_i <- analysis_n / weight_sum * sum(z * wz) / sum(z^2)

# 行标准化且没有孤立格时n=S0；过原点拟合线斜率等于Moran I。
origin_fit <- lm(wz ~ 0 + z)
stopifnot(abs(weight_sum - analysis_n) < 1e-12,
          abs(unname(coef(origin_fit)[1]) - global_i) < 1e-12,
          abs(global_i - 0.62085739252026317) < 1e-10)

RNGkind("Mersenne-Twister", "Inversion", "Rejection")
set.seed(20261024)
global_permutation <- moran.mc(hex_price, w, nsim = 9999,
  alternative = "greater", zero.policy = FALSE)
stopifnot(abs(unname(global_permutation$statistic) - global_i) < 1e-12,
          abs(global_permutation$p.value - 0.0001) < 1e-12)

# ---- 14 · c5_2026_local_moran ----
# 6. 局部条件置换：沿用同一z和W，固定单核与随机种子。
set.coresOption(1L)
set.mcOption(FALSE)
set.ClusterOption(NULL)
RNGkind("Mersenne-Twister", "Inversion", "Rejection")
set.seed(20261025)
local_permutation <- localmoran_perm(z, w, nsim = 9999,
  alternative = "two.sided", iseed = 20261025,
  no_repeat_in_row = TRUE, mlvar = TRUE, sample_Ei = TRUE,
  adjust.x = FALSE, zero.policy = FALSE)

# 只提取双侧模拟秩p；不用正态近似列或folded尾概率替代。
p_raw <- as.numeric(local_permutation[, "Pr(z != E(Ii)) Sim"])
quadrant <- case_when(
  z > 0 & wz > 0 ~ "HH",
  z < 0 & wz > 0 ~ "LH",
  z < 0 & wz < 0 ~ "LL",
  z > 0 & wz < 0 ~ "HL",
  TRUE ~ "Axis")
stopifnot(length(p_raw) == 362L, all(is.finite(p_raw)),
          !any(quadrant == "Axis"))
analysis_hex$lisa_cluster <- ifelse(p_raw <= 0.05, quadrant, "NS")
stopifnot(sum(analysis_hex$lisa_cluster == "HH") == 44L,
          sum(analysis_hex$lisa_cluster == "LH") == 2L,
          sum(analysis_hex$lisa_cluster == "LL") == 64L,
          sum(analysis_hex$lisa_cluster == "HL") == 2L,
          sum(analysis_hex$lisa_cluster == "NS") == 250L)

# ---- 15 · c5_2026_lisa_comparison ----
# 7. 分类比较：每种方法一次性处理全部362个p值，不重新模拟。
adjustment_methods <- c("none", "BH", "BY", "holm", "bonferroni")
p_adjusted <- vapply(adjustment_methods,
  function(method) p.adjust(p_raw, method = method), numeric(length(p_raw)))
lisa_class_by_method <- apply(p_adjusted, 2,
  function(p) ifelse(p <= 0.05, quadrant, "NS"))
lisa_method_counts <- bind_rows(lapply(adjustment_methods, function(method) {
  classes <- lisa_class_by_method[, method]
  data.frame(method = method, significant = sum(classes != "NS"),
             HH = sum(classes == "HH"), LH = sum(classes == "LH"),
             LL = sum(classes == "LL"), HL = sum(classes == "HL"),
             NS = sum(classes == "NS"))
}))
stopifnot(identical(lisa_method_counts$significant, c(112L, 52L, 11L, 0L, 0L)))
lisa_method_counts %>%
  knitr::kable(col.names = c("p值处理", "通过阈值", "HH", "LH", "LL", "HL", "未通过"))

# ---- 16 · c5_2026_support_summary ----
# 当前样本支持：从同一份ID归格表计算数量和格内报价离散程度。
# 诊断使用全部365个达标格，区别于Moran/LISA的362个参检格。
hex_support_current <- listing_members %>%
  group_by(hex_id) %>%
  summarise(n_id = n_distinct(id),
            median_usd = median(listing_mean_usd),
            q1 = quantile(listing_mean_usd, 0.25, type = 7),
            q3 = quantile(listing_mean_usd, 0.75, type = 7),
            iqr_usd = IQR(listing_mean_usd, type = 7), .groups = "drop") %>%
  filter(n_id >= 5L)
stopifnot(nrow(hex_support_current) == 365L,
          min(hex_support_current$n_id) == 5L,
          median(hex_support_current$n_id) == 20,
          max(hex_support_current$n_id) == 299L,
          abs(median(hex_support_current$iqr_usd) - 148.83) < 1e-8)
