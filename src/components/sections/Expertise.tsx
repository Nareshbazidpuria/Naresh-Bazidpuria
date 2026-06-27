"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Layers,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { expertiseAreas } from "@/lib/data";

const iconMap: Record<string, ElementType> = {
  layers: Layers,
  smartphone: Smartphone,
  code: Code2,
  api: Code2,
  database: Database,
  users: Users,
  zap: Zap,
  cloud: Cloud,
};

export function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-navy-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-heading">
            Deep Technical{" "}
            <span className="text-accent">Expertise</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl">
            Going beyond UI development — enterprise-scale architectures,
            production APIs, and uncompromising performance across the full
            stack.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertiseAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Code2;
            return (
              <ScrollReveal key={area.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full p-6 rounded-2xl bg-navy-card border border-white/5 glow-border"
                  data-cursor-hover
                >
                  <div className="p-2.5 w-fit rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-heading mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
