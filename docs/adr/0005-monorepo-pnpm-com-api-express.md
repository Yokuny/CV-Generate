# 005 — Monorepo pnpm com API Express

**Status**: Aceito · **Data**: 2026-10-08 · **Log**: [AD-005](../../.specs/STATE.md#ad-005)

**Contexto:** enviar candidaturas por email exige um servidor que guarde credenciais, gere PDF e fale SMTP; o plugin Vite só servia aos arquivos de currículo.

**Decisão:** monorepo pnpm com `apps/web` (Vite), `apps/api` (Express) e `packages/core` (modelo e regras sem dependências de Node). Toda a API sai do Vite: `/api/resumes` mantém a semântica (fila serializada, revisão SHA-256, 409, Host/Origin locais) e o aviso de mudanças externas passa a ser SSE (`/api/events`, `fs.watch`). No dev, o Vite carrega a API pelo SSR em `/api`, na mesma origem e porta da UI (sem segundo processo nem proxy), recriando-a quando o código da API ou do core muda, e mantém um plugin mínimo que impede o reload pelo glob de `content/cv`. `content/` e `data/` ficam na raiz, compartilhados por API, CLI e skill.

**Consequência:** `pnpm run dev` sobe um único processo em http://localhost:5173. O `vite preview` não tem API, então o build estático continua sem gravação.
