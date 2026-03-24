"use client";

import { m, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiMousePointer, FiArrowUpRight } from "react-icons/fi";
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
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yBg = useTransform(scrollY, [0, 500], [0, -100]);

  const titleWords = FULL_NAME.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="relative h-dvh min-h-[600px] w-full overflow-hidden flex flex-col items-center justify-center bg-background antialiased"
    >
      {/* Dynamic Background Elements */}
      <m.div style={{ y: yBg }} className="absolute inset-0 w-full h-full pointer-events-none">
        <SpotlightGrid />

        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-2/3 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </m.div>

      {/* Main Content */}
      <m.div
        style={{ y: y1, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        {/* Hero Title */}
        <div className="mb-4 sm:mb-6">
          <m.h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground flex flex-wrap justify-center gap-x-[0.3em]">
            {titleWords.map((word, i) => (
              <m.span
                key={i}
                variants={wordVariants}
                className="inline-block text-foreground pb-2"
              >
                {word}
              </m.span>
            ))}
          </m.h1>
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-medium text-muted-foreground mt-1 sm:mt-2"
          >
            Senior Software Engineer
          </m.div>
        </div>

        {/* Subtitle */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed"
        >
          Crafting scalable, pixel-perfect web applications with modern technologies.
          Specializing in backend and full-stack development.
        </m.p>

        {/* CTA Buttons */}
        {/* CTA Buttons */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="h-14 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105 font-bold uppercase tracking-widest text-xs"
          >
            <Link href="/projects" className="flex items-center gap-3">
              View Projects
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 px-10 rounded-full border-border/80 bg-background hover:bg-secondary/80 transition-all hover:scale-105 font-bold uppercase tracking-widest text-xs group"
          >
            <Link href="/Prathin-Sajith-Resume.pdf" download className="flex items-center gap-3">
              Download CV
              <FiArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </m.div>
      </m.div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
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
