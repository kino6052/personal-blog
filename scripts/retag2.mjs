// Second tag clean-up (after scripts/retag.mjs). Rewrites ONLY the `tags:` line of src/content/*.md.
//
//   node scripts/retag2.mjs           dry run: prints the changes, the tree and the checks
//   node scripts/retag2.mjs --write   also rewrites the files
//
// 1. The "only thing constant is change" series (the posts that carry both
//    Philosophy / Change and Life / Misc) keeps Philosophy / Change and loses
//    Life / Misc.
// 2. Every sub-tag (Top / Sub) that is on exactly ONE post is folded into its
//    parent: that post keeps the parent (Top) instead. Counted from the data
//    after step 1; sub-tags with two or more posts stay.
// A post never gets a duplicate tag and never loses its top-level tag
// (except Life for the series in step 1, where it keeps Philosophy).
// Running it again changes nothing.

import fs from 'fs';
import path from 'path';

const KEEP = ['all', 'draft'];
const TOPS = ['all', 'draft', 'Code', 'Philosophy', 'Language', 'Learning and mind', 'Science and money', 'Life'];
const SERIES_HAS = 'Philosophy/Change';
const SERIES_DROP = 'Life/Misc';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dir = path.join(root, 'src', 'content');
const write = process.argv.includes('--write');

const norm = (t) => t.split('/').map((s) => s.trim()).join('/');
const top = (t) => t.split('/')[0];
const count = (plan, key) => {
  const m = new Map();
  for (const p of plan) for (const t of new Set(p[key])) m.set(t, (m.get(t) || 0) + 1);
  return m;
};

const plan = [];
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md')).sort()) {
  const text = fs.readFileSync(path.join(dir, f), 'utf8');
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const m = fm && fm[1].match(/^tags:([^\r\n]*)/m);
  if (!m) { console.log('NO tags line:', f); continue; }
  const start = text.indexOf(m[0], fm.index);
  const oldTags = m[1].split(';').map((t) => t.trim()).filter(Boolean).map(norm);
  plan.push({ file: f, text, start, len: m[0].length, oldTags, tags: oldTags.slice() });
}

// ---- step 1: the series leaves Life / Misc ----
const series = plan.filter((p) => p.tags.includes(SERIES_HAS) && p.tags.includes(SERIES_DROP));
for (const p of series) p.tags = p.tags.filter((t) => t !== SERIES_DROP);
console.log(`step 1: ${series.length} post(s) with ${SERIES_HAS} lose ${SERIES_DROP}:`);
for (const p of series) console.log('   ' + p.file);

// ---- step 2: fold single-post sub-tags into their parent ----
const afterStep1 = new Map();
for (const p of plan) for (const t of new Set(p.tags)) afterStep1.set(t, (afterStep1.get(t) || 0) + 1);
const single = [...afterStep1].filter(([t, n]) => t.includes('/') && n === 1).map(([t]) => t).sort();
console.log(`\nstep 2: ${single.length} sub-tag(s) on exactly one post, folded into the parent:`);
for (const p of plan) {
  const out = [];
  for (const t of p.tags) {
    const r = single.includes(t) ? top(t) : t;
    if (!out.includes(r)) out.push(r);
  }
  for (const t of p.tags) if (single.includes(t)) console.log(`   ${t}  ->  ${top(t)}   (${p.file})`);
  p.tags = out;
}

// ---- tables ----
const before = count(plan, 'oldTags');
const after = count(plan, 'tags');
const roll = new Map();
for (const p of plan) for (const t of new Set(p.tags.map(top))) roll.set(t, (roll.get(t) || 0) + 1);
console.log('\n== AFTER: tree (posts per tag; a top level also shows the posts that have it or anything under it) ==');
for (const t of TOPS) {
  const subs = [...after].filter(([k]) => k.startsWith(t + '/')).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'en'));
  console.log(`${String(roll.get(t) || 0).padStart(4)}  ${t}` + (after.has(t) && subs.length ? `   (${after.get(t)} only on the top level)` : ''));
  for (const [k, n] of subs) console.log(`${String(n).padStart(8)}  ${k.slice(t.length + 1)}`);
}

// ---- checks ----
let bad = 0;
const fail = (msg) => { bad++; console.log('CHECK FAILED:', msg); };
for (const p of plan) {
  const seriesPost = series.includes(p);
  const hadReal = p.oldTags.some((t) => !KEEP.includes(t));
  if (hadReal && !p.tags.some((t) => !KEEP.includes(t))) fail('lost all real tags: ' + p.file);
  for (const k of KEEP) if (p.oldTags.includes(k) !== p.tags.includes(k)) fail(k + ' changed: ' + p.file);
  if (new Set(p.tags).size !== p.tags.length) fail('duplicate tag: ' + p.file);
  const topsBefore = new Set(p.oldTags.map(top));
  const topsAfter = new Set(p.tags.map(top));
  for (const t of topsBefore) {
    if (topsAfter.has(t)) continue;
    if (seriesPost && t === top(SERIES_DROP)) continue; // the series leaves Life, keeps Philosophy
    fail(`top level ${t} lost: ${p.file}`);
  }
  for (const t of topsAfter) if (!topsBefore.has(t)) fail(`top level ${t} gained: ${p.file}`);
  for (const t of p.tags) {
    if (t.split('/').length > 2) fail('3 deep: ' + t + ' in ' + p.file);
    if (!TOPS.includes(top(t))) fail('unknown top level: ' + t + ' in ' + p.file);
  }
}
for (const [t, n] of after) if (t.includes('/') && n === 1) fail('sub-tag with a single post left: ' + t);
const tops = new Set([...after.keys()].map(top));
if ([...tops].sort().join('|') !== [...TOPS].sort().join('|')) fail('top levels are ' + [...tops].join(', '));
console.log(`\nposts: ${plan.length}, distinct tags ${before.size} -> ${after.size}, top levels ${tops.size}`);
console.log(bad ? bad + ' check(s) failed' : 'all checks passed');
if (bad) process.exit(1);

if (write) {
  let changed = 0;
  for (const p of plan) {
    const line = 'tags: ' + p.tags.map((t) => t.split('/').join(' / ')).join('; ') + ';';
    const newText = p.text.slice(0, p.start) + line + p.text.slice(p.start + p.len);
    if (newText !== p.text) { fs.writeFileSync(path.join(dir, p.file), newText); changed++; }
  }
  console.log('wrote ' + changed + ' file(s)');
} else {
  console.log('(dry run, pass --write to rewrite the files)');
}
