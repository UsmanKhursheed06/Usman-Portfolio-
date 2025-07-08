"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Award, Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Freelance Developer",
    period: "2022 - Present",
    description:
      "Working with clients worldwide to deliver high-quality web and mobile applications. Specialized in Flutter and React development with a focus on clean, maintainable code and exceptional user experiences.",
    type: "work",
  },
  {
    id: 2,
    title: "BOLT Hackathon Participant",
    period: "2023",
    description:
      "Participated in the world's largest hackathon organized by BOLT. Developed an innovative solution for sustainable energy monitoring using IoT devices and mobile technology.",
    type: "achievement",
  },
  {
    id: 3,
    title: "Software Engineering Student",
    period: "2021 - Present",
    description:
      "Pursuing a degree in Software Engineering at FAST University. Focusing on modern software development practices, algorithms, data structures, and system design.",
    type: "education",
  },
   {
    id: 4,
    title: "Software Engineering Student",
    period: "2021 - Present",
    description:
      "Pursuing a degree in Software Engineering at FAST University. Focusing on modern software development practices, algorithms, data structures, and system design.",
    type: "education",
  },
   {
    id: 5,
    title: "Software Engineering Student",
    period: "2021 - Present",
    description:
      "Pursuing a degree in Software Engineering at FAST University. Focusing on modern software development practices, algorithms, data structures, and system design.",
    type: "education",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Experience & Achievements</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          My professional journey and notable accomplishments in the world of software development.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 z-10"></div>

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <Card className="glass border-0 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="mr-4 p-2 rounded-full bg-primary/20">
                          {exp.type === "work" ? (
                            <Briefcase className="h-5 w-5 text-primary" />
                          ) : exp.type === "achievement" ? (
                            <Award className="h-5 w-5 text-primary" />
                          ) : (
                            <Calendar className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-sm text-slate-400">{exp.period}</p>
                        </div>
                      </div>
                      <p className="text-slate-300">{exp.description}</p>
                      <div className="mt-4">
                        <Badge
                          className={`${
                            exp.type === "work"
                              ? "bg-violet-500/20 text-violet-300"
                              : exp.type === "achievement"
                                ? "bg-cyan-500/20 text-cyan-300"
                                : "bg-blue-500/20 text-blue-300"
                          }`}
                        >
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
