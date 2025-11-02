"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SkillCard from "@/components/sections/SkillCard";
import { BackgroundAnimation } from "@/components/sections/BackGroundAnimation";
import { FULL_NAME, SKILLS } from "@/lib/constants";

export default function Home() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
      color: "#00205B",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description:
        "Creating beautiful, responsive interfaces with attention to detail",
      color: "#089bb9ff",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description:
        "Optimizing applications for speed and excellent user experience",
      color: "#0077C8",
    },
  ];

  return (
    <div className="min-h-screen mt-[72px] relative">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center min-h-[calc(100vh-72px)] px-4 md:px-0">
        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.2, staggerChildren: 0.05 },
              },
            }}
          >
            <span className="inline-block">Hi, I'm&nbsp;</span>
            <span className="bg-gradient-to-r from-[#00205B] via-[#0077C8] to-[#D4AF37] bg-clip-text text-transparent">
              {FULL_NAME.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            I craft exceptional digital experiences through modern web
            technologies, turning ideas into beautiful, functional applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-[#00205B] text-white hover:bg-[#00205B]/90 shadow-lg hover:shadow-[#00205B]/50 transition-all"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "/contact" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-muted/50 hover:bg-[#D4AF37]/20 text-muted-foreground hover:text-[#D4AF37] transition-all"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #00205B, #0077C8, #D4AF37, #00205B)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative m-2 w-64 h-64 rounded-full bg-background flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt={FULL_NAME}
                width={240}
                height={240}
                className="rounded-full object-cover border-4 border-background shadow-2xl"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 relative z-10" id="skills">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Tech Stack &</span>{" "}
              <span className="bg-gradient-to-r from-[#00205B] to-[#D4AF37] bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build modern applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
            {SKILLS.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-border hover:border-[#D4AF37]/30 bg-card/50 backdrop-blur-sm group h-full">
                  <CardContent className="p-0">
                    <motion.div
                      className="mb-4 flex justify-center"
                      style={{ color: feature.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-foreground">Ready to bring your</span>{" "}
            <span className="bg-gradient-to-r from-[#00205B] to-[#D4AF37] bg-clip-text text-transparent">
              ideas to life?
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's work together to create something amazing. I'm always excited
            to take on new challenges and collaborate on innovative projects.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-[#D4AF37] text-[#00205B] hover:bg-[#D4AF37]/90 shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#00205B] text-[#00205B] hover:bg-[#00205B]/5 transition-all"
              >
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
