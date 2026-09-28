---
layout: page
permalink: /data/
dawn_section: data
title: "<span class='nav-cn'>数据</span><span class='nav-en'>Data</span>"
nav: true
nav_order: 5

# --- 数据集信息 ---
datasets:
  - name: "2024年中国新一线城市专利申请数据（须处理）"
    desc: "新一线15城市2024专利数据"
    icon: "fas fa-table" # 兼容性极好的面/多边形图标
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/patent_new_tier_2024_raw.csv"

  - name: "2024年超一线、新一线常驻人口数据"
    desc: "2024年一线城市常住人口数据"
    icon: "fas fa-table" # 兼容性极好的面/多边形图标
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/2024年超一线及新一线城市常住人口.csv"

  - name: "2024年中国超一线城市专利申请数据（须处理）"
    desc: "超一线4城市2024专利数据"
    icon: "fas fa-table" # 兼容性极好的面/多边形图标
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/patent_bj_sh_sz_gz_2024_raw.csv"

  - name: "大伦敦地区2025年10月-12月推特数据点"
    desc: "大伦敦地区推特数据"
    icon: "fas fa-table" # 兼容性极好的面/多边形图标
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/tweet_2020_10_12.csv"

  - name: "大伦敦地区2025年11月Airbnb房源点"
    desc: "大伦敦地区Airbnb房源数据"
    icon: "fas fa-table" # 兼容性极好的面/多边形图标
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/london2025_11_airbnb.csv"

  - name: "纽约市Taxi Zone边界"
    desc: "纽约市Taxi Zone边界数据"
    icon: "fas fa-map" # 兼容性极好的面/多边形图标
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/nyc_boundary.geojson"

  - name: "纽约市网约车采样数据"
    desc: "2026年1月纽约市网约车10%采样数据"
    icon: "fas fa-table" # 兼容性极好的面/多边形图标
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/nyc_taxi_202601_sample.csv"

  - name: "上海市边界"
    desc: "上海市行政边界底图数据"
    icon: "fas fa-map" # 兼容性极好的面/多边形图标
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/shanghai_boundary.geojson"

  - name: "微博采样数据"
    desc: "Weibo 采样数据 (4% 比例)"
    icon: "fas fa-table" # 兼容性极好的表格/CSV图标
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/weibo_sample_4pct.csv"

  - name: "便利超市 POI"
    desc: "上海市便利店与超市空间数据"
    icon: "fas fa-map-marker-alt" # 兼容性极好的点位图标
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/便利超市.geojson"

  - name: "公交站 POI"
    desc: "公共交通站点空间分布数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/公交站.geojson"

  - name: "公园 POI"
    desc: "城市绿地与公园空间数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/公园.geojson"

  - name: "咖啡厅 POI"
    desc: "各类咖啡馆、饮品店数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/咖啡厅.geojson"

  - name: "地铁站 POI"
    desc: "轨道交通站点及出口数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/地铁站.geojson"

  - name: "餐厅 POI"
    desc: "餐饮服务业空间分布数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/餐厅.geojson"
---

<style>
  /* 强制消除表格底色干扰 */
  .custom-data-table {
    background-color: transparent !important;
    --bs-table-bg: transparent !important;
    --bs-table-accent-bg: transparent !important;
    --bs-table-striped-bg: transparent !important;
  }
  .custom-data-table th,
  .custom-data-table td {
    background-color: transparent !important;
    color: var(--global-text-color);
    border-bottom: 1px solid var(--global-divider-color) !important;
  }
  .custom-data-table thead th {
    border-bottom: 2px solid var(--global-divider-color) !important;
  }
  .custom-data-table td code {
    background: transparent !important;
    box-shadow: none !important;
    color: inherit;
    padding: 0;
  }

  /* 彻底修复下载按钮在各模式下的对比度问题 */
  a.btn-data-download {
    /* 这里改成了 global-text-color: 白天是深灰色，黑夜是亮白色，保证绝对看得清 */
    color: var(--global-text-color) !important; 
    border: 1.5px solid var(--global-theme-color) !important;
    padding: 4px 12px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none !important;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    background-color: transparent !important;
  }

  /* 悬停动画：调用悬停色，并根据配置改变文字颜色以适应背景 */
  a.btn-data-download:hover {
    background-color: var(--global-hover-color) !important;
    border-color: var(--global-hover-color) !important;
    color: var(--global-hover-text-color) !important;
    transform: translateY(-1px);
  }

  .btn-data-download:focus-visible,
  .btn-data-cancel:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 3px;
  }

  a.btn-data-download[aria-disabled="true"] {
    cursor: wait;
    transform: none;
  }

  .btn-data-cancel {
    margin-left: 0.5rem;
    padding: 4px 8px;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    background: transparent;
    color: var(--global-text-color);
  }

  .data-download-status {
    display: block;
    max-width: 18rem;
    margin-top: 0.35rem;
    color: var(--global-text-color);
    font-size: 0.85rem;
    overflow-wrap: anywhere;
  }

  .data-download-status:empty {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    a.btn-data-download,
    a.btn-data-download:hover {
      transition: none;
      transform: none;
    }
  }
</style>
<noscript>
  <style>
    html body.dawn-section-page[data-dawn-section="data"] .dawn-data-group .custom-data-table tr.dawn-data-extra[hidden] { display: table-row !important; }
  </style>
</noscript>

<div class="projects">
  <p>教学与研究数据，按文件类型浏览和下载。</p>

{% assign data_formats = 'csv,geojson' | split: ',' %}

  <div class="dawn-data-groups">
    {% for format in data_formats %}
      {% assign file_type = format | prepend: '.' %}
      {% assign group_items = page.datasets | where: 'type', file_type %}
      {% assign remaining = group_items.size | minus: 3 %}
      {% if format == 'csv' %}
        {% assign group_title = 'CSV · 表格数据' %}
      {% else %}
        {% assign group_title = 'GeoJSON · 空间数据' %}
      {% endif %}
      <section class="dawn-data-group" aria-labelledby="dawn-data-{{ format }}-title">
        <div class="table-responsive">
          <div class="dawn-data-group__header">
            <div class="dawn-data-group__identity">
              <h2 id="dawn-data-{{ format }}-title">{{ group_title }}</h2>
              <span>{{ group_items.size }} 项数据</span>
            </div>
            {% if remaining > 0 %}
              <button class="dawn-data-group__toggle" type="button" aria-controls="dawn-data-{{ format }}-body" aria-expanded="false" hidden>
                <span class="dawn-data-group__toggle-label">展开其余 {{ remaining }} 项</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            {% endif %}
          </div>
          <p class="dawn-data-group__status" role="status" aria-live="polite"></p>
          <table class="table table-sm custom-data-table" style="border-collapse: collapse;" aria-labelledby="dawn-data-{{ format }}-title">
            <thead>
              <tr>
                <th scope="col" style="border-top: none;">数据名称 / Dataset</th>
                <th scope="col" class="d-none d-md-table-cell" style="border-top: none;">类型</th>
                <th scope="col" class="text-right" style="text-align: right; border-top: none;">获取链接</th>
              </tr>
            </thead>
            <tbody id="dawn-data-{{ format }}-body">
              {% assign group_position = 0 %}
              {% for data in page.datasets %}
                {% if data.type == file_type %}
                  {% assign group_position = group_position | plus: 1 %}
                  <tr{% if group_position > 3 %} class="dawn-data-extra" hidden{% endif %}>
                    <td class="align-middle">
                      <i class="{{ data.icon }}" style="color: var(--global-theme-color); width: 20px; text-align: center;"></i>
                      <strong style="margin-left: 5px;">{{ data.name }}</strong> <br>
                      <span style="color: var(--global-text-color-light); font-size: 0.85em; margin-left: 28px; display: inline-block;">{{ data.desc }}</span>
                    </td>
                    <td class="d-none d-md-table-cell align-middle"><code>{{ data.type }}</code></td>
                    <td class="align-middle" style="text-align: right;">
                      <a
                        href="{{ data.url | replace: 'https://github.com/', 'https://raw.githubusercontent.com/' | replace: '/raw/', '/' | escape }}"
                        download="{{ data.url | split: '/' | last | escape }}"
                        class="btn-data-download"
                        data-download-file
                        aria-label="下载 {{ data.name | escape }}"
                        aria-describedby="data-download-status-{{ forloop.index }}"
                      >Download</a>
                      <button type="button" class="btn-data-cancel" hidden>取消</button>
                      <span id="data-download-status-{{ forloop.index }}" class="data-download-status" role="status" aria-live="polite" aria-atomic="true"></span>
                    </td>
                  </tr>
                {% endif %}
              {% endfor %}
            </tbody>
          </table>
        </div>
      </section>
    {% endfor %}
  </div>
</div>

<script defer src="{{ '/assets/js/data-download.js' | relative_url }}"></script>
