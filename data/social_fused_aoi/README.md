# 社交媒体融合AOI案例的配套文件

课堂数据为上一级目录的`social_media_gps_2023_2025.csv`，共72,000条。2023、2024、2025年，闵行区和普陀区，每区每年包含6,000条微博与6,000条小红书（RedNote）记录。

CSV仅含`posted_at`、`x`、`y`、`user_id`、`platform`五列。`x`为经度，`y`为纬度，单位为度。用户ID为平台内一致的匿名替代编号，两平台分别编码，同坐标记录频次完整保留。微博时间保留时分秒，小红书保留发布日期，源字段均未带时区标记。字段释义见`field_dictionary.csv`。

## 缓存边界

- `shanghai_city.geojson`为上海市轮廓。
- `shanghai_districts.geojson`包含16个区。
- `study_area.geojson`包含闵行区和普陀区。
- `boundary_provenance.json`记录来源、转换方法、取数日期与文件指纹。

边界来自高德行政区域查询接口，查询日期为2026年11月8日，底层边界更新日期未注明。原生GCJ-02坐标通过公开正向公式的迭代逆解近似转换为WGS84。模型往返残差反映内部数值一致性，实际位置精度仍受源边界与转换方法影响。微博源坐标注明WGS84，小红书暂按WGS84解释，其位置字段表示笔记关联地点。

正常课堂分析读取CSV与缓存边界。`R`代码以每区每年融合后的12,000条记录估计KDE，并描述AOI的年度变化。两平台各占一半是课堂数据设计，结果需按该数据构成解释。

[高德行政区域查询文档](https://lbs.amap.com/api/webservice/guide/api/district/) · [坐标模型及许可](https://github.com/wandergis/coordtransform)
