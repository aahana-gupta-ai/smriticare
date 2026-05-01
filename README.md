# SmritiCare

Familiar cues and thoughtful care routines.

**Package status:** runnable portfolio starter. Only the ADAS-Cog repository also contains supplied original web source in `legacy/`. Other project production code was not supplied. Newly generated code must not be represented as the original implementation.

## What works in this starter

- Thirty reviewable care-cue examples and twelve synthetic routines.
- Time-sorted routine builder, local audio preview, and permission gating.
- Local JSON plans and WhatsApp text drafts; no service delivery is configured.

## Run

```bash
python3 scripts/serve.py
```

Open http://127.0.0.1:8000. Use the bundled example content. No dependency install or account is required.

## Verify

```bash
node --test
node scripts/verify.mjs
```

## Contents

- `src/`: functioning browser application and reusable helpers.
- `data/`: indexed demonstration resources.
- `tests/`: behavior and data-integrity tests.
- `docs/`: architecture, provenance, integration limits, and workflow guides.
- `schemas/` and `examples/`: documented export formats.

Every project is packaged with exactly **160 files**, including code, resources, tests, and documentation; file count is not a measure of research quality.

## Topics

`artificial-intelligence` `voice-cloning` `healthcare` `dementia` `whatsapp`

Set these through GitHub's About settings.

## Attribution and rights

Project identity and background come from the uploaded Aahana Gupta descriptions. Starter code and new example content were generated for this bundle. No new open-source license is assigned. Review `NOTICE.md` and `docs/PROVENANCE.md` before public distribution.
