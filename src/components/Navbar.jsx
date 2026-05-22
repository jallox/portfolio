"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub", href: "https://github.com/jallox" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled ? "border-border bg-black/80 backdrop-blur-lg" : "border-transparent bg-transparent"
      }`}
    >
      <div className="site-container h-16 flex items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#" className="text-sm font-heading font-semibold text-primary">
          Jayox
        </a>

        <a
          href="#contact"
          className="border border-border px-3 py-2 text-xs font-body font-semibold text-secondary/70 transition-colors hover:border-secondary/40 hover:text-primary sm:hidden"
        >
          Contact
        </a>

        <div className="hidden items-center gap-3 sm:flex md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-2 py-2 text-sm font-body text-secondary/55 transition-colors duration-300 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
