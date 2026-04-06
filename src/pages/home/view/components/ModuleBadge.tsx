import type { ModuleCard } from '@/pages/home/model/homePage.model'
import { accentStyles } from '@/pages/home/view/homeView.styles'

interface ModuleBadgeProps {
  module: ModuleCard
}

export function ModuleBadge({ module }: ModuleBadgeProps) {
  const accent = accentStyles[module.accent]

  return (
    <article
      className={`rounded-[30px] border border-white/70 bg-gradient-to-br ${accent.panel} p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ${accent.ring}`}
    >
      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${accent.badge}`}>
        {module.tag}
      </span>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{module.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{module.description}</p>
    </article>
  )
}
