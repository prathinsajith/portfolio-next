"use client";

import Link from "next/link";
import {
  Copyright,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { SOCIAL_LINKS, NAV_ITEMS, SITE_EMAIL, SITE_AUTHOR, FULL_NAME, SITE_PHONE } from "@/lib/constants";
import { getSocialIcon } from "@/lib/icon-helper";
import { m } from "framer-motion";

export default function Footer() {

  return (
    <footer className="relative bg-background/80 backdrop-blur-md text-foreground border-t border-border overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-foreground">
              {FULL_NAME}<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Crafting exceptional digital experiences with a focus on
              accessibility, performance, and modern design.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="hover:text-accent transition-colors break-all"
                >
                  {SITE_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <a
                  href={`tel:${SITE_PHONE}`}
                  className="hover:text-accent transition-colors"
                >
                  {SITE_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Follow Me
            </h3>
            <div className="flex gap-3 flex-wrap">
              {SOCIAL_LINKS.map((link, index) => {
                const Icon = getSocialIcon(link.icon);
                return (
                  <m.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/10 border border-border hover:border-accent/40 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </m.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Copyright className="w-4 h-4" />
            <span>
              {new Date().getFullYear()} {SITE_AUTHOR}. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
