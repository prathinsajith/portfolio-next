"use client";

import { motion } from "framer-motion";
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
    title: "Mastering Tailwind CSS: Tips for Scalable Design Systems",
    excerpt:
      "How to organize your utility classes and configure your theme for large-scale applications without the chaos.",
    date: "Oct 28, 2024",
    readTime: "8 min read",
    tags: ["CSS", "Tailwind", "Design Systems"],
    slug: "mastering-tailwind-css",
    image: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Building Accessible React Components from Scratch",
    excerpt:
      "A deep dive into ARIA attributes, keyboard navigation, and semantic HTML to ensure your app is usable by everyone.",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    tags: ["React", "Accessibility", "A11y"],
    slug: "accessible-react-components",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "Why I Switched from Redux to Zustand",
    excerpt:
      "A personal journey of simplifying state management in React applications and why less is often more.",
    date: "Sep 22, 2024",
    readTime: "4 min read",
    tags: ["State Management", "React", "Zustand"],
    slug: "redux-to-zustand",
    image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
  },
  {
    id: 5,
    title: "Optimizing Next.js Performance for Core Web Vitals",
    excerpt:
      "Practical strategies to improve LCP, FID, and CLS scores in your Next.js applications.",
    date: "Sep 05, 2024",
    readTime: "7 min read",
    tags: ["Next.js", "Performance", "SEO"],
    slug: "optimizing-nextjs-performance",
    image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
  },
  {
    id: 6,
    title: "The Art of Minimalist UI Design",
    excerpt:
      "Understanding whitespace, typography, and visual hierarchy to create stunning, clutter-free interfaces.",
    date: "Aug 18, 2024",
    readTime: "5 min read",
    tags: ["Design", "UI/UX", "Minimalism"],
    slug: "art-of-minimalist-design",
    image: "bg-gradient-to-br from-slate-500/20 to-gray-500/20",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen mt-[72px]">
      <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent via-border to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              The Blog
            </span>
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent via-border to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Thoughts, Ideas & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
              Technical Deep Dives
            </span>
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Sharing my journey in web development, design patterns, and the
            technologies I love working with.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`#`} className="block h-full">
                <Card className="h-full border-border bg-card/50 overflow-hidden hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col">
                  {/* Image Placeholder */}
                  <div className={`h-48 w-full ${post.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-sm font-medium text-accent group-hover:translate-x-1 transition-transform duration-200 mt-auto">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
