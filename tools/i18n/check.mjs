// Checks translation files against en.json: same keys, every {placeholder} kept, nothing left empty.
// usage: node tools/i18n/check.mjs [file ...]    (default: every *.json here except en.json)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIR = path.dirname(fileURLToPath(import.meta.url));
const read = f => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
const en = read("en.json");
const holes = s => [...String(s).matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort().join(",");

function compare(ref, tr, at, errs) {
  for (const k of Object.keys(ref)) {
    const where = at ? `${at}.${k}` : k;
    if (!(k in tr)) { errs.push(`missing ${where}`); continue; }
    if (ref[k] && typeof ref[k] === "object") { compare(ref[k], tr[k] || {}, where, errs); continue; }
    if (typeof tr[k] !== "string" || !tr[k].trim()) { errs.push(`empty ${where}`); continue; }
    if (ref[k] !== null && holes(ref[k]) !== holes(tr[k])) errs.push(`placeholders differ in ${where}: {${holes(ref[k])}} vs {${holes(tr[k])}}`);
  }
  for (const k of Object.keys(tr)) if (!(k in ref)) errs.push(`extra ${at ? `${at}.` : ""}${k}`);
}

const files = process.argv.slice(2).length ? process.argv.slice(2).map(f => path.basename(f))
  : fs.readdirSync(DIR).filter(f => f.endsWith(".json") && f !== "en.json");
let bad = 0;
for (const f of files) {
  const errs = [];
  try { compare(en, read(f), "", errs); } catch (e) { errs.push(e.message); }
  console.log(errs.length ? `FAIL ${f}\n  ${errs.join("\n  ")}` : `ok   ${f}`);
  bad += errs.length > 0;
}
process.exit(bad ? 1 : 0);
