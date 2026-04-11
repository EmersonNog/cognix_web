import { cn } from '@/lib/utils'
import type { HomeGlobalStudyStepModel } from '@/pages/home/model/home-page.model'

type GlobalStudyStepsGridProps = {
  steps: HomeGlobalStudyStepModel[]
}

function StudyStepCard({ step }: { step: HomeGlobalStudyStepModel }) {
  return (
    <div
      className={cn(
        'rounded-[8px] border border-l-4 border-[#d8e6de] bg-white p-4 shadow-[0_18px_46px_rgba(20,86,69,0.11)] sm:border-white/80 sm:bg-white/88 sm:backdrop-blur',
        step.toneClassName,
      )}
    >
      <p className="text-xs font-semibold uppercase text-[#587468]">
        {step.label}
      </p>
      <h3 className="mt-2 text-base font-semibold text-[#082018]">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#536859]">
        {step.description}
      </p>
    </div>
  )
}

export function GlobalStudyStepsGrid({ steps }: GlobalStudyStepsGridProps) {
  return (
    <div className="relative z-20 mt-[-0.75rem] grid gap-3 sm:absolute sm:inset-x-0 sm:bottom-0 sm:z-10 sm:mt-0 sm:grid-cols-3">
      {steps.map((step) => (
        <StudyStepCard key={step.label} step={step} />
      ))}
    </div>
  )
}
