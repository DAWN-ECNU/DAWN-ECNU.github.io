# DAWN 共享计数服务

GitHub Pages 只提供静态网页，不能保存不同浏览器的点赞和访客数。本目录提供一个独立的 Cloudflare Worker + D1 服务。网站前端通过 `_config.yml` 的 `dawn_metrics_api_url` 连接它；该值为空时，访客统计显示“暂不可用”，点赞按钮可在本机使用并明确标为“本机”，不会把本机点赞或旧的页面浏览量当成共享数据。本机点赞不会自动计入之后启用的全站累计数。

## 统计口径

- **今日访客**：北京时间当天访问网站的不同匿名浏览器数，同一浏览器当天重复打开只计一次。
- **近 30 日访客**：包含当天的连续 30 个北京时间自然日内出现过的不同匿名浏览器数。
- **累计访客**：2026 年 10 月 1 日读取的旧 Busuanzi 访客数 3,177，加上 D1 数据库记录的不同匿名浏览器数。旧数作为固定基数配置在 `wrangler.toml` 的 `LEGACY_VISITOR_BASELINE`，不会继续读取 Busuanzi，也不会加入今日或近 30 日访客数。
- **累计点赞**：当前有效点赞数。每个匿名浏览器可点赞一次，也可取消；再次点赞不会重复增加。
- **课程资源点击**：本科和研究生课程分别按第 0—9 章累计。每次点击教程或课件的“在线查看”或“离线下载”各计一次；同一章的四种操作都点击一次，总数增加 4。它统计的是课程页面按钮的点击请求，不证明文件已经打开或下载完成，也不包含直接访问文件网址。启用此功能前的历史点击无法回填。

浏览器在网站自己的 `localStorage` 保存随机 token；D1 保存其 SHA-256 哈希、访问日期和点赞状态。课程点击另存随机事件 ID、课程编号、章节、资源类型、操作类型和时间，不关联访客 token，也不保存 IP、姓名、设备信息或文件网址。清除浏览器数据、使用无痕窗口或换设备会被算作新访客。公开接口仍可能被脚本刷数，因而这些数字是**匿名浏览器和页面点击的近似统计**，不能证明有多少名学生访问、点赞或完成下载。若上线后出现异常请求，可在 Cloudflare 中增加速率限制。

Busuanzi 与 D1 的访客识别方式不同，旧数字的抓取日期也晚于 D1 开始计数的日期，因此相加后可能重复计入部分访客。`/api/site-state` 和 `/api/like` 返回的 `totalVisitors` 均包含固定基数，并另返回 `legacyVisitorBaseline` 供核对；D1 中的访客记录不作改写。修改基数或发布本次变更后须重新部署 Worker，单独推送网站代码不会改变线上计数。

## 本地检查

使用 Node.js 24 或更新版本。在本目录运行：

```sh
npm ci
npm test
```

测试使用内存 SQLite 执行正式迁移 SQL，覆盖重复访问、点赞与取消、课程点击和幂等重试、无效请求、跨源限制、北京时间日界线和近 30 日窗口。

## 课程点击接口

- `GET /api/material-counts?courseId=SOCI235.01`：返回 `{ "courseId": "SOCI235.01", "counts": { "0": 0, …, "9": 0 } }`。研究生课程使用 `courseId=202621742`。每个数字是该课程该章节的教程和课件查看、下载点击总数。
- `POST /api/material-click`：发送 JSON `{ "eventId": "32位小写十六进制随机值", "courseId": "SOCI235.01", "week": 0, "materialKind": "tutorial", "action": "view" }`。`materialKind` 可为 `tutorial` / `slides`，`action` 可为 `view` / `download`。返回 `{ "courseId": "SOCI235.01", "week": 0, "total": 1, "recorded": true }`。每次独立点击应生成新的 `eventId`，同一次请求重试须沿用原 ID；重复 ID 不会重复计数，`recorded` 为 `false`。

两个接口沿用 `ALLOWED_ORIGIN` 限制、CORS 与 `Cache-Control: no-store`。`Origin` 可以被非浏览器脚本伪造，不能视为防刷或身份认证。

## 一次性启用

以下操作需要网站管理者的 Cloudflare 账号；仓库中没有保存账号凭据。请在本目录运行：

```sh
npx wrangler login
npx wrangler d1 create dawn-site-metrics
```

将上一条命令返回的 `database_id` 填入 [wrangler.toml](wrangler.toml) 的占位值，然后依次运行：

```sh
npx wrangler d1 migrations apply dawn-site-metrics --remote
npx wrangler deploy
```

部署完成后，Wrangler 会给出 HTTPS Worker URL。进入 GitHub 仓库的 **Settings → Secrets and variables → Actions → Variables**，创建变量 `DAWN_METRICS_API_URL`，值填该 URL（不带末尾斜线）。然后在 **Actions → Deploy site** 中重新运行工作流。网站部署时会把该变量写入构建用的 `_config.yml`，不需要为服务地址再次修改并推送源码。若要在本地构建时连接服务，也可临时填写根目录 `_config.yml` 的 `dawn_metrics_api_url`。网页发布后，打开首页确认点赞计数与访客统计都显示真实数据。**仅推送网站代码而未完成上述部署时，共享计数不会启用。**

Worker 的 `ALLOWED_ORIGIN` 固定为 `https://dawn-ecnu.github.io`，仅对这个网站回应跨源请求。本地网页如需连接本地 Worker，应临时使用本地来源覆盖该变量，且不要把本地地址提交到正式配置。跨源限制不能阻止伪造来源的非浏览器脚本；正式计数仍需结合 Cloudflare 侧的流量监控。

## 已部署服务的课程点击升级

现有 D1 和 Worker 已建立时，无需重新创建数据库。从本目录运行：

```sh
npm test
npm run migrate:remote
npm run deploy
```

先完成远程迁移与 Worker 部署，再发布含课程页面计数脚本的网站代码。新计数从部署后收到的首次课程按钮点击起累计；仅将本目录改动推送至 GitHub 不会自动更新 Cloudflare Worker。

首次创建的 D1 从零开始。不要将本地 demo 的 SQLite 文件、访问 token 或 Cloudflare 密钥提交到 Git。
