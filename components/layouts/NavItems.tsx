"use client";
import React from "react";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      {NAV_ITEMS.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={item.href} className="relative px-4 py-2 group">
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#D4AF37]"
                    : "text-foreground group-hover:text-[#00205B] dark:group-hover:text-[#D4AF37]"
                }`}
              >
                {item.label}
              </span>

              {/* Animated underline */}
              <motion.span
                className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                  isActive ? "bg-[#D4AF37]" : "bg-[#00205B] dark:bg-[#D4AF37]"
                }`}
                initial={{ scaleX: isActive ? 1 : 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />

              {/* Hover background effect */}
              <motion.span
                className="absolute inset-0 rounded-lg bg-[#00205B]/5 dark:bg-[#D4AF37]/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

export default NavItems;
