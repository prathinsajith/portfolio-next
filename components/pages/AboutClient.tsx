"use client";

import { m } from "framer-motion";
import { EXPERIENCE, EDUCATION, SOCIAL_LINKS, SKILLS, TOOLS } from "@/lib/constants";
import { RollingLogos } from "@/components/sections/RollingLogos";
import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import { getSocialIcon } from "@/lib/icon-helper";
import Link from "next/link";

export default function AboutClient() {
    return (
        <div className="min-h-screen pt-32 pb-12 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Clean Title */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        About Me
                    </h1>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                </m.div>

                <div className="grid lg:grid-cols-[1fr_350px] gap-16">
                    {/* Main Content */}
                    <div className="space-y-16">
                        {/* Bio Section */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                    👋
                                </span>
                                The Story So Far
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
                                <p>
                                    I'm a <span className="text-foreground font-medium">Senior Software Engineer</span> with over 5 years
                                    of experience building scalable web applications. My journey in tech started with a passion for
                                    solving complex problems and has evolved into a career focused on crafting high-quality digital
                                    experiences.
                                </p>
                                <p>
                                    Currently, I'm at <span className="text-foreground font-medium">Lean Transition Solutions</span>, where
                                    I lead the development of business management systems, production scheduling tools, and recruitment platforms.
                                    I specialize in <span className="text-foreground font-medium">PHP (Symfony, Laravel, CodeIgniter)</span>,
                                    but I'm also deeply invested in the modern JavaScript ecosystem.
                                </p>
                                <p>
                                    I believe in writing clean, maintainable code and building products that make a real difference
                                    in how people work and live.
                                </p>
                            </div>
                        </section>

                        {/* Experience Timeline */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-accent" />
                                Work Experience
                            </h2>
                            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-border/50">
                                {EXPERIENCE.map((exp, index) => (
                                    <div key={`${exp.company}-${exp.period}`} className="relative pl-12 group">
                                        <div className="absolute left-[11px] top-1.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-accent group-hover:scale-125 transition-all duration-300 ring-4 ring-background" />
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                            <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                                                {exp.title}
                                            </h2>
                                            <span className="text-xs font-mono text-foreground bg-muted px-2 py-1 rounded shadow-sm border border-border/50">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-accent-text mb-3">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education Section */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-accent" />
                                Education
                            </h2>
                            <div className="space-y-8">
                                {EDUCATION.map((edu, index) => (
                                    <div key={`${edu.institution}-${edu.period}`} className="bg-card/50 border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                            <div>
                                                <h2 className="text-lg font-bold text-foreground">{edu.degree}</h2>
                                                <p className="text-accent-text text-sm font-semibold">{edu.institution}</p>
                                            </div>
                                            <span className="text-xs font-mono text-foreground bg-muted px-3 py-1 rounded-full self-start md:self-center shadow-sm border border-border/50">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {edu.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-12">
                        {/* Tech Stack Summary */}
                        <section className="bg-card/50 border border-border rounded-2xl p-6">
                            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
                                Technical Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.map((skill, i) => (
                                    <span
                                        key={skill.name}
                                        className="px-3 py-1.5 rounded-lg bg-background border border-border text-xs font-medium text-muted-foreground flex items-center gap-2 hover:border-accent/40 transition-colors"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Tools Summary */}
                        <section className="bg-card/50 border border-border rounded-2xl p-6">
                            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
                                Tools & OS
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {TOOLS.map((tool, i) => (
                                    <span
                                        key={tool.name}
                                        className="px-3 py-1.5 rounded-lg bg-background border border-border text-xs font-medium text-muted-foreground hover:border-accent/40 transition-colors"
                                    >
                                        {tool.name}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Social Links */}
                        <section className="bg-card/50 border border-border rounded-2xl p-6">
                            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
                                Let's Connect
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {SOCIAL_LINKS.map((link) => {
                                    const Icon = getSocialIcon(link.icon);
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.url}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
                                        >
                                            <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                                            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
                                                {link.name}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Resume Button */}
                        <Link
                            href="/Prathin-Sajith-Resume.pdf"
                            className="flex items-center justify-between w-full p-4 rounded-2xl bg-accent text-white font-bold hover:bg-accent/90 transition-all duration-300"
                        >
                            <span>Download CV</span>
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Rolling Logos at bottom */}
                <div className="mt-32">
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                            The Ecosystem
                        </h2>
                        <p className="text-lg text-foreground font-medium">Tools & Technologies I rely on</p>
                    </m.div>
                    <RollingLogos />
                </div>
            </div>
        </div>
    );
}
