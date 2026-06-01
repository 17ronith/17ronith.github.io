"use client"

import { useState, useEffect } from "react"
import { X, Check, ArrowRight, Code2, Brain } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroConnect() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [formStep, setFormStep] = useState<"idle" | "submitting" | "success">("idle")

  const handleExpand = () => setIsExpanded(true)

  const handleClose = () => {
    setIsExpanded(false)
    setTimeout(() => setFormStep("idle"), 500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep("submitting")
    setTimeout(() => {
      setFormStep("success")
    }, 1500)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  return (
    <>
      {/* Trigger section */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-24 sm:py-32">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.585 0.235 277 / 15%), transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-sm backdrop-blur-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            <span className="text-muted-foreground tracking-wider text-xs uppercase">
              Open to opportunities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {"Let's build "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.22 262), oklch(0.585 0.235 277))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              something
            </span>{" "}
            together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed"
          >
            {"Whether it's a collaboration, internship, or just a good conversation — I'm always up for it."}
          </motion.p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-block relative mt-2">
                <motion.div
                  layout
                  layoutId="connect-card"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.62 0.22 262), oklch(0.585 0.235 277))",
                    borderRadius: "100px",
                  }}
                />
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="relative flex items-center gap-2 h-14 px-8 py-3 text-base font-semibold text-white tracking-wide hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Get in touch
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Expanded modal */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
            <motion.div
              layoutId="connect-card"
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              layout
              className="relative flex h-full w-full overflow-hidden sm:rounded-[24px] shadow-2xl"
            >
              {/* Dark-blue gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.10 0.05 264), oklch(0.14 0.06 277) 60%, oklch(0.10 0.04 264))",
                }}
              />

              {/* Subtle noise */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                }}
              />

              {/* Close */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleClose}
                className="absolute right-4 top-4 sm:right-8 sm:top-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-6xl mx-auto overflow-y-auto lg:overflow-hidden"
              >
                {/* Left: highlights */}
                <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-16 gap-8 text-white">
                  <div className="space-y-4">
                    <h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {"Let's connect."}
                    </h2>
                    <p className="text-white/70 text-lg max-w-md">
                      Open to research collabs, internships, side projects, and
                      interesting conversations.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                        <Code2 className="w-6 h-6 text-blue-200" />
                      </div>
                      <div>
                        <h3
                          className="font-semibold text-lg"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Full-Stack & AI
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed mt-1">
                          Fraud detection, EdTech AI, medical imaging — I build
                          things that solve real problems.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                        <Brain className="w-6 h-6 text-purple-200" />
                      </div>
                      <div>
                        <h3
                          className="font-semibold text-lg"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Research-Minded
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed mt-1">
                          IIIT-H research student with experience in ML
                          pipelines, systems programming, and applied AI.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/15">
                    <p
                      className="text-sm text-white/50 tracking-wider"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      ronithmenneni@gmail.com
                    </p>
                  </div>
                </div>

                {/* Right: form */}
                <div className="flex-1 flex items-center justify-center p-4 sm:p-12 lg:p-16">
                  <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
                    {formStep === "success" ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center h-[380px] space-y-6"
                      >
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                          style={{ background: "oklch(0.62 0.22 262)" }}
                        >
                          <Check className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3
                            className="text-2xl font-bold text-white mb-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            Message sent!
                          </h3>
                          <p className="text-white/60">
                            {"I'll get back to you as soon as possible."}
                          </p>
                        </div>
                        <button
                          onClick={handleClose}
                          className="px-6 py-2 bg-white/15 hover:bg-white/25 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          Back to site
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                          <h3
                            className="text-xl font-semibold text-white"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            Say hello
                          </h3>
                          <p className="text-sm text-white/50">
                            {"Drop a message and I'll reach out."}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider"
                              style={{ fontFamily: "var(--font-mono)" }}
                            >
                              Name
                            </label>
                            <input
                              required
                              type="text"
                              id="name"
                              placeholder="Your name"
                              className="w-full px-4 py-3 rounded-lg border border-white/15 text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm"
                              style={{ background: "oklch(0.16 0.04 264)" }}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider"
                              style={{ fontFamily: "var(--font-mono)" }}
                            >
                              Email
                            </label>
                            <input
                              required
                              type="email"
                              id="email"
                              placeholder="you@example.com"
                              className="w-full px-4 py-3 rounded-lg border border-white/15 text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm"
                              style={{ background: "oklch(0.16 0.04 264)" }}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="subject"
                              className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider"
                              style={{ fontFamily: "var(--font-mono)" }}
                            >
                              Regarding
                            </label>
                            <select
                              id="subject"
                              className="w-full px-4 py-3 rounded-lg border border-white/15 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                              style={{ background: "oklch(0.16 0.04 264)" }}
                            >
                              <option style={{ background: "#0f172a" }}>Collaboration</option>
                              <option style={{ background: "#0f172a" }}>Internship / Role</option>
                              <option style={{ background: "#0f172a" }}>Research</option>
                              <option style={{ background: "#0f172a" }}>Just saying hi</option>
                            </select>
                          </div>

                          <div>
                            <label
                              htmlFor="message"
                              className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider"
                              style={{ fontFamily: "var(--font-mono)" }}
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              rows={3}
                              placeholder="What's on your mind?"
                              className="w-full px-4 py-3 rounded-lg border border-white/15 text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none text-sm"
                              style={{ background: "oklch(0.16 0.04 264)" }}
                            />
                          </div>
                        </div>

                        <button
                          disabled={formStep === "submitting"}
                          type="submit"
                          className="w-full flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2 text-white"
                          style={{
                            background:
                              "linear-gradient(135deg, oklch(0.62 0.22 262), oklch(0.585 0.235 277))",
                          }}
                        >
                          {formStep === "submitting" ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            "Send message"
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
