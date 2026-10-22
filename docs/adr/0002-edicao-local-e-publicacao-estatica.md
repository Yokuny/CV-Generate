# 002 — Edição local e publicação estática

**Status**: Aceito · **Data**: 2026-10-07 · **Log**: [AD-002](../../.specs/STATE.md#ad-002)

**Contexto:** uma SPA hospedada não grava diretamente no checkout do Git.

**Decisão:** uma API local (originalmente plugin Vite; desde a AD-005, Express em `apps/api`) fornece GET/POST/DELETE. Escrita valida slug, conteúdo e tokens, restringe origem/Host, rejeita links simbólicos e verifica revisão SHA-256 antes de sobrescrever. No modo local, aba = arquivo: criar uma versão grava o trio e as edições têm autosave (~0,8 s). A API observa `content/cv` e avisa a UI (antes pelo evento HMR `cv-studio:changed`, hoje por SSE em `/api/events`); a UI relê os arquivos e mescla (`mergeDisk`): abas limpas seguem o disco, arquivos novos abrem abas e arquivos removidos as fecham. Uma edição pendente sobre arquivo alterado vira conflito, com autosave pausado. O localStorage guarda só o que ainda não foi gravado. Em build estático, o usuário baixa os arquivos e os coloca no repositório.

**Consequência:** não precisa de credenciais GitHub. A UI não faz commit/push. `content` fica fora do scan do Tailwind, que de outra forma recarregaria a página a cada gravação. Cada arquivo tem rename atômico; os três não formam uma transação conjunta se o processo falhar.
