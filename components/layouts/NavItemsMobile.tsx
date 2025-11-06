"use client";
import type React from "react";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItemsMobileProps {
  onClose?: () => void;
}

const NavItemsMobile: React.FC<NavItemsMobileProps> = ({ onClose }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col py-2 overflow-hidden">
      {NAV_ITEMS.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="relative block overflow-hidden"
            >
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-base font-semibold py-3 px-4 transition-all duration-300 ${
                  isActive ? "text-accent" : "text-foreground/80"
                }`}
              >
                {/* Active indicator line */}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/15 to-accent/15 dark:from-accent/20 dark:to-primary/20"
                  initial={{ opacity: 0, x: "-100%" }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative flex items-center gap-2">
                  {item.label}
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_4px_rgba(212,175,55,0.8)]"
                    />
                  )}
                </span>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default NavItemsMobile;
