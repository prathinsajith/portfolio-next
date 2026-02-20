import type { Metadata } from "next";
import ProjectsClient from "@/components/pages/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse through my portfolio of web development projects, featuring full-stack applications, interactive UIs, and backend systems.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
