import { Instagram, Linkedin, Github, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/ferzinn_/',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/allifer-enrique-088549201/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/allifer28',
      label: 'GitHub'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div>
            <button
  onClick={scrollToTop}
  className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
>
  Enrique Code &lt;/&gt;
</button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando ideias em interfaces de impacto através de código limpo e design moderno.
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="text-foreground font-semibold mb-4">Siga-me nas redes</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 border border-border hover:border-cyan-500/50 rounded-xl transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="text-muted-foreground group-hover:text-cyan-400 transition-colors" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center md:text-right">
            <h4 className="text-foreground font-semibold mb-4">Pronto para começar?</h4>
            <a
              href="https://wa.me/5543999999999?text=Olá! Gostaria de conversar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Vamos conversar!
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Enrique Code. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Feito com</span>
              <Heart className="text-red-500 mx-2 animate-pulse" size={16} fill="currentColor" />
              <span>por Enrique Code</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}