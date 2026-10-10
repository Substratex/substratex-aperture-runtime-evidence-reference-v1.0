# Public Evidence Schema Map

The current public architecture is not represented by a single legacy ZSF object. Aperture separates the major evidence identities and artifacts so their authority remains inspectable.

## Public structural schemas

- `schemas/canonical-runtime.schema.json` — qualified canonical runtime envelope.
- `schemas/current-evidence-run.schema.json` — public CER structural envelope.
- `schemas/runtime-evidence-passport.schema.json` — Passport identity, authority, claim boundary, and seal posture.
- `schemas/runtime-evidence-artifact.schema.json` — portable machine-readable Runtime Evidence handoff.
- `schemas/zsf-evidence.schema.json` — compatibility schema retained from the earlier reference stack.

These schemas are public structural references and do not expose every private implementation field or proprietary instrument kernel.

## Identity separation

Schema consumers should distinguish source identity, canonical identity, run identity, record identity, and artifact identity.

## Missingness

Missingness states must remain explicit. Typical states include:

- not supplied,
- not observed,
- unavailable,
- not computable,
- unsupported,
- proxy-only,
- candidate only.

A numeric zero or boolean false is not equivalent to missing evidence.
