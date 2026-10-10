# Runtime Markers & Failure-Formation Semantics

## Purpose

Markers provide source-aligned temporal anchors for reconstructing how observable runtime behavior develops. They are not hidden-state labels.

## Canonical marker classes

- **First Weakening (`t_aw`)** — first evidence-supported weakening/awareness marker under the active method.
- **Candidate Boundary (`t_candidate`)** — evidence suggests a boundary may be forming, but confirmation criteria are not yet satisfied.
- **Confirmed Basin Exit (`t*`)** — governing method confirms a qualifying observable boundary crossing.
- **Observable Failure (`tf`)** — externally supported terminal failure marker where supplied/qualified.
- **Recovery / Re-entry** — evidence-supported return/reorganization where observed.

## Separation rule

Candidate, confirmed exit, and observable failure are distinct evidentiary states. One cannot be silently substituted for another.

## Formal lead-time

```text
Δt = tf - t*
```

Formal lead-time exists only when both anchors are supported and temporally admissible. If `tf` is absent, use Open Watch / Post-Exit Watch language rather than formal lead-time.

## Prospective validity

A prospective warning claim requires that the detector at time `t` use only evidence available at or before `t`. Retrospective discovery of a precursor does not make it a prospective warning.
