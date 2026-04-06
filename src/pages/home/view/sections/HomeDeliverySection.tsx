import type { DeliveryStep } from '@/pages/home/model/homePage.model'
import { SectionHeading } from '@/pages/home/view/components/SectionHeading'

interface HomeDeliverySectionProps {
  deliverySteps: DeliveryStep[]
  footerNote: string
}

export function HomeDeliverySection({ deliverySteps, footerNote }: HomeDeliverySectionProps) {
  return (
    <section className="glass-panel rounded-[38px] px-5 py-6 sm:px-6 sm:py-8 lg:px-8" id="entrega">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            description={footerNote}
            eyebrow="Entrega desta etapa"
            title="O projeto agora tem um ponto de partida limpo para seguirmos com rotas, APIs e dashboards reais."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {deliverySteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[26px] border border-slate-900/8 bg-white/80 p-4"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[32px] bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.24)]">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/55">
            O que ja foi resolvido
          </p>
          <div className="mt-5 space-y-3">
            <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white/80">
              O App deixou de depender de rotas inexistentes e ganhou um shell estavel.
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white/80">
              A home passou a ser guiada por dados tipados e um controller dedicado.
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white/80">
              A interface foi redesenhada para funcionar bem em celular, tablet e desktop.
            </div>
          </div>

          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition duration-200 hover:-translate-y-0.5"
            href="#topo"
          >
            Revisitar a estrutura
          </a>
        </aside>
      </div>
    </section>
  )
}
