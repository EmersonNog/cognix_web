export type HeroSectionCopy = {
  eyebrow: string
  title: string
  description: string
}

export type HeroSectionModel = {
  frameDirectory: string
  firstFrame: number
  lastUsableFrame: number
  scrollDistance: number
  loadingEyebrow: string
  loadingLabel: string
  copy: HeroSectionCopy
}

export const heroSectionModel: HeroSectionModel = {
  frameDirectory: '/frames-desktop',
  firstFrame: 1,
  lastUsableFrame: 118,
  scrollDistance: 3.25,
  loadingEyebrow: 'Preparando hero',
  loadingLabel: 'carregando a narrativa em frames',
  copy: {
    eyebrow: 'Planeje melhor. Estude com IA.',
    title: 'Cognix',
    description:
      'Monte seu plano da semana, treine por areas e acompanhe seu desempenho em um so fluxo.',
  },
}
