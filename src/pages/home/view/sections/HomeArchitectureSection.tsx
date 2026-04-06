import type { Capability, HomePageModel } from '@/pages/home/model/homePage.model'
import { SectionHeading } from '@/pages/home/view/components/SectionHeading'
import { accentStyles } from '@/pages/home/view/homeView.styles'

interface HomeArchitectureSectionProps {
  architectureNote: HomePageModel['architectureNote']
  capabilities: Capability[]
  activeCapability: Capability
  activeCapabilityId: string
  onSelectCapability: (capabilityId: string) => void
}

export function HomeArchitectureSection({
  architectureNote,
  capabilities,
  activeCapability,
  activeCapabilityId,
  onSelectCapability,
}: HomeArchitectureSectionProps) {
  const activeAccent = accentStyles[activeCapability.accent]

  return (
    <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10" id="arquitetura">
      <div className="space-y-6">
        <SectionHeading
          description={architectureNote.body}
          eyebrow="Arquitetura"
          title={architectureNote.title}
        />

        <div className="rounded-[32px] border border-white/70 bg-white/78 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Como a base ficou distribuida
          </p>
          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-600" />
              <p className="text-sm leading-6 text-slate-700">
                <strong className="font-semibold text-slate-950">Model:</strong> concentra
                conteudo, tipos e estrutura da pagina.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
              <p className="text-sm leading-6 text-slate-700">
                <strong className="font-semibold text-slate-950">Controller:</strong> conecta os
                dados ao estado e controla interacoes.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-950" />
              <p className="text-sm leading-6 text-slate-700">
                <strong className="font-semibold text-slate-950">View:</strong> foca em
                experiencia, composicao e responsividade.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-[34px] p-5 sm:p-6">
        <div className="flex flex-wrap gap-3">
          {capabilities.map((capability) => {
            const accent = accentStyles[capability.accent]

            return (
              <button
                key={capability.id}
                aria-pressed={activeCapabilityId === capability.id}
                className={`rounded-full border border-slate-900/10 bg-white/75 px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:bg-white ${accent.button}`}
                data-active={activeCapabilityId === capability.id}
                onClick={() => onSelectCapability(capability.id)}
                type="button"
              >
                {capability.label}
              </button>
            )
          })}
        </div>

        <div
          className={`mt-6 grid gap-5 rounded-[30px] border border-white/70 bg-gradient-to-br ${activeAccent.panel} p-5 ring-1 ${activeAccent.ring} lg:grid-cols-[1.1fr_0.9fr] lg:p-6`}
        >
          <div>
            <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${activeAccent.badge}`}>
              Camada ativa
            </span>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
              {activeCapability.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-700">{activeCapability.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {activeCapability.points.map((point, index) => (
                <article
                  key={point}
                  className="rounded-[24px] border border-slate-900/8 bg-white/78 p-4"
                >
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white ${activeAccent.dot}`}
                  >
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{point}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-slate-900/8 bg-slate-950 p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/55">
              O que esta nessa camada
            </p>
            <div className="mt-5 space-y-3">
              {activeCapability.artifacts.map((artifact) => (
                <div
                  key={artifact}
                  className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white/80"
                >
                  {artifact}
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/78">
              {activeCapability.outcome}
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
