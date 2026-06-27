"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
  Smartphone,
  Terminal,
  Cloud,
  Box,
} from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { skillGroups } from "@/lib/data";

const iconMap: Record<string, ElementType> = {
  react: Layers,
  nextjs: Globe,
  typescript: Code2,
  javascript: Code2,
  tailwind: Box,
  nodejs: Server,
  express: Terminal,
  api: Code2,
  python: Terminal,
  expo: Smartphone,
  mobile: Smartphone,
  mongodb: Database,
  postgres: Database,
  redis: Database,
  git: GitBranch,
  docker: Box,
  aws: Cloud,
  vercel: Cloud,
};

export function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32 bg-navy-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-heading">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Tools and technologies I use daily to build and ship production
            applications.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <ScrollReveal key={group.title} delay={groupIndex * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-2xl bg-navy-card border border-white/5 glow-border"
              >
                <h3 className="font-display text-lg font-semibold text-heading mb-5">
                  {group.title}
                </h3>
                <div className="space-y-3">
                  {group.skills.map((skill) => {
                    const Icon = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-lg bg-navy-surface/80 border border-white/5 transition-all duration-300 hover:border-accent/30 hover:shadow-glow group"
                        data-cursor-hover
                      >
                        <div className="p-2 rounded-md bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                          <Icon size={18} />
                        </div>
                        <span className="text-sm font-medium text-heading">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
