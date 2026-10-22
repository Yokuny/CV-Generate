# 011 — Candidatura completa pelo CLI, com envio sob confirmação

**Status**: Aceito · **Data**: 2026-10-08 · **Log**: [AD-011](../../.specs/STATE.md#ad-011)

**Contexto:** a IA do editor adaptava currículo e pitch, mas o usuário ainda cadastrava a vaga à mão, e não havia envio sem a interface.

**Decisão:** `apps/api/src/applications.ts` concentra a montagem do email (`composeEmail`) e o envio (`sendApplication`, com histórico e status). A rota `/api/jobs` e o CLI `pnpm cv job list|add|update|preview|send` chamam essas mesmas funções. `send` sem `--yes` só mostra a prévia e sai com código 2. Com `--yes`, recusa enquanto houver pendência ou conta não conectada. A skill pode criar e editar vagas pelo CLI e enviar só depois de mostrar a prévia e receber confirmação explícita daquele envio. Ela nunca edita `data/` direto nem lê `mail-account.json`, e a conexão da conta continua só na interface. A API observa `data/cv-studio.db` e emite `jobs` em `/api/events`, para a aba Vagas recarregar. O SQLite usa `busy_timeout` porque CLI e API podem abrir o banco juntos. A empresa passou a ser opcional na vaga (só o cargo é obrigatório); um pitch com `{{empresa}}` continua bloqueado até ela ser preenchida. O protocolo disparado por uma descrição de vaga fica em `AGENTS.md`, importado por `CLAUDE.md` e ligado como `GEMINI.md`, para valer em qualquer agente.

**Consequência:** a candidatura funciona pela UI ou só pelo terminal, com a mesma prévia e as mesmas regras de bloqueio. O envio por agente depende da disciplina da skill e do `--yes`; o histórico registra cada tentativa. A renovação de tokens Outlook é serializada por processo; CLI e UI enviando ao mesmo tempo podem renovar duas vezes, o que é aceito pelo uso pessoal.
