"use client"

import { motion } from "framer-motion"

const values = [
  {
    title: "Project requirements",
    text: "Every project is a unique challenge that requires custom solutions. I like taking the time to understand the problem and find the right solution.",
  },
  {
    title: "Detail polish",
    text: "I pay attention to the small details that make a big difference in the user experience. I like to add those little touches that make an interface feel more alive and responsive.",
  },
  {
    title: "Final product",
    text: "I believe that good presentation and feedback are essential for a great user experience. I like to create interfaces that are clear, intuitive, and provide feedback that helps users understand what's going on.",
  },
]

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function About() {
  return (
    <section id="about" className="site-section">
      <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fade}
          className="max-w-md"
        >
          <p className="section-kicker mb-4">About</p>
          <h2 className="section-title text-balance">A developer with a taste for practical craft.</h2>
        </motion.div>

        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fade}
            className="surface-panel p-6 sm:p-8"
          >
            <p className="section-copy">
              I started writing code in the late 2020s. Now, after years of experience, I design and build quality software for the nowadays user, looking for solutions that are both functional and delightful.
            </p>
            <p className="section-copy mt-6">
              I have only one mission: to create software that I personally would want to use. I believe that if I can create something that I would enjoy using, then it will be something that others will enjoy using as well.
            </p>
          </motion.div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                className="surface-panel p-5"
              >
                <p className="mb-3 text-xs font-body font-semibold uppercase tracking-[0.14em] text-accent/70">
                  0{index + 1}
                </p>
                <h3 className="text-base font-heading font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm font-body leading-relaxed text-secondary/55">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
