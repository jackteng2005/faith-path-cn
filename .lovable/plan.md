# 精简为 3 个页面

将现有 9 个页面整合为 3 个，并移除奉献页面。

## 新的页面结构

1. **首页 `/`** — 保留现有欢迎、主日聚会亮点，并整合每周活动与课程（Christianity Explained、英文班、长者聚会、主日学）成为板块，附常见问题精简版。
2. **关于我们 `/about`** — 教会使命与宗旨、信仰告白、语言与文化背景，并并入原「资源」页的属灵成长材料与常见问题。
3. **联系与地点 `/contact`** — 联系人（Susan Lin、Michael Chieng）、电话邮箱、聚会地址 6 Mt Roskill Rd、Google 地图与交通停车信息。

## 删除的页面

- `/events`、`/courses`（内容并入首页）
- `/location`（并入联系页）
- `/resources`（并入关于我们）
- `/give` 奉献页（暂时删除，页面与页脚相关入口一并移除）

## 技术要点

- 删除 `src/routes/events.tsx`、`courses.tsx`、`location.tsx`、`resources.tsx`、`give.tsx`，让路由树自动重新生成。
- 顶部导航（`SiteHeader.tsx`）与页脚（`SiteFooter.tsx`）改为三项链接，移除奉献 CTA。
- 首页与联系页新增合并板块，保留原有排版风格（海军蓝／金色／米色、Noto Serif SC 标题）。
- 各页 `head()` 更新标题与描述，避免重复；首页锚点用于跳转到活动与课程板块。
- 旧路径 `/events`、`/courses`、`/location`、`/resources`、`/give` 全部改为重定向到对应新页面，避免已分享的链接失效。
