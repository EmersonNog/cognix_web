import type { CSSProperties } from 'react'

import { Globe3D } from '@/components/ui/3d-globe'
import type {
  HomeGlobalStudyMarkerModel,
  HomeGlobalStudyStepModel,
} from '@/pages/home/model/home-page.model'
import { globeConfig } from '../constants'

import { ActiveMarkerCard } from './ActiveMarkerCard'
import { GlobalStudyStepsGrid } from './GlobalStudyStepsGrid'

type GlobalStudyVisualPanelProps = {
  activeMarker?: HomeGlobalStudyMarkerModel
  steps: HomeGlobalStudyStepModel[]
  visualStyle: CSSProperties
}

export function GlobalStudyVisualPanel({
  activeMarker,
  steps,
  visualStyle,
}: GlobalStudyVisualPanelProps) {
  return (
    <div className="relative" style={visualStyle}>
      <div className="relative -mx-5 h-[19.5rem] overflow-hidden sm:mx-0 sm:min-h-[39rem] lg:min-h-[43rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[-12%] top-10 h-[15rem] bg-[radial-gradient(circle_at_center,rgba(90,141,255,0.16),rgba(90,141,255,0)_70%)] sm:hidden"
        />

        <Globe3D
          className="absolute left-1/2 top-[0.75rem] h-[28rem] w-[28rem] -translate-x-1/2 sm:top-[-2rem] sm:h-[38rem] sm:w-[38rem] lg:left-[54%] lg:top-[-1.5rem] lg:h-[45rem] lg:w-[45rem]"
          config={globeConfig}
        />

        <div className="absolute left-0 top-3 z-10 hidden w-[min(18rem,88vw)] rounded-[8px] border border-[#b6dece] bg-white/88 p-4 backdrop-blur sm:top-4 sm:block sm:w-[min(18rem,72vw)]">
          <p className="text-xs font-semibold uppercase text-[#0d745f]">
            Agora no Cognix
          </p>
          <p className="mt-2 text-lg font-semibold leading-tight text-[#082018]">
            IA recalculando a trilha
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#d7ede2]">
            <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#36c2a3,#72a8ff,#ff9b7f)]" />
          </div>
        </div>

        <ActiveMarkerCard marker={activeMarker} />
      </div>

      <GlobalStudyStepsGrid steps={steps} />
    </div>
  )
}
