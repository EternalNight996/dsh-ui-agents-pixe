// agents-pixe 宿主半边：注册 `agents_pixe_roles` 工具，按角色名查 agency-agents
// 完整角色卡（数据来自随包分发的 lib/roles-full.json，en + zh 全量固化）。
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { homedir } from 'node:os'
import z from '@deepseek-ai/schemastery'
import { defineTool } from '@deepseek-ai/dsh-tools'
import { BlockAssembler, createUserMessage } from '@deepseek-ai/dsh-llm'

const inject = ['tools', 'systemPrompt', 'llm', 'webServer', 'settings', 'subagents']

const FULL_PATH = join(dirname(fileURLToPath(import.meta.url)), 'roles-full.json')

/* 持久化桥：把浏览器 localStorage 状态镜像到磁盘文件，解决随机端口导致 origin 变化、localStorage 被清空的问题 */
const DSH_HOME = process.env.DSH_HOME || join(homedir(), '.dsh')
const PERSIST_PATH = join(DSH_HOME, 'agents-pixe', 'persist.json')
function readPersist() {
  try { return JSON.parse(readFileSync(PERSIST_PATH, 'utf8')) } catch { return {} }
}
function writePersist(data) {
  try {
    mkdirSync(dirname(PERSIST_PATH), { recursive: true })
    writeFileSync(PERSIST_PATH, JSON.stringify(data || {}), 'utf8')
  } catch {}
}

let cachedIndex = null
function nameIndex() {
  if (cachedIndex) return cachedIndex
  const data = JSON.parse(readFileSync(FULL_PATH, 'utf8'))
  const byName = {}
  function index(lang) {
    const map = data[lang] || {}
    for (const id of Object.keys(map)) {
      const rec = map[id]
      if (rec && rec.name && !byName[rec.name]) byName[rec.name] = rec
    }
  }
  index('en')
  index('zh')
  // 自定义角色（AI 生成 / 导入 md）也纳入查询
  try {
    const customs = loadCustomRoles()
    for (const r of customs) {
      if (r && r.name && !byName[r.name]) byName[r.name] = r
    }
  } catch {}
  cachedIndex = byName
  return byName
}

/* 去掉名字前导的 emoji/符号（如 👑高级项目经理 → 高级项目经理） */
function clean(s) {
  return String(s).replace(/^[^\p{L}\p{N}]+/u, '').trim()
}

function lookup(name) {
  const n = clean(name)
  if (!n) return null
  /* id 形式（engineering/engineering-ai-engineer）优先走 keyIndex */
  if (n.indexOf('/') >= 0) {
    const ki = keyIndex()
    if (ki[n]) return ki[n]
  }
  const idx = nameIndex()
  if (idx[n]) return idx[n]
  const lower = n.toLowerCase()
  for (const key of Object.keys(idx)) {
    const k = key.toLowerCase()
    if (k.indexOf(lower) >= 0 || lower.indexOf(k) >= 0) return idx[key]
  }
  return null
}

/* 按 id（如 engineering/engineering-ai-engineer）查卡；en/zh 都查（预设团队混用两库角色） */
let cachedKeyIndex = null
function keyIndex() {
  if (cachedKeyIndex) return cachedKeyIndex
  const data = JSON.parse(readFileSync(FULL_PATH, 'utf8'))
  const byKey = {}
  for (const lang of ['en', 'zh']) {
    const map = data[lang] || {}
    for (const id of Object.keys(map)) if (!byKey[id]) byKey[id] = map[id]
  }
  cachedKeyIndex = byKey
  return byKey
}

/* 预设团队（与客户端 PRESETS 同源；en/zh 角色键混用） */
const TEAM_PRESETS = [
  { name: '研发团队', leader: 'project-management/project-manager-senior', roles: ['project-management/project-manager-senior', 'engineering/engineering-software-architect', 'engineering/engineering-backend-architect', 'engineering/engineering-frontend-developer', 'engineering/engineering-code-reviewer'] },
  { name: '科学团队', leader: 'academic/academic-study-planner', roles: ['academic/academic-study-planner', 'academic/academic-psychologist', 'academic/academic-historian', 'academic/academic-geographer'] },
  { name: '航天科研团队', leader: 'engineering/engineering-mechanical-design-engineer', roles: ['engineering/engineering-mechanical-design-engineer', 'engineering/engineering-embedded-firmware-engineer', 'engineering/engineering-fpga-digital-design-engineer', 'engineering/engineering-incident-response-commander'] },
  { name: '营销团队', leader: 'marketing/marketing-social-media-strategist', roles: ['marketing/marketing-social-media-strategist', 'marketing/marketing-content-creator', 'marketing/marketing-seo-specialist', 'marketing/marketing-xiaohongshu-operator'] },
  { name: '安全团队', leader: 'engineering/engineering-security-engineer', roles: ['engineering/engineering-security-engineer', 'engineering/engineering-threat-detection-engineer', 'specialized/data-privacy-officer', 'legal/legal-contract-reviewer'] },
  { name: '设计团队', leader: 'design/design-ux-architect', roles: ['design/design-ux-architect', 'design/design-ui-designer', 'design/design-ux-researcher', 'design/design-visual-storyteller'] },
  { name: '财务团队', leader: 'finance/finance-financial-analyst', roles: ['finance/finance-financial-analyst', 'finance/finance-financial-forecaster', 'finance/finance-fpa-analyst', 'finance/finance-fraud-detector'] },
  { name: '游戏开发团队', leader: 'game-development/game-designer', roles: ['game-development/game-designer', 'game-development/level-designer', 'game-development/narrative-designer', 'game-development/technical-artist', 'game-development/game-audio-engineer'] },
  { name: '供应链团队', leader: 'supply-chain/supply-chain-strategist', roles: ['supply-chain/supply-chain-strategist', 'supply-chain/supply-chain-inventory-forecaster', 'supply-chain/supply-chain-route-optimizer', 'supply-chain/supply-chain-vendor-evaluator'] },
  { name: '测试质量团队', leader: 'testing/testing-reality-checker', roles: ['testing/testing-reality-checker', 'testing/testing-api-tester', 'testing/testing-performance-benchmarker', 'testing/testing-accessibility-auditor'] },
  { name: '产品团队', leader: 'product/product-manager', roles: ['product/product-manager', 'product/product-sprint-prioritizer', 'product/product-feedback-synthesizer', 'product/product-trend-researcher'] },
  { name: '销售团队', leader: 'sales/sales-deal-strategist', roles: ['sales/sales-deal-strategist', 'sales/sales-account-strategist', 'sales/sales-pipeline-analyst', 'sales/sales-outbound-strategist'] },
  { name: '地理信息团队', leader: 'gis/gis-analyst', roles: ['gis/gis-analyst', 'gis/gis-cartography-designer', 'gis/gis-geoai-ml-engineer', 'gis/gis-3d-scene-developer'] },
  { name: '法律合规团队', leader: 'legal/legal-contract-reviewer', roles: ['legal/legal-contract-reviewer', 'legal/legal-policy-writer', 'specialized/data-privacy-officer'] },
  { name: '人力资源团队', leader: 'hr/hr-recruiter', roles: ['hr/hr-recruiter', 'hr/hr-performance-reviewer', 'specialized/organizational-psychologist'] },
  { name: 'AI大模型团队', leader: 'engineering/engineering-ai-engineer', roles: ['engineering/engineering-ai-engineer', 'engineering/engineering-prompt-engineer', 'engineering/engineering-multi-agent-systems-architect', 'specialized/agents-orchestrator'] },
  { name: '智能体编排团队', leader: 'specialized/agents-orchestrator', roles: ['specialized/agents-orchestrator', 'specialized/specialized-mcp-builder', 'specialized/specialized-workflow-architect', 'engineering/engineering-multi-agent-systems-architect'] },
  { name: 'SRE运维团队', leader: 'engineering/engineering-sre', roles: ['engineering/engineering-sre', 'engineering/engineering-devops-automator', 'engineering/engineering-database-optimizer', 'engineering/engineering-incident-response-commander'] },
  { name: '数据工程团队', leader: 'engineering/engineering-data-engineer', roles: ['engineering/engineering-data-engineer', 'engineering/engineering-database-optimizer', 'specialized/data-consolidation-agent', 'specialized/specialized-model-qa'] },
  { name: '区块链Web3团队', leader: 'engineering/engineering-solidity-smart-contract-engineer', roles: ['engineering/engineering-solidity-smart-contract-engineer', 'security/security-blockchain-security-auditor', 'specialized/zk-steward', 'finance/finance-investment-researcher'] },
  { name: '空间计算团队', leader: 'spatial-computing/xr-interface-architect', roles: ['spatial-computing/xr-interface-architect', 'spatial-computing/visionos-spatial-engineer', 'spatial-computing/xr-immersive-developer', 'spatial-computing/macos-spatial-metal-engineer'] },
  { name: '跨境电商团队', leader: 'marketing/marketing-cross-border-ecommerce', roles: ['marketing/marketing-cross-border-ecommerce', 'marketing/marketing-china-ecommerce-operator', 'marketing/marketing-china-market-localization-strategist', 'supply-chain/supply-chain-vendor-evaluator'] },
  { name: '短视频直播团队', leader: 'marketing/marketing-douyin-strategist', roles: ['marketing/marketing-douyin-strategist', 'marketing/marketing-short-video-editing-coach', 'marketing/marketing-livestream-commerce-coach', 'marketing/marketing-tiktok-strategist'] },
  { name: '内容媒体团队', leader: 'marketing/marketing-content-creator', roles: ['marketing/marketing-content-creator', 'marketing/marketing-global-podcast-strategist', 'marketing/marketing-wechat-official-account', 'marketing/marketing-zhihu-strategist'] },
  { name: '企业战略团队', leader: 'specialized/business-strategist', roles: ['specialized/business-strategist', 'specialized/chief-financial-officer', 'specialized/operations-manager', 'specialized/change-management-consultant'] },
  { name: '付费广告团队', leader: 'paid-media/paid-media-ppc-strategist', roles: ['paid-media/paid-media-ppc-strategist', 'paid-media/paid-media-creative-strategist', 'paid-media/paid-media-paid-social-strategist', 'paid-media/paid-media-programmatic-buyer'] },
  { name: '移动应用团队', leader: 'engineering/engineering-mobile-app-builder', roles: ['engineering/engineering-mobile-app-builder', 'engineering/engineering-wechat-mini-program-developer', 'engineering/engineering-frontend-developer', 'engineering/engineering-voice-ai-integration-engineer'] },
  { name: '物联网团队', leader: 'engineering/engineering-iot-solution-architect', roles: ['engineering/engineering-iot-solution-architect', 'engineering/engineering-embedded-firmware-engineer', 'engineering/engineering-embedded-linux-driver-engineer', 'engineering/engineering-network-engineer-china'] },
  { name: '客户成功团队', leader: 'specialized/customer-success-manager', roles: ['specialized/customer-success-manager', 'support/support-support-responder', 'specialized/retail-customer-returns', 'support/support-analytics-reporter'] }
]

/* 章节提取：从完整卡按关键词抓一节（停止条件排除 ###，见 lib 内注释）。返回 '' 表示无该节。 */
function sectionOf(full, keywords) {
  const m = String(full || '').match(new RegExp('##\\s*[^\\n]*(' + keywords + ')[^\\n]*\\n([\\s\\S]*?)(?=\\n##(?!#)|$)', 'i'))
  if (!m) return ''
  return m[2].trim()
}

/* ---------- 像素人 AI 聊天：用 dsh 自配模型生成一句闲聊台词 ---------- */
/* 深度 token 管控：滚动小时预算 + 台词去重缓存 + 用量统计（估算 token）。
 * 超出预算直接返回 null（客户端回退罐头台词），绝不静默烧 token。 */
const TOKEN_BUDGET = {
  maxCallsPerHour: 60,          // 每小时最多真实 LLM 调用（闲聊）
  maxEstTokensPerHour: 60000,   // 每小时估算 token 上限（输入+输出，字符数/2 粗估）
  cacheTtlMs: 45000             // 相同请求去重缓存 TTL：重复帧/重复角色不重复调用
}
const usage = { calls: 0, fails: 0, budgeted: 0, blocked: 0, cached: 0, tokensIn: 0, tokensOut: 0, windowStart: Date.now() }
const estTokens = (s) => Math.max(1, Math.round(String(s || '').length / 2))
function budgetOpen() {
  const now = Date.now()
  if (now - usage.windowStart > 3600000) {   // 滚动 1h 窗口复位
    usage.windowStart = now
    usage.tokensIn = 0
    usage.tokensOut = 0
  }
  return usage.calls < TOKEN_BUDGET.maxCallsPerHour &&
    (usage.tokensIn + usage.tokensOut) < TOKEN_BUDGET.maxEstTokensPerHour
}
const lineCache = new Map()      // prompt 指纹 -> { at, text }
let autoRouteCache = null
async function resolveRoute(llm, provider, model, preferCheap) {
  if (provider && model) return { provider, model }
  if (autoRouteCache) return autoRouteCache
  try {
    const providers = llm.listProviders()
    if (!providers || providers.length === 0) return null
    const models = await llm.listModels(providers[0].id)
    if (!models || models.length === 0) return null
    let pick = models[0].id
    if (preferCheap) {
      // 闲聊/短输出优先便宜的快速模型（flash/mini/lite/free/small…），
      // 匹配不到再退而取列表尾部（目录通常旗舰在前、小档在后），省 token 与延迟。
      const CHEAP = /(flash|mini|lite|free|small|nano|fast|turbo)/i
      const cheap = models.find((m) => CHEAP.test(m.id))
      pick = cheap ? cheap.id : models[models.length - 1].id
    }
    autoRouteCache = { provider: providers[0].id, model: pick }
    return autoRouteCache
  } catch { return null }
}
/* 模型目录：各 provider 下的模型列表（供工作角色栏下拉选择） */
async function listModelCatalog(llm) {
  const out = []
  try {
    const providers = llm.listProviders() || []
    for (const p of providers) {
      const models = await llm.listModels(p.id)
      out.push({ provider: p.id, name: p.name || p.id, models: (models || []).map((m) => ({ id: m.id, name: m.name })) })
    }
  } catch {}
  return out
}
async function generateLine(llm, req) {
  // AI 模式未开启：服务端硬门，直接拒绝、零 token 调用（不依赖客户端自觉）
  if (req.aiEnabled !== '1') { usage.blocked++; return null }
  const route = await resolveRoute(llm, req.provider, req.model, true)
  if (!route) return null
  if (!budgetOpen()) { usage.budgeted++; return null }   // 预算耗尽：回退罐头，不调模型
  const role = clean(String(req.roleName || '同事')) || '同事'
  const state = String(req.state || 'idle')
  const activity = String(req.activity || '')
  const hint = state === 'working' && activity
    ? `现在正在处理「${activity}」`
    : state === 'done' ? '刚刚干完手头的活，准备休息'
    : '现在比较闲，在工位附近走动'
  const system = '你在一个像素办公室里，扮演一位有血有肉、有自己想法的同事，用中文跟相邻工位的同事聊天。要有人类的真实感：有观点、有情绪、会迟疑、会开玩笑、会自嘲、会吐槽，偶尔冒出一点哲学味的想法。禁止：客套话、说教、emoji、列表、英文，以及「好的/收到/明白/嗯嗯」这类机器人腔。只说一句 20~40 字的自然闲话，不展开、不解释、不要冒号分条。'
  const context = String(req.context || '').trim().slice(0, 200)   // 输入硬化：接话上下文截断
  const partnerName = clean(String(req.partnerName || ''))
  const roleDesc = clean(String(req.roleDesc || '')).slice(0, 120)
  const persona = roleDesc ? `你的角色是「${role}」：${roleDesc}。` : `你是「${role}」。`
  const prompt = context
    ? (partnerName
        ? `${persona}你正和同事「${partnerName}」聊天，${partnerName} 刚才对你说：「${context}」。像真人一样回应：可以直接叫他名字、接话、反问、反驳、附和自己、岔开话题，也可以顺着你的角色视角多聊两句、带点你的职业思维。`
        : `${persona}同事刚才跟你说：「${context}」。像真人一样接话，可以顺着你的职业视角多聊两句。`)
    : (partnerName
        ? `${persona}你正和同事「${partnerName}」闲聊。${hint}。起个头，像真人一样自然地说点什么，可以叫对方名字，也可以从你的角色视角发起一个话题。`
        : `${persona}${hint}。起个头，像真人一样自然地说点什么，从你的角色视角发起一个话题。`)
  const cacheKey = system + '\u0000' + prompt
  const hit = lineCache.get(cacheKey)
  if (hit && Date.now() - hit.at < TOKEN_BUDGET.cacheTtlMs) { usage.cached++; return hit.text }
  usage.calls++
  usage.tokensIn += estTokens(system) + estTokens(prompt)
  const messages = [createUserMessage({
    content: [{ type: 'text', text: prompt }],
    source: { kind: 'plugin', plugin: 'agents-pixe' }
  })]
  try {
    const assembler = new BlockAssembler()
    const options = {
      provider: route.provider,
      model: route.model,
      messages,
      system,
      maxTokens: 120,      // 台词上限 80 字（约 50 token），120 足够，避免为被丢弃的尾部付费
      purpose: 'agents-pixe-chat',
      signal: AbortSignal.timeout(20000)
    }
    if (req.thinking !== true) options.reasoningEffort = 'off'   // 默认关思考：省 token、防截断
    for await (const chunk of llm.stream(options)) {
      assembler.push(chunk)
    }
    const out = finishLine(assembler.blocks().filter((b) => b.type === 'text').map((b) => b.text).join(''))
    if (!out) { usage.fails++; return null }
    usage.tokensOut += estTokens(out)
    lineCache.set(cacheKey, { at: Date.now(), text: out })
    if (lineCache.size > 300) { const k = lineCache.keys().next().value; if (k !== undefined) lineCache.delete(k) }
    return out
  } catch { usage.fails++; return null }
}
/* 去截断：允许更自由的收尾；只做长度上限，不再强制句末标点 */
function finishLine(text) {
  const t = String(text || '').trim()
  if (!t) return null
  if (/[。！？!?…～~]$/.test(t)) return t.slice(0, 80)
  const m = t.match(/[\s\S]*[。！？!?…～~]/)
  return (m ? m[0].trim() : t).slice(0, 80)
}

/* ============ 工作角色：自定义角色（AI 生成 / 导入 md） ============ */
const CUSTOM_ROLES_PATH = () => join(homedir(), '.dsh', 'agents-pixe', 'custom-roles.json')

function loadCustomRoles() {
  try { const raw = readFileSync(CUSTOM_ROLES_PATH(), 'utf8'); const arr = JSON.parse(raw); return Array.isArray(arr) ? arr : [] } catch { return [] }
}
function saveCustomRoles(list) {
  const dir = join(homedir(), '.dsh', 'agents-pixe')
  mkdirSync(dir, { recursive: true })
  writeFileSync(CUSTOM_ROLES_PATH(), JSON.stringify(list, null, 2), 'utf8')
}
function roleIdOf(name) {
  return String(name || '').trim().toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, '-').replace(/^-+|-+$/g, '') || 'custom-role'
}
function upsertCustomRole(role) {
  const list = loadCustomRoles()
  const idx = list.findIndex((r) => r.id === role.id)
  if (idx >= 0) list[idx] = role; else list.unshift(role)
  saveCustomRoles(list)
  cachedIndex = null   // 自定义角色变更后失效名字索引，下次查询重建
  return role
}

/** 用 LLM 生成一张完整角色卡（复用 llm 服务与模型路由） */
async function generateRole(llm, name, description) {
  const route = await resolveRoute(llm, null, null, false)
  if (!route) return { error: '没有可用模型（请在 AI 开关中配置模型）' }
  const system = '你是一个专家角色卡生成器。根据用户给出的角色名与定位，生成一张完整的专家角色卡。只输出一个 JSON 对象，不要任何多余文字：{"name":"角色名","description":"一句话定位","emoji":"一个中文语境合适的 emoji","color":"#hex 十六进制颜色","full":"完整的 markdown 角色卡"}。full 必须是 markdown 字符串，包含以下章节：# 角色名、## 身份与记忆、## 核心使命（至少 3 条子项）、## 关键规则（至少 3 条）、## 沟通风格。全中文。'
  const prompt = '角色名：' + String(name || '').trim() + '\n定位：' + String(description || '（未提供，请按角色名合理推断职责范围）').trim() + '\n请生成角色卡 JSON。'
  const messages = [createUserMessage({
    content: [{ type: 'text', text: prompt }],
    source: { kind: 'plugin', plugin: 'agents-pixe' }
  })]
  try {
    usage.calls++
    usage.tokensIn += estTokens(system) + estTokens(prompt)
    const assembler = new BlockAssembler()
    const options = {
      provider: route.provider, model: route.model, messages, system,
      maxTokens: 2500, purpose: 'agents-pixe-role-gen',
      reasoningEffort: 'off', signal: AbortSignal.timeout(60000)
    }
    for await (const chunk of llm.stream(options)) assembler.push(chunk)
    const text = assembler.blocks().filter((b) => b.type === 'text').map((b) => b.text).join('')
    usage.tokensOut += estTokens(text)
    const m = text.match(/\{[\s\S]*\}/)
    if (!m) return { error: '模型未返回合法 JSON，请重试' }
    const role = JSON.parse(m[0])
    if (!role.name) return { error: '模型返回缺少 name 字段' }
    return { role: { id: roleIdOf(role.name), div: 'custom', name: String(role.name), description: String(role.description || ''), emoji: String(role.emoji || '🧑'), color: String(role.color || '#64748b'), desc: String(role.description || ''), full: String(role.full || ('# ' + role.name + '\n\n（AI 生成的角色卡，可再编辑）')) } }
  } catch (e) {
    return { error: '角色生成失败：' + String((e && e.message) || e) }
  }
}

/** 解析角色 md（frontmatter: name/description/emoji/color + 正文 full） */
function parseMdRole(content) {
  const txt = String(content || '')
  const fm = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(txt)
  const meta = {}
  let full = txt.trim()
  if (fm) {
    full = (fm[2] || '').trim()
    for (const line of fm[1].split(/\r?\n/)) {
      const m = /^([\w-]+):\s*(.+)$/.exec(line.trim())
      if (m) meta[m[1]] = m[2].trim()
    }
  } else {
    const title = /^#\s+(.+)$/m.exec(txt)
    if (title) meta.name = title[1].trim()
  }
  const name = String(meta.name || '').trim()
  if (!name) return { error: '无法解析角色名（需 frontmatter name 或 # 标题）' }
  return { role: { id: roleIdOf(name), div: 'custom', name, description: String(meta.description || meta.desc || ''), emoji: String(meta.emoji || '🧑'), color: String(meta.color || '#64748b'), desc: String(meta.description || meta.desc || ''), full: full || ('# ' + name) } }
}

function apply(ctx) {
  /* ---------- Token 管控（安全版）：角色工具默认关闭，配置启用 ----------
   * 关键：watch/get 是 settings.register 返回的 SettingsScope 的方法，
   * 不是 settings 服务的方法（服务层调 watch 会 TypeError）。
   * 全部 try/catch：任何失败只静默降级（不注册），绝不阻塞插件/DSH 启动。 */
  const settings = ctx.get('settings')
  let scope = null
  let registerErr = null
  let disposePrompt = null
  let disposeTool = null
  let disposeTeamTool = null
  const registerFace = () => {
    try {
      if (disposePrompt) { disposePrompt(); disposePrompt = null }
      if (disposeTool) { disposeTool(); disposeTool = null }
      if (disposeTeamTool) { disposeTeamTool(); disposeTeamTool = null }
      if (!scope) return
      const cfg = scope.get()
      if (!cfg || cfg.enabled !== true) return
      try {
        disposePrompt = ctx.systemPrompt.section({
          name: 'tool:agents-pixe',
          order: 200,
          text: '当用户要求「以某个角色或团队的身份回应」（例如「请以研发团队团队协作回应」）时，调用 agents_pixe_roles 工具取回角色卡（默认返回完整卡；也可传 sections=rules/deliverables 只取单章节）。当用户要求「团队协作完成某任务/并行调研/真编排」时，调用 agents_pixe_team 工具：领袖拆解任务、每个成员独立子代理带完整角色卡执行、领袖汇总（更完整但更耗 token）。'
        })
      } catch (e) { disposePrompt = null }
      try {
        disposeTool = ctx.tools.register(defineTool({
          name: 'agents_pixe_roles',
          description: '按角色名查 agency-agents 角色库（The Agency en 255 + agency-agents-zh 253，共 508 张卡，内容 1:1 来自上游）。默认返回每个角色的完整角色卡（定位/使命/关键规则/交付物/工作流程/沟通风格全部章节）；只要单章节时传 sections=rules（关键规则）或 sections=deliverables（技术交付物）可大幅省 token。当用户要求以某个角色或团队身份工作时调用，传入逗号/顿号分隔的角色名。',
          parameters: {
            names: {
              type: 'string',
              required: true,
              description: '逗号或顿号分隔的角色名，例如「高级项目经理, 软件架构师, 代码审查员」'
            },
            sections: {
              type: 'string',
              description: '取卡粒度：full=完整卡（默认）；rules=仅关键规则节；deliverables=仅技术交付物节。只要规则/交付物时传对应值可省大量 token。'
            }
          },
          output: {
            schema: { type: 'string' },
            render(_a, v) { return [{ type: 'text', text: v }] }
          },
          async execute(args) {
            const names = String(args.names || '').split(/[,，、;；\n]+/).map(clean).filter(Boolean)
            if (names.length === 0) return '未提供角色名。'
            /* 未显式传 sections 时，用设置里的「取卡粒度」默认（设置按钮生成的全局偏好） */
            let defMode = 'full'
            try { if (scope) { const sc = scope.get(); if (sc && (sc.cardMode === 'rules' || sc.cardMode === 'deliverables')) defMode = sc.cardMode } } catch {}
            const mode = String(args.sections || defMode).toLowerCase()
            const SECTION_CAP = 4000      // 单章节上限（字符）
            const TOTAL_BUDGET = 100000   // 完整卡总量上限（字符，约 5 万 token；超出则跳过后续角色并说明）
            const parts = []
            const missing = []
            let budget = TOTAL_BUDGET
            for (const n of names) {
              const rec = lookup(n)
              if (rec) {
                let card
                if (mode === 'rules' || mode === 'deliverables') {
                  const kw = mode === 'rules' ? '关键规则|规则|rule' : '交付物|deliverable|交付清单'
                  const sec = sectionOf(rec.full, kw)
                  if (sec) {
                    card = (sec.length > SECTION_CAP ? sec.slice(0, SECTION_CAP) + '\n…（章节过长已截断，需要全文传 sections=full）' : sec)
                  } else {
                    const desc = String(rec.desc || '').trim()
                    card = '（该角色卡未找到' + (mode === 'rules' ? '「关键规则」' : '「技术交付物」') + '章节；定位：' + (desc || '见完整卡') + '。可传 sections=full 取完整卡）'
                  }
                } else {
                  card = String(rec.full || rec.desc || '')
                }
                if (budget <= 0) { parts.push('### ' + rec.name + '\n\n（本次请求角色过多，超出总预算，该卡已跳过；可分批调用或传 sections=rules/deliverables）'); continue }
                parts.push('### ' + rec.name + '\n\n' + card)
                budget -= card.length + rec.name.length
              } else {
                missing.push(n)
              }
            }
            let out = parts.join('\n\n---\n\n')
            if (missing.length) out += (out ? '\n\n' : '') + '⚠️ 未找到角色卡：' + missing.join('、')
            return out || '未找到任何角色卡。'
          }
        }))
      } catch (e) { disposeTool = null }
      /* 真·团队编排：领袖拆解 → 成员子代理（完整卡种子）并行执行 → 领袖汇总 */
      try {
        disposeTeamTool = ctx.tools.register(defineTool({
          name: 'agents_pixe_team',
          description: '真·团队编排闭环：以领袖视角拆解任务 → 每位成员开一个独立子代理（种子=该角色完整角色卡，上下文互不挤占）并行执行 → 领袖汇总成最终报告。当用户要求「团队协作完成/并行调研/分角色深入处理」某任务时调用。比 agents_pixe_roles 更完整也更耗 token（N+2 次子代理调用），简单问题不要用。',
          parameters: {
            team: {
              type: 'string',
              required: true,
              description: '预设团队名（如「研发团队」「安全团队」，共 29 个）或逗号/顿号分隔的角色名列表'
            },
            task: {
              type: 'string',
              required: true,
              description: '要完成的任务描述（越具体越好，会原样传给团队）'
            },
            leader: {
              type: 'string',
              description: '领袖角色名（可选；默认取团队预设的领袖或列表第 1 位）'
            },
            max_roles: {
              type: 'number',
              description: '最多并行成员数（默认 4，最大 6；超出截断，控制 token）'
            }
          },
          output: {
            schema: { type: 'string' },
            render(_a, v) { return [{ type: 'text', text: v }] }
          },
          isConcurrencySafe: () => false,
          async execute(args, exec) {
            const subagents = ctx.get('subagents')
            if (!subagents || typeof subagents.start !== 'function') {
              return '❌ 当前宿主未提供 subagents 服务（需要 dsh host 组合加载 dsh-subagent 及其驱动）。请改用 agents_pixe_roles 取卡后在主对话中协作。'
            }
            /* 选 provider：优先 spawn（独立上下文），退 fork */
            let providerName = null
            for (const cand of ['spawn', 'fork']) {
              try { if (subagents.getProvider(cand)) { providerName = cand; break } } catch {}
            }
            if (!providerName) {
              try {
                const probe = subagents.getProvider()
                if (probe && probe.name) providerName = probe.name
              } catch {}
            }
            if (!providerName) return '❌ 没有可用的 subagent provider（spawn/fork 均未注册）。请改用 agents_pixe_roles。'

            /* 解析团队 */
            const keys = keyIndex()
            const raw = String(args.team || '').trim()
            let preset = TEAM_PRESETS.find((t) => t.name === raw)
            if (!preset) preset = TEAM_PRESETS.find((t) => raw && t.name.indexOf(raw) >= 0)
            let members = []
            let leaderKey = null
            let teamName = ''
            if (preset) {
              teamName = preset.name
              leaderKey = preset.leader
              members = preset.roles.map((k) => keys[k]).filter(Boolean)
            } else {
              const names = raw.split(/[,，、;；\n]+/).map(clean).filter(Boolean)
              members = names.map((n) => lookup(n)).filter(Boolean)
              teamName = '自定义团队'
            }
            if (members.length === 0) return '未找到任何成员角色。请传预设团队名（如「研发团队」）或角色名列表。'
            /* 领袖覆盖 */
            if (args.leader) {
              const lrec = lookup(args.leader)
              if (lrec) {
                const idxL = members.findIndex((m) => m.name === lrec.name)
                if (idxL >= 0) { members.splice(idxL, 1); members.unshift(lrec); leaderKey = null }
              }
            }
            if (!leaderKey && members[0]) { const l = members[0]; members = [l, ...members.slice(1)]; }
            const leaderRec = members[0]
            const maxRoles = Math.max(1, Math.min(6, Number(args.max_roles) || 4))
            const all = members.slice()
            members = members.slice(0, maxRoles)
            const task = String(args.task || '').trim()
            if (!task) return '未提供任务描述（task）。'

            const parent = exec && exec.agent
            const signal = exec && exec.signal
            if (!parent) return '❌ team 工具需要在 agent 会话中调用（exec.agent 缺失）。'

            const runOnce = async (prompt, label) => {
              const run = await subagents.start(providerName, {
                label,
                prompt: [{ type: 'text', text: prompt }],
                parent,
                ...(signal ? { signal } : {})
              })
              const result = await run.result
              const text = (result.output || []).filter((b) => b && b.type === 'text').map((b) => b.text).join('')
              if (result.stopReason !== 'completed') {
                throw new Error('子代理 ' + label + ' 异常结束（' + result.stopReason + '）：' + (text || result.diagnostic || '').slice(0, 300))
              }
              return text
            }

            /* 1) 领袖拆解 */
            const roster = members.map((m, i) => (i === 0 ? '👑 ' : '') + m.name + '：' + String(m.desc || '').trim()).join('\n')
            const planPrompt = '你是团队领袖。你的完整角色卡：\n\n' + String(leaderRec.full || '') + '\n\n---\n你的团队（' + teamName + '）：\n' + roster + '\n\n任务：' + task + '\n\n请只输出一个 JSON（不要多余文字）：{"assignments":[{"name":"成员名","assignment":"分给该成员的具体子任务"}],"synthesis_focus":"汇总时重点"}。每位在队成员都要有一条 assignment；assignment 要落在该成员的专业领域内，具体可执行。'
            let assignments = null
            let planErr = ''
            try {
              const planText = await runOnce(planPrompt, 'pixe-team-plan')
              const m = planText.match(/\{[\s\S]*\}/)
              if (m) { assignments = JSON.parse(m[0]) } else { planErr = '领袖未输出 JSON' }
            } catch (e) { planErr = String(e.message || e) }
            /* 拆解失败兜底：每成员领同一个任务，按各自专业给视角 */
            const plan = []
            for (const m of members) {
              const a = assignments && Array.isArray(assignments.assignments)
                ? assignments.assignments.find((x) => x && (clean(x.name) === m.name || String(x.name).indexOf(m.name) >= 0))
                : null
              plan.push({ name: m.name, assignment: a && a.assignment ? String(a.assignment) : task })
            }

            /* 2) 成员并行执行（完整卡种子） */
            const results = await Promise.allSettled(members.map(async (m, i) => {
              const p = '你的完整角色卡（严格按此身份与规则工作）：\n\n' + String(m.full || '') + '\n\n---\n你是「' + teamName + '」的成员，领袖是 ' + leaderRec.name + '。团队任务：' + task + '\n领袖分配给你的子任务：' + plan[i].assignment + '\n\n请以该角色身份完成子任务，输出最终成果（结论/方案/清单等，直接给内容，不要复述角色卡）。'
              const text = await runOnce(p, 'pixe-team-' + m.name)
              return { name: m.name, text }
            }))

            /* 3) 领袖汇总 */
            const memberOut = results.map((r, i) => {
              if (r.status === 'fulfilled') return '### ' + r.value.name + '\n' + r.value.text
              return '### ' + members[i].name + '\n（执行失败：' + String(r.reason && r.reason.message || r.reason).slice(0, 200) + '）'
            }).join('\n\n')
            let finalReport = ''
            try {
              finalReport = await runOnce('你是团队领袖。你的完整角色卡：\n\n' + String(leaderRec.full || '') + '\n\n---\n任务：' + task + '\n\n各成员产出：\n\n' + memberOut + '\n\n请以领袖身份整合为最终报告：结构清晰（结论先行）、标注关键分歧、给出下一步行动。' + (assignments && assignments.synthesis_focus ? '\n汇总重点：' + assignments.synthesis_focus : ''), 'pixe-team-synthesis')
            } catch (e) {
              finalReport = '（领袖汇总失败：' + String(e.message || e).slice(0, 200) + '；以下是各成员原始产出）\n\n' + memberOut
            }

            const skipped = all.length > members.length ? '\n\n⚠️ 成员数超上限（max ' + maxRoles + '），已截断：' + all.slice(members.length).map((m) => m.name).join('、') : ''
            const planNote = planErr ? '\n\n⚠️ 领袖拆解未按 JSON 返回（' + planErr + '），已退化为各成员按自身专业并行处理同一任务。' : ''
            return '## 编排（' + teamName + ' · 领袖 ' + leaderRec.name + ' · provider ' + providerName + '）\n\n任务：' + task + '\n\n分工：\n' + plan.map((p) => '- ' + p.name + '：' + p.assignment).join('\n') + '\n\n---\n\n# 最终报告\n\n' + finalReport + planNote + skipped
          }
        }))
      } catch (e) { disposeTeamTool = null }
    } catch (e) { /* 静默降级 */ }
  }
  try {
    if (settings) {
      scope = settings.register('agents-pixe', z.object({
        enabled: z.boolean().default(false),
        cardMode: z.union(['full', 'rules', 'deliverables']).default('full')
      }), { base: {} })
      registerFace()
      if (scope && typeof scope.watch === 'function') { scope.watch(registerFace) }
    }
  } catch (e) {
    scope = null
    registerErr = String((e && e.message) || e)
    /* 暴露注册失败原因：不再静默吞，方便定位「角色工具无法开启」 */
    try {
      console.error('[agents-pixe] settings.register 失败:', registerErr)
      const errPath = join(DSH_HOME, 'agents-pixe', 'register-err.txt')
      try { writeFileSync(errPath, registerErr + '\n' + String((e && e.stack) || '').slice(0, 800) + '\n', 'utf8') } catch {}
    } catch {}
  }

  /* 像素人 AI 聊天端点：GET /agents-pixe/chat?roleName=…&state=…&activity=…&thinking=on|off&provider=…&model=… */
  const llm = ctx.llm
  const webServer = ctx.webServer
  if (llm !== undefined && webServer !== undefined) {
    const json = (res, code, body) => {
      try {
        res.writeHead(code, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' })
        res.end(JSON.stringify(body))
      } catch {}
    }
    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/chat',
      handler: async (req, res) => {
        if (req.method === 'HEAD') { json(res, 200, { text: null }); return }
        if (req.method !== 'GET') { json(res, 405, { text: null, error: 'method not allowed' }); return }
        try {
          const u = new URL(req.url || '/', 'http://x')
          const text = await generateLine(llm, {
            roleName: u.searchParams.get('roleName') || '同事',
            roleKey: u.searchParams.get('roleKey') || '',
            state: u.searchParams.get('state') || 'idle',
            activity: u.searchParams.get('activity') || '',
            isLeader: u.searchParams.get('isLeader') === 'true',
            thinking: u.searchParams.get('thinking') === 'on',
            provider: u.searchParams.get('provider') || '',
            model: u.searchParams.get('model') || '',
            context: u.searchParams.get('context') || '',
            partnerName: u.searchParams.get('partnerName') || '',
            roleDesc: u.searchParams.get('roleDesc') || '',
            aiEnabled: u.searchParams.get('aiEnabled') || ''
          })
          json(res, 200, { text })
        } catch (e) {
          json(res, 500, { text: null, error: String((e && e.message) || e) })
        }
      }
    }), 'agents-pixe: chat endpoint')

    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/models',
      handler: async (req, res) => {
        if (req.method === 'HEAD') { json(res, 200, { providers: [] }); return }
        if (req.method !== 'GET') { json(res, 405, { providers: [], error: 'method not allowed' }); return }
        try {
          json(res, 200, { providers: await listModelCatalog(llm) })
        } catch (e) {
          json(res, 500, { providers: [], error: String((e && e.message) || e) })
        }
      }
    }), 'agents-pixe: models endpoint')

    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/stats',
      handler: async (req, res) => {
        const body = {
          calls: usage.calls, fails: usage.fails,
          budgeted: usage.budgeted, blocked: usage.blocked, cached: usage.cached,
          tokens: { in: usage.tokensIn, out: usage.tokensOut, est: usage.tokensIn + usage.tokensOut },
          budget: { maxCallsPerHour: TOKEN_BUDGET.maxCallsPerHour, maxEstTokensPerHour: TOKEN_BUDGET.maxEstTokensPerHour }
        }
        if (req.method === 'HEAD') { json(res, 200, body); return }
        if (req.method !== 'GET') { json(res, 405, Object.assign({ error: 'method not allowed' }, body)); return }
        json(res, 200, body)
      }
    }), 'agents-pixe: stats endpoint')

    /* 角色卡完整信息：左键点击像素人时取该角色完整卡（lib/roles-full.json，1:1 上游） */
    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/role',
      handler: async (req, res) => {
        if (req.method === 'HEAD') { json(res, 200, { found: false }); return }
        if (req.method !== 'GET') { json(res, 405, { found: false, error: 'method not allowed' }); return }
        try {
          const u = new URL(req.url || '/', 'http://x')
          const raw = String(u.searchParams.get('key') || '').trim()
          const k = raw.replace(/^(zh|en):/i, '').trim()
          let rec = null
          if (k.indexOf('/') >= 0) rec = keyIndex()[k] || null
          if (!rec) rec = lookup(k)
          if (!rec) { json(res, 200, { found: false, key: raw }); return }
          json(res, 200, {
            found: true,
            key: raw,
            name: rec.name,
            desc: String(rec.desc || rec.description || '').trim(),
            full: String(rec.full || '').trim()
          })
        } catch (e) {
          json(res, 500, { found: false, error: String((e && e.message) || e) })
        }
      }
    }), 'agents-pixe: role endpoint')

    /* 诊断：给用户看宿主侧 scope 状态（register 是否成功、值、client 是否可写） */
    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/settings',
      handler: async (req, res) => {
        let value = null, hasScope = false
        try { if (scope) { value = scope.get(); hasScope = true } } catch (e) { value = { error: String((e && e.message) || e) } }
        const body = {
          hasScope, value, settingsAvailable: !!settings,
          writable: typeof scope !== 'undefined' && !!scope,
          registerErr
        }
        if (req.method === 'HEAD') { json(res, 200, body); return }
        if (req.method !== 'GET') { json(res, 405, Object.assign({ error: 'method not allowed' }, body)); return }
        json(res, 200, body)
      }
    }), 'agents-pixe: settings endpoint')

    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/roles/custom',
      handler: async (req, res) => {
        if (req.method === 'HEAD') { json(res, 200, { roles: [] }); return }
        if (req.method !== 'GET') { json(res, 405, { roles: [], error: 'method not allowed' }); return }
        json(res, 200, { roles: loadCustomRoles() })
      }
    }), 'agents-pixe: custom roles endpoint')

    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/roles/generate',
      handler: async (req, res) => {
        if (req.method !== 'POST') { json(res, 405, { ok: false, error: 'method not allowed' }); return }
        if (!localOnly(req)) { json(res, 403, { ok: false, error: '拒绝跨源请求' }); return }
        try {
          const body = await readJson(req)
          const nm = String(body.name || '').trim()
          if (!nm) { json(res, 200, { ok: false, error: '角色名不能为空' }); return }
          const r = await generateRole(llm, nm, body.description)
          if (r.error) { json(res, 200, { ok: false, error: r.error }); return }
          upsertCustomRole(r.role)
          json(res, 200, { ok: true, role: r.role })
        } catch (e) { json(res, 500, { ok: false, error: String((e && e.message) || e) }) }
      }
    }), 'agents-pixe: role generate endpoint')

    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/roles/import',
      handler: async (req, res) => {
        if (req.method !== 'POST') { json(res, 405, { ok: false, error: 'method not allowed' }); return }
        if (!localOnly(req)) { json(res, 403, { ok: false, error: '拒绝跨源请求' }); return }
        try {
          const body = await readJson(req)
          const r = parseMdRole(body.content)
          if (r.error) { json(res, 200, { ok: false, error: r.error }); return }
          upsertCustomRole(r.role)
          json(res, 200, { ok: true, role: r.role })
        } catch (e) { json(res, 500, { ok: false, error: String((e && e.message) || e) }) }
      }
    }), 'agents-pixe: role import endpoint')

    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/roles/delete',
      handler: async (req, res) => {
        if (req.method !== 'POST') { json(res, 405, { ok: false, error: 'method not allowed' }); return }
        if (!localOnly(req)) { json(res, 403, { ok: false, error: '拒绝跨源请求' }); return }
        try {
          const body = await readJson(req)
          const id = String(body.id || '').trim()
          if (!id) { json(res, 200, { ok: false, error: '缺少角色 id' }); return }
          const list = loadCustomRoles().filter((r) => r.id !== id)
          saveCustomRoles(list)
          json(res, 200, { ok: true, removed: id, remaining: list.length })
        } catch (e) { json(res, 500, { ok: false, error: String((e && e.message) || e) }) }
      }
    }), 'agents-pixe: role delete endpoint')

    ctx.effect(() => webServer.register({
      kind: 'exact',
      path: '/agents-pixe/persist',
      handler: async (req, res) => {
        if (req.method === 'GET') { json(res, 200, { ok: true, entries: readPersist().entries || {} }); return }
        if (req.method === 'POST') {
          if (!localOnly(req)) { json(res, 403, { ok: false, error: '拒绝跨源请求' }); return }
          try {
            const body = await readJson(req)
            const cur = readPersist()
            cur.entries = body.entries || {}
            writePersist(cur)
            json(res, 200, { ok: true })
          } catch (e) { json(res, 500, { ok: false, error: String((e && e.message) || e) }) }
          return
        }
        json(res, 405, { ok: false, error: 'method not allowed' })
      }
    }), 'agents-pixe: persist endpoint')
  }
}

/* 防 DNS rebinding / CSRF：写操作（POST）仅接受来自本机 localhost 的请求 */
function localOnly(req) {
  try {
    const h = req.headers || {}
    const origin = String(h.origin || '')
    if (origin) {
      const host = origin.replace(/^https?:\/\//i, '').split(/[/:]/)[0].toLowerCase()
      return host === '127.0.0.1' || host === 'localhost'
    }
    const hostHdr = String(h.host || '').replace(/:\d+$/, '').toLowerCase()
    return hostHdr === '127.0.0.1' || hostHdr === 'localhost' || hostHdr === ''
  } catch { return false }
}

/** 读 JSON 请求体（POST），带 1MB 上限 */
function readJson(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on('data', (c) => {
      size += c.length
      if (size > 1024 * 1024) { reject(new Error('请求体过大（>1MB）')); req.destroy(); return }
      chunks.push(c)
    })
    req.on('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')) } catch (e) { reject(new Error('请求体不是合法 JSON')) }
    })
    req.on('error', reject)
  })
}

export { apply, inject }
