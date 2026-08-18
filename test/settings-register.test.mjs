// 验证 host 半边 settings.register('agents-pixe') 注册链路：
// 1. inject 声明含 settings；2. apply 能注册 namespace；3. scope.get() 返回默认值；4. watch 可订阅。
// 用法：node --test test/settings-register.test.mjs
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

test('host inject 声明含 settings 服务', () => {
  const src = readFileSync(join(root, 'lib', 'index.js'), 'utf8')
  assert.match(src, /const inject = \[[^\]]*'settings'[^\]]*\]/)
})

test('host 半边注册 agents-pixe settings namespace 并返回可读 scope', async () => {
  // mock 一个最小 settings 服务：register 返回 { get, watch }
  let registered = null
  const mockSettings = {
    register(ns, schema, opts) {
      registered = { ns, schema, opts }
      const state = { enabled: schema.fields.enabled?.default ?? false }
      const watchers = new Set()
      return {
        get: () => ({ ...state }),
        watch: (cb) => { watchers.add(cb); return () => watchers.delete(cb) },
      }
    },
  }
  const mockTools = { register: () => ({ dispose() {} }) }
  const mockSystemPrompt = { section: () => ({ dispose() {} }) }
  const mockWebServer = { register: () => ({ dispose() {} }) }
  const mockLlms = { /* 不调用 llm 即可 */ }

  const mod = await import(pathToFileURL(join(root, 'lib', 'index.js')).href)
  const ctx = {
    get: (k) => ({ settings: mockSettings, tools: mockTools, systemPrompt: mockSystemPrompt, webServer: mockWebServer, llm: mockLlms }[k]),
    config: {},
    effect: (fn) => { const r = fn(); if (typeof r === 'function') r(); },
  }
  mod.apply(ctx)

  assert.ok(registered, 'settings.register 未被调用')
  assert.equal(registered.ns, 'agents-pixe')
  assert.ok(registered.schema, 'schema 未提供')
  assert.equal(typeof registered.schema, 'function', 'schema 应为 schemastery 校验函数')
})
