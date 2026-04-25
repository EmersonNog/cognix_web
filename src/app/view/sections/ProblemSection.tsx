import { painItems } from '@/app/model/landing-problem'
import {
  Eyebrow,
  PlusIcon,
} from '@/app/view/components/LandingPrimitives'
import { containerClass } from '@/app/view/viewTokens'

export function ProblemSection() {
  return (
    <section className="bg-[var(--bg)] py-[104px] max-[720px]:py-[72px]">
      <div className={containerClass}>
        <div className="grid grid-cols-[1.05fr_1fr] items-start gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <div>
            <Eyebrow
              className="border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
              dotClassName="bg-[#B91C1C] shadow-[0_0_0_4px_rgba(185,28,28,0.15)]"
            >
              O problema
            </Eyebrow>
            <h2 className="mt-[18px] font-[var(--font-display)] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.02em] text-[var(--ink)]">
              Estudar{' '}
              <span className="text-[var(--muted)] [text-decoration-color:rgba(148,163,184,0.6)] [text-decoration-thickness:2px] line-through">
                muito
              </span>{' '}
              nem sempre significa estudar certo.
            </h2>
            <p className="my-[18px] mb-7 text-[18px] leading-[1.6] text-[var(--slate)]">
              Você pode estar perdendo desempenho sem perceber. O problema não é
              falta de esforço — é estudar sem direção.
            </p>

            <ul className="flex list-none flex-col gap-3 p-0">
              {painItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-[14px] border border-[var(--border)] bg-white px-4 py-[14px]"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-[8px] bg-[#FEF2F2] text-[#DC2626]">
                    <PlusIcon className="h-[14px] w-[14px] rotate-45" />
                  </span>
                  <p className="text-[15px] font-medium text-[var(--ink-2)]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative top-0 overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#0F172A_0%,#1E293B_100%)] px-10 py-10 text-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.5)] min-[901px]:sticky min-[901px]:top-[100px]">
            <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-[220px] w-[220px] bg-[radial-gradient(closest-side,rgba(124,58,237,0.5),transparent_70%)]" />
            <div className="relative mb-[22px] font-[var(--font-display)] text-[22px] font-bold leading-[1.25] tracking-[-0.01em]">
              "Será que eu estou realmente melhorando, ou só acumulando horas na
              mesa?"
            </div>
            <div className="my-[22px] h-px bg-white/[0.12]" />
            <p className="relative text-[16px] leading-[1.55] text-white/[0.78]">
              Essa dúvida paralisa mais do que qualquer matéria difícil. Estudar
              sem clareza leva à{' '}
              <strong className="font-semibold text-white">
                perda de tempo, confiança e desempenho
              </strong>
              .
            </p>
            <p className="relative mt-[14px] text-[16px] leading-[1.55] text-white/[0.78]">
              O Cognix foi criado exatamente para responder essa pergunta — com
              indicadores, plano e direção.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-[999px] border border-white/[0.14] bg-white/[0.08] px-[14px] py-2 text-[13px] font-medium text-[#BFDBFE]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#60A5FA] shadow-[0_0_0_4px_rgba(96,165,250,0.25)]" />
              Diagnóstico, não achismo
            </span>
          </aside>
        </div>
      </div>
    </section>
  )
}
