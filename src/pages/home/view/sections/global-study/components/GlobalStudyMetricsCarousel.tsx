import { cn } from '@/lib/utils'
import type { HomeGlobalStudyMetricModel } from '@/pages/home/model/home-page.model'
import {
  metricCardThemes,
  metricTransitionDurationMs,
  type MetricCardTheme,
} from '../constants'

type GlobalStudyMetricsCarouselProps = {
  activeMetricIndex: number
  metrics: HomeGlobalStudyMetricModel[]
  onPause: () => void
  onResume: () => void
  onSelectMetric: (index: number) => void
  prefersReducedMotion: boolean
  previousMetricIndex: number | null
}

type MetricCardSlideProps = {
  isActive: boolean
  isPrevious: boolean
  metric: HomeGlobalStudyMetricModel
  prefersReducedMotion: boolean
  theme: MetricCardTheme
}

type MetricIndicatorButtonProps = {
  isActive: boolean
  label: string
  onClick: () => void
  theme: MetricCardTheme
}

function MetricCardSlide({
  isActive,
  isPrevious,
  metric,
  prefersReducedMotion,
  theme,
}: MetricCardSlideProps) {
  const Icon = theme.icon

  return (
    <div
      aria-hidden={!isActive}
      className={cn(
        'absolute inset-0 origin-center transition-[opacity,transform] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]',
        isActive
          ? 'z-20 translate-x-0 opacity-100'
          : isPrevious
            ? 'pointer-events-none z-10 -translate-x-[108%] opacity-0'
            : 'pointer-events-none z-0 translate-x-[108%] opacity-0',
      )}
      style={{
        transitionDuration: prefersReducedMotion
          ? undefined
          : `${metricTransitionDurationMs}ms`,
      }}
    >
      <div
        className={cn(
          'group relative isolate flex h-full min-h-[19rem] overflow-hidden rounded-[8px] border p-5 shadow-[0_18px_40px_rgba(20,86,69,0.08)] transition duration-200 hover:-translate-y-0.5 sm:min-h-[17.5rem]',
          theme.surfaceClassName,
        )}
      >
        <div
          aria-hidden="true"
          className={cn('absolute inset-x-0 top-0 h-1', theme.accentLineClassName)}
        />
        <div
          aria-hidden="true"
          className={cn(
            'absolute right-[-1.75rem] top-[-1.75rem] h-24 w-24 rounded-full blur-2xl',
            theme.glowClassName,
          )}
        />

        <div className="relative z-10 flex h-full flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-[8px] border',
                  theme.iconSurfaceClassName,
                )}
              >
                <Icon className="h-4 w-4" strokeWidth={2.1} />
              </div>

              <div>
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#6a7d72]">
                  {theme.eyebrow}
                </p>
                <h3 className="mt-2 text-[1.05rem] font-semibold leading-tight text-[#082018]">
                  {metric.label}
                </h3>
              </div>
            </div>

            <span
              className={cn(
                'inline-flex min-w-11 items-center justify-center rounded-[8px] border px-2.5 py-1 text-xs font-bold',
                theme.numberClassName,
              )}
            >
              {metric.value}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#536859]">
            {metric.description}
          </p>

          <div className="mt-auto pt-4">
            <div className="h-px bg-[linear-gradient(90deg,rgba(8,32,24,0.12),rgba(8,32,24,0.04),transparent)]" />
            <p className="mt-3 text-[0.8rem] font-medium leading-5 text-[#607565]">
              {theme.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricIndicatorButton({
  isActive,
  label,
  onClick,
  theme,
}: MetricIndicatorButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Mostrar card ${label}`}
      aria-pressed={isActive}
      onClick={onClick}
      className="flex-1 rounded-[8px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#36c2a3]"
    >
      <div className="h-1.5 rounded-full bg-white/80">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-300',
            theme.indicatorClassName,
            isActive ? 'w-full opacity-100' : 'w-1/3 opacity-45',
          )}
        />
      </div>

      <p
        className={cn(
          'mt-2 text-[0.74rem] font-semibold transition-colors',
          isActive ? 'text-[#082018]' : 'text-[#6a7d72]',
        )}
      >
        {label}
      </p>
    </button>
  )
}

export function GlobalStudyMetricsCarousel({
  activeMetricIndex,
  metrics,
  onPause,
  onResume,
  onSelectMetric,
  prefersReducedMotion,
  previousMetricIndex,
}: GlobalStudyMetricsCarouselProps) {
  return (
    <div className="mt-8 min-w-0 lg:max-w-[34rem]">
      <div
        className="w-full"
        onMouseEnter={onPause}
        onMouseLeave={onResume}
        onFocusCapture={onPause}
        onBlurCapture={onResume}
      >
        <div className="relative min-h-[19rem] overflow-hidden rounded-[8px] sm:min-h-[17.5rem]">
          {metrics.map((metric, index) => (
            <MetricCardSlide
              key={metric.value}
              isActive={index === activeMetricIndex}
              isPrevious={index === previousMetricIndex}
              metric={metric}
              prefersReducedMotion={prefersReducedMotion}
              theme={metricCardThemes[index] ?? metricCardThemes[0]}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {metrics.map((metric, index) => (
          <MetricIndicatorButton
            key={`${metric.value}-indicator`}
            isActive={index === activeMetricIndex}
            label={metric.label}
            onClick={() => onSelectMetric(index)}
            theme={metricCardThemes[index] ?? metricCardThemes[0]}
          />
        ))}
      </div>
    </div>
  )
}
