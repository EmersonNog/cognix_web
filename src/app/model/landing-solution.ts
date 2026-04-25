import type {
  SolutionFeatureCard,
  SolutionPlanRow,
} from '@/app/model/landing-types'

export const solutionPlanRows: SolutionPlanRow[] = [
  {
    avatar: 'M',
    tone: 'blue',
    title: 'Matemática · Funções',
    subtitle: 'Plano atualizado hoje',
    value: '74%',
    delta: '+12%',
  },
  {
    avatar: 'R',
    tone: 'purple',
    title: 'Redação · Dissertativa',
    subtitle: '3 temas sugeridos',
    value: '68%',
    delta: '+6%',
  },
  {
    avatar: 'B',
    tone: 'green',
    title: 'Biologia · Genética',
    subtitle: 'Flashcards prontos',
    value: '82%',
    delta: '+4%',
  },
  {
    avatar: 'H',
    tone: 'amber',
    title: 'História · Brasil República',
    subtitle: 'Priorizar essa semana',
    value: '52%',
  },
]

export const solutionFeatureCards: SolutionFeatureCard[] = [
  {
    icon: 'bookOpen',
    tone: 'green',
    title: 'Banco de questões',
    description:
      'Pratique por área do conhecimento e matéria, com filtros e histórico por desempenho.',
  },
  {
    icon: 'clock3',
    tone: 'amber',
    title: 'Simulados completos',
    description:
      'Teste seus conhecimentos sob cronômetro e receba análise completa por área.',
  },
  {
  icon: 'layers3',
    tone: 'blue',
    title: 'Flashcards inteligentes',
    description:
      'Revisão espaçada para fixar conteúdos sem perder tempo com o que você já domina.',
  },
]
