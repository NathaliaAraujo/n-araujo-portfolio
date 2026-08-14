import { NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-neutral-950' : 'text-neutral-600 hover:text-neutral-950'
  }`

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <a href="#main-content" className="sr-only">
        Pular para o conteúdo principal
      </a>

      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <NavLink to="/" className="text-lg font-semibold text-neutral-950">
            Nomad Design
          </NavLink>
          <nav aria-label="Principal">
            <ul className="flex items-center gap-1">
              <li>
                <NavLink to="/" end className={navLinkClass}>
                  Início
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Nomad Design. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
