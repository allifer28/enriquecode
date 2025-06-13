import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function TermsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">Termos de Uso</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">Última atualização: 13 de junho de 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Aceitação dos Termos</h2>
              <p className="text-gray-300 mb-4">
                Ao acessar e usar este site, você aceita e concorda em cumprir estes Termos de Uso. Se você não
                concordar com qualquer parte destes termos, não poderá acessar o site.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Alterações nos Termos</h2>
              <p className="text-gray-300 mb-4">
                Reservamo-nos o direito de revisar e alterar estes Termos de Uso a qualquer momento. Ao continuar a usar
                este site após a publicação de alterações nestes termos, você concorda com as modificações.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Uso do Site</h2>
              <p className="text-gray-300 mb-4">
                Este site é fornecido "como está" e "conforme disponível". O uso deste site é por sua conta e risco. Não
                garantimos que o site estará disponível ininterruptamente, em tempo hábil, de forma segura ou livre de
                erros.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Propriedade Intelectual</h2>
              <p className="text-gray-300 mb-4">
                Todo o conteúdo deste site, incluindo, mas não se limitando a textos, gráficos, logotipos, ícones,
                imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade exclusiva de Enrique
                Code ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais internacionais.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Links para Outros Sites</h2>
              <p className="text-gray-300 mb-4">
                Nosso site pode conter links para sites de terceiros que não são de propriedade ou controlados por nós.
                Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas
                de sites de terceiros. Você reconhece e concorda que não seremos responsáveis, direta ou indiretamente,
                por qualquer dano ou perda causada ou alegadamente causada por ou em conexão com o uso ou confiança em
                qualquer conteúdo, bens ou serviços disponíveis em ou através de tais sites.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Limitação de Responsabilidade</h2>
              <p className="text-gray-300 mb-4">
                Em nenhuma circunstância, Enrique Code, seus diretores, funcionários, parceiros, agentes, fornecedores
                ou afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou
                punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas
                intangíveis, resultantes de (i) seu acesso ou uso ou incapacidade de acessar ou usar o site; (ii)
                qualquer conduta ou conteúdo de terceiros no site; (iii) qualquer conteúdo obtido do site; e (iv) acesso
                não autorizado, uso ou alteração de suas transmissões ou conteúdo, seja com base em garantia, contrato,
                ato ilícito (incluindo negligência) ou qualquer outra teoria legal, independentemente de termos sido
                avisados da possibilidade de tais danos.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Lei Aplicável</h2>
              <p className="text-gray-300 mb-4">
                Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas
                disposições de conflito de leis.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">8. Contato</h2>
              <p className="text-gray-300 mb-4">
                Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco pelo e-mail:
                contato@enriquecode.com
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
