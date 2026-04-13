import { SectionPattern } from '@/components/ui/section-pattern'
import logoOutlined from '@/assets/logo_outlined_dark.png'
import type { HomeFooterModel } from '@/pages/home/model/home-page.model'

type HomeFooterSectionProps = {
  footer: HomeFooterModel
}

export function HomeFooterSection({ footer }: HomeFooterSectionProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-30 overflow-hidden bg-white px-5 pb-8 pt-8 text-[#060E20] sm:px-8 sm:pb-10 sm:pt-10 lg:px-16 lg:pb-11 lg:pt-10">
      <SectionPattern variant="light" className="opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(6,14,32,0),rgba(145,160,186,0.55),rgba(6,14,32,0))]" />
      <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(239,245,255,0.62),rgba(255,255,255,0))]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-5 gap-y-5 sm:gap-x-8 sm:gap-y-6 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,0.72fr))] lg:gap-8">
        <div className="col-span-2 max-w-sm lg:col-span-1">
          <img
            aria-hidden="true"
            alt=""
            className="block h-auto w-[3.15rem] -ml-[0.16rem] drop-shadow-[0_14px_24px_rgba(17,19,24,0.12)] sm:w-[4rem] sm:-ml-[0.22rem]"
            src={logoOutlined}
          />

          <div className="mt-2 space-y-0.5">
            <p className="text-[0.9rem] font-normal leading-[1.15] tracking-[-0.02em] text-[#111318] sm:text-[1.05rem]">
              {footer.brandName}
            </p>
            <p className="whitespace-nowrap text-[0.68rem] font-normal leading-[1rem] tracking-[-0.01em] text-[#5c6678] sm:text-[0.9rem] sm:leading-5">
              {footer.description}
            </p>
          </div>
        </div>

        {footer.groups.map((group, index) => (
          <section
            key={group.title}
            aria-label={group.title}
            className={index === footer.groups.length - 1 ? 'col-span-2 min-w-0 lg:col-span-1' : 'min-w-0'}
          >
            <h2 className="text-[0.58rem] font-semibold tracking-[0.16em] uppercase text-[#808796] sm:text-[0.76rem] sm:tracking-[0.2em]">
              {group.title}
            </h2>

            <ul className="mt-2 space-y-1 text-[0.82rem] leading-[1.2rem] text-[#0f1728] sm:mt-3.5 sm:space-y-2 sm:text-[1rem] sm:leading-7">
              {group.items.map((item) => (
                <li key={typeof item === 'string' ? item : item.label}>
                  {typeof item === 'string' ? (
                    item
                  ) : item.href ? (
                    <a
                      className="inline-flex text-[#0f1728] transition-colors duration-200 hover:text-[#335cff]"
                      href={item.href}
                      rel={item.external ? 'noreferrer noopener' : undefined}
                      target={item.external ? '_blank' : undefined}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="relative mx-auto mt-5 w-full max-w-7xl border-t border-[#d9e0eb] pt-2.5">
        <p className="text-[0.72rem] leading-[1rem] text-[#667085] sm:text-[0.92rem] sm:leading-6">
          {`Copyright ${currentYear} ${footer.brandName}. Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}
