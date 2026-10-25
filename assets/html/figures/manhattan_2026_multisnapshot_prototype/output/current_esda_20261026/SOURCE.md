# 当前 ESDA 图件：教材引用副本

本目录为 2026-10-26 第五章专题研究 1 同步准备。18张主图从当前第六周课件资源逐字节复制；随后补绘4张当前样本支持量的描述诊断图。没有重新拟合、执行Moran/LISA置换或改变分析输入。全部来源绝对路径、项目相对路径、SHA-256、字节数、输入 RDS 与 JSON 指纹见 `manifest.json`。

## 教材可引用的主图

| 文件 | 数据与含义 |
|---|---|
| `hex-median-light.png` / `hex-median-dark.png` | 当前 10,669 个入选房源 ID 归入 0.10 km² 完整六边形；653 格中 365 格达到至少 5 个不同 ID 的门槛。每格属性为 ID 跨期均价的中位数，Fisher 七级仅用于设色。 |
| `moran-scatter-light.png` / `moran-scatter-dark.png` | 排除 3 个 Queen 无邻居格后，对 362 格重新标准化原美元中位报价；横轴 z、纵轴行标准化空间滞后 Wz。全局线斜率为 0.620857392520263，等于本设定下的 Moran’s I。 |
| `lisa-none-significant-light.png` / `lisa-none-significant-dark.png` | 同一批 362 格的 LISA 地图与对应 Moran 散点。默认原始双侧模拟 p≤0.05：HH44、LH2、LL64、HL2，共112格；其余250格未通过。 |

Moran 与默认 LISA 另有同名 SVG。当前六边形图源只产生 PNG，没有 `hex-median-light.svg` / `hex-median-dark.svg`；本目录不创建替代 SVG。

## 局部检验方法对照

`lisa-{BH,BY,holm,bonferroni}-significant-{light,dark}.png` 共8张。各方法使用同一批362格及同一批保存的原始模拟p值：BH52格、BY11格、Holm0格、Bonferroni0格。图中散点坐标及全局拟合线不因显著子集而重新拟合。

## 当前来源链

1. `第5章/figures/manhattan_2026_multisnapshot_prototype/output/listing_mean_first_preprocessing/listing_mean_first_data.rds`：有效正价 → 同 ID 算术均价 → ID 均价 P5–P95，保留10,669个ID。
2. `第六周_第五章重点解析1_工作区/media/topic1/hex-current/hex_median_data.rds`：365个达到至少5ID门槛的完整六边形；地图边界遮罩只用于显示。
3. `第六周_第五章重点解析1_工作区/media/topic1/moran-current/moran_analysis_data.rds`：362个有Queen邻居格，行标准化W、同一z/Wz；全局9,999次单侧greater置换，seed20261024，p=0.0001。
4. `第六周_第五章重点解析1_工作区/media/topic1/lisa-current/lisa_analysis_data.rds`：局部9,999次双侧条件置换，单核、seed20261025、邻域内无放回；当前默认p处理为none。

本次只读取以上 RDS 以核对 SHA-256，没有将 RDS 复制进本目录，也没有执行统计。三个复制的 JSON 文件为 `hex_median_qa.json`、`moran_analysis.json`、`lisa_method_comparison.json`，文件名互不冲突并保持原字节。JSON 中关于“本轮未重算下游”的字段是各自制图阶段的历史边界，不表示此处引用的是旧流程结果。

## 生成脚本溯源

- 六边形图：课件 `media/topic1/hex-current/` 内当前图源与统计核对。
- Moran 图：课件 `media/topic1/moran-current/render_moran_plot.R` 及当前分析元数据。
- LISA 方法图：课件 `media/topic1/lisa-current/render_lisa_methods.R` 及 `lisa_method_comparison.json`。

这些课件路径只用于追溯；教材嵌图直接读取本目录的本地图件，不需要访问课件运行时。Rmd 分析代码应从自己的上游分析对象计算，不能以旧试算 RDS 替换新输入。

## 核对

- 18张图件与3个JSON均逐字节匹配来源。
- cohort → hex → Moran → LISA 四个输入RDS的实际SHA-256均匹配当前元数据。
- 365个达标格与362个参检格、默认none112及各方法数量已分别核对。
- 证据：项目 `output/chapter5-topic1-current-qa-20261026/current_assets_copy_check.json`。
- 未运行浏览器视觉验收；此副本操作不新增视觉验收声明。

## 当前描述诊断图补充

新增`build_current_support_diagnostics.R`，复用`第5章/figures/airbnb-support-diagnostics/support_diagnostics.R`的图形组织与12张既有Esri缓存瓦片。输入改为当前`hex_median_data.rds`，统计基于365个达标完整格及其中10,412个ID；保存的显示裁切几何仅用于出图。没有网络瓦片请求，也没有重跑Moran/LISA。

- `cell_examples_light.png` / `cell_examples_dark.png`：固定格662/381的当前房源ID均价与箱线图，两图同一纵轴。固定教学例仍有效，但不称为当前按IQR比选择的最大一对。
- `support_maps_light.png` / `support_maps_dark.png`：当前365格的不同房源ID数与格内ID均价IQR，分别采用Fisher五级显示。ID数最小/中位/最大为5/20/299；IQR为1.83/148.83/654.55美元／夜。
- `current_cell_support_diagnostics.csv`保存365格的n、Q1、Q3、IQR及中位数；`current_fixed_pair_statistics.csv`和`current_fixed_pair_listings.csv`保存两固定格及其成员。

图面采用英文Arial，中文解释与图注由Rmd提供；没有在栅格图中绘制中文，因此没有新增中文绘图字形问题。四张PNG已静态目视检查，未见明显标题、图例、坐标轴、比例尺或指北针重叠。该检查不等于浏览器视觉验收。

缓存JPEG不含地理头，每张读取时产生`[rast] unknown extent`提示；脚本立即根据XYZ缓存键赋予精确EPSG:3857范围与CRS，再拼接与投影。12条提示及处理理由保留在`qa_current_support/current_diagnostics_check.json`，绘图阶段警告为空。Windows R启动时的C.UTF-8 locale提示在脚本设置`.UTF-8`后不影响本次成图。

新增图件、脚本、表格与QA均在manifest中标为`derived: true`，与逐字节复制的主图区分。完整渲染核对另见项目`output/chapter5-topic1-current-qa-20261026/current_support_render_check.json`。
