# STATE

## Decisions

Decisões de nível de projeto. Toda feature futura conforma ou supersede.
AD-001..AD-012 têm o registro completo (contexto, decisão, consequência) em [`docs/adr/`](../docs/adr/README.md);
a entrada abaixo é o resumo. Decisão nova entra no fim, com o próximo número livre.

### AD-001
- **Decision**: Markdown GFM em `content/cv` como fonte do currículo, renderizado por `react-markdown` sem HTML bruto; um arquivo por versão, layout e nome em JSON separados.
- **Reason**: fatos profissionais em texto, fáceis de personalizar por IA e sem duplicar conteúdo em JSX.
- **Trade-off**: o build estático precisa ser refeito após mudar o conteúdo; sem histórico das versões desde AD-012.
- **Scope**: `content/cv`, `apps/web`, `packages/core`.
- **Date**: 2026-10-07
- **Status**: active

### AD-002
- **Decision**: API local grava os arquivos (aba = arquivo, autosave, revisão SHA-256, Host/Origin locais); mudanças externas chegam à UI por SSE e são mescladas, com conflito quando há edição pendente.
- **Reason**: uma SPA não grava no checkout; edição local sem credenciais nem commit pela UI.
- **Trade-off**: os três arquivos de uma versão não formam transação conjunta; `content` fica fora do scan do Tailwind.
- **Scope**: `apps/api/src/repository.ts`, `apps/web/src/store`, `apps/web/vite.config.ts`.
- **Date**: 2026-10-07
- **Status**: active

### AD-003
- **Decision**: PDF por impressão nativa do navegador com `@page` A4, sem captura raster; texto selecionável e links preservados.
- **Reason**: paginação A4 fiel e texto pesquisável por ATS.
- **Trade-off**: a paginação varia com navegador e fontes; a impressão é a referência final.
- **Scope**: `packages/core/src/resume.css`, `apps/web`.
- **Date**: 2026-10-07
- **Status**: active (renderizador do anexo e do CLI: AD-010)

### AD-004
- **Decision**: IA só pela skill `cv-studio` do editor, usando o CLI `pnpm cv`; a UI e a API não chamam modelos nem pedem chaves.
- **Reason**: fatos sob revisão do candidato e nenhuma credencial de LLM no projeto.
- **Trade-off**: a adaptação depende do agente do editor de cada pessoa.
- **Scope**: `.agents/skills/cv-studio`, `apps/api/scripts/cv.ts`.
- **Date**: 2026-10-07
- **Status**: active (commits da skill retirados por AD-012)

### AD-005
- **Decision**: Monorepo pnpm `apps/web` + `apps/api` (Express) + `packages/core` (sem `node:*`); no dev a API é carregada pelo SSR do Vite em `/api`, na mesma origem.
- **Reason**: email, credenciais e PDF exigem servidor; um único processo em `pnpm run dev`.
- **Trade-off**: `vite preview` e build estático ficam sem API.
- **Scope**: todo o projeto.
- **Date**: 2026-10-08
- **Status**: active

### AD-006
- **Decision**: Vagas e envios em `node:sqlite` (`data/cv-studio.db`, journal DELETE, migrações por `user_version`), com exportação/importação CSV.
- **Reason**: registro de vagas sem banco rodando, arquivo único copiável como backup.
- **Trade-off**: banco binário, sem diff legível (use o CSV).
- **Scope**: `apps/api`, `packages/core/src/jobs.ts`, `data/`.
- **Date**: 2026-10-08
- **Status**: active

### AD-007
- **Decision**: Pitch por versão em `content/cv/<slug>.pitch.md` (texto puro com variáveis), até 20 pitches; envio SMTP com nodemailer e o currículo em PDF anexado, bloqueado enquanto houver variável pendente.
- **Reason**: cada candidatura leva pitch e currículo próprios.
- **Trade-off**: anexo exige `pnpm setup:pdf`; o pitch mais antigo é apagado ao passar do limite.
- **Scope**: `packages/core/src/pitch.ts`, `apps/api`, `apps/web`.
- **Date**: 2026-10-08
- **Status**: active (geração do anexo: AD-010; envio por agente: AD-011)

### AD-008
- **Decision**: Outlook por OAuth2 com código de dispositivo, client ID próprio em `.env.local` e tokens renovados na API, gravados em `data/mail-account.json` (0600).
- **Reason**: Outlook.com recusa SMTP com senha de aplicativo.
- **Trade-off**: cada pessoa registra o aplicativo na Microsoft uma vez.
- **Scope**: `apps/api`, `docs/email-outlook.md`.
- **Date**: 2026-10-08
- **Status**: active

### AD-009
- **Decision**: Gmail/custom com senha de app e "Salvar e testar" que autentica antes de substituir a conta; a UI só mostra conectado com `verified`.
- **Reason**: salvar senha não prova que o provedor aceitou o login.
- **Trade-off**: uma conta de envio por instalação; exige verificação em duas etapas na Conta Google.
- **Scope**: `apps/api`, `apps/web`, `docs/email-gmail.md`.
- **Date**: 2026-10-08
- **Status**: active

### AD-010
- **Decision**: Renderizador único do currículo (`ResumeMarkdown` + `resume.css` de `packages/core`), usado pela UI e por `apps/api/src/resume-html.ts`, que imprime em A4 com o Chromium do Playwright, sem a UI aberta.
- **Reason**: prévia, Exportar PDF, anexo e `pnpm cv pdf` iguais e candidatura sem interface.
- **Trade-off**: WeasyPrint recusado (renderiza diferente da prévia); quebra em `<tr>` depende da checagem de overflow.
- **Scope**: `packages/core/src/resume.ts`, `packages/core/src/resume.css`, `apps/api/src/resume-html.ts`.
- **Date**: 2026-10-08
- **Status**: active

### AD-011
- **Decision**: Candidatura completa pelo CLI (`pnpm cv job list|add|update|preview|send`), com a mesma montagem e envio da API; agente só envia com `--yes` após prévia e confirmação explícita daquele envio.
- **Reason**: a candidatura precisa funcionar só pelo terminal, com as mesmas regras de bloqueio da UI.
- **Trade-off**: o envio por agente depende da disciplina da skill; CLI e UI juntos podem renovar o token Outlook duas vezes.
- **Scope**: `apps/api/src/applications.ts`, `apps/api/scripts/cv.ts`, `AGENTS.md`, `.agents/skills/cv-studio`.
- **Date**: 2026-10-08
- **Status**: active

### AD-012
- **Decision**: Currículos, pitches, vagas e credenciais ficam só na máquina de cada pessoa (`content/cv/*`, `data/`, `output/`, `.env.local` no `.gitignore`); clone novo começa vazio com `pnpm cv init`.
- **Reason**: vários usuários e contribuidores no mesmo repositório, sem expor dados pessoais nem conflitar no banco.
- **Trade-off**: sem histórico das versões; o backup é do usuário.
- **Scope**: `.gitignore`, `apps/api`, `.agents/skills/cv-studio`.
- **Date**: 2026-10-09
- **Status**: active

## Handoff

_Nada pendente._
