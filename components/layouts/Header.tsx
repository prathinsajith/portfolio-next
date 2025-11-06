"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavItems from "@/components/layouts/NavItems"
import { ModeToggle } from "@/components/elements/theme_switch"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import NavItemsMobile from "./NavItemsMobile"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="relative group">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#00205B] via-[#0077C8] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-sm">
                Prathin Sajith
              </span>
            </span>
            {/* Enhanced underline with glow effect */}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00205B] via-[#0077C8] to-[#D4AF37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.5)]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavItems />
        </nav>

        {/* Right Side - Theme Toggle + Mobile Menu */}
        <div className="flex items-center space-x-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ModeToggle />
          </motion.div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <motion.div whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="relative hover:bg-accent/20 transition-colors">
                    <motion.div animate={isOpen ? { rotate: 90 } : { rotate: 0 }} transition={{ duration: 0.2 }}>
                      <Menu className="h-5 w-5 text-foreground" />
                    </motion.div>
                  </Button>
                </motion.div>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-64 p-0 mt-2 border-border bg-card/95 backdrop-blur-lg">
                <NavItemsMobile onClose={() => setIsOpen(false)} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
