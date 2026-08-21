import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/selected-works', label: 'Selected Projects' },
  { to: '/about', label: 'About' },
  { to: '/playground', label: 'Playground' },
]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm tracking-wide transition-colors hover:text-fg ${
    isActive ? 'text-fg' : 'text-muted'
  }`

export function Layout() {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Pular para o conteúdo principal
      </a>

      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <NavLink to="/" className="text-sm font-medium tracking-wide">
            NATHALIA
          </NavLink>
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            {/* TODO: link para currículo real */}
            <a
              href="#"
              className="text-sm tracking-wide text-muted transition-colors hover:text-fg"
            >
              My Resume
            </a>
            {/* TODO: link real (ex: Calendly) */}
            <a
              href="#"
              className="text-sm tracking-wide text-muted transition-colors hover:text-fg"
            >
              Work With Me
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-xs tracking-wide text-muted">/REACH ME</p>
            {/* TODO: e-mail real */}
            <a href="mailto:contato@example.com" className="mt-2 block text-sm">
              contato@example.com
            </a>
          </div>
          <div>
            <p className="text-xs tracking-wide text-muted">/NAVIGATE TO</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-wide text-muted">/STALK ME</p>
            <ul className="mt-2 space-y-1 text-sm">
              {/* TODO: redes sociais reais */}
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Behance</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-muted">
          Designed &amp; built with 💛 by Nathalia
        </p>
      </div>
    </footer>
  )
}
