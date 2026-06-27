"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-heading">
            Career <span className="text-accent">Trajectory</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            From hands-on development to leading full stack teams.
          </p>
        </ScrollReveal>

        <div className="mt-12 relative">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <ScrollReveal key={item.role} delay={index * 0.15}>
                <div className="relative pl-10 md:pl-14">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 border-accent bg-navy shadow-glow" />

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="font-display text-xl font-semibold text-heading">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-accent">
                      {item.company}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-sm text-muted">{item.period}</span>
                  </div>

                  <p className="text-muted leading-relaxed max-w-2xl">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs rounded-md bg-navy-card text-muted border border-white/5"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
