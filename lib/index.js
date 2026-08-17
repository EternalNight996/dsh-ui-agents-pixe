// agents-pixe 宿主半边：注册 `agents_pixe_roles` 工具，按角色名查 agency-agents
// 完整角色卡（数据来自随包分发的 lib/roles-full.json，en + zh 全量固化）。
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { homedir } from 'node:os'
import { defineTool } from '@deepseek-ai/dsh-tools'
import { BlockAssembler, createUserMessage } from '@deepseek-ai/dsh-llm'

const inject = ['tools', 'systemPrompt', 'llm', 'webServer']

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
  const idx = nameIndex()
  const n = clean(name)
  if (!n) return null
  if (idx[n]) return idx[n]
  const lower = n.toLowerCase()
  for (const key of Object.keys(idx)) {
    const k = key.toLowerCase()
    if (k.indexOf(lower) >= 0 || lower.indexOf(k) >= 0) return idx[key]
  }
  return null
}

/* ---------- 像素人 AI 聊天：用 dsh 自配模型生成一句闲聊台词 ---------- */
let stats = { calls: 0, fails: 0 }   // 调用计数：真正的模型调用次数（含失败）
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
  const route = await resolveRoute(llm, req.provider, req.model, true)
  if (!route) return null
  stats.calls++                       // 真正发起一次模型调用
  const role = clean(String(req.roleName || '同事')) || '同事'
  const state = String(req.state || 'idle')
  const activity = String(req.activity || '')
  const hint = state === 'working' && activity
    ? `现在正在处理「${activity}」`
    : state === 'done' ? '刚刚干完手头的活，准备休息'
    : '现在比较闲，在工位附近走动'
  const system = '你在一个像素办公室里，扮演一位有血有肉、有自己想法的同事，用中文跟相邻工位的同事聊天。要有人类的真实感：有观点、有情绪、会迟疑、会开玩笑、会自嘲、会吐槽，偶尔冒出一点哲学味的想法。禁止：客套话、说教、emoji、列表、英文，以及「好的/收到/明白/嗯嗯」这类机器人腔。只说一句 20~40 字的自然闲话，不展开、不解释、不要冒号分条。'
  const context = String(req.context || '').trim()
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
    if (!out) stats.fails++
    return out
  } catch { stats.fails++; return null }
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
    const assembler = new BlockAssembler()
    const options = {
      provider: route.provider, model: route.model, messages, system,
      maxTokens: 2500, purpose: 'agents-pixe-role-gen',
      reasoningEffort: 'off', signal: AbortSignal.timeout(60000)
    }
    for await (const chunk of llm.stream(options)) assembler.push(chunk)
    const text = assembler.blocks().filter((b) => b.type === 'text').map((b) => b.text).join('')
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
  ctx.systemPrompt.section({
    name: 'tool:agents-pixe',
    order: 200,
    text: '当用户要求「以某个角色或团队的身份回应」（例如「请以研发团队团队协作回应」）时，调用 agents_pixe_roles 工具，传入消息里列出的角色名，先取回每个角色的完整角色卡，再按其定位与规则工作。'
  })
  ctx.tools.register(defineTool({
    name: 'agents_pixe_roles',
    description: '按角色名查 agency-agents 角色库，返回每个角色的精简角色卡（定位、规则、清单、语气，单卡约 1.5K 字符、单次调用总量封顶，控制 token）。当用户要求以某个角色或团队身份工作时调用，传入逗号/顿号分隔的角色名。',
    parameters: {
      names: {
        type: 'string',
        required: true,
        description: '逗号或顿号分隔的角色名，例如「高级项目经理, 软件架构师, 代码审查员」'
      }
    },
    output: {
      schema: { type: 'string' },
      render(_a, v) { return [{ type: 'text', text: v }] }
    },
    async execute(args) {
      const names = String(args.names || '').split(/[,，、;；\n]+/).map(clean).filter(Boolean)
      if (names.length === 0) return '未提供角色名。'
      const PER_CARD = 1500
      const TOTAL_BUDGET = 6000
      const trimCard = (rec) => {
        const full = String(rec.full || '')
        if (full.length <= PER_CARD) return full
        let cut = full.slice(0, PER_CARD)
        const lastBreak = Math.max(cut.lastIndexOf('\n\n'), cut.lastIndexOf('\n'))
        if (lastBreak > PER_CARD * 0.6) cut = cut.slice(0, lastBreak)
        return cut.trimEnd() + '\n…（角色卡过长，已按 token 预算截断，可针对具体章节追问）'
      }
      const parts = []
      const missing = []
      let budget = TOTAL_BUDGET
      for (const n of names) {
        const rec = lookup(n)
        if (rec) {
          if (budget <= 0) { parts.push('### ' + rec.name + '\n\n（本次请求角色过多，该卡已跳过以控制 token）'); continue }
          const card = trimCard(rec)
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
            roleDesc: u.searchParams.get('roleDesc') || ''
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
        if (req.method === 'HEAD') { json(res, 200, { calls: stats.calls, fails: stats.fails }); return }
        if (req.method !== 'GET') { json(res, 405, { calls: 0, fails: 0, error: 'method not allowed' }); return }
        json(res, 200, { calls: stats.calls, fails: stats.fails })
      }
    }), 'agents-pixe: stats endpoint')

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
