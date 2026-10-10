#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const required = [
  'tests/runtime_qa',
  'tests/conformance',
  'tests/basin_exit',
  'tests/forensics',
  'tests/replay/inputs',
  'tests/replay/expected_zsf',
  'tests/golden'
];

let failures = [];
for (const dir of required) {
  if (!fs.existsSync(path.join(root, dir))) failures.push(`Missing directory: ${dir}`);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(d => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : [p];
  });
}

const jsonFiles = walk(path.join(root, 'tests')).filter(f => f.endsWith('.json'));
for (const file of jsonFiles) {
  try { JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { failures.push(`Invalid JSON ${path.relative(root,file)}: ${e.message}`); }
}

for (const file of walk(path.join(root, 'tests/conformance')).filter(f=>f.endsWith('.json'))) {
  const x = JSON.parse(fs.readFileSync(file,'utf8'));
  if (!x.id) failures.push(`${file}: missing id`);
  if (!x.transcript) failures.push(`${file}: missing transcript`);
  if (!x.expected) failures.push(`${file}: missing expected block`);
}

if (failures.length) {
  console.error('Conformance structure validation failed:');
  failures.forEach(f => console.error(' - ' + f));
  process.exit(1);
}
console.log(`Conformance structure validation passed. JSON files: ${jsonFiles.length}`);
