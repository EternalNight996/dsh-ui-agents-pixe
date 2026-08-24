# Changelog

本项目所有重要变更都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [1.0.8] - 2026-08-19

### 新增

- **设置 → 像素办公室「取卡粒度」按钮**：完整卡 / 仅规则 / 仅交付物（三选一，默认完整卡）——作为 `agents_pixe_roles` 的全局默认，不用每次口头交代；单次仍可用 `sections` 覆盖。
- **办公室选人面板「🚀 一键团队编排」按钮**：一点就把当前选中团队送进 `agents_pixe_team` 编排指令（预填「让『XX』团队并行完成：」到草稿），补一句任务即可发送——不再手打团队名/角色名。
- README 新增「内核纲领（团队协作）」章节，明确三段式编排内核（领袖拆解→成员子代理独立执行→领袖汇总）与成本/质量取舍。

### 变更

- **办公室浮层 token 行升级**：`🖥️ 像素办公室（5）| 40 轮 · 464 步 | 缓存命中 96% | 输入↑72.8K | 输出↓214.6K`——新增轮数/步数（sessionStats 投影）与缓存命中率（cacheRead/(uncachedInput+cacheRead)）。
- host settings schema 增加 `cardMode` 字段（默认 `full`）。

## [1.0.7] - 2026-08-19

### 新增

- **`agents_pixe_team` 真·团队编排工具（闭环）**：领袖视角拆解任务 → 每位成员开独立子代理（种子=完整角色卡，上下文互不挤占；provider 自动选 spawn/fork）并行执行 → 领袖汇总最终报告。支持 29 个预设团队名直传或角色名列表；成员上限默认 4（最大 6）；拆解失败自动退化为「各成员按自身专业并行处理」。
- **`agents_pixe_roles` 新增 `sections` 参数**：`full`（默认，完整卡）/ `rules`（仅关键规则节）/ `deliverables`（仅技术交付物节）——单章节上限 4K 字符，按需取可省一个数量级 token。
- **办公室浮层标题栏实时 token 计量**：显示当前会话全局 token（↑输入 ↓输出，含缓存读写，读 dsh `tokenUsage` 真实 provider 用量投影，非仅插件闲聊用量）。
- 角色名支持 `division/role-id` 形式（如 `engineering/engineering-ai-engineer`），lookup 优先命中 id。

### 变更（破坏性：角色卡返回策略）

- **`agents_pixe_roles` 默认返回完整角色卡**（取代旧版 ≤500 字符精简卡）：内容 1:1 上游 508 张卡；单次调用总量上限 100K 字符（约 5 万 token），超出跳过后续角色并在结果中说明。
- 修复章节抓取正则被卡内 `###` 子标题截断的问题（旧版 zh 仅 31% 卡能取到关键规则节，修复后 98%）。
- 宿主 `inject` 增加 `subagents`；系统提示段同步说明两个工具的适用场景。

## [1.0.6] - 2026-08-19

### 变更

- README 重排：**「⚡ 安装」章节提前到最前**（标题与简介之后、功能列表之前），打开即见 `dsh plugin --profile web add dsh-ui-agents-pixe`。
- 「待办 / 欠账」扩写为「待办 / 后续开发方向」，按 5 个方向补全 14 项：数据与持久化、角色工具（agent 侧）、像素办公室表现层、AI 闲聊、工程化。

## [1.0.5] - 2026-08-19

### 变更

- README 安装段**移除 npx 备选命令**，统一为 `dsh plugin --profile web add dsh-ui-agents-pixe`，并加注「不要用 npx（每次重新下载 dsh）」——与 dsh-desktop 桌面壳指引一致。
- 「推荐 dsh-desktop 桌面壳」段落理顺：桌面壳推荐与可视化插件市场（`dshmarket`）安装命令分开表述。

## [1.0.4] - 2026-08-19

### 变更

- **对齐最新版 dsh 生态**：peerDependencies 升级为 `^0.1.0-rc.7 || ^0.1.1-rc.2`，同时兼容 dsh `0.1.0-rc.x` 运行时（dsh-desktop 内置）与最新 `0.1.1-rc.2` 生态。
- README 安装命令改为推荐 `dsh plugin --profile web add dsh-ui-agents-pixe`（npx 作为等价备选），并新增 **dsh-desktop 桌面壳推荐**（https://github.com/EternalNight996/dsh-desktop）。
- README 桌面壳链接由旧名 deepseek-desktop-harness 全部更正为 dsh-desktop。

## [1.0.3] - 2026-08-19

### 修复

- 设置 → 像素办公室「角色工具」开关点击无反应的**完整根因**：
  1. **宿主半边 `inject` 数组缺少 `settings` 服务**，导致 `settings.register('agents-pixe', …)` 不可用/时序不稳，namespace 从未在宿主侧生效——客户端 `describe()` 读不到、写入被拒。已补上 `'settings'` 声明（这是 v1.0.2 只修客户端、仍无效的原因）。
  2. 客户端 `settingsScope.bind` 改为在 `apply()` 中只绑定一次（v1.0.2 已做）。

### 变更

- 工作角色页签与像素办公室浮层顶部的 **🤖 AI 按钮已移除**，AI 配置统一收拢到设置 → 像素办公室分区的「🤖 像素人 AI 闲聊」（AI 开关 / 台词频率 / 思考模式），单一入口管控。
- 像素办公室标题栏按钮（选人 / 缩小 / 放大 / 设置 / 折叠）**全部加大**，更清晰易点。

### 文档

- README 新增「🆕 更新日志」章节，记录本版本修复与零成本确认。

## [1.0.2] - 2026-08-18

### 修复

- 设置 → 像素办公室分区的开关点击无反应：`settingsScope.bind` 原先在分区渲染函数里每次调用，导致每次渲染都新建 controller、订阅与写入的不是同一个 scope；改为在 `apply()` 中绑定一次（参考 dsh-ui-three-body 的写法）。

### 新增

- 设置 → 像素办公室分区新增「🤖 像素人 AI 闲聊」：AI 聊天开关、台词频率（低/中/高）、思考模式。

### 变更

- 悬浮窗标题栏的 ⚙️ 设置按钮加大（padding 2x7→4x12、字号 12→16），更易点击。

## [1.0.1] - 2026-08-18

### 文档

- 新增 `CHANGELOG.md`（Keep a Changelog 格式），并随包发布，保证 npm 包与 GitHub 仓库内容同步。

## [1.0.0] - 2026-08-17

首个独立 npm 包发布版本（从 deepseek-desktop-harness/plugins 拆出）。

### 新增

- `agents_pixe_roles` 工具：宿主半边注册，agent 按角色名取回完整角色卡（定位 + 规则 + 清单 + 语气），「以某个角色/团队身份回应」时自动调用。
- 工作角色页签：内置 The Agency（en 255）+ agency-agents-zh（zh 253）共 508 张完整角色卡，支持搜索 / 中英切换 / 分部分类选人。
- 像素办公室浮层：Canvas 2D 程序化像素小人（站立 / 打字 / 踱步 + 四态徽章），可拖动、折叠、缩放，选人即入列。
- 聊天接入 AI：内置 AI（走 dsh 宿主 `ctx.llm` 模型，按角色 + 实时状态生成 20 字内中文闲聊）+ 可插拔外部接口（`window.__AGENTS_PIXE_CHAT__`），由 🤖 AI 开关统一控制。
- 持久客户端插件：npm 双面包 + 组合补丁层（`dsh.bundle.patch`），安装即生效，重启不丢。

### 变更

- 包名改为无 scope 的 `dsh-ui-agents-pixe`（避开 @deepseek-ai 组织 scope 发布权限）。
- 测试脚本改用 `node --test` 自动发现（Node 24 下 `--test test/` 目录解析失败）。

### 性能

- 角色卡按预算截断（单卡 1.5K 字符 / 总量 6K，省 5-7K token/卡）；闲聊走便宜快模型、maxTokens 200→120、system 限 20~40 字。
- 深度 token 管控：滚动小时预算（60 次 / 60K token 硬顶）+ 台词去重缓存 + 估算 token 统计 + 默认低频 + 输入硬化；设置卡片显示用量。
- AI 模式硬门：未开启 AI 时服务端直接拒绝 token 调用（aiEnabled 授权标记），开启后才走预算管控。

### 文档

- README 提取桌面壳真实 screen/gif 素材（demo.gif 压缩至 2MB），界面预览改为桌面壳同款排版并引用其 README。
- 桌面壳不再内置本插件，README 关系段改为按需安装。
- `prepublishOnly` 发布前自动跑测试门禁。

[1.0.0]: https://github.com/EternalNight996/dsh-ui-agents-pixe/releases/tag/v1.0.0
