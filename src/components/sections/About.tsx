"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { beliefs, technicalArsenal } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-heading">
            Engineering <span className="text-accent">Mindset</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-lg text-muted max-w-3xl leading-relaxed">
            I don&apos;t just write code; I design systems. With 3+ years of
            hands-on engineering experience, I lead full stack teams building
            production applications that serve real users at scale.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-4 text-muted max-w-3xl leading-relaxed">
            My core strength lies in the MERN ecosystem and JavaScript — from
            React frontends to Node.js APIs. I obsess over clean architecture,
            readable code, and performance that keeps users engaged. Mobile with
            React Native is part of my toolkit, but web and full stack delivery
            is where I lead.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 p-8 rounded-2xl bg-navy-surface border border-white/5">
            <h3 className="font-display text-xl font-semibold text-heading mb-6">
              Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technicalArsenal.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="px-3.5 py-1.5 text-sm font-mono rounded-full bg-accent/5 text-muted border border-white/5 hover:border-accent/30 hover:text-accent transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-8 rounded-2xl bg-navy-surface border border-white/5 glow-border">
            <h3 className="font-display text-xl font-semibold text-heading mb-4">
              What I believe in
            </h3>
            <ul className="space-y-3">
              {beliefs.map((belief) => (
                <li key={belief} className="flex items-start gap-3 text-muted">
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
