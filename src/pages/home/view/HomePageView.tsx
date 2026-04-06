import type { Capability, HomePageModel } from '@/pages/home/model/homePage.model'
import { HomeArchitectureSection } from '@/pages/home/view/sections/HomeArchitectureSection'
import { HomeDeliverySection } from '@/pages/home/view/sections/HomeDeliverySection'
import { HomeHeroSection } from '@/pages/home/view/sections/HomeHeroSection'
import { HomeModulesSection } from '@/pages/home/view/sections/HomeModulesSection'
import { HomePageHeader } from '@/pages/home/view/sections/HomePageHeader'
import { HomeResponsiveSection } from '@/pages/home/view/sections/HomeResponsiveSection'

interface HomePageViewProps {
  data: HomePageModel
  activeCapability: Capability
  activeCapabilityId: string
  onSelectCapability: (capabilityId: string) => void
}

export function HomePageView({
  data,
  activeCapability,
  activeCapabilityId,
  onSelectCapability,
}: HomePageViewProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.24),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(13,148,136,0.2),transparent_28%)]" />
      <div className="relative mx-auto flex min-h-svh w-full max-w-[90rem] flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <HomePageHeader brand={data.brand} navigation={data.navigation} />

        <main className="flex flex-1 flex-col gap-20 lg:gap-24">
          <HomeHeroSection
            deliverySteps={data.deliverySteps}
            hero={data.hero}
            metrics={data.metrics}
          />
          <HomeArchitectureSection
            activeCapability={activeCapability}
            activeCapabilityId={activeCapabilityId}
            architectureNote={data.architectureNote}
            capabilities={data.capabilities}
            onSelectCapability={onSelectCapability}
          />
          <HomeResponsiveSection deviceProfiles={data.deviceProfiles} />
          <HomeModulesSection modules={data.modules} />
          <HomeDeliverySection deliverySteps={data.deliverySteps} footerNote={data.footerNote} />
        </main>
      </div>
    </div>
  )
}
