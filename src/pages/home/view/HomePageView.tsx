import { useHomeHeroSectionController } from '@/pages/home/controller/useHomeHeroSectionController'
import { HomeHeroSectionView } from '@/pages/home/view/components/HomeHeroSectionView'

export function HomePageView() {
  const heroSectionController = useHomeHeroSectionController()

  return (
    <main className="w-full bg-[var(--cognix-bg)] text-[var(--cognix-text)]">
      <HomeHeroSectionView {...heroSectionController} />
    </main>
  )
}
