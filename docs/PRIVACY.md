# Privacy & Source Handling

## Preferred posture

Aperture is designed around browser-local evidence processing where supported so sensitive operational records do not need to leave the operator environment merely to be reconstructed or instrumented.

## Evidence handling principles

- Preserve the supplied source distinctly from the canonical runtime.
- Do not silently substitute sample or cached content when source resolution fails.
- Keep source previews bounded without truncating the computational source merely for display convenience.
- Make optional trace/context channels explicit.
- Treat redaction as a declared transformation with provenance.
- Clear the active run when the operator requests reset.

## Deployment caveat

Privacy depends on the actual release, hosting, dependencies, browser behavior, and organizational environment. A local reference posture is not itself a security certification.
