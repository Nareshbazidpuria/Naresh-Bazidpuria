"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Clock, Loader2, Mail, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  contactTrustSignals,
  inquiryTypes,
  siteConfig,
} from "@/lib/data";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const subject = encodeURIComponent(
      `Portfolio inquiry: ${formData.inquiryType}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry type: ${formData.inquiryType}\n\n${formData.message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
    }, 400);
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
    <section id="contact" className="py-24 md:py-32 bg-navy-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-heading">
            Start a <span className="text-accent">Conversation</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl">
            Full stack engineer for product builds, architecture, or team
            leadership — tell me what you&apos;re shipping.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mt-6 flex flex-wrap gap-4">
            {contactTrustSignals.map((signal) => (
              <span
                key={signal}
                className="inline-flex items-center gap-2 text-xs text-muted"
              >
                {signal.includes("24") ? (
                  <Clock size={14} className="text-accent" />
                ) : (
                  <Shield size={14} className="text-accent" />
                )}
                {signal}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-navy-surface border border-white/5 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
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
                  <Label htmlFor="email">Work Email *</Label>
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiryType">Inquiry Type *</Label>
                <select
                  id="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiryType: e.target.value })
                  }
                  disabled={status === "loading"}
                  className="flex h-11 w-full rounded-lg border border-white/10 bg-navy-card px-4 py-2 text-sm text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:opacity-50"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, role, or opportunity..."
                  required
                  rows={5}
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
                {status === "success" ? "Opening Email…" : "Send Message"}
              </Button>

              <p className="text-xs text-muted-foreground">
                By sending, you agree I may reply to your email about this
                inquiry.
              </p>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-accent text-sm"
                  >
                    <CheckCircle size={18} />
                    Thanks! Your email app should open — send the message to reach me.
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
