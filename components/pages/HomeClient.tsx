"use client";

import { m } from "framer-motion";
import { RollingLogos } from "@/components/sections/RollingLogos";
import HeroSection from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CTASection } from "@/components/sections/CTASection";
import { useEffect } from "react";
import { toast } from "sonner";

export default function HomeClient() {
    useEffect(() => {
        const hasWelcomed = sessionStorage.getItem("welcome_shown");
        if (!hasWelcomed) {
            toast("Welcome to my portfolio! 👋", {
                description: "Thanks for stopping by.",
                duration: 5000,
            });
            sessionStorage.setItem("welcome_shown", "true");
        }
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">

            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Skills Section */}
            <section className="relative z-10 py-16 px-6" id="skills">
                <div className="max-w-5xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                                Tech Stack
                            </h2>
                            <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                                Technologies I Work With
                            </p>
                        </div>
                        <RollingLogos />
                    </m.div>
                </div>
            </section>

            {/* Experience Section */}
            <ExperienceSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
