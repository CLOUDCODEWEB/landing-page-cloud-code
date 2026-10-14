import { WhatsAppButton } from '@/components/whatsapp-button'

export function ContactCta() {
  return (
    <section id="contato" className="scroll-mt-16 px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center md:px-16">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]"
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">Contato</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Pronto para tirar seu projeto do papel?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Fale direto com nosso time pelo WhatsApp. Resposta rápida, orçamento sem compromisso.
          </p>
          <WhatsAppButton size="lg" label="Contato via WhatsApp" className="mt-10" />
        </div>
      </div>
    </section>
  )
}
