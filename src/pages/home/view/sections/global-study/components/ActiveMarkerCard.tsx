import type { HomeGlobalStudyMarkerModel } from '@/pages/home/model/home-page.model'

type ActiveMarkerCardProps = {
  marker?: HomeGlobalStudyMarkerModel
}

export function ActiveMarkerCard({ marker }: ActiveMarkerCardProps) {
  if (!marker) {
    return null
  }

  return (
    <div className="absolute right-0 top-[9rem] hidden w-64 rounded-[8px] border border-[#d6e6dd] bg-white/88 p-4 backdrop-blur sm:block">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#6f7d74]">
            {marker.reference}
          </p>
          <p className="mt-1 text-sm font-semibold text-[#082018]">
            {marker.city}
          </p>
        </div>

        <span className="rounded-[8px] bg-[#e7f7ef] px-2.5 py-1 text-xs font-semibold text-[#0d7863]">
          {marker.subject}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-[#536859]">{marker.detail}</p>
    </div>
  )
}
