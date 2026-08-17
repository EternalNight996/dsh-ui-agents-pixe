# dsh-ui-agents-pixe

给 DeepSeek Harness 的 Web 主窗口加「**工作角色**」页签 + 对话区「**像素办公室**」浮层——255+ 位专家变成会走会聊的像素小人。**一条命令安装，不改 dsh 源码。**

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

> 更多完整桌面壳效果（对话主界面等）见 [deepseek-desktop-harness](https://github.com/EternalNight996/deepseek-desktop-harness) 的 README。

## 安装

普通 npm / npx 安装只需要一条命令（官方 DSH CLI 推荐方式）：

```sh
npx @deepseek-ai/dsh plugin --profile web add dsh-ui-agents-pixe
```

> 包内 `dsh.bundle.patch` 声明了 `cordis.patch.yml`，`dsh plugin add` 后插件行自动挂载，无需手改任何 profile 补丁文件。首次安装后**重启 dsh web** 生效（之后改 UI 均为热更新）。

安装完成后：聊天页出现「工作角色」页签，对话区出现可折叠的像素办公室浮层；模型选择器、会话模型完全不受影响。

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

## Token 管控（省着花）

像素人 AI 聊天与角色卡工具都有**深度 token 管控**，避免无谓消耗：

- **角色卡按预算截断**：`agents_pixe_roles` 单卡最多 1.5K 字符、单次调用总量 6K（段落边界截断 + 截断标记），平均省 5-7K token/卡、三人团队一次调用约从 20K 降到 4K。
- **闲聊走便宜快模型**：默认自动路由到 `flash/mini/lite/free/small` 等便宜模型（可手动指定）；`reasoningEffort: off` 关思考、`maxTokens: 120` 封顶输出。
- **AI 模式硬门**：未开启 AI 模式时，服务端凭 `aiEnabled` 授权标记**直接拒绝调用、零 token 消耗**（不依赖客户端自觉）；开启后才走下面的预算管控。
- **滚动小时预算**：每小时最多 60 次真实调用、估算 token 上限 60K（字符/2 粗估）；超出直接回退罐头台词，**绝不静默烧 token**。
- **台词去重缓存**：相同请求 45s 内命中缓存不重复调用（重复帧/重复角色）。
- **输入硬化**：接话上下文截断 200 字符、角色描述 120 字符。
- **默认低频**：AI 台词频率默认 `low`（180s/角色、全局 1 并发）；开启 AI 前有「会消耗 token，确认开启？」弹窗。
- **用量透明**：`/agents-pixe/stats` 返回调用数/失败/缓存命中/预算拦截/估算 token，设置卡片实时显示「已调用 N/60 次 · 约 M token」。

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

## 桌面壳（deepseek-desktop-harness）集成

本插件是独立 npm 包，同时被 [deepseek-desktop-harness](https://github.com/EternalNight996/deepseek-desktop-harness) 作为内置插件消费：

- `scripts/vendor.mjs` 通过 `npm install --prefix dsh-runtime dsh-ui-agents-pixe` 把本包装进 `vendor/dsh-runtime/node_modules/dsh-ui-agents-pixe/`（随离线 dsh 打包为资源；包未发布时回退从同级 `../dsh-ui-agents-pixe` 本地仓库复制）；
- `src-tauri/src/lib.rs` 首启把它复制到 `$DSH_HOME/profiles/web/node_modules/`，并以 `--patch <资源内 cordis.patch.yml>` 应用。

## 待办 / 欠账

- [ ] 保存的自定义团队跨环境不丢（当前在 localStorage；可选导出/导入 JSON 或宿主侧持久化）。
- [ ] 像素人「运行态」目前靠会话 `running` 信号；精确到「每个角色各自的工具调用」需接真实事件流（HookProvider 形态）。
