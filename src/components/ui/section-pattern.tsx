import { cn } from '@/lib/utils'

type SectionPatternProps = {
  className?: string
  variant?: 'dark' | 'light'
}

export function SectionPattern({
  className,
  variant = 'dark',
}: SectionPatternProps) {
  const isDark = variant === 'dark'
  const gridClassName = isDark
    ? '[background-image:linear-gradient(to_right,rgba(126,251,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(126,251,255,0.06)_1px,transparent_1px)]'
    : '[background-image:linear-gradient(to_right,rgba(6,14,32,0.085)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,14,32,0.085)_1px,transparent_1px)]'
  const dotsClassName = isDark
    ? '[background-image:radial-gradient(circle_at_center,rgba(126,251,255,0.18)_0.8px,transparent_0.8px)]'
    : '[background-image:radial-gradient(circle_at_center,rgba(6,14,32,0.16)_0.8px,transparent_0.8px)]'

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden [--pattern-size:24px] [--dot-size:12px] sm:[--pattern-size:30px] sm:[--dot-size:15px] lg:[--pattern-size:40px] lg:[--dot-size:20px]',
        className,
      )}
    >
      <div
        className={cn(
          'absolute inset-0',
          '[background-position:left_top]',
          '[background-size:var(--pattern-size)_var(--pattern-size)]',
          gridClassName,
        )}
      />

      <div
        className={cn(
          isDark ? 'absolute inset-0 opacity-60' : 'absolute inset-0 opacity-85',
          '[background-position:left_top]',
          '[background-size:var(--dot-size)_var(--dot-size)]',
          dotsClassName,
        )}
      />

      <div
        className={cn(
          'absolute inset-0',
          isDark
            ? 'bg-[#071a2d]/45 [mask-image:radial-gradient(ellipse_at_center,transparent_18%,black)]'
            : 'bg-white/38 [mask-image:radial-gradient(ellipse_at_center,transparent_18%,black)]',
        )}
      />
    </div>
  )
}
