import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { Seo } from '../components/Seo'
import homeHeroWorkspace from '../assets/home-hero-workspace.png'
import homeProjectsBg from '../assets/home-projects-bg.png'
import projectCidareThumbnail from '../assets/project-cidare-thumbnail.png'
import iconChevronDown from '../assets/icon-chevron-down.svg'
import toolNotion from '../assets/tool-notion.png'
import toolVscode from '../assets/tool-vscode.png'
import toolFigma from '../assets/tool-figma.png'
import toolClaude from '../assets/tool-claude.png'
import toolIndesign from '../assets/tool-indesign.png'
import toolIllustrator from '../assets/tool-illustrator.png'
import toolPhotoshop from '../assets/tool-photoshop.png'

const experience = [
  {
    role: 'Product Design Lead',
    company: 'CIDARE, Inc. • Contractor',
    period: '2020 - present',
    description:
      'At CIDARE, I support and coordinate projects by using user-centered design, product discovery, and continuous experimentation to optimize performance and align solutions with business goals. I work from the end-to-end product lifecycle-from PRD/MVP definition, prototyping, and UX research to UI design and even QA-for complex digital ecosystems and user experiences.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Conté Communications • Partner',
    period: '2020 - 2021',
    description:
      'At Conté, I collaborated with the design team to create high-impact websites and print materials for U.S. city councils. Alongside design execution, I helped launch and produce the Conté Expert Series podcast-managing end-to-end production and co-hosting select episodes to share industry insights.',
  },
  {
    role: 'Graphic Designer',
    company: '3D Data Ltd. • Contractor',
    period: '2019 - 2020',
    description:
      'At 3D Data Ltd., I led full-lifecycle design for both digital and print projects. My work spanned UI design and data visualization to producing key institutional communications-such as reports, publications, and municipal materials for U.S. city councils.',
  },
]

const tools = [
  { name: 'Notion', icon: toolNotion, fit: { left: 8.75, top: 8.75, width: 82.5, height: 82.5 } },
  { name: 'VS Code', icon: toolVscode, fit: { left: 19.58, top: 19.58, width: 60.83, height: 60.83 } },
  { name: 'Figma', icon: toolFigma, fit: { left: -3.33, top: -3.33, width: 106.67, height: 106.67 } },
  { name: 'Claude', icon: toolClaude, fit: { left: 18.75, top: 18.75, width: 62.5, height: 62.5 } },
  { name: 'InDesign', icon: toolIndesign, fit: { left: 18.73, top: 18.75, width: 62.53, height: 62.5 } },
  { name: 'Illustrator', icon: toolIllustrator, fit: { left: 18.73, top: 18.75, width: 62.53, height: 62.5 } },
  { name: 'Photoshop', icon: toolPhotoshop, fit: { left: 18.73, top: 18.75, width: 62.53, height: 62.5 } },
]

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-[#2ec4b6] px-3 py-1 text-xs font-semibold leading-[1.3] tracking-[1.44px] text-[#80dbcf]">
      {children}
    </span>
  )
}

export function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const panelRefs = useRef<Array<HTMLDivElement | null>>([])

  useLayoutEffect(() => {
    panelRefs.current.forEach((panel, index) => {
      if (!panel) return
      const isOpen = openIndex === index
      gsap.to(panel, {
        height: isOpen ? panel.scrollHeight : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.45,
        ease: 'power2.inOut',
      })
    })
  }, [openIndex])

  return (
    <>
      <Seo title="Home" description="Portfólio — trabalho em design de produto e interação." />

      <div className="bg-[#0f172a] font-body text-[#f8fafc]">
        {/* Hero / About Me */}
        <section className="relative overflow-hidden bg-[#020617] px-6 py-16 sm:px-12 sm:py-24 lg:px-24 xl:px-[220px]">
          <div className="grid w-full grid-cols-1 grid-rows-1">
            <div className="pointer-events-none relative col-start-1 row-start-1 hidden h-[564px] w-[68.5%] ml-[31.5%] overflow-hidden rounded-[20px] opacity-25 lg:block">
              <div className="absolute inset-0 bg-[#141436]" />
              <img
                src={homeHeroWorkspace}
                alt=""
                className="absolute left-[-15.62%] top-[-7.25%] h-[107.25%] w-[117.74%] max-w-none object-cover opacity-60"
              />
            </div>

            <div className="relative col-start-1 row-start-1 flex w-full flex-col items-start gap-[30px] lg:mt-[114px] lg:w-[55%]">
              <Badge>About Me</Badge>
              <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-[-2px] text-[#f8fafc] sm:text-[56px] lg:text-[64px]">
                Nathalia Araujo, Design Lead
              </h1>
              <p className="text-lg leading-[1.6] text-[#cbd5e1]">
                I&apos;m <em className="font-medium italic text-[#ff7e5f]">a product designer</em> and{' '}
                <em className="font-medium italic text-[#ff7e5f]">a project manager</em> learning from every
                challenge along the way. Oh, and off the clock, I&apos;m an adventurous, curious human.
              </p>
            </div>
          </div>
        </section>

        {/* Selected Projects preview */}
        <section
          id="selected-projects"
          className="relative overflow-hidden px-6 py-16 sm:px-12 sm:py-24 lg:px-24 xl:px-[220px]"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <img src={homeProjectsBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-[rgba(20,20,54,0.5)]" />
          </div>

          <div className="relative flex w-full flex-col items-start gap-4">
            <Badge>Selected Project</Badge>
            <h2 className="font-display text-[36px] font-bold leading-[1.15] text-[#f8fafc]">
              What I&apos;ve been building
            </h2>
            <p className="text-lg leading-[1.6] text-[#94a3b8]">
              Explore this featured project, on which I worked by combining design and project management.
            </p>

            <div className="mt-4 flex w-full flex-col items-start gap-9 sm:flex-row sm:items-center">
              <Link
                to="/project-websuite"
                className="h-[200px] w-full max-w-[279px] shrink-0 cursor-pointer overflow-hidden rounded-2xl"
              >
                <img
                  src={projectCidareThumbnail}
                  alt="CIDARE WebSuite"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col items-start gap-2">
                <Link
                  to="/project-websuite"
                  className="cursor-pointer font-display text-[22px] font-bold leading-[1.25] text-[#cbd5e1]"
                >
                  CIDARE WebSuite
                </Link>
                <p className="text-xs leading-[1.4] text-[#94a3b8]">2024 - Present</p>
                <div className="flex flex-wrap items-start gap-2">
                  {['Web App', 'Product Design', 'SaaS', 'QA Service'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#5c5cab] px-2.5 py-1 text-xs leading-[1.4] text-[#ababd4]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience / Professional Track */}
        <section
          id="experience"
          className="flex flex-col gap-9 bg-gradient-to-b from-[#020617] to-[#0f172a] to-[98.683%] px-6 py-16 sm:px-12 sm:py-24 lg:px-24 xl:px-[220px]"
        >
          <div className="flex flex-col items-start gap-4">
            <Badge>Experience</Badge>
            <h2 className="font-display text-[36px] font-bold leading-[1.15] text-[#f8fafc]">Professional Track</h2>
            <p className="text-lg leading-[1.6] text-[#94a3b8]">
              I&apos;m a solo product designer for global teams. Experienced across fast-paced sprints, long-term
              roadmaps, and product QA. Highly adaptable, deeply collaborative, and single-mindedly focused on
              helping teams design and ship better products together.
            </p>
          </div>

          <div className="flex w-full flex-col items-start">
            {experience.map((item, index) => (
              <div key={item.role} className="w-full border-b border-[#1e293b] py-8">
                <button
                  type="button"
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  aria-expanded={openIndex === index}
                  className="flex w-full cursor-pointer items-center justify-between text-left"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-lg leading-[1.6] text-[#f8fafc]">{item.role}</p>
                    <p className="text-sm leading-[1.5] text-[#94a3b8]">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="whitespace-nowrap text-sm leading-[1.5] text-[#94a3b8]">{item.period}</p>
                    <img
                      src={iconChevronDown}
                      alt=""
                      className={`size-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                <div
                  ref={(el) => {
                    panelRefs.current[index] = el
                  }}
                  className="h-0 overflow-hidden opacity-0"
                >
                  <p className="pt-4 text-sm leading-[1.6] text-[#94a3b8]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-9 rounded-[10px] bg-[rgba(30,41,59,0.4)] p-6 sm:p-10">
            <div className="flex flex-col items-start gap-4">
              <Badge>Tools</Badge>
              <p className="text-lg leading-[1.6] text-[#94a3b8]">
                I use the following tools to power my daily workflow, helping me explore ideas, map out complex
                requirements, and craft polished solutions.
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-8 pb-5">
              {tools.map((tool) => (
                <div key={tool.name} className="group flex w-24 flex-col items-center gap-1">
                  <div className="relative size-20 overflow-hidden rounded-lg opacity-15 transition-opacity duration-300 group-hover:opacity-100">
                    <img
                      src={tool.icon}
                      alt=""
                      className="absolute max-w-none"
                      style={{
                        left: `${tool.fit.left}%`,
                        top: `${tool.fit.top}%`,
                        width: `${tool.fit.width}%`,
                        height: `${tool.fit.height}%`,
                      }}
                    />
                  </div>
                  <p className="w-full text-center text-sm leading-[1.4] tracking-[0.14px] text-[#94a3b8] opacity-15 transition-opacity duration-300 group-hover:opacity-100">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
