import { ArrowLeft, Check, CreditCard, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import clsx from 'clsx'

import {
  findSubscriptionPlan,
  subscriptionPlans,
  type SubscriptionPlanId,
} from '@/app/model/subscription-plans'
import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import { FooterSection } from '@/app/view/sections/FooterSection'
import { HeaderSection } from '@/app/view/sections/HeaderSection'
import {
  containerClass,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/app/view/viewTokens'

type SubscriptionPageViewProps = {
  isScrolled: boolean
}

const inputClass =
  'w-full rounded-[16px] border border-[var(--border)] bg-white/[0.04] px-4 py-3 text-[15px] text-[var(--ink)] outline-none transition-[border-color,box-shadow,background] duration-150 placeholder:text-[var(--slate-2)] focus:border-[var(--primary)] focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_var(--ring)]'

function resolveInitialPlanId(): SubscriptionPlanId {
  if (typeof window === 'undefined') {
    return 'mensal'
  }

  const planParam = new URLSearchParams(window.location.search).get('plano')

  return planParam === 'anual' ? 'anual' : 'mensal'
}

export function SubscriptionPageView({ isScrolled }: SubscriptionPageViewProps) {
  const [selectedPlanId, setSelectedPlanId] = useState(resolveInitialPlanId)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const selectedPlan = findSubscriptionPlan(selectedPlanId)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsConfirmed(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-dvh bg-[var(--surface)] text-[var(--ink)]">
      <HeaderSection isScrolled={isScrolled} />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(60%_44%_at_82%_10%,rgba(216,173,77,0.14),transparent_62%),linear-gradient(180deg,#0d0717_0%,#12091f_100%)] pb-[104px] pt-[88px] max-[720px]:pb-[72px] max-[720px]:pt-[64px]">
          <div className={containerClass}>
            {isConfirmed ? (
              <div className="mx-auto max-w-[760px] text-center">
                <Eyebrow className="mb-6">Assinatura iniciada</Eyebrow>
                <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-[28px] border border-[rgba(115,225,191,0.24)] bg-[var(--success-50)] text-[var(--success)]">
                  <Check className="h-10 w-10" strokeWidth={2.4} />
                </div>
                <h1 className="mb-5 font-[var(--font-display)] text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.04em]">
                  Seu acesso esta quase pronto.
                </h1>
                <p className="mx-auto mb-8 max-w-[620px] text-[18px] leading-[1.7] text-[var(--slate)]">
                  Criamos a pre-assinatura do {selectedPlan.name.toLowerCase()}.
                  O proximo passo e concluir o pagamento no ambiente seguro e
                  baixar o app.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="/" className={secondaryButtonClass}>
                    <ArrowLeft className="h-4 w-4" strokeWidth={2.4} />
                    Voltar para a landing
                  </a>
                  <a
                    href="https://play.google.com/store/search?q=Cognix&c=apps"
                    target="_blank"
                    rel="noreferrer"
                    className={primaryButtonClass}
                  >
                    Baixar na Google Play
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(360px,0.72fr)] items-start gap-10 max-[980px]:grid-cols-1">
                <div>
                  <div className="mb-8 flex flex-col items-start gap-5">
                    <a
                      href="/#planos"
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--slate)] transition-colors duration-150 hover:text-[var(--primary)]"
                    >
                      <ArrowLeft className="h-4 w-4" strokeWidth={2.4} />
                      Voltar aos planos
                    </a>

                    <Eyebrow>Assinatura Cognix</Eyebrow>
                  </div>
                  <h1 className="mb-5 max-w-[760px] font-[var(--font-display)] text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.04em]">
                    Comece com um plano claro e sem friccao.
                  </h1>
                  <p className="mb-10 max-w-[640px] text-[18px] leading-[1.7] text-[var(--slate)]">
                    Escolha o plano, informe seus dados e avance para o pagamento
                    seguro. O acesso completo fica vinculado ao email informado.
                  </p>

                  <div className="grid grid-cols-2 gap-4 max-[720px]:grid-cols-1">
                    {subscriptionPlans.map((plan) => {
                      const isSelected = selectedPlanId === plan.id

                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={clsx(
                            'rounded-[24px] border p-6 text-left transition-[transform,border-color,background,box-shadow] duration-200 hover:-translate-y-1',
                            isSelected
                              ? 'border-[rgba(216,173,77,0.42)] bg-[radial-gradient(120%_100%_at_100%_0%,rgba(216,173,77,0.16),transparent_55%),var(--surface-card-2)] shadow-[var(--shadow-md)]'
                              : 'border-[var(--border)] bg-[var(--surface-card)] shadow-[var(--shadow-sm)] hover:border-[rgba(216,173,77,0.3)]',
                          )}
                        >
                          <div className="mb-5 flex items-center justify-between gap-3">
                            <span className="rounded-[999px] border border-[var(--border)] bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--primary)]">
                              {plan.eyebrow}
                            </span>
                            <span
                              className={clsx(
                                'grid h-7 w-7 place-items-center rounded-full border',
                                isSelected
                                  ? 'border-[var(--primary)] bg-[var(--primary)] text-[#100816]'
                                  : 'border-[var(--border)] text-transparent',
                              )}
                            >
                              <Check className="h-4 w-4" strokeWidth={3} />
                            </span>
                          </div>
                          <h2 className="mb-3 font-[var(--font-display)] text-[24px] font-bold">
                            {plan.name}
                          </h2>
                          <div className="mb-3 flex items-baseline gap-2">
                            <span className="font-[var(--font-display)] text-[38px] font-bold leading-none">
                              {plan.price}
                            </span>
                            <span className="text-[14px] text-[var(--slate)]">
                              {plan.cadence}
                            </span>
                          </div>
                          <p className="text-[14px] leading-[1.6] text-[var(--slate)]">
                            {plan.note}
                          </p>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <aside className="sticky top-[96px] rounded-[32px] border border-[var(--border)] bg-[var(--surface-card)] p-7 shadow-[var(--shadow-lg)] max-[980px]:static">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-[16px] bg-[var(--primary-50)] text-[var(--primary)]">
                      <CreditCard className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <div>
                      <h2 className="font-[var(--font-display)] text-[24px] font-bold">
                        Finalizar assinatura
                      </h2>
                      <p className="text-[14px] text-[var(--slate)]">
                        Pagamento seguro e acesso por email.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="subscription-name"
                        className="mb-2 block text-[14px] font-semibold"
                      >
                        Nome completo
                      </label>
                      <input
                        id="subscription-name"
                        required
                        autoComplete="name"
                        className={inputClass}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="subscription-email"
                        className="mb-2 block text-[14px] font-semibold"
                      >
                        Email de acesso
                      </label>
                      <input
                        id="subscription-email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputClass}
                        placeholder="voce@email.com"
                      />
                    </div>

                    <div className="mb-6 rounded-[20px] border border-[var(--border)] bg-[var(--bg)] p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="text-[14px] text-[var(--slate)]">
                          Plano selecionado
                        </span>
                        <strong className="text-right font-[var(--font-display)] text-[18px]">
                          {selectedPlan.name}
                        </strong>
                      </div>
                      <div className="mb-3 flex items-end justify-between gap-3">
                        <span className="text-[14px] text-[var(--slate)]">
                          Total hoje
                        </span>
                        <span className="font-[var(--font-display)] text-[30px] font-bold leading-none text-[var(--primary)]">
                          {selectedPlan.price}
                        </span>
                      </div>
                      <p className="text-[13px] leading-[1.55] text-[var(--slate-2)]">
                        {selectedPlan.checkoutNote}
                      </p>
                    </div>

                    <ul className="mb-7 flex list-none flex-col gap-3 p-0">
                      {selectedPlan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-[14px] text-[var(--ink-2)]"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[6px] bg-[var(--primary-50)] text-[var(--primary)]">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button type="submit" className={`${primaryButtonClass} w-full`}>
                      {selectedPlan.cta}
                    </button>
                  </form>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-[12px] text-[var(--slate-2)]">
                    <span className="flex items-center gap-2 rounded-[14px] border border-[var(--border)] bg-white/[0.035] px-3 py-2">
                      <ShieldCheck className="h-4 w-4 text-[var(--success)]" />
                      Sem fidelidade no mensal
                    </span>
                    <span className="flex items-center gap-2 rounded-[14px] border border-[var(--border)] bg-white/[0.035] px-3 py-2">
                      <LockKeyhole className="h-4 w-4 text-[var(--primary)]" />
                      Checkout protegido
                    </span>
                    <span className="col-span-2 flex items-center gap-2 rounded-[14px] border border-[var(--border)] bg-white/[0.035] px-3 py-2">
                      <Mail className="h-4 w-4 text-[var(--secondary)]" />
                      O acesso sera enviado para o email informado.
                    </span>
                  </div>
                </aside>
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
