# DAWN 共享计数服务

GitHub Pages 只提供静态网页，不能保存不同浏览器的点赞和访客数。本目录提供一个独立的 Cloudflare Worker + D1 服务。网站前端通过 `_config.yml` 的 `dawn_metrics_api_url` 连接它；该值为空时，访客统计显示“暂不可用”，点赞按钮可在本机使用并明确标为“本机”，不会把本机点赞或旧的页面浏览量当成共享数据。本机点赞不会自动计入之后启用的全站累计数。

## 统计口径

- **今日访客**：北京时间当天访问网站的不同匿名浏览器数，同一浏览器当天重复打开只计一次。
- **近 30 日访客**：包含当天的连续 30 个北京时间自然日内出现过的不同匿名浏览器数。
- **累计访客**：数据库创建以来出现过的不同匿名浏览器数，不继承旧的 Busuanzi 页面浏览量。
- **累计点赞**：当前有效点赞数。每个匿名浏览器可点赞一次，也可取消；再次点赞不会重复增加。

浏览器在网站自己的 `localStorage` 保存随机 token；D1 只保存其 SHA-256 哈希、访问日期和点赞状态，不保存 IP、姓名、设备信息或浏览路径。清除浏览器数据、使用无痕窗口或换设备会被算作新访客。公开接口仍可能被脚本刷数，因而这些数字是**匿名浏览器的近似统计**，不能证明有多少名学生访问或点赞。若上线后出现异常请求，可在 Cloudflare 中增加速率限制。

## 本地检查

使用 Node.js 24 或更新版本。在本目录运行：

```sh
npm ci
npm test
```

测试使用内存 SQLite 执行正式迁移 SQL，覆盖重复访问、点赞与取消、无效请求、跨源限制、北京时间日界线和近 30 日窗口。

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

首次创建的 D1 从零开始。不要将本地 demo 的 SQLite 文件、访问 token 或 Cloudflare 密钥提交到 Git。
