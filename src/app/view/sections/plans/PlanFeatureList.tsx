import { Check } from 'lucide-react'

type PlanFeatureListProps = {
  features: string[]
  itemClassName: string
}

export function PlanFeatureList({
  features,
  itemClassName,
}: PlanFeatureListProps) {
  return (
    <ul className="mb-7 flex list-none flex-col gap-3 p-0">
      {features.map((feature) => (
        <li key={feature} className={itemClassName}>
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[6px] bg-[var(--primary-50)] text-[var(--primary)]">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {feature}
        </li>
      ))}
    </ul>
  )
}
