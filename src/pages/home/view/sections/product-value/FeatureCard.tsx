import type { HomeFeatureCardModel } from '@/pages/home/model/home-page.model'

type FeatureCardProps = {
  card: HomeFeatureCardModel
}

export function FeatureCard({ card }: FeatureCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-[#E1E8F0] bg-white/92 p-4 shadow-[0_18px_40px_rgba(6,14,32,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(6,14,32,0.09)] sm:p-5">
      <div
        className={`absolute inset-x-0 top-0 h-16 bg-gradient-to-br ${card.accentClassName}`}
      />
      <div className="absolute -right-8 top-3 h-16 w-16 rounded-full border border-[#d8eef5] bg-white/70 blur-2xl" />

      <div className="relative flex h-full min-h-0 flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="inline-flex items-center rounded-full border border-[#D7EAF1] bg-[#F5FBFD] px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-[#177B8E]">
            {card.label}
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DCEAF1] bg-white text-[0.68rem] font-semibold text-[#0F2C40] shadow-[0_10px_25px_rgba(15,44,64,0.06)]">
            {card.metric}
          </div>
        </div>

        <div className="mb-4 space-y-2.5">
          <h3 className="max-w-[16ch] text-[1.02rem] font-semibold leading-tight tracking-[-0.03em] text-[#091627] sm:text-[1.12rem]">
            {card.title}
          </h3>

          <p className="text-[0.88rem] leading-6 text-[#4E5A6E] sm:text-[0.92rem]">
            {card.description}
          </p>
        </div>

        <div className="mt-auto pt-2">
          <div className="mb-3 h-px bg-[linear-gradient(90deg,#dbe7ee,transparent)]" />
          <p className="text-[0.78rem] font-medium text-[#0F2C40] sm:text-[0.82rem]">
            {card.detail}
          </p>
        </div>
      </div>
    </article>
  )
}
