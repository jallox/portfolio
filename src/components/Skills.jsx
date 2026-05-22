"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Interfaces",
    description: "Design that makes usage an experience. UX, UI, and frontend development from concept to deployment.",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    category: "Systems",
    description: "Backend logic, plugin architecture, APIs, and data handling.",
    items: ["Node.js", "Golang", "Java"],
  },
  {
    category: "Developers",
    description: "Tools and resources for developers, open source contributions, and ecosystem building.",
    items: ["GitHub", "VS Code", "Documentation", "Developer Relations"],
  },
  {
    category: "Exploration",
    description: "Fast experiments around AI, ML, and product ideas.",
    items: ["TensorFlow", "NLP", "Data", "Automation"],
  },
]

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Skills() {
  return (
    <section id="skills" className="site-section">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-kicker mb-4">Capabilities</p>
          <h2 className="section-title">What I bring to a project.</h2>
          <p className="section-copy mt-5">
            A practical toolkit for building, iterating, and shipping without turning the work
            into unnecessary theater.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-4">
          {skills.map((group, index) => (
            <motion.article
              key={group.category}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemAnim}
              transition={{ delay: index * 0.05 }}
              className="surface-panel p-6"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="mono-label text-accent/70">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-heading font-semibold text-primary">{group.category}</h3>
                </div>
                <span className="h-2 w-2 bg-accent/70" />
              </div>
              <p className="mb-7 text-sm font-body leading-relaxed text-secondary/55">{group.description}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill} className="border border-border/80 px-2.5 py-1 text-[10px] font-body text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
