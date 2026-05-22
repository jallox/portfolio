"use client"

import { motion } from "framer-motion"

const socials = [
  { label: "GitHub", href: "https://github.com/jallox" },
  { label: "Email", href: "mailto:jalllox.dev@gmail.com" },
]

const canHelp = ["Portfolio or product UI", "Minecraft/Discord tooling", "Custom software solutions"]

export default function Contact() {
  return (
    <section id="contact" className="site-section bg-black">
      <div className="site-container grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <p className="section-kicker mb-4">Contact</p>
          <h2 className="section-title max-w-2xl text-balance">Have an idea worth making real?</h2>
          <p className="section-copy mt-6 max-w-2xl">
            Send me the rough version. The messy notes, the half-shaped product idea, the server
            workflow that annoys everyone. I can help turn it into something usable.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:jalllox.dev@gmail.com"
              className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-sm font-body font-semibold text-bg transition-all duration-300 hover:bg-primary/90"
            >
              jalllox.dev@gmail.com
            </a>
            <a
              href="https://github.com/jallox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-body font-semibold text-secondary transition-all duration-300 hover:border-secondary/40 hover:text-primary"
            >
              View GitHub
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="accent-panel p-6"
        >
          <p className="mono-label text-accent/80">Available for</p>
          <div className="mt-6 grid gap-3">
            {canHelp.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-border/80 bg-bg/50 p-3">
                <span className="h-2 w-2 bg-accent/70" />
                <span className="text-sm font-body text-secondary/70">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <p className="mono-label">Elsewhere</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-3 py-2 text-xs font-body text-secondary/60 transition-colors duration-300 hover:border-secondary/40 hover:text-primary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
