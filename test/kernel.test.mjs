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

test('内核数据源导出可用（host/client 同源）', async () => {
  const mod = await import(pathToFileURL(join(root, 'lib', 'kernel.js')).href)
  assert.ok(mod.ZH && mod.ZH.balanced && mod.ZH.full, '应导出 ZH 三档')
  assert.ok(mod.EN && mod.EN.balanced, '应导出 EN')
  assert.ok(mod.TONE_LINE && mod.TONE_LINE.zh, '应导出 TONE_LINE')
  // 文本同源：client 的 KERNEL_DATA 来自 build-client 注入 lib/kernel.js 的数据
  const client = readFileSync(join(root, 'lib', 'client.js'), 'utf8')
  assert.ok(client.includes('var KERNEL_DATA'), 'client bundle 应注入 KERNEL_DATA')
  assert.ok(client.includes(mod.ZH.balanced.slice(0, 20)), 'client 内核文本应与 kernel.js 同源')
})

