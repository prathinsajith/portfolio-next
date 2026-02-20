"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Dummy data for blog posts
const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of Web Development: What to Expect in 2025",
        excerpt:
            "Exploring the rise of AI-driven coding, server components, and the next generation of frontend frameworks.",
        date: "Nov 15, 2024",
        readTime: "5 min read",
        tags: ["Web Dev", "AI", "Future"],
        slug: "future-web-dev-2025",
        image: "bg-gradient-to-br from-purple-500/20 to-blue-500/20",
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS: Beyond the Basics",
        excerpt:
            "Advanced techniques for creating custom themes, plugins, and efficient design systems with Tailwind.",
        date: "Oct 28, 2024",
        readTime: "8 min read",
        tags: ["CSS", "Design", "Tailwind"],
        slug: "mastering-tailwind-css",
        image: "bg-gradient-to-br from-blue-500/20 to-teal-500/20",
    },
    {
        id: 3,
        title: "Why Next.js is the Ultimate Framework for 2024",
        excerpt:
            "A deep dive into server components, streaming, and data fetching in the latest Next.js versions.",
        date: "Oct 12, 2024",
        readTime: "6 min read",
        tags: ["Next.js", "React", "Frontend"],
        slug: "why-next-js-ultimate",
        image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
];

const CATEGORIES = ["All", "Web Dev", "Design", "Next.js", "PHP", "Career"];

export default function BlogClient() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                            Insights & <span className="text-accent">Articles</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Thoughts on software engineering, technology trends, and the lessons I've learned
                            throughout my journey as a developer.
                        </p>
                    </m.div>

                    {/* Categories */}
                    <m.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2"
                    >
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                className="px-4 py-2 rounded-full text-sm font-medium border border-border bg-card/50 hover:border-accent hover:text-accent transition-all duration-300"
                            >
                                {category}
                            </button>
                        ))}
                    </m.div>
                </div>

                {/* Featured Post (Optional) */}

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <m.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <Card className="h-full group border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 overflow-hidden flex flex-col shadow-sm hover:shadow-2xl hover:shadow-accent/5">
                                {/* Image Placeholder */}
                                <div className={`relative h-48 w-full ${post.image} overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
                                        <div className="w-20 h-20 rounded-full bg-white/10 blur-2xl" />
                                    </div>
                                </div>

                                <CardContent className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-border flex flex-col gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-secondary/80 text-secondary-foreground px-2 py-0.5 rounded"
                                                >
                                                    <Tag className="w-2 h-2" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-2 text-sm font-bold text-foreground group/link"
                                        >
                                            Read Article
                                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </m.div>
                    ))}
                </div>

                {/* Newsletter / CTA */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent border border-accent/20 text-center relative overflow-hidden group"
                >
                    {/* Animated Background Element */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-700" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />

                    <div className="relative z-10 max-w-xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Stay in the Loop
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Get notified about my latest articles on software engineering, productivity,
                            and career growth in the tech industry.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-accent text-white font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-[10px] text-muted-foreground">
                            No spam, just quality content. Unsubscribe at any time.
                        </p>
                    </div>
                </m.div>
            </div>
        </div>
    );
}
