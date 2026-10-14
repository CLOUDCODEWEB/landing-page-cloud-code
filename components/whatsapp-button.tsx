import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { whatsappUrl } from '@/lib/site'

type WhatsAppButtonProps = {
  label?: string
  size?: 'default' | 'lg'
  className?: string
}

export function WhatsAppButton({
  label = 'Fale conosco no WhatsApp',
  size = 'default',
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary font-medium text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary/70 ring-1 ring-white/15 ring-inset transition-all hover:bg-primary/90 hover:shadow-primary focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:outline-none',
        size === 'lg' ? 'h-12 px-6 text-base' : 'h-10 px-5 text-sm',
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight
        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
      <span className="sr-only">(abre em uma nova aba)</span>
    </a>
  )
}
