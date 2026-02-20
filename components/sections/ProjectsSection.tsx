"use client";

import { m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section className="relative z-10 py-24 px-6 scroll-mt-28" id="projects">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
            Projects
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Featured Work
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <m.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full border-border hover:border-accent/40 transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-accent/40 text-accent hover:bg-accent/10 bg-transparent"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live ${project.title} project`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-border hover:border-accent/40 hover:text-accent bg-transparent"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
