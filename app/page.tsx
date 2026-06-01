"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import AnimatedHero from "@/components/ui/animated-hero"
import HeroConnect from "@/components/ui/hero-button-expendable"

// ── Data ──────────────────────────────────────────────────────────────────────

const projects = [
  {
    icon: "🔍",
    name: "CHUBB Fraud Detector",
    desc: "AI-powered fraud detection using machine learning to flag suspicious insurance claims in real-time.",
    tags: ["JavaScript", "ML", "AI"],
    href: "https://github.com/17ronith/CHUBB-fraud-detector",
  },
  {
    icon: "🎯",
    name: "LockIn",
    desc: "Educational platform with goal-based viewing, progress tracking, and AI-driven attention management.",
    tags: ["Python", "AI", "EdTech"],
    href: "https://github.com/17ronith/LockIn",
  },
  {
    icon: "⚡",
    name: "Felicity E2E System",
    desc: "Full-stack MERN platform with role-based auth, real-time communication, and workflow automation.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    href: "https://github.com/17ronith/MERN-Felicity-EndtoEndsystem",
  },
  {
    icon: "🖨️",
    name: "3D Print Cost Estimator",
    desc: "Automated cost quoting for STL/STEP files with an interactive 3D viewer and real-time pricing engine.",
    tags: ["TypeScript", "3D Viewer", "CAD"],
    href: "https://github.com/17ronith/5fing3rs-3d-printing-cost-estimator",
  },
  {
    icon: "🫀",
    name: "Ultrasound 3D Visualizer",
    desc: "Medical imaging tool with the FAST framework and anatomy-aware AI segmentation for ultrasound data.",
    tags: ["HTML", "FAST", "MedTech", "AI"],
    href: "https://github.com/17ronith/ultrasound-3d-visualizer",
  },
  {
    icon: "+",
    name: "More on GitHub",
    desc: "Systems programming, web tools, and applied AI — explore the full catalogue.",
    tags: ["C / C++", "Python", "+more"],
    href: "https://github.com/17ronith",
    dashed: true,
  },
]

const skillGroups = [
  { title: "Languages",     items: ["C / C++", "Python", "JavaScript", "TypeScript"] },
  { title: "Web & Backend", items: ["Node.js", "React", "Express", "REST APIs"] },
  { title: "Data & AI",     items: ["Machine Learning", "MongoDB", "SQL", "Data Pipelines"] },
  { title: "Tools & Other", items: ["Git / GitHub", "Linux / Bash", "3D / CAD Tools", "French · Telugu"] },
]

const stats = [
  { val: "6+",    lbl: "Projects Built" },
  { val: "IIIT-H", lbl: "Research Student" },
  { val: "🏀",    lbl: "College Basketball" },
  { val: "NJ→HYD", lbl: "Born USA · Based India" },
]

// ── Shared sub-components ─────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="fixed top-5 right-5 z-50 flex gap-1 rounded-full border border-border/60 bg-background/70 px-1.5 py-1.5 backdrop-blur-xl">
      {[
        ["home", "#hero"],
        ["about", "#about"],
        ["work", "#projects"],
        ["skills", "#skills"],
        ["contact", "#contact"],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="rounded-full px-3 py-1.5 text-xs text-muted-foreground transition-all hover:bg-primary/15 hover:text-foreground"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-3 mb-10 text-xs tracking-[0.22em] uppercase"
      style={{ fontFamily: "var(--font-mono)", color: "oklch(0.62 0.22 262)" }}
    >
      {children}
      <span className="h-px w-10 bg-current opacity-40" />
    </div>
  )
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-extrabold tracking-tight leading-[1.05] ${className}`}
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
        color: "oklch(0.93 0.04 268)",
      }}
    >
      {children}
    </h2>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.transform = `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`
    }
    window.addEventListener("mousemove", move, { passive: true })
    return () => window.removeEventListener("mousemove", move)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis")
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-0 h-[800px] w-[800px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.22 262 / 0.07) 0%, transparent 70%)",
        }}
      />

      <Nav />

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen">
        <AnimatedHero />
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <SectionTag>// about me</SectionTag>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-20 items-start">
            {/* Copy */}
            <div className="reveal">
              <SectionHeading className="mb-7">
                Building things<br />that actually matter.
              </SectionHeading>
              <div className="space-y-4 text-[0.95rem] leading-[1.85] text-muted-foreground">
                <p>
                  {"I'm a CS undergrad at "}
                  <span className="text-foreground">IIIT Hyderabad</span>
                  {", building AI-powered systems at the intersection of machine learning and real-world impact. Born in New Jersey, raised in Hyderabad — I've been curious about how things work for as long as I can remember."}
                </p>
                <p>
                  {"I build across the stack: fraud detection systems, educational AI platforms, medical imaging tools, and full-stack apps. I gravitate toward projects where "}
                  <span className="text-foreground">the technology has to be genuinely useful</span>
                  {", not just technically interesting."}
                </p>
                <p>
                  {"Off the computer, I play basketball for the IIIT Hyderabad team. Kawhi Leonard fan. Aspiring entrepreneur — "}
                  <span className="text-foreground">the idea of creating something from nothing and watching it matter to people</span>
                  {" is what drives everything I do."}
                </p>
              </div>

              {/* Photo strip */}
              <div className="flex gap-3 mt-8 flex-wrap">
                {[
                  { src: "/snow.jpg",    alt: "Playing in the snow, New Jersey" },
                  { src: "/mountain.jpg", alt: "With family at a mountain overlook" },
                  { src: "/train.jpg",   alt: "At a train station, childhood" },
                ].map(({ src, alt }) => (
                  <div key={src} className="relative h-24 w-24 rounded-xl overflow-hidden border border-border/50 flex-shrink-0">
                    <Image src={src} alt={alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Stats + profile photo */}
            <div className="reveal d2 space-y-3">
              <div
                className="relative w-full aspect-[3/4] max-w-xs mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border/50 mb-6"
                style={{ boxShadow: "0 0 80px oklch(0.62 0.22 262 / 12%)" }}
              >
                <Image src="/profile.jpeg" alt="Ronith Menneni" fill className="object-cover object-top" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {stats.map(({ val, lbl }) => (
                <div
                  key={lbl}
                  className="flex items-center justify-between rounded-xl border border-border/50 bg-card/60 px-4 py-3 transition-all hover:border-border hover:bg-card/90 duration-300"
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(4px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                >
                  <span
                    className="text-2xl font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-heading)", color: "oklch(0.93 0.04 268)" }}
                  >
                    {val}
                  </span>
                  <span
                    className="text-xs text-muted-foreground text-right tracking-wide uppercase"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="pb-28 md:pb-36">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <SectionTag>// selected work</SectionTag>

          <div className="flex justify-between items-end mb-8">
            <SectionHeading className="reveal">Projects</SectionHeading>
            <a
              href="https://github.com/17ronith"
              target="_blank"
              rel="noopener"
              className="text-xs text-muted-foreground hover:text-primary transition-colors pb-1"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
            >
              view all on github →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(({ icon, name, desc, tags, href, dashed }, i) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener"
                className={`reveal ${[1,4].includes(i) ? "d1" : i === 2 ? "d2" : i === 5 ? "d3" : ""} group relative flex flex-col gap-3 rounded-[18px] bg-card/50 p-5 no-underline transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
                style={{
                  border: `1px ${dashed ? "dashed" : "solid"} oklch(0.28 0.06 264 / ${dashed ? "25%" : "50%"})`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(90deg, oklch(0.62 0.22 262), transparent 70%)" }}
                />
                <div className="flex justify-between items-start">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-base"
                    style={{ background: "oklch(0.62 0.22 262 / 12%)" }}
                  >
                    {icon}
                  </div>
                  <span
                    className="text-sm text-muted-foreground transition-all group-hover:text-primary"
                    style={{ transition: "all 0.25s" }}
                  >
                    ↗
                  </span>
                </div>
                <div
                  className="font-semibold text-[0.97rem] tracking-tight"
                  style={{ fontFamily: "var(--font-heading)", color: "oklch(0.93 0.04 268)" }}
                >
                  {name}
                </div>
                <div className="flex-1 text-[0.855rem] leading-[1.65] text-muted-foreground">{desc}</div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-2 py-0.5 text-[0.62rem] tracking-wide"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: "oklch(0.62 0.22 262 / 8%)",
                        borderColor: "oklch(0.62 0.22 262 / 20%)",
                        color: "oklch(0.62 0.22 262)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="pb-28 md:pb-36">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <SectionTag>// tech stack</SectionTag>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <SectionHeading className="reveal">What I work with.</SectionHeading>
            <p className="reveal d1 text-[0.93rem] leading-[1.8] text-muted-foreground self-end">
              Systems-level to full-stack — built through real projects, coursework, and relentless curiosity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillGroups.map(({ title, items }, i) => (
              <div
                key={title}
                className={`reveal ${i === 1 ? "d1" : i === 2 ? "d2" : i === 3 ? "d3" : ""} rounded-2xl border border-border/50 bg-card/50 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:bg-card/80`}
              >
                <div
                  className="mb-4 text-[0.62rem] uppercase tracking-[0.18em]"
                  style={{ fontFamily: "var(--font-mono)", color: "oklch(0.62 0.22 262)" }}
                >
                  {title}
                </div>
                <div className="space-y-1.5">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="border-b border-border/30 py-1.5 text-[0.9rem] text-muted-foreground last:border-none hover:text-foreground transition-colors duration-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <HeroConnect />
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto max-w-5xl px-6 md:px-10 flex flex-wrap items-center justify-between gap-5">
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "oklch(0.93 0.04 268)" }}
          >
            RM.
          </span>
          <div className="flex gap-6">
            {[
              ["GitHub", "https://github.com/17ronith"],
              ["LinkedIn", "https://www.linkedin.com/in/ronith-menneni-6b5537320/"],
              ["Email", "mailto:ronithmenneni@gmail.com"],
              ["Resume", "/ISS_CV.pdf"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener" : undefined}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
              >
                {label}
              </a>
            ))}
          </div>
          <span
            className="text-xs text-muted-foreground/50"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2025 Ronith Menneni
          </span>
        </div>
      </footer>
    </>
  )
}
