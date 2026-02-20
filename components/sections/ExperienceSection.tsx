"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { useRef } from "react";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative z-10 py-32 px-6 overflow-hidden" id="experience" ref={containerRef}>
      <div className="max-w-7xl mx-auto relative">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            My Journey
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Professional Experience
          </h3>
        </m.div>

        <div className="relative space-y-16">
          {/* Animated Journey Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border/30 hidden md:block">
            <m.div
              style={{ height: lineHeight }}
              className="w-full bg-accent origin-top shadow-[0_0_12px_var(--accent)]"
            />
          </div>

          {EXPERIENCE.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <m.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-12 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Journey Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center">
                  <m.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-background border-4 border-foreground shadow-xl z-20"
                  />
                </div>

                {/* Content Side */}
                <div className={`flex-1 pl-20 md:pl-0 ${isEven ? "md:pr-24" : "md:pl-24"}`}>
                  <div className="group relative">
                    <Card className="relative border border-border/50 bg-card/50 backdrop-blur-sm p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                      <div className="flex flex-col items-start text-left">
                        <span className="text-sm font-mono text-foreground bg-muted/80 px-3 py-1 rounded-full mb-2 block w-fit border border-border/50 shadow-sm">
                          {exp.period}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-muted-foreground mb-6">
                          <Briefcase className="w-5 h-5" />
                          <span className="font-medium">{exp.company}</span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block" />
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
