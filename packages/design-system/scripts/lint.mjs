import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
const roots=['src','examples']; const files=[];
async function walk(p){for(const e of await readdir(p,{withFileTypes:true})){const f=join(p,e.name);if(e.isDirectory())await walk(f);else if(/\.(ts|tsx)$/.test(e.name))files.push(f)}}
for(const r of roots)await walk(r);
const errors=[];
for(const f of files){const s=await readFile(f,'utf8');if(/:\s*any\b|<any>|as\s+any\b/.test(s))errors.push(`${f}: explicit any is forbidden`);if(f!=='src/tokens/colors.ts'&&/#[0-9A-Fa-f]{6}\b/.test(s))errors.push(`${f}: hardcoded hex color outside token file`);if(/1C\s*=\s*\d/.test(s))errors.push(`${f}: fixed Credit/KRW exchange language forbidden`);if(/Hybrid/.test(s))errors.push(`${f}: consumer Hybrid language forbidden`);}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`lint PASS (${files.length} TypeScript files checked)`);
