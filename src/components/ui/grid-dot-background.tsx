import { cn } from '@/lib/utils'

type GridDotBackgroundProps = {
  className?: string
}

export function GridDotBackground({ className }: GridDotBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div
        className="absolute inset-0 opacity-[0.9]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(177, 189, 230, 0.42) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(177, 189, 230, 0.38) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.95]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(130, 151, 215, 0.48) 1.25px, transparent 1.35px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '15px 15px',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(244,247,253,0.08)_42%,rgba(244,247,253,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(163,166,255,0.14)_0%,rgba(163,166,255,0)_28%),radial-gradient(circle_at_78%_34%,rgba(143,212,255,0.1)_0%,rgba(143,212,255,0)_24%),radial-gradient(circle_at_50%_76%,rgba(96,99,238,0.08)_0%,rgba(96,99,238,0)_26%)]" />
    </div>
  )
}
