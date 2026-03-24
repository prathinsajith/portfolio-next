"use client";

import { m } from "framer-motion";
import { SITE_EMAIL, SOCIAL_LINKS, SITE_PHONE } from "@/lib/constants";
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageSquare } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { getSocialIcon } from "@/lib/icon-helper";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useConfetti } from "@/hooks/useConfetti";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactClient() {
    const fireConfetti = useConfetti();
    const contactSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        message: z.string().min(1, "Message is required"),
    });

    type FormData = z.infer<typeof contactSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                fireConfetti();
                toast.success("Message sent successfully!", {
                    description: "Thank you for reaching out. I'll get back to you soon.",
                });
                reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    const contactMethods = [
        {
            icon: FiMail,
            label: "Email",
            value: SITE_EMAIL,
            href: `mailto:${SITE_EMAIL}`,
        },
        {
            icon: FiPhone,
            label: "Phone",
            value: SITE_PHONE,
            href: `tel:${SITE_PHONE}`,
        },
        {
            icon: FiMapPin,
            label: "Location",
            value: "Dubai, UAE",
            href: null,
        },
    ];

    return (
        <div className="min-h-screen pt-32 pb-12 px-6 bg-background relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 center-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--primary),transparent)] opacity-[0.03] pointer-events-none" />
            <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Unique Heading Style */}
                <m.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-3">
                        Portfolio / Contact
                    </p>
                    <h1 className="text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
                        Contact
                    </h1>
                    <m.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="h-[3px] w-16 bg-accent origin-left rounded-full"
                    />
                </m.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Form - Takes 3 columns */}
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-sm"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Input
                                        id="name"
                                        placeholder="Your Name"
                                        {...register("name")}
                                        className="bg-background border-input text-foreground h-12 rounded-xl"
                                    />
                                    {errors.name && (
                                        <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        {...register("email")}
                                        className="bg-background border-input text-foreground h-12 rounded-xl"
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Textarea
                                    id="message"
                                    placeholder="Your message..."
                                    {...register("message")}
                                    className="min-h-[180px] bg-background border-input text-foreground resize-none rounded-xl"
                                />
                                {errors.message && (
                                    <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest text-[10px] rounded-xl"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Spinner className="mr-2" />
                                        Transmitting...
                                    </>
                                ) : (
                                    <>
                                        <FiSend className="mr-2 h-4 w-4" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </m.div>

                    {/* Contact Info - Takes 2 columns */}
                    <m.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => (
                                <m.div
                                    key={method.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-accent hover:text-white transition-all duration-300 group"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white">
                                        <method.icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 group-hover:text-white/70">{method.label}</p>
                                        {method.href ? (
                                            <a
                                                href={method.href}
                                                className="text-md font-bold text-foreground group-hover:text-white transition-colors"
                                            >
                                                {method.value}
                                            </a>
                                        ) : (
                                            <p className="text-md font-bold text-foreground group-hover:text-white">{method.value}</p>
                                        )}
                                    </div>
                                </m.div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-border">
                            <h2 className="text-[10px] font-bold text-foreground uppercase tracking-[0.2em] mb-4">Connect</h2>
                            <div className="flex gap-3">
                                {SOCIAL_LINKS.map((link, index) => {
                                    const Icon = getSocialIcon(link.icon);
                                    return (
                                        <m.div
                                            key={link.name}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.7 + index * 0.1 }}
                                        >
                                            <Link
                                                href={link.url}
                                                target="_blank"
                                                className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/50 border border-border hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
                                                aria-label={link.name}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </Link>
                                        </m.div>
                                    );
                                })}
                            </div>
                        </div>
                    </m.div>
                </div>
            </div>
        </div>
    );
}
