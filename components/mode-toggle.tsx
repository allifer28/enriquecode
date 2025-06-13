"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="border-cyan-800/20 bg-transparent">
        <Sun className="h-[1.2rem] w-[1.2rem] text-cyan-400" />
        <span className="sr-only">Alternar tema</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-cyan-800/20 bg-transparent">
          {theme === "light" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] text-cyan-400" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] text-cyan-400" />
          )}
          <span className="sr-only">Alternar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/90 border-cyan-800/30 dark:bg-white/90">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="text-gray-300 hover:text-cyan-400 cursor-pointer dark:text-gray-700 dark:hover:text-cyan-600"
        >
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="text-gray-300 hover:text-cyan-400 cursor-pointer dark:text-gray-700 dark:hover:text-cyan-600"
        >
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="text-gray-300 hover:text-cyan-400 cursor-pointer dark:text-gray-700 dark:hover:text-cyan-600"
        >
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
