import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function CookiesPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">Política de Cookies</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">Última atualização: 13 de junho de 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. O que são Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies são pequenos arquivos de texto que são armazenados em seu computador ou dispositivo móvel quando
                você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem, ou funcionarem de
                maneira mais eficiente, bem como para fornecer informações aos proprietários do site.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Como Usamos Cookies</h2>
              <p className="text-gray-300 mb-4">
                Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não
                existem opções padrão da indústria para desativar cookies sem desativar completamente a funcionalidade e
                os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver
                certeza se precisa deles ou não, caso sejam usados para fornecer um serviço que você utiliza.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Os Cookies que Definimos</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Cookies relacionados à conta</h3>
              <p className="text-gray-300 mb-4">
                Se você criar uma conta conosco, usaremos cookies para o gerenciamento do processo de inscrição e
                administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em
                alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">
                Cookies relacionados a preferências do site
              </h3>
              <p className="text-gray-300 mb-4">
                Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas
                preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos
                definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página
                que for afetada por suas preferências.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Cookies de terceiros</h3>
              <p className="text-gray-300 mb-4">
                Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir
                detalha quais cookies de terceiros você pode encontrar através deste site.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>
                  Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da
                  Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses
                  cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que
                  possamos continuar produzindo conteúdo atraente.
                </li>
                <li>
                  De tempos em tempos, testamos novos recursos e fazemos alterações sutis na maneira como o site se
                  apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir
                  que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais
                  otimizações os nossos usuários mais apreciam.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Como Gerenciar Cookies</h2>
              <p className="text-gray-300 mb-4">
                A maioria dos navegadores permite que você controle cookies através das configurações de preferências.
                No entanto, se você limitar a capacidade dos sites de definir cookies, você pode piorar sua experiência
                geral de usuário, uma vez que isso afetará a funcionalidade de nosso site e de muitos outros sites que
                você visita.
              </p>
              <p className="text-gray-300 mb-4">
                Portanto, é recomendável que você não desabilite cookies. Se você quiser restringir ou bloquear os
                cookies definidos por este site, você pode fazê-lo através das configurações do seu navegador. As
                informações sobre como fazer isso podem ser encontradas nas páginas de ajuda do seu navegador.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Mais Informações</h2>
              <p className="text-gray-300 mb-4">
                Esperamos que isso tenha esclarecido as coisas para você. Como foi mencionado anteriormente, se há algo
                que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso
                eles interajam com algum dos recursos que você usa em nosso site.
              </p>
              <p className="text-gray-300 mb-4">
                Se você ainda estiver procurando por mais informações, entre em contato conosco através de um dos nossos
                métodos de contato preferidos: contato@enriquecode.com
              </p>
            </div>
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}
