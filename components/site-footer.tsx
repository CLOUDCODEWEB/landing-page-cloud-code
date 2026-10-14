import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <Logo />
        <p>
          {'© '}
          {new Date().getFullYear()} Cloud Code. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
