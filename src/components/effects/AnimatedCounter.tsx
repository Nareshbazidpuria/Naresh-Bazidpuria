"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  href?: string;
  cta?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  href,
  cta,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  const handleClick = () => {
    if (!href) return;
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const inner = (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
        {count}
        {suffix}
      </div>
      <p className="mt-1.5 text-sm font-medium text-heading">{label}</p>
      {cta && href && (
        <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted group-hover:text-accent transition-colors">
          {cta}
          <ArrowUpRight
            size={12}
            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
          />
        </p>
      )}
    </motion.div>
  );

  return (
    <div ref={ref} className="text-left">
      {href ? (
        <button
          onClick={handleClick}
          className="text-left group cursor-hover w-full"
          data-cursor-hover
        >
          {inner}
        </button>
      ) : (
        inner
      )}
    </div>
  );
}
