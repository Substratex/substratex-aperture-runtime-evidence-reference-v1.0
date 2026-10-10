# Calibration Fixture Suite — v6.3

This package adds `/tests/calibration/` fixtures for the Telemetry Adapter v6.3 runtime evidence stack.

Calibration fixtures are not the same as conformance fixtures.

Conformance fixtures verify that canonical semantics remain deterministic and structurally stable.

Calibration fixtures test whether the runtime interpretation layer can distinguish semantically different behavioral patterns that may look structurally similar in output-only telemetry.

## Why this suite exists

The v6.3 telemetry engine surfaced an important ambiguity:

- productive repetition can indicate stable convergence,
- degenerative repetition can indicate loop/collapse behavior.

The calibration suite exists to pressure-test that distinction without altering canonical evidence envelopes, replay guarantees, Basin Exit semantics, or ESL/ZSF structure.

## Categories

| Category | Purpose |
|---|---|
| `stable_repetition` | Healthy repeated checkpoint confirmations |
| `fixed_point_completion` | Productive convergence into stable final state |
| `orchestration` | Multi-agent operational status repetition |
| `recursive_planning` | Bounded recursive refinement with progress |
| `degenerative_loops` | Pathological retry storms and non-progress loops |

## Fixture formats

Each category includes:

- `transcripts/*.txt` — directly pasteable into Transcript mode
- `canonical_json/*.json` — directly ingestible in Canonical JSON mode
- `expected/*.expected.json` — expected semantic behavior and calibration intent

## Important

These fixtures are calibration targets, not strict golden artifacts.

They are designed to reveal where the telemetry engine may require interpretation calibration while preserving deterministic replay and canonical evidence semantics.
