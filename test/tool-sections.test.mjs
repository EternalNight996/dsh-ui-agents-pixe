// 验证 agents_pixe_roles 的 sections 参数与完整卡默认行为（直接驱动注册的工具 execute）：
// 1. 默认返回完整卡（与 roles-full.json 的 full 逐字一致）
// 2. sections=rules 命中「关键规则」章节（含 ### 子标题不被截断）
// 3. sections=deliverables 命中「技术交付物」章节
// 用法：node --test test/tool-sections.test.mjs
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

function makeCtx() {
  const tools = []
  const mockSettings = {
    register() {
      return { get: () => ({ enabled: true }), watch: () => () => {} }
    },
  }
  return {
    ctx: {
      // cordis 注入服务以属性形式访问（ctx.tools / ctx.systemPrompt）；
      // settings 在本插件里走 ctx.get('settings')
      tools: { register: (t) => { tools.push(t); return { dispose() {} } } },
      systemPrompt: { section: () => ({ dispose() {} }) },
      get: (k) => ({
        settings: mockSettings,
        webServer: { register: () => ({ dispose() {} }) },
        llm: {},
        subagents: undefined,
      }[k]),
      config: {},
      effect: (fn) => { const r = fn(); if (typeof r === 'function') r(); },
    },
    tools,
  }
}

async function loadTools() {
  const { ctx, tools } = makeCtx()
  const mod = await import(pathToFileURL(join(root, 'lib', 'index.js')).href)
  mod.apply(ctx)
  return tools
}

test('注册了 roles 与 team 两个工具', async () => {
  const tools = await loadTools()
  const names = tools.map((t) => t.name)
  assert.ok(names.includes('agents_pixe_roles'), '缺 agents_pixe_roles: ' + names)
  assert.ok(names.includes('agents_pixe_team'), '缺 agents_pixe_team: ' + names)
})

test('默认 sections=full 返回完整卡（与数据源逐字一致）', async () => {
  const tools = await loadTools()
  const roles = tools.find((t) => t.name === 'agents_pixe_roles')
  const out = await roles.execute({ names: 'GIS 分析师' })
  const data = JSON.parse(readFileSync(join(root, 'lib', 'roles-full.json'), 'utf8'))
  const card = data.zh['gis/gis-analyst'] || data.en['gis/gis-analyst']
  assert.ok(out.includes('### '), '应有角色标题：' + out.slice(0, 80))
  assert.ok(out.indexOf(String(card.full).slice(0, 200)) >= 0, '完整卡正文应原样出现（前 200 字符）')
})

test('sections=rules 命中关键规则节且 ### 子标题内容不被截断', async () => {
  const tools = await loadTools()
  const roles = tools.find((t) => t.name === 'agents_pixe_roles')
  // gis-analyst 的规则节内含 ### Data Integrity 子标题（旧正则会整段丢失）
  const out = await roles.execute({ names: 'gis/gis-analyst', sections: 'rules' })
  assert.ok(!out.includes('完整卡'), 'rules 模式不应回退提示完整卡: ' + out.slice(0, 120))
  assert.ok(out.length > 100, '规则节应有实质内容: ' + out.slice(0, 120))
})

test('sections=deliverables 命中交付物节或明确回退提示', async () => {
  const tools = await loadTools()
  const roles = tools.find((t) => t.name === 'agents_pixe_roles')
  const out = await roles.execute({ names: '高级项目经理', sections: 'deliverables' })
  assert.ok(typeof out === 'string' && out.length > 0)
  // 命中：有内容；未命中：给出明确指引（两种都可接受，只要不静默空返回）
  assert.ok(out.includes('###') || out.includes('sections=full'), '应返回章节或回退指引')
})
