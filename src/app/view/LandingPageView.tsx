import { HeaderSection } from '@/app/view/sections/HeaderSection'
import { HeroSection } from '@/app/view/sections/HeroSection'
import { TrustStrip } from '@/app/view/sections/TrustStrip'
import { AppShowcaseSection } from '@/app/view/sections/AppShowcaseSection'
import { SolutionSection } from '@/app/view/sections/SolutionSection'
import { BenefitsSection } from '@/app/view/sections/BenefitsSection'
import { PlansSection } from '@/app/view/sections/PlansSection'
import { ObjectionsSection } from '@/app/view/sections/ObjectionsSection'
import { FaqSection } from '@/app/view/sections/FaqSection'
import { FinalCtaSection } from '@/app/view/sections/FinalCtaSection'
import { FooterSection } from '@/app/view/sections/FooterSection'

type LandingPageViewProps = {
  isScrolled: boolean
}

export function LandingPageView({ isScrolled }: LandingPageViewProps) {
  return (
    <div className="min-h-dvh bg-[var(--surface)] text-[var(--ink)] selection:bg-[var(--primary)] selection:text-[#100816]">
      <HeaderSection isScrolled={isScrolled} />

      <main className="relative overflow-hidden bg-[radial-gradient(48%_32%_at_16%_0%,rgba(155,116,223,0.28),transparent_56%),radial-gradient(34%_26%_at_84%_84%,rgba(216,173,77,0.14),transparent_54%),radial-gradient(22%_18%_at_50%_44%,rgba(255,248,236,0.03),transparent_70%),linear-gradient(180deg,#090510_0%,#12091f_24%,#171028_48%,#1d1530_72%,#24182d_100%)]">
        <HeroSection />
        <TrustStrip />
        <AppShowcaseSection />
        <SolutionSection />
        <BenefitsSection />
        <PlansSection />
        <ObjectionsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <FooterSection />
    </div>
  )
}
