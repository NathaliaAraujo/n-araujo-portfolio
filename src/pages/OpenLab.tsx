import { Seo } from '../components/Seo'
import openLabHeroPhoto from '../assets/open-lab-hero-photo.png'

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-[#2ec4b6] px-3 py-1 text-xs font-semibold leading-[1.3] tracking-[1.44px] text-[#80dbcf]">
      {children}
    </span>
  )
}

export function OpenLab() {
  return (
    <>
      <Seo title="Open Lab" description="Um laboratório aberto de design — ideias soltas, trabalho em progresso e descobertas." />

      <section className="flex flex-col items-center gap-[60px] border-b border-[#0f172a] bg-[#0f172a] px-6 py-16 sm:px-12 sm:py-24 lg:flex-row lg:px-24 lg:py-[96px] xl:px-[220px]">
        <div className="flex flex-1 flex-col items-start gap-6">
          <Badge>In the loop</Badge>
          <p className="font-display text-[36px] font-bold leading-[1.15] text-[#f8fafc]">
            {'An open lab, in construction  — '}
            <span className="font-thin">
              loose ideas, work in progress, design discoveries, and many things I like doing.
            </span>
          </p>
          <p className="text-lg leading-[1.6] text-[#94a3b8]">
            By the way, my last adventure was in Maranhão, Brazil. Trekking through the dunes of Lençóis
            Maranhenses, MA, taught me great lessons about user-centered design, human behavior, and how
            design shows up in daily life. Full write-up coming soon!
          </p>

          <div className="relative h-[350px] w-full overflow-hidden rounded-[20px] opacity-50 lg:hidden">
            <div className="absolute inset-0 bg-[#141436]" />
            <img
              src={openLabHeroPhoto}
              alt=""
              className="absolute inset-0 size-full object-cover opacity-40"
            />
          </div>
        </div>

        <div className="relative hidden h-[350px] w-full flex-1 overflow-hidden rounded-[20px] opacity-50 lg:block">
          <div className="absolute inset-0 bg-[#141436]" />
          <img
            src={openLabHeroPhoto}
            alt=""
            className="absolute inset-0 size-full object-cover opacity-40"
          />
        </div>
      </section>
    </>
  )
}
