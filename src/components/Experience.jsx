"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    period: "Early stages",
    title: "\"Code writter\" and \"tutorial follower\"",
    text: "I started creating my firsts web designs, following tutorials and simply copying code without understanding it.",
  },
  {
    period: "Minecraft ecosystem",
    title: "Spigot plugin development",
    text: "Creating plugins for the Spigot Minecraft server was a great way to learn Java and understand how to create interactive experiences for players.",
  },
  {
    period: "Client satisfaction, community building",
    title: "Freelance web development",
    text: "Building websites for clients and creating a community of developers around my work taught me the importance of communication, collaboration, and delivering value to users.",
  },
  {
    period: "Making developer's lives easier",
    title: "Open source projects",
    text: "Contributing to open source projects and creating my own tools has allowed me to solve real problems for developers and share my work with a wider audience.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="site-section bg-black">
      <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-md"
        >
          <p className="section-kicker mb-4">Experience</p>
          <h2 className="section-title text-balance">Not a linear path. A useful one.</h2>
          <p className="section-copy mt-5">
            My work sits between product thinking, community tooling, and code that solves a
            concrete problem.
          </p>
        </motion.div>

        <div className="surface-panel">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid gap-4 border-b border-border/80 p-6 last:border-b-0 sm:grid-cols-[180px_1fr] sm:p-7"
            >
              <p className="mono-label text-accent/70">{item.period}</p>
              <div>
                <h3 className="text-lg font-heading font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm font-body leading-relaxed text-secondary/60">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
