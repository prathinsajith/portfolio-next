"use client";

import { m } from "framer-motion";
import { RollingLogos } from "@/components/sections/RollingLogos";
import HeroSection from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
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

            {/* Tech Stack Section */}
            <TechStackSection />

            {/* Experience Section */}
            <ExperienceSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
