"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-heading">
            Featured <span className="text-accent">Implementations</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Real web applications I&apos;ve built — from React portfolios to
            production MERN stacks.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.15}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full rounded-2xl overflow-hidden bg-navy-surface border border-white/5 glow-border cursor-pointer"
                onClick={() => setSelected(project)}
                data-cursor-hover
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-heading/10 group-hover:text-heading/20 transition-colors duration-500">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-navy/60 backdrop-blur-sm border border-white/10 text-xs text-muted flex items-center gap-1.5">
                    <FileText size={12} />
                    Case study
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-heading">
                    {project.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-6 flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
                      data-cursor-hover
                    >
                      <GithubIcon className="w-[18px] h-[18px]" />
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
                        data-cursor-hover
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selected.name}</DialogTitle>
              <p className="text-sm text-muted">
                {selected.caseStudy.role} · {selected.caseStudy.duration}
              </p>
            </DialogHeader>

            <div className="space-y-6 mt-2">
              <div>
                <h4 className="text-sm font-semibold text-heading mb-2">
                  Overview
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {selected.caseStudy.overview}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-heading mb-2">
                  Challenges
                </h4>
                <ul className="space-y-2">
                  {selected.caseStudy.challenges.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-heading mb-2">
                  Outcomes
                </h4>
                <ul className="space-y-2">
                  {selected.caseStudy.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-heading mb-2">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.caseStudy.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="sm" data-cursor-hover>
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
                  </a>
                </Button>
                {selected.live && (
                  <Button variant="outline" asChild size="sm" data-cursor-hover>
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelected(null);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-cursor-hover
                >
                  Let&apos;s build together
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
