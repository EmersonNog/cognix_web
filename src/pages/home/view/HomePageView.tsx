import type { HeroSectionControllerState } from '@/pages/home/controller/useHeroSectionController'
import type { HomePageModel } from '@/pages/home/model/home-page.model'
import { HeroSectionView } from '@/pages/home/view/sections/HeroSectionView'
import { OverviewSectionView } from '@/pages/home/view/sections/OverviewSectionView'

type HomePageViewProps = {
  model: HomePageModel
  heroSectionController: HeroSectionControllerState
}

export function HomePageView({
  model,
  heroSectionController,
}: HomePageViewProps) {
  return (
    <main className="bg-white text-[#060E20]" style={model.themeStyle}>
      <HeroSectionView
        model={model.heroSection}
        controller={heroSectionController}
      />
      <OverviewSectionView model={model.overviewSection} />
    </main>
  )
}
