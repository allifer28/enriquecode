"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { GitCommit, GitBranch, GitPullRequest } from "lucide-react"

// Dados fictícios do GitHub
const fakeCommits = [
  { id: 1, message: "Atualização da seção hero da landing page", date: "2 dias atrás", branch: "main" },
  {
    id: 2,
    message: "Correção de layout responsivo em dispositivos móveis",
    date: "5 dias atrás",
    branch: "fix/mobile-layout",
  },
  {
    id: 3,
    message: "Adição de funcionalidade de alternância de modo escuro",
    date: "1 semana atrás",
    branch: "feature/dark-mode",
  },
  {
    id: 4,
    message: "Otimização de performance no carregamento de imagens",
    date: "2 semanas atrás",
    branch: "optimization",
  },
]

export default function GitHubActivity() {
  const [commits, setCommits] = useState([])

  useEffect(() => {
    // Simula uma chamada de API
    setTimeout(() => {
      setCommits(fakeCommits)
    }, 500)
  }, [])

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            GitHub <span className="text-cyan-400">Atividade</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-950/10 border border-blue-900/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                  <GitBranch className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold">Commits Recentes</h3>
              </div>
              <a href="#" className="text-cyan-400 text-sm hover:underline">
                Ver GitHub
              </a>
            </div>

            <div className="space-y-4">
              {commits.length > 0 ? (
                commits.map((commit) => (
                  <motion.div
                    key={commit.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-l-2 border-blue-900/50 pl-4 py-2"
                  >
                    <div className="flex items-center">
                      <GitCommit className="w-4 h-4 text-cyan-400 mr-2" />
                      <p className="text-gray-300 font-medium">{commit.message}</p>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span>{commit.date}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <GitBranch className="w-3 h-3 mr-1" />
                        <span>{commit.branch}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="flex justify-center py-8">
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-3 w-3 bg-blue-900/50 rounded-full"></div>
                    <div className="h-3 w-3 bg-blue-900/50 rounded-full"></div>
                    <div className="h-3 w-3 bg-blue-900/50 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-blue-900/30 flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-400">42 contribuições</span>
                </div>
                <div className="flex items-center">
                  <GitPullRequest className="w-4 h-4 text-cyan-400 mr-1" />
                  <span className="text-sm text-gray-400">12 PRs</span>
                </div>
              </div>
              <span className="text-xs text-gray-500">Atualizado há 3 horas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
