---
feature: Harness de documentação para agentes
slug: harness-docs
descricao: Protocolo de descoberta e registro para agentes, gateway docs/index gerado, log AD-NNN, skills de spec e commit e checagem no CI.
data: 2026-10-22
status: concluido
areas: [harness, docs, skills, infra]
decisoes: [AD-011, AD-012]
branches: [chore/harness-docs]
---

# Harness de documentação para agentes

**Status**: concluido · **Atualizado**: 2026-10-22 · **Áreas**: `harness`, `docs`, `skills`, `infra`

> Documento vivo. Onde divergir de planos (congelados), **o código é a fonte da verdade** — e este
> doc aponta o arquivo exato. Correlação com o git: `git log --oneline -i --grep='harness-docs'`.

## O que foi feito

- Qualquer agente (Claude Code, Codex, Gemini…) segue o mesmo protocolo em tarefas de código: descoberta antes, branch + plano, registro, commit e PR depois de um gate único (`AGENTS.md`).
- `pnpm docs:sync` gera o gateway `docs/index.md`/`docs/index.json` a partir dos `feature.md`, das decisões e dos planos; `pnpm docs:check` valida no CI; `pnpm docs:context` resume no início da sessão do Claude Code.
- Decisões viraram um log `AD-NNN` em `.specs/STATE.md`, com o texto longo das 12 decisões anteriores em `docs/adr/` (antigo `docs/decisions.md`).
- Planos do plan mode do Claude nascem em `.specs/plans/` e são arquivados por feature.
- Skills `cv-studio-docs`, `cv-studio-spec-driven`, `cv-studio-commit-standards` e `tlc-spec-driven` (com o `lessons.py` e o store de lições vazio).

## Por que

Várias pessoas e vários agentes contribuem com o repositório; sem um registro no próprio repo, cada
sessão recomeçava do zero. O harness veio do projeto CRM do mantenedor e foi adaptado: o protocolo
vale só para código e documentação — a candidatura (skill `cv-studio`) mexe apenas em arquivos
pessoais e nunca é documentada nem commitada (AD-012). O envio de email continua regido por AD-011.

## Como

### `harness`

- `scripts/docs/sync-docs.mjs` — gera e valida o gateway (frontmatter, áreas, `AD-NNN`, specs, seções obrigatórias). Áreas aceitas: workspaces de `apps/` e `packages/` mais `EXTRA_AREAS`.
- `.claude/settings.json` — `plansDirectory: .specs/plans` e hook `SessionStart` com `--context`.
- `.specs/STATE.md` (decisões e handoff), `.specs/plans/README.md`, `.specs/LESSONS.md`/`.specs/lessons.json` (só via `lessons.py`).
- `AGENTS.md` (fonte única), `CLAUDE.md` (importa e acrescenta o específico do Claude), `GEMINI.md` (symlink).

### `docs`

- `docs/templates/feature-doc.md` — template do registro vivo.
- `docs/adr/` — ADRs longos, número = número da AD; índice em `docs/adr/README.md`.

### `skills`

- `.agents/skills/cv-studio-docs`, `cv-studio-spec-driven`, `cv-studio-commit-standards`, `tlc-spec-driven`, com symlinks em `.claude/skills/`.

### `infra`

- `.github/workflows/ci.yml` — `pnpm run check`, `pnpm test` e `pnpm docs:check`.
- `biome.json` — `docs/index.json` e `.specs/lessons.json` (gerados) fora do Biome.

## Como testar

```
pnpm docs:sync && pnpm docs:check
pnpm docs:context
pnpm run check
```

- UAT: abrir uma sessão nova do Claude Code e conferir que o resumo `[docs]` aparece no início.

## Pendências

- [ ] Criar `feature.md` das funcionalidades anteriores ao harness (editor, PDF, vagas/email, CLI) à medida que forem tocadas.

## Histórico

- 2026-10-22 — Harness trazido do projeto CRM e adaptado ao CV Studio; `docs/decisions.md` dividido em `docs/adr/` + log `AD-001..AD-012`.

## Referências

- Protocolo: `AGENTS.md` ("Protocolo de documentação")
- Decisões: `.specs/STATE.md`, `docs/adr/README.md`
