"use client"

import { motion } from "framer-motion"
import { Code, Globe, Database } from "lucide-react"

export default function About() {
  const skills = [
    {
      name: "Front-end",
      icon: <Globe className="w-6 h-6 text-cyan-400 dark:text-cyan-600" />,
      description: "HTML, CSS, JavaScript, React, Tailwind CSS",
    },
    {
      name: "Back-end",
      icon: <Database className="w-6 h-6 text-cyan-400 dark:text-cyan-600" />,
      description: "Node.js, Express, APIs RESTful",
    },
    {
      name: "Ferramentas",
      icon: <Code className="w-6 h-6 text-cyan-400 dark:text-cyan-600" />,
      description: "Git, GitHub, VS Code, Figma",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-black/90 dark:bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-800">
            Sobre <span className="text-cyan-400 dark:text-cyan-600">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 dark:bg-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed dark:text-gray-700">
              Sou Allifer, dev full-stack em construção. Já criei sites com HTML, CSS, JavaScript, e tenho experiência
              com front-end, filtros dinâmicos, popups de cookies, mobile-first e design com Tailwind e Shadcn UI. Já
              participei de projetos como catálogos automotivos, apps de delivery e landing pages comerciais.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-900/30 text-cyan-400 rounded-full text-sm dark:bg-gray-200 dark:text-cyan-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-blue-950/20 border border-blue-900/30 p-6 rounded-lg dark:bg-white dark:border-gray-300"
              >
                <div className="flex items-center mb-3">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-3 dark:text-gray-800">{skill.name}</h3>
                </div>
                <p className="text-gray-400 dark:text-gray-600">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
