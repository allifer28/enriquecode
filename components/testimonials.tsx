"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Excelente trabalho! Meu site ficou moderno e funcional.",
    author: "Cliente anônimo",
    role: "Empresário",
  },
  {
    id: 2,
    text: "Rápido, eficiente e com ótimo gosto visual.",
    author: "Parceiro de projeto",
    role: "Designer",
  },
  {
    id: 3,
    text: "Superou todas as minhas expectativas. Recomendo fortemente!",
    author: "Maria Silva",
    role: "Empreendedora",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-black dark:bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-800">Depoimentos</h2>
          <div className="w-20 h-1 bg-cyan-400 dark:bg-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <Quote className="w-16 h-16 text-cyan-500/20 dark:text-cyan-600/20" />
          </div>

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-950/10 border border-blue-900/30 rounded-xl p-8 md:p-12 text-center dark:bg-white dark:border-gray-300"
          >
            <p className="text-xl md:text-2xl text-gray-300 italic mb-8 dark:text-gray-700">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="text-lg font-semibold text-cyan-400 dark:text-cyan-600">{testimonials[current].author}</p>
              <p className="text-gray-500">{testimonials[current].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-blue-900/20 text-cyan-400 hover:bg-blue-900/40 transition-colors dark:bg-gray-200 dark:text-cyan-600 dark:hover:bg-gray-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-cyan-400 dark:bg-cyan-600" : "bg-blue-900/40 dark:bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-blue-900/20 text-cyan-400 hover:bg-blue-900/40 transition-colors dark:bg-gray-200 dark:text-cyan-600 dark:hover:bg-gray-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
