import { Seo } from '../components/Seo'
import websuiteHeroBg from '../assets/websuite-hero-bg.png'
import websuiteResultsBg from '../assets/websuite-results-bg.png'
import iconSitioCms from '../assets/websuite-icon-sitio-cms.svg'
import iconSchedulerTop from '../assets/websuite-icon-scheduler-top.svg'
import iconSchedulerBottom from '../assets/websuite-icon-scheduler-bottom.svg'
import iconEforms from '../assets/websuite-icon-eforms.svg'

const processTags = ['User Interviews', 'System Architecture', 'Sprint Planning', 'Figma Prototyping', 'QA Testing']

const modules = [
  {
    name: 'Sitio CMS',
    description:
      "A public-facing website that builds trust with citizens, explains what property assessments are for, and shows clear timelines for upcoming field visits.",
    icon: (
      <div className="size-[70px] shrink-0">
        <img src={iconSitioCms} alt="" className="size-full object-contain" />
      </div>
    ),
  },
  {
    name: 'Scheduler',
    description:
      'A two-way booking tool. Assessors set their available slots based on capacity, and property owners pick the time that works best for them.',
    icon: (
      <div className="flex size-[70px] shrink-0 flex-col items-start">
        <img src={iconSchedulerTop} alt="" className="w-full" />
        <img src={iconSchedulerBottom} alt="" className="w-full" />
      </div>
    ),
  },
  {
    name: 'eForms',
    description:
      'A modular form builder that cuts down manual paperwork. It stores data digitally and automatically fills official state PDF templates — so teams get modern workflows without losing the required paper trail.',
    icon: (
      <div className="flex shrink-0 items-center rounded-[5px] bg-[#aed2e2] p-[15px]">
        <img src={iconEforms} alt="" className="size-10" />
      </div>
    ),
  },
]

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-[#2ec4b6] px-3 py-1 text-xs font-semibold leading-[1.3] tracking-[1.44px] text-[#80dbcf]">
      {children}
    </span>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-[#5c5cab] px-2.5 py-1 text-xs leading-[1.4] text-[#ababd4]">
      {children}
    </span>
  )
}

export function ProjectWebsuite() {
  return (
    <>
      <Seo
        title="WebSuite"
        description="A modular SaaS platform I helped design and build to make property assessment work easier and faster."
      />

      <div className="bg-[#020617] font-body text-[#f8fafc]">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-16 sm:px-12 sm:py-24 lg:px-24 xl:px-[220px]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <img src={websuiteHeroBg} alt="" className="h-full w-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-[rgba(20,20,54,0.5)]" />
          </div>

          <div className="relative flex flex-col items-start gap-5">
            <div className="flex items-center gap-2">
              <Tag>SaaS Platform</Tag>
              <Tag>Design &amp; PM</Tag>
            </div>
            <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-[-2px] text-[#f8fafc] sm:text-[56px] lg:text-[64px]">
              WebSuite
            </h1>
            <p className="text-lg leading-[1.6] text-[#f8fafc]">
              A modular SaaS platform I helped design and build to make property assessment work easier and faster.
            </p>
          </div>
        </section>

        {/* Section 1 - Overview */}
        <section className="border-b border-[#0f172a] bg-[#020617] px-6 py-16 sm:px-12 sm:py-24 lg:px-24 xl:px-[220px]">
          <div className="flex flex-col items-start gap-4">
            <Badge>Briefing</Badge>
            <h2 className="font-display text-[36px] font-bold leading-[1.15] text-[#f8fafc]">The Challenge</h2>
            <p className="text-lg leading-[1.6] text-[#94a3b8]">
              The company handles property inspections, data collection, and property data reports, working directly
              with local assessment departments.
            </p>
            <p className="text-lg leading-[1.6] text-[#94a3b8]">
              Property assessments set the tax base that funds public services like schools, infrastructure, and
              emergency response. Every year, assessors need to inspect properties, check the data, and keep
              everything accurate so taxes stay fair.
            </p>
            <p className="text-lg leading-[1.6] text-[#94a3b8]">
              The company wanted to go further: build digital tools that make this whole process simpler. That&apos;s
              where the real question came in:{' '}
              <span className="font-bold text-[#94a3b8]">
                How can we bring even more value to the assessment departments we work with?
              </span>
            </p>
          </div>
        </section>

        {/* Section 2 - Process */}
        <section className="bg-[rgba(20,20,54,0.4)] px-6 py-16 sm:px-12 sm:py-24 lg:px-24 xl:px-[220px]">
          <div className="flex flex-col items-start gap-5">
            <Badge>Discovery &amp; Process</Badge>
            <h2 className="font-display text-[36px] font-bold leading-[1.15] text-[#f8fafc]">Product Development</h2>
            <p className="text-lg leading-[1.6] text-[#94a3b8]">
              I joined the team early, working closely with the Product Owner and the development team. Together, we
              ran deep-dive interviews with municipal property assessors across different jurisdictions to understand
              their daily workflow and where things were breaking down. From those conversations, I helped translate
              the main pain points into{' '}
              <span className="font-semibold italic text-[#94a3b8]">three foundational modules</span> for the
              WebSuite platform:
            </p>
            <p className="text-lg leading-[1.6] text-[#94a3b8]">
              <span className="font-bold text-[#94a3b8]">Discovered product:</span> a web app with independent
              components that support fieldwork and assessment tasks — each one built specifically for how assessors
              actually work.
            </p>

            <div className="flex w-full flex-col items-center gap-5 py-6">
              {modules.map((module) => (
                <div
                  key={module.name}
                  className="flex w-full max-w-[700px] items-center gap-6 rounded-[10px] bg-[#f8fafc] p-6"
                >
                  {module.icon}
                  <p className="flex-1 text-base leading-[1.6] text-[#0f172a]">
                    <span className="font-bold">{module.name}</span>: {module.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-start gap-2 pt-3">
              {processTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Results */}
        <section className="relative overflow-hidden border-b border-[#1e293b] px-6 py-16 sm:px-12 sm:py-24 lg:px-24 xl:px-[220px]">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10">
            <img src={websuiteResultsBg} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="relative flex flex-col items-start gap-4">
            <Badge>Results</Badge>
            <h2 className="font-display text-[36px] font-bold leading-[1.15] text-[#f8fafc]">Workflow Impact</h2>
            <p className="text-lg leading-[1.6] text-[#94a3b8]">
              WebSuite brings together a set of digital tools that make life easier for assessment departments — and
              back up the company&apos;s goal of offering the best possible product and service to its customers.
              Since launch, assessors have spent less time on manual paperwork, property owners get more control over
              scheduling, and the whole assessment process feels more transparent for everyone involved.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
