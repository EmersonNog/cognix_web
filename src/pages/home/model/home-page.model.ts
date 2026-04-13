import type { ISourceOptions } from '@tsparticles/engine'
import type { CSSProperties } from 'react'

import dashboardMapaMentalMockup from '@/assets/mockup/dashboard_mapa_mental.png'
import planoMockup from '@/assets/mockup/plano.png'
import recomendadosDesempenhoMockup from '@/assets/mockup/recomendados_desempenho.png'
import simuladoMockup from '@/assets/mockup/simulado.png'
import { createLegalHashHref } from '@/pages/legal/model/legal-pages.model'

export type HomeFeatureCardModel = {
  accentClassName: string
  description: string
  detail: string
  label: string
  metric: string
  spanClassName: string
  title: string
}

export type HomePremiumHeroModel = {
  badge: string
  primaryCtaLabel: string
  primaryCtaTargetId: string
  subtitle: string
  titlePrefix: string
  titleWords: string[]
}

export type HomeLaunchBannerModel = {
  compactMessage: string
  compactTag: string
  message: string
  tag: string
  tabletMessage: string
}

export type HomeProductValueSectionModel = {
  cards: HomeFeatureCardModel[]
  description: string
  eyebrow: string
  title: string
}

export type HomeCognixHubTopicModel = {
  description: string
  eyebrow: string
  imageAlt: string
  imageSrc: string
  points: string[]
  proof: string
  title: string
}

export type HomeCognixHubSectionModel = {
  topics: HomeCognixHubTopicModel[]
}

export type HomeGlobalStudyMetricModel = {
  description: string
  label: string
  value: string
}

export type HomeGlobalStudyStepModel = {
  description: string
  label: string
  toneClassName: string
  title: string
}

export type HomeGlobalStudySectionModel = {
  description: string
  eyebrow: string 
  metrics: HomeGlobalStudyMetricModel[]
  primaryCta: string
  secondaryCta: string
  steps: HomeGlobalStudyStepModel[]
  title: string
}

export type HomeFooterItemModel =
  | string
  | {
      external?: boolean
      href?: string
      label: string
    }

export type HomeFooterGroupModel = {
  items: HomeFooterItemModel[]
  title: string
}

export type HomeFooterModel = {
  brandName: string
  description: string
  groups: HomeFooterGroupModel[]
}

export type HomePageModel = {
  cognixHubSection: HomeCognixHubSectionModel
  footer: HomeFooterModel
  globalStudySection: HomeGlobalStudySectionModel
  launchBanner: HomeLaunchBannerModel
  particlesOptions: ISourceOptions
  premiumHero: HomePremiumHeroModel
  productValueSection: HomeProductValueSectionModel
  themeStyle: CSSProperties
}

export const cognixThemeStyle: CSSProperties = {
  minHeight: '100dvh',
}

const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  detectRetina: true,
  fpsLimit: 60,
  fullScreen: {
    enable: false,
  },
  interactivity: {
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: false,
      },
      resize: {
        enable: true,
      },
    },
  },
  particles: {
    color: {
      value: '#3df6ff',
    },
    links: {
      enable: false,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: {
        min: 1.2,
        max: 2.8,
      },
      straight: false,
    },
    number: {
      density: {
        enable: true,
        height: 900,
        width: 1440,
      },
      value: 36,
    },
    opacity: {
      animation: {
        count: 0,
        destroy: 'none',
        enable: true,
        speed: 1.6,
        startValue: 'random',
        sync: false,
      },
      value: {
        max: 1,
        min: 0.24,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      animation: {
        count: 0,
        destroy: 'none',
        enable: true,
        speed: 2.4,
        startValue: 'random',
        sync: false,
      },
      value: {
        max: 4.5,
        min: 1.4,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
}

const productValueCards: HomeFeatureCardModel[] = [
  {
    accentClassName: 'from-[#7efbff]/30 via-[#7efbff]/8 to-transparent',
    description:
      'Veja com clareza quais assuntos e tipos de questão estão derrubando seu desempenho.',
    detail: 'Assuntos com maior incidência de erro',
    label: 'Diagnóstico',
    metric: '01',
    spanClassName: 'xl:col-span-3',
    title: 'Mostra onde você está errando',
  },
  {
    accentClassName: 'from-[#5ab7ff]/28 via-[#5ab7ff]/8 to-transparent',
    description:
      'A IA do Cognix analisa seu desempenho e define o que revisar primeiro para gerar mais impacto na sua preparação.',
    detail: 'Prioridade definida com apoio de IA',
    label: 'IA aplicada',
    metric: '02',
    spanClassName: 'xl:col-span-3',
    title: 'IA que direciona seu estudo',
  },
  {
    accentClassName: 'from-[#83ffd4]/24 via-[#83ffd4]/8 to-transparent',
    description:
      'Seus erros viram direção prática: o que estudar, em que ordem e com qual prioridade.',
    detail: 'Plano ajustado com base no seu desempenho',
    label: 'Plano de ação',
    metric: '03',
    spanClassName: 'md:col-span-2 xl:col-span-6',
    title: 'Organiza seu plano de estudo',
  },
]

const cognixHubTopics: HomeCognixHubTopicModel[] = [
  {
    description:
      'O plano de estudos reúne ritmo semanal, carga diária, meta de questões e prioridades para a semana começar com um critério claro.',
    eyebrow: 'Plano da semana',
    imageAlt:
      'Mockup do Cognix mostrando a tela de plano de estudos com metas e prioridades.',
    imageSrc: planoMockup,
    points: [
      'Ritmo semanal',
      'Meta de questões',
      'Prioridades da semana',
    ],
    proof: 'Plano editável dentro do app',
    title: 'Transforma a rotina em um plano de estudo mais fácil de seguir',
  },
  {
    description:
      'Na home, o Cognix junta recomendações para hoje, desempenho recente e sequência atual para facilitar a decisão do que fazer agora.',
    eyebrow: 'Recomendações e ritmo',
    imageAlt:
      'Mockup do Cognix mostrando recomendações do dia, sequência atual e desempenho recente.',
    imageSrc: recomendadosDesempenhoMockup,
    points: [
      'Recomendado para hoje',
      'Desempenho recente',
      'Sequência atual',
    ],
    proof: 'Próximo passo com base no momento',
    title: 'Entrega um próximo passo claro sem te deixar perdido entre telas',
  },
  {
    description:
      'O treino por áreas e os simulados mostram sessões em andamento, progresso e questões respondidas para você continuar de onde parou.',
    eyebrow: 'Treino e simulado',
    imageAlt:
      'Mockup do Cognix mostrando áreas de conhecimento, tela de exercícios e simulado em andamento.',
    imageSrc: simuladoMockup,
    points: [
      'Áreas de conhecimento',
      'Sessões em andamento',
      'Questões respondidas',
    ],
    proof: 'Treino organizado por área e disciplina',
    title: 'Mantém o estudo ativo com treino por área e continuidade de simulado',
  },
  {
    description:
      'Depois do treino, o app mostra indicadores do momento e libera mapa mental para revisar conceitos, padrões de questão e pontos de atenção.',
    eyebrow: 'Análise e revisão',
    imageAlt:
      'Mockup do Cognix mostrando o painel de desempenho ao lado do mapa mental.',
    imageSrc: dashboardMapaMentalMockup,
    points: [
      'Pontos de atenção',
      'Mapa mental',
      'Leitura por disciplina',
    ],
    proof: 'Desempenho e revisão visual no mesmo fluxo',
    title: 'Converte resultado em leitura objetiva e revisão visual',
  },
]

const globalStudyMetrics: HomeGlobalStudyMetricModel[] = [
  {
    description:
      'A gamificação transforma o estudo em progresso visível, com metas, desafios e incentivo para manter a rotina ativa.',
    label: 'Gamificação',
    value: '01',
  },
  {
    description:
      'Os dashboards de desempenho mostram acertos, erros, evolução por matéria e os pontos que mais pedem ajuste.',
    label: 'Dashboards',
    value: '02',
  },
  {
    description:
      'O mapa mental organiza conceitos, ligações entre temas e revisões rápidas para facilitar memorização e clareza.',
    label: 'Mapa mental',
    value: '03',
  },
]

const globalStudySteps: HomeGlobalStudyStepModel[] = [
  {
    description:
      'Cada resposta, simulado e bloco concluído alimenta o Cognix com dados reais sobre o que já está firme e o que ainda precisa de reforço.',
    label: 'Entrada',
    toneClassName: 'border-[#2fd6c8]',
    title: 'Resultado recebido',
  },
  {
    description:
      'A IA interpreta padrões de erro, reincidência e peso dos temas para descobrir onde uma revisão curta pode gerar mais ganho.',
    label: 'Leitura',
    toneClassName: 'border-[#5a8dff]',
    title: 'Diagnóstico em tempo real',
  },
  {
    description:
      'Recomendações, plano semanal e pontos de atenção aparecem juntos para orientar o próximo treino com mais clareza.',
    label: 'Saída',
    toneClassName: 'border-[#ff8f70]',
    title: 'Plano acionável',
  },
]

export const footerGroupsLegacy: HomeFooterGroupModel[] = [
  {
    items: [
      'Diagnóstico',
      'Plano de estudo',
      'Gamificação',
      'Mapa mental',
    ],
    title: 'Produto',
  },
  {
    items: ['Sobre o projeto', 'Contato', 'Atualizações', 'Parcerias'],
    title: 'Empresa',
  },
  {
    items: [
      'Termos de uso',
      'Política de privacidade',
      'Política de cookies',
    ],
    title: 'Legal',
  },
]

const homeFooterGroups: HomeFooterGroupModel[] = [
  {
    items: [
      {
        href: '/#cognix-diagnostico',
        label: 'Diagnostico de desempenho',
      },
      {
        href: '/#cognix-hub',
        label: 'Plano semanal inteligente',
      },
      {
        href: '/#cognix-hub',
        label: 'Recomendacoes do dia',
      },
      {
        href: '/#rota-cognix',
        label: 'Rota de estudo com IA',
      },
    ],
    title: 'Produto',
  },
  {
    items: [
      {
        href: '/#inicio',
        label: 'Pagina inicial',
      },
      {
        external: true,
        href: 'https://www.instagram.com/cognix_hub/',
        label: 'Instagram oficial',
      },
      {
        href: '/#cognix-hub',
        label: 'Como funciona',
      },
      {
        href: '/#rota-cognix',
        label: 'Solicitar apresentacao',
      },
    ],
    title: 'Empresa',
  },
  {
    items: [
      {
        href: createLegalHashHref('termos-de-uso'),
        label: 'Termos de uso',
      },
      {
        href: createLegalHashHref('politica-de-privacidade'),
        label: 'Politica de privacidade',
      },
      {
        href: createLegalHashHref('politica-de-cookies'),
        label: 'Politica de cookies',
      },
    ],
    title: 'Legal',
  },
]

export const homePageModel: HomePageModel = {
  cognixHubSection: {
    topics: cognixHubTopics,
  },
  footer: {
    brandName: 'Cognix',
    description: 'Planejamento inteligente de estudo com IA.',
    groups: homeFooterGroups,
  },
  globalStudySection: {
    description:
      'Resultados entram, prioridades aparecem e a próxima sessão ganha foco.',
    eyebrow: 'Rota viva de estudo', 
    metrics: globalStudyMetrics,
    primaryCta: 'Acompanhar lançamento',
    secondaryCta: 'Solicitar apresentação',
    steps: globalStudySteps,
    title: 'Seu estudo não precisa de mais abas. Precisa de uma rota.',
  },
  launchBanner: {
    compactMessage: 'Cognix será liberado em breve.',
    compactTag: 'Em breve',
    message:
      'O Cognix está em fase final de testes. A experiência completa será liberada em breve.',
    tag: 'Lançamento próximo',
    tabletMessage: 'A experiência completa do Cognix será liberada em breve.',
  },
  particlesOptions,
  premiumHero: {
    badge: 'Cognix',
    primaryCtaLabel: 'Ver como funciona',
    primaryCtaTargetId: 'cognix-diagnostico',
    subtitle:
      'Cognix indica o que revisar e organiza seu plano de estudo. Pare de perder tempo estudando errado.',
    titlePrefix: 'Estude com',
    titleWords: ['IA', 'foco', 'clareza', 'método'],
  },
  productValueSection: {
    cards: productValueCards,
    description:
      'O Cognix analisa seu desempenho, identifica onde você está errando e transforma isso em um plano de estudo claro.',
    eyebrow: 'O que o Cognix faz',
    title: 'Não é mais um app de estudo genérico.',
  },
  themeStyle: cognixThemeStyle,
}
