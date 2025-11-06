"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  level: string;
  image: string;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative rounded-xl p-6 bg-card border border-border hover:border-[#D4AF37]/30 transition-all duration-300 shadow-sm hover:shadow-lg">
        {/* Icon */}
        <div className="flex flex-col items-center space-y-3">
          <motion.div
            className="relative w-14 h-14 flex items-center justify-center"
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={skill.image || "/placeholder.svg"}
              alt={skill.name}
              width={56}
              height={56}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-all duration-300" />
      </div>
    </motion.div>
  );
}
