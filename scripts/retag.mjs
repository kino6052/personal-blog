// One-off tag clean-up: rewrites ONLY the `tags:` line of src/content/*.md.
//
//   node scripts/retag.mjs           dry run: prints the before/after tables and the checks
//   node scripts/retag.mjs --write   also rewrites the files
//
// The old tags are matched case-sensitively. A tag that is not in MAP (and is
// not `all` / `draft` / already a new tag) is listed and NOTHING is written.
// Running it a second time is harmless: new tags map to themselves.

import fs from 'fs';
import path from 'path';

const KEEP = ['all', 'draft'];

const MAP = {
  // Code
  'code/architecture': ['Code/Architecture'],
  'technology/AI': ['Code/AI'],
  technology: ['Code'],
  engineering: ['Code'],
  code: ['Code'],
  'code/web': ['Code/Tools'],
  'code/git': ['Code/Tools'],
  'code/JIRA': ['Code/Tools'],
  'code/dependency': ['Code/Tools'],
  'code/scalability': ['Code/Tools'],
  'code/presentation': ['Code/Tools'],
  'code/stories': ['Code/Stories'],
  'code/creative': ['Code/Stories'],

  // Philosophy
  'code/metaphysics': ['Philosophy/Metaphysics'],
  'philosophy/metaphysics': ['Philosophy/Metaphysics'],
  philosophy: ['Philosophy'],
  'philosophy/reading list': ['Philosophy'],
  'philosophy/TRIZ': ['Philosophy'],
  'philosophy/change': ['Philosophy/Change'],
  'philosophy/the only thing constant is change': ['Philosophy/Change'],
  'philosophy/values': ['Philosophy/Values'],
  'philosophy/epistemology': ['Philosophy/Knowledge and logic'],
  'philosophy/ontology': ['Philosophy/Knowledge and logic'],
  'philosophy/phenomenology': ['Philosophy/Knowledge and logic'],
  'philosophy/logic': ['Philosophy/Knowledge and logic'],
  knowledge: ['Philosophy/Knowledge and logic'],
  wisdom: ['Philosophy/Knowledge and logic'],
  'philosophy/ethics': ['Philosophy/Ethics and freedom'],
  'philosophy/free will': ['Philosophy/Ethics and freedom'],
  'philosophy/freedom': ['Philosophy/Ethics and freedom'],
  'philosophy/western philosophy/George Berkeley': ['Philosophy/People'],
  'philosophy/western philosophy/Immanuel Kant': ['Philosophy/People'],

  // Language
  language: ['Language'],
  'language/chinese': ['Language/Chinese'],
  'language/chinese/简单话': ['Language/Chinese', 'Language/简单话'],
  'language/russian': ['Language/Russian'],
  'language/idiomatic expression': ['Language/English'],
  'language/listening comprehension': ['Language/English'],
  'language/part of speech/preposition': ['Language/English'],

  // Learning and mind
  learning: ['Learning and mind/Learning'],
  psychology: ['Learning and mind/Psychology'],
  productivity: ['Learning and mind/Productivity'],
  'time-management': ['Learning and mind/Time'],
  communication: ['Learning and mind/Communication'],
  'communication/feedback': ['Learning and mind/Communication'],
  writing: ['Learning and mind/Writing'],
  'misc/public speaking/toastmasters': ['Learning and mind/Public speaking'],

  // Science and money
  science: ['Science and money/Science'],
  'science/biology': ['Science and money/Science'],
  'science/medical science': ['Science and money/Science'],
  'mathematics/number theory': ['Science and money/Maths'],
  economics: ['Science and money/Economics'],
  'money/investment': ['Science and money/Investment'],
  sustainability: ['Science and money/Sustainability'],
  future: ['Science and money/Future'],

  // Life
  workout: ['Life/Workout'],
  'martial-arts': ['Life/Martial arts'],
  music: ['Life/Music'],
  'misc/games': ['Life/Games'],
  China: ['Life/China'],
  faith: ['Life/Faith'],
  misc: ['Life/Misc'],
};

const NEW_TOPS = ['all', 'draft', 'Code', 'Philosophy', 'Language', 'Learning and mind', 'Science and money', 'Life'];
const NEW_TAGS = new Set(Object.values(MAP).flat());

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dir = path.join(root, 'src', 'content');
const write = process.argv.includes('--write');

const norm = (t) => t.split('/').map((s) => s.trim()).join('/');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();

const before = new Map();
const after = new Map();
const unmapped = new Map(); // tag -> files
const plan = []; // { file, text, newText, oldTags, newTags }
const bump = (m, tags) => { for (const t of new Set(tags)) m.set(t, (m.get(t) || 0) + 1); };

for (const f of files) {
  const text = fs.readFileSync(path.join(dir, f), 'utf8');
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const m = fm && fm[1].match(/^tags:([^\r\n]*)/m);
  if (!m) { console.log('NO tags line:', f); continue; }
  const oldTags = m[1].split(';').map((t) => t.trim()).filter(Boolean).map(norm);
  const newTags = [];
  for (const t of oldTags) {
    let out;
    if (KEEP.includes(t)) out = [t];
    else if (Object.hasOwn(MAP, t)) out = MAP[t];
    else if (NEW_TAGS.has(t)) out = [t];
    else { (unmapped.get(t) || unmapped.set(t, []).get(t)).push(f); continue; }
    for (const o of out) if (!newTags.includes(o)) newTags.push(o);
  }
  bump(before, oldTags);
  bump(after, newTags);
  const line = 'tags: ' + newTags.map((t) => t.split('/').join(' / ')).join('; ') + ';';
  // replace only the tags line in the file, byte for byte elsewhere
  const start = text.indexOf(m[0], fm.index);
  const newText = text.slice(0, start) + line + text.slice(start + m[0].length);
  plan.push({ file: f, text, newText, oldTags, newTags });
}

const show = (title, map) => {
  console.log('\n== ' + title + ' (' + map.size + ' tags) ==');
  for (const [t, n] of [...map].sort((a, b) => a[0].localeCompare(b[0]))) console.log(String(n).padStart(4), ' ', t);
};
show('BEFORE: tag -> posts', before);
show('AFTER: tag -> posts', after);

// roll-up per top level (posts that carry any tag at or under it)
const roll = new Map();
for (const p of plan) bump(roll, p.newTags.map((t) => t.split('/')[0]));
console.log('\n== AFTER: top level -> posts that have it ==');
for (const [t, n] of [...roll].sort((a, b) => b[1] - a[1])) console.log(String(n).padStart(4), ' ', t);

if (unmapped.size) {
  console.log('\n!! OLD TAGS NOT IN THE MAPPING (nothing written):');
  for (const [t, fs_] of unmapped) console.log('   ' + JSON.stringify(t) + '  <-', fs_.join(', '));
  process.exit(2);
}

// ---- checks ----
let bad = 0;
const fail = (msg) => { bad++; console.log('CHECK FAILED:', msg); };
for (const p of plan) {
  const hadReal = p.oldTags.some((t) => !KEEP.includes(t));
  const hasReal = p.newTags.some((t) => !KEEP.includes(t));
  if (hadReal && !hasReal) fail('lost all real tags: ' + p.file);
  for (const k of KEEP) if (p.oldTags.includes(k) !== p.newTags.includes(k)) fail(k + ' changed: ' + p.file);
  for (const t of p.newTags) {
    if (t.split('/').length > 2) fail('3 deep: ' + t + ' in ' + p.file);
    if (!NEW_TOPS.includes(t.split('/')[0])) fail('unknown top level: ' + t + ' in ' + p.file);
  }
  if (new Set(p.newTags).size !== p.newTags.length) fail('duplicate tag in ' + p.file);
}
const tops = new Set([...after.keys()].map((t) => t.split('/')[0]));
if ([...tops].sort().join('|') !== [...NEW_TOPS].sort().join('|')) fail('top levels are ' + [...tops].join(', '));
console.log('\nposts: ' + plan.length +
  ', tags per post before ' + [...before.values()].reduce((a, b) => a + b, 0) +
  ' -> after ' + [...after.values()].reduce((a, b) => a + b, 0) +
  ', distinct tags ' + before.size + ' -> ' + after.size +
  ', top levels ' + new Set([...before.keys()].map((t) => t.split('/')[0])).size + ' -> ' + tops.size);
console.log(bad ? bad + ' check(s) failed' : 'all checks passed');
if (bad) process.exit(1);

if (write) {
  let changed = 0;
  for (const p of plan) if (p.newText !== p.text) { fs.writeFileSync(path.join(dir, p.file), p.newText); changed++; }
  console.log('wrote ' + changed + ' file(s)');
} else {
  console.log('(dry run, pass --write to rewrite the files)');
}
