// 生成 agents-pixe 的角色目录 JSON（冻结数据，随插件包分发，不依赖运行时文件系统）。
// 用法：node plugins/dsh-ui-agents-pixe/scripts/gen-roles.mjs
// 输入（自动探测，缺失则从上游仓库克隆，长期可重建）：
//   - en: 已安装 skill 的 references，或从 github.com/msitarzewski/agency-agents 克隆
//   - zh: agency-agents-zh，或从 github.com/jnMetaCode/agency-agents-zh 克隆
// 输出：plugins/dsh-ui-agents-pixe/lib/roles.json + roles-full.json

import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
// --- 内联自 names.mjs（精简后） ---
const DIVISION_NAMES = {
  engineering: ['图灵','冯诺依曼','香农','高德纳','林纳斯','里奇','洛芙莱斯','汤普森','迪杰斯特拉','霍珀','伯纳斯李','高斯林','恩格尔巴特','巴科斯','沃兹尼亚克','卡马克','斯托曼','克努特','艾伦凯','韦尔奇','麦卡锡','明斯基','西蒙','纽厄尔','霍姆斯','辛顿','杨立昆','本吉奥','李飞飞','吴恩达','苏茨克维','哈萨比斯'],
  security: ['图灵','里维斯特','沙米尔','阿德尔曼','迪菲','施奈尔','卡巴斯基','米特尼克','齐默尔曼','香农','科温顿','兰普森'],
  marketing: ['奥格威','科特勒','高汀','特劳特','里斯','瑞夫斯','霍普金斯','沃纳梅克','伯内特','贝纳通','里维斯','舒尔茨','波特','莱维特','麦肯纳','科威','阿克尔','德波诺'],
  finance: ['巴菲特','格雷厄姆','索罗斯','芒格','博格','林奇','达里奥','西蒙斯','费雪','麦金西','凯恩斯','斯密','熊彼特','马克思'],
  product: ['乔布斯','马斯克','贝索斯','艾维','梅耶尔','扎克伯格','霍夫曼','格雷厄姆','尼尔森','库克','奥特曼','李开复'],
  'project-management': ['德鲁克','甘特','泰勒','萨瑟兰','罗伊斯','德马科','施瓦伯','明茨伯格','法约尔','韦伯','戴明','朱兰'],
  design: ['拉姆斯','兰德','原研哉','艾维','巴斯','密斯','赖特','莫里斯','埃姆斯','卡雷','佐藤大','包豪斯'],
  legal: ['沈家本','马歇尔','霍姆斯','梅汝璈','商鞅','韩非子','张释之','包拯','边沁','洛克','卢梭','孟德斯鸠','康德','黑格尔','罗尔斯','马克思','恩格斯','苏格拉底','柏拉图','亚里士多德'],
  healthcare: ['希波克拉底','扁鹊','华佗','屠呦呦','南丁格尔','张仲景','李时珍','塞麦尔维斯','弗莱明','巴斯德','詹纳','科赫'],
  academic: ['亚里士多德','苏格拉底','柏拉图','孔子','老子','庄子','孟子','欧几里得','阿基米德','伽利略','牛顿','达尔文','爱因斯坦','霍金','马克思','恩格斯','康德','黑格尔','鲁迅','刘慈欣'],
  'game-development': ['宫本茂','小岛秀夫','卡马克','席德梅尔','岩田聪','莱特','纽维尔','横井军平','三上真司','樱井政博'],
  testing: ['戴明','朱兰','汉弗莱','迈尔斯','博姆','克罗斯比','石川馨','费根鲍姆'],
  sales: ['吉拉德','金克拉','卡耐基','特雷西','帕累托','罗宾斯','齐格勒','博恩崔西'],
  gis: ['墨卡托','托勒密','哥伦布','洪堡','魏格纳','徐霞客','郦道元','麦哲伦','郑和','张骞','玄奘','利玛窦','库克'],
  'spatial-computing': ['特斯拉','萨瑟兰','拉尼尔','马斯克','阿西莫夫','克拉克','凡尔纳','海因莱因','刘慈欣'],
  hr: ['马斯洛','赫茨伯格','麦格雷戈','德鲁克','卡耐基','梅奥','麦肯纳','弗洛伊德','荣格','皮亚杰','罗杰斯','班杜拉'],
  strategy: ['孙子','克劳塞维茨','波特','明茨伯格','钱德勒','马基雅维利','商鞅','鬼谷子','马克思','恩格斯','拿破仑','凯撒'],
  'supply-chain': ['福特','大野耐一','戴明','泰勒','石川馨','丰田喜一郎','斯隆','惠特尼'],
  support: ['南丁格尔','特蕾莎','卡耐基','罗杰斯','杜威','苏格拉底','甘地','曼德拉','白求恩'],
  'paid-media': ['奥格威','霍普金斯','沃纳梅克','里维斯','伯内特','贝纳通'],
  specialized: ['达芬奇','特斯拉','富兰克林','费曼','萨根','笛卡尔','帕斯卡','莱布尼茨','居里','高斯','欧拉','开普勒','亚里士多德','阿基米德','伽利略','牛顿','达尔文','爱因斯坦','霍金','冯诺依曼','图灵','麦克斯韦','马斯克','刘慈欣','马克思','恩格斯','奥特曼','辛顿','李飞飞','吴恩达','杨立昆','本吉奥','苏茨克维','哈萨比斯']
}
const FALLBACK = ['达芬奇','特斯拉','富兰克林','爱因斯坦','牛顿','伽利略','阿基米德','达尔文','高斯','费曼','欧拉','莱布尼茨','图灵','霍金','居里','开普勒','马斯克','刘慈欣','马克思','恩格斯','辛顿','李飞飞','吴恩达','奥特曼','杨立昆','本吉奥']
function hash(s) { let seed = 0; for (let i = 0; i < s.length; i++) seed = (seed * 31 + s.charCodeAt(i)) >>> 0; return seed }
function cnameOf(id, div) { const pool = DIVISION_NAMES[div] || FALLBACK; return pool[hash(id) % pool.length] }

const here = dirname(fileURLToPath(import.meta.url))
const outPath = join(here, '..', 'lib', 'roles.json')

/* 源目录：优先环境变量/本机 skill，缺失则克隆到临时目录 */
function resolveSource(envKey, localPath, repoUrl, destName) {
  if (process.env[envKey]) return process.env[envKey]
  if (existsSync(localPath)) return localPath
  const dest = join(process.env.TEMP, 'dsh-analysis', destName)
  if (existsSync(dest)) return dest
  try {
    execSync(`git clone --depth 1 ${repoUrl} "${dest}"`, { stdio: 'inherit' })
    return dest
  } catch (e) {
    console.warn(`克隆 ${repoUrl} 失败（${e.message}），跳过该语言源`)
    return null
  }
}

const EN_ROOT = resolveSource('AGENTS_PIXE_EN_ROOT', 'C:/Users/Administrator/.agents/skills/agency-agents/references', 'https://github.com/msitarzewski/agency-agents.git', 'agency-agents')
const ZH_ROOT = resolveSource('AGENTS_PIXE_ZH_ROOT', join(process.env.TEMP, 'dsh-analysis', 'agency-agents-zh'), 'https://github.com/jnMetaCode/agency-agents-zh.git', 'agency-agents-zh')

// en 分部元数据（来自 agency-agents 的 divisions.json）
const EN_DIVS = {
  academic: { label: 'Academic', color: '#8B5CF6' },
  design: { label: 'Design', color: '#EC4899' },
  engineering: { label: 'Engineering', color: '#3B82F6' },
  finance: { label: 'Finance', color: '#22C55E' },
  'game-development': { label: 'Game Development', color: '#A855F7' },
  gis: { label: 'GIS', color: '#14B8A6' },
  healthcare: { label: 'Healthcare', color: '#0D9488' },
  marketing: { label: 'Marketing', color: '#F97316' },
  'paid-media': { label: 'Paid Media', color: '#EAB308' },
  product: { label: 'Product', color: '#D946EF' },
  'project-management': { label: 'Project Management', color: '#0EA5E9' },
  sales: { label: 'Sales', color: '#10B981' },
  security: { label: 'Security', color: '#EF4444' },
  'spatial-computing': { label: 'Spatial Computing', color: '#06B6D4' },
  specialized: { label: 'Specialized', color: '#6366F1' },
  support: { label: 'Support', color: '#84CC16' },
  testing: { label: 'Testing', color: '#F59E0B' },
}

// zh 分部中文名 + 颜色（重叠分部沿用 en 颜色；zh 独有分部另配）
const ZH_DIVS = {
  academic: { label: '学术部', color: '#8B5CF6' },
  design: { label: '设计部', color: '#EC4899' },
  engineering: { label: '工程部', color: '#3B82F6' },
  finance: { label: '财务部', color: '#22C55E' },
  'game-development': { label: '游戏开发部', color: '#A855F7' },
  gis: { label: 'GIS', color: '#14B8A6' },
  hr: { label: '人力资源部', color: '#F43F5E' },
  legal: { label: '法务部', color: '#64748B' },
  marketing: { label: '市场部', color: '#F97316' },
  'paid-media': { label: '付费媒体部', color: '#EAB308' },
  product: { label: '产品部', color: '#D946EF' },
  'project-management': { label: '项目管理部', color: '#0EA5E9' },
  sales: { label: '销售部', color: '#10B981' },
  security: { label: '安全部', color: '#EF4444' },
  'spatial-computing': { label: '空间计算部', color: '#06B6D4' },
  specialized: { label: '专项部', color: '#6366F1' },
  strategy: { label: '战略部', color: '#F59E0B' },
  'supply-chain': { label: '供应链部', color: '#0891B2' },
  support: { label: '支持部', color: '#84CC16' },
  testing: { label: '测试部', color: '#F59E0B' },
}

// 固定中文名（不土，含名人/网文名）：由 scripts/names.mjs 的 cnameOf 生成，en/zh 同 id 同名
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return null
  const out = {}
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i < 0) continue
    const k = line.slice(0, i).trim()
    let v = line.slice(i + 1).trim()
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1)
    if (v) out[k] = v
  }
  return out.name ? out : null
}

function walk(root, divs, lang) {
  const roles = []
  const full = {}
  if (!root) return { roles, full }
  for (const div of Object.keys(divs)) {
    const dpath = join(root, div)
    let entries = []
    try { entries = readdirSync(dpath) } catch { continue }
    for (const f of entries) {
      if (!f.endsWith('.md')) continue
      const fp = join(dpath, f)
      if (!statSync(fp).isFile()) continue
      const raw = readFileSync(fp, 'utf8')
      const fm = parseFrontmatter(raw)
      if (!fm) continue
      const id = `${div}/${f.replace(/\.md$/, '')}`
      roles.push({
        id,
        div,
        name: fm.name,
        emoji: fm.emoji || '🟢',
        color: fm.color || divs[div].color,
        desc: (fm.description || '').replace(/\s+/g, ' ').trim(),
        cname: cnameOf(id, div),
      })
      full[id] = { name: fm.name, desc: fm.description || '', full: raw }
    }
  }
  return { roles, full }
}

const en = walk(EN_ROOT, EN_DIVS, 'en')
const zh = walk(ZH_ROOT, ZH_DIVS, 'zh')

const out = {
  generatedAt: new Date().toISOString(),
  en: { divisions: EN_DIVS, roles: en.roles },
  zh: { divisions: ZH_DIVS, roles: zh.roles },
}

const full = {
  generatedAt: new Date().toISOString(),
  en: en.full,
  zh: zh.full,
}

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, JSON.stringify(out))
const fullPath = join(here, '..', 'lib', 'roles-full.json')
writeFileSync(fullPath, JSON.stringify(full))
console.log(`en: ${en.roles.length} roles / ${Object.keys(EN_DIVS).length} divisions`)
console.log(`zh: ${zh.roles.length} roles / ${Object.keys(ZH_DIVS).length} divisions`)
console.log(`written: ${outPath} (${(JSON.stringify(out).length / 1024).toFixed(1)} KB)`)
console.log(`written: ${fullPath} (${(JSON.stringify(full).length / 1024).toFixed(1)} KB)`)
