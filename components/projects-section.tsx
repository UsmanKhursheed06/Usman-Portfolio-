"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Github, ExternalLink, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

/**
 * -----------------------------------------------------------------------------
 * Project Types & Data
 * -----------------------------------------------------------------------------
 */

interface Project {
  id: number
  title: string
  description: string
  image: string // MUST point to a file in /public or a remote domain allowed in next.config.js
  techStack: string[]
  features: string[]
  github: string
  live?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Expense Tracker",
    description:
      "A beautiful Flutter application to track personal expenses with detailed analytics and reports.",
    image: "/placeholder.svg", // make sure this file exists in /public
    techStack: ["Flutter", "Dart", "Firebase", "SQLite"],
    features: [
      "Real-time expense tracking",
      "Beautiful charts and analytics",
      "Category-based organization",
      "Budget planning and alerts",
      "Export reports as PDF",
    ],
    github: "https://github.com/UsmanKhursheed06",
  },
  
  
   
 
]

/**
 * -----------------------------------------------------------------------------
 * Component
 * -----------------------------------------------------------------------------
 */
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20">
      {/* ------------------------------------------------------------------ */}
      {/* Section Heading                                                    */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A showcase of my best work, demonstrating my skills and passion for
          creating exceptional digital experiences.
        </p>
      </motion.div>

      {/* ------------------------------------------------------------------ */}
      {/* Cards Grid                                                         */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="glass h-full overflow-hidden border-0 group">
              {/* -------------------- Image + Overlay -------------------- */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Title overlay */}
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </h3>

                {/* View Details button */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </div>
              </div>

              {/* -------------------- Card Body ------------------------- */}
              <div className="p-6">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-800 text-slate-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="bg-slate-800 text-slate-200"
                    >
                      +{project.techStack.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* ------------------------------------------------------------------ */}
      {/* Details Dialog                                                    */}
      {/* ------------------------------------------------------------------ */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="glass border-0 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
              {selectedProject?.title}
            </DialogTitle>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>

          {/* Large cover image */}
          <div className="relative h-64 w-full overflow-hidden rounded-md mb-4">
            {selectedProject && (
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 75vw"
                className="object-cover"
              />
            )}
          </div>

          <DialogDescription className="text-slate-300">
            {selectedProject?.description}
          </DialogDescription>

          {/* Tech Stack */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject?.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-slate-800 text-slate-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Key Features</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              {selectedProject?.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a
                href={selectedProject?.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source
              </a>
            </Button>
            {selectedProject?.live && (
              <Button
                className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white"
                asChild
              >
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
