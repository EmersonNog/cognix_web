import type { AccentTone } from '@/pages/home/model/homePage.model'

export const accentStyles: Record<
  AccentTone,
  {
    badge: string
    button: string
    panel: string
    dot: string
    ring: string
  }
> = {
  teal: {
    badge: 'border-teal-700/15 bg-teal-600/10 text-teal-950',
    button:
      'data-[active=true]:border-teal-700/25 data-[active=true]:bg-teal-600/10 data-[active=true]:text-teal-950',
    panel: 'from-teal-500/18 via-white/88 to-white/72',
    dot: 'bg-teal-600',
    ring: 'ring-teal-500/20',
  },
  orange: {
    badge: 'border-orange-700/15 bg-orange-500/10 text-orange-950',
    button:
      'data-[active=true]:border-orange-700/25 data-[active=true]:bg-orange-500/10 data-[active=true]:text-orange-950',
    panel: 'from-orange-500/18 via-white/88 to-white/72',
    dot: 'bg-orange-500',
    ring: 'ring-orange-500/20',
  },
  slate: {
    badge: 'border-slate-800/10 bg-slate-900/8 text-slate-900',
    button:
      'data-[active=true]:border-slate-800/20 data-[active=true]:bg-slate-900/8 data-[active=true]:text-slate-950',
    panel: 'from-slate-900/10 via-white/88 to-white/72',
    dot: 'bg-slate-900',
    ring: 'ring-slate-900/10',
  },
}
