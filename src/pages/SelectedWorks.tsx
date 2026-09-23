import { Seo } from '../components/Seo'
import coverPlaceholder01 from '../assets/cover-placeholder-01.svg'

// TODO: substituir por conteúdo real dos projetos (imagens de capa, nomes, categorias)
const projects = [
  {
    year: '2024',
    name: 'Projeto 1',
    category: 'Mobile, Fintech',
    tags: 'Mobile || Web, Fintech',
    index: '01',
    featured: true,
    cover: coverPlaceholder01,
  },
  {
    year: '2023',
    name: 'Projeto 2',
    category: 'Web, Ecommerce',
    tags: 'Web, Ecommerce',
    index: '02',
    featured: false,
    cover: null,
  },
  {
    year: '2022',
    name: 'Projeto 3',
    category: 'Mobile, Saúde',
    tags: 'Mobile, Saúde',
    index: '03',
    featured: false,
    cover: null,
  },
]

export function SelectedWorks() {
  return (
    <>
      <Seo title="Selected Projects" description="Projetos selecionados de design de produto e interação." />

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-20">
        <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">
          Selected <em className="font-normal not-italic text-muted">p</em>rojects
        </h1>
        <p className="mt-6 max-w-xl text-sm text-muted">
          Projetos cruzando design de produto e visual, além de uma seção
          adicional, playground, com explorações de outras paixões de design.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-12 border-t border-border px-6 pt-12 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.index}
            href="#"
            className={`group block ${project.featured ? 'sm:col-span-2' : ''}`}
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-fg/5">
              {project.cover ? (
                <img
                  src={project.cover}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center border border-dashed border-border text-xs text-muted">
                  Cover image
                </div>
              )}
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-muted">{project.year}</p>
                <p className="mt-1 text-sm">
                  <strong className="font-medium">{project.name}</strong>
                  <span className="text-muted"> / {project.category}</span>
                </p>
                <p className="mt-1 text-xs text-muted">{project.tags}</p>
              </div>
              <span className="text-2xl text-muted sm:text-3xl">{project.index}</span>
            </div>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <a href="/playground" className="text-sm text-muted transition-colors hover:text-fg">
          PLAYGROUND / EXPERIMENTOS E ESTUDOS →
        </a>
      </section>
    </>
  )
}
