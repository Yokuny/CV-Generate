---
name: cv-studio-commit-standards
description: Padrão de escrita e envio de commits e Pull Requests do CV Studio — Conventional Commits com subject em português, scope = slug da feature ou workspace, commits atômicos com a documentação sempre junto, nome de branch, push e corpo do PR, sem nunca incluir arquivos pessoais. Use ao redigir mensagem de commit, nomear branch, fazer push ou abrir/descrever PR. Trigger em "commit", "mensagem de commit", "branch", "pull request", "PR", "commita", "push".
---

# Commits e PRs do CV Studio

Quando criar a branch e quando commitar está em `AGENTS.md` (protocolo, passos 2 e 3). Aqui fica só como escrever e enviar.

## Regra #1 — sem atribuição a LLM

Commit e PR **nunca** levam `Co-Authored-By`, `Generated with` ou qualquer menção a assistente — nem no corpo, nem no rodapé. Vale para todo agente, mesmo que o harness peça.

## Regra #2 — sem arquivos pessoais

Nunca entram em commit: `content/cv/*` (exceto `.gitkeep`), `data/`, `output/`, `.env.local`. Nada de `git add -f`. Antes de commitar, confira `git status --short` e `git diff --cached --name-only`.

## Mensagem — Conventional Commits

`type(scope): subject`

- `type` ∈ `feat | fix | refactor | perf | test | docs | style | build | ci | chore`.
- `scope` = slug da feature (`docs/features/<slug>/`) quando a mudança pertence a uma; senão o workspace (`web`, `api`, `core`) ou a área (`skill`, `harness`). Omita só em mudança transversal (`chore: atualiza dependências`).
- `subject` em **português**, imperativo, minúsculo, ~50 caracteres, sem ponto final.
- Corpo opcional: bullets do que mudou e por quê.

```
feat(vagas): exporta histórico de envios em CSV
fix(web): corrige conflito ao renomear versão aberta
refactor(api): move montagem do email para applications
docs(vagas): registra exportação do histórico
```

## Commits atômicos

- Uma mudança lógica = um commit. Refactor, feature e fix em commits separados.
- A documentação da tarefa (`docs/features/...`, `docs/index.*`, `.specs/...`, `docs/adr/...`) **sempre** vai junto: commit `docs(<slug>): ...` na mesma branch e no mesmo push do código. Nunca fica para depois.
- `git add` por arquivo, nunca `git add -A` às cegas: mudanças não relacionadas na árvore de trabalho não entram.

## Nome de branch

`type/descricao-kebab-case` com os mesmos `type` (`feat/exportar-historico`, `fix/conflito-renomear-versao`).

## Push e Pull Request

- Primeiro push com destino explícito: `git push -u origin <branch>`.
- `gh pr create --base main`. Título no formato do commit.
- Corpo: o que muda, por quê, como testar (comando ou UAT) e link para `docs/features/<slug>/feature.md`.
- Devolva o link do PR. Não faça merge.
- O CI (`.github/workflows/ci.yml`) roda `pnpm run check`, `pnpm test` e `pnpm docs:check`.
