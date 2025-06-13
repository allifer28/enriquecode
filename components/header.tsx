"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "./mode-toggle"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <LogoAnimation />

        <nav className="hidden md:flex space-x-8">
          {["Sobre", "Projetos", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <button className="md:hidden text-gray-300 hover:text-cyan-400" onClick={toggleMobileMenu} aria-label="Menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {["Sobre", "Projetos", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 py-2 text-lg"
                  onClick={closeMobileMenu}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <Link href="/termos" className="block py-2 text-gray-400 hover:text-cyan-400" onClick={closeMobileMenu}>
                  Termos de Uso
                </Link>
                <Link
                  href="/privacidade"
                  className="block py-2 text-gray-400 hover:text-cyan-400"
                  onClick={closeMobileMenu}
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="/cookies"
                  className="block py-2 text-gray-400 hover:text-cyan-400"
                  onClick={closeMobileMenu}
                >
                  Política de Cookies
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}

function LogoAnimation() {
  const [text, setText] = useState("Enrique Code ")
  const [showBracket, setShowBracket] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBracket((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <Link href="/" className="text-xl md:text-2xl font-bold font-mono">
        {text}
        <span className={`text-cyan-400 ${showBracket ? "opacity-100" : "opacity-0"}`}>{"</>"}</span>
      </Link>
    </motion.div>
  )
}
