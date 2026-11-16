# 在 EPSG:2263 中生成 45° 斜线，再裁切到无跨区行程的分区内部。
# spacing 为垂直间距，单位是英尺；500 英尺约为 152.4 米。
make_no_flow_hatching <- function(zones, spacing = 500) {
  bounds <- st_bbox(zones)
  offsets <- seq(bounds['xmin'] - bounds['ymax'],
                 bounds['xmax'] - bounds['ymin'], by = spacing * sqrt(2))
  diagonals <- lapply(offsets, function(offset) {
    st_linestring(rbind(c(offset + bounds['ymin'], bounds['ymin']),
                        c(offset + bounds['ymax'], bounds['ymax'])))
  })
  clipped <- st_intersection(st_sfc(diagonals, crs = st_crs(zones)),
                             st_union(st_geometry(zones)))
  st_sf(geometry = clipped[!st_is_empty(clipped)])
}

# 将纹理图例放在色条本体所在行，避免标题与刻度影响垂直对齐。
imbalance_grob <- function(plot = p_imbalance) {
  chart <- ggplotGrob(plot)
  box_index <- which(chart$layout$name == 'guide-box-bottom')
  box <- chart$grobs[[box_index]]
  guide_index <- which(box$layout$name == 'guides')
  guide <- box$grobs[[guide_index]]
  bar_index <- which(guide$layout$name == 'bar')
  bar <- guide$layout[bar_index, ]
  guide$grobs[[bar_index]] <- grid::grobTree(guide$grobs[[bar_index]],
    vp = grid::viewport(name = 'c6-imbalance-gradient-vp'))

  key_width <- 7
  key_height <- 3.5
  offset <- seq(-key_height, key_width, by = 0.7)
  key <- grid::grobTree(
    grid::rectGrob(gp = grid::gpar(fill = map_style$panel, col = NA)),
    grid::segmentsGrob(
      x0 = grid::unit(offset, 'mm'), y0 = grid::unit(0, 'mm'),
      x1 = grid::unit(offset + key_height, 'mm'), y1 = grid::unit(key_height, 'mm'),
      gp = grid::gpar(col = map_style$ink, lwd = 0.18 * 72.27 / 25.4)),
    grid::rectGrob(gp = grid::gpar(fill = NA, col = map_style$ink, lwd = 0.5)),
    vp = grid::viewport(name = 'c6-no-flow-key-vp', clip = 'on'))
  label <- grid::textGrob('No cross-zone trips', x = 0, hjust = 0,
    gp = grid::gpar(col = map_style$ink, fontsize = 9.5, fontfamily = 'sans'))
  last_column <- length(guide$widths)
  guide <- gtable::gtable_add_cols(guide,
    grid::unit.c(grid::unit(c(4, key_width, 2), 'mm'), grid::grobWidth(label)))
  guide <- gtable::gtable_add_grob(guide, key,
    t = bar$t, b = bar$b, l = last_column + 2, name = 'c6-no-flow-pattern-key')
  guide <- gtable::gtable_add_grob(guide, label,
    t = bar$t, b = bar$b, l = last_column + 4, clip = 'off', name = 'c6-no-flow-pattern-label')
  box$grobs[[guide_index]] <- guide
  box$widths[box$layout$l[guide_index]] <- sum(guide$widths)
  chart$grobs[[box_index]] <- box
  chart
}
