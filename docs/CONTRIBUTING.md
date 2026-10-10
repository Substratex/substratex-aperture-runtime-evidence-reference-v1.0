# Contributing

This repository is a public reference package. Contributions should preserve evidence discipline before feature velocity.

## Preserve

- deterministic behavior where a deterministic contract is declared,
- source/canonical/run/record/artifact identity separation,
- candidate versus confirmed marker semantics,
- missingness and absence states,
- instrument non-mutation,
- claim-boundary continuity,
- provenance and version distinction,
- frozen reference fixtures.

## Do not modify the frozen test suite

The entire `test-suite/` is preserved as historical reference material. Proposed current-architecture tests should be added in a new versioned location rather than rewriting the frozen cases.

## Good contribution areas

- documentation clarity,
- accessibility,
- schema tooling,
- validators,
- evidence artifact inspection,
- compatibility tooling,
- additional non-commercial example adapters that preserve provenance,
- independent replication notes.

## Semantic changes

Changes to evidence identity, marker semantics, lead-time rules, claim status, missingness, Passport semantics, instrument contracts, or conformance behavior require an explicit version change and migration note.
