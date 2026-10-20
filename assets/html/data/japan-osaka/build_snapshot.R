# Build the small, local Osaka teaching snapshot from two official 2024 sources.
# Run from any working directory: Rscript 第4章/data/japan-osaka/build_snapshot.R

# Windows may start R in a non-UTF-8 locale even when the project path is Chinese.
if (.Platform$OS.type == "windows") Sys.setlocale("LC_CTYPE", ".UTF-8")

library(sf)
library(dplyr)
library(tidyr)
library(stringr)
library(readxl)

script_arg <- grep("^--file=", commandArgs(trailingOnly = FALSE), value = TRUE)
if (length(script_arg) != 1L) stop("Run this file with Rscript.")
output_dir <- dirname(normalizePath(sub("^--file=", "", script_arg)))

boundary_url <- paste0(
  "https://nlftp.mlit.go.jp/ksj/gml/data/N03/N03-2024/",
  "N03-20240101_27_GML.zip"
)
population_url <- paste0(
  "https://www.stat.go.jp/data/nenkan/75nenkan/zuhyou/",
  "y750204000.xlsx"
)

working_dir <- tempfile("osaka_snapshot_")
dir.create(working_dir)
on.exit(unlink(working_dir, recursive = TRUE), add = TRUE)

boundary_zip <- file.path(working_dir, "N03-20240101_27_GML.zip")
population_xlsx <- file.path(working_dir, "y750204000.xlsx")
download.file(boundary_url, boundary_zip, mode = "wb", method = "libcurl", quiet = TRUE)
download.file(population_url, population_xlsx, mode = "wb", method = "libcurl", quiet = TRUE)
unzip(boundary_zip, exdir = working_dir)

# N03_004 is the municipality name. Osaka and Sakai are divided into ward
# records in the source; dissolve those records to obtain city polygons.
boundary_raw <- st_read(
  file.path(working_dir, "N03-20240101_27.shp"), quiet = TRUE
)
st_crs(boundary_raw) <- 6668  # Source .prj states JGD2011 geographic coordinates.
municipalities <- boundary_raw %>%
  filter(!is.na(N03_004), nzchar(N03_004)) %>%
  group_by(municipality_ja = N03_004) %>%
  summarise(
    source_code_count = n_distinct(N03_007),
    source_codes = paste(sort(unique(N03_007)), collapse = ";"),
    .groups = "drop"
  ) %>%
  st_make_valid() %>%
  st_transform(4326) %>%
  arrange(municipality_ja)

# The Yearbook worksheet uses two side-by-side panels. Pair each Japanese
# municipality name with its English name and population before stacking.
yearbook <- read_excel(population_xlsx, col_names = FALSE,
                       .name_repair = "minimal")
population_all <- bind_rows(
  tibble(
    municipality_ja = yearbook[[1]], municipality_en = yearbook[[2]],
    population_text = yearbook[[3]]
  ),
  tibble(
    municipality_ja = yearbook[[4]], municipality_en = yearbook[[5]],
    population_text = yearbook[[6]]
  )
) %>%
  mutate(
    municipality_ja = str_remove(municipality_ja, "^[\\s\\u3000]+"),
    municipality_ja = str_trim(municipality_ja),
    population_2024 = suppressWarnings(as.integer(population_text))
  ) %>%
  filter(str_ends(municipality_ja, "市"), !is.na(population_2024)) %>%
  select(municipality_ja, municipality_en, population_2024)

# A name-only join is safe here only if every Osaka name occurs exactly once
# in the national Yearbook table. Stop if that ceases to be true.
osaka_names <- st_drop_geometry(municipalities)$municipality_ja
name_counts <- population_all %>%
  filter(municipality_ja %in% osaka_names) %>%
  count(municipality_ja, name = "match_count")
if (any(name_counts$match_count != 1L)) stop("Duplicate city name in Yearbook.")

population <- municipalities %>%
  mutate(area_km2 = round(as.numeric(st_area(geometry)) / 1e6, 2)) %>%
  st_drop_geometry() %>%
  select(municipality_ja, area_km2) %>%
  left_join(population_all, by = "municipality_ja") %>%
  mutate(
    is_city = str_ends(municipality_ja, "市"),
    major_city = !is.na(population_2024) & population_2024 >= 300000L,
    density_per_km2 = round(population_2024 / area_km2, 1)
  )
if (any(population$is_city & is.na(population$population_2024))) {
  stop("One or more Osaka cities did not match the official population table.")
}

st_write(
  municipalities, file.path(output_dir, "osaka_municipalities_2024.gpkg"),
  layer = "municipalities", delete_dsn = TRUE, quiet = TRUE
)
write.csv(
  population, file.path(output_dir, "osaka_population_2024.csv"),
  row.names = FALSE, na = "", fileEncoding = "UTF-8"
)

cat(
  "Municipalities:", nrow(population),
  "| cities matched:", sum(population$is_city),
  "| non-city units without population:", sum(!population$is_city),
  "| major cities (>=300,000):", sum(population$major_city), "\n"
)
