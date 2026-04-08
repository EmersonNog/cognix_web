export type OverviewStat = {
  label: string
  value: string
}

export type OverviewPlanFocus = {
  label: string
  description: string
  active?: boolean
}

export type OverviewRecommendation = {
  title: string
  badge: string
  description: string
  helper: string
}

export type OverviewTrainingAreaStatus = 'inProgress' | 'completed' | 'resume'

export type OverviewTrainingArea = {
  title: string
  subtitle: string
  totalLabel: string
  tone: 'violet' | 'mint' | 'amber' | 'sky'
  status: OverviewTrainingAreaStatus
}

export type OverviewPerformanceMetric = {
  label: string
  value: string
  helper: string
  tone: 'violet' | 'mint' | 'amber' | 'sky'
}

export type OverviewDisciplineShare = {
  label: string
  share: number
  tone: 'violet' | 'mint' | 'amber' | 'sky'
}

export type OverviewSupportTopic = {
  title: string
  description: string
  tone: 'violet' | 'mint' | 'amber' | 'sky'
}

export type OverviewSectionModel = {
  eyebrow: string
  title: string
  description: string
  summary: {
    label: string
    title: string
    description: string
    bullets: string[]
  }
  plan: {
    label: string
    title: string
    description: string
    completionPercent: number
    completionLabel: string
    insight: string
    stats: OverviewStat[]
    focusModes: OverviewPlanFocus[]
    priorities: string[]
  }
  streak: {
    label: string
    title: string
    value: string
    unit: string
    badge: string
    description: string
    recentActivity: boolean[]
  }
  recommendations: {
    label: string
    title: string
    subtitle: string
    items: OverviewRecommendation[]
  }
  training: {
    label: string
    title: string
    description: string
    rhythmBadge: string
    rhythmSubtitle: string
    completedLabel: string
    areas: OverviewTrainingArea[]
  }
  performance: {
    label: string
    title: string
    description: string
    metrics: OverviewPerformanceMetric[]
    disciplines: OverviewDisciplineShare[]
    narrative: string
  }
  support: {
    label: string
    title: string
    description: string
    topics: OverviewSupportTopic[]
  }
}

export const overviewSectionModel: OverviewSectionModel = {
  eyebrow: 'Otimize seu tempo de estudo',
  title: 'Planejamento, treino e analise no mesmo fluxo.',
  description:
    'Em vez de abrir o app inteiro na landing, a section resume o essencial: o Cognix monta a semana, sugere o proximo treino e traduz desempenho em decisao.',
  summary: {
    label: 'Fluxo real do app',
    title: 'Tudo gira em torno de uma rotina guiada por dados.',
    description:
      'No Cognix, o usuario monta o plano da semana, protege a sequencia diaria, recebe recomendacoes recalculadas, escolhe a frente de treino e entende o que o desempenho esta pedindo em seguida.',
    bullets: [
      'Plano semanal com dias ativos, minutos, meta de questoes e prioridades.',
      'Sequencia de estudo baseada em atividade real no dia.',
      'Recomendacoes que combinam cobertura, prioridade e desempenho recente.',
      'Treino por areas, leitura de indicadores e suporte organizado.',
    ],
  },
  plan: {
    label: 'Plano da semana',
    title: 'O estudo comeca com uma meta clara e ajustavel.',
    description:
      'O app permite configurar frequencia, carga diaria, periodo preferido, meta de questoes e o foco que deve puxar a semana.',
    completionPercent: 72,
    completionLabel: '72% da meta semanal atingida',
    insight:
      'Faltam 2 dias ativos para bater a frequencia e 32 questoes para fechar a meta da semana.',
    stats: [
      { label: 'Dias ativos', value: '3/5' },
      { label: 'Minutos', value: '288/400' },
      { label: 'Questoes', value: '88/120' },
    ],
    focusModes: [
      {
        label: 'Constancia',
        description: 'Valoriza dias ativos e rotina consistente.',
      },
      {
        label: 'Revisao',
        description: 'Puxa mais peso para consolidacao e carga acumulada.',
      },
      {
        label: 'Desempenho',
        description: 'Da mais destaque ao volume e ao acerto recente.',
        active: true,
      },
    ],
    priorities: ['Matematica', 'Fisica', 'Biologia', 'Linguagens'],
  },
  streak: {
    label: 'Sequencia',
    title: 'A consistencia aparece dia a dia, nao so no discurso.',
    value: '06',
    unit: 'dias seguidos',
    badge: 'ATIVA',
    description:
      'Responder questoes ou concluir um simulado protege a sequencia e ajuda a visualizar a continuidade recente.',
    recentActivity: [true, true, false, true, true, true, true],
  },
  recommendations: {
    label: 'Recomendado de hoje',
    title: 'As sugestoes usam o que acabou de acontecer no estudo.',
    subtitle:
      'O sistema cruza pontos de atencao, desempenho recente, prioridades do plano e frentes com pouca cobertura.',
    items: [
      {
        title: 'Reforcar Fisica em Natureza',
        badge: 'Atencao',
        description: 'Baixa precisao recente em uma prioridade salva no plano.',
        helper: '12 questoes recentes • 58% de acerto',
      },
      {
        title: 'Retomar Linguagens',
        badge: 'Cobertura',
        description: 'Area com pouco volume no historico atual.',
        helper: 'Presenca baixa nas ultimas semanas',
      },
    ],
  },
  training: {
    label: 'Treino por areas',
    title: 'O usuario sai do plano e entra em sessoes reais.',
    description:
      'O treino organiza a entrada por area de conhecimento, mostra o ritmo atual e permite retomar um simulado ou iniciar uma frente nova.',
    rhythmBadge: '68%',
    rhythmSubtitle: 'Ultimo simulado concluido em Matematica',
    completedLabel: '18 simulados concluidos',
    areas: [
      {
        title: 'Ciênc. da Natureza',
        subtitle: 'Fisica, Quimica e Biologia',
        totalLabel: '248 questoes',
        tone: 'mint',
        status: 'inProgress',
      },
      {
        title: 'Ciênc. Humanas',
        subtitle: 'Historia, Geografia e Sociologia',
        totalLabel: '196 questoes',
        tone: 'amber',
        status: 'resume',
      },
      {
        title: 'Linguagens',
        subtitle: 'Portugues, Ingles e Artes',
        totalLabel: '172 questoes',
        tone: 'sky',
        status: 'resume',
      },
      {
        title: 'Matematica',
        subtitle: 'Algebra, Geometria e Estatistica',
        totalLabel: '214 questoes',
        tone: 'violet',
        status: 'completed',
      },
    ],
  },
  performance: {
    label: 'Painel de desempenho',
    title: 'A leitura vai alem do numero bruto de acertos.',
    description:
      'O painel cruza intensidade, distribuicao, cobertura, tempo e pontos de atencao para explicar o momento atual do estudo.',
    metrics: [
      {
        label: 'Pontos de atencao',
        value: '03',
        helper: 'Frentes abaixo do limiar de acerto.',
        tone: 'violet',
      },
      {
        label: 'Maior acerto',
        value: '81%',
        helper: 'Biologia com base recente suficiente.',
        tone: 'mint',
      },
      {
        label: 'Tempo por simulado',
        value: '18 min',
        helper: 'Media sobre sessoes concluidas.',
        tone: 'amber',
      },
      {
        label: 'Media semanal',
        value: '27.4',
        helper: 'Questoes respondidas por semana.',
        tone: 'sky',
      },
    ],
    disciplines: [
      { label: 'Matematica', share: 0.34, tone: 'violet' },
      { label: 'Natureza', share: 0.26, tone: 'mint' },
      { label: 'Linguagens', share: 0.22, tone: 'sky' },
      { label: 'Humanas', share: 0.18, tone: 'amber' },
    ],
    narrative:
      'O historico ja mostra tracao em Matematica, mas o painel ainda sinaliza espaco para equilibrar cobertura e revisar frentes mais sensiveis antes de acelerar o volume.',
  },
  support: {
    label: 'Conta e suporte',
    title: 'Seguranca, ajuda e configuracoes fazem parte do produto.',
    description:
      'A area de suporte explica como recuperar acesso, ajustar metas, entender recomendacoes e navegar pelo painel de desempenho sem friccao.',
    topics: [
      {
        title: 'Segurança',
        description: 'Senha, exclusao da conta e protecao de acesso.',
        tone: 'violet',
      },
      {
        title: 'Plano e metas',
        description: 'Ritmo semanal, volume e prioridades do planejamento.',
        tone: 'mint',
      },
      {
        title: 'Desempenho',
        description: 'Simulados, indicadores recentes e leitura do cenario.',
        tone: 'amber',
      },
    ],
  },
}
