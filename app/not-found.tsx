"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background relative overflow-hidden px-6">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
                {/* Animated Icon */}
                <m.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative inline-block"
                >
                    <div className="w-24 h-24 rounded-3xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6 border border-accent/20">
                        <Search className="w-12 h-12" />
                    </div>
                    <m.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary backdrop-blur-sm border border-primary/20"
                    >
                        <span className="text-xs font-bold font-mono">?</span>
                    </m.div>
                </m.div>

                <div className="space-y-4">
                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50"
                    >
                        404
                    </m.h1>
                    <m.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold text-foreground"
                    >
                        Lost in Space?
                    </m.h2>
                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed"
                    >
                        The page you're looking for has drifted away or never existed.
                        Let's get you back to familiar coordinates.
                    </m.p>
                </div>

                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Button
                        asChild
                        size="lg"
                        className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105 min-w-[180px]"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Return Home
                        </Link>
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.history.back()}
                        className="h-12 px-8 rounded-full border-border hover:bg-secondary/80 transition-all hover:scale-105 min-w-[180px]"
                    >
                        <div className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Go Back
                        </div>
                    </Button>
                </m.div>
            </div>

            {/* Navigation Shortcuts */}
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground"
            >
                <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
                <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </m.div>
        </div>
    );
}
