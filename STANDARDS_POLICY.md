# SubstrateX Aperture™ Semantic Governance & Conformance Policy

**Version:** 1.0  
**Status:** Public reference policy  
**Stewardship:** Arjay Asadi / SubstrateX® Longitudinal Labs

## 1. Purpose

This document defines the semantic and conformance posture for public Aperture reference materials. The objective is to preserve comparability, deterministic reconstruction, evidence authority, claim boundaries, and historical provenance as the system evolves.

## 2. Governing hierarchy

1. **Scientific layer** — Intelligence in Motion™; Longitudinal Computational Dynamics®; Longitudinal Computational Behavior.
2. **Evidence architecture** — Canonical Runtime; Runtime Evidence; Current Evidence Run; missingness and authority semantics.
3. **Measurement architecture** — versioned telemetry, governed temporal markers, Shared Stability Substrate, instrument contracts.
4. **Evidence governance** — Evidence-Governed Computation™, Runtime Evidence Authority, Passport, claim boundaries, export authority.
5. **Presentation and investigation** — Worldline, Reconstruction, Guided Investigation, Operational World Mapping, Human Read.
6. **Preservation** — Evidence Artifact and Evidence Commons.

No lower layer may silently create authority for a higher layer.

## 3. Constitutional invariants

Publicly conformant implementations should preserve at least the following invariants:

- **Source addressability** — authoritative findings retain a path to identified source evidence where coordinates are available.
- **Identity separation** — source identity, canonical identity, run identity, record identity, and artifact identity remain distinguishable.
- **Authority non-creation** — presentation and instruments do not create evidence authority.
- **Method declaration** — evidence-bearing transformations identify their method/version.
- **Claim typing** — candidate, confirmed, unavailable, not supplied, not observed, proxy-only, and not computable states are not collapsed.
- **Missingness preservation** — zero/false is not treated as missing and missing evidence is not silently fabricated.
- **Projection non-amplification** — instrument or UI projections cannot make a stronger claim than the admitted evidence supports.
- **Cross-surface congruence** — surfaces may differ in representation but must not disagree on the same authoritative claim identity/status.
- **Non-mutation** — instruments and operational lenses consume evidence read-only and may not rewrite the canonical runtime or CER.
- **Version distinguishability** — material changes to adapters, canonicalization, methods, contracts, thresholds, or schemas require version distinction.
- **Challenge retention** — evidence basis and claim boundaries remain inspectable.
- **Preservation fidelity** — exported artifacts preserve the governing evidence state and limitations.

## 4. Temporal semantics

Canonical temporal markers remain distinct:

- `t_aw` — first weakening / awareness marker,
- `t_candidate` — candidate boundary,
- `t*` — confirmed Basin Exit / qualifying observable boundary crossing,
- `tf` — observable failure marker,
- recovery / re-entry markers where supported.

Formal lead time `Δt = tf - t*` exists only when both `t*` and `tf` are supported under the governing method. A retrospective precursor or candidate interval must not be represented as prospective lead time.

## 5. Instrument contract rule

Every instrument is a bounded projection over the shared evidence identity. An instrument contract must declare what the instrument may read, what it may derive/project, which methods/versions govern it, and where its claims must stop.

An instrument may not:

- create or replace the CER,
- mutate canonical frames or source spans,
- invent failure,
- promote a candidate to confirmed without the governing evidence,
- compute formal lead time without required anchors,
- alter Passport/export authority,
- infer inaccessible hidden state as evidence.

## 6. Operational World Mapping

Operational Worlds may change terminology, investigative guidance, validation cases, question framing, signal emphasis, and navigation. They may not change the underlying canonical runtime, telemetry, authoritative markers, instrument findings, evidence identity, evidence seal, or preservation authority.

## 7. Historical fixture policy

The `test-suite/` directory is frozen historical reference material. It predates portions of the current LCD/EGC hierarchy and may contain earlier terms, taxonomies, or serialization expectations. These fixtures remain unchanged for provenance and reproducibility.

A later implementation may distinguish:

- **historical-fixture conformance**, and
- **current-architecture conformance**.

Passing a historical fixture does not by itself certify current scientific validity or current Aperture conformance.

## 8. Conformance language

Independent implementations may accurately state that they implement or test against a declared public schema/fixture/version. They may not imply official SubstrateX certification or canonical equivalence when material behavior diverges.

Divergence must be disclosed when it affects evidence identity, replay, marker semantics, claim authority, missingness, instrument outputs, or export/preservation behavior.
