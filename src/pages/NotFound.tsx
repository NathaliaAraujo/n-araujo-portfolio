import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFound() {
  return (
    <>
      <Seo
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
        path="/404"
        noIndex
      />
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold text-neutral-950">Página não encontrada</h1>
        <p className="mt-2 text-neutral-600">
          A página que você procura não existe ou foi movida.
        </p>
        <Link to="/" className="mt-6 inline-block underline">
          Voltar para o início
        </Link>
      </div>
    </>
  )
}
