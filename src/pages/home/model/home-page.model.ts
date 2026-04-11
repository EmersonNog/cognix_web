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

export type HomePageModel = {
  hero: HomeHeroModel
  launchBanner: HomeLaunchBannerModel
  particlesOptions: ISourceOptions
  productValueSection: HomeProductValueSectionModel
  themeStyle: CSSProperties
}

export const cognixThemeStyle = {
  minHeight: '100svh',
} as CSSProperties

export const homePageModel: HomePageModel = {
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
    message: 'O Cognix esta em fase final de testes. A experiencia completa sera liberada em breve.',
    tag: 'Lancamento proximo',
    tabletMessage: 'A experiencia completa do Cognix sera liberada em breve.',
  },
  particlesOptions: {
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
  },
  themeStyle: cognixThemeStyle,
  productValueSection: {
    cards: [
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
    ],
    description:
      'O Cognix analisa seu desempenho, identifica onde voce esta errando e transforma isso em um plano de estudo claro para o ENEM.',
    eyebrow: 'O que o Cognix faz',
    title: 'Nao e mais um app de estudo generico.',
  },
}
