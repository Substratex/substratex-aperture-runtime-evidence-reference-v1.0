# Aperture Architecture

## Governing direction

Aperture is a Runtime Evidence Observatory. Its architecture is organized around a simple constraint: **evidence is computed first; presentation adapts second**.

## Primary flow

```text
ACQUIRE
  Blackbox | Evidence Chamber | Validation Lab
        |
        v
Source Qualification
        |
        v
Versioned Adapter + Role/Event/Source-Span Mapping
        |
        v
Canonical Runtime
        |
        v
STRUCTURE / RECONSTRUCT
Runtime Event Ledger + Canonical Runtime Spine + Playback Frames
        |
        v
Current Evidence Run (CER)
        |
        +--> Behavioral Telemetry
        +--> Temporal / Marker Authority
        +--> Shared Stability Substrate
        +--> Worldline Reconstruction
        |
        v
MEASURE / QUALIFY
Bounded Instrument Projections
        |
        v
Runtime Evidence Authority
        |
        v
Runtime Evidence Passport + Evidence Seal
        |
        +--> INVESTIGATE / ASSESS
        +--> PRESERVE / HAND OFF
        +--> Evidence Artifact / Evidence Commons
```

## Identity model

Aperture keeps multiple identities distinct:

- **Source identity** — supplied record before canonical transformation.
- **Canonical identity** — normalized runtime under declared adapter/canonicalization version.
- **Run identity** — evidence computation formed from canonical input + governing configuration/method versions.
- **Record identity** — issued Runtime Evidence Record / Passport-bound evidence identity.
- **Artifact identity** — exported or preserved machine-readable evidence object.

Presentation changes do not change canonical identity. Evidence-bearing source, adapter, role/event mapping, or canonicalization changes must produce distinguishable identity.

## Current Evidence Run

The CER is the central evidence authority object for the active run. Public architecture expects it to bind or reference:

- runtime event ledger,
- canonical runtime spine,
- runtime playback frames,
- metrics and detectors,
- temporal markers,
- instrument models/contracts,
- human-readable evidence layer,
- recorder state,
- export/preservation structures,
- evidence record/passport identity,
- metric legitimacy / authority metadata,
- evidence-authority conformance,
- final evidence bundle state.

## Worldline

The Worldline is the representation through which **Longitudinal Computational Behavior** becomes observable as a trajectory. It is formed from source-bound runtime evidence and can show stable motion, weakening, candidate boundary formation, confirmed Basin Exit, observable failure, and recovery where supported.

The Worldline is not itself a claim of hidden internal state.

## Instrument architecture

`InstrumentModel = f(CER, Metrics, Markers, Spine, ScienceRegistry, Contract)`

Each instrument is a read-only, claim-bounded projection. Instruments share evidence identity but remain distinguishable by contract and permitted finding class.

## Non-Mutation Law

No instrument, operational lens, or presentation surface may:

- create the governing evidence run,
- rewrite canonical history,
- fabricate source spans,
- silently move markers,
- promote candidate states to confirmed states,
- create `tf`,
- compute formal `Δt` without required anchors,
- or alter Passport/export authority.

## Acquisition

The Acquire section contains three operator pathways:

- **Blackbox** — direct deterministic reconstruction from supported logs/transcripts.
- **Evidence Chamber** — advanced source qualification and canonicalization posture.
- **Validation Lab** — registered operational and validation fixtures using the same evidence pipeline.

## Operating bands

The public reference implementation uses declared operating bands rather than silently truncating evidence:

- **Interactive:** 0–250 turns — full reconstruction, telemetry, hydrated Worldline, instruments, replay, export where supported.
- **Extended:** 251–1,000 turns — full evidence computation with sampled/progressive visualization and chunked export.
- **Archive:** 1,001–2,500 turns — batch-oriented reconstruction, summary-first rendering, progressive replay, evidence-first export.

These bands describe implementation posture, not universal scientific limits.
