import type { Metadata } from "next";
import AboutClient from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Prathin Sajith, a Senior Software Engineer with expertise in backend and full-stack development.",
};

export default function AboutPage() {
  return <AboutClient />;
}
