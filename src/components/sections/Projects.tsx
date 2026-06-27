"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-heading">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Real applications I&apos;ve built — from mobile expense tracking to
            production web portfolios.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.15}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full rounded-2xl overflow-hidden bg-navy-surface border border-white/5 glow-border"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-heading/10 group-hover:text-heading/20 transition-colors duration-500">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
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

                  <p className="mt-4 text-muted leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors cursor-hover"
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
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors cursor-hover"
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
    </section>
  );
}
