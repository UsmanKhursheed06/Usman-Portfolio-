"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"

export default function HeroSection() {
  /**
   * Smooth-scroll helper that compensates for the fixed header height.
   * Adds a small gap (8 px) so content doesn't touch the navbar.
   */
  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault()

    const target = document.querySelector(href)
    if (!target) return

    const headerHeight = (document.getElementById("site-header")?.offsetHeight ?? 0) + 8
    const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight

    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-primary mb-2"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">Usman Khurshid</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-6 max-w-2xl mx-auto md:mx-0"
          >
            Crafting stunning digital experiences — one line at a time
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 mb-8 max-w-xl mx-auto md:mx-0"
          >
            Software Engineering student at FAST University with a passion for creating beautiful, functional
            applications that solve real-world problems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <Button
              onClick={(e) => handleNavClick(e, "#projects")}
              className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white px-8 py-6 rounded-lg w-full sm:w-auto"
              size="lg"
            >
              See My Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              onClick={(e) => handleNavClick(e, "#contact")}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-lg w-full sm:w-auto"
            >
              Let's Connect
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center justify-center md:justify-start gap-4"
          >
            <a
              href="https://github.com/UsmanKhursheed06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/usman-k-4076aa290"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}