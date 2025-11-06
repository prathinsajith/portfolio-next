"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  SITE_EMAIL,
  EXPERIENCE,
  EDUCATION,
  SOCIAL_LINKS,
  FEATURES,
} from "@/lib/constants";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Twitter,
  Instagram,
  Zap,
  Palette,
  Code,
} from "lucide-react";
import { RollingLogos } from "@/components/sections/RollingLogos";
import { Card, CardContent } from "@/components/ui/card";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

const getIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Mail,
    Zap,
    Palette,
    Code,
  };
  return icons[iconName] || Github;
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden mt-[72px]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content - Left Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground leading-tight">
                Prathin Sajith
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                Full Stack Developer & UI/UX Enthusiast
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-3 leading-relaxed max-w-2xl">
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm a developer passionate about crafting accessible,
                  pixel-perfect user interfaces that blend thoughtful design
                  with robust engineering. My favorite work lies at the
                  intersection of design and development, creating experiences
                  that not only look great but are meticulously built for
                  performance and usability.
                </p>

                <p>
                  Currently, I'm a Senior Front-End Engineer at{" "}
                  <span className="text-accent font-medium">Company Name</span>,
                  specializing in accessibility. I contribute to the creation
                  and maintenance of UI components that power the company's
                  frontend, ensuring our platform meets web accessibility
                  standards and best practices to deliver an inclusive user
                  experience.
                </p>

                <p>
                  In the past, I've had the opportunity to develop software
                  across a variety of settings — from{" "}
                  <span className="font-medium text-foreground">
                    advertising agencies
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-foreground">
                    large corporations
                  </span>{" "}
                  to{" "}
                  <span className="font-medium text-foreground">start-ups</span>{" "}
                  and{" "}
                  <span className="font-medium text-foreground">
                    small digital product studios
                  </span>
                  .
                </p>
              </div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10"
              >
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-8">
                  What I Do
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {FEATURES.map((feature, index) => {
                    const FeIcon = getIcon(feature.icon);
                    return (
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
                            <div className="text-accent mb-4">
                              <FeIcon className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <div className="pt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <RollingLogos />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Tools
                  </h3>
                  <RollingLogos type="tools" />
                </div>
              </div>

              <div className="pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/30 transition-all duration-200"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-accent" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Experience
                </h2>
              </div>

              <div className="space-y-6">
                {EXPERIENCE.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-accent font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-3 py-1 rounded-md bg-accent/10 text-accent border border-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Education
                </h2>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-accent font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="pt-1">
                          <p className="text-sm font-medium text-foreground mb-1">
                            Achievements:
                          </p>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-accent mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-80"
          >
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 space-y-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Location
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE_EMAIL}`}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors break-all"
                      >
                        {SITE_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-3">
                    Connect with me
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {SOCIAL_LINKS.map((social, index) => {
                      const Icon = getIcon(social.icon);
                      return (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background hover:bg-accent/10 border border-border hover:border-accent/40 text-muted-foreground hover:text-accent transition-all duration-200"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-xs font-medium">
                            {social.name}
                          </span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
