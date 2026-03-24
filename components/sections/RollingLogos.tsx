"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { SKILLS, TOOLS } from "@/lib/constants";

interface RollingLogosProps {
  type?: "skills" | "tools";
  label?: string;
}

export function RollingLogos({ type = "skills", label }: RollingLogosProps) {
  const items = type === "tools" ? TOOLS : SKILLS;

  // Duplicate the array multiple times for a truly seamless loop
  const duplicatedItems = [
    ...items.map((item) => ({ ...item, id: `1-${item.name}` })),
    ...items.map((item) => ({ ...item, id: `2-${item.name}` })),
    ...items.map((item) => ({ ...item, id: `3-${item.name}` })),
  ];

  return (
    <div className="w-full relative flex items-stretch border-y border-border/85 group overflow-hidden bg-background">
      {/* Label section */}
      {label && (
        <div className="flex-shrink-0 px-8 py-8 border-r border-border/85 bg-card/40 backdrop-blur-sm z-30 min-w-[280px] flex items-center">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/70 leading-relaxed pl-4 border-l-2 border-primary">
            {label}
          </h3>
        </div>
      )}

      <div className="relative flex-1 overflow-hidden h-32 flex items-center">
        {/* Gradient overlays for fade effect */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        {/* Rolling logos container */}
        <m.div
          className="flex items-stretch h-full"
          initial={{ x: 0 }}
          animate={{
            x: [0, -200 * items.length],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 120,
              ease: "linear",
            },
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedItems.map((item) => (
            <div
              key={`${type}-${item.id}`}
              className="flex-shrink-0 w-[200px] border-r border-border/85 transition-all duration-300 flex items-center justify-center p-8 bg-card/5 hover:bg-card/20 group/item relative overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-contain transition-all duration-500 hover:scale-110"
                />
              </div>
              
              {/* Subtle hover indicator */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </m.div>
      </div>
    </div>
  );
}
