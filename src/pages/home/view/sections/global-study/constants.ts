import { BarChart3, Gamepad2, Map as MapIcon, type LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'

import type { Globe3DConfig } from '@/components/ui/3d-globe'

export type MetricCardTheme = {
  accentLineClassName: string
  eyebrow: string
  footer: string
  glowClassName: string
  icon: LucideIcon
  iconSurfaceClassName: string
  indicatorClassName: string
  numberClassName: string
  surfaceClassName: string
}

const transitionEase = 'cubic-bezier(0.22, 1, 0.36, 1)'

export const metricAutoplayIntervalMs = 7000
export const metricTransitionDurationMs = 5400

export const globeConfig = {
  atmosphereBlur: 4,
  atmosphereColor: '#36c2a3',
  atmosphereIntensity: 0.85,
  autoRotateSpeed: 0.42,
  bumpScale: 3,
  globeColor: '#d8efe2',
  initialRotation: { x: -0.12, y: -0.22 },
  markerSize: 0.08,
  pointLightIntensity: 1.7,
  showAtmosphere: true,
  showWireframe: true,
  wireframeColor: '#36c2a3',
} satisfies Globe3DConfig

export const metricCardThemes: MetricCardTheme[] = [
  {
    accentLineClassName:
      'bg-[linear-gradient(90deg,rgba(47,214,200,0.95),rgba(47,214,200,0.24),transparent)]',
    eyebrow: 'Ritmo e motivacao',
    footer: 'Metas, progresso e recompensas ajudam a sustentar a constancia no estudo.',
    glowClassName: 'bg-[rgba(47,214,200,0.16)]',
    icon: Gamepad2,
    iconSurfaceClassName:
      'border-[#b7eee7] bg-[#effbf8] text-[#0d7863] shadow-[0_12px_28px_rgba(47,214,200,0.16)]',
    indicatorClassName: 'bg-[#21bea9]',
    numberClassName: 'border-[#c4ece4] bg-[#f2fcf8] text-[#0d7863]',
    surfaceClassName:
      'border-[#c9ece5] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,251,247,0.9))]',
  },
  {
    accentLineClassName:
      'bg-[linear-gradient(90deg,rgba(90,141,255,0.94),rgba(90,141,255,0.24),transparent)]',
    eyebrow: 'Leitura dos resultados',
    footer: 'Os dashboards deixam visivel o que evoluiu, o que travou e onde agir agora.',
    glowClassName: 'bg-[rgba(114,168,255,0.14)]',
    icon: BarChart3,
    iconSurfaceClassName:
      'border-[#cfe0ff] bg-[#f2f6ff] text-[#426dd6] shadow-[0_12px_28px_rgba(114,168,255,0.16)]',
    indicatorClassName: 'bg-[#5a8dff]',
    numberClassName: 'border-[#d8e4ff] bg-[#f4f8ff] text-[#426dd6]',
    surfaceClassName:
      'border-[#d6e2ff] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,244,255,0.94))]',
  },
  {
    accentLineClassName:
      'bg-[linear-gradient(90deg,rgba(255,143,112,0.94),rgba(255,143,112,0.22),transparent)]',
    eyebrow: 'Revisao visual',
    footer: 'Os mapas mentais conectam assuntos e aceleram a revisao antes da prova.',
    glowClassName: 'bg-[rgba(255,155,127,0.14)]',
    icon: MapIcon,
    iconSurfaceClassName:
      'border-[#ffd8cd] bg-[#fff5f1] text-[#d96f51] shadow-[0_12px_28px_rgba(255,155,127,0.16)]',
    indicatorClassName: 'bg-[#ff8f70]',
    numberClassName: 'border-[#ffe1d8] bg-[#fff7f4] text-[#d96f51]',
    surfaceClassName:
      'border-[#ffe1d6] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,244,239,0.94))]',
  },
]

export function getAccentStyle(hasEntered: boolean): CSSProperties {
  return {
    opacity: hasEntered ? 0 : 0.68,
    transform: hasEntered
      ? 'translate3d(calc(100vw + 3rem), 0, 0)'
      : 'translate3d(calc(-100% - 2.5rem), 0, 0)',
    transition: hasEntered
      ? `transform 920ms ${transitionEase}, opacity 280ms ease-out 700ms`
      : undefined,
    willChange: 'transform, opacity',
  }
}

export function getContentStyle(hasEntered: boolean): CSSProperties {
  return {
    opacity: hasEntered ? 1 : 0,
    transform: hasEntered
      ? 'translate3d(0, 0, 0) scale(1)'
      : 'translate3d(0, 28px, 0) scale(0.996)',
    transition: `transform 780ms ${transitionEase}, opacity 520ms ease-out`,
    willChange: 'transform, opacity',
  }
}

export function getCopyStyle(hasEntered: boolean): CSSProperties {
  return {
    filter: hasEntered ? 'blur(0px)' : 'blur(2px)',
    opacity: hasEntered ? 1 : 0.22,
    transform: hasEntered
      ? 'translate3d(0, 0, 0)'
      : 'translate3d(0, 18px, 0)',
    transition: hasEntered
      ? `transform 720ms ${transitionEase} 80ms, opacity 460ms ease-out 80ms, filter 520ms ease-out 80ms`
      : undefined,
    willChange: 'transform, opacity, filter',
  }
}

export function getVisualStyle(hasEntered: boolean): CSSProperties {
  return {
    filter: hasEntered ? 'blur(0px)' : 'blur(4px)',
    opacity: hasEntered ? 1 : 0,
    transform: hasEntered
      ? 'translate3d(0, 0, 0) scale(1)'
      : 'translate3d(0, 24px, 0) scale(0.988)',
    transition: hasEntered
      ? `transform 880ms ${transitionEase} 160ms, opacity 560ms ease-out 160ms, filter 620ms ease-out 160ms`
      : undefined,
    transformOrigin: 'center bottom',
    willChange: 'transform, opacity, filter',
  }
}
