"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/data";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: "GitHub",
      href: siteConfig.github,
      icon: GithubIcon,
    },
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-heading">
            Let&apos;s Build Something{" "}
            <span className="text-accent">Together</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Open to senior roles, freelance projects, and collaborations. Tell
            me what you&apos;re working on.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-navy-surface border border-white/5 space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={status === "loading"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={status === "loading"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  disabled={status === "loading"}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={status === "loading" || status === "success"}
                data-cursor-hover
              >
                {status === "loading" && (
                  <Loader2 size={18} className="animate-spin" />
                )}
                {status === "success" ? "Message Sent!" : "Send Message"}
              </Button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-accent text-sm"
                  >
                    <CheckCircle size={18} />
                    Thanks! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm"
                  >
                    Something went wrong. Please email me directly at{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="underline hover:text-accent"
                    >
                      {siteConfig.email}
                    </a>
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-heading mb-2">
                  Connect
                </h3>
                <p className="text-muted text-sm">
                  Prefer reaching out directly? Find me on these platforms.
                </p>
              </div>

              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={
                      link.label !== "Email" ? "noopener noreferrer" : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-xl bg-navy-surface border border-white/5 glow-border group cursor-hover"
                    data-cursor-hover
                  >
                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-heading">{link.label}</p>
                      <p className="text-xs text-muted truncate max-w-[200px]">
                        {link.label === "Email"
                          ? siteConfig.email
                          : link.href.replace("https://", "")}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
