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
import { cnameOf } from './names.mjs'

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
