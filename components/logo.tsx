import { Code2 } from 'lucide-react'

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent ring-1 ring-white/20 ring-inset">
        <Code2 className="size-4 text-white" aria-hidden="true" />
      </span>
      <span className="text-base font-semibold tracking-tight">Cloud Code</span>
    </span>
  )
}
