import { ExternalLink, Github, MessageCircle, Cookie, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Ragnarok Veículos',
      description: 'Site de venda de carros com sistema de filtro por marca, integração com WhatsApp e popup de cookies para conformidade LGPD.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'LGPD'],
      features: ['Filtro por marca', 'WhatsApp integrado', 'Popup de cookies', 'Design responsivo'],
      icon: MessageCircle,
      fullDescription: 'O Ragnarok Veículos é uma plataforma completa para venda de automóveis que combina design moderno com funcionalidades avançadas. O projeto foi desenvolvido com foco na experiência do usuário e na conversão de leads.',
      challenges: [
        'Implementação de filtros dinâmicos por marca, modelo e preço',
        'Integração seamless com WhatsApp para contato direto',
        'Conformidade com LGPD através de popup de cookies personalizado',
        'Otimização para SEO e performance'
      ],
      results: [
        'Aumento de 150% nas conversões de leads',
        'Redução de 40% na taxa de rejeição',
        'Melhoria significativa na experiência mobile',
        'Conformidade total com regulamentações de privacidade'
      ],
      gallery: [
        'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 2,
      title: 'Food Local App',
      description: 'Protótipo de aplicativo estilo iFood focado em comércios locais, com sistema de pedidos e entrega.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'UI/UX', 'Figma', 'Prototipagem'],
      features: ['Interface intuitiva', 'Sistema de pedidos', 'Geolocalização', 'Pagamento integrado'],
      icon: ExternalLink,
      fullDescription: 'Food Local é um protótipo de aplicativo mobile que conecta consumidores a restaurantes e comércios locais, priorizando negócios da região e oferecendo uma alternativa mais personalizada aos grandes players do mercado.',
      challenges: [
        'Design de interface intuitiva para diferentes perfis de usuário',
        'Prototipagem de fluxo de pedidos complexo',
        'Integração conceitual com sistemas de pagamento',
        'Foco em usabilidade para comerciantes locais'
      ],
      results: [
        'Protótipo funcional com 15+ telas navegáveis',
        'Validação positiva com 20+ comerciantes locais',
        'Interface otimizada para conversão',
        'Fluxo de usuário simplificado e eficiente'
      ],
      gallery: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 3,
      title: 'Economista Social',
      description: 'Rede social para afiliados do Mercado Livre e Shopee com foco em produtos automotivos e maximização de vendas.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'API Integration'],
      features: ['Dashboard de afiliados', 'Analytics de vendas', 'Sistema de posts', 'Integração APIs'],
      icon: Github,
      fullDescription: 'Economista Social é uma plataforma inovadora que conecta afiliados especializados em produtos automotivos, oferecendo ferramentas avançadas de análise e compartilhamento de estratégias de vendas.',
      challenges: [
        'Integração com APIs do Mercado Livre e Shopee',
        'Sistema de analytics em tempo real',
        'Gamificação para engajamento de usuários',
        'Dashboard complexo com múltiplas métricas'
      ],
      results: [
        'Comunidade ativa com 500+ afiliados',
        'Aumento médio de 80% nas vendas dos usuários',
        'Sistema de ranking e recompensas funcional',
        'Integração estável com plataformas de e-commerce'
      ],
      gallery: [
        'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 4,
      title: 'Curso Detox + HTML',
      description: 'Landing page educacional com conteúdo sobre desintoxicação digital e fundamentos de desenvolvimento front-end.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Design Responsivo'],
      features: ['Design educacional', 'Formulário de inscrição', 'Vídeos integrados', 'Mobile-first'],
      icon: Cookie,
      fullDescription: 'Uma landing page educacional que combina conceitos de bem-estar digital com aprendizado de programação, oferecendo um curso único que ensina tanto desintoxicação digital quanto fundamentos de HTML.',
      challenges: [
        'Balanceamento entre conteúdo educacional e conversão',
        'Integração de vídeos sem comprometer performance',
        'Design que transmite credibilidade educacional',
        'Formulários otimizados para captura de leads'
      ],
      results: [
        'Taxa de conversão de 12% (acima da média do setor)',
        'Mais de 1000 inscrições no primeiro mês',
        'Tempo médio de permanência de 4+ minutos',
        'Excelente feedback dos usuários sobre usabilidade'
      ],
      gallery: [
        'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  ];

  const ProjectModal = ({ project }: { project: typeof projects[0] }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
          <project.icon className="text-cyan-400" size={28} />
          {project.title}
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Tecnologias Utilizadas</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Sobre o Projeto</h3>
          <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Challenges */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Principais Desafios</h3>
          <ul className="space-y-2">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Resultados Alcançados</h3>
          <ul className="space-y-2">
            {project.results.map((result, index) => (
              <li key={index} className="text-muted-foreground flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Galeria do Projeto</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${project.title} - Imagem ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-border">
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
            <ExternalLink size={16} className="mr-2" />
            Ver Projeto Live
          </Button>
          <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
            <Github size={16} className="mr-2" />
            Ver Código
          </Button>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Meu <span className="text-cyan-400">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos que demonstram minha experiência em desenvolvimento web e design digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                    <project.icon className="text-cyan-400" size={20} />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">TECNOLOGIAS</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">PRINCIPAIS RECURSOS</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Ver Detalhes
                      </Button>
                    </DialogTrigger>
                    <ProjectModal project={project} />
                  </Dialog>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border text-muted-foreground hover:bg-muted"
                  >
                    <Github size={16} className="mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}