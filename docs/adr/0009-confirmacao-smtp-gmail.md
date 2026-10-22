# 009 — Confirmação SMTP para contas pessoais Gmail

**Status**: Aceito · **Data**: 2026-10-08 · **Log**: [AD-009](../../.specs/STATE.md#ad-009)

**Contexto:** cada usuário configura sua própria conta na instalação local; salvar uma senha não confirma que o provedor aceitou o login.

**Decisão:** Gmail usa `smtp.gmail.com:465` com TLS e senha de app da própria Conta Google. **Salvar e testar** autentica antes de substituir as credenciais persistidas, sem enviar email; falhas preservam a conta anterior. A API devolve uma flag `verified` e a interface marca Gmail/custom como conectados apenas quando essa flag e a presença de senha forem verdadeiras. **Salvar** sem teste guarda configuração pendente; mudanças de conta, servidor ou senha invalidam uma confirmação anterior. Senhas em grupos de quatro são normalizadas; a senha não é devolvida ao navegador. Outlook preserva seu fluxo OAuth2.

**Consequência:** uma conta de envio por instalação local, com endereço definido pelo usuário e sem remetente fixo no código. Senha de app requer verificação em duas etapas na Conta Google. Os testes usam credenciais fictícias e SMTP simulado; não validam contas reais de usuários.
