import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function PrivacyPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">Política de Privacidade</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">Última atualização: 13 de junho de 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Introdução</h2>
              <p className="text-gray-300 mb-4">
                Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e
                compartilhadas quando você visita ou interage com o site enriquecode.com ("Site").
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Informações Pessoais que Coletamos</h2>
              <p className="text-gray-300 mb-4">
                Quando você visita o Site, coletamos automaticamente certas informações sobre seu dispositivo, incluindo
                informações sobre seu navegador da web, endereço IP, fuso horário e alguns dos cookies que estão
                instalados em seu dispositivo.
              </p>
              <p className="text-gray-300 mb-4">
                Além disso, quando você navega pelo Site, coletamos informações sobre as páginas da web ou produtos
                individuais que você visualiza, quais sites ou termos de pesquisa o encaminharam para o Site e
                informações sobre como você interage com o Site.
              </p>
              <p className="text-gray-300 mb-4">
                Quando você entra em contato conosco através do formulário de contato, coletamos as informações que você
                fornece voluntariamente, como seu nome, endereço de e-mail e o conteúdo da sua mensagem.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Como Usamos Suas Informações Pessoais</h2>
              <p className="text-gray-300 mb-4">Usamos as informações que coletamos para:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Responder às suas consultas e solicitações;</li>
                <li>Melhorar nosso Site e entender como os usuários navegam e interagem com ele;</li>
                <li>Analisar tendências de uso e estatísticas;</li>
                <li>Proteger a segurança e integridade do nosso Site;</li>
                <li>Cumprir obrigações legais.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">
                4. Compartilhamento de Suas Informações Pessoais
              </h2>
              <p className="text-gray-300 mb-4">
                Não compartilhamos suas Informações Pessoais com terceiros, exceto conforme descrito nesta Política de
                Privacidade. Podemos compartilhar suas Informações Pessoais com provedores de serviços que nos ajudam a
                operar nosso Site ou a conduzir nossos negócios.
              </p>
              <p className="text-gray-300 mb-4">
                Também podemos divulgar suas Informações Pessoais para cumprir leis e regulamentos aplicáveis, responder
                a uma intimação, mandado de busca ou outra solicitação legal de informações que recebemos, ou para
                proteger nossos direitos.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Seus Direitos</h2>
              <p className="text-gray-300 mb-4">
                Se você é residente da União Europeia, você tem o direito de acessar as informações pessoais que
                mantemos sobre você e solicitar que suas informações pessoais sejam corrigidas, atualizadas ou
                excluídas. Se você deseja exercer este direito, entre em contato conosco.
              </p>
              <p className="text-gray-300 mb-4">
                Além disso, se você é residente da União Europeia, observe que estamos processando suas informações para
                cumprir contratos que possamos ter com você ou para perseguir nossos interesses comerciais legítimos
                listados acima. Além disso, observe que suas informações serão transferidas para fora da Europa,
                incluindo para o Brasil.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Alterações</h2>
              <p className="text-gray-300 mb-4">
                Podemos atualizar esta política de privacidade de tempos em tempos para refletir, por exemplo, mudanças
                em nossas práticas ou por outros motivos operacionais, legais ou regulatórios.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Contato</h2>
              <p className="text-gray-300 mb-4">
                Para mais informações sobre nossas práticas de privacidade, se você tiver dúvidas ou se quiser fazer uma
                reclamação, entre em contato conosco por e-mail em contato@enriquecode.com.
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
