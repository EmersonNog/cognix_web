import {
  ArrowLeft,
  Cookie,
  ExternalLink,
  FileText,
  Mail,
  ShieldCheck,
} from 'lucide-react'

import logoOutlined from '@/assets/logo_outlined_light.png'
import { SectionPattern } from '@/components/ui/section-pattern'
import { cn } from '@/lib/utils'
import {
  createLegalHashHref,
  legalPages,
  legalPageRoutes,
  type LegalPageModel,
} from '@/pages/legal/model/legal-pages.model'

const pageTheme = {
  'politica-de-cookies': {
    accentClassName:
      'border-[#5ac8ff]/28 bg-[#5ac8ff]/12 text-[#5ac8ff]',
    glowClassName:
      'bg-[radial-gradient(circle_at_top,rgba(90,200,255,0.26)_0%,rgba(7,26,45,0)_58%)]',
    Icon: Cookie,
  },
  'politica-de-privacidade': {
    accentClassName:
      'border-[#68e0c8]/28 bg-[#68e0c8]/12 text-[#68e0c8]',
    glowClassName:
      'bg-[radial-gradient(circle_at_top,rgba(104,224,200,0.24)_0%,rgba(7,26,45,0)_58%)]',
    Icon: ShieldCheck,
  },
  'termos-de-uso': {
    accentClassName:
      'border-[#a3a6ff]/28 bg-[#a3a6ff]/12 text-[#a3a6ff]',
    glowClassName:
      'bg-[radial-gradient(circle_at_top,rgba(163,166,255,0.24)_0%,rgba(7,26,45,0)_58%)]',
    Icon: FileText,
  },
} as const

type LegalPageViewProps = {
  page: LegalPageModel
}

export function LegalPageView({ page }: LegalPageViewProps) {
  const { Icon, accentClassName, glowClassName } = pageTheme[page.route]
  const contact = page.contact

  return (
    <div className="min-h-screen bg-[#eef3fb] text-[#06111f]">
      <section className="relative overflow-hidden bg-[#071a2d] pb-18 pt-6 text-[#e6ecff] sm:pb-20 sm:pt-8 lg:pb-24">
        <SectionPattern variant="dark" className="opacity-55" />
        <div
          aria-hidden="true"
          className={cn('absolute inset-0', glowClassName)}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,45,0.2)_0%,rgba(7,26,45,0.78)_72%,rgba(7,26,45,1)_100%)]" />

        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-16">
          <a
            href="/#inicio"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3.5 py-2 text-[0.76rem] font-medium text-[#e6ecff] transition-colors duration-200 hover:border-white/22 hover:bg-white/10 sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a home
          </a>

          <a
            href="/#inicio"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-[#e6ecff]/92"
          >
            <img
              alt=""
              aria-hidden="true"
              className="h-auto w-9 drop-shadow-[0_12px_22px_rgba(10,14,24,0.35)]"
              src={logoOutlined}
            />
            <span>Cognix</span>
          </a>
        </div>

        <div className="relative mx-auto mt-10 grid w-full max-w-7xl gap-8 px-5 sm:mt-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,20rem)] lg:items-end lg:px-16">
          <div className="max-w-3xl">
            <div
              className={cn(
                'inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] uppercase',
                accentClassName,
              )}
            >
              {page.eyebrow}
            </div>

            <h1 className="mt-5 max-w-[12ch] text-[clamp(2.5rem,8vw,4.6rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
              {page.title}
            </h1>

            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#b8c6e6] sm:text-[1.05rem]">
              {page.summary}
            </p>
          </div>

          <div className="rounded-[1.9rem] border border-white/12 bg-white/8 p-5 shadow-[0_24px_60px_rgba(3,8,20,0.24)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-2xl border',
                  accentClassName,
                )}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Documento em vigor
                </p>
                <p className="text-sm text-[#b8c6e6]">
                  {page.updatedAtLabel}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#c9d4ee]">
              Este texto vale para a landing page do Cognix e para os canais
              oficiais referenciados a partir dela.
            </p>
          </div>
        </div>
      </section>

      <main className="relative -mt-8 pb-16 sm:-mt-10 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
          <nav className="rounded-[1.8rem] border border-[#d8e0ee] bg-white/92 p-2 shadow-[0_18px_50px_rgba(12,22,44,0.08)] backdrop-blur-xl">
            <div className="flex flex-wrap gap-2">
              {legalPageRoutes.map((route) => {
                const legalPage = legalPages[route]
                const isActive = route === page.route

                return (
                  <a
                    key={route}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'inline-flex rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'bg-[#0f2342] text-white shadow-[0_12px_28px_rgba(15,35,66,0.18)]'
                        : 'text-[#30425f] hover:bg-[#eef3fb] hover:text-[#0f2342]',
                    )}
                    href={createLegalHashHref(route)}
                  >
                    {legalPage.title}
                  </a>
                )
              })}
            </div>
          </nav>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,19rem)]">
            <div className="space-y-5">
              {page.sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[1.9rem] border border-[#d8e0ee] bg-white/94 p-6 shadow-[0_18px_50px_rgba(12,22,44,0.07)] sm:p-7"
                >
                  <h2 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-[#09172c] sm:text-[1.38rem]">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-4 text-[0.95rem] leading-7 text-[#42536d] sm:text-[1rem]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets?.length ? (
                    <ul className="mt-4 space-y-3 text-[0.95rem] leading-7 text-[#22324b] sm:text-[1rem]">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 rounded-2xl border border-[#e3e8f2] bg-[#f8faff] px-4 py-3"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4b71ff]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <aside className="space-y-5">
              {contact ? (
                <section className="rounded-[1.9rem] border border-[#102443] bg-[#0c1730] p-6 text-[#e6ecff] shadow-[0_22px_60px_rgba(3,8,20,0.24)]">
                  <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em]">
                    {contact.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#b8c6e6]">
                    {contact.description}
                  </p>

                  <div className="mt-4 space-y-3">
                    {contact.channels.map((channel) => {
                      const isEmail = channel.href.startsWith('mailto:')

                      return (
                        <a
                          key={channel.href}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/24 hover:bg-white/12"
                          href={channel.href}
                          rel={channel.external ? 'noreferrer noopener' : undefined}
                          target={channel.external ? '_blank' : undefined}
                        >
                          <span className="inline-flex items-center gap-2">
                            {isEmail ? (
                              <Mail className="h-4 w-4" />
                            ) : (
                              <ExternalLink className="h-4 w-4" />
                            )}
                            {channel.label}
                          </span>
                          {channel.external ? (
                            <ExternalLink className="h-4 w-4 shrink-0 opacity-80" />
                          ) : null}
                        </a>
                      )
                    })}
                  </div>
                </section>
              ) : null}

              <section className="rounded-[1.9rem] border border-[#d8e0ee] bg-white/94 p-6 shadow-[0_18px_50px_rgba(12,22,44,0.07)]">
                <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-[#09172c]">
                  Resumo rapido
                </h2>

                <ul className="mt-4 space-y-3">
                  {page.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl border border-[#e3e8f2] bg-[#f8faff] px-4 py-3 text-sm leading-6 text-[#31445f]"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
