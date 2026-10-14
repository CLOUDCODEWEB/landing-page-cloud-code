import { Rocket, Search, Smartphone, Sparkles } from 'lucide-react'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CodeWindow } from '@/components/code-window'

const benefits = [
  { icon: Smartphone, label: 'Design 100% Responsivo' },
  { icon: Search, label: 'Otimizado para o Google (SEO)' },
  { icon: Rocket, label: 'Entrega em Tempo Recorde' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -right-40 h-[360px] w-[480px] rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pt-20 pb-24 md:pt-28 lg:grid-cols-[1.1fr_1fr] [&>*]:min-w-0">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            Agência de desenvolvimento impulsionada por IA
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Desenvolvimento Web de Nova Geração com IA</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Sites e landing pages que colocam o seu negócio local no mapa e transformam visitantes
            em clientes. Tecnologia moderna e simples de usar, para você vender mais sem
            complicação.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppButton size="lg" />
            <a
              href="#servicos"
              className="inline-flex h-12 items-center rounded-full border border-border px-6 text-base text-foreground transition-colors hover:bg-secondary"
            >
              Ver serviços
            </a>
          </div>

          <ul className="mt-14 grid w-full max-w-xl gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <li key={benefit.label} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
                  <benefit.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm leading-snug font-medium text-foreground/90">
                  {benefit.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <CodeWindow />
      </div>
    </section>
  )
}
