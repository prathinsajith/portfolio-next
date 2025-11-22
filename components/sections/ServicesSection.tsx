"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES } from "@/lib/constants";
import { Code, Palette, Zap } from "lucide-react";

const getIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    Code,
    Palette,
    Zap,
  };
  return icons[iconName] || Code;
};

export function ServicesSection() {
  return (
    <section className="relative z-20 py-12 px-6 -mt-32 md:-mt-48" id="services">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
            What I Do
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Crafting Digital Excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = getIcon(feature.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-accent/10">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent mb-4 shadow-inner border border-white/5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
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
      </div>
    </section>
  );
}
