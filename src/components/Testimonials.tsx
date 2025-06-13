import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ana Paula Silva',
      role: 'Proprietária - Doces da Ana',
      content: 'Profissional excelente, entregou muito além do esperado! Meu site ficou lindo e as vendas aumentaram 300% no primeiro mês.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Carlos Eduardo',
      role: 'CEO - TechStart Solutions',
      content: 'Enrique transformou nossa ideia em uma landing page incrível. A atenção aos detalhes e a qualidade do código são impressionantes.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Mariana Costa',
      role: 'Influenciadora Digital',
      content: 'As artes que o Enrique criou para meu Instagram foram um sucesso! Engagement aumentou significativamente e recebi muitos elogios.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Roberto Mendes',
      role: 'Diretor - AutoPeças Premium',
      content: 'O protótipo do app ficou exatamente como imaginávamos. Processo profissional do início ao fim, recomendo sem hesitar!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            O que dizem meus <span className="text-cyan-400">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de clientes satisfeitos com meu trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-cyan-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <Quote className="text-cyan-400 flex-shrink-0" size={32} />
                  <div className="flex space-x-1 ml-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}