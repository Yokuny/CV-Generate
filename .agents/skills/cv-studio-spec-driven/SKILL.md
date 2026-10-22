---
name: cv-studio-spec-driven
description: Convenções do CV Studio para spec.md, design.md, tasks.md, context.md e decisões AD-NNN em .specs/ — quando o fluxo é obrigatório, onde salvar, prefixo de requisitos, numeração de decisões e ADRs. Complementa a skill tlc-spec-driven (protocolo de fases e Verifier) com as regras locais. Use ao decidir se uma tarefa de desenvolvimento precisa de spec, ao escrever ou revisar spec/design/tasks, ao registrar uma decisão arquitetural ou de produto. Trigger em "spec", "design", "tasks", "planejar feature", "requisitos", "critérios de aceitação", "AD-", "ADR", "registrar decisão".
---

# Spec-driven no CV Studio

O **protocolo** (fases Specify → Design → Tasks → Execute, Verifier independente,
`validation.md`, lições) é da skill `tlc-spec-driven` (`.agents/skills/tlc-spec-driven/`) — o
formato dos documentos segue os templates dela. Esta skill cobre só o que é local deste repo.
O registro pós-implementação (`docs/features/<slug>/feature.md`) é da skill `cv-studio-docs`.

## Quando o fluxo é obrigatório

| Tamanho | Exemplo | Documentos |
| --- | --- | --- |
| Pequeno (≤3 passos óbvios, uma área) | ajustar texto da UI, novo token de layout, flag no `pnpm cv` | nenhum `.specs/`; só o registro no `feature.md` ao concluir |
| Médio (várias áreas ou >3 passos) | novo subcomando do CLI + rota da API, nova coluna de vaga | `spec.md` + `tasks.md` (design inline no spec se curto) |
| Grande/complexo (domínio novo, decisão de arquitetura, email, credenciais, PDF) | novo provedor de email, troca do renderizador | `spec.md` → `context.md` (se houver zonas cinzentas) → `design.md` → `tasks.md` → `validation.md` |

Em dúvida, pergunte ao usuário o tamanho antes de escrever código.

## Onde salvar

```
.specs/
├── STATE.md                       # decisões AD-NNN + handoff (tlc-spec-driven)
├── LESSONS.md / lessons.json      # lições do Verifier (geradas por script — não editar à mão)
├── plans/                         # caixa de entrada de planos em andamento
└── features/<slug>/
    ├── spec.md  context.md  design.md  tasks.md  validation.md
    └── plans/<YYYY-MM-DD>-<assunto>.md   # planos arquivados
```

`<slug>` é o mesmo de `docs/features/<slug>/` e do scope dos commits. Uma feature por pasta;
uma evolução grande de feature existente pode ganhar slug próprio — o `feature.md` da original
cita a nova no "Histórico".

## Convenções locais

- **Idioma**: o corpo em português; títulos de seção podem seguir o template do
  `tlc-spec-driven` (em inglês).
- **IDs de requisito**: prefixo de 2–4 letras por feature + número de 2 dígitos (`JOB-01`,
  `PDF-03`). Escolha um prefixo novo que não colida
  (`grep -rhoE '\b[A-Z]{2,4}-[0-9]{2}\b' .specs/features | cut -d- -f1 | sort -u`).
- **Caminhos** sempre a partir da raiz (`apps/api/src/repository.ts`).
- **Referências** a decisões como `AD-NNN` (link para `.specs/STATE.md`) e a termos conforme
  `docs/glossary.md`.
- **Exemplos** em spec, design e testes usam dados fictícios; nunca o currículo, pitch, vagas ou
  emails de quem está desenvolvendo (AD-012).
- **Antes do design**: releia as ADs ativas da área. Pontos que costumam pegar: a API grava só em
  `content/cv` e `data/` com revisão SHA-256 (AD-002), `packages/core` sem `node:*` (AD-005),
  renderizador único do PDF (AD-010), envio só com confirmação explícita (AD-011), arquivos
  pessoais fora do Git (AD-012).
- **`tasks.md`**: um commit atômico por task, com o comando de gate (`pnpm run check`,
  `pnpm test`, `pnpm vitest run <padrão>` ou `pnpm run test:e2e`).

## Decisões (`AD-NNN`)

Log único em `.specs/STATE.md`, numeração contínua (veja o último `### AD-` do arquivo).
Formato de cada entrada:

```
### AD-NNN
- **Decision**: ...
- **Reason**: ...
- **Trade-off**: ...
- **Scope**: <workspaces/arquivos>
- **Date**: YYYY-MM-DD
- **Status**: active | proposed | superseded by AD-XXX
```

ADR longo em `docs/adr/<NNNN>-<slug>.md` (número = número da AD) só quando a decisão tem contexto
ou alternativas que valem o registro completo (contexto → decisão → consequência → alternativas);
nesse caso adicione a linha na tabela de `docs/adr/README.md`. ADR aceito não se edita: é
superado por outro.

## Ao terminar

O `validation.md` congela a prova; o `feature.md` (skill `cv-studio-docs`) passa a ser a fonte viva.
Atualize o "Handoff" do `STATE.md` se a feature ficou pela metade.
