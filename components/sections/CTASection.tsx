"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative z-10 py-24 w-full overflow-hidden bg-background">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-card border border-border rounded-[2rem] p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Subtle Grid Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

          <div className="relative z-10 flex flex-col items-center space-y-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent"
            >
              <Sparkles className="w-4 h-4" />
              <span className="tracking-wide">Available for new opportunities</span>
            </m.div>

            <div className="space-y-4 max-w-4xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
                Ready to build something <br className="hidden md:block" />
                <span className="text-foreground">
                  extraordinary?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                Let's collaborate to transform your vision into a high-performing, pixel-perfect digital reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full justify-center">
              <Button
                size="lg"
                asChild
                className="h-12 px-8 text-base rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 min-w-[180px]"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-12 px-8 text-base rounded-full border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 min-w-[180px]"
              >
                <Link href="mailto:sprathin007@gmail.com" className="flex items-center justify-center gap-2" aria-label="Send me an email">
                  Say Hello
                  <Mail className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
