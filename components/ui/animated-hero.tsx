"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, ExternalLink, FileText } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => ["developer", "engineer", "builder", "maker", "baller"],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full relative z-10">
      {/* Ambient glow inspired by concert stage lighting in profile photo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.62 0.22 262 / 12%), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-10">
        <div className="flex gap-6 py-24 lg:py-40 items-center justify-center flex-col">

          {/* Headline */}
          <div className="flex gap-2 flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl max-w-3xl tracking-tight text-center leading-[0.95]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-foreground font-bold">Hi, I&apos;m</span>{" "}
              <span
                className="font-extrabold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.22 262), oklch(0.585 0.235 277))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ronith.
              </span>
            </motion.h1>

            {/* Rotating word */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex w-full justify-center overflow-hidden h-14 md:h-20 mt-2"
            >
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "oklch(0.62 0.22 262)",
                  }}
                  initial={{ opacity: 0, y: 80 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : {
                          y: titleNumber > index ? -80 : 80,
                          opacity: 0,
                        }
                  }
                >
                  {title}.
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center"
          >
            CS undergrad at IIIT Hyderabad building AI systems, full-stack
            apps, and medical imaging tools. Born in NJ, raised in Hyderabad —
            curious about everything.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row gap-3 flex-wrap justify-center"
          >
            <a
              href="https://github.com/17ronith"
              target="_blank"
              rel="noopener"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 font-mono text-xs tracking-wider"
              )}
            >
              <ExternalLink className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ronith-menneni-6b5537320/"
              target="_blank"
              rel="noopener"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 font-mono text-xs tracking-wider"
              )}
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="/ISS_CV.pdf"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 font-mono text-xs tracking-wider"
              )}
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Scroll nudge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center gap-2 mt-4"
          >
            <div className="w-8 h-px bg-muted-foreground/40" />
            <span
              className="text-xs text-muted-foreground/50 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              scroll
            </span>
            <div className="w-8 h-px bg-muted-foreground/40" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
