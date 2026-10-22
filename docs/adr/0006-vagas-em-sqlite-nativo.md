# 006 — Vagas em SQLite nativo

**Status**: Aceito · **Data**: 2026-10-08 · **Log**: [AD-006](../../.specs/STATE.md#ad-006)

**Contexto:** registrar vagas, recrutadoras e envios sem depender de um banco rodando.

**Decisão:** `node:sqlite` (Node 24+) em `data/cv-studio.db`, com migrações por `PRAGMA user_version` e journal DELETE para o arquivo ficar íntegro e único (copiável como backup). Tabelas `jobs` e `emails` (histórico, inclusive falhas). Exportação/importação CSV (UTF-8 com BOM, cabeçalho em `jobCsvColumns`) para planilhas e backup. Testes e2e usam `CV_STUDIO_DATA_DIR` para não tocar no banco real.

**Consequência:** o banco é binário (sem diff legível; use o CSV para revisar). Era versionado; desde a AD-012 fica fora do Git, porque contém emails de recrutadoras e é de cada usuário.
