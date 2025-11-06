"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Zap, Github, Linkedin, Mail, ExternalLink, Briefcase, Calendar } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FULL_NAME, EXPERIENCE, PROJECTS } from "@/lib/constants"
import { RollingLogos } from "@/components/sections/RollingLogos"
import Image from "next/image"
import { TypingAnimation } from "@/components/animations/TypingAnimation"
import { BackgroundAnimation } from "@/components/sections/BackGroundAnimation";

export default function Home() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description: "Creating beautiful, responsive interfaces with attention to detail",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and excellent user experience",
    },
  ]

  return (
    <div className="min-h-screen bg-background mt-[72px]">
      <BackgroundAnimation />

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Hi, I'm <TypingAnimation text={FULL_NAME} className="text-accent" delay={0.3} speed={0.05} />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-base md:text-lg text-muted-foreground mt-3 leading-relaxed max-w-2xl">
            I craft exceptional digital experiences through modern web technologies, turning ideas into beautiful,
            functional applications.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/30 transition-all duration-200"
              >
                <Link href="/#skills">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-200 bg-transparent"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>

          <div className="flex gap-3 mt-5">
            {[
              { icon: Github, href: "https://github.com/prathinsajith" },
              { icon: Linkedin, href: "https://linkedin.com/in/prathinsajith" },
              { icon: Mail, href: "/contact" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/10 border border-border hover:border-accent/40 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6" id="skills">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Technologies</h2>
            <RollingLogos />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-8">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full border-border hover:border-accent/40 transition-all duration-200 bg-card/50">
                    <CardContent className="p-6">
                      <div className="text-accent mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Experience</h2>
            <p className="text-2xl md:text-3xl font-bold text-foreground">Professional Journey</p>
          </motion.div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-accent/20" />

            <div className="space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="relative"
                    >
                      <div className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent animate-ping opacity-75" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="border-border hover:border-accent/40 transition-all duration-300 bg-card/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-accent/10 group">
                      <CardContent className="p-5">
                        {/* Period badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>

                        {/* Title and company */}
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <Briefcase className="w-4 h-4 text-accent" />
                          <span className="font-semibold text-base">{exp.company}</span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-3 text-sm md:text-base">
                          {exp.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + i * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:border-primary/40 transition-all duration-200"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Projects</h2>
            <p className="text-2xl md:text-3xl font-bold text-foreground">Featured Work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full border-border hover:border-accent/40 transition-all duration-200 bg-card/80 backdrop-blur-sm overflow-hidden group">
                  <div className="relative h-48 overflow-hidden bg-secondary">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium rounded bg-secondary text-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-accent/40 text-accent hover:bg-accent/10 bg-transparent"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-border hover:border-accent/40 bg-transparent"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to bring your <span className="text-accent">ideas to life?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's work together to create something amazing. I'm always excited to take on new challenges and
              collaborate on innovative projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/30 transition-all duration-200"
                >
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-200 bg-transparent"
                >
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
