# Security Posture

## Threat model

The public Aperture reference architecture assumes sensitive operational evidence may contain transcripts, tool output, incident material, infrastructure data, or other confidential records.

Where a browser-local release is used, the preferred posture is:

- local source processing,
- explicit evidence loading,
- no hidden analytics,
- no silent external transmission of source material,
- no persistent storage unless the operator deliberately exports or preserves an artifact.

## Evidence integrity is not application security

Evidence-Governed Computation™ governs the relationship between evidence and claims. It does not replace authentication, authorization, sandboxing, dependency security, endpoint protection, encryption policy, or organizational security controls.

## Untrusted source handling

Source content should be treated as data, not executable authority. Adapters and previews should not allow source text to rewrite evidence policy, method contracts, claim boundaries, or authority state.

## Disclosure

Security vulnerabilities in a distributed Aperture release should be reported privately to the repository owner / SubstrateX® before coordinated public disclosure where practical.
