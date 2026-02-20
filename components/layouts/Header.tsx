"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavItems from "@/components/layouts/NavItems";
import { ModeToggle } from "@/components/elements/theme_switch";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import NavItemsMobile from "./NavItemsMobile";
import { Menu, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { m, useScroll } from "framer-motion";
import { FULL_NAME } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Check initial scroll position
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="flex justify-center w-full px-4 py-4">
        <div
          suppressHydrationWarning
          className={`flex items-center justify-between transition-all duration-500 ${scrolled
            ? "w-full max-w-5xl rounded-full bg-background/80 backdrop-blur-md shadow-lg border border-border px-6 py-3"
            : "w-full max-w-7xl px-6 py-4 bg-transparent"
            }`}
        >
          <Link href="/" className="relative group">
            <m.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 px-3 py-2 rounded-lg"
            >
              {/* Hover Background */}
              <m.span
                className="absolute inset-0 rounded-lg bg-accent/20 border border-accent/40 z-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />

              <m.div
                className="relative z-10 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                {/* Shimmer Effect */}
                <m.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 3
                  }}
                />
                <span className="relative z-10">PS</span>
              </m.div>
            </m.div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavItems />
          </nav>

          {/* Right Side - Theme Toggle + Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Link href="/contact">
              <m.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-accent/20 transition-colors rounded-full"
                  aria-label="Contact"
                >
                  <Mail className="h-5 w-5 text-foreground" />
                </Button>
              </m.div>
            </Link>

            <m.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ModeToggle />
            </m.div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <m.div whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative hover:bg-accent/20 transition-colors rounded-full"
                      aria-label="Toggle menu"
                    >
                      <m.div
                        animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5 text-foreground" />
                      </m.div>
                    </Button>
                  </m.div>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  className="w-64 p-0 mt-2 border-border bg-card/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden"
                >
                  <NavItemsMobile onClose={() => setIsOpen(false)} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </m.header>
  );
}
