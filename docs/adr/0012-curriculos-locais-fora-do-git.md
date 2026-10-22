# 012 — Currículos, pitches e vagas locais, fora do Git

**Status**: Aceito · **Data**: 2026-10-09 · **Log**: [AD-012](../../.specs/STATE.md#ad-012)

**Contexto:** o projeto passou a ter contribuidores e outras pessoas usando o mesmo repositório. Com `content/cv` e `data/cv-studio.db` versionados, cada clone trazia o currículo, os pitches e as vagas do mantenedor, e cada usuário commitaria os seus, com conflito garantido no banco binário e exposição de dados pessoais.

**Decisão:** `content/cv/*` (exceto `.gitkeep`) e `data/` entram no `.gitignore` e saem do índice. O repositório guarda só código, skill e documentação. Um clone novo começa vazio: `pnpm cv init [--file <md>]` cria o base a partir de `starterMarkdown` (`packages/core/src/model.ts`) ou de um Markdown do usuário, e na interface a primeira versão criada num `content/cv` vazio vira `base`. A API cria `content/cv` se faltar. A skill não faz mais commit; ganhou o fluxo "criar o base" e perdeu os fatos fixos do currículo do mantenedor, trocados por regras genéricas. `pnpm cv list` deixou de mostrar status do Git. `CV_STUDIO_CONTENT_DIR`, como `CV_STUDIO_DATA_DIR`, troca a pasta, para os testes do CLI rodarem sem os arquivos do usuário.

**Consequência:** cada pessoa usa o projeto da mesma forma, sem puxar nem subir currículos. Não há histórico das versões: fechar uma aba ou o limite de 20 pitches apaga de vez, e o backup (copiar `content/cv` e `data/cv-studio.db`, ou exportar o CSV de vagas) é do usuário. Os arquivos já commitados continuam no histórico do Git até serem reescritos. O e2e ainda usa o `content/cv` local e o currículo do mantenedor.
