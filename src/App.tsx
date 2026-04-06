const highlights = [
  'React 19 + TypeScript',
  'Tailwind CSS 4 configurado',
  'Vite pronto para desenvolvimento',
]

const steps = [
  {
    title: 'Estrutura moderna',
    description:
      'Base leve e rapida para comecar paginas, dashboards e fluxos autenticados.',
  },
  {
    title: 'Design pronto para evoluir',
    description:
      'Uma home inicial com identidade visual propria para voce adaptar sem partir do zero.',
  },
  {
    title: 'Fluxo de desenvolvimento simples',
    description:
      'Use npm run dev para desenvolver e npm run build para gerar a versao de producao.',
  },
]

function App() {
  return (
    <main className="relative isolate overflow-hidden px-6 py-8 text-[var(--ink)] sm:px-10 lg:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.22),transparent_55%)]" />
      <div className="absolute right-[-8rem] top-28 -z-10 h-72 w-72 rounded-full bg-[rgba(249,115,22,0.14)] blur-3xl" />
      <div className="absolute left-[-5rem] top-40 -z-10 h-64 w-64 rounded-full bg-[rgba(15,118,110,0.12)] blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-between gap-10">
        <section className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:gap-12">
          <div className="space-y-8 rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8 shadow-[0_20px_60px_rgba(16,32,51,0.08)] backdrop-blur md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,118,110,0.18)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--teal-deep)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--orange)]" />
              Projeto base criado com stack moderna
            </div>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Cognix Web
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Uma base React pronta para virar o seu proximo produto.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Este projeto ja nasce com React, TypeScript, Vite e Tailwind
                configurados para voce comecar a construir telas, componentes e
                integracoes imediatamente.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--teal)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--teal-deep)]"
              >
                Documentacao React
              </a>
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[rgba(15,118,110,0.28)] hover:text-[var(--teal-deep)]"
              >
                Tailwind Docs
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(16,32,51,0.08)] bg-white/75 px-4 py-2 text-sm text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel-strong)] p-7 shadow-[0_18px_50px_rgba(16,32,51,0.07)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                Scripts uteis
              </p>
              <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                <div className="rounded-2xl border border-[rgba(16,32,51,0.08)] bg-white/80 p-4">
                  <p className="font-mono text-[var(--ink)]">npm run dev</p>
                  <p className="mt-2 leading-7">Inicia o ambiente local com HMR.</p>
                </div>
                <div className="rounded-2xl border border-[rgba(16,32,51,0.08)] bg-white/80 p-4">
                  <p className="font-mono text-[var(--ink)]">npm run build</p>
                  <p className="mt-2 leading-7">
                    Gera a versao otimizada para producao.
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(16,32,51,0.08)] bg-white/80 p-4">
                  <p className="font-mono text-[var(--ink)]">npm run lint</p>
                  <p className="mt-2 leading-7">
                    Verifica a base com as regras de lint do template.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[rgba(249,115,22,0.2)] bg-[linear-gradient(135deg,rgba(249,115,22,0.10),rgba(255,255,255,0.92))] p-7 shadow-[0_18px_50px_rgba(16,32,51,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                Proximo passo
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug">
                Comece editando <span className="font-mono">src/App.tsx</span> e
                montando a sua primeira tela real.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white/70 p-6 shadow-[0_12px_40px_rgba(16,32,51,0.05)] backdrop-blur"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(15,118,110,0.10)] text-sm font-semibold text-[var(--teal-deep)]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h2 className="text-xl font-semibold tracking-[-0.03em]">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
