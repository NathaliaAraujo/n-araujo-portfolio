import { Seo } from '../components/Seo'
import iconArrowRight from '../assets/icon-arrow-right.svg'

export function Home() {
  return (
    <>
      <Seo title="Home" description="Portfólio — trabalho em design de produto e interação." />

      <div className="bg-[#0a0a0a] font-body text-white">
        <div className="flex min-h-[calc(100svh-6.25rem)] flex-col items-center justify-center gap-16 px-6 py-20 text-center sm:px-20">
          <div className="flex w-full flex-col items-center gap-6">
            <h1 className="font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">
              Hello, I am Nathalia Araujo.
            </h1>
            <p className="max-w-[644px] text-xl leading-[1.6] opacity-70">
              Product Designer and Design Lead bridging design, functionality, and management to
              solve complex problems and build solutions.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-3 rounded border border-white px-8 py-4 text-sm font-semibold uppercase"
          >
            View Portfolio
            <img src={iconArrowRight} alt="" className="size-4" />
          </button>
        </div>
      </div>
    </>
  )
}
