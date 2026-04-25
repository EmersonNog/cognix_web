import { footerColumns } from '@/app/model/landing-footer'
import { Brand } from '@/app/view/components/Brand'
import { containerClass } from '@/app/view/viewTokens'

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[#0b0513] px-0 pb-10 pt-[72px] text-[var(--slate-2)]">
      <div className={containerClass}>
        <div className="mb-12 grid grid-cols-[1.7fr_4fr] gap-10 max-[820px]:grid-cols-1 max-[820px]:gap-8">
          <div className="max-[820px]:max-w-[360px]">
            <Brand
              href="/"
              className="mb-6 items-end gap-5 text-[30px] text-white"
              logoWrapperClassName="h-[86px] w-[70px]"
              logoClassName="h-[84px]"
              textClassName="pb-2"
            />
            <p className="max-w-[340px] border-l border-[var(--border)] pl-5 text-[14px] leading-[1.65] text-[var(--slate-2)]">
              Aplicativo de estudos personalizado com IA, feito para estudantes
              de ENEM, vestibulares e concursos que querem evoluir com mais
              direção.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8 max-[820px]:grid-cols-2 max-[520px]:gap-x-6 max-[520px]:gap-y-8">
            {footerColumns.map((column) => (
              <div key={column.title} className="min-w-0">
                <h5 className="mb-3 font-[var(--font-display)] text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--ink)]">
                  {column.title}
                </h5>
                {column.links.map((link) => {
                  const isExternal =
                    link.external ?? link.href.startsWith('http')

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className="block py-[5px] text-[13.5px] leading-[1.35] text-[var(--slate-2)] transition-colors duration-200 hover:text-[var(--primary)]"
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-t-white/[0.08] pt-6 text-[13px] text-[var(--muted)]">
          <span>© {currentYear} Cognix · Todos os direitos reservados</span>
          <span>Feito para estudar com direção.</span>
        </div>
      </div>
    </footer>
  )
}
