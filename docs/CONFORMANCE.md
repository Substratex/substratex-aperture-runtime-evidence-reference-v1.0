# Conformance

## Purpose

Aperture conformance is about preserving evidence identity, method/version continuity, deterministic reconstruction where promised, marker semantics, claim boundaries, missingness, and preservation lineage.

## Current conformance families

A current implementation should be testable across at least:

1. source-span traceability,
2. deterministic-core recomputation,
3. policy/claim rejection,
4. projection congruence,
5. surface binding,
6. missingness differentiation,
7. temporal leakage prevention,
8. version separation,
9. export roundtrip,
10. challenge propagation,
11. narrative/proposition containment,
12. adversarial source isolation.

## Historical fixtures

The frozen `test-suite/` contains earlier conformance and calibration material. Those fixtures remain useful for regression/provenance but do not define the entire current architecture.

Historical fixture output may contain earlier regime or serialization vocabulary. Do not rewrite those files simply to make them match current public terminology; doing so would destroy the reference baseline.

## Conformance is not certification

Passing tests does not certify truth, safety, regulatory compliance, scientific validity, or official SubstrateX status.
