# Auditoria de Categorização — Deck das 43 Estruturas Libertadoras

Gerado como parte da migração da taxonomia principal do Deck/Matchmaker (ver `src/data/elCategories.ts`).

## Metodologia

- A categoria legada de cada EL (`category`, ainda usada pelo Quiz) foi mapeada de forma determinística
  para a nova taxonomia principal (`categories: ELCategory[]`), reaproveitando a classificação já
  existente no projeto em vez de inventar associações novas por carta.
- Mapeamento base: `Gerar Ideias & Inovação → REVELAR_GERAR_MELHORAR`, `Revelar & Diagnosticar → ANALISAR_DIAGNOSTICAR_REFLETIR`,
  `Estratégia & Propósito → DESENVOLVER_ESTRATEGIAS`, `Colaboração & Ajuda → DAR_PEDIR_AJUDA`,
  `Ação & Convergência → PLANEJAR`, `Conectar & Aquecer → COMPARTILHAR_DISSEMINAR` (tag complementar preservada).
- Exceções manuais (categoria adicional), aplicadas por instrução explícita e evidência textual já
  cadastrada na EL:
  - **#05 15% Solutions**: adicionada `REVELAR_GERAR_MELHORAR`.
  - **#06 Troika Consulting**: adicionada `REVELAR_GERAR_MELHORAR` (o output já descreve "soluções inovadoras").
- Nenhuma EL ficou sem categoria; portanto `needsCategoryReview = false` em todas as 43 (a classificação
  legada já documentada no projeto foi considerada fonte suficiente). Recomenda-se uma auditoria futura
  mais granular comparando com a documentação oficial do Matchmaker de liberatingstructures.com.

Legenda de categorias:
`PLANEJAR` · `DAR_PEDIR_AJUDA` · `ANALISAR_DIAGNOSTICAR_REFLETIR` · `REVELAR_GERAR_MELHORAR` · `COMPARTILHAR_DISSEMINAR` · `DESENVOLVER_ESTRATEGIAS`

## Tabela de Auditoria

| Nº | Nome da EL | Coleção | Categorias | Tags | needsCategoryReview |
|----|------------|---------|------------|------|----------------------|
| 01 | 1-2-4-All | Clássica | REVELAR_GERAR_MELHORAR | — | false |
| 02 | Impromptu Networking | Clássica | COMPARTILHAR_DISSEMINAR | conectar, aquecer, abertura | false |
| 03 | 9 Whys | Clássica | DESENVOLVER_ESTRATEGIAS | — | false |
| 04 | Wicked Questions | Clássica | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 05 | 15% Solutions | Clássica | PLANEJAR, REVELAR_GERAR_MELHORAR | — | false |
| 06 | Troika Consulting | Clássica | DAR_PEDIR_AJUDA, REVELAR_GERAR_MELHORAR | — | false |
| 07 | Wise Crowds | Clássica | DAR_PEDIR_AJUDA | — | false |
| 08 | TRIZ | Clássica | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 09 | Discovery & Action Dialogue (DAD) | Clássica | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 10 | Shift & Share | Clássica | PLANEJAR | — | false |
| 11 | What, So What, Now What? (W3) | Clássica | PLANEJAR | — | false |
| 12 | Ecocycle Planning | Clássica | DESENVOLVER_ESTRATEGIAS | — | false |
| 13 | 25/10 Crowdsourcing | Clássica | REVELAR_GERAR_MELHORAR | — | false |
| 14 | Conversation Café | Clássica | DAR_PEDIR_AJUDA | — | false |
| 15 | User Experience Fishbowl | Clássica | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 16 | Appreciative Interviews | Clássica | COMPARTILHAR_DISSEMINAR | conectar, aquecer | false |
| 17 | Social Network Webbing | Clássica | DESENVOLVER_ESTRATEGIAS | — | false |
| 18 | Helping Heuristics | Clássica | DAR_PEDIR_AJUDA | — | false |
| 19 | Min Specs | Clássica | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 20 | Improv Prototyping | Clássica | REVELAR_GERAR_MELHORAR | — | false |
| 21 | Design Storyboards | Clássica | PLANEJAR | — | false |
| 22 | Celebrity Interview | Clássica | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 23 | Heard, Seen, Respected (HSR) | Clássica | DAR_PEDIR_AJUDA | — | false |
| 24 | Drawing Together | Clássica | REVELAR_GERAR_MELHORAR | — | false |
| 25 | 5 Design Elements (Carta Especial) | Clássica | DESENVOLVER_ESTRATEGIAS | — | false |
| 26 | Generative Relationships STAR | Clássica | DAR_PEDIR_AJUDA | — | false |
| 27 | Agreement-Certainty Matrix | Clássica | DESENVOLVER_ESTRATEGIAS | — | false |
| 28 | Simple Ethnography | Clássica | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 29 | Integrated~Autonomy | Clássica | PLANEJAR | — | false |
| 30 | What I Need From You (WINFY) | Clássica | DAR_PEDIR_AJUDA | — | false |
| 31 | Open Space Technology | Clássica | REVELAR_GERAR_MELHORAR | — | false |
| 32 | Critical Uncertainties | Clássica | DESENVOLVER_ESTRATEGIAS | — | false |
| 33 | Purpose to Practice (P2P) | Clássica | DESENVOLVER_ESTRATEGIAS | — | false |
| 34 | Mad Tea \| Calm Tea | Fieldbook | COMPARTILHAR_DISSEMINAR | conectar, aquecer, abertura | false |
| 35 | Spiral Journal | Fieldbook | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 36 | Folding Spectrogram | Fieldbook | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 37 | Positive Gossip | Fieldbook | COMPARTILHAR_DISSEMINAR | conectar, aquecer | false |
| 38 | Principles Walk-Around | Fieldbook | DESENVOLVER_ESTRATEGIAS | — | false |
| 39 | Network Relationship Patterns | Fieldbook | DAR_PEDIR_AJUDA | — | false |
| 40 | Grief Walking | Fieldbook | DAR_PEDIR_AJUDA | — | false |
| 41 | Future~Present | Fieldbook | DESENVOLVER_ESTRATEGIAS | — | false |
| 42 | Talking with Pixies | Fieldbook | ANALISAR_DIAGNOSTICAR_REFLETIR | — | false |
| 43 | Strategy Knotworking | Fieldbook | DESENVOLVER_ESTRATEGIAS | — | false |

## Totais

- **Total de ELs:** 43 (33 Clássicas + 10 Fieldbook) ✅
- **PLANEJAR:** 5 (#05, #10, #11, #21, #29)
- **DAR_PEDIR_AJUDA:** 9 (#06, #07, #14, #18, #23, #26, #30, #39, #40)
- **ANALISAR_DIAGNOSTICAR_REFLETIR:** 10 (#04, #08, #09, #15, #19, #22, #28, #35, #36, #42)
- **REVELAR_GERAR_MELHORAR:** 7 (#01, #05, #06, #13, #20, #24, #31)
- **COMPARTILHAR_DISSEMINAR:** 4 (#02, #16, #34, #37)
- **DESENVOLVER_ESTRATEGIAS:** 10 (#03, #12, #17, #25, #27, #32, #33, #38, #41, #43)

A soma das categorias acima é 45 (não 43) porque duas ELs pertencem a mais de uma categoria
(#05 e #06), o que é esperado e não representa erro/duplicidade.

## ELs em múltiplas categorias

- **#05 15% Solutions** → PLANEJAR + REVELAR_GERAR_MELHORAR
- **#06 Troika Consulting** → DAR_PEDIR_AJUDA + REVELAR_GERAR_MELHORAR

## ELs marcadas para revisão humana (needsCategoryReview = true)

Nenhuma. Todas as 43 ELs possuem categorização derivada da classificação já documentada no projeto.
