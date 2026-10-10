# Frozen Reference Fixture Notes

The complete `test-suite/` directory is preserved byte-for-byte from the supplied historical repository.

## Why it is frozen

The fixtures are provenance-bearing reference material. Some labels, regime names, paths, package metadata, and validation assumptions predate the current Longitudinal Computational Dynamics® / Evidence-Governed Computation™ hierarchy.

Rewriting those files simply to modernize terminology would destroy their value as a historical baseline.

## Legacy validator path mismatch

The historical file:

`test-suite/conformance-suite/validate-conformance-structure.js`

expects a former internal directory layout using `tests/...` paths. The supplied archive stores those same reference fixture families directly under `conformance-suite/` (`runtime_qa/`, `conformance/`, `basin_exit/`, `forensics/`, `replay/`, `golden/`).

The validator is intentionally **not modified** in this refresh.

Use the current repository-level verification commands instead:

```bash
npm run verify:reference
npm run verify:fixtures
```

`verify:reference` proves the frozen suite still matches the published SHA-256 manifest. `verify:fixtures` performs non-mutating structural/JSON checks against the preserved layout.

Passing these checks does not establish current scientific validity or official SubstrateX certification.
