import { NavLink, Outlet } from 'react-router-dom'
import iconDiamond from '../assets/icon-diamond.svg'

const navItems = [
  { to: '/selected-works', label: 'Selected Projects' },
  { to: '/about', label: 'About Me' },
  { to: '/playground', label: 'In The Loop' },
]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `whitespace-nowrap transition-opacity hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-80'}`

export function Layout() {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Pular para o conteúdo principal
      </a>

      <header className="bg-[#0a0a0a] font-body text-white">
        <div className="flex h-25 flex-wrap items-center justify-between gap-4 px-6 sm:px-20">
          <NavLink to="/" className="flex shrink-0 items-center gap-3">
            <img src={iconDiamond} alt="" className="size-5" />
            <p className="whitespace-nowrap font-display text-2xl font-bold">Nathalia Araujo</p>
          </NavLink>

          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium sm:gap-12">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium sm:gap-12">
            {/* TODO: link para currículo real */}
            <a href="#" className="whitespace-nowrap opacity-80 transition-opacity hover:opacity-100">
              My Resume
            </a>
            {/* TODO: link real (ex: Calendly) */}
            <a href="#" className="whitespace-nowrap opacity-80 transition-opacity hover:opacity-100">
              Contact
            </a>
          </nav>
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
    <footer className="bg-[#0a0a0a] font-body text-white">
      <div className="flex flex-col items-center gap-9 px-6 pb-[50px] pt-20 sm:px-20">
        <div className="flex w-full flex-col items-center gap-9">
          <div className="flex w-full flex-col items-start gap-[30px]">
            <h2 className="font-display text-4xl font-bold leading-none sm:text-5xl lg:text-[64px]">
              Interested in working together?
            </h2>
            <p className="text-xl font-medium uppercase tracking-[2px]">Let&apos;s connect</p>
            <p className="max-w-[644px] text-lg leading-[1.7] opacity-70">
              I&apos;m always up for talking shop. Tell me what you&apos;re working on! Whether we
              collaborate or not, I find every conversation leaves both sides with fresh
              perspectives and a win.
            </p>
          </div>

          <div className="flex w-full flex-wrap gap-12">
            <div className="flex flex-col items-start gap-1.5 text-lg leading-[1.6]">
              <p className="font-bold opacity-70">Get In Touch</p>
              <a href="mailto:naraujo@nomaddesign.co" className="hover:underline">
                naraujo@nomaddesign.co
              </a>
            </div>
            <div className="flex flex-col items-start gap-1.5 text-lg leading-[1.6]">
              <p className="font-bold opacity-70">Connect on LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/natiaraujo/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                @natiaraujo
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center border-t border-[#323232] pt-10">
          <p className="text-lg leading-[1.6] opacity-70">
            © 2026 Nathalia Araujo - Product Designer • Discover, explore and craft!
          </p>
        </div>
      </div>
    </footer>
  )
}
