// 给 lib/roles.json 里每个角色追加固定中文名 cname（读现有 roles.json，不依赖上游源，安全）。
// 用法：node plugins/dsh-ui-agents-pixe/scripts/add-names.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cnameOf } from './names.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const p = join(here, '..', 'lib', 'roles.json')

const data = JSON.parse(readFileSync(p, 'utf8'))
let n = 0
for (const lang of ['en', 'zh']) {
  for (const r of (data[lang]?.roles || [])) {
    r.cname = cnameOf(r.id, r.div)
    n++
  }
}
writeFileSync(p, JSON.stringify(data))
console.log(`added cname to ${n} role records → ${p}`)
