"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-blue-950/20 to-black dark:from-gray-200 dark:to-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-800">
            Entre em <span className="text-cyan-400 dark:text-cyan-600">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 dark:bg-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-gray-800">Vamos conversar</h3>
            <p className="text-gray-400 mb-8 dark:text-gray-600">
              Estou disponível para freelance, projetos de longo prazo ou apenas para trocar ideias sobre
              desenvolvimento web.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4 dark:bg-gray-200">
                  <Mail className="w-5 h-5 text-cyan-400 dark:text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-300 dark:text-gray-700">contato@enriquecode.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4 dark:bg-gray-200">
                  <Phone className="w-5 h-5 text-cyan-400 dark:text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefone</p>
                  <p className="text-gray-300 dark:text-gray-700">(11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4 dark:bg-gray-200">
                  <MapPin className="w-5 h-5 text-cyan-400 dark:text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localização</p>
                  <p className="text-gray-300 dark:text-gray-700">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 dark:text-gray-600">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-blue-950/10 border border-blue-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-white dark:border-gray-300 dark:text-gray-800 dark:focus:ring-cyan-600"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 dark:text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-blue-950/10 border border-blue-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-white dark:border-gray-300 dark:text-gray-800 dark:focus:ring-cyan-600"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 dark:text-gray-600">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-blue-950/10 border border-blue-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-white dark:border-gray-300 dark:text-gray-800 dark:focus:ring-cyan-600"
                  placeholder="Como posso ajudar?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center dark:from-cyan-600 dark:to-blue-700"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Enviar Mensagem <Send className="ml-2 w-4 h-4" />
                  </span>
                )}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg text-center dark:bg-green-100 dark:border-green-300 dark:text-green-700"
                >
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
