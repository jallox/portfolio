"use client"

import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } },
}

const highlights = ["Frontend design", "Minecraft tooling", "Backend automation", "AI & Machine learning", "Open source software", "Community projects"]

export default function Hero() {
  return (
    <section className="site-section hero-section flex min-h-screen items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="site-container grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center xl:grid-cols-[1fr_400px]"
      >
        <div>
          <motion.div variants={fadeUp} className="mb-7 flex flex-wrap items-center gap-3">
            <span className="section-kicker">Javier Fernández</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-sm font-body text-secondary/60">Full-stack developer</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-heading font-bold leading-[0.98] text-primary sm:text-6xl md:text-7xl 2xl:text-8xl"
          >
            Building useful software for communities and the web.
          </motion.h1>

          <motion.p variants={fadeUp} className="section-copy mt-8 max-w-2xl text-balance">
            Hello there! I'm Javier, a passionate full-stack developer with a knack for crafting practical software solutions. I thrive on creating tools that empower creators and enhance developer workflows. Let's build something amazing together!
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-sm font-body font-semibold text-bg transition-all duration-300 hover:bg-primary/90"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-body font-semibold text-secondary transition-all duration-300 hover:border-secondary/40 hover:text-primary"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>

        <motion.aside variants={fadeUp} className="accent-panel p-5 sm:p-6">
          <div className="flex items-start justify-between gap-6 border-b border-border/80 pb-6">
            <div>
              <p className="mono-label">Current focus</p>
              <p className="mt-3 max-w-xs text-xl font-heading font-semibold leading-snug text-primary">
                Practical products, creator tools, and better developer workflows.
              </p>
            </div>
            <div className="grid h-16 w-16 shrink-0 place-items-center border border-accent/30 bg-accent/5 text-lg font-heading font-bold text-accent">
              JF
            </div>
          </div>

          <div className="grid gap-3 py-6">
            {highlights.map((item) => (
              <div key={item} className="flex items-center justify-between gap-4">
                <span className="text-sm font-body text-secondary/70">{item}</span>
                <span className="h-px flex-1 bg-border/70" />
                <span className="text-xs font-body text-accent/70 uppercase">OK</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 border-t border-border/80 pt-6">
            <div>
              <p className="text-2xl font-heading font-bold text-primary">4+</p>
              <p className="mt-1 text-xs font-body text-muted">years</p>
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-primary">6</p>
              <p className="mt-1 text-xs font-body text-muted">focus areas</p>
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-primary">open</p>
              <p className="mt-1 text-xs font-body text-muted">to projects</p>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  )
}
