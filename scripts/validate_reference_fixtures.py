#!/usr/bin/env python3
from pathlib import Path
import json, sys
root = Path(__file__).resolve().parents[1] / 'test-suite'
errors=[]
required=[
 root/'conformance-suite'/'runtime_qa',
 root/'conformance-suite'/'conformance',
 root/'conformance-suite'/'basin_exit',
 root/'conformance-suite'/'forensics',
 root/'conformance-suite'/'replay'/'inputs',
 root/'conformance-suite'/'replay'/'expected_zsf',
 root/'conformance-suite'/'golden',
 root/'calibration-suite'/'tests'/'calibration'
]
for p in required:
    if not p.is_dir(): errors.append(f'missing directory: {p.relative_to(root)}')
json_count=0
for p in root.rglob('*.json'):
    json_count += 1
    try:
        json.loads(p.read_text(encoding='utf-8'))
    except Exception as e:
        errors.append(f'invalid JSON: {p.relative_to(root)}: {e}')
# Basic historical conformance fixture shape where applicable.
for p in (root/'conformance-suite'/'conformance').glob('*.json'):
    try: obj=json.loads(p.read_text(encoding='utf-8'))
    except Exception: continue
    for key in ('id','transcript','expected'):
        if key not in obj: errors.append(f'{p.relative_to(root)} missing {key}')
if errors:
    print('Reference fixture structural validation FAILED')
    for e in errors: print(' -', e)
    sys.exit(1)
print(f'Reference fixture structural validation passed. JSON files: {json_count}')
