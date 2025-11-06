"use client";
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
            <Link href={item.href} className="relative px-4 py-2 group block">
              <span
                className={`text-sm font-semibold transition-all duration-300 relative z-10 ${
                  isActive
                    ? "text-accent"
                    : "text-foreground/80 group-hover:text-primary dark:group-hover:text-accent"
                }`}
              >
                {item.label}
              </span>

              <motion.span
                className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full ${
                  isActive
                    ? "bg-accent shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                    : "bg-primary dark:bg-accent"
                }`}
                initial={{ scaleX: isActive ? 1 : 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              <motion.span
                className="absolute inset-0 rounded-lg bg-primary/10 dark:bg-accent/15 border border-transparent group-hover:border-primary/20 dark:group-hover:border-accent/30"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1 }}
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
