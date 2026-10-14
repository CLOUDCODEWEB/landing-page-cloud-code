import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    image: '/images/project-restaurant.png',
    title: 'Trattoria Bella Vista',
    category: 'Landing Page · Restaurante',
    description: 'Cardápio online e reservas direto pelo WhatsApp.',
  },
  {
    image: '/images/project-clinic.png',
    title: 'Clínica Sorriso Pleno',
    category: 'Site Institucional · Saúde',
    description: 'Apresentação dos tratamentos e agendamento facilitado.',
  },
  {
    image: '/images/project-gym.png',
    title: 'Iron Fit Academia',
    category: 'Landing Page · Fitness',
    description: 'Página de planos focada em matrículas.',
  },
]

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-16 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Projetos Recentes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Sites que já estão trazendo clientes.
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Uma amostra do nosso trabalho. Novos projetos são adicionados ao portfólio em breve.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`Prévia do site ${project.title}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs text-accent">{project.category}</p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
