// 把 prelude + roles.json + main 拼成可发布的 lib/client.js（无需构建工具）。
// 用法：node plugins/dsh-ui-agents-pixe/scripts/build-client.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ZH, EN, TONE_LINE } from '../lib/kernel.js'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

const prelude = readFileSync(join(root, 'src', 'client.prelude.js'), 'utf8')
const roles = readFileSync(join(root, 'lib', 'roles.json'), 'utf8')
const main = readFileSync(join(root, 'src', 'client.main.js'), 'utf8')
const kernelData = 'var KERNEL_DATA = ' + JSON.stringify({ ZH, EN, TONE_LINE }) + ';'

const tail = `
    exports.apply = apply;
    return module.exports;
  }
});
`

const bundle = prelude + '\n' + roles + ';\n' + kernelData + '\n' + main + '\n' + tail
mkdirSync(join(root, 'lib'), { recursive: true })
writeFileSync(join(root, 'lib', 'client.js'), bundle)
console.log(`built lib/client.js (${(bundle.length / 1024).toFixed(1)} KB)`)
