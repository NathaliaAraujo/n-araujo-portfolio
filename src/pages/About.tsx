import { Seo } from '../components/Seo'

// TODO: substituir por experiência profissional real
const experience = [
  { role: 'Product Designer — Empresa X', period: '2023 — agora' },
  { role: 'UI/UX Designer — Empresa Y', period: '2021 — 2023' },
]

export function About() {
  return (
    <>
      <Seo title="About" description="Um pouco sobre mim, minha trajetória e experiência." />

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-20">
        <p className="text-xs tracking-wide text-muted">/ OLÁ</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
          Olá, eu sou a Nathalia.
        </h1>
        {/* TODO: headline de posicionamento real */}
        <p className="mt-2 text-2xl text-muted sm:text-3xl">
          Designer de produto e interação.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-xs tracking-wide text-muted">/ SOBRE MIM</p>
        {/* TODO: bio real, em blocos com TL;DR ao lado, como na referência */}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Escreva aqui sua trajetória: como começou, o que te trouxe até
          design de produto, e o que te diferencia hoje.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-xs tracking-wide text-muted">/ SERVIÇOS</p>
        <h2 className="mt-4 text-2xl font-medium tracking-tight">
          Minhas habilidades e interesses
        </h2>
        {/* TODO: lista real de skills */}
        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted sm:grid-cols-4">
          <li>Product design</li>
          <li>Interaction design</li>
          <li>Branding</li>
          <li>Motion design</li>
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-xs tracking-wide text-muted">/ EXPERIÊNCIA</p>
        <h2 className="mt-4 text-2xl font-medium tracking-tight">
          Minha experiência profissional
        </h2>
        <ul className="mt-6 divide-y divide-border border-t border-border">
          {experience.map((item) => (
            <li key={item.role} className="flex items-center justify-between py-4 text-sm">
              <span>{item.role}</span>
              <span className="text-muted">{item.period}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
