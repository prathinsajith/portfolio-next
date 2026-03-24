"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiCode, FiArrowRight } from "react-icons/fi";
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
        <div className="min-h-screen pt-28 pb-16 px-6 bg-background" ref={containerRef}>
            <div className="max-w-6xl mx-auto">
                {/* Unique Heading Style */}
                <m.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-3">
                        Portfolio / Projects
                    </p>
                    <h1 className="text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
                        Projects
                    </h1>
                    <m.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="h-[3px] w-16 bg-accent origin-left rounded-full"
                    />
                </m.div>

                <div className="relative space-y-32">
                    {/* Journey Line - Clean Style */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border/30 hidden md:block">
                        <m.div
                            style={{ height: lineHeight }}
                            className="w-full bg-accent origin-top"
                        />
                    </div>

                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
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
                    initial={{ scale: 0, opacity: 0 }}
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
                        sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                        <div className="text-white">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Architecture</p>
                            <p className="font-semibold">{project.technologies.slice(0, 3).join(" • ")}</p>
                        </div>
                    </div>
                </m.div>
            </div>

            {/* Content Side */}
            <div className={`flex-1 flex flex-col justify-center ${isEven ? "md:pl-24" : "md:pr-24"}`}>
                <Card className="border border-border/50 bg-card/50 backdrop-blur-sm p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                    <span className="text-[10px] font-mono font-bold text-accent mb-4 block uppercase tracking-widest">
                        Case Study 0{index + 1}
                    </span>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        {project.title}
                    </h2>
                    <p className="text-md text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech: string) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg bg-secondary text-muted-foreground border border-border hover:border-accent transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full h-12 px-8 bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest"
                        >
                            <Link href={project.link} target="_blank" className="group flex items-center gap-2">
                                <span>Platform Live</span>
                                <FiExternalLink className="w-3.5 h-3.5" />
                            </Link>
                        </Button>
                        <Link
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <FiCode className="w-4 h-4" />
                            <span>Architecture</span>
                            <FiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </Card>
            </div>
        </m.div>
    );
}
