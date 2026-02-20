"use client";

import { m } from "framer-motion";
import { SITE_EMAIL, SOCIAL_LINKS, SITE_PHONE } from "@/lib/constants";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
            icon: Mail,
            label: "Email",
            value: SITE_EMAIL,
            href: `mailto:${SITE_EMAIL}`,
        },
        {
            icon: Phone,
            label: "Phone",
            value: SITE_PHONE || "+971 XX XXX XXXX",
            href: `tel:${SITE_PHONE}`,
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Dubai, UAE",
            href: null,
        },
    ];

    return (
        <div className="min-h-screen pt-32 pb-12 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Clean Title */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Contact Me
                    </h1>
                    <m.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{
                            scaleX: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="relative h-1 w-24 bg-accent rounded-full mb-4 origin-left overflow-hidden"
                    >
                        <m.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: 0.8,
                            }}
                        />
                    </m.div>
                    <p className="text-lg text-muted-foreground">
                        Let's work together on your next project
                    </p>
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
                                        className="bg-background border-input text-foreground h-12"
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
                                        className="bg-background border-input text-foreground h-12"
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
                                    className="min-h-[180px] bg-background border-input text-foreground resize-none"
                                />
                                {errors.message && (
                                    <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Spinner className="mr-2" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
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
                        {/* Contact Methods - Icon Based */}
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => (
                                <m.div
                                    key={method.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <method.icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                        {method.href ? (
                                            <a
                                                href={method.href}
                                                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                                            >
                                                {method.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm font-medium text-foreground">{method.value}</p>
                                        )}
                                    </div>
                                </m.div>
                            ))}
                        </div>

                        {/* Social Links - Icon Based */}
                        <div className="pt-6 border-t border-border">
                            <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
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
                                                className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
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
