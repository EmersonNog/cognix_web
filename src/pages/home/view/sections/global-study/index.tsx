import { useCallback, useRef, useState } from 'react'

import { SectionPattern } from '@/components/ui/section-pattern'
import type { HomeGlobalStudySectionModel } from '@/pages/home/model/home-page.model'
import { scrollToElement } from '@/pages/home/view/scrollToElement'
import { GlobalStudyHeader } from './components/GlobalStudyHeader'
import { GlobalStudyMetricsCarousel } from './components/GlobalStudyMetricsCarousel'
import { GlobalStudyVisualPanel } from './components/GlobalStudyVisualPanel'
import {
  getAccentStyle,
  getContentStyle,
  getCopyStyle,
  getVisualStyle,
} from './constants'
import { useGlobalStudyEntry } from './hooks/useGlobalStudyEntry'
import { useMetricCarousel } from './hooks/useMetricCarousel'

type GlobalStudySectionProps = {
  section: HomeGlobalStudySectionModel
}

export function GlobalStudySection({ section }: GlobalStudySectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isMetricCarouselPaused, setIsMetricCarouselPaused] = useState(false)

  const { hasEntered, prefersReducedMotion } = useGlobalStudyEntry(sectionRef)
  const { activeMetricIndex, previousMetricIndex, showMetric } =
    useMetricCarousel({
      hasEntered,
      isPaused: isMetricCarouselPaused,
      metricCount: section.metrics.length,
      prefersReducedMotion,
    })

  const handleMetricCarouselPause = useCallback(() => {
    setIsMetricCarouselPaused(true)
  }, [])

  const handleMetricCarouselResume = useCallback(() => {
    setIsMetricCarouselPaused(false)
  }, [])

  const openLaunchInstagram = useCallback(() => {
    window.open(
      'https://www.instagram.com/cognix_hub/',
      '_blank',
      'noopener,noreferrer',
    )
  }, [])

  const scrollToDiagnostics = useCallback(() => {
    const target = document.getElementById('cognix-diagnostico')

    if (!target) {
      return
    }

    scrollToElement(target)
  }, [])

  const accentStyle = getAccentStyle(hasEntered)
  const contentStyle = getContentStyle(hasEntered)
  const copyStyle = getCopyStyle(hasEntered)
  const visualStyle = getVisualStyle(hasEntered)

  return (
    <section
      id="rota-cognix"
      ref={sectionRef}
      className="relative z-20 isolate overflow-hidden bg-[#eff5ff] px-5 pb-16 pt-16 text-[#06171a] sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[100dvh] lg:px-16 lg:pb-24 lg:pt-24"
    >
      <SectionPattern variant="light" className="opacity-42" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[12rem] sm:w-[16rem] lg:w-[20rem]"
        style={accentStyle}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.82)_0%,rgba(244,247,255,0.56)_46%,rgba(239,245,255,0)_100%)]" />
        <div className="absolute inset-y-[10%] right-0 w-px bg-[linear-gradient(180deg,transparent,rgba(90,141,255,0.46),rgba(54,194,163,0.28),transparent)] shadow-[0_0_18px_rgba(90,141,255,0.18)]" />
        <div className="absolute inset-y-[12%] right-[-1rem] w-10 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.54),rgba(255,255,255,0))] blur-xl" />
      </div>

      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(239,245,255,0.97),rgba(239,245,255,0))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(225,235,252,0.98),rgba(239,245,255,0))]" />

      <div
        className="relative z-20 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(29rem,1fr)] lg:items-center xl:grid-cols-[minmax(0,0.78fr)_minmax(34rem,1fr)]"
        style={contentStyle}
      >
        <div
          className="max-w-3xl min-w-0 space-y-4 lg:max-w-[32rem]"
          style={copyStyle}
        >
          <GlobalStudyHeader
            description={section.description}
            eyebrow={section.eyebrow}
            onPrimaryCta={openLaunchInstagram}
            onSecondaryCta={scrollToDiagnostics}
            primaryCta={section.primaryCta}
            secondaryCta={section.secondaryCta}
            title={section.title}
          />

          <GlobalStudyMetricsCarousel
            activeMetricIndex={activeMetricIndex}
            metrics={section.metrics}
            onPause={handleMetricCarouselPause}
            onResume={handleMetricCarouselResume}
            onSelectMetric={showMetric}
            prefersReducedMotion={prefersReducedMotion}
            previousMetricIndex={previousMetricIndex}
          />
        </div>

        <GlobalStudyVisualPanel
          steps={section.steps}
          visualStyle={visualStyle}
        />
      </div>
    </section>
  )
}
