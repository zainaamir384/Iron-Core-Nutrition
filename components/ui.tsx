"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="eyebrow"><span />{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </Reveal>
  );
}

export function ActionButton({ children, variant = "primary", href = "#products" }: { children: React.ReactNode; variant?: "primary" | "secondary"; href?: string }) {
  return (
    <motion.a whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} href={href} className={`button ${variant}`}>
      <span>{children}</span><ArrowUpRight size={17} strokeWidth={2.5} />
    </motion.a>
  );
}
