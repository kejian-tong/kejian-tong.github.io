"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInViewProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
};

/**
 * A reusable wrapper component that adds a subtle fade-in animation when the element scrolls into view.
 * Uses framer-motion's `whileInView` for intersection observer-based animations.
 */
export function FadeInView({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className,
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
