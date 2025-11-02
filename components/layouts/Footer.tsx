"use client";

import Link from "next/link";
import {
  Github,
  Twitter,
  Facebook,
  Linkedin,
  Copyright,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      platform: "github",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/prathinsajith",
      color: "#00205B",
    },
    {
      platform: "linkedin",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/prathinsajith",
      color: "#0077C8",
    },
    {
      platform: "facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/prathinsajith",
      color: "#00205B",
    },
    {
      platform: "twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/prathinsajith",
      color: "#0077C8",
    },
  ];

  return (
    <footer className="relative bg-background/80 backdrop-blur-md text-foreground border-t border-border overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle, #00205B 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side - Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Copyright className="w-4 h-4" />
              <span>
                {new Date().getFullYear()} Prathin Sajith. All rights reserved.
              </span>
            </div>
            <motion.div
              className="text-xs text-muted-foreground flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 fill-[#DC2626] text-[#DC2626]" />
              </motion.span>{" "}
              in Dubai
            </motion.div>
          </motion.div>

          {/* Right Side - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative p-3 rounded-full bg-muted/50 text-muted-foreground transition-all duration-300 hover:bg-[#D4AF37]/10"
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${link.color}20 0%, transparent 70%)`,
                        filter: "blur(8px)",
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="group-hover:text-[#D4AF37] transition-colors duration-300">
                        {link.icon}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Tooltip */}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#00205B] text-white text-xs rounded whitespace-nowrap pointer-events-none"
                  >
                    {link.platform.charAt(0).toUpperCase() +
                      link.platform.slice(1)}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Divider with Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 pt-6 border-t border-border"
          style={{ originX: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="hidden md:inline">•</span>
            <Link
              href="/terms"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <span className="hidden md:inline">•</span>
            <Link
              href="/contact"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
