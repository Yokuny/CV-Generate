@AGENTS.md

## Claude Code

- As regras do projeto ficam em `AGENTS.md` (importado acima), compartilhado com Codex, Gemini e outros agentes. Edite lá, não aqui. Aqui só o que é específico do Claude Code.
- **Princípio fundamental**: programar sempre com a intenção de diminuir a complexidade (excluir estruturas antigas, fazer de forma nova, limpa e direta, sem criar abstrações para "agrupar processos"). Definido no topo de `AGENTS.md`; vale em todo contexto.
- As skills ficam em `.claude/skills/` como symlinks para `.agents/skills/`. Uma descrição de vaga enviada pelo usuário dispara o fluxo "candidatura completa" da skill `cv-studio`; tarefas de código seguem o protocolo de documentação (skills `cv-studio-docs`, `cv-studio-spec-driven`, `cv-studio-commit-standards`, `tlc-spec-driven`).
- **Planos**: `.claude/settings.json` define `plansDirectory: .specs/plans`, então todo plano do plan mode já nasce dentro do repo. Ao concluir, arquive-o em `.specs/features/<slug>/plans/` (skill `cv-studio-docs`). O nome auto-gerado do arquivo não carrega identidade — renomeie.
- **Início de sessão**: o hook `SessionStart` roda `pnpm docs:context` e injeta o resumo do gateway. Ele não substitui a descoberta: leia os `feature.md`/planos relacionados à tarefa.
- Use a ferramenta de perguntas (AskUserQuestion), quando disponível, para as perguntas do passo 2 da candidatura (dados que faltam e modo de envio, interface ou direto, numa só rodada) e para os gates (documentação, commit e PR), juntando as perguntas numa rodada só.
- A memória automática do Claude é pessoal e fica fora do repo. Decisão, ajuste ou lição que outra sessão (ou outro LLM) precise saber vai para o repo (`feature.md`, `STATE.md`), não só para a memória.
