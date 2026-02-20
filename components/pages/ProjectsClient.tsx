"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProjectsClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="min-h-screen pt-32 pb-12 px-6 bg-background" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                {/* Clean Title with Animation */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
                        Selected Works
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A collection of projects that showcase my passion for building digital experiences.
                    </p>
                </m.div>

                <div className="relative space-y-32">
                    {/* Animated Journey Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border/30 hidden md:block">
                        <m.div
                            style={{ height: lineHeight }}
                            className="w-full bg-accent origin-top shadow-[0_0_12px_rgba(var(--accent),0.5)]"
                        />
                    </div>

                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className={`relative flex flex-col md:flex-row gap-12 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Journey Node */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-12 z-20 hidden md:flex items-center justify-center">
                <m.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-background border-4 border-foreground shadow-xl z-20"
                />
            </div>

            {/* Image Side */}
            <div className={`flex-1 ${isEven ? "md:pr-24" : "md:pl-24"}`}>
                <m.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl group"
                >
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </m.div>
            </div>

            {/* Content Side */}
            <div className={`flex-1 flex flex-col justify-center ${isEven ? "md:pl-24" : "md:pr-24"}`}>
                <Card className="border border-border/50 bg-card/50 backdrop-blur-sm p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                    <span className="text-sm font-mono text-muted-foreground mb-4 block">
                        0{index + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {project.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech: string) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full h-12 px-8"
                        >
                            <Link href={project.link} target="_blank" className="group flex items-center gap-2">
                                <span>Live Demo</span>
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="rounded-full h-12 px-8"
                        >
                            <Link href={project.github} target="_blank" className="group flex items-center gap-2">
                                <Github className="w-4 h-4" />
                                <span>Code</span>
                            </Link>
                        </Button>
                    </div>
                </Card>
            </div>
        </m.div>
    );
}
