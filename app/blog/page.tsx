import type { Metadata } from "next";
import BlogClient from "@/components/pages/BlogClient";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description: "Read my latest articles, insights, and thoughts on software engineering, technology, and full-stack development.",
};

export default function BlogPage() {
  return <BlogClient />;
}
