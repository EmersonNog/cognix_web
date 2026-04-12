import { useRef } from 'react'

import { useHomePageMotion } from '@/pages/home/view/hooks/useHomePageMotion'
import type { HomePageModel } from '@/pages/home/model/home-page.model'
import { HomeFooterSection } from '@/pages/home/view/sections/footer'
import { CognixHubSection } from '@/pages/home/view/sections/cognix-hub'
import { GlobalStudySection } from '@/pages/home/view/sections/global-study'
import { LaunchBanner } from '@/pages/home/view/sections/launch-banner'
import { PremiumHeroSection } from '@/pages/home/view/sections/premium-hero'
import { ProductValueSection } from '@/pages/home/view/sections/product-value'

type HomePageViewProps = {
  model: HomePageModel
}

export function HomePageView({ model }: HomePageViewProps) {
  const premiumHeroSectionRef = useRef<HTMLElement | null>(null)
  const productValueSectionRef = useRef<HTMLElement | null>(null)
  const motion = useHomePageMotion({
    productValueSectionRef,
    sectionRef: premiumHeroSectionRef,
  })

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
          themeProgress={motion.stickyThemeProgress}
        />

        <PremiumHeroSection
          backgroundStyle={motion.premiumHeroBackgroundStyle}
          contentStyle={motion.premiumHeroContentStyle}
          overlayStyle={motion.premiumHeroOverlayStyle}
          particlesStyle={motion.premiumHeroParticlesStyle}
          ref={premiumHeroSectionRef}
          particlesOptions={model.particlesOptions}
          particlesReady={motion.particlesReady}
          section={model.premiumHero}
          stageStyle={motion.premiumHeroStageStyle}
          visualStyle={motion.premiumHeroVisualStyle}
        />

        <ProductValueSection
          ref={productValueSectionRef}
          accentStyle={motion.productValueSectionAccentStyle}
          contentStyle={motion.productValueSectionContentStyle}
          section={model.productValueSection}
        />

        <CognixHubSection section={model.cognixHubSection} />

        <GlobalStudySection section={model.globalStudySection} />
      </main>

      <HomeFooterSection footer={model.footer} />
    </>
  )
}
