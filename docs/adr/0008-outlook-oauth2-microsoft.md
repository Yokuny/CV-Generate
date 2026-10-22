# 008 — Conexão Outlook com OAuth2 Microsoft

**Status**: Aceito · **Data**: 2026-10-08 · **Log**: [AD-008](../../.specs/STATE.md#ad-008)

**Contexto:** o servidor Outlook recusou autenticação SMTP por senha de aplicativo. Outlook.com exige autenticação moderna.

**Decisão:** fluxo OAuth2 de código de dispositivo, com aplicativo próprio registrado na Microsoft (contas pessoais e fluxos de cliente público habilitados), autoridade `consumers` e escopos `https://outlook.office.com/SMTP.Send offline_access`. A API conserva o device code em memória e devolve à UI apenas o código do usuário, URL Microsoft e ID de sessão local. O polling respeita intervalo, `slow_down`, expiração e cancelamento. Antes de substituir a conta anterior, confirma SMTP XOAUTH2 com TLS. Tokens são opacos; não são decodificados. Access/refresh tokens são persistidos em arquivo 0600 com substituição atômica e renovados antes de expirar; a rotação é serializada com conexão/desconexão. A UI recebe somente campos públicos e flags de credencial. Credenciais antigas Outlook por senha exigem novo login. Gmail/custom SMTP preservam o fluxo de senha de app.

**Consequência:** conectar Outlook exige registrar o aplicativo uma vez e autorizar a conta na página Microsoft. Não exige segredo de cliente nem redirect URI. A confirmação SMTP não envia email. O consentimento pode ser revogado na conta Microsoft; desconectar no CV Studio apaga somente as credenciais locais. Testes simulam Microsoft e SMTP, sem contas reais.
