"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import { MeshBackground } from "@/components/effects/MeshBackground";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { heroHeadline, siteConfig, stats } from "@/lib/data";
import { TypingAnimation } from "../effects/TypingAnimation"

const headline = "Hi, I'm Naresh Bazidpuria";
const words = headline.split(" ");

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <MeshBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        {siteConfig.available && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-accent font-medium">
              {siteConfig.availabilityLabel}
            </span>
          </motion.div>
        )}

<div className="max-w-3xl">
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heading leading-tight"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          >
          {words.map((word, i) => (
            <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            >
              {word === "Naresh" || word === "Bazidpuria" ? (
                <span className="text-accent">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

          </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 font-display text-xl sm:text-2xl md:text-3xl text-muted"
        >
          <TypingAnimation words={siteConfig.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
        >
         {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button size="lg" onClick={() => scrollTo("projects")} data-cursor-hover>
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("contact")}
            data-cursor-hover
          >
            <Mail size={18} />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" asChild data-cursor-hover>
            <a href="/resume.pdf" download>
              <Download size={18} />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              href={stat.href}
              cta={stat.cta}
            />
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors animate-float"
        aria-label="Scroll to about section"
        data-cursor-hover
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
