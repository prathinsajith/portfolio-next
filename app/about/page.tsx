"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SITE_EMAIL } from "@/lib/constants"
import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { RollingLogos } from "@/components/sections/RollingLogos"
import { BackgroundAnimation } from "@/components/sections/BackGroundAnimation";

interface CounterEffectProps {
  target: number
  suffix?: string
  prefix?: string
}

interface SkillBadgeProps {
  skill: string
  index: number
}

const CounterEffect: React.FC<CounterEffectProps> = ({ target, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 rounded-lg text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-200 cursor-default"
    >
      {skill}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden mt-[72px]">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">About</span>
            <motion.div
              className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">Prathin Sajith</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed max-w-2xl">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {/* Left sidebar with navigation-style links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick stats */}
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-4">
                <div className="text-3xl font-bold text-foreground mb-1">
                  <CounterEffect target={2024} /> — Present
                </div>
                <div className="text-sm text-muted-foreground">Senior Frontend Engineer</div>
                <div className="text-sm font-medium text-accent mt-1">Company Name</div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Dubai, UAE</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {SITE_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <motion.a
                  href="https://github.com/prathinsajith"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/10 border border-border hover:border-accent/40 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/prathinsajith"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/10 border border-border hover:border-accent/40 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend
                thoughtful design with robust engineering. My favorite work lies at the intersection of design and
                development, creating experiences that not only look great but are meticulously built for performance
                and usability.
              </p>

              <p>
                Currently, I'm a Senior Front-End Engineer at{" "}
                <span className="text-accent font-medium">Company Name</span>, specializing in accessibility. I
                contribute to the creation and maintenance of UI components that power the company's frontend, ensuring
                our platform meets web accessibility standards and best practices to deliver an inclusive user
                experience.
              </p>

              <p>
                In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
                <span className="font-medium text-foreground">advertising agencies</span> and{" "}
                <span className="font-medium text-foreground">large corporations</span> to{" "}
                <span className="font-medium text-foreground">start-ups</span> and{" "}
                <span className="font-medium text-foreground">small digital product studios</span>. Additionally, I also
                released a <span className="font-medium text-foreground">comprehensive video course</span> a few years
                ago, guiding learners through building a web app with the Spotify API.
              </p>

              <p>
                In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running
                around Hyrule searching for <span className="italic">Korok seeds</span>.
              </p>
            </div>

            <div className="pt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Technologies</h3>
                <RollingLogos />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Tools</h3>
                <RollingLogos type="tools" />
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#skills"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/30 transition-all duration-200"
                >
                  View Skills
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
