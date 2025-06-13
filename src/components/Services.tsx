import { Monitor, Palette, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Landing Pages Modernas',
      description: 'Criação de páginas de conversão otimizadas para capturar leads e aumentar suas vendas online.',
      features: ['Design responsivo', 'Otimização SEO', 'Formulários integrados', 'Analytics configurado'],
      price: 'A partir de R$ 800'
    },
    {
      icon: Zap,
      title: 'Sites Institucionais',
      description: 'Desenvolvimento de sites corporativos que transmitem credibilidade e profissionalismo.',
      features: ['Múltiplas páginas', 'CMS personalizado', 'Integração redes sociais', 'Certificado SSL'],
      price: 'A partir de R$ 1.200'
    },
    {
      icon: Palette,
      title: 'Artes Digitais',
      description: 'Criação de artes para Instagram e materiais visuais para negócios locais como lanchonetes.',
      features: ['Posts para Instagram', 'Stories animados', 'Logos e identidade', 'Materiais impressos'],
      price: 'A partir de R$ 300'
    },
    {
      icon: Smartphone,
      title: 'Protótipos de Apps',
      description: 'Desenvolvimento de protótipos interativos e páginas web com funcionalidades avançadas.',
      features: ['Protótipos funcionais', 'Interface intuitiva', 'Integração APIs', 'Testes de usabilidade'],
      price: 'A partir de R$ 1.500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Meus <span className="text-cyan-400">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções digitais completas para impulsionar seu negócio online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-cyan-500/50 transition-all duration-300 group h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-cyan-400" size={32} />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">INCLUI:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-cyan-400 font-semibold text-lg">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Precisa de algo personalizado? Vamos conversar sobre seu projeto específico.
          </p>
          <a 
            href="https://wa.me/5543999999999?text=Olá! Gostaria de saber mais sobre seus serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}