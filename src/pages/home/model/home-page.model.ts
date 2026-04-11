import type { ISourceOptions } from '@tsparticles/engine'
import type { CSSProperties } from 'react'

export type HomeFeatureCardModel = {
  accentClassName: string
  description: string
  detail: string
  label: string
  metric: string
  spanClassName: string
  title: string
}

export type HomeHeroModel = {
  badge: string
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

export type HomeGlobalStudyMarkerModel = {
  city: string
  detail: string
  id: string
  lat: number
  lng: number
  reference: string
  src: string
  subject: string
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
  markers: HomeGlobalStudyMarkerModel[]
  metrics: HomeGlobalStudyMetricModel[]
  primaryCta: string
  secondaryCta: string
  steps: HomeGlobalStudyStepModel[]
  title: string
}

export type HomePageModel = {
  globalStudySection: HomeGlobalStudySectionModel
  hero: HomeHeroModel
  launchBanner: HomeLaunchBannerModel
  particlesOptions: ISourceOptions
  productValueSection: HomeProductValueSectionModel
  themeStyle: CSSProperties
}

export const cognixThemeStyle: CSSProperties = {
  minHeight: '100svh',
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
      'Veja com clareza quais assuntos e tipos de questao estao derrubando seu desempenho.',
    detail: 'Assuntos com maior incidencia de erro',
    label: 'Diagnostico',
    metric: '01',
    spanClassName: 'xl:col-span-3',
    title: 'Mostra onde voce esta errando',
  },
  {
    accentClassName: 'from-[#5ab7ff]/28 via-[#5ab7ff]/8 to-transparent',
    description:
      'A IA do Cognix analisa seu desempenho e define o que revisar primeiro para gerar mais impacto na sua preparacao.',
    detail: 'Prioridade definida com apoio de IA',
    label: 'IA aplicada',
    metric: '02',
    spanClassName: 'xl:col-span-3',
    title: 'IA que direciona seu estudo',
  },
  {
    accentClassName: 'from-[#83ffd4]/24 via-[#83ffd4]/8 to-transparent',
    description:
      'Seus erros viram direcao pratica: o que estudar, em que ordem e com qual prioridade.',
    detail: 'Plano ajustado com base no seu desempenho',
    label: 'Plano de acao',
    metric: '03',
    spanClassName: 'md:col-span-2 xl:col-span-6',
    title: 'Organiza seu plano de estudo',
  },
]

const globalStudyMarkers: HomeGlobalStudyMarkerModel[] = [
  {
    city: 'Sao Paulo',
    detail: 'Funcoes entrou como prioridade nesta rota.',
    id: 'sao-paulo',
    lat: -23.5505,
    lng: -46.6333,
    reference: 'MASP',
    src: 'https://assets.aceternity.com/avatars/1.webp',
    subject: 'Funcoes',
  },
  {
    city: 'Teresina',
    detail: 'Interpretacao puxou a proxima revisao.',
    id: 'teresina',
    lat: -5.0892,
    lng: -42.8016,
    reference: 'Ponte Estaiada',
    src: 'https://assets.aceternity.com/avatars/2.webp',
    subject: 'Linguagens',
  },
  {
    city: 'Manaus',
    detail: 'Ecologia voltou para o topo do plano.',
    id: 'manaus',
    lat: -3.119,
    lng: -60.0217,
    reference: 'Teatro Amazonas',
    src: 'https://assets.aceternity.com/avatars/3.webp',
    subject: 'Biologia',
  },
  {
    city: 'Porto Alegre',
    detail: 'Redacao foi dividida em duas revisoes curtas.',
    id: 'porto-alegre',
    lat: -30.0346,
    lng: -51.2177,
    reference: 'Gasometro',
    src: 'https://assets.aceternity.com/avatars/4.webp',
    subject: 'Redacao',
  },
  {
    city: 'Brasilia',
    detail: 'Probabilidade apareceu como ganho mais rapido.',
    id: 'brasilia',
    lat: -15.7939,
    lng: -47.8828,
    reference: 'Eixao',
    src: 'https://assets.aceternity.com/avatars/5.webp',
    subject: 'Matematica',
  },
  {
    city: 'Salvador',
    detail: 'Estequiometria entrou antes do proximo simulado.',
    id: 'salvador',
    lat: -12.9777,
    lng: -38.5016,
    reference: 'Pelourinho',
    src: 'https://assets.aceternity.com/avatars/6.webp',
    subject: 'Quimica',
  },
]

const globalStudyMetrics: HomeGlobalStudyMetricModel[] = [
  {
    description:
      'A gamificacao transforma o estudo em progresso visivel, com metas, desafios e incentivo para manter a rotina ativa.',
    label: 'Gamificacao',
    value: '01',
  },
  {
    description:
      'Os dashboards de desempenho mostram acertos, erros, evolucao por materia e os pontos que mais pedem ajuste.',
    label: 'Dashboards',
    value: '02',
  },
  {
    description:
      'O mapa mental organiza conceitos, ligacoes entre temas e revisoes rapidas para facilitar memorizacao e clareza.',
    label: 'Mapa mental',
    value: '03',
  },
]

const globalStudySteps: HomeGlobalStudyStepModel[] = [
  {
    description:
      'Cada resposta, simulado e bloco concluido alimenta o Cognix com dados reais sobre o que ja esta firme e o que ainda precisa de reforco.',
    label: 'Entrada',
    toneClassName: 'border-[#2fd6c8]',
    title: 'Resultado recebido',
  },
  {
    description:
      'A IA interpreta padroes de erro, reincidencia e peso dos temas para descobrir onde uma revisao curta pode gerar mais ganho.',
    label: 'Leitura',
    toneClassName: 'border-[#5a8dff]',
    title: 'Diagnostico em tempo real',
  },
  {
    description:
      'A proxima sessao chega organizada por prioridade, com foco definido e tempo sugerido para estudar sem dispersao.',
    label: 'Saida',
    toneClassName: 'border-[#ff8f70]',
    title: 'Plano acionavel',
  },
]

export const homePageModel: HomePageModel = {
  globalStudySection: {
    description:
      'Resultados entram, prioridades aparecem e a proxima sessao ganha foco.',
    eyebrow: 'Rota viva de estudo',
    markers: globalStudyMarkers,
    metrics: globalStudyMetrics,
    primaryCta: 'Quero entrar no beta',
    secondaryCta: 'Ver diagnostico',
    steps: globalStudySteps,
    title: 'Seu estudo nao precisa de mais abas. Precisa de uma rota.',
  },
  hero: {
    badge: 'Cognix',
    subtitle:
      'Cognix indica o que revisar e organiza seu plano de estudo. Pare de perder tempo estudando errado.',
    titlePrefix: 'Estude com',
    titleWords: ['IA', 'foco', 'clareza', 'metodo'],
  },
  launchBanner: {
    compactMessage: 'Cognix sera liberado em breve.',
    compactTag: 'Em breve',
    message:
      'O Cognix esta em fase final de testes. A experiencia completa sera liberada em breve.',
    tag: 'Lancamento proximo',
    tabletMessage: 'A experiencia completa do Cognix sera liberada em breve.',
  },
  particlesOptions,
  productValueSection: {
    cards: productValueCards,
    description:
      'O Cognix analisa seu desempenho, identifica onde voce esta errando e transforma isso em um plano de estudo claro para o ENEM.',
    eyebrow: 'O que o Cognix faz',
    title: 'Nao e mais um app de estudo generico.',
  },
  themeStyle: cognixThemeStyle,
}
