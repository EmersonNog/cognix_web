export const requestPresentationPageRoute = 'solicitar-apresentacao' as const

export type RequestPresentationPageRoute =
  typeof requestPresentationPageRoute

export type RequestPresentationContactChannelModel = {
  description: string
  external?: boolean
  href: string
  label: string
}

export type RequestPresentationPageModel = {
  audiences: string[]
  contactChannels: RequestPresentationContactChannelModel[]
  eyebrow: string
  formDescription: string
  formTitle: string
  highlights: string[]
  summary: string
  title: string
  topics: string[]
}

export function isRequestPresentationPageRoute(
  value: string,
): value is RequestPresentationPageRoute {
  return value === requestPresentationPageRoute
}

export function createRequestPresentationPageHref() {
  return `/${requestPresentationPageRoute}`
}

export function getRequestPresentationPageRouteFromPathname(pathname: string) {
  const normalizedPathname =
    pathname === '/' ? pathname : pathname.replace(/\/+$/, '')

  if (normalizedPathname === '/') {
    return null
  }

  const route = decodeURIComponent(normalizedPathname.slice(1).split('?')[0])

  return isRequestPresentationPageRoute(route) ? route : null
}

export const requestPresentationPageModel: RequestPresentationPageModel = {
  audiences: [
    'Estudantes que querem entender como o Cognix pode organizar revisão, treino e rotina.',
    'Escolas, cursinhos e parceiros que desejam conhecer o produto antes do lançamento.',
    'Times que precisam avaliar aderência, fluxo de uso e possibilidades de parceria.',
  ],
  contactChannels: [
    {
      description: 'Canal direto para receber a solicitação com os dados preenchidos.',
      href: 'mailto:vestibularapp@gmail.com',
      label: 'vestibularapp@gmail.com',
    },
    {
      description: 'Canal oficial para acompanhar novidades e falar com o time.',
      external: true,
      href: 'https://www.instagram.com/cognix_hub/',
      label: '@cognix_hub',
    },
  ],
  eyebrow: 'Conversa guiada',
  formDescription:
    'Preencha os campos abaixo para enviar a solicitação direto pelo site.',
  formTitle: 'Conte seu contexto',
  highlights: [
    'Diagnóstico de desempenho na prática',
    'Fluxo de estudo orientado por IA',
    'Espaço para perguntas, parceria e uso real',
  ],
  summary:
    'Solicite uma apresentação do Cognix para ver como diagnóstico, recomendacões e plano de estudo funcionam juntos em uma única experiência.',
  title: 'Solicite uma apresentação do Cognix',
  topics: [
    'Como o Cognix transforma erros e desempenho em prioridades de estudo.',
    'Como entram as recomendações do dia, o plano semanal e os pontos de atenção.',
    'Quais formatos de uso fazem mais sentido para estudante, parceiro ou instituição.',
  ],
}
