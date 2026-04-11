import { useRef } from 'react'

import { useHomePageMotion } from '@/pages/home/view/hooks/useHomePageMotion'
import { useHomeSectionSnap } from '@/pages/home/view/hooks/useHomeSectionSnap'
import { HeroSection } from '@/pages/home/view/sections/hero/HeroSection'
import { LaunchBanner } from '@/pages/home/view/sections/launch-banner/LaunchBanner'
import { ProductValueSection } from '@/pages/home/view/sections/product-value/ProductValueSection'
import type { HomePageModel } from '@/pages/home/model/home-page.model'

type HomePageViewProps = {
  model: HomePageModel
}

export function HomePageView({ model }: HomePageViewProps) {
  const productValueSectionRef = useRef<HTMLElement | null>(null)
  const motion = useHomePageMotion()

  useHomeSectionSnap({ targetRef: productValueSectionRef })

  return (
    <main
      className="min-h-screen bg-[#071a2d] text-white"
      style={model.themeStyle}
    >
      <LaunchBanner
        banner={model.launchBanner}
        theme={motion.activeSectionTheme}
        themeProgress={motion.stickyThemeProgress}
      />

      <HeroSection
        contentStyle={motion.heroContentStyle}
        hero={model.hero}
        particlesOptions={model.particlesOptions}
        particlesReady={motion.particlesReady}
        particlesStyle={motion.heroParticlesStyle}
      />

      <ProductValueSection
        ref={productValueSectionRef}
        accentStyle={motion.productValueSectionAccentStyle}
        contentStyle={motion.productValueSectionContentStyle}
        section={model.productValueSection}
      />
    </main>
  )
}
