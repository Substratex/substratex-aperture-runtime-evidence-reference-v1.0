const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'tests', 'calibration');
const supported = new Set(['system','user','assistant','engineer','manager','pm','observer','tool','admin']);
let errors = [];

function walk(dir){
  for(const f of fs.readdirSync(dir)){
    const p = path.join(dir,f);
    const st = fs.statSync(p);
    if(st.isDirectory()) walk(p);
    else if(f.endsWith('.json') && !f.endsWith('.expected.json')) validateJson(p);
    else if(f.endsWith('.txt')) validateTranscript(p);
  }
}

function validateJson(file){
  try{
    const j = JSON.parse(fs.readFileSync(file,'utf8'));
    if(j.schema_version !== 'canonical-transcript/1.2') errors.push(`${file}: missing canonical-transcript/1.2`);
    if(!Array.isArray(j.turns) || j.turns.length < 2) errors.push(`${file}: turns[] missing or too short`);
    for(const [i,t] of (j.turns||[]).entries()){
      if(!supported.has(t.role)) errors.push(`${file}: unsupported role at turn ${i+1}: ${t.role}`);
      if(!t.content || typeof t.content !== 'string') errors.push(`${file}: missing content at turn ${i+1}`);
    }
  }catch(e){ errors.push(`${file}: invalid JSON: ${e.message}`); }
}

function validateTranscript(file){
  const txt = fs.readFileSync(file,'utf8');
  const roleLines = txt.split(/\r?\n/).filter(l=>/^\s*(System|User|Assistant|Engineer|Manager|PM|Observer|Tool|Admin)\s*:/i.test(l));
  if(roleLines.length < 2) errors.push(`${file}: insufficient supported role labels`);
}

walk(root);
if(errors.length){
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Calibration fixtures are ingestible.');
