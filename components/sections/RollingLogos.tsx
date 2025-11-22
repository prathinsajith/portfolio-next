"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SKILLS, TOOLS } from "@/lib/constants";

interface RollingLogosProps {
  type?: "skills" | "tools";
}

export function RollingLogos({ type = "skills" }: RollingLogosProps) {
  const items = type === "tools" ? TOOLS : SKILLS;

  // Duplicate the array for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Rolling logos container */}
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: [0, -50 * items.length],
          }}
          style={{ willChange: "transform" }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 w-16 h-16 rounded-xl bg-white dark:bg-white p-3 border border-border hover:border-accent/40 hover:scale-110 transition-all duration-200 flex items-center justify-center"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
