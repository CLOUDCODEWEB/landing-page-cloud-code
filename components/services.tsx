import { Building2, Check, MapPin, MousePointerClick } from 'lucide-react'

const services = [
  {
    icon: MousePointerClick,
    title: 'Landing Pages',
    description:
      'Páginas focadas em um único objetivo: fazer o cliente chamar você no WhatsApp, agendar ou comprar.',
    features: ['Textos que vendem', 'Botões de contato estratégicos', 'Carregamento rápido'],
  },
  {
    icon: Building2,
    title: 'Sites Institucionais',
    description:
      'Um site profissional que apresenta sua empresa, seus serviços e transmite confiança desde o primeiro clique.',
    features: ['Páginas de serviços e equipe', 'Galeria e depoimentos', 'Fácil de atualizar'],
  },
  {
    icon: MapPin,
    title: 'Presença Local no Google',
    description:
      'Seu negócio aparecendo para quem procura na sua cidade, no Google e no Google Maps.',
    features: ['SEO local', 'Google Meu Negócio', 'Integração com WhatsApp'],
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-16 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">Nossos Serviços</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Landing pages e sites institucionais para negócios locais.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Restaurantes, clínicas, academias, lojas e prestadores de serviço: criamos a vitrine
            digital que faz o seu negócio ser encontrado e escolhido.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="group relative flex flex-col bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/15">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-foreground/90">
                    <Check className="size-4 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
