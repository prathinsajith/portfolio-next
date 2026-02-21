"use client";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      {NAV_ITEMS.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <m.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="relative px-4 py-2 group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ring-offset-background"
            >
              <span
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative z-10 ${isActive
                  ? "text-accent-text"
                  : "text-foreground group-hover:text-accent-text"
                  }`}
              >
                {item.label}
              </span>

              <m.span
                className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full z-10 ${isActive
                  ? "bg-accent shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                  : "bg-accent"
                  }`}
                initial={{ scaleX: isActive ? 1 : 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              <m.span
                className="absolute inset-0 rounded-lg bg-accent/25 dark:bg-accent/25 border border-accent/40 dark:border-accent/50 z-0 dark:shadow-[0_0_15px_rgba(189,36,38,0.3)]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </m.div>
        );
      })}
    </>
  );
};

export default NavItems;
