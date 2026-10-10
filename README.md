# SubstrateX Aperture™ — Runtime Evidence Reference Architecture

**Instrumenting Intelligence in Motion™ — From Outputs to Dynamics**

**SubstrateX® builds Runtime Evidence Infrastructure.** Its flagship system, **SubstrateX Aperture™**, is a Runtime Evidence Observatory for reconstructing, measuring, investigating, governing, and preserving observable long-horizon computational behavior.

This repository publishes the **public reference architecture, schemas, provenance, conformance posture, validation fixtures, and compatibility artifacts** associated with Aperture. It supersedes the repository's earlier Telemetry Adapter / Recursive Science positioning.

> **Core principle:** The output is the last frame. The trajectory is the story. The evidence is the record.

## Scientific and architectural hierarchy

| Layer | Canonical term | Role |
| --- | --- | --- |
| Governing proposition | **Intelligence in Motion™** | Intelligence considered through observable development across runtime. |
| Scientific framework | **Longitudinal Computational Dynamics® (LCD)** | Studies extended computational behavior as a temporal/dynamical object. |
| Empirical object | **Longitudinal Computational Behavior** | Observable development of computational activity across ordered runtime. |
| Architectural discipline | **Evidence-Governed Computation™ (EGC)** | Governs what claims may be made from identified evidence under declared methods and boundaries. |
| Infrastructure category | **Runtime Evidence Infrastructure** | Architecture for reconstruction, telemetry, evidence authority, investigation, export, and preservation. |
| Reference system | **SubstrateX Aperture™** | Runtime Evidence Observatory and principal reference implementation. |
| Evidentiary output | **Runtime Evidence** | Source-bound, method-bound, inspectable computational evidence. |
| Preservation initiative | **Evidence Commons™** | Portable preservation and independent scrutiny of Runtime Evidence artifacts. |

## What Aperture does

Aperture begins with an observable operational record: transcripts, agent/tool traces, CI/CD records, SIEM/security records, workflow histories, incident timelines, monitoring exports, or other supported source families.

Its controlled evidence path is:

```text
Observable Source
  -> Source Qualification
  -> Versioned Adapter
  -> Role/Event/Source-Span Mapping
  -> Canonical Runtime
  -> Runtime Reconstruction
  -> Current Evidence Run (CER)
  -> Behavioral Telemetry + Governed Markers
  -> Bounded Instrument Findings
  -> Runtime Evidence Authority
  -> Runtime Evidence Passport
  -> Guided Investigation / Export / Evidence Commons
```

The **Worldline** is Aperture's representation of the empirical object under study: Longitudinal Computational Behavior unfolding through runtime. It is reconstructed from the same source-bound runtime evidence used by downstream instrumentation; it is not an independent illustration layered over a transcript.

## Acquire: three operator paths

Aperture's **Acquire** layer contains three distinct intake environments:

- **Blackbox** — direct operator path for loading or pasting role-aware logs and transcripts and initiating deterministic reconstruction.
- **Evidence Chamber** — advanced intake for source routing, source preview, qualification, canonicalization posture, evidence coverage, diagnostics, optional traces/context, and controlled handoff.
- **Validation Lab** — registered real-world operational and validation cases used to exercise the same evidence pipeline under known positive, negative, missingness, and boundary conditions.

Source qualification and evidence computation remain separate. A Runtime Evidence Passport is not issued at upload time. Passport issuance occurs only after downstream evidence formation and Runtime Evidence Authority conformance checks succeed.

## Current Evidence Run

The **Current Evidence Run (CER)** is the governing evidence identity for a computed run. It binds the canonical runtime to the structures required for replay, telemetry, markers, instrument projections, human-readable evidence, authority conformance, export, and preservation.

Aperture follows a non-mutation rule: instruments may consume the CER and shared read-only context, but may not create or rewrite canonical evidence, silently move authoritative markers, invent failure, promote candidates to confirmed states, or exceed the run's claim boundary.

## Instrumentation stack

Aperture projects multiple bounded scientific views over one evidence identity:

- **∿ Seismo** — Worldline formation, disturbance, regimes, boundaries, failure, recovery.
- **τ Chronos** — temporal organization, persistence, recurrence, symbolic time, compression, shear, sequencing.
- **Δ Drift** — displacement, curvature, directional change, recurrence relative to declared anchors.
- **Ξ Pressure** — runtime pressure proxies, boundary load, correction/tool interaction pressure.
- **⇄ Bridge** — role/tool coordination, handoffs, authority alignment, interaction continuity.
- **⟳ Noesis** — observable recurrence, re-entry, qualified coherence/continuity patterns.
- **Ω Scope** — evidence coverage, topology, and evidentiary scope.
- **Ψ Dynamics** — multivariate runtime dynamics.
- **Φ Interferometer** — alignment, divergence, and interference among registered evidence streams.

**One Runtime. One Evidence Identity. Multiple Bounded Projections.**

## Temporal claim discipline

Aperture distinguishes:

- first weakening / awareness marker `t_aw`,
- candidate boundary `t_candidate`,
- confirmed Basin Exit `t*`,
- observable failure `tf`,
- recovery / re-entry where supported.

Formal lead time is defined only when both `t*` and `tf` are available and authoritative:

```text
Δt = tf - t*
```

If `tf` is not supplied, Aperture may report an **Open Watch / Post-Exit Watch** interval, but it does not manufacture formal lead time.

## Evidence governance

Aperture implements the governing EGC principle:

> **No claim should exceed the authority of its evidence.**

Evidence authority is not a truth oracle. The system preserves what source was supplied, what transformations were applied, what methods operated, what was observed or derived, what remains missing, and where resulting claims must stop.

## Relationship to SubstrateX EGC Web™

This repository and **SubstrateX EGC Web™** address different layers of the same evidence-governed direction. Aperture is the Runtime Evidence Observatory and reference system in which Runtime Evidence is formed, reconstructed, instrumented, investigated, and preserved. EGC Web is the reusable developer framework for binding application claims and interface projections to evidence authority.

Aperture demonstrates the architecture as an integrated system. EGC Web exposes the governing discipline as reusable development infrastructure.

## Repository scope

This public repository contains:

- architecture and implementation maps,
- public structural schemas,
- conformance and evidence-governance documentation,
- provenance and licensing material,
- legacy compatibility schema material,
- frozen reference test cases and calibration fixtures.

It **does not contain the full Aperture application source tree, production UI bundle, private calibration corpus, or proprietary instrument kernels**. The frozen reference test suite is preserved byte-for-byte from the supplied historical repository so earlier expected behavior remains auditable.

See [`REPOSITORY_SCOPE.md`](REPOSITORY_SCOPE.md) and [`REFERENCE_TEST_SUITE_SHA256.txt`](REFERENCE_TEST_SUITE_SHA256.txt).

## Reference tests

The `test-suite/` directory is a frozen historical reference package. Some fixture labels and expected envelopes predate the current LCD/EGC public hierarchy. They are retained unchanged to preserve reproducibility and provenance; current terminology and claim rules are defined by the root and `docs/` documentation.

## Privacy posture

Aperture's reference posture is browser-local computation where supported. Raw source material should not be uploaded to an external service merely for instrumentation. Deployment-specific network behavior must be evaluated separately.

## License

This repository is released for **non-commercial research, education, evaluation, interoperability, reproducibility, and intellectual exchange** under the terms in [`LICENSE.md`](LICENSE.md). Commercial implementation, hosted commercial services, resale, or commercial derivative infrastructure require separate written authorization.

**Copyright © 2024–2026 Arjay Asadi. All Rights Reserved.**
