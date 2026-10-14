const steps = [
  {
    title: 'Conversa',
    description: 'Entendemos seu negócio e objetivos em uma conversa rápida pelo WhatsApp.',
  },
  {
    title: 'Design com IA',
    description: 'Protótipos gerados e refinados com IA para validar a ideia em poucos dias.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Código limpo, performático e otimizado para SEO desde a primeira linha.',
  },
  {
    title: 'Lançamento',
    description: 'Publicação, monitoramento e melhorias contínuas após o go-live.',
  },
]

export function Process() {
  return (
    <section id="processo" className="scroll-mt-16 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">Processo</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Do briefing ao ar, sem complicação.
          </h2>
        </div>
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-l border-border pl-6">
              <span
                aria-hidden="true"
                className="absolute top-0 -left-px h-8 w-px bg-gradient-to-b from-primary to-accent"
              />
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
