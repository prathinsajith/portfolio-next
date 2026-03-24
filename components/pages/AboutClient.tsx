"use client";

import { m } from "framer-motion";
import { EXPERIENCE, EDUCATION, SOCIAL_LINKS, SKILLS, TOOLS } from "@/lib/constants";
import { RollingLogos } from "@/components/sections/RollingLogos";
import { FiBriefcase, FiArrowUpRight, FiAward, FiMapPin, FiCalendar, FiCode } from "react-icons/fi";
import { getSocialIcon } from "@/lib/icon-helper";
import Link from "next/link";
import Image from "next/image";

export default function AboutClient() {
    return (
        <div className="min-h-screen pt-28 pb-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">

                {/* ── Page Header ── */}
                <m.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-3">
                        Portfolio / About
                    </p>
                    <h1 className="text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
                        About Me
                    </h1>
                    <m.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="h-[3px] w-16 bg-accent origin-left rounded-full"
                    />
                </m.div>

                {/* ── Hero Bio ── */}
                <m.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-14 p-8 rounded-2xl bg-card relative overflow-hidden"
                >
                    {/* Accent blob */}
                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

                    <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                        <p>
                            I am a{" "}
                            <span className="font-bold text-foreground">Senior Software Engineer</span>{" "}
                            with over 6 years of experience building scalable, production-grade web
                            applications. My focus has always been on writing clean, maintainable code
                            and delivering products that create measurable impact.
                        </p>
                        <p>
                            Currently I drive backend engineering at{" "}
                            <span className="font-bold text-foreground">Prop CRM</span> in Dubai, where
                            we are redefining how real-estate professionals manage leads, listings, and
                            sales pipelines. Previously I led a team of 5+ engineers at Lean Transition
                            Solutions, shipping enterprise platforms for KPI tracking, production
                            scheduling, and talent acquisition.
                        </p>
                        <p>
                            I specialise in the PHP ecosystem — Symfony, Laravel, CodeIgniter — paired
                            with modern JavaScript and cloud infrastructure. I care deeply about
                            developer experience, architecture decisions, and mentoring the people
                            around me.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2 text-[13px] font-medium">
                            <span className="flex items-center gap-1.5 text-foreground/60">
                                <FiMapPin className="w-3.5 h-3.5 text-accent" /> Dubai, UAE
                            </span>
                            <span className="flex items-center gap-1.5 text-foreground/60">
                                <FiCalendar className="w-3.5 h-3.5 text-accent" /> Available for opportunities
                            </span>
                        </div>
                    </div>
                </m.section>

                {/* ── Main + Sidebar ── */}
                <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">

                    {/* ─ Left Column ─ */}
                    <div className="space-y-14">

                        {/* Experience */}
                        <m.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-2">
                                Career
                            </h2>
                            <h3 className="text-2xl font-extrabold text-foreground mb-10 flex items-center gap-2.5">
                                <FiBriefcase className="w-5 h-5 text-accent shrink-0" />
                                Work Experience
                            </h3>

                            <div className="relative space-y-0 before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-px before:bg-border">
                                {EXPERIENCE.map((exp, i) => (
                                    <m.div
                                        key={`${exp.company}-${exp.period}`}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                                        className="relative pl-10 pb-12 last:pb-0"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-background border-2 border-accent z-10" />

                                        <div className="p-6 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-sm transition-all duration-300">
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                                                <div>
                                                    <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                                                    <p className="text-accent font-bold text-[13px] mt-0.5">{exp.company}</p>
                                                </div>
                                                <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1.5 rounded-lg border border-border self-start">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {exp.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-[10px] font-bold uppercase tracking-wide text-foreground/60 border border-border px-2.5 py-1 rounded-md bg-muted/50 hover:border-accent/50 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </m.div>
                                ))}
                            </div>
                        </m.section>

                        {/* Education */}
                        <m.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                        >
                            <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-2">
                                Academic Background
                            </h2>
                            <h3 className="text-2xl font-extrabold text-foreground mb-10 flex items-center gap-2.5">
                                <FiAward className="w-5 h-5 text-accent shrink-0" />
                                Education
                            </h3>

                            <div className="space-y-5">
                                {EDUCATION.map((edu) => (
                                    <div
                                        key={`${edu.institution}-${edu.period}`}
                                        className="group p-7 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-sm transition-all duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                                            <div>
                                                <h4 className="text-base font-bold text-foreground">{edu.degree}</h4>
                                                <p className="text-accent font-bold text-[13px] mt-0.5">{edu.institution}</p>
                                            </div>
                                            <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1.5 rounded-lg border border-border self-start">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                        {edu.achievements && edu.achievements.length > 0 && (
                                            <ul className="mt-4 space-y-1.5">
                                                {edu.achievements.map((ach) => (
                                                    <li key={ach} className="flex items-start gap-2 text-[12px] text-muted-foreground">
                                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                                                        {ach}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </m.section>
                    </div>

                    {/* ─ Sidebar ─ */}
                    <div className="space-y-6 lg:sticky lg:top-24">

                        {/* Technical Stack */}
                        <div className="p-6 rounded-xl border border-border bg-card">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground mb-5 pb-3 border-b border-border flex items-center gap-2">
                                <FiCode className="w-3.5 h-3.5 text-accent" /> Technical Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-background hover:border-accent hover:shadow-sm hover:shadow-accent/10 transition-all duration-200 cursor-default group/pill"
                                    >
                                        {skill.image && (
                                            <Image
                                                src={skill.image}
                                                alt={skill.name}
                                                width={14}
                                                height={14}
                                                className="w-3.5 h-3.5 object-contain"
                                            />
                                        )}
                                        <span className="text-[11px] font-semibold text-foreground/70 group-hover/pill:text-foreground transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="p-6 rounded-xl border border-border bg-card">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground mb-5 pb-3 border-b border-border">
                                Tools & DevOps
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {TOOLS.map((tool) => (
                                    <div
                                        key={tool.name}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-background hover:border-accent hover:shadow-sm hover:shadow-accent/10 transition-all duration-200 cursor-default"
                                    >
                                        {tool.image && (
                                            <Image
                                                src={tool.image}
                                                alt={tool.name}
                                                width={14}
                                                height={14}
                                                className="w-3.5 h-3.5 object-contain"
                                            />
                                        )}
                                        <span className="text-[11px] font-semibold text-foreground/70">
                                            {tool.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Connect */}
                        <div className="p-6 rounded-xl border border-border bg-card">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground mb-5 pb-3 border-b border-border">
                                Let's Connect
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {SOCIAL_LINKS.map((link) => {
                                    const Icon = getSocialIcon(link.icon);
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2.5 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
                                        >
                                            <Icon className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition-colors shrink-0" />
                                            <span className="text-[12px] font-semibold text-foreground/60 group-hover:text-foreground transition-colors truncate">
                                                {link.name}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Download CV */}
                        <Link
                            href="/Prathin-Sajith-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-lg border border-foreground/20 bg-background hover:bg-foreground hover:border-foreground text-foreground hover:text-background text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200 active:scale-[0.98]"
                        >
                            <span>Download CV</span>
                            <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </Link>
                    </div>
                </div>

                {/* ── Ecosystem ── */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mt-20 pt-14 border-t border-border text-center"
                >
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-2">
                        The Ecosystem
                    </p>
                    <h2 className="text-2xl font-extrabold text-foreground mb-12">
                        Tools & Technologies I rely on
                    </h2>
                    <RollingLogos />
                </m.div>
            </div>
        </div>
    );
}
