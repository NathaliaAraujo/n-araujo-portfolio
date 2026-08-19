import { Seo } from '../components/Seo'

export function Home() {
  return (
    <>
      <Seo title="Home" description="Portfólio — trabalho em design de produto e interação." />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="text-xs tracking-wide text-muted">2023—AGORA</p>
        {/* TODO: palavras rotativas (Designer, ..., ...) + imagem pareada — animação GSAP */}
        <h1 className="mt-6 text-5xl font-medium tracking-tight sm:text-6xl">
          Designer,
        </h1>
        <button
          type="button"
          className="mt-6 text-sm tracking-wide text-muted transition-colors hover:text-fg"
        >
          PLAY PROJECT REELS
        </button>
      </section>

      {/* TODO: grid de projetos em destaque (2 case studies + teaser do playground) */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-3">
        {['Projeto 1', 'Playground', 'Projeto 2'].map((label) => (
          <div
            key={label}
            className="flex aspect-[4/5] items-end border border-border p-4 text-sm text-muted"
          >
            {label}
          </div>
        ))}
      </section>

      {/* TODO: linha de redes sociais (Vimeo, Are.na, LinkedIn, Spotify...) */}
      <section className="mx-auto flex max-w-6xl gap-6 px-6 pb-20 text-sm text-muted">
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">Behance</a>
      </section>
    </>
  )
}
