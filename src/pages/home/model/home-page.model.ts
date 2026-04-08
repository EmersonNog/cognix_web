import type { CSSProperties } from 'react'

import { heroSectionModel } from './hero-section.model'
import { overviewSectionModel } from './overview-section.model'

export const cognixThemeStyle = {
  '--cognix-bg': '#060E20',
  '--cognix-accent': '#A3A6FF',
  '--cognix-accent-strong': '#6063EE',
  '--cognix-text-strong': '#F8FAFF',
  '--cognix-text': '#E7EAFB',
  '--cognix-muted-strong': '#AAB6D8',
  '--cognix-muted': '#7A86AE',
} as CSSProperties

export const homePageModel = {
  themeStyle: cognixThemeStyle,
  heroSection: heroSectionModel,
  overviewSection: overviewSectionModel,
} as const

export type HomePageModel = typeof homePageModel
