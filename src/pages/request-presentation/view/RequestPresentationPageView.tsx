import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react'

import { AppLink } from '@/components/ui/app-link'
import logoOutlined from '@/assets/logo_outlined_light.png'
import { SectionPattern } from '@/components/ui/section-pattern'
import type {
  RequestPresentationContactChannelModel,
  RequestPresentationPageModel,
} from '@/pages/request-presentation/model/request-presentation-page.model'
import {
  isRequestPresentationDirectSendConfigured,
  submitRequestPresentationForm,
} from '@/pages/request-presentation/view/submitRequestPresentationForm'

type RequestPresentationPageViewProps = {
  page: RequestPresentationPageModel
}

type RequestPresentationFormState = {
  email: string
  focus: string
  message: string
  name: string
  profile: string
  whatsapp: string
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

const initialFormState: RequestPresentationFormState = {
  email: '',
  focus: '',
  message: '',
  name: '',
  profile: '',
  whatsapp: '',
}

const inputClassName =
  'mt-2 min-h-12 w-full rounded-[1rem] border border-[#d8e1ef] bg-[#f8fbff] px-4 text-sm text-[#0b1528] outline-none transition-colors duration-200 placeholder:text-[#7b879a] focus:border-[#3d7eff] focus:bg-white'

const textareaClassName = `${inputClassName} min-h-[8.5rem] py-3`

const profileOptions = [
  'Estudante',
  'Responsável',
  'Escola ou cursinho',
  'Parceiro comercial',
]

const focusOptions = [
  'Quero entender o fluxo completo do produto',
  'Quero avaliar parceria ou uso institucional',
  'Quero conhecer melhor o lancamento e próximos passos',
]

const presentationFlow = [
  {
    description: 'Você nos conta seu momento, objetivo e o que espera ver.',
    title: '1. Contexto',
  },
  {
    description:
      'A apresentação mostra como o Cognix organiza diagnostico, revisão e execução.',
    title: '2. Demonstração',
  },
  {
    description:
      'Fechamos com perguntas, aderencia ao seu caso e próximos encaminhamentos.',
    title: '3. Próximo passo',
  },
]

const fitCards = [
  {
    description:
      'Para quem quer enxergar na prática como o Cognix prioriza o estudo e reduz dispersão.',
    Icon: GraduationCap,
    title: 'Estudantes',
  },
  {
    description:
      'Para times que precisam entender posicionamento, aplicação e oportunidades de colaboração.',
    Icon: Building2,
    title: 'Escolas e parceiros',
  },
]

function ContactLink({
  channel,
}: {
  channel: RequestPresentationContactChannelModel
}) {
  const isEmail = channel.href.startsWith('mailto:')

  return (
    <a
      className="flex items-start justify-between gap-4 rounded-[1.25rem] border border-[#e1e8f4] bg-[#f8fbff] px-4 py-4 text-sm text-[#0c1830] transition-colors duration-200 hover:border-[#c5d6f6] hover:bg-white"
      href={channel.href}
      rel={channel.external ? 'noreferrer noopener' : undefined}
      target={channel.external ? '_blank' : undefined}
    >
      <span>
        <span className="inline-flex items-center gap-2 font-semibold">
          {isEmail ? (
            <Mail className="h-4 w-4 text-[#255cff]" />
          ) : (
            <ExternalLink className="h-4 w-4 text-[#255cff]" />
          )}
          {channel.label}
        </span>
        <span className="mt-1 block leading-6 text-[#526279]">
          {channel.description}
        </span>
      </span>

      {channel.external ? (
        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-[#6b7b92]" />
      ) : null}
    </a>
  )
}

export function RequestPresentationPageView({
  page,
}: RequestPresentationPageViewProps) {
  const [formState, setFormState] =
    useState<RequestPresentationFormState>(initialFormState)
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>('idle')
  const [submissionMessage, setSubmissionMessage] = useState('')
  const isDirectSendConfigured = isRequestPresentationDirectSendConfigured()

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    setFormState((currentState) => ({
      ...currentState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmissionState('submitting')
    setSubmissionMessage('')

    const result = await submitRequestPresentationForm(formState)

    if (result.success) {
      setFormState(initialFormState)
      setSubmissionState('success')
      setSubmissionMessage(result.message)
      return
    }

    setSubmissionState('error')
    setSubmissionMessage(result.message)
  }

  return (
    <div className="min-h-screen bg-[#eef3fb] text-[#06111f]">
      <section className="relative overflow-hidden bg-[#071a2d] pb-20 pt-6 text-[#ecf3ff] sm:pb-24 sm:pt-8 lg:pb-28">
        <SectionPattern variant="dark" className="opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,246,255,0.2)_0%,rgba(7,26,45,0)_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(89,123,255,0.2)_0%,rgba(7,26,45,0)_44%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,45,0.16)_0%,rgba(7,26,45,0.8)_72%,rgba(7,26,45,1)_100%)]" />

        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-16">
          <AppLink
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3.5 py-2 text-[0.76rem] font-medium text-[#e6ecff] transition-colors duration-200 hover:border-white/22 hover:bg-white/10 sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a home
          </AppLink>

          <AppLink
            href="/"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-[#e6ecff]/92"
          >
            <img
              alt=""
              aria-hidden="true"
              className="h-auto w-9 drop-shadow-[0_12px_22px_rgba(10,14,24,0.35)]"
              src={logoOutlined}
            />
            <span>Cognix</span>
          </AppLink>
        </div>

        <div className="relative mx-auto mt-10 grid w-full max-w-7xl gap-8 px-5 sm:mt-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] lg:items-end lg:px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#64d9ff]/24 bg-[#64d9ff]/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#8fe7ff]">
              <Sparkles className="h-3.5 w-3.5" />
              {page.eyebrow}
            </div>

            <h1 className="mt-5 max-w-[12ch] text-[clamp(2.6rem,8vw,5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
              {page.title}
            </h1>

            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#bfd0ef] sm:text-[1.05rem]">
              {page.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {page.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-[#e8f1ff]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-5 shadow-[0_24px_60px_rgba(3,8,20,0.24)] backdrop-blur-xl sm:p-6">
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[#92a7ce]">
              Como a conversa acontece
            </p>

            <div className="mt-5 space-y-4">
              {presentationFlow.map((step) => (
                <div
                  key={step.title}
                  className="rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4"
                >
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#bfd0ef]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.4rem] border border-[#5fcfff]/18 bg-[#5fcfff]/10 px-4 py-4">
              <p className="text-sm font-semibold text-white">
                Preferir contato direto?
              </p>
              <a
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[#9eeaff] transition-colors duration-200 hover:text-white"
                href="mailto:vestibularapp@gmail.com"
              >
                <Mail className="h-4 w-4" />
                vestibularapp@gmail.com
              </a>
              <p className="mt-2 text-xs leading-5 text-[#bfd0ef]">
                O formulario abaixo pode enviar direto pelo site quando a chave de
                envio estiver configurada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative -mt-8 pb-16 sm:-mt-10 sm:pb-20">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.84fr)] lg:px-16">
          <div className="space-y-6">
            <section className="rounded-[1.9rem] border border-[#d8e0ee] bg-white/94 p-6 shadow-[0_18px_50px_rgba(12,22,44,0.07)] sm:p-7">
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#6d7a8c]">
                O que mostramos
              </p>

              <ul className="mt-4 space-y-3">
                {page.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex gap-3 rounded-[1.25rem] border border-[#e4eaf3] bg-[#f8fbff] px-4 py-3 text-sm leading-6 text-[#22324b]"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#2e6bff]" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-4 sm:grid-cols-2">
              {fitCards.map(({ description, Icon, title }) => (
                <article
                  key={title}
                  className="rounded-[1.9rem] border border-[#d8e0ee] bg-white/94 p-6 shadow-[0_18px_50px_rgba(12,22,44,0.07)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1.1rem] border border-[#dce6f5] bg-[#f6f9ff] text-[#2157ff]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h2 className="mt-4 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#0a1730]">
                    {title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#526279]">
                    {description}
                  </p>
                </article>
              ))}
            </section>

            <section className="rounded-[1.9rem] border border-[#d8e0ee] bg-white/94 p-6 shadow-[0_18px_50px_rgba(12,22,44,0.07)] sm:p-7">
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#6d7a8c]">
                Ideal para
              </p>

              <ul className="mt-4 space-y-3">
                {page.audiences.map((audience) => (
                  <li
                    key={audience}
                    className="rounded-[1.25rem] border border-[#e4eaf3] bg-[#f8fbff] px-4 py-3 text-sm leading-6 text-[#31445f]"
                  >
                    {audience}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[1.9rem] border border-[#d8e0ee] bg-white/94 p-6 shadow-[0_18px_50px_rgba(12,22,44,0.07)] sm:p-7">
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#6d7a8c]">
                Canais de contato
              </p>

              <div className="mt-4 space-y-3">
                {page.contactChannels.map((channel) => (
                  <ContactLink key={channel.href} channel={channel} />
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-[2rem] border border-[#d8e0ee] bg-white/96 p-6 shadow-[0_22px_60px_rgba(12,22,44,0.09)] sm:p-7">
            <div className="max-w-xl">
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#6d7a8c]">
                Formulário
              </p>
              <h2 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.04em] text-[#09172c] sm:text-[1.7rem]">
                {page.formTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#526279] sm:text-[0.98rem]">
                {page.formDescription}
              </p>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-[#16253f]">
                  Nome
                  <input
                    autoComplete="name"
                    className={inputClassName}
                    name="name"
                    onChange={handleFieldChange}
                    placeholder="Seu nome"
                    required
                    value={formState.name}
                  />
                </label>

                <label className="block text-sm font-medium text-[#16253f]">
                  Email
                  <input
                    autoComplete="email"
                    className={inputClassName}
                    name="email"
                    onChange={handleFieldChange}
                    placeholder="voce@exemplo.com"
                    required
                    type="email"
                    value={formState.email}
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-[#16253f]">
                  WhatsApp
                  <input
                    autoComplete="tel"
                    className={inputClassName}
                    name="whatsapp"
                    onChange={handleFieldChange}
                    placeholder="(00) 00000-0000"
                    value={formState.whatsapp}
                  />
                </label>

                <label className="block text-sm font-medium text-[#16253f]">
                  Perfil
                  <select
                    className={inputClassName}
                    name="profile"
                    onChange={handleFieldChange}
                    required
                    value={formState.profile}
                  >
                    <option value="">Selecione</option>
                    {profileOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <input
                aria-hidden="true"
                autoComplete="off"
                className="hidden"
                name="botcheck"
                readOnly
                tabIndex={-1}
                value=""
              />

              <label className="block text-sm font-medium text-[#16253f]">
                Interesse principal
                <select
                  className={inputClassName}
                  name="focus"
                  onChange={handleFieldChange}
                  required
                  value={formState.focus}
                >
                  <option value="">Selecione</option>
                  {focusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-medium text-[#16253f]">
                O que você quer ver na apresentação?
                <textarea
                  className={textareaClassName}
                  name="message"
                  onChange={handleFieldChange}
                  placeholder="Ex.: quero entender como o Cognix define prioridades, mostra desempenho e organiza o plano semanal."
                  value={formState.message}
                />
              </label>

              <button
                disabled={submissionState === 'submitting'}
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[1rem] bg-[#0f2342] px-5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,35,66,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#16315f] disabled:cursor-not-allowed disabled:bg-[#8a97ad] disabled:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#72a8ff]"
              >
                <Send className="h-4 w-4" />
                {submissionState === 'submitting'
                  ? 'Enviando solicitação...'
                  : 'Enviar solicitação'}
              </button>

              <p className="text-xs leading-5 text-[#6d7a8c]">
                {isDirectSendConfigured
                  ? 'Ao enviar, os dados seguem direto pelo site e você pode acompanhar a resposta pelos canais informados.'
                  : 'Para ativar o envio direto neste ambiente, configure VITE_WEB3FORMS_ACCESS_KEY. Enquanto isso, o contato direto por e-mail continua disponível acima.'}
              </p>
            </form>

            {submissionState === 'success' ? (
              <div className="mt-5 rounded-[1.4rem] border border-[#cce0ff] bg-[#f3f8ff] px-4 py-4 text-sm leading-6 text-[#27405f]">
                {submissionMessage}
              </div>
            ) : null}

            {submissionState === 'error' ? (
              <div className="mt-5 rounded-[1.4rem] border border-[#f3d6d0] bg-[#fff5f2] px-4 py-4 text-sm leading-6 text-[#7a3326]">
                {submissionMessage}
                <div className="mt-2">
                  <a
                    className="font-semibold text-[#9f3725] hover:text-[#7d291b]"
                    href="mailto:vestibularapp@gmail.com"
                  >
                    Enviar por e-mail manualmente
                  </a>
                </div>
              </div>
            ) : null}
          </section>
        </div>
      </main>
    </div>
  )
}
