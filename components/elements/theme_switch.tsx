"use client"

import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled suppressHydrationWarning>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Loading theme</span>
      </Button>
    )
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative bg-transparent" aria-label="Toggle theme">
          {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-200" />}
          {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-200" />}
          {theme === "system" && <Monitor className="h-[1.2rem] w-[1.2rem] transition-transform duration-200" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        <DropdownMenuItem onClick={() => handleThemeChange("light")} className="cursor-pointer hover:bg-accent/10">
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")} className="cursor-pointer hover:bg-accent/10">
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")} className="cursor-pointer hover:bg-accent/10">
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
