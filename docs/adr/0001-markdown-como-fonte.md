# 001 — Markdown como fonte

**Status**: Aceito · **Data**: 2026-10-07 · **Log**: [AD-001](../../.specs/STATE.md#ad-001)

**Contexto:** manter fatos profissionais em arquivos de texto e permitir personalização por IA.

**Decisão:** Markdown GFM em `content/cv`, renderizado por `react-markdown` sem HTML bruto. Um arquivo por variante, com base preservada. JSON separado guarda layout e nome da versão.

**Consequência:** conteúdo não é duplicado em JSX. O build estático precisa ser reconstruído após alterações. Desde a AD-012, os arquivos são locais e não têm histórico no Git.
