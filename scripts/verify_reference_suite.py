#!/usr/bin/env python3
from pathlib import Path
import hashlib, sys

root = Path(__file__).resolve().parents[1]
manifest = root / "REFERENCE_TEST_SUITE_SHA256.txt"
errors = []
for line in manifest.read_text(encoding="utf-8").splitlines():
    if not line.strip():
        continue
    expected, rel = line.split("  ", 1)
    path = root / rel
    if not path.is_file():
        errors.append(f"missing: {rel}")
        continue
    actual = hashlib.sha256(path.read_bytes()).hexdigest()
    if actual != expected:
        errors.append(f"changed: {rel}\n  expected {expected}\n  actual   {actual}")
if errors:
    print("Frozen reference suite verification FAILED")
    print("\n".join(errors))
    sys.exit(1)
print("Frozen reference suite verification passed.")
