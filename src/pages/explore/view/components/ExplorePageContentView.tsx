import { BackgroundBeams } from '@/components/ui/background-beams'
import type { ExplorePageController } from '@/pages/explore/controller/useExplorePageController'
import { ExploreLoadingOverlay } from '@/pages/explore/view/components/ExploreLoadingOverlay'
import { ExploreOverviewSectionView } from '@/pages/explore/view/components/ExploreOverviewSectionView'
import { ExploreQuestionSectionView } from '@/pages/explore/view/components/ExploreQuestionSectionView'

export function ExplorePageContentView({
  isExploreLoadingVisible,
  overviewSectionController,
  questionSectionController,
}: ExplorePageController) {
  return (
    <main className="min-h-screen w-full bg-[linear-gradient(180deg,#071024_0%,#081228_18%,#09152d_54%,#0a142b_100%)] px-5 pb-16 pt-7 text-[var(--cognix-text)] sm:px-8 sm:pb-16 sm:pt-9 lg:px-14 lg:pb-20 lg:pt-12">
      <ExploreLoadingOverlay visible={isExploreLoadingVisible} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(163,166,255,0.08)_0%,rgba(163,166,255,0)_34%),radial-gradient(circle_at_76%_72%,rgba(96,99,238,0.1)_0%,rgba(96,99,238,0)_36%)]" />
      <div className="pointer-events-none absolute inset-0 cognix-noise opacity-25" />
      <div className="pointer-events-none absolute inset-0">
        <BackgroundBeams className="opacity-65 sm:opacity-80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <a
          href="#/"
          className="inline-flex items-center rounded-full border border-[rgba(163,166,255,0.16)] bg-[rgba(6,14,32,0.32)] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[color:var(--cognix-accent)] backdrop-blur-md transition hover:border-[rgba(163,166,255,0.3)] hover:bg-[rgba(20,31,56,0.52)]"
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Voltar
        </a>

        <ExploreOverviewSectionView {...overviewSectionController} />
        <ExploreQuestionSectionView {...questionSectionController} />
      </div>
    </main>
  )
}
