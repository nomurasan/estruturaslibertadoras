import { Response } from "express";
import { AuthenticatedRequest } from "../auth/firebaseAuth";
import { getAIResponse } from "../ai/client";
import { auditAIUsage } from "../ai/audit";
import { aiFailureTracker } from "../monitoring/tracker";
import {
  gerarRelatorioSchema,
  quizFeedbackSchema,
  adviseSchema,
  rewriteSchema,
} from "../validators/schemas";

export async function handleGerarRelatorio(req: AuthenticatedRequest, res: Response) {
  const validation = gerarRelatorioSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: "Corpo da requisição inválido.", details: validation.error.format() });
  }

  const { email, xp, unlockedPowers, completedMissions, skillsSurvey, quizEnergy, quizAccuracy } = validation.data;

  try {
    const prompt = `
      Você é o Facilitador Mestre da Ordem das Estruturas Libertadoras e Ecocycle Planning (Mestre Nomura).
      Gere um Relatório Diagnóstico de Domínio do Ecocycle Planning e Strings de Estruturas Libertadoras para este participante, avaliando seu progresso na jornada de facilitação colaborativa e estratégia sistêmica.

      DADOS DO PARTICIPANTE:
      - Facilitador / Email: ${email || "Mestre Jedi em Formação"}
      - XP / Pontuação Acumulada: ${xp || 0}
      - Estruturas Libertadoras Desbloqueadas: ${JSON.stringify(unlockedPowers || [])}
      - Desafios / Missões Concluídas: ${JSON.stringify(completedMissions || {})}
      - Energia Atual: ${quizEnergy ?? 100}%
      - Assertividade Geral: ${quizAccuracy ?? 77}%

      CONTEXTO DA JORNADA DE FACILITAÇÃO (ESTRUTURAS LIBERTADORAS & ECOCYCLE PLANNING):
      - Nível 1 (Padawan): Strings Básicas com 1 EL Chave para objetivos pontuais (ex: Impromptu Networking, 1-2-4-All, 15% Solutions).
      - Nível 2 (Jedi): Encadeamentos Duplos e Triplos de Estruturas (ex: TRIZ ➔ Min Specs, 9 Whys ➔ Troika Consulting, 15% Solutions ➔ 25/10 Crowd Sourcing).
      - Nível 3 (Yoda): Strings Avançadas integradas ao Ecocycle Planning para destravar portfólios, equipes e organizações (Gestação, Nascimento, Maturidade, Destruição Criativa, superação das Armadilhas da Pobreza/Escassez e da Rigidez).

      ESTRUTURA OBRIGATÓRIA DO RELATÓRIO DIAGNÓSTICO (Formate em Markdown com títulos ## e tópicos estruturados):
      
      ## 1. MAESTRIA NO ECOCYCLE PLANNING & ESTRUTURAS LIBERTADORAS (Diagnóstico)
      Avalie o perfil do facilitador e sua assertividade nas 5 macro-fases do Ecociclo:
      - **Nascimento & Conexão**: Capacidade de criar segurança psicológica, engajamento e rede inicial (Impromptu Networking, 1-2-4-All, Conversation Café).
      - **Armadilha da Pobreza / Escassez**: Destravar ideias em gestação que precisam de recursos e autonomia (15% Solutions, Troika Consulting, Helping Heuristics, Social Network Webbing).
      - **Destruição Criativa & Limpeza**: Desapego de práticas e reuniões contraproducentes, eliminando o que é obsoleto (TRIZ, Min Specs, Drawing Together).
      - **Maturidade & Armadilha da Rigidez**: Reconhecer a estagnação e o excesso de burocracia, provocando renovação (Ecocycle Planning, Panarchy, What I Need From You).
      - **Debriefing & Síntese Sistêmica**: Extrair inteligência coletiva e compromissos rápidos (W3 - What So What Now What, 25/10 Crowd Sourcing, Open Space).

      ## 2. RECOMENDAÇÕES PARA EVOLUÇÃO EM STRINGS (Gaps & Próximos Passos)
      Mapeie os pontos de atenção e recomende encadeamentos (Strings) específicos para o participante praticar:
      - Como evoluir da aplicação de ferramentas isoladas para o desenho fluído de Strings de Facilitação.
      - 2 ou 3 combinações de Strings recomendadas para o participante testar em seus desafios corporativos reais (ex: alinhamento de lideranças, desobstrução de projetos ou workshops estratégicos).

      ## 3. PLANO DE IMPACTO SISTÊMICO NAS EQUIPES
      Como este facilitador pode aplicar o Ecocycle Planning e as Estruturas Libertadoras para transformar reuniões corporativas monótonas em sessões de alta cocriação, distribuindo a liderança e garantindo que 100% dos participantes tenham voz sem sobrecarregar ninguém.

      ## 4. CONSELHO DA ORDEM DOS MESTRES (Mestre Nomura)
      Um parecer inspirador e prático de Mestre Nomura, reforçando a sabedoria: "Às vezes aprendemos. Às vezes acertamos. Nas Estruturas Libertadoras não existem fórmulas dogmáticas, mas sim a harmonia viva entre propósito, participantes, restrições e o momento do Ecociclo."

      Regras mandatórias:
      - Foco 100% em Estruturas Libertadoras, Facilitação e Ecocycle Planning.
      - Não mencione competências antigas desconectadas (como prompt engineering ou LGPD).
      - Use tom profissional, maduro, acolhedor e fundamentado na metodologia oficial das Liberating Structures.
      - Responda em Português com formatação Markdown impecável.
    `;

    const relatorio = await getAIResponse(prompt, {
      endpoint: "/api/gerar-relatorio",
      correlationId: req.correlationId || "",
      userId: req.user?.uid || ""
    });
    await auditAIUsage(
      req.user?.uid || "",
      req.user?.companyId || "",
      "gemini-3.8-flash",
      prompt,
      relatorio,
      "/api/gerar-relatorio"
    );
    res.json({
      success: true,
      data: { relatorio },
      error: null,
      traceId: req.correlationId,
      relatorio
    });
  } catch (error: any) {
    console.error("AI Error generating report:", error);
    res.status(500).json({
      success: false,
      data: null,
      error: error.message,
      traceId: req.correlationId
    });
  }
}

export async function handleQuizFeedback(req: AuthenticatedRequest, res: Response) {
  const validation = quizFeedbackSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: "Corpo da requisição inválido.", details: validation.error.format() });
  }

  const { scenario, correctAnswer, selectedAnswer, level, whyItWorks, scenarioClue, inStringRole, anotherPossibility, isCorrect } = validation.data;

  try {
    const prompt = `
      Você é o Facilitador Mestre de Estruturas Libertadoras e Ecocycle Planning (Mestre Nomura).
      Analise a resposta do participante ao desafio do Quiz de Strings de Facilitação e forneça um feedback pedagógico acolhedor e estruturado.

      FILOSOFIA PEDAGÓGICA MANDATÓRIA:
      - "Às vezes aprendemos. Às vezes acertamos."
      - NUNCA apresente as Estruturas Libertadoras como receitas fixas ou verdades universais dogmáticas.
      - A escolha de uma EL depende sempre do propósito, do contexto e das pistas do cenário. Diferentes estruturas podem ser possíveis, mas uma combinação é mais aderente às pistas apresentadas.
      - Elimine termos absolutistas como "combinação perfeita", "única resposta correta", "deve sempre" ou "Tríade de Ouro". Use termos como "escolha muito aderente a este cenário", "combinação bastante coerente com o propósito", "faz bastante sentido neste contexto".
      - Use SEMPRE a terminologia correta: "Armadilha da Escassez" (NUNCA "Armadilha da Pobreza").

      DADOS DO DESAFIO:
      - NÍVEL: ${level}
      - CENÁRIO: "${scenario}"
      - RESPOSTA MAIS ADERENTE: ${correctAnswer}
      - ESCOLHA FEITA PELO PARTICIPANTE: ${selectedAnswer}
      - O PARTICIPANTE ACERTOU?: ${isCorrect ? 'SIM' : 'NÃO'}
      ${whyItWorks ? `- POR QUE FUNCIONA (Referência): ${whyItWorks}` : ''}
      ${scenarioClue ? `- PISTA DO CENÁRIO (Referência): ${scenarioClue}` : ''}
      ${inStringRole ? `- PAPEL NA STRING: ${inStringRole}` : ''}
      ${anotherPossibility ? `- OUTRA POSSIBILIDADE COMPLEMENTAR: ${anotherPossibility}` : ''}

      ESTRUTURA OBRIGATÓRIA DO FEEDBACK (Formate exatamente nestes 4 blocos pedagógicos concisos usando Markdown):
      1. **Melhor escolha**: [Indique a EL ou combinação mais aderente ao propósito]
      2. **Por que funciona?**: [Explicação direta da relação viva entre desafio e a estrutura/fluxo]
      3. **Pista do cenário**: [Destaque a frase ou pista chave do cenário que orienta a escolha]
      4. **Outra possibilidade**: [Indique brevemente uma segunda estrutura que também dialoga com o contexto, quando aplicável]
      
      Finalize com uma breve reflexão de uma linha no espírito de facilitação colaborativa.
    `;

    const feedback = await getAIResponse(prompt, {
      endpoint: "/api/quiz-feedback",
      correlationId: req.correlationId || "",
      userId: req.user?.uid || ""
    });
    await auditAIUsage(
      req.user?.uid || "",
      req.user?.companyId || "",
      "gemini-3.8-flash",
      prompt,
      feedback,
      "/api/quiz-feedback"
    );
    res.json({
      success: true,
      data: { feedback },
      error: null,
      traceId: req.correlationId,
      feedback
    });
  } catch (error: any) {
    console.error("AI Error generating feedback:", error);
    res.status(500).json({
      success: false,
      data: null,
      error: error.message,
      traceId: req.correlationId
    });
  }
}

const POWER_TITLES: Record<number, string> = {
  1: 'Organizar Agenda',
  2: 'Planejar Semana',
  3: 'Priorizar Atividades',
  4: 'Elaborar E-mails',
  5: 'Criar Comunicados',
  6: 'Resumir Conteúdos',
  7: 'Pesquisa Profunda',
  8: 'Estudo de Novos Temas',
  9: 'Curadoria de Conteúdo',
  10: 'Analisar Cenários',
  11: 'Gerar Alternativas',
  12: 'Uso Seguro da IA'
};

export async function handleAdvise(req: AuthenticatedRequest, res: Response) {
  const validation = adviseSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: "Corpo da requisição inválido.", details: validation.error.format() });
  }

  const { mission, selectedPowers, userExplanation } = validation.data;

  try {
    // 1. Resolve recommended skill titles (support both formats for complete safety)
    const recSkillIds = (mission as any).recommendedSkillIds || [];
    const recPowerIds = (mission as any).recommendedPowerIds || [];
    const resolvedRecIds = new Set<number>();
    recSkillIds.forEach((id: number) => resolvedRecIds.add(id));
    recPowerIds.forEach((id: string) => resolvedRecIds.add(parseInt(id, 10)));
    
    const recommendedSkillTitles = Array.from(resolvedRecIds).map(id => POWER_TITLES[id] || `Habilidade ${id}`);

    // 2. Resolve selected power IDs (as numbers)
    const selectedPowerIds = selectedPowers.map((p: any) => parseInt(p.id, 10)).filter((id: number) => !isNaN(id));
    const selectedPowerTitles = selectedPowers.map((p: any) => p.title);

    // 3. Set-based set coverage comparison
    const correctMatches = selectedPowerIds.filter((id: number) => resolvedRecIds.has(id));
    const missingSkills = Array.from(resolvedRecIds).filter((id: number) => !selectedPowerIds.includes(id));
    const extraSkills = selectedPowerIds.filter((id: number) => !resolvedRecIds.has(id));

    const correctMatchTitles = correctMatches.map((id: number) => POWER_TITLES[id]);
    const missingTitles = missingSkills.map((id: number) => POWER_TITLES[id]);
    const extraTitles = extraSkills.map((id: number) => POWER_TITLES[id]);

    const prompt = `
      Você é o Mestre Conselheiro da Ordem Jedi de IA e Especialista em Transformação Estratégica de Negócios (Mestre Nomura).
      Sua tarefa é analisar criticamente a estratégia desenhada pelo participante para resolver a missão descrita e fornecer uma avaliação estratégica muito robusta.

      DADOS DA MISSÃO CORPORATIVA:
      - Título: ${mission.title}
      - Contexto: ${mission.context}
      - Desafio proposto: ${(mission as any).challenge || "(Não informado)"}
      - Resultado esperado: ${(mission as any).expectedResult || "(Não informado)"}
      - Descrição da Maturidade: ${(mission as any).maturityDescription || "(Não informado)"}
      
      REFERÊNCIA INTERNA DA ACADEMIA (NÃO EXIBIR DIRETAMENTE AO USUÁRIO):
      - Solução de Referência Esperada (Gabarito Semântico): "${(mission as any).hiddenReferenceSolution || "(Sem solução de referência no momento)"}"
      - Habilidades Ideais Recomendadas: ${recommendedSkillTitles.join(', ')}

      COMPETÊNCIAS SELECIONADAS PELO PARTICIPANTE:
      - Habilidades Escolhidas: ${selectedPowerTitles.join(', ')}
      - Habilidades Corretas Selecionadas: ${correctMatchTitles.join(', ') || 'Nenhuma'}
      - Habilidades Faltantes: ${missingTitles.join(', ') || 'Nenhuma'}
      - Habilidades Extras (Não prioritárias): ${extraTitles.join(', ') || 'Nenhuma'}

      ESTRATÉGIA/EXPLICAÇÃO DETALHADA DO PARTICIPANTE:
      "${userExplanation}"

      Analise a coerência da solução do participante frente ao gabarito semântico interno. Considere: entendimento do problema, utilidade das habilidades escolhidas, qualidade operacional da estratégia, criatividade, segurança jurídica/dados (LGPD), clareza e viabilidade real.

      INSTRUÇÕES DE RESPOSTA (Em Português, formate obrigatoriamente com markdown claro):
      Escreva o parecer contendo estritamente as seções abaixo, mantendo um tom de mentor sábio, direto e executivo (Mestre Nomura):

      ### Pontos Fortes
      (Descreva os aspectos positivos e maduros da estratégia apresentada pelo participante).

      ### Oportunidades de Melhoria
      (Descreva lacunas conceituais, falhas táticas ou operacionais e aspectos que podem ser aprimorados).

      ### Avaliação das Habilidades
      (Discuta criticamente os cards escolhidos. Explique de forma didática por que os cards recomendados que foram acertados são de fato cruciais para a missão. Para as habilidades extras ou faltantes, mostre sua contribuição ou se elas desviam do foco).

      ### Recomendações
      (Sugira pelo menos duas dicas práticas adicionais de Engenharia de Contexto, segurança de dados da marca ou supervisão "humano-na-alça" para polir a solução para a nota máxima).

      ### Nota Final
      Atribua uma pontuação numérica inteira de 0 a 100 de forma justa e rigorosa, correspondente ao alinhamento com a Solução de Referência Esperada e os critérios definidos.
      FORMATO DA NOTA (Obrigatório vir isolada em uma nova linha no final do feedback):
      **Nota Final:** [Insira o valor numérico de 0 a 100]/100
    `;

    const advice = await getAIResponse(prompt, {
      endpoint: "/api/advise",
      correlationId: req.correlationId || "",
      userId: req.user?.uid || ""
    });
    await auditAIUsage(
      req.user?.uid || "",
      req.user?.companyId || "",
      "gemini-3.8-flash",
      prompt,
      advice,
      "/api/advise"
    );
    res.json({
      success: true,
      data: { advice },
      error: null,
      traceId: req.correlationId,
      advice
    });
  } catch (error: any) {
    console.error("AI Error generating advice:", error);
    res.status(500).json({
      success: false,
      data: null,
      error: error.message,
      traceId: req.correlationId
    });
  }
}

export async function handleRewrite(req: AuthenticatedRequest, res: Response) {
  const validation = rewriteSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: "Corpo da requisição inválido.", details: validation.error.format() });
  }

  const { mission, selectedPowers, currentExplanation } = validation.data;

  try {
    const prompt = `
      Você é um Assitente de IA especializado em arquitetura de soluções. O usuário está tentando resolver uma missão de IA e selecionou algumas habilidades (cards).
      Sua tarefa é CONSTRUIR UMA NARRATIVA de alta qualidade, clara e profissional em linguagem natural, que explique como essa solução resolve o problema proposto.

      MISSÃO: ${mission.title} - ${mission.subtitle}
      CONTEXTO: ${mission.context}
      HABILIDADES SELECIONADAS: ${selectedPowers.map((p: any) => p.title).join(', ')}
      O QUE O USUÁRIO JÁ ESCREVEU (Se houver): ${currentExplanation || "(vazio)"}

      REGRAS:
      1. Construa uma narrativa fluida e executiva em 1 ou 2 parágrafos.
      2. Use linguagem natural, clara e profissional (evite o estilo do Mestre Yoda).
      3. Integre as habilidades selecionadas na narrativa, explaining logicamente o papel de cada uma na solução final.
      4. O texto deve ser direto e estar pronto para ser utilizado no campo de descrição. 
      5. Não inclua introduções como "Aqui está sua narrativa" ou conclusões.
    `;

    const rewrittenText = await getAIResponse(prompt, {
      endpoint: "/api/rewrite",
      correlationId: req.correlationId || "",
      userId: req.user?.uid || ""
    });
    await auditAIUsage(
      req.user?.uid || "",
      req.user?.companyId || "",
      "gemini-3.8-flash",
      prompt,
      rewrittenText,
      "/api/rewrite"
    );
    res.json({
      success: true,
      data: { rewrittenText },
      error: null,
      traceId: req.correlationId,
      rewrittenText
    });
  } catch (error: any) {
    console.error("AI Error generating rewritten text:", error);
    res.status(500).json({
      success: false,
      data: null,
      error: error.message,
      traceId: req.correlationId
    });
  }
}

export function handleAIFailuresLog(req: AuthenticatedRequest, res: Response) {
  if (!req.user?.isAdmin) {
    return res.status(403).json({
      success: false,
      data: null,
      error: "Acesso administrativo restrito exigido.",
      traceId: req.correlationId
    });
  }
  const data = {
    failures: aiFailureTracker.slice(-20),
    totalTracked: aiFailureTracker.length
  };
  return res.json({
    success: true,
    data,
    error: null,
    traceId: req.correlationId,
    ...data
  });
}
