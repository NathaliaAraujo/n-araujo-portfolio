import { Seo } from '../components/Seo'

// TODO: substituir por shots/experimentos reais
const experiments = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  title: `Experimento ${i + 1}`,
  year: 2022 + (i % 4),
}))

export function Playground() {
  return (
    <>
      <Seo title="Playground" description="Experimentos, estudos e ideias soltas de design." />

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-20">
        <h1 className="max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
          Um laboratório aberto de design — ideias soltas, trabalho em
          progresso e resultados refinados.
        </h1>
      </section>

      {/* TODO: grid masonry com parallax por coluna (GSAP ScrollTrigger) + lightbox */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 pb-20 sm:grid-cols-3">
        {experiments.map((item) => (
          <button
            key={item.id}
            type="button"
            className="flex aspect-square flex-col justify-end border border-border p-3 text-left text-xs text-muted"
          >
            <span>{item.title}</span>
            <span>{item.year}</span>
          </button>
        ))}
      </section>
    </>
  )
}
