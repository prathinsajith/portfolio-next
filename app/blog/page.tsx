import type { Metadata } from "next";
import BlogClient from "@/components/pages/BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest articles, insights, and thoughts on software engineering, technology, and full-stack development.",
};

export default function BlogPage() {
  return <BlogClient />;
}
