import { useRef } from 'react'

import { useHomePageMotion } from '@/pages/home/view/hooks/useHomePageMotion'
import { useHomeSectionSnap } from '@/pages/home/view/hooks/useHomeSectionSnap'
import type { HomePageModel } from '@/pages/home/model/home-page.model'
import { HomeFooterSection } from '@/pages/home/view/sections/footer'
import { GlobalStudySection } from '@/pages/home/view/sections/global-study'
import { HeroSection } from '@/pages/home/view/sections/hero'
import { LaunchBanner } from '@/pages/home/view/sections/launch-banner'
import { ProductValueSection } from '@/pages/home/view/sections/product-value'

type HomePageViewProps = {
  model: HomePageModel
}

export function HomePageView({ model }: HomePageViewProps) {
  const productValueSectionRef = useRef<HTMLElement | null>(null)
  const motion = useHomePageMotion()

  useHomeSectionSnap({ targetRef: productValueSectionRef })

  return (
    <>
      <main
        id="inicio"
        className="min-h-screen bg-[#071a2d] text-white"
        style={model.themeStyle}
      >
        <LaunchBanner
          banner={model.launchBanner}
          accentProgress={motion.stickyAccentProgress}
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

        <GlobalStudySection section={model.globalStudySection} />
      </main>

      <HomeFooterSection footer={model.footer} />
    </>
  )
}
