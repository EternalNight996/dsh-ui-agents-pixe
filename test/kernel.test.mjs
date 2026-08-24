// 验证智子内核：kernelForMode 生成文本、{{self}}/{{master}} 替换、tone 插入、override 优先。
// 用法：node --test test/kernel.test.mjs
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

test('kernelForMode：balanced/zh 含五步纲领与铁律', async () => {
  const { kernelForMode } = await import(pathToFileURL(join(root, 'lib', 'kernel.js')).href)
  const t = kernelForMode('balanced', 'zh', {})
  assert.ok(t.includes('第一性原理'), '应含铁律')
  assert.ok(t.includes('问清') && t.includes('章程') && t.includes('交付'), '应含五步')
})

test('kernelForMode：{{self}}/{{master}} 替换为人设', async () => {
  const { kernelForMode } = await import(pathToFileURL(join(root, 'lib', 'kernel.js')).href)
  // 用 balanced（含 {{self}} 与 {{master}} 占位）
  const t = kernelForMode('balanced', 'zh', { selfName: '洒家', userTitle: '老板' })
  assert.ok(t.includes('洒家'), '自称应替换')
  assert.ok(t.includes('老板') && !t.includes('{{master}}'), '称呼应替换且不留占位')
})

test('kernelForMode：en/full 与 tone 行插入', async () => {
  const { kernelForMode } = await import(pathToFileURL(join(root, 'lib', 'kernel.js')).href)
  const t = kernelForMode('full', 'en', { tone: 'gentle' })
  assert.ok(t.includes('Sophon'), 'en 应含 Sophon')
  assert.ok(/^The heart of it/m.test(t), '应含结束语')
})

test('host hook：kernelOn 开启时注入内核 system prompt 分段', async () => {
  // mock：settings 返回 kernelOn=true；systemPrompt.section 捕获注入文本
  let capturedText = null
  let sectionName = null
  const mockSettings = {
    register() {
      const state = { kernelOn: true, kernelMode: 'balanced', kernelLang: 'zh', kernelTone: 'gentle', kernelSelf: '洒家', kernelMaster: '老板', kernelOverride: '' }
      return { get: () => ({ ...state }), watch: () => () => {} }
    },
  }
  const mockSys = {
    section(o) { capturedText = o.text; sectionName = o.name; return { dispose() {} } },
  }
  const ctx = {
    tools: { register: () => ({ dispose() {} }) },
    systemPrompt: mockSys,
    get: (k) => ({ settings: mockSettings, webServer: { register: () => ({ dispose() {} }) }, llm: {}, subagents: undefined }[k]),
    config: {},
    effect: (fn) => { const r = fn(); if (typeof r === 'function') r(); },
  }
  const mod = await import(pathToFileURL(join(root, 'lib', 'index.js')).href)
  mod.apply(ctx)
  assert.ok(capturedText, '应捕获内核注入文本')
  assert.equal(sectionName, 'agents-pixe:kernel', '分段 name 应为 agents-pixe:kernel')
  assert.ok(capturedText.includes('洒家') && capturedText.includes('老板'), '应注入替换后的人设')
})
