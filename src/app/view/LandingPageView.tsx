import { HeaderSection } from '@/app/view/sections/HeaderSection'
import { HeroSection } from '@/app/view/sections/HeroSection'
import { TrustStrip } from '@/app/view/sections/TrustStrip'
import { ProblemSection } from '@/app/view/sections/ProblemSection'
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

      <main>
        <HeroSection />
        <TrustStrip />
        <ProblemSection />
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
