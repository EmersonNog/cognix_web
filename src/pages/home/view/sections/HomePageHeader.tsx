import type { HomePageModel } from '@/pages/home/model/homePage.model'
import { BrandMark } from '@/pages/home/view/components/BrandMark'

interface HomePageHeaderProps {
  brand: HomePageModel['brand']
  navigation: HomePageModel['navigation']
}

export function HomePageHeader({ brand, navigation }: HomePageHeaderProps) {
  return (
    <header className="glass-panel sticky top-4 z-30 mb-12 rounded-[30px] px-4 py-4 sm:px-5 lg:px-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 border-b border-slate-900/8 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Estrutura pronta para crescer
            </p>
            <p className="mt-1 text-sm text-slate-600">
              O projeto ficou com uma unica tela ativa agora, mantendo a base MVC preparada para novas paginas.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-3" href="#topo">
              <BrandMark />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-950">
                  {brand.name}
                </p>
                <p className="text-xs text-slate-600">{brand.tagline}</p>
              </div>
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="rounded-full border border-white/80 bg-white/70 px-4 py-2 transition duration-200 hover:-translate-y-0.5 hover:bg-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
