# Architecture Decision Records

Decisões de arquitetura e de produto do CV Studio, uma por arquivo, no formato
contexto → decisão → consequência (e alternativas, quando houve).
Um ADR não se edita depois de aceito; ele é **substituído** por outro que o supersede.

**Numeração:** o número do arquivo é sempre o número do `AD-` correspondente no
[`.specs/STATE.md`](../../.specs/STATE.md#decisions), que é o log de todas as decisões.
Só ganha arquivo aqui a decisão com contexto e alternativas que valem o registro longo; as demais
vivem só no `STATE.md`. As decisões 001–012 vieram do antigo `docs/decisions.md`.

| # | Decisão | Status |
|---|---|---|
| [0001](0001-markdown-como-fonte.md) | Markdown como fonte | Aceito |
| [0002](0002-edicao-local-e-publicacao-estatica.md) | Edição local e publicação estática | Aceito |
| [0003](0003-pdf-nativo.md) | PDF nativo | Aceito |
| [0004](0004-ia-por-skills.md) | IA por skills | Aceito |
| [0005](0005-monorepo-pnpm-com-api-express.md) | Monorepo pnpm com API Express | Aceito |
| [0006](0006-vagas-em-sqlite-nativo.md) | Vagas em SQLite nativo | Aceito |
| [0007](0007-pitch-por-versao-e-envio-smtp.md) | Pitch por versão e envio SMTP com PDF | Aceito |
| [0008](0008-outlook-oauth2-microsoft.md) | Conexão Outlook com OAuth2 Microsoft | Aceito |
| [0009](0009-confirmacao-smtp-gmail.md) | Confirmação SMTP para contas pessoais Gmail | Aceito |
| [0010](0010-renderizador-de-pdf-compartilhado.md) | Renderizador de PDF compartilhado e independente da UI | Aceito |
| [0011](0011-candidatura-completa-pelo-cli.md) | Candidatura completa pelo CLI, com envio sob confirmação | Aceito |
| [0012](0012-curriculos-locais-fora-do-git.md) | Currículos, pitches e vagas locais, fora do Git | Aceito |
