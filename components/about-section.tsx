"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "Dart", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "Flutter", category: "frameworks" },
  { name: "React", category: "frameworks" },
  { name: "Next.js", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Express", category: "frameworks" },
  { name: "MongoDB", category: "databases" },
  { name: "SQL", category: "databases" },
  { name: "Firebase", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" },
]

export default function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <section id="about" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="space-y-4 text-slate-300">
            <p>
              I'm a passionate Software Engineering student at FAST University with a keen eye for design and a love for
              creating beautiful, functional applications.
            </p>
            <p>
              My journey in software development began with a curiosity about how digital products are built, which
              quickly evolved into a passion for crafting exceptional user experiences.
            </p>
            <p>
              I specialize in full-stack development with a focus on modern frameworks and technologies. Whether it's
              building responsive web applications or developing cross-platform mobile apps, I'm always excited to take
              on new challenges.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              brainstorming innovative solutions to real-world problems.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-6"
          >
            Technical Skills
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <Badge
                  className={`px-3 py-1 text-sm ${
                    skill.category === "languages"
                      ? "bg-violet-500/20 text-violet-300 hover:bg-violet-500/30"
                      : skill.category === "frameworks"
                        ? "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30"
                        : skill.category === "databases"
                          ? "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30"
                          : "bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30"
                  }`}
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
