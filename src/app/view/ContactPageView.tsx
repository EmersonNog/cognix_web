import { Mail, Send } from 'lucide-react'

import { useContactFormController } from '@/app/controller/useContactFormController'
import { Eyebrow } from '@/app/view/components/LandingPrimitives'
import { FooterSection } from '@/app/view/sections/FooterSection'
import { HeaderSection } from '@/app/view/sections/HeaderSection'
import { containerClass, primaryButtonClass } from '@/app/view/viewTokens'

type ContactPageViewProps = {
  isScrolled: boolean
}

const inputClass =
  'w-full rounded-[18px] border border-[var(--border)] bg-white px-4 py-3 text-[15px] text-[var(--ink)] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-[var(--slate-2)] focus:border-[var(--primary)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]'

export function ContactPageView({ isScrolled }: ContactPageViewProps) {
  const { feedback, form, handleSubmit, isSubmitting, status, updateField } =
    useContactFormController()

  return (
    <div className="min-h-dvh bg-[var(--surface)] text-[var(--ink)]">
      <HeaderSection isScrolled={isScrolled} />

      <main>
        <section className="bg-[linear-gradient(180deg,#F8FAFF_0%,#FFFFFF_46%,#FFFFFF_100%)] py-[88px] max-[720px]:py-[64px]">
          <div className={containerClass}>
            <div className="mx-auto grid max-w-[980px] grid-cols-[0.9fr_1.1fr] gap-8 max-[860px]:grid-cols-1">
              <div>
                <Eyebrow className="mb-5">Contato</Eyebrow>

                <h1 className="mb-5 font-[var(--font-display)] text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
                  Fale conosco
                </h1>

                <p className="mb-8 text-[18px] leading-[1.7] text-[var(--slate)]">
                  Envie sua mensagem pelo formulário. A resposta será enviada
                  para o email informado assim que possível.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[28px] border border-[var(--border)] bg-white p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] max-[720px]:p-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-[16px] bg-[var(--primary-50)] text-[var(--primary)]">
                    <Mail className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h2 className="font-[var(--font-display)] text-[24px] font-bold tracking-[-0.02em] text-[var(--ink)]">
                      Enviar email
                    </h2>
                    <p className="text-[14px] text-[var(--slate)]">
                      Responderemos pelo endereço informado.
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[14px] font-semibold text-[var(--ink)]"
                  >
                    Nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    className={inputClass}
                    placeholder="Seu nome"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[14px] font-semibold text-[var(--ink)]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    className={inputClass}
                    placeholder="voce@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-[14px] font-semibold text-[var(--ink)]"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(event) =>
                      updateField('message', event.target.value)
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${primaryButtonClass} w-full disabled:pointer-events-none disabled:opacity-70`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                  <Send className="h-4 w-4" strokeWidth={2.4} />
                </button>

                {feedback && (
                  <p
                    className={`mt-4 rounded-[16px] px-4 py-3 text-[14px] font-medium ${
                      status === 'success'
                        ? 'bg-[var(--success-50)] text-[#15803D]'
                        : 'bg-[#FEF2F2] text-[#B91C1C]'
                    }`}
                  >
                    {feedback}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
