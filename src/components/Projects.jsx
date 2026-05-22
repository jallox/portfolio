"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Flamingo-Client",
    type: "Developer tool",
    description: "A non bloated API client designed for simplicity and the solo developer ignoring over-engineered solutions thought for huge teams.",
    impact: "Developer experience",
    tags: ["TypeScript", "Electron", "React"],
    year: "2026",
    featured: true,
  },
  {
    title: "Portfolio v2",
    type: "Personal site",
    description: "A fast portfolio built with Next.js, motion, and a custom visual system.",
    impact: "Personal brand",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    year: "2026",
  },
  {
    title: "Mixel Nodes",
    type: "SaaS Hosting platform",
    description: "A hosting platform for Minecraft servers with a focus on performance, reliability, and user-friendly management tools.",
    impact: "System Admin & Full-Stack",
    tags: ["Linux", "Pterodactyl", "WHMCS", "Golang", "AI", "React"],
    year: "2026",
  },
  {
    title: "Lucky Pillars",
    type: "Minecraft plugin",
    description: "A feature-rich Paper plugin that adds the famous Pillars of Fortune gamplay into Minecraft.",
    impact: "Maintainer",
    tags: ["Java", "Paper API", "Databases"],
    year: "2025",
  },
  {
    title: "Cloud Save",
    type: "Self-hosted tool",
    description: "Small Google-drive like file storage application built with Express.js and EJS.",
    impact: "Personal project (ARCHIVE)",
    tags: ["Express.js", "EJS", "JavaScript", "Bootstrap"],
    year: "2024",
  },
  
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="site-section bg-black">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end"
        >
          <div>
            <p className="section-kicker mb-4">Selected work</p>
            <h2 className="section-title">Projects with a job to do.</h2>
          </div>
          <p className="section-copy max-w-xl md:justify-self-end">
            A few things I've built across plugins, bots, experiments, and this portfolio.
            The common thread is simple: solve the user's actual problem.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="accent-panel mb-4 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="section-kicker">{featured.type}</span>
              <span className="text-xs font-body text-muted">{featured.year}</span>
            </div>
            <h3 className="max-w-2xl text-3xl font-heading font-bold leading-tight text-primary sm:text-4xl">
              {featured.title}
            </h3>
            <p className="section-copy mt-5 max-w-2xl">{featured.description}</p>
          </div>

          <div className="grid content-between gap-8">
            <div className="grid grid-cols-2 gap-3">
              <div className="surface-panel p-4">
                <p className="mono-label">Impact</p>
                <p className="mt-3 text-lg font-heading font-semibold text-primary">{featured.impact}</p>
              </div>
              <div className="surface-panel p-4">
                <p className="mono-label">Role</p>
                <p className="mt-3 text-lg font-heading font-semibold text-primary">Build + ship</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span key={tag} className="border border-accent/25 px-3 py-1.5 text-xs font-body text-accent/75">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {rest.map((project) => (
            <motion.article
              key={project.title}
              variants={itemAnim}
              className="surface-panel flex min-h-72 flex-col justify-between p-6 transition-all duration-300 hover:border-secondary/30"
            >
              <div>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="text-[11px] font-body font-semibold uppercase tracking-[0.14em] text-accent/70">
                    {project.year}
                  </span>
                  <span className="text-xs font-body text-muted">{project.type}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary">{project.title}</h3>
                <p className="mt-4 text-sm font-body leading-relaxed text-secondary/55">{project.description}</p>
              </div>
              <div>
                <p className="mb-3 text-xs font-body text-muted">{project.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-border/80 px-2.5 py-1 text-[10px] font-body text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
