// 校验 client.main.js 里 PRESETS 的角色 key 是否都在 zh 角色库中存在。
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const src = readFileSync(join(root, 'src', 'client.main.js'), 'utf8')
const m = /var PRESETS = \[([\s\S]*?)\n\];/.exec(src)
if (!m) { console.error('未找到 PRESETS 块'); process.exit(1) }
const zhKeys = new Set(Object.keys(JSON.parse(readFileSync(join(root, 'lib', 'roles-full.json'), 'utf8')).zh))
const re = /roles: \[([^\]]*)\]/g
let mm, all = [], bad = []
while ((mm = re.exec(m[1]))) {
  for (const k of mm[1].split(',')) {
    const key = k.trim().replace(/['"]/g, '')
    if (!key) continue
    all.push(key)
    if (!zhKeys.has(key)) bad.push(key)
  }
}
console.log('PRESETS 角色引用总数:', all.length, '｜ 唯一:', new Set(all).size, '｜ 非法:', bad.length)
if (bad.length) console.log('非法 key:', [...new Set(bad)])
process.exit(bad.length ? 1 : 0)
