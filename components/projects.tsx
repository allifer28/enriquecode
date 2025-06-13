"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import ProjectModal, { type ProjectDetails } from "./project-modal"

const projects: ProjectDetails[] = [
  {
    id: 1,
    title: "Ragnarok Veículos",
    description: "Site de revenda de carros com catálogo filtrável e botão de WhatsApp.",
    fullDescription:
      "Ragnarok Veículos é um site completo para uma concessionária de veículos usados, com foco em uma experiência de usuário intuitiva e conversão de leads. O projeto foi desenvolvido com design responsivo e otimizado para SEO, resultando em um aumento de 40% nas consultas de clientes.",
    features: [
      "Catálogo de veículos com filtros avançados (preço, ano, marca, modelo)",
      "Sistema de busca inteligente com sugestões automáticas",
      "Páginas detalhadas para cada veículo com galeria de imagens",
      "Integração com WhatsApp para contato direto com vendedores",
      "Painel administrativo para gerenciamento de estoque",
    ],
    images: [
      "/images/ragnarok-home.png",
      "/images/ragnarok-catalog.png",
      "/images/ragnarok-detail.png",
      "/images/ragnarok-admin.png",
    ],
    tags: ["React", "Tailwind CSS", "JavaScript", "Firebase", "Responsive Design"],
    category: "web",
    demoUrl: "#",
    repoUrl: "#",
    clientFeedback:
      "O site superou nossas expectativas. A funcionalidade de filtro facilitou muito a navegação dos clientes e o botão de WhatsApp aumentou significativamente nossas conversões.",
  },
  {
    id: 2,
    title: "BiteFood",
    description: "App tipo iFood para delivery local com interface intuitiva.",
    fullDescription:
      "BiteFood é uma plataforma de delivery de comida para restaurantes locais que desejam uma alternativa às grandes plataformas. O aplicativo oferece uma experiência simplificada tanto para clientes quanto para restaurantes, com taxas reduzidas e foco na experiência do usuário.",
    features: [
      "Cadastro e login de usuários e restaurantes",
      "Geolocalização para encontrar restaurantes próximos",
      "Sistema de pedidos em tempo real com notificações",
      "Pagamento integrado com diversas opções",
      "Painel para restaurantes gerenciarem cardápio e pedidos",
    ],
    images: [
      "/images/bitefood-home.png",
      "/images/bitefood-restaurants.png",
      "/images/bitefood-cart.png",
      "/images/bitefood-admin.png",
    ],
    tags: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe"],
    category: "mobile",
    demoUrl: "#",
    repoUrl: "#",
    clientFeedback:
      "O aplicativo revolucionou nosso sistema de delivery. A interface intuitiva reduziu erros de pedidos e aumentou a satisfação dos clientes.",
  },
  {
    id: 3,
    title: "Economista",
    description: "Rede social com foco em produtos automotivos e marketing afiliado.",
    fullDescription:
      "Economista é uma plataforma de conteúdo e rede social focada no nicho automotivo, conectando entusiastas, profissionais e marcas. O site combina elementos de blog, fórum e marketplace com sistema de afiliados para monetização de conteúdo.",
    features: [
      "Feed personalizado baseado em interesses do usuário",
      "Sistema de publicação de artigos e reviews",
      "Integração com programas de afiliados automotivos",
      "Fórum de discussão com categorias específicas",
      "Analytics detalhado para criadores de conteúdo",
    ],
    images: [
      "/images/economista-home.png",
      "/images/economista-articles.png",
      "/images/economista-forum.png",
      "/images/economista-profile.png",
    ],
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "AWS", "OAuth", "Analytics"],
    category: "web",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Padaria do Bairro",
    description: "Site institucional simples com seção de cardápio e localização.",
    fullDescription:
      "Padaria do Bairro é um site institucional para uma padaria tradicional que queria estabelecer presença online. O projeto focou em design acolhedor, informações claras e facilidade de navegação para atrair clientes locais.",
    features: [
      "Página inicial com destaques e promoções",
      "Cardápio digital completo com categorias",
      "Formulário de encomendas especiais",
      "Mapa interativo com localização e horários",
      "Galeria de fotos dos produtos",
    ],
    images: [
      "/images/padaria-home.png",
      "/images/padaria-menu.png",
      "/images/padaria-contact.png",
      "/images/padaria-gallery.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    category: "web",
    demoUrl: "#",
    repoUrl: "#",
    clientFeedback:
      "O site é exatamente o que precisávamos - simples, bonito e funcional. Nossos clientes agora podem ver nosso cardápio antes de visitar a loja.",
  },
  {
    id: 5,
    title: "LinkDrive",
    description: "Painel para gestão de contas do LinkedIn (automatizado).",
    fullDescription:
      "LinkDrive é uma ferramenta SaaS para profissionais de marketing e vendas que desejam automatizar e otimizar suas atividades no LinkedIn. A plataforma oferece recursos de automação, análise de dados e gestão de múltiplas contas.",
    features: [
      "Dashboard com métricas de performance",
      "Automação de conexões e mensagens",
      "Agendamento de publicações",
      "Análise de engajamento e crescimento",
      "Integração com CRMs populares",
    ],
    images: [
      "/images/linkdrive-dashboard.png",
      "/images/linkdrive-automation.png",
      "/images/linkdrive-analytics.png",
      "/images/linkdrive-settings.png",
    ],
    tags: ["React", "Node.js", "Firebase", "Chart.js", "API Integration", "SaaS"],
    category: "web",
    demoUrl: "#",
    repoUrl: "#",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null)

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projetos" className="py-20 bg-gradient-to-b from-black to-blue-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-cyan-400">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "web", "mobile"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category ? "bg-cyan-500 text-black" : "bg-blue-900/20 text-gray-300 hover:bg-blue-900/40"
                }`}
              >
                {category === "all" ? "Todos" : category === "web" ? "Web" : "Mobile"}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

interface ProjectCardProps {
  project: ProjectDetails
  index: number
  onClick: () => void
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-blue-950/10 border border-blue-900/30 rounded-xl overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="bg-cyan-500 p-2 rounded-full text-black"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className="bg-cyan-500 p-2 rounded-full text-black"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-blue-900/30 text-cyan-300 rounded-full">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-3 py-1 bg-blue-900/30 text-cyan-300 rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <div className="mt-4 pt-4 border-t border-blue-900/30 flex justify-between items-center">
          <span className="text-sm text-cyan-400 font-medium">Ver detalhes</span>
          <span className="text-sm text-gray-500">{project.category === "web" ? "Website" : "App Mobile"}</span>
        </div>
      </div>
    </motion.div>
  )
}
