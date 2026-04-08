import { cn } from '@/lib/utils'

type ExploreLoadingOverlayProps = {
  visible: boolean
}

export function ExploreLoadingOverlay({
  visible,
}: ExploreLoadingOverlayProps) {
  return (
    <div
      aria-hidden={!visible}
      className={cn(
        'fixed inset-0 z-50 transition duration-[420ms] ease-out',
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div className="absolute inset-0 bg-[#040814]" />
      <div className="absolute left-1/2 top-52 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,99,238,0.14)_0%,rgba(96,99,238,0)_72%)] blur-3xl sm:top-28 sm:h-[20rem] sm:w-[20rem] md:top-40 lg:top-46 lg:h-[22rem] lg:w-[22rem]" />

      <div className="absolute inset-x-0 top-0 flex justify-center px-5 pt-24 sm:px-8 sm:pt-8 md:pt-24 lg:pt-32">
        <div className="relative flex w-full max-w-[22rem] flex-col items-center overflow-hidden rounded-[28px] border border-[rgba(163,166,255,0.12)] bg-[linear-gradient(180deg,rgba(15,24,46,0.82)_0%,rgba(7,14,31,0.74)_100%)] px-7 py-7 text-center shadow-[0_0_0_1px_rgba(163,166,255,0.03),0_30px_90px_rgba(2,8,20,0.42)] backdrop-blur-xl sm:py-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-6%,rgba(163,166,255,0.16)_0%,rgba(163,166,255,0.03)_26%,rgba(163,166,255,0)_52%),linear-gradient(180deg,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0)_24%)]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,rgba(163,166,255,0)_0%,rgba(163,166,255,0.46)_50%,rgba(163,166,255,0)_100%)]" />

          <div className="relative flex h-24 w-24 items-center justify-center">
            <div className="cognix-loader-ring absolute inset-0 rounded-full border border-[rgba(163,166,255,0.12)]" />
            <div className="cognix-loader-ring absolute inset-[8px] rounded-full border border-[rgba(96,99,238,0.24)] [animation-direction:reverse]" />
            <div className="cognix-loader-ring absolute inset-0">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--cognix-accent)] shadow-[0_0_18px_rgba(163,166,255,0.72)]" />
            </div>
            <div className="cognix-loader-ring absolute inset-[10px] [animation-duration:5.8s] [animation-direction:reverse]">
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(96,99,238,0.9)] shadow-[0_0_16px_rgba(96,99,238,0.65)]" />
            </div>
            <div className="absolute inset-[18px] rounded-full bg-[radial-gradient(circle,rgba(163,166,255,0.22)_0%,rgba(163,166,255,0.03)_62%,rgba(163,166,255,0)_100%)]" />
            <div className="absolute inset-[26px] rounded-full border border-[rgba(163,166,255,0.08)]" />
            <div className="cognix-loader-core h-4 w-4 rounded-full bg-[color:var(--cognix-accent)]" />
          </div>

          <p
            className="mt-5 text-[10px] uppercase tracking-[0.28em] text-[color:var(--cognix-accent)]/84"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            SO MAIS UM INSTANTE
          </p>

          <h2
            className="mt-4 text-[26px] font-thin leading-[1.12] tracking-[0.04em] text-[color:var(--cognix-text-strong)]"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            Seu espaco esta quase pronto.
          </h2>

          <p className="mt-3 max-w-[18rem] text-[13px] leading-[1.7] text-[color:var(--cognix-muted-strong)]/78">
            Estamos deixando tudo no lugar para voce entrar na experiencia com a tela redonda.
          </p>

          <div className="mt-6 w-full max-w-[15rem]">
            <div className="rounded-full border border-[rgba(163,166,255,0.08)] bg-[rgba(163,166,255,0.04)] p-[3px]">
              <div className="relative h-2 overflow-hidden rounded-full bg-[rgba(163,166,255,0.05)]">
                <span className="cognix-loader-scan absolute inset-y-0 left-[-35%] w-[42%] rounded-full bg-[linear-gradient(90deg,rgba(96,99,238,0)_0%,rgba(163,166,255,0.58)_52%,rgba(96,99,238,0)_100%)]" />
              </div>
            </div>

            <p
              className="mt-3 text-[9px] uppercase tracking-[0.24em] text-[color:var(--cognix-muted)]/68"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              alinhando a proxima etapa
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className="cognix-loader-dot h-1.5 w-1.5 rounded-full bg-[color:var(--cognix-accent)]"
                style={{ animationDelay: `${index * 140}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
