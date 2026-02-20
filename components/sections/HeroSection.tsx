"use client";

import { m, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { FULL_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useEffect, useState, MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

// Spotlight Grid Component
function SpotlightGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightBg = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(14, 165, 233, 0.15),
      transparent 80%
    )
  `;

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative flex h-full w-full items-center justify-center bg-background"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />
      <m.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: spotlightBg }}
      />
    </div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-dvh min-h-[500px] w-full overflow-hidden flex flex-col items-center justify-center bg-background antialiased">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <SpotlightGrid />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Hero Title */}
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4 sm:mb-6"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600 animate-gradient-x pb-2">
            {FULL_NAME}
          </span>
          <span className="block text-lg sm:text-2xl md:text-4xl lg:text-5xl font-medium text-muted-foreground mt-1 sm:mt-2">
            Senior Software Engineer
          </span>
        </m.h1>

        {/* Subtitle */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed"
        >
          Crafting scalable, pixel-perfect web applications with modern technologies.
          Specializing in backend and full-stack development.
        </m.p>

        {/* CTA Buttons */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            <Link href="/#projects" className="flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 rounded-full border-border hover:bg-secondary/80 transition-all hover:scale-105"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Contact Me
              <MousePointer2 className="w-4 h-4" />
            </Link>
          </Button>
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-border to-transparent overflow-hidden">
          <m.div
            animate={{ y: [-48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-primary/50 blur-[1px]"
          />
        </div>
      </m.div>
    </section>
  );
}
