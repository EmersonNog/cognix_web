import clsx from 'clsx'
import {
  Check,
  CreditCard,
  LoaderCircle,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import { type ChangeEvent, type FormEvent } from 'react'

import { type SubscriptionPlan } from '@/app/model/subscription-plans'
import { SUBSCRIPTION_INPUT_CLASS } from '@/app/view/subscription/subscriptionConstants'
import { primaryButtonClass } from '@/app/view/viewTokens'

type CheckoutCardProps = {
  selectedPlan: SubscriptionPlan
  isSubmitting: boolean
  errorMessage: string | null
  taxId: string
  couponCode: string
  isCouponEnabled: boolean
  isCouponFieldEnabled: boolean
  isCouponCodeInvalid: boolean
  isMonthlyPlan: boolean
  couponHelperText: string | null
  checkoutDisplayPrice: string
  checkoutPriceLabel: string
  checkoutDisplayNote: string
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onTaxIdChange: (event: ChangeEvent<HTMLInputElement>) => void
  onCouponCodeChange: (event: ChangeEvent<HTMLInputElement>) => void
  onCouponToggle: (event: ChangeEvent<HTMLInputElement>) => void
}

export function CheckoutCard({
  selectedPlan,
  isSubmitting,
  errorMessage,
  taxId,
  couponCode,
  isCouponEnabled,
  isCouponFieldEnabled,
  isCouponCodeInvalid,
  isMonthlyPlan,
  couponHelperText,
  checkoutDisplayPrice,
  checkoutPriceLabel,
  checkoutDisplayNote,
  onSubmit,
  onTaxIdChange,
  onCouponCodeChange,
  onCouponToggle,
}: CheckoutCardProps) {
  return (
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
            Checkout seguro via AbacatePay.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            htmlFor="subscription-name"
            className="mb-2 block text-[14px] font-semibold"
          >
            Nome completo
          </label>
          <input
            id="subscription-name"
            name="name"
            required
            autoComplete="name"
            className={SUBSCRIPTION_INPUT_CLASS}
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
            name="email"
            type="email"
            required
            autoComplete="email"
            className={SUBSCRIPTION_INPUT_CLASS}
            placeholder="voce@email.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subscription-tax-id"
            className="mb-2 block text-[14px] font-semibold"
          >
            CPF
          </label>
          <input
            id="subscription-tax-id"
            name="taxId"
            required
            inputMode="numeric"
            autoComplete="off"
            maxLength={14}
            value={taxId}
            onChange={onTaxIdChange}
            className={SUBSCRIPTION_INPUT_CLASS}
            placeholder="000.000.000-00"
          />
        </div>

        {isMonthlyPlan && (
          <div className="mb-4">
            <label
              htmlFor="subscription-use-coupon"
              className="inline-flex cursor-pointer items-center gap-3 text-[14px] font-semibold"
            >
              <input
                id="subscription-use-coupon"
                type="checkbox"
                checked={isCouponEnabled}
                onChange={onCouponToggle}
                className="h-4 w-4 rounded border border-[var(--border)] accent-[var(--primary)]"
              />
              Usar cupom
            </label>

            {isCouponFieldEnabled && (
              <div className="mt-3">
                <input
                  id="subscription-coupon"
                  name="couponCode"
                  aria-describedby={
                    couponHelperText ? 'subscription-coupon-note' : undefined
                  }
                  aria-invalid={isCouponCodeInvalid || undefined}
                  autoComplete="off"
                  value={couponCode}
                  onChange={onCouponCodeChange}
                  className={clsx(
                    SUBSCRIPTION_INPUT_CLASS,
                    isCouponCodeInvalid &&
                      'border-[rgba(255,112,112,0.54)] bg-[rgba(255,112,112,0.06)] focus:border-[rgba(255,112,112,0.74)] focus:shadow-[0_0_0_4px_rgba(255,112,112,0.12)]',
                  )}
                  placeholder="cupom"
                />
                {couponHelperText && (
                  <p
                    id="subscription-coupon-note"
                    className={clsx(
                      'mt-2 text-[12px] leading-[1.45]',
                      isCouponCodeInvalid
                        ? 'text-[rgba(255,158,158,0.95)]'
                        : 'text-[var(--slate-2)]',
                    )}
                  >
                    {couponHelperText}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

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
              {checkoutPriceLabel}
            </span>
            <span className="font-[var(--font-display)] text-[30px] font-bold leading-none text-[var(--primary)]">
              {checkoutDisplayPrice}
            </span>
          </div>
          <p className="text-[13px] leading-[1.55] text-[var(--slate-2)]">
            {checkoutDisplayNote}
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

        <button
          type="submit"
          disabled={isSubmitting || isCouponCodeInvalid}
          className={`checkout-button ${primaryButtonClass} w-full disabled:cursor-not-allowed disabled:opacity-70`}
        >
          {isSubmitting ? (
            <>
              <LoaderCircle
                className="h-4 w-4 animate-spin"
                strokeWidth={2.4}
              />
              Abrindo checkout
            </>
          ) : (
            selectedPlan.cta
          )}
        </button>

        {errorMessage && (
          <p
            role="alert"
            className="mt-3 rounded-[16px] border border-[rgba(255,112,112,0.3)] bg-[rgba(255,112,112,0.08)] px-4 py-3 text-[13px] leading-[1.5] text-[var(--ink)]"
          >
            {errorMessage}
          </p>
        )}
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
          <Mail className="h-4 w-4 text-[var(--secondary)]" />O acesso sera
          enviado para o email informado.
        </span>
      </div>
    </aside>
  )
}
