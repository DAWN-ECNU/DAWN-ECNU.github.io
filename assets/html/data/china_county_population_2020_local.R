# 第 4 章 5.1.2 本地制图预览：2020 年县级常住人口。
# 2020 年人口来自 Lei Dong 团队整理的第七次人口普查年鉴数据；
# 省、市、县边界来自本地 SHP；边界底图审图号：GS（2024）0650号。
# 本脚本生成教学预览；新增人口专题内容后的图面需按实际用途核对审核要求。

Sys.setlocale("LC_CTYPE", ".UTF-8")
library(cowplot)
library(classInt)
library(dplyr)
library(ggplot2)
library(readr)
library(sf)
library(viridisLite)

shape_dir <- Sys.getenv("CHINA_DIVISION_DIR")
if (!dir.exists(shape_dir)) {
  stop("请先将边界 SHP 文件夹路径设为 CHINA_DIVISION_DIR。")
}
read_shape <- function(stem) {
  st_read(file.path(shape_dir, paste0(stem, ".shp")), quiet = TRUE)
}

# 1. 几何、代码与普查表只读取一次。
county <- read_shape("中国_县")
city <- read_shape("中国_市")
province <- read_shape("中国_省")
border_raw <- read_shape("国界线")
border <- border_raw %>% filter(name == "国界线-已定国界")
border_undefined <- border_raw %>% filter(name == "国界线-未定国界")
ten_dash <- read_shape("十段线")

layers <- list(county, city, province, border_raw, ten_dash)
if (any(vapply(layers, function(x) {
  is.na(st_crs(x)) || is.na(st_crs(x)$epsg) || st_crs(x)$epsg != 4326
}, logical(1)))) {
  stop("图层 CRS 与预期的 EPSG:4326 不一致，请检查源文件。")
}

census <- read_csv(
  "data/china_county_population_2020.csv",
  col_types = cols(
    county_code = col_character(),
    province = col_character(),
    city = col_character(),
    county_name = col_character(),
    population_2020 = col_double()
  ),
  show_col_types = FALSE
) %>%
  select(county_code, census_name = county_name, population_2020)

county_key <- county %>%
  st_drop_geometry() %>%
  transmute(county_code = substr(as.character(gb), 4, 9), map_name = name)
if (anyDuplicated(county_key$county_code) || anyDuplicated(census$county_code)) {
  stop("县级代码有重复，不能执行一对一连接。")
}

# 2. 默认要求六位县码与名称同时一致；区划更名和撤并只使用下列逐条核实的映射。
# 原始人口来自 data/census_county_2020_v1.xlsx 的“七普（年鉴）”工作表。
# 同码异名 8 项与一对一改码 12 项均显式列出旧名，防止“南沙区”等重名误连。
# 撤并依据：福建省政府闽政文〔2021〕49号、洛阳市政府历史沿革。
# 三沙依据：民政部 2020-04-18 公告；西沙区管辖西沙、代管中沙，南沙区管辖南沙。
# https://www.fujian.gov.cn/zwgk/zxwj/szfwj/202102/t20210203_5530849.htm
# https://www.ly.gov.cn/mlly/lsyg/
# https://mzj.panjin.gov.cn/2020_04/20_14/content-63560.html
exact_population <- county_key %>%
  inner_join(census, by = "county_code") %>%
  filter(map_name == census_name) %>%
  transmute(county_code, population_2020, match_type = "代码及名称一致")

renamed_units <- tibble::tribble(
  ~county_code, ~map_name, ~source_code, ~source_name, ~match_type,
  "632301", "同仁市", "632301", "同仁县", "同码异名",
  "520204", "水城区", "520204", "水城县", "同码异名",
  "421088", "监利市", "421088", "监利县", "同码异名",
  "540422", "米林市", "540422", "米林县", "同码异名",
  "320614", "海门区", "320614", "海门市", "同码异名",
  "340212", "繁昌区", "340212", "繁昌县", "同码异名",
  "340210", "湾沚区", "340210", "芜湖县", "同码异名",
  "540530", "错那市", "540530", "错那县", "同码异名",
  "520581", "黔西市", "520522", "黔西县", "一对一改码",
  "450181", "横州市", "450127", "横县", "一对一改码",
  "513402", "会理市", "513425", "会理县", "一对一改码",
  "610981", "旬阳市", "610928", "旬阳县", "一对一改码",
  "350604", "龙海区", "350681", "龙海市", "一对一改码",
  "350605", "长泰区", "350625", "长泰县", "一对一改码",
  "410307", "偃师区", "410381", "偃师市", "一对一改码",
  "654203", "沙湾市", "654223", "沙湾县", "一对一改码",
  "532302", "禄丰市", "532331", "禄丰县", "一对一改码",
  "610305", "凤翔区", "610322", "凤翔县", "一对一改码",
  "431181", "祁阳市", "431121", "祁阳县", "一对一改码",
  "350405", "沙县区", "350427", "沙县", "一对一改码"
)
if (nrow(dplyr::anti_join(renamed_units, county_key,
                          by = c("county_code", "map_name"))) != 0) {
  stop("更名映射与当前县界代码或名称不符。")
}
renamed_population <- renamed_units %>%
  left_join(census %>%
              transmute(source_code = county_code,
                        observed_name = census_name, population_2020),
            by = "source_code")
if (any(is.na(renamed_population$population_2020)) ||
    any(renamed_population$source_name != renamed_population$observed_name)) {
  stop("更名映射与 2020 人口表的代码或名称不符。")
}
renamed_population <- renamed_population %>%
  select(county_code, population_2020, match_type)

# 两个新设区是完整撤并：分别合计 2020 年前身单元的人口。
merged_parts <- tibble::tribble(
  ~county_code, ~map_name, ~source_code, ~source_name,
  "410308", "孟津区", "410322", "孟津县",
  "410308", "孟津区", "410306", "吉利区",
  "350404", "三元区", "350402", "梅列区",
  "350404", "三元区", "350403", "三元区"
)
if (nrow(dplyr::anti_join(merged_parts, county_key,
                          by = c("county_code", "map_name"))) != 0) {
  stop("撤并映射与当前县界代码或名称不符。")
}
merged_parts <- merged_parts %>%
  left_join(census %>%
              transmute(source_code = county_code,
                        observed_name = census_name, population_2020),
            by = "source_code")
if (any(is.na(merged_parts$population_2020)) ||
    any(merged_parts$source_name != merged_parts$observed_name)) {
  stop("撤并映射与 2020 人口表的代码或名称不符。")
}
merged_population <- merged_parts %>%
  group_by(county_code) %>%
  summarise(population_2020 = sum(population_2020),
            match_type = "撤并单元合计", .groups = "drop")

# 三沙三个分项在原始年鉴表中没有六位区划码，因此另存为核对表。
# 西沙 1,549 + 中沙 145 = 西沙区 1,694；南沙 639 = 南沙区；合计须等于三沙市 2,333。
sansa_raw <- read_csv(
  "data/china_sansha_population_2020.csv",
  col_types = cols(
    record_type = col_character(), source_name = col_character(),
    source_code = col_character(), population_2020 = col_double()
  ),
  show_col_types = FALSE
)
sansa_parts <- sansa_raw %>%
  filter(record_type == "群岛分项") %>%
  select(source_name, source_code, population_2020)
sansa_total <- sansa_raw %>%
  filter(record_type == "市级合计", source_code == "460300",
         source_name == "三沙市") %>%
  pull(population_2020)
if (nrow(sansa_parts) != 3 || any(!is.na(sansa_parts$source_code)) ||
    any(is.na(sansa_parts$population_2020)) ||
    length(sansa_total) != 1 || sum(sansa_parts$population_2020) != sansa_total) {
  stop("三沙人口分项与原始年鉴表的三沙市总数不一致。")
}
sansa_mapping <- tibble::tribble(
  ~county_code, ~map_name, ~source_name,
  "460321", "西沙区", "西沙群岛",
  "460321", "西沙区", "中沙群岛的岛礁及其海域",
  "460322", "南沙区", "南沙群岛"
)
if (nrow(dplyr::anti_join(sansa_mapping, county_key,
                          by = c("county_code", "map_name"))) != 0) {
  stop("三沙映射与当前县界代码或名称不符。")
}
sansa_population_parts <- sansa_mapping %>%
  left_join(sansa_parts, by = "source_name")
if (any(is.na(sansa_population_parts$population_2020))) {
  stop("三沙映射缺少原始年鉴表人口分项。")
}
sansa_population <- sansa_population_parts %>%
  group_by(county_code) %>%
  summarise(population_2020 = sum(population_2020),
            match_type = "三沙分项合计", .groups = "drop")

population_lookup <- bind_rows(
  exact_population, renamed_population, merged_population, sansa_population
)
if (anyDuplicated(population_lookup$county_code) ||
    any(is.na(population_lookup$population_2020)) ||
    any(population_lookup$population_2020 <= 0)) {
  stop("人口映射重复、缺失或含非正数，不能用于对数分级。")
}

invalid_count <- sum(!st_is_valid(county))
county <- county %>%
  mutate(county_code = substr(as.character(gb), 4, 9)) %>%
  left_join(population_lookup, by = "county_code") %>%
  mutate(geometry = st_make_valid(geometry))

mainland <- !substr(county$county_code, 1, 2) %in% c("71", "81", "82")
cat("县界总数：", nrow(county), "；非港澳台代码县界：", sum(mainland),
    "；有值：", sum(mainland & !is.na(county$population_2020)),
    "；修复前无效几何：", invalid_count, "\n")
print(county %>% st_drop_geometry() %>% filter(mainland) %>%
        count(match_type, name = "县界数"))
cat("仍缺人口的非港澳台代码县界：\n")
print(county %>% st_drop_geometry() %>%
        filter(mainland & is.na(population_2020)) %>%
        select(county_code, name), row.names = FALSE)

# 3. 在 log10(人口) 上求 Fisher–Jenks 断点，再按原始人数分组。
#    少数人口极高的县会拉开原值分级；对数分级让地图主体更易辨认。
population_values <- county$population_2020[!is.na(county$population_2020)]
class_count <- 5L
log_breaks <- classInt::classIntervals(
  log10(population_values), n = class_count, style = "fisher",
  largeN = Inf  # 固定使用全部有值县，不进行抽样
)$brks
population_breaks <- 10^log_breaks
population_breaks[c(1, class_count + 1L)] <- range(population_values)
if (any(diff(population_breaks) <= 0)) {
  stop("人口分级断点没有严格递增，请检查数据。")
}

# 实际分组使用计算所得断点；图例仅把人数格式化为两位“万人”。
inner_wan <- population_breaks[2:class_count] / 10000
class_labels <- c(
  sprintf("≤%.2f 万", inner_wan[1]),
  vapply(seq_len(class_count - 2L), function(i) {
    sprintf(">%.2f–%.2f 万", inner_wan[i], inner_wan[i + 1L])
  }, character(1)),
  sprintf(">%.2f 万", tail(inner_wan, 1))
)
missing_label <- "无同口径数据"
class_levels <- c(class_labels, missing_label)
population_class <- as.character(cut(
  county$population_2020, breaks = population_breaks,
  labels = class_labels, include.lowest = TRUE, right = TRUE
))
population_class[is.na(population_class)] <- missing_label
county$population_class <- factor(population_class, levels = class_levels)
print(table(county$population_class))

# 仍沿用 mako 色系，只取较亮的五级；缺失值单列为浅灰色。
missing_fill <- "#BBC3C7"
class_colours <- c(
  setNames(viridisLite::mako(class_count, begin = 0.42, end = 0.95,
                             direction = -1), class_labels),
  setNames(missing_fill, missing_label)
)

# 4. 县/市/省界由细到粗；主图和南海附图共用类别及颜色。
map_crs <- st_crs(paste(
  "+proj=aea +lat_1=25 +lat_2=47 +lat_0=0 +lon_0=105",
  "+datum=WGS84 +units=m +no_defs"
))
font_family <- "sans"  # Windows 绘图设备会为中文选择系统回退字体
map_theme <- theme_minimal(base_size = 9, base_family = font_family) +
  theme(
    panel.grid.major = element_line(colour = "#D5E3E9", linewidth = 0.18),
    panel.grid.minor = element_blank(),
    panel.background = element_rect(fill = "#EAF3F6", colour = NA),
    plot.background = element_rect(fill = "white", colour = NA),
    axis.title = element_blank(),
    axis.text = element_text(colour = "#53646B", size = 7.7),
    legend.title = element_text(colour = "#23363E", face = "bold", size = 10),
    legend.text = element_text(colour = "#485B64", size = 9),
    legend.key.spacing.y = unit(1.3, "mm"),
    plot.margin = margin(4, 4, 4, 4)
  )

boundary_layers <- list(
  geom_sf(data = city, fill = NA, colour = "#5F7077", linewidth = 0.10,
          alpha = 0.50, show.legend = FALSE),
  geom_sf(data = province, fill = NA, colour = "#2D4049", linewidth = 0.26,
          show.legend = FALSE),
  geom_sf(data = border, colour = "#21343D", linewidth = 0.48,
          show.legend = FALSE),
  geom_sf(data = border_undefined, colour = "#21343D", linewidth = 0.48,
          linetype = "dashed", show.legend = FALSE),
  geom_sf(data = ten_dash, colour = "#21343D", linewidth = 0.52,
          show.legend = FALSE)
)

main_map <- ggplot() +
  geom_sf(data = county, aes(fill = population_class),
          colour = "#8A989D80", linewidth = 0.035, show.legend = TRUE) +
  boundary_layers +
  annotate("label", x = 128.2, y = 24.0,
           label = "台湾省\n资料暂缺", family = font_family,
           colour = "#4B5A60", fill = "white", size = 2.7,
           linewidth = 0.18, label.padding = unit(0.10, "lines")) +
  scale_fill_manual(
    values = class_colours, breaks = class_levels, drop = FALSE,
    name = "县级常住人口\n2020 年",
    guide = guide_legend(
      keyheight = unit(5.1, "mm"), keywidth = unit(5.1, "mm"),
      override.aes = list(colour = "#71818A", linewidth = 0.22)
    )
  ) +
  coord_sf(crs = map_crs, default_crs = st_crs(4326),
           xlim = c(73, 136), ylim = c(16, 57), expand = FALSE) +
  map_theme

map_legend <- cowplot::get_legend(main_map)

south_map <- ggplot() +
  geom_sf(data = county, aes(fill = population_class),
          colour = "#8A989D80", linewidth = 0.055) +
  geom_sf(data = province, fill = NA, colour = "#60747D", linewidth = 0.20) +
  geom_sf(data = ten_dash, colour = "#25414E", linewidth = 0.52) +
  scale_fill_manual(values = class_colours, breaks = class_levels,
                    drop = FALSE, guide = "none") +
  coord_sf(crs = map_crs, default_crs = st_crs(4326),
           xlim = c(105, 125), ylim = c(2, 26), expand = FALSE) +
  labs(title = "南海诸岛", subtitle = "岛礁与主图共用人口分级") +
  map_theme +
  theme(
    plot.title = element_text(face = "bold", size = 8.5, colour = "#23363E"),
    plot.subtitle = element_text(size = 7.2, colour = "#50616A"),
    panel.border = element_rect(fill = NA, colour = "#84969F", linewidth = 0.38),
    axis.text = element_blank(), axis.ticks = element_blank(),
    panel.grid = element_blank(),
    plot.margin = margin(3, 3, 3, 3)
  )

preview <- ggdraw() +
  draw_plot(main_map + theme(legend.position = "none"),
            x = 0.005, y = 0.075, width = 0.78, height = 0.91) +
  draw_grob(map_legend, x = 0.79, y = 0.55, width = 0.20, height = 0.40) +
  draw_plot(south_map, x = 0.79, y = 0.13, width = 0.19, height = 0.38) +
  draw_label(
    "人口：第七次人口普查（2020）  ·  边界底图审图号：GS（2024）0650号",
    x = 0.022, y = 0.030, hjust = 0, size = 8.1,
    fontfamily = font_family, colour = "#52646C"
  )

ggsave("images/china_county_population_2020_local.png", preview,
       width = 10.2, height = 6.5, dpi = 300, bg = "white",
       device = ragg::agg_png)
