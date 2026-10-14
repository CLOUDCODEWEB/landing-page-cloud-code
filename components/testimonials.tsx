import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Em menos de duas semanas o site estava no ar. Hoje recebo pedidos de reserva todos os dias pelo WhatsApp, coisa que antes não acontecia.',
    name: 'Marcos Oliveira',
    role: 'Proprietário, Trattoria Bella Vista',
    initials: 'MO',
  },
  {
    quote:
      'Nossa clínica passou a aparecer no Google para quem procura dentista no bairro. O número de agendamentos novos praticamente dobrou.',
    name: 'Dra. Juliana Costa',
    role: 'Diretora, Clínica Sorriso Pleno',
    initials: 'JC',
  },
  {
    quote:
      'Atendimento rápido, sem enrolação e com um resultado muito profissional. A landing page dos planos virou nossa principal fonte de matrículas.',
    name: 'Rafael Mendes',
    role: 'Sócio, Iron Fit Academia',
    initials: 'RM',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative scroll-mt-16 border-t border-border py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            Avaliações de Clientes
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Quem confia na Cloud Code, recomenda.
          </h2>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-8 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5" role="img" aria-label="Avaliação 5 de 5 estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote className="size-6 text-accent/40" aria-hidden="true" />
                </div>
                <blockquote className="mt-6 flex-1 leading-relaxed text-pretty text-foreground/90">
                  {`"${testimonial.quote}"`}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground"
                  >
                    {testimonial.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold">{testimonial.name}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
