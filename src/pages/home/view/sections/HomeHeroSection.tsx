import heroImage from '@/assets/hero.png'
import type { DeliveryStep, HeroMetric, HomePageModel } from '@/pages/home/model/homePage.model'

interface HomeHeroSectionProps {
  hero: HomePageModel['hero']
  metrics: HeroMetric[]
  deliverySteps: DeliveryStep[]
}

export function HomeHeroSection({ hero, metrics, deliverySteps }: HomeHeroSectionProps) {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14" id="topo">
      <div className="animate-appear space-y-8">
        <span className="inline-flex rounded-full border border-white/70 bg-white/82 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700">
          {hero.eyebrow}
        </span>

        <div className="space-y-5">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-[4.75rem] lg:leading-[0.92]">
            <span className="display-font block">{hero.title}</span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            {hero.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          {hero.actions.map((action) => {
            const isPrimary = action.variant === 'primary'

            return (
              <a
                key={action.href}
                className={
                  isPrimary
                    ? 'inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-[0_18px_35px_rgba(15,23,42,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-slate-900'
                    : 'inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/75 px-6 py-3 text-sm font-medium text-slate-900 transition duration-200 hover:-translate-y-0.5 hover:bg-white'
                }
                href={action.href}
              >
                {action.label}
              </a>
            )
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-[28px] border border-white/70 bg-white/78 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <p className="text-3xl font-semibold tracking-tight text-slate-950">{metric.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-slate-600">
                {metric.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{metric.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-shell lg:pl-3">
        <div className="glass-panel grid gap-6 rounded-[34px] p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/15 bg-teal-600/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-950">
              <span className="h-2 w-2 rounded-full bg-teal-600" />
              Base em movimento
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Entrega inicial com cara de produto, e nao mais de template vazio.
            </h2>
            <p className="text-sm leading-6 text-slate-700 sm:text-base">
              O layout agora conta a historia da arquitetura, deixa claro o valor do projeto e cria um ponto de partida real para o restante da aplicacao.
            </p>
            <div className="grid gap-3">
              {deliverySteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[24px] border border-slate-900/8 bg-white/78 p-4"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{step.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-4 text-white shadow-[0_24px_70px_rgba(15,23,42,0.28)]">
            <div className="grid-overlay absolute inset-0 opacity-25" />
            <div className="relative flex h-full flex-col justify-between gap-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/60">
                    Cognix preview
                  </p>
                  <p className="mt-1 text-lg font-medium text-white">MVC + responsividade</p>
                </div>
                <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  pronto para API
                </div>
              </div>

              <div className="relative mx-auto flex w-full max-w-[21rem] justify-center py-4">
                <div className="animate-float-delayed absolute inset-x-6 top-6 h-40 rounded-full bg-orange-500/22 blur-3xl" />
                <div className="animate-float-slow absolute bottom-4 left-2 h-28 w-28 rounded-full bg-teal-400/22 blur-3xl" />
                <img
                  alt={hero.imageAlt}
                  className="animate-float-slow relative z-10 w-full max-w-[16rem] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:max-w-[18rem]"
                  src={heroImage}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">Separacao</p>
                  <p className="mt-2 text-2xl font-semibold text-white">MVC</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Camadas distribuidas para manter codigo limpo.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">Viewport</p>
                  <p className="mt-2 text-2xl font-semibold text-white">3x</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Mobile, tablet e desktop tratados desde o design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
