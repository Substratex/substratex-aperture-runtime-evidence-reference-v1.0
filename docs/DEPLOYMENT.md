# Deployment / Use of This Repository

This repository is not the full Aperture application bundle. It is the public reference architecture, schema, provenance, and frozen-fixture package.

## Local documentation browsing

```bash
npm run serve
```

Then open `http://localhost:8080` and browse the Markdown/JSON files from your preferred local viewer or repository host.

## Reference-suite integrity verification

```bash
npm run verify:reference
```

This command checks that the frozen reference `test-suite/` still matches the published SHA-256 manifest.

## Aperture application deployment

The full Aperture UI/runtime implementation may be distributed separately. Do not infer application deployment instructions from this reference package.
