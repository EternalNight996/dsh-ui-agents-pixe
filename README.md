# dsh-ui-agents-pixe

给 DeepSeek Harness 的 Web 主窗口加「**工作角色**」页签 + 对话区「**像素办公室**」浮层——255+ 位专家变成会走会聊的像素小人。**一条命令安装，不改 dsh 源码。**

## ⚡ 安装

官方 DSH CLI 一条命令安装：

```sh
dsh plugin --profile web add dsh-ui-agents-pixe
```

> ⚠️ 请一律用 `dsh plugin` 命令，**不要用 `npx @deepseek-ai/dsh`**——npx 对包名每次都会重新下载一份 dsh，装插件不该重装 dsh。
>
> 包内 `dsh.bundle.patch` 声明了 `cordis.patch.yml`，`dsh plugin add` 后插件行自动挂载，无需手改任何 profile 补丁文件。首次安装后**重启 dsh web** 生效（之后改 UI 均为热更新）。

安装完成后：聊天页出现「工作角色」页签，对话区出现可折叠的像素办公室浮层；模型选择器、会话模型完全不受影响。

### 🖥 推荐：dsh-desktop 桌面壳

想要双击即用的完整桌面体验（自动带起 dsh web + 本插件效果），推荐桌面壳 [**dsh-desktop**](https://github.com/EternalNight996/dsh-desktop)——Tauri 打包的 DeepSeek Harness 桌面工作台，开箱即用。

也可以先装可视化插件市场，在设置界面里浏览、搜索、一键安装本插件：

```sh
dsh plugin --profile web add dshmarket
```

## ✨ 功能

- 🧑‍💼 **工作角色页签**：The Agency（en 255）+ agency-agents-zh（zh 253）= **508 张完整角色卡**内置随包分发，搜索 / 中英切换 / 分部分类选人。
- 🏢 **像素办公室**：`shell.overlay` 浮层，Canvas 2D 程序化像素小人（站立 / 打字 / 踱步 + 四态徽章），可拖动、折叠、缩放，选人即入列；闲置与工作中的人都会聊天，台词可接 AI。
- 🛠 **agents_pixe_roles 工具**：宿主半边注册，agent 按角色名取回完整角色卡（定位 + 规则 + 清单 + 语气），以「某个角色/团队身份回应」时自动调用。
- 📦 **持久客户端插件**：npm 双面包 + 组合补丁层，包内自挂载（`dsh.bundle.patch`），安装即生效，重启不丢。

<p align="center">
  <img src="assets/demo.gif" width="640" alt="dsh-ui-agents-pixe 全功能演示：工作角色页签 + 像素办公室浮层（真实录屏）" />
</p>

## 界面预览（真实抓屏）

> 📸 全部真实抓屏/录屏。

### 🧑‍💼 工作角色页签

<p align="center">
  <img src="assets/workspace-roles.png" width="820" alt="工作角色页签：选人 / 搜索 / 中英切换" />
</p>

### 🏢 像素办公室浮层

<p align="center">
  <img src="assets/pixel-office.png" width="820" alt="像素办公室：像素小人 / 聊天 / 团队编排" />
</p>

> 更多完整桌面壳效果（对话主界面等）见 [dsh-desktop](https://github.com/EternalNight996/dsh-desktop) 的 README。

## AI 聊天（开关 + 可插拔接口）

像素人的聊天台词可接入 AI，含**内置 AI** 与一个**外部接口**，由页签/浮层顶部的 **🤖 AI 开关**统一控制：

- **开关关**：走内置罐头问候（含打破第四面墙的问答彩蛋）。
- **开关开 + 未接外部**：走**内置 AI**——客户端 fetch 宿主端点 `/agents-pixe/chat`，用 **dsh 自己配好的模型**（`ctx.llm`，第一个 provider/model）按角色 + 实时状态生成一句 20 字内的中文闲聊；模型失败/空则回退实时活动台词 → 罐头。
- **开关开 + 已接外部**：优先走外部接口，未返回/返回空时回退内置。

**外部接口**：在页面里赋值一个异步函数即可接管台词：

```js
window.__AGENTS_PIXE_CHAT__ = async (req) => '你好，人类';
// req = { roleName, roleKey, emoji, state, activity, sessionId, isLeader }
// state ∈ 'idle' | 'working' | 'done'；返回 string（展示）或 null/空（回退内置）
```

编程式控制开关/接口：

```js
window.__AGENTS_PIXE_CHAT_API__.setEnabled(true);            // 开/关 AI 聊天
window.__AGENTS_PIXE_CHAT_API__.setProvider(async (req) => '…'); // 设外部接口
window.__AGENTS_PIXE_CHAT_API__.isOn();                       // 当前开关状态
```

> 实现说明：持久 `dsh.client` 客户端插件没有「客户端→宿主」私有 RPC，但宿主半边（`lib/index.js`）可注入 `llm` + `webServer`，注册 `GET /agents-pixe/chat` 精确路由生成台词——复用 dsh 已配置的模型，无需额外密钥、无 CORS、不改 dsh 源码。

## 🆕 更新日志（v1.0.2 → v1.0.3）

### 修复：设置 → 像素办公室「角色工具」开关点击无反应

问题根因有两层，均已修复：

1. **客户端 `settingsScope.bind` 在分区渲染函数里每次调用**（每次渲染新建 controller → 订阅与写入的 scope 不是同一个）。改为在 `apply()` 中**只绑定一次**（参考 `dsh-ui-three-body` 的写法），开关点击立即可见。
2. **宿主半边 `inject` 数组缺少 `settings` 服务**，导致 `settings.register('agents-pixe', …)` 不可用/时序不稳，namespace 从未在宿主侧生效——客户端 `describe()` 读不到、写入被拒。已补上 `'settings'` 声明。

### 新增：设置分区统一管控「🤖 像素人 AI 闲聊」

工作角色页签与像素办公室浮层顶部的 **AI 按钮已移除**，AI 相关配置**统一收拢到设置 → 像素办公室**分区，一个入口管全部：

- AI 聊天开关（默认关，开启前有「会消耗 token，确认开启？」）
- 台词频率（低 / 中 / 高）
- 思考模式（开启走带思考链的模型）

### 变更：像素办公室标题栏按钮全部放大

选人 / 缩小 / 放大 / 设置 / 折叠按钮整体加大（padding 与字号提升），悬浮窗操作更清晰易点，不再看不清。

### 零成本确认

关闭全部配置时（角色工具 + AI 闲聊都关）为**纯本地零 token 消耗**：工具不注册、提示段不注入、`/agents-pixe/stats` 返回 `calls:0, tokens:0`。开启后依旧受「AI 模式硬门 + 每小时 60 次 / 60K token 预算」兜底。

## Token 管控（省着花）

### 角色工具：默认关闭，配置分区启用

- **默认零消耗**：`agents_pixe_roles` / `agents_pixe_team` 工具与提示段默认**不注册**——不开开关，每轮模型调用不背任何角色工具成本。
- **配置分区启用**：设置 → **像素办公室** 顶层分区，打开「角色工具」开关才注册工具（动态注入/移除，无需重启）。
- **完整卡默认（v1.0.7 起）**：`agents_pixe_roles` 默认返回**完整角色卡**（1:1 上游 508 张，定位/使命/关键规则/交付物/工作流程/沟通风格全部章节）；总量上限 100K 字符，超出跳过后续角色并说明。
- **按需省 token**：只要单章节时传 `sections=rules`（关键规则）或 `sections=deliverables`（技术交付物），单章节上限 4K 字符——比完整卡省一个数量级。
- **真·团队编排（v1.0.7 新增）**：`agents_pixe_team`——领袖拆解任务 → 每位成员开独立子代理（种子=完整角色卡，上下文互不挤占，provider spawn/fork）并行执行 → 领袖汇总。预设 29 团队名直传（如「研发团队」）或角色名列表；成员上限默认 4、最大 6。成本 = N+2 次子代理调用，深度任务再用。
- **token 实时可见**：办公室浮层标题栏实时显示当前会话全局 token 计量（↑输入 ↓输出，含缓存读写，来自 dsh 真实 provider 用量投影）。

### AI 闲聊：同样省着花

- **闲聊走便宜快模型**：默认自动路由到 `flash/mini/lite/free/small` 等便宜模型（可手动指定）；`reasoningEffort: off` 关思考、`maxTokens: 120` 封顶输出。
- **AI 模式硬门**：未开启 AI 模式时，服务端凭 `aiEnabled` 授权标记**直接拒绝调用、零 token 消耗**（不依赖客户端自觉）；开启后才走下面的预算管控。
- **滚动小时预算**：每小时最多 60 次真实调用、估算 token 上限 60K（字符/2 粗估）；超出直接回退罐头台词，**绝不静默烧 token**。
- **台词去重缓存**：相同请求 45s 内命中缓存不重复调用（重复帧/重复角色）。
- **输入硬化**：接话上下文截断 200 字符、角色描述 120 字符。
- **默认低频**：AI 台词频率默认 `low`（180s/角色、全局 1 并发）；开启 AI 前有「会消耗 token，确认开启？」弹窗。
- **用量透明**：`/agents-pixe/stats` 返回调用数/失败/缓存命中/预算拦截/估算 token，办公室浮层实时显示「已调用 N/60 次 · 约 M token」。

## 角色库已内置

agency-agents 全量角色卡（en 255 + zh 253 = 508 张）固化进本插件，随包分发，换环境不丢：

- `lib/roles.json`：紧凑目录（name/emoji/color/desc），**冻结进 client bundle**，UI 直接用。
- `lib/roles-full.json`：**508 张完整角色卡**（定位 + 规则 + 清单 + 语气），宿主工具数据源。
- `lib/index.js`（宿主半边）：注册 `agents_pixe_roles` 工具，agent 按角色名取回完整卡。

唯一不随包走的是「你手动保存的自定义团队」（本机 localStorage）与「AI 生成的自定义角色」（`~/.dsh/agents-pixe/custom-roles.json`）。

## 目录结构

```
dsh-ui-agents-pixe/
├── package.json            # dsh.client 声明 + dsh.bundle.patch 自挂载
├── cordis.patch.yml        # 组合补丁行（- insert: ui-agents-pixe）
├── assets/                 # README 截图/录屏（demo.gif + 真实抓屏）
├── lib/
│   ├── index.js            # node 半边：agents_pixe_roles 工具 + /agents-pixe/* 路由
│   ├── client.js           # browser 半边（构建产物，自包含 __ModuleLoader__.load）
│   ├── roles.json          # 角色目录（生成物，冻结进 client.js）
│   └── roles-full.json     # 508 张完整角色卡（宿主工具数据源）
├── src/
│   ├── client.prelude.js   # bundle 头（require react + var ROLES_DATA =）
│   └── client.main.js      # 主体逻辑（像素引擎 + 页签 + 浮层）
├── scripts/
│   ├── gen-roles.mjs       # 从 en/zh 角色库生成 roles.json + roles-full.json
│   └── build-client.mjs    # prelude + roles.json + main → lib/client.js
└── test/
    └── smoke.test.mjs      # 发布前冒烟测试（node --test）
```

## 构建 / 测试 / 发布

```sh
# 生成角色数据（缺失自动从上游克隆）→ 生成 lib/client.js
node scripts/gen-roles.mjs
node scripts/build-client.mjs

# 冒烟测试
node --test

# 发布（需已 npm login；版本号在 package.json）
npm publish
```

- `gen-roles.mjs` 读 en（`~/.agents/skills/agency-agents/references/` 或 `AGENTS_PIXE_EN_ROOT`）与 zh（`%TEMP%\dsh-analysis\agency-agents-zh` 或 `AGENTS_PIXE_ZH_ROOT`）；本地缺失自动 `git clone` 上游（en: github.com/msitarzewski/agency-agents，zh: github.com/jnMetaCode/agency-agents-zh）。
- `build-client.mjs` 把 prelude + roles.json + main 拼成自包含 bundle，无任何构建工具依赖。
- peerDependencies（`@deepseek-ai/dsh-tools`、`@deepseek-ai/dsh-llm`）由 dsh 运行时依赖闭包提供，插件不重复安装。

## 与桌面壳（dsh-desktop）的关系

本插件是独立 npm 包，[dsh-desktop](https://github.com/EternalNight996/dsh-desktop) **不再内置**它；按需安装即可：

```sh
dsh plugin --profile web add dsh-ui-agents-pixe
```

## 待办 / 后续开发方向

### 数据与持久化

- [ ] 保存的自定义团队跨环境不丢（当前在 localStorage；可选导出/导入 JSON 或宿主侧持久化）。
- [ ] 自定义角色表单编辑器：在 UI 里增删改角色卡（当前仅 AI 生成 + 导入），含角色卡格式校验。

### 角色工具（agent 侧）

- [ ] 按部门 / 技能 / 关键词检索角色（当前 `agents_pixe_roles` 只按名查）。
- [ ] 团队一键召唤：一次传入整个预设团队（29 个预设团队名 → 展开为成员角色卡）。
- [ ] 角色卡增量追问：支持按章节取卡（只要规则 / 只要清单），进一步压 token。

### 像素办公室（表现层）

- [ ] 更多状态动画：喝咖啡 / 开会 / 庆祝等；agent 完成任务时小人举手提示。
- [ ] 场景与皮肤：多背景（会议室 / 茶水间）、白天黑夜主题、像素人换装。
- [ ] 精确运行态：目前靠会话 `running` 信号；精确到「每个角色各自的工具调用」需接真实事件流（HookProvider 形态）。
- [ ] 大团队性能：50+ 人同屏时 Canvas 脏矩形 / 离屏画布优化。

### AI 闲聊

- [ ] 台词注入角色性格：把角色卡「语气」段落喂给 `/agents-pixe/chat`，按角色风格说话。
- [ ] 台词多语言：跟随 dsh UI locale 输出中/英台词。

### 工程化

- [ ] 设置分区文案 i18n（当前硬编码中文）。
- [ ] 客户端 bundle 自动化冒烟测试（当前测试仅覆盖宿主半边）。
- [ ] CI：发布前自动跑 `gen-roles` 数据一致性校验（角色库上游更新时 508 张卡数量比对）。
