import type { ModuleCard } from '@/pages/home/model/homePage.model'
import { ModuleBadge } from '@/pages/home/view/components/ModuleBadge'
import { SectionHeading } from '@/pages/home/view/components/SectionHeading'

interface HomeModulesSectionProps {
  modules: ModuleCard[]
}

export function HomeModulesSection({ modules }: HomeModulesSectionProps) {
  return (
    <section className="space-y-8" id="modulos">
      <SectionHeading
        description="A arquitetura nao ficou teorica: ela ja aparece no codigo e no layout. Esses sao os primeiros blocos do projeto funcionando como modulos independentes."
        eyebrow="Primeiros modulos"
        title="A base ja entrega organizacao interna e uma home pronta para continuar evoluindo."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {modules.map((module) => (
          <ModuleBadge key={module.title} module={module} />
        ))}
      </div>
    </section>
  )
}
