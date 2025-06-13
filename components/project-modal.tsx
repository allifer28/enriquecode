"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface ProjectDetails {
  id: number
  title: string
  description: string
  fullDescription: string
  features: string[]
  images: string[]
  tags: string[]
  category: string
  demoUrl?: string
  repoUrl?: string
  clientFeedback?: string
}

interface ProjectModalProps {
  project: ProjectDetails | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Disable scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Handle escape key press
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)
    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEscape)
    }
  }, [project, onClose])

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
          className="bg-blue-950/30 border border-blue-900/50 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-blue-900/50">
            <h2 className="text-2xl font-bold text-cyan-400">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-blue-900/30 hover:bg-blue-900/50 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-130px)] p-6">
            {/* Image gallery with navigation */}
            <div className="mb-8 relative">
              <div className="rounded-lg overflow-hidden bg-blue-900/20 h-64 md:h-80">
                <img
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="flex justify-center mt-4 gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(index)
                        }}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex ? "bg-cyan-400" : "bg-gray-600"
                        }`}
                        aria-label={`Ver imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Sobre o Projeto</h3>
              <p className="text-gray-300 mb-6">{project.fullDescription}</p>

              <h4 className="text-lg font-semibold mb-3">Funcionalidades Principais</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-900/40 text-cyan-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Client feedback if available */}
            {project.clientFeedback && (
              <div className="mb-8 bg-blue-900/20 p-4 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-xl font-semibold mb-2">Feedback do Cliente</h3>
                <p className="text-gray-300 italic">"{project.clientFeedback}"</p>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-blue-900/50 flex justify-between items-center">
            <div className="flex gap-3">
              {project.demoUrl && (
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-blue-900/30 hover:bg-blue-900/50 border-blue-900/50"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" /> Ver Demo
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-blue-900/30 hover:bg-blue-900/50 border-blue-900/50"
                  asChild
                >
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" /> Ver Código
                  </a>
                </Button>
              )}
            </div>
            <Button onClick={onClose} className="bg-cyan-500 hover:bg-cyan-600 text-black">
              Fechar
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
