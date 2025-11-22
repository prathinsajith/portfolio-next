"use client";

import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION, SOCIAL_LINKS, SKILLS, TOOLS } from "@/lib/constants";
import { RollingLogos } from "@/components/sections/RollingLogos";
import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import { getSocialIcon } from "@/lib/icon-helper";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Clean Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About
          </h1>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1, 
              opacity: 1,
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative h-1 w-24 bg-accent rounded-full mb-4 origin-left overflow-hidden"
          >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: 0.4,
              repeatDelay: 3,
            }}
          />
          </motion.div>
          <p className="text-lg text-muted-foreground">
            Developer, designer, and problem solver
          </p>
        </motion.div>
        
        {/* Two-Column Story Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional, and accessible web experiences. My work sits at the intersection of design and engineering.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                With expertise spanning modern frameworks and technologies, I build comprehensive solutions that solve real problems while delivering exceptional user experiences.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-secondary/20 rounded-2xl p-8 border border-border/50"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              Connect
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link, index) => {
                const Icon = getSocialIcon(link.icon);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        {/* Experience Section */}
        <div className="mb-20 relative">
          <h2 className="text-2xl font-bold text-foreground mb-16 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-accent" />
            Experience
          </h2>

          <div className="relative space-y-12">
            {/* Central Gradient Line (Desktop) */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-border/30">
              <div className="w-full h-full bg-gradient-to-b from-primary via-accent to-primary opacity-50" />
            </div>

            {EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 z-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-background border-4 border-accent shadow-sm" />
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 pl-20 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg group">
                      <div className="flex flex-col items-start">
                        <div className="flex flex-wrap items-center gap-3 mb-2 w-full justify-between">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border/50">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className="text-accent font-medium mb-4 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty Space for Balance */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Technologies</h2>
          <RollingLogos />
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-accent" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-border bg-card hover:bg-secondary/5 hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-accent mb-2 font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
