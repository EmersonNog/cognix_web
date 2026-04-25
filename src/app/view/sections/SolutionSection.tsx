import clsx from 'clsx'
import { Users } from 'lucide-react'

import {
  solutionFeatureCards,
  solutionPlanRows,
} from '@/app/model/landing-solution'
import { LandingIcon } from '@/app/view/components/LandingIcon'
import {
  CheckBadge,
  Eyebrow,
  ToneIcon,
} from '@/app/view/components/LandingPrimitives'
import { containerClass } from '@/app/view/viewTokens'

export function SolutionSection() {
  return (
    <section
      id="solucao"
      className="bg-[var(--surface)] py-[104px] max-[720px]:py-[72px]"
    >
      <div className={containerClass}>
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <Eyebrow className="mb-[18px]">A solução</Eyebrow>
          <h2 className="mb-4 font-[var(--font-display)] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.02em] text-[var(--ink)]">
            O Cognix organiza seus estudos e <br />mostra onde você precisa
            evoluir.
          </h2>
          <p className="text-[18px] leading-[1.6] text-[var(--slate)]">
            Em vez de apenas estudar mais, você passa a estudar com mais
            estratégia — combinando prática, revisão, análise de desempenho e
            personalização em uma única experiência.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 grid overflow-hidden rounded-[28px] border border-[var(--border)] bg-[linear-gradient(135deg,#EFF4FF_0%,#F3EEFF_100%)] p-12 max-[900px]:grid-cols-1 max-[900px]:p-8 min-[901px]:grid-cols-[1.1fr_1fr] min-[901px]:gap-10">
            <div>
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-[999px] border border-[var(--border)] bg-white px-[10px] py-1.5 text-[12px] font-semibold text-[var(--secondary)]">
                <LandingIcon name="zap" className="h-3 w-3" strokeWidth={2.4} />
                Plano personalizado com IA
              </span>
              <h3 className="mb-3 font-[var(--font-display)] text-[clamp(24px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-[var(--ink)]">
                Um plano que se ajusta ao seu desempenho, não ao contrário.
              </h3>
              <p className="mb-5 text-[16px] leading-[1.6] text-[var(--slate)]">
                A IA do Cognix analisa seus resultados em questões e simulados,
                identifica as áreas críticas e atualiza seu plano de estudos para
                focar no que realmente importa.
              </p>
              <div className="flex flex-wrap gap-2">
                <CheckBadge>Detecção de lacunas</CheckBadge>
                <CheckBadge>Revisão espaçada</CheckBadge>
                <CheckBadge>Priorização por peso</CheckBadge>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-[18px] border border-[var(--border)] bg-white p-[22px] shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              {solutionPlanRows.map((item) => {
                const avatarClass = {
                  blue: 'bg-[var(--primary)]',
                  purple: 'bg-[var(--secondary)]',
                  green: 'bg-[var(--success)]',
                  amber: 'bg-[var(--amber)]',
                }[item.tone]

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-[12px] bg-[var(--bg)] p-3"
                  >
                    <div
                      className={clsx(
                        'grid h-9 w-9 shrink-0 place-items-center rounded-[10px] font-[var(--font-display)] text-[13px] font-bold text-white',
                        avatarClass,
                      )}
                    >
                      {item.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-[var(--font-display)] text-[14px] font-bold text-[var(--ink)]">
                        {item.title}
                      </div>
                      <div className="mt-0.5 text-[12px] text-[var(--slate-2)]">
                        {item.subtitle}
                      </div>
                    </div>
                    <div className="font-[var(--font-display)] text-[16px] font-bold text-[var(--ink)]">
                      {item.value}
                      {item.delta ? (
                        <small className="ml-1 text-[11px] font-semibold text-[var(--success)]">
                          {item.delta}
                        </small>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <article
            data-reveal
            className="reveal col-span-7 rounded-[28px] border border-[var(--border)] bg-white p-8 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-[#CBD5E1] hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12),0_2px_6px_-2px_rgba(15,23,42,0.06)] max-[980px]:col-span-12"
          >
            <ToneIcon tone="blue" className="mb-5 h-[52px] w-[52px]">
              <LandingIcon name="barChart3" className="h-[26px] w-[26px]" strokeWidth={2} />
            </ToneIcon>
            <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
              Dashboard que mostra para onde ir
            </h3>
            <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
              Visualize sua evolução por matéria, veja indicadores claros de
              acertos e tempo, e descubra exatamente quais áreas precisam de mais
              atenção na próxima sessão.
            </p>
            <div className="mt-[22px] rounded-[16px] border border-[var(--border)] bg-[var(--bg)] p-[18px]">
              <div className="mb-1 flex items-center justify-between text-[13px] font-medium text-[var(--slate)]">
                <span>Matemática</span>
                <span className="font-[var(--font-display)] font-bold text-[var(--ink)]">
                  74%
                </span>
              </div>
              <div className="mb-[14px] h-[10px] overflow-hidden rounded-[999px] bg-[#E2E8F0]">
                <div className="h-full w-[74%] rounded-[999px] bg-[linear-gradient(90deg,var(--primary),var(--secondary))]" />
              </div>
              <div className="mb-1 flex items-center justify-between text-[13px] font-medium text-[var(--slate)]">
                <span>Redação</span>
                <span className="font-[var(--font-display)] font-bold text-[var(--ink)]">
                  68%
                </span>
              </div>
              <div className="mb-[14px] h-[10px] overflow-hidden rounded-[999px] bg-[#E2E8F0]">
                <div className="h-full w-[68%] rounded-[999px] bg-[linear-gradient(90deg,var(--primary),var(--secondary))]" />
              </div>
              <div className="mb-1 flex items-center justify-between text-[13px] font-medium text-[var(--slate)]">
                <span>História</span>
                <span className="font-[var(--font-display)] font-bold text-[var(--ink)]">
                  52%
                </span>
              </div>
              <div className="h-[10px] overflow-hidden rounded-[999px] bg-[#E2E8F0]">
                <div className="h-full w-[52%] rounded-[999px] bg-[linear-gradient(90deg,#F59E0B,#F97316)]" />
              </div>
            </div>
          </article>

          <article
            data-reveal
            className="reveal col-span-5 rounded-[28px] border border-[var(--border)] bg-white p-8 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-[#CBD5E1] hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12),0_2px_6px_-2px_rgba(15,23,42,0.06)] max-[980px]:col-span-12"
          >
            <ToneIcon tone="purple" className="mb-5 h-[52px] w-[52px]">
              <LandingIcon name="fileText" className="h-[26px] w-[26px]" strokeWidth={2} />
            </ToneIcon>
            <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
              Redação guiada por IA
            </h3>
            <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
              Escreva, receba feedback direcionado e evolua tema a tema. Sem
              ficar esperando correção manual por dias.
            </p>
            <div className="mt-[22px] rounded-[16px] border border-[var(--border)] bg-white p-3">
              <div className="mb-[6px] text-[12px] font-medium text-[var(--slate)]">
                Tema da semana
              </div>
              <div className="mb-[10px] font-[var(--font-display)] text-[14px] font-bold text-[var(--ink)]">
                Desafios da mobilidade urbana no Brasil
              </div>
              <div className="flex flex-wrap gap-[6px]">
                <span className="rounded-[999px] bg-[var(--success-50)] px-[10px] py-1 text-[11px] font-semibold text-[#15803D]">
                  C1 · 160
                </span>
                <span className="rounded-[999px] bg-[var(--success-50)] px-[10px] py-1 text-[11px] font-semibold text-[#15803D]">
                  C2 · 200
                </span>
                <span className="rounded-[999px] bg-[var(--amber-50)] px-[10px] py-1 text-[11px] font-semibold text-[#B45309]">
                  C3 · 140
                </span>
              </div>
            </div>
          </article>

          {solutionFeatureCards.map((card) => (
            <article
              key={card.title}
              data-reveal
              className="reveal col-span-4 rounded-[28px] border border-[var(--border)] bg-white p-8 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-[#CBD5E1] hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12),0_2px_6px_-2px_rgba(15,23,42,0.06)] max-[980px]:col-span-12"
            >
              <ToneIcon tone={card.tone} className="mb-5 h-[52px] w-[52px]">
                <LandingIcon name={card.icon} className="h-[26px] w-[26px]" strokeWidth={2} />
              </ToneIcon>
              <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
                {card.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
                {card.description}
              </p>
            </article>
          ))}

          <article
            data-reveal
            className="reveal col-span-5 rounded-[28px] border border-[var(--border)] bg-white p-8 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-[#CBD5E1] hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12),0_2px_6px_-2px_rgba(15,23,42,0.06)] max-[980px]:col-span-12"
          >
            <ToneIcon tone="purple" className="mb-5 h-[52px] w-[52px]">
              <Users className="h-[26px] w-[26px]" strokeWidth={2} />
            </ToneIcon>
            <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
              Partidas multiplayer
            </h3>
            <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
              Estude de forma dinâmica e competitiva: dispute rodadas de questões
              em tempo real com outros alunos.
            </p>
            <div className="mt-[22px] rounded-[16px] border border-[var(--border)] bg-[var(--bg)] p-3">
              <div className="mb-2 flex items-center gap-[10px]">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-[var(--primary)] font-[var(--font-display)] text-[12px] font-bold text-white">
                  MR
                </div>
                <div className="flex-1 text-[13px] font-semibold text-[var(--ink)]">
                  Você
                </div>
                <div className="font-[var(--font-display)] font-bold text-[var(--ink)]">
                  8/10
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-[var(--secondary)] font-[var(--font-display)] text-[12px] font-bold text-white">
                  JP
                </div>
                <div className="flex-1 text-[13px] font-semibold text-[var(--ink)]">
                  João P.
                </div>
                <div className="font-[var(--font-display)] font-bold text-[var(--slate)]">
                  7/10
                </div>
              </div>
            </div>
          </article>

          <article
            data-reveal
            className="reveal col-span-5 rounded-[28px] border border-[var(--border)] bg-white p-8 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-[#CBD5E1] hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12),0_2px_6px_-2px_rgba(15,23,42,0.06)] max-[980px]:col-span-12"
          >
            <ToneIcon tone="green" className="mb-5 h-[52px] w-[52px]">
              <LandingIcon name="zap" className="h-[26px] w-[26px]" strokeWidth={2} />
            </ToneIcon>
            <h3 className="mb-[10px] font-[var(--font-display)] text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.01em] text-[var(--ink)]">
              Plano de estudos personalizado
            </h3>
            <p className="text-[15px] leading-[1.6] text-[var(--slate)]">
              Seu plano se adapta conforme você evolui — sem precisar montar tudo
              do zero. Foco no que realmente importa.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
