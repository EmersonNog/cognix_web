import clsx from 'clsx'
import { LockKeyhole, Mail, ShieldCheck } from 'lucide-react'

import { type CheckoutTrustBadge } from '@/app/view/subscription/components/checkout-card/checkoutCardTypes'

const checkoutTrustBadges: CheckoutTrustBadge[] = [
  {
    icon: ShieldCheck,
    iconClassName: 'text-[var(--success)]',
    label: 'Sem fidelidade no mensal',
  },
  {
    icon: LockKeyhole,
    iconClassName: 'text-[var(--primary)]',
    label: 'Checkout protegido',
  },
  {
    className: 'col-span-2',
    icon: Mail,
    iconClassName: 'text-[var(--secondary)]',
    label: 'O acesso sera enviado para o email informado.',
  },
]

export function CheckoutTrustBadges() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 text-[12px] text-[var(--slate-2)]">
      {checkoutTrustBadges.map(
        ({ className, icon: Icon, iconClassName, label }) => (
          <span
            key={label}
            className={clsx(
              'flex items-center gap-2 rounded-[14px] border border-[var(--border)] bg-white/[0.035] px-3 py-2',
              className,
            )}
          >
            <Icon className={clsx('h-4 w-4', iconClassName)} />
            {label}
          </span>
        ),
      )}
    </div>
  )
}
