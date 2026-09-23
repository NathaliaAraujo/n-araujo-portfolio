import { useEffect, useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import iconMenuHamburger from '../assets/icon-menu-hamburger.svg'
import iconMenuClose from '../assets/icon-menu-close.svg'

const navItems = [
  { to: '/#selected-projects', label: 'Selected Project' },
  { to: '/#experience', label: 'Experience' },
  { to: '/open-lab', label: 'In the Loop' },
]

export function Layout() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)

    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }
    const target = document.querySelector(location.hash)
    target?.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <>
      <a href="#main-content" className="sr-only">
        Pular para o conteúdo principal
      </a>

      <header className="border-b border-[#1e293b] bg-[#020617] font-body text-[#f8fafc]">
        <div className="flex min-h-[76px] flex-wrap items-center justify-between gap-4 px-6 py-3 sm:px-12 lg:px-24 xl:px-[220px]">
          <Link to="/" className="shrink-0">
            <p className="whitespace-nowrap font-display text-[22px] font-bold leading-[1.25]">Nathalia Araujo</p>
          </Link>

          <nav className="hidden flex-wrap items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="whitespace-nowrap px-2 py-1 text-sm font-medium tracking-[0.14px] text-[#cbd5e1] transition-opacity hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/#footer"
            className="hidden rounded-md border border-[#ff7e5f] px-3 py-2 text-sm font-medium tracking-[0.14px] text-[#ff7e5f] transition-opacity hover:opacity-80 lg:inline-block"
          >
            Let&apos;s Connect!
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            className="flex size-8 items-center justify-center lg:hidden"
          >
            <img src={iconMenuHamburger} alt="" className="size-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 flex justify-end lg:hidden ${isMenuOpen ? '' : 'pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`flex h-full w-full max-w-[402px] flex-col items-center justify-between border-b border-[#1e293b] bg-[#020617] px-10 py-10 font-body text-[#f8fafc] transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex w-full flex-col items-center gap-10">
            <div className="flex w-full flex-col items-center gap-10">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fechar menu"
                className="flex size-[42px] items-center justify-center"
              >
                <img src={iconMenuClose} alt="" className="size-6" />
              </button>
              <p className="whitespace-nowrap font-display text-[36px] font-bold leading-[1.15] text-[#f8fafc]">
                Nathalia Araujo
              </p>
            </div>

            <nav className="flex w-full flex-col items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1 text-2xl font-normal leading-[1.4] tracking-[0.14px] text-[#cbd5e1]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            to="/#footer"
            onClick={() => setIsMenuOpen(false)}
            className="w-full rounded-md border border-[#ff7e5f] px-3 py-4 text-center font-display text-[22px] font-bold leading-[1.25] text-[#ff7e5f]"
          >
            Let&apos;s Connect!
          </Link>
        </div>
      </div>

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

function Footer() {
  return (
    <footer id="footer" className="bg-[#020617] font-body text-[#f8fafc]">
      <div className="flex flex-col items-center gap-9 px-6 pb-12 pt-24 sm:px-12 lg:px-24 xl:px-[220px]">
        <div className="flex w-full flex-col items-start gap-4">
          <span className="rounded border border-[#64748b] px-3 py-1 text-xs font-semibold leading-[1.3] tracking-[1.44px] text-[#64748b]">
            Let&apos;s Connect
          </span>
          <h2 className="font-display text-[36px] font-bold leading-[1.15] text-[#f8fafc]">
            Interested in working together?
          </h2>
          <p className="w-full text-base leading-[1.6] text-[#94a3b8]">
            I&apos;m always up for talking shop. Tell me what you&apos;re working on! Whether we
            collaborate or not, I find every conversation leaves both sides with fresh
            perspectives and a win.
          </p>
        </div>

        <div className="flex w-full flex-wrap gap-12 py-5">
          <div className="flex flex-col items-start gap-1.5">
            <p className="text-sm font-medium tracking-[0.14px] text-[#94a3b8]">Get In Touch</p>
            <a href="mailto:naraujo@nomaddesign.co" className="text-base leading-[1.6] text-[#e06b4e] hover:underline">
              naraujo@nomaddesign.co
            </a>
          </div>
          <div className="flex flex-col items-start gap-1.5">
            <p className="text-sm font-medium tracking-[0.14px] text-[#94a3b8]">Connect on LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/natiaraujo/"
              target="_blank"
              rel="noreferrer"
              className="text-base leading-[1.6] text-[#e06b4e] hover:underline"
            >
              @natiaraujo
            </a>
          </div>
        </div>

        <div className="flex w-full items-center justify-center border-t-[0.5px] border-[#334155] pt-10">
          <p className="flex-1 text-sm font-medium leading-[1.4] tracking-[0.14px] text-[#94a3b8]">
            © 2026 Nathalia Araujo - Product Designer • Discover, explore and craft!
          </p>
        </div>
      </div>
    </footer>
  )
}
