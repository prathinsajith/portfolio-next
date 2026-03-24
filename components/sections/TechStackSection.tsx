"use client";

import { m } from "framer-motion";
import { RollingLogos } from "./RollingLogos";

export function TechStackSection() {
  return (
    <section 
      className="relative py-20 overflow-hidden bg-background/50"
      id="skills"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
            Tech Stack
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight max-w-4xl leading-tight">
            Technologies I Work With
          </h3>
        </m.div>
      </div>

      {/* Rolling Logos - Marquee Style */}
      <div className="space-y-6 relative z-10">
        <m.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <RollingLogos type="skills" label="Core Technologies" />
        </m.div>
        
        <m.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <RollingLogos type="tools" label="Development Tools" />
        </m.div>
      </div>
      
    </section>
  );
}
