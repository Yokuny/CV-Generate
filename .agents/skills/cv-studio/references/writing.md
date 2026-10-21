# Redação e revisão

As regras de fatos do SKILL.md valem acima de tudo aqui: só entra o que está no base ou foi confirmado pelo candidato, sem estimativas e sem marcadores como `[X%]`. Os números dos exemplos são ilustrativos.

O CV passa por duas leituras: o ATS, que procura os termos da vaga, e um recrutador técnico, que decide em segundos. Para pleno e sênior, ele precisa provar **escopo, impacto e julgamento técnico**, não listar tecnologias. Escreva em pt-BR; se a vaga for em inglês, ofereça uma versão em inglês, com os termos técnicos no original.

## Estrutura e tamanho

- Seções e formato do base (veja `system.md`), em cronologia reversa.
- **Até 3 páginas.** Não force uma página: corte por relevância, nunca reduzindo fonte ou margens.
- A página 1 é a vitrine: subtítulo, resumo, competências e o início da experiência mais recente.
- A densidade cai com o tempo: últimos 5 anos, 4 a 7 bullets por cargo; de 5 a 10 anos, 2 a 4; mais de 10 anos, 1 ou 2. Corte bullets, nunca o cargo.
- Sem foto, endereço completo, documentos, estado civil ou idade. Se o base tiver algum desses dados, sugira tirar.

## Resumo profissional

3 a 5 frases: **quem é + especialidade + prova (1 ou 2 resultados do base) + o que busca**, focado no que a vaga pede. Sem adjetivos vazios ("dinâmico", "proativo"), sem terceira pessoa e sem copiar os bullets.

## Competências técnicas

- Tabela `Área | Tecnologias`, com categorias como Linguagens, Frameworks, Dados, Cloud e DevOps, Observabilidade e Práticas.
- Ordene pela vaga e retire o irrelevante. Não acrescente tecnologia que não esteja no base ou não tenha sido confirmada.
- Sem barras, estrelas ou porcentagens de nível. Soft skills aparecem nos bullets (mentoria, alinhamento entre times), não numa lista.
- Ferramentas de IA só com uso concreto (testes, refatoração, produtividade do time).

## Bullets

Fórmula: **verbo de ação + o que foi feito + tecnologia + escala ou contexto + resultado**. Varie a ordem (resultado + como; problema + ação + resultado; decisão + motivo + efeito) para não soar mecânico.

| Fraco | Forte |
| --- | --- |
| Responsável pelo backend de pedidos | Arquitetei o serviço de pedidos em Node.js e TypeScript com mensageria RabbitMQ, desacoplando o processamento assíncrono |
| Trabalhei com observabilidade | Instrumentei os microsserviços com OpenTelemetry e métricas em Prometheus/Grafana para rastrear latência entre serviços |
| Participei da migração para microsserviços | Liderei a extração de 6 serviços do monólito, reduzindo o deploy de 2 h para 10 min |

- Resultado vale mais que tarefa: se só há tarefa, pergunte "o que mudou?".
- Números só da fonte, com a base de comparação quando ela existir ("de X para Y"). Sem número, descreva escopo real: "em produção", "multi-tenant", "usado por 4 times".
- Se um bullet importante para a vaga não tem número nem escopo, pergunte ao candidato na rodada única de perguntas.
- Uma ideia por bullet, até 2 linhas, no passado ("Desenvolvi", "Implementei"), como no base.
- Não comece com "Responsável por", "Participei de", "Atuei em", "Auxiliei". Diga o papel exato, sem inflar nem diminuir.
- Distribua a stack pelos bullets em que foi usada. Não repita o mesmo verbo ou a mesma tecnologia em todos.

Verbos:

- **Construir:** desenvolvi, implementei, construí, arquitetei, projetei, publiquei, entreguei.
- **Melhorar e escalar:** otimizei, reduzi, acelerei, refatorei, migrei, escalei, padronizei.
- **Confiabilidade:** monitorei, instrumentei, automatizei, protegi, investiguei, identifiquei a causa raiz.
- **Influência:** conduzi, coordenei, revisei, documentei (RFC/ADR), orientei, mentorei.

Use "liderei" ou "gerenciei" apenas se o base mostrar liderança.

## O que procurar por área

Use para achar evidências no base e decidir o que perguntar.

| Área | Métricas e sinais |
| --- | --- |
| Backend | latência (p95/p99), req/s, disponibilidade, taxa de erro, mensageria, idempotência |
| Frontend | Core Web Vitals, tamanho do bundle, conversão, acessibilidade, design system |
| Fullstack | onde está o peso (back ou front) e entrega ponta a ponta |
| Mobile | crash-free rate, tempo de inicialização, nota na loja, publicação nas lojas |
| Dados e ML | volume, latência de pipeline, modelo em produção e impacto de negócio |
| DevOps, SRE, plataforma | DORA (frequência de deploy, lead time, MTTR, taxa de falha), custo de cloud, SLO |
| QA | tempo de regressão, flakiness, bugs que chegaram à produção |
| Segurança | vulnerabilidades corrigidas, conformidade (LGPD, ISO 27001, SOC 2), sem expor dados do empregador |
| Staff, arquitetura | decisões e trade-offs, padrões adotados por vários times |
| Tech lead, gestão | tamanho do time, contratações, previsibilidade de entrega e 1 ou 2 bullets técnicos |

## Adaptação por vaga

| Parte | Nível de adaptação |
| --- | --- |
| Subtítulo (linha após o H1) | Alto: alinhe o título à vaga com termos comprovados |
| Resumo profissional | Alto: foco no que a vaga pede |
| Competências técnicas | Alto: reordene, inclua os itens confirmados e retire o irrelevante |
| Bullets de experiência | Médio: os mais relevantes primeiro; reescreva e corte os fracos para a vaga |
| Cargos, empresas e datas | Nenhum: copie do base |
| Formação | Baixo |

- Use o **termo exato** da vaga ("Kubernetes", não "orquestração de containers") no resumo, nas competências e nos bullets, só onde há evidência.
- Escreva a sigla por extenso na primeira ocorrência quando houver ambiguidade ("Infraestrutura como código (IaC)").
- Cubra variações comuns da vaga quando verdadeiras: Backend/Back-end, Microsserviços/Microservices, CI/CD.

## ATS

- Cabeçalhos de seção padrão (os do base), texto selecionável e links reais, visíveis como texto.
- Tabelas GFM simples são aceitas (o PDF sai de HTML com texto real); evite tabelas aninhadas ou com muitas colunas.
- Nunca esconda palavras-chave nem atribua pontuação ATS ou prometa aprovação.

## Pitch

Até 250 palavras, sem repetir o CV:

1. A vaga e por que esta empresa ou este problema.
2. Duas ou três evidências que respondem aos requisitos principais.
3. Disponibilidade para conversar.

Sem clichês ("sempre sonhei"). O formato do arquivo está no passo 7 do SKILL.md.

## Revisão

Comece por um diagnóstico com os **3 a 5 problemas de maior impacto**, em ordem, cada um com a reescrita no formato `Fraco:` / `Melhor:` e o porquê em uma frase. Procure:

- tarefas em vez de resultados; falta de escopo (time, escala);
- stack despejada sem contexto ou com tecnologias que o candidato não defenderia em entrevista;
- resumo genérico ou que repete o título;
- cargo atual mais fraco que os antigos, ou conteúdo antigo em espaço nobre;
- métricas diferentes da fonte, projeto apresentado como emprego;
- datas fora de `Mmm/AAAA`, separador diferente de ` – `, cargo fora de `### Cargo — Empresa`, falta da linha `**Stack:**`, tempo verbal inconsistente;
- frases longas ou repetidas, HTML, emoji ou estilo inline.

Checklist final:

- [ ] O resumo responde à vaga e os termos dela aparecem só onde há evidência; as lacunas estão no relatório.
- [ ] Nenhum fato, número ou tecnologia novo; cronologia reversa preservada.
- [ ] `pnpm cv check` e `pnpm cv pdf --check` sem erros nem avisos; até 3 páginas.
