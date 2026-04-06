import type { DeviceProfile } from '@/pages/home/model/homePage.model'
import { DevicePreview } from '@/pages/home/view/components/DevicePreview'
import { SectionHeading } from '@/pages/home/view/components/SectionHeading'

interface HomeResponsiveSectionProps {
  deviceProfiles: DeviceProfile[]
}

export function HomeResponsiveSection({ deviceProfiles }: HomeResponsiveSectionProps) {
  return (
    <section className="space-y-8" id="responsivo">
      <SectionHeading
        description="Cada secao foi desenhada em mobile first e depois expandida para tablet e desktop. Nao e apenas um layout que encolhe: a composicao muda de verdade conforme a viewport."
        eyebrow="Responsividade real"
        title="A mesma base se reorganiza para toque, leitura e densidade de informacao."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {deviceProfiles.map((profile) => (
          <article
            key={profile.name}
            className="rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-semibold tracking-tight text-slate-950">
                  {profile.name}
                </p>
                <p className="text-sm text-slate-500">{profile.breakpoint}</p>
              </div>
              <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white">
                viewport
              </span>
            </div>

            <div className="mt-5">
              <DevicePreview layout={profile.layout} />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-700">{profile.summary}</p>

            <div className="mt-5 space-y-3">
              {profile.details.map((detail) => (
                <div key={detail} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-950" />
                  <p className="text-sm leading-6 text-slate-700">{detail}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
