"use client";
import type React from "react";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";

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
          <m.div
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
              <m.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-base font-semibold py-4 px-4 transition-all duration-300 ${isActive ? "text-accent" : "text-foreground"}`}
              >
                {/* Active indicator line */}
                {isActive && (
                  <m.span
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <m.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 dark:from-accent/25 dark:to-primary/25 dark:shadow-[inset_0_0_10px_rgba(189,36,38,0.2)]"
                  initial={{ opacity: 0, x: "-100%" }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative flex items-center gap-2">
                  {item.label}
                  {isActive && (
                    <m.span
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_4px_rgba(212,175,55,0.8)]"
                    />
                  )}
                </span>
              </m.div>
            </Link>
          </m.div>
        );
      })}
    </nav>
  );
};

export default NavItemsMobile;
