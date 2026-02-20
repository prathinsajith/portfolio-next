import type { Metadata } from "next";
import AboutClient from "@/components/pages/AboutClient";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description: "Learn more about Prathin Sajith, a Senior Software Engineer with expertise in backend and full-stack development.",
};

export default function AboutPage() {
  return <AboutClient />;
}
