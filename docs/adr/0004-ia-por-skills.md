# 004 — IA por skills

**Status**: Aceito · **Data**: 2026-10-07 · **Log**: [AD-004](../../.specs/STATE.md#ad-004)

**Contexto:** adaptação por vaga será feita com IA.

**Decisão:** uma skill do projeto, `cv-studio` (`.agents/skills`, com symlink em `.claude/skills`), substitui `cv-tailor`, `cv-review` e o pacote genérico `cv-resume-builder`, que contradizia as regras do projeto (estimar números, evitar tabelas). A skill usa o CLI `pnpm cv` (`list`, `new`, `check`), que compartilha `apps/api/src/repository.ts` com a API, e, até a AD-012, fazia commit apenas dos arquivos da versão (`cv(<slug>): …`), sem push. A interface não possui aba Vaga, não gera prompts e não chama modelos nem exige chaves.

**Consequência:** fatos continuam sob revisão do candidato. Cada adaptação virava um commit isolado; a AD-012 retirou os commits.
