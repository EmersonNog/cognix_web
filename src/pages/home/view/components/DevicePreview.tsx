import type { DeviceProfile } from '@/pages/home/model/homePage.model'

interface DevicePreviewProps {
  layout: DeviceProfile['layout']
}

export function DevicePreview({ layout }: DevicePreviewProps) {
  if (layout === 'stack') {
    return (
      <div className="space-y-2.5 rounded-[28px] border border-slate-900/10 bg-white/75 p-3">
        <div className="h-20 rounded-[20px] bg-gradient-to-br from-orange-200 via-white to-teal-100" />
        <div className="h-4 w-2/3 rounded-full bg-slate-900/12" />
        <div className="h-4 rounded-full bg-slate-900/8" />
        <div className="h-4 w-5/6 rounded-full bg-slate-900/8" />
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="h-18 rounded-[18px] bg-slate-950/6" />
          <div className="h-18 rounded-[18px] bg-slate-950/6" />
        </div>
      </div>
    )
  }

  if (layout === 'split') {
    return (
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-2.5 rounded-[28px] border border-slate-900/10 bg-white/75 p-3">
        <div className="space-y-2.5 rounded-[22px] bg-gradient-to-br from-teal-100 via-white to-orange-50 p-3">
          <div className="h-4 w-2/3 rounded-full bg-slate-900/12" />
          <div className="h-20 rounded-[18px] bg-white/90" />
          <div className="h-4 w-5/6 rounded-full bg-slate-900/8" />
          <div className="h-4 rounded-full bg-slate-900/8" />
        </div>
        <div className="space-y-2.5 rounded-[22px] bg-slate-950/4 p-3">
          <div className="h-16 rounded-[18px] bg-white/90" />
          <div className="h-16 rounded-[18px] bg-white/90" />
          <div className="h-10 rounded-[16px] bg-slate-900/10" />
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-[28px] border border-slate-900/10 bg-white/75 p-3">
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-2.5">
        <div className="rounded-[22px] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 p-3">
          <div className="h-4 w-1/2 rounded-full bg-white/25" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-18 rounded-[18px] bg-white/10" />
            <div className="h-18 rounded-[18px] bg-white/10" />
            <div className="col-span-2 h-16 rounded-[18px] bg-white/14" />
          </div>
        </div>
        <div className="grid gap-2.5">
          <div className="h-16 rounded-[18px] bg-slate-900/8" />
          <div className="h-20 rounded-[18px] bg-slate-900/8" />
          <div className="h-10 rounded-[16px] bg-orange-200/70" />
        </div>
      </div>
    </div>
  )
}
