import { Seo } from '../components/Seo'

export function Home() {
  return (
    <>
      <Seo
        title="Início"
        description="Portfólio e vitrine de trabalho de Nomad Design."
        path="/"
      />
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-semibold text-neutral-950">Nomad Design</h1>
        <p className="mt-2 text-neutral-600">
          Conteúdo desta página será definido em um próximo passo.
        </p>
      </div>
    </>
  )
}
