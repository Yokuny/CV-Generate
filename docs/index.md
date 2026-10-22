<!-- GERADO por scripts/docs/sync-docs.mjs — não edite à mão. Rode `pnpm docs:sync`. -->

# Gateway de documentação — CV Studio

Ponto de entrada obrigatório antes de qualquer tarefa (protocolo em [`AGENTS.md`](../AGENTS.md)).
Cada feature tem **um** registro vivo em `docs/features/<slug>/feature.md`; spec, design, tasks,
validação e planos (congelados) ficam em `.specs/features/<slug>/`. Decisões: `.specs/STATE.md`.

## Em andamento

_Nada em andamento._

## Planos não arquivados (`.specs/plans/`)

_Nenhum._

## Features (1)

| Feature | O que faz | Status | Atualizado | Áreas | Spec | Planos |
| --- | --- | --- | --- | --- | --- | --- |
| [Harness de documentação para agentes](features/harness-docs/feature.md) | Protocolo de descoberta e registro para agentes, gateway docs/index gerado, log AD-NNN, skills de spec e commit e checagem no CI. | concluido | 2026-10-22 | `harness` `docs` `skills` `infra` | — | — |

## Por área

- **`docs`** — [harness-docs](features/harness-docs/feature.md)
- **`harness`** — [harness-docs](features/harness-docs/feature.md)
- **`infra`** — [harness-docs](features/harness-docs/feature.md)
- **`skills`** — [harness-docs](features/harness-docs/feature.md)

## Decisões recentes

Últimas 10 de [`.specs/STATE.md`](../.specs/STATE.md#decisions) (ADRs longos em [`docs/adr/`](adr/README.md)).

- **AD-012** (2026-10-09, active) — Currículos, pitches, vagas e credenciais ficam só na máquina de cada pessoa (`content/cv/*`, `data/`, `output/`, `.env.local` no `.gitignore
- **AD-011** (2026-10-08, active) — Candidatura completa pelo CLI (`pnpm cv job list\|add\|update\|preview\|send`), com a mesma montagem e envio da API; agente só envia com `--yes`
- **AD-010** (2026-10-08, active) — Renderizador único do currículo (`ResumeMarkdown` + `resume.css` de `packages/core`), usado pela UI e por `apps/api/src/resume-html.ts`, que
- **AD-009** (2026-10-08, active) — Gmail/custom com senha de app e "Salvar e testar" que autentica antes de substituir a conta; a UI só mostra conectado com `verified`.
- **AD-008** (2026-10-08, active) — Outlook por OAuth2 com código de dispositivo, client ID próprio em `.env.local` e tokens renovados na API, gravados em `data/mail-account.js
- **AD-007** (2026-10-08, active (geração do anexo: AD-010; envio por agente: AD-011)) — Pitch por versão em `content/cv/<slug>.pitch.md` (texto puro com variáveis), até 20 pitches; envio SMTP com nodemailer e o currículo em PDF
- **AD-006** (2026-10-08, active) — Vagas e envios em `node:sqlite` (`data/cv-studio.db`, journal DELETE, migrações por `user_version`), com exportação/importação CSV.
- **AD-005** (2026-10-08, active) — Monorepo pnpm `apps/web` + `apps/api` (Express) + `packages/core` (sem `node:*`); no dev a API é carregada pelo SSR do Vite em `/api`, na me
- **AD-004** (2026-10-07, active (commits da skill retirados por AD-012)) — IA só pela skill `cv-studio` do editor, usando o CLI `pnpm cv`; a UI e a API não chamam modelos nem pedem chaves.
- **AD-003** (2026-10-07, active (renderizador do anexo e do CLI: AD-010)) — PDF por impressão nativa do navegador com `@page` A4, sem captura raster; texto selecionável e links preservados.

## Outros documentos

- [Glossário](glossary.md) · [ADRs](adr/README.md) · Email: [Gmail](email-gmail.md) · [Outlook](email-outlook.md)
- Produto e uso local: [`README.md`](../README.md) · Skill de currículos: [`cv-studio`](../.agents/skills/cv-studio/SKILL.md)
- Template de registro: [`docs/templates/feature-doc.md`](templates/feature-doc.md)
