const lines = [
  { indent: 0, tokens: [['k', 'const '], ['v', 'site'], ['p', ' = '], ['k', 'await '], ['f', 'cloudCode'], ['p', '.build({']] },
  { indent: 1, tokens: [['v', 'performance'], ['p', ': '], ['s', "'instantâneo'"], ['p', ',']] },
  { indent: 1, tokens: [['v', 'seo'], ['p', ': '], ['s', "'otimizado'"], ['p', ',']] },
  { indent: 1, tokens: [['v', 'design'], ['p', ': '], ['s', "'premium'"], ['p', ',']] },
  { indent: 1, tokens: [['v', 'ai'], ['p', ': '], ['k', 'true'], ['p', ',']] },
  { indent: 0, tokens: [['p', '})']] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [['c', '// Deploy concluído em 0.8s']] },
] as const

const tokenColor: Record<string, string> = {
  k: 'text-primary',
  v: 'text-foreground',
  p: 'text-muted-foreground',
  s: 'text-accent',
  f: 'text-[oklch(0.82_0.1_290)]',
  c: 'text-muted-foreground/70 italic',
}

export function CodeWindow() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/60 via-transparent to-accent/50 opacity-70"
      />
      <figure className="relative overflow-hidden rounded-2xl bg-card shadow-2xl shadow-primary/10 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">projeto.ts</span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-sm leading-7">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="mr-6 w-4 text-right text-muted-foreground/40 select-none">
                  {i + 1}
                </span>
                <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                  {line.tokens.map(([type, text], j) => (
                    <span key={j} className={tokenColor[type]}>
                      {text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>
        <figcaption className="flex items-center justify-between border-t border-border px-6 py-4 text-xs">
          <span className="flex items-center gap-2 text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Online em produção
          </span>
          <span className="font-mono text-muted-foreground">cloudcode.dev</span>
        </figcaption>
      </figure>
    </div>
  )
}
