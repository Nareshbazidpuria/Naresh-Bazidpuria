"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { MeshBackground } from "@/components/effects/MeshBackground";
import { TypingAnimation } from "@/components/effects/TypingAnimation";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

const headline = "Hi, I'm Naresh Bazidpuria";
const words = headline.split(" ");

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MeshBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
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
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button size="lg" onClick={scrollToProjects} data-cursor-hover>
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              data-cursor-hover
            >
              <a href="/resume.pdf" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors cursor-hover animate-float"
        aria-label="Scroll to about section"
        data-cursor-hover
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
