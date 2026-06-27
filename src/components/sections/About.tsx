"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { beliefs, stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-heading">
            About <span className="text-accent">Me</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            I&apos;m a Full Stack Engineer and Tech Lead based in Mohali /
            Chandigarh, India. I specialize in the MERN stack with TypeScript,
            React Native, and Python — building production-grade web and mobile
            applications that scale. As a clean code perfectionist, I lead teams
            and drive architecture decisions that last.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 p-8 rounded-2xl bg-navy-surface border border-white/5 glow-border">
            <h3 className="font-display text-xl font-semibold text-heading mb-4">
              What I believe in
            </h3>
            <ul className="space-y-3">
              {beliefs.map((belief) => (
                <li
                  key={belief}
                  className="flex items-start gap-3 text-muted"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {belief}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
