// dsh-ui-agents-pixe 发布前冒烟测试：包结构 / 客户端 id / 自挂载声明 / 运行时数据齐全。
// 用法（插件目录内）：node --test test/
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))

test('包名与目录一致', () => {
  assert.equal(pkg.name, 'dsh-ui-agents-pixe')
})

test('客户端 bundle 的 id 与包名一致', () => {
  const client = readFileSync(join(root, 'lib', 'client.js'), 'utf8')
  assert.match(client, new RegExp('id: "' + pkg.name + '"'))
  assert.ok(client.includes('exports.apply = apply'))
})

test('自挂载声明齐全（dsh.bundle.patch + 插件行）', () => {
  assert.equal(pkg.dsh?.bundle?.patch, './cordis.patch.yml')
  assert.equal(pkg.dsh?.client?.platform, 'web')
  const patch = readFileSync(join(root, 'cordis.patch.yml'), 'utf8')
  assert.ok(patch.includes("name: '" + pkg.name + "'"))
  assert.ok(patch.includes('id: ui-agents-pixe'))
})

test('发布 files 覆盖运行时全部依赖', () => {
  for (const f of ['lib/index.js', 'lib/client.js', 'lib/roles-full.json', 'cordis.patch.yml', 'README.md']) {
    assert.ok(pkg.files.includes(f), 'files 缺少 ' + f)
    assert.ok(existsSync(join(root, f)), f + ' 文件缺失')
  }
})

test('roles-full.json 是合法 JSON 且含 en/zh 全量角色', () => {
  const data = JSON.parse(readFileSync(join(root, 'lib', 'roles-full.json'), 'utf8'))
  assert.ok(data.en && data.zh, '缺 en/zh 角色表')
  const en = Object.keys(data.en).length
  const zh = Object.keys(data.zh).length
  assert.ok(en >= 200 && zh >= 200, '角色数不足：en=' + en + ' zh=' + zh)
})

test('node 半边导入不依赖构建产物之外的缺失文件', () => {
  const index = readFileSync(join(root, 'lib', 'index.js'), 'utf8')
  // roles-full.json 由运行时 readFileSync 读取（随包分发）；无其他本地文件引用
  assert.ok(index.includes('roles-full.json'))
})
