# Runtime Instrumentation

## Principle

Aperture computes evidence first and projects instrument findings second.

**Telemetry is computed from reconstructed runtime. Instruments project bounded findings over telemetry. Instruments do not create or mutate evidence.**

## Instrument registry

| Instrument | Primary public role |
| --- | --- |
| ∿ Seismo | Worldline, formation, disturbance, regimes, boundary, failure, recovery |
| τ Chronos | temporal organization, recurrence, symbolic time, ordering, compression/shear |
| Δ Drift | displacement, curvature, directional change |
| Ξ Pressure | runtime pressure proxies and boundary load |
| ⇄ Bridge | role/tool handoff and coordination continuity |
| ⟳ Noesis | qualified recurrence, re-entry, observable continuity patterns |
| Ω Scope | evidence coverage and runtime topology |
| Ψ Dynamics | multivariate runtime dynamics |
| Φ Interferometer | alignment/divergence among registered streams |

## Binding law

```text
InstrumentModel = f(CER, Metrics, Markers, Spine, ScienceRegistry, Contract)
```

Each instrument contract should declare dependencies, permitted findings, evidence basis, source-span behavior, confidence/qualification posture, and claim boundary.

## Non-mutation

An instrument may not create telemetry, alter canonical frames, move authoritative markers, invent failure, create formal lead time without anchors, or rewrite Passport/export authority.
