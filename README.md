# SmritiCare

**Exploring whether familiar voices can make dementia-support technology feel more human.**

Smriti began with a simple question: when memory becomes unreliable, can the voice of someone you love still provide orientation, comfort, or continuity?

The project explores personalised voice, family context, and low-friction messaging as ingredients for everyday dementia support.

## What this repository demonstrates

- Care-cue and routine design
- Time-sorted daily plans
- Local audio preview
- Consent and permission gating
- JSON plan export
- WhatsApp-ready message drafts

## Design principles

**Familiar before futuristic.** The technology should disappear behind a voice or routine the person already knows.

**Low friction.** Families should not need to learn a complicated new system.

**Human-controlled.** Context, consent, and review matter more than automation.

## Run the demonstration

```bash
python3 scripts/serve.py
```

Then open `http://127.0.0.1:8000`.

This repository is a local demonstration environment; it does not itself send messages or provide a clinical service.

## Repository structure

- `src/` — demonstration interface
- `data/` — synthetic routines and care-cue examples
- `tests/` — behaviour and data-integrity tests
- `docs/` — architecture, safeguards, provenance, and workflow notes
- `schemas/`, `examples/` — plan and export formats

## Provenance

The Smriti concept, research framing, product direction, and project work are mine. The current public demonstration scaffolding was created later with AI-assisted development tools and is not presented as the original production system. See `docs/PROVENANCE.md` and `NOTICE.md`.

**Themes:** dementia care · human-centred AI · voice technology · family connection · accessible design
