import { footerColumns } from '@/app/model/landing-footer'
import { Brand } from '@/app/view/components/Brand'
import { containerClass } from '@/app/view/viewTokens'

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B1220] px-0 pb-10 pt-[72px] text-[#94A3B8]">
      <div className={containerClass}>
        <div className="mb-12 grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-[820px]:grid-cols-2 max-[820px]:gap-8 max-[520px]:grid-cols-1">
          <div>
            <Brand className="mb-[14px] text-white" />
            <p className="max-w-[320px] text-[14px] leading-[1.6] text-[#94A3B8]">
              Aplicativo de estudos personalizado com IA, feito para estudantes
              de ENEM, vestibulares e concursos que querem evoluir com mais
              direção.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h5 className="mb-4 font-[var(--font-display)] text-[14px] font-bold uppercase tracking-[0.08em] text-[#F1F5F9]">
                {column.title}
              </h5>
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-[6px] text-[14.5px] text-[#94A3B8] transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-t-white/[0.08] pt-6 text-[13px] text-[#64748B]">
          <span>© {currentYear} Cognix · Todos os direitos reservados</span>
          <span>Feito para estudar com direção.</span>
        </div>
      </div>
    </footer>
  )
}
