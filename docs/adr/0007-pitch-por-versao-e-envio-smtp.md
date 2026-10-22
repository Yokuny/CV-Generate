# 007 — Pitch por versão e envio SMTP com PDF

**Status**: Aceito · **Data**: 2026-10-08 · **Log**: [AD-007](../../.specs/STATE.md#ad-007)

**Contexto:** cada candidatura leva um pitch personalizado e o currículo da versão.

**Decisão:** o pitch é um arquivo `content/cv/<slug>.pitch.md` (texto puro, variáveis `{{empresa}}`, `{{cargo}}`, `{{recrutadora}}`, `{{nome}}`), editado na aba Pitch com autosave e conflito próprios e adaptado pela skill. Sem arquivo, a versão usa `base.pitch.md`. Até 20 pitches de versão: gravar um novo além disso apaga o mais antigo por mtime (sem histórico desde a AD-012). O pitch não entra na revisão do currículo. O envio usa nodemailer com senha de app Gmail (465/SSL) ou OAuth2 Outlook (587/STARTTLS obrigatório), com as credenciais em `data/mail-account.json` (0600, fora do Git, nunca devolvidas à UI). O anexo é gerado pela API com o Chromium do Playwright, abrindo `/?print=<slug>` e imprimindo com `page.pdf` e o mesmo `@page` A4. O envio é bloqueado enquanto houver variável sem valor, variável desconhecida ou o trecho de exemplo do pitch.

**Consequência:** gerar o anexo exige `pnpm setup:pdf` uma vez (desde a AD-010, não exige mais a UI de dev aberta). Agentes não enviavam emails; a AD-011 permite o envio pelo CLI com confirmação explícita.
