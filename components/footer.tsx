import { Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12 border-t border-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-mono">
              Enrique Code <span className="text-cyan-400">{"</>"}</span>
            </h2>
            <p className="text-gray-500 mt-2">Transformando ideias em código</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-blue-900/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} Enrique Code. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="/termos" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Termos
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
