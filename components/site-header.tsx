import { WhatsAppButton } from '@/components/whatsapp-button'
// Apagámos a linha do import { Logo } porque vamos usar a nossa imagem direta

const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2" aria-label="Cloud Code — início">
          {/* Aqui entra o seu logótipo animado! */}
          <img 
            src="/logo.svg" 
            alt="Cloud Code" 
            className="w-32 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,195,255,0.5)]" 
          />
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <WhatsAppButton label="WhatsApp" className="h-9 px-4" />
      </div>
    </header>
  )
}