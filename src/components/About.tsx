import { User, Code, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const skills = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'UI/UX Design', level: 85 }
  ];

  const specialties = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites e aplicações web modernas com as melhores tecnologias do mercado.'
    },
    {
      icon: Palette,
      title: 'Design Digital',
      description: 'Design de produtos digitais e artes para redes sociais focadas em conversão.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimização de sites para máxima velocidade e melhor experiência do usuário.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Sobre <span className="text-cyan-400">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor web autodidata apaixonado por tecnologia e inovação
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Text */}
          <div>
            <div className="flex items-center mb-6">
              <User className="text-cyan-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-foreground">Minha Jornada</h3>
            </div>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Sou um desenvolvedor web autodidata com foco em criar experiências digitais 
              que fazem a diferença. Especialista em <span className="text-cyan-400">HTML, CSS, JavaScript, React e Tailwind</span>, 
              além de trabalhar com UI usando shadcn.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Além do desenvolvimento, também atuo com design de produtos digitais, 
              estratégias de vendas online e criação de conteúdo, oferecendo soluções 
              completas para meus clientes.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Principais Habilidades</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Specialties */}
          <div className="space-y-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="bg-card border-border hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                      <specialty.icon className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{specialty.title}</h4>
                      <p className="text-muted-foreground">{specialty.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}