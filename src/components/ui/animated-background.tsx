"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

type Particle = {
  left: string;
  top: string;
  duration: number;
  delay: number;
  scale: number;
};

// Use deterministic particle placement to avoid SSR/CSR hydration drift from Math.random()
const particles: Particle[] = Array.from({ length: 30 }, (_, i) => {
  const left = ((i * 37) % 96) + 2; // keep dots away from the very edge
  const top = ((i * 53) % 96) + 2;
  return {
    left: `${left}%`,
    top: `${top}%`,
    duration: 3 + (i % 6) * 0.35,
    delay: ((i * 0.21) % 2) + 0.1,
    scale: 1 + (i % 4) * 0.15,
  };
});

export function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-[-20%] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(94,234,212,0.2),rgba(124,58,237,0.24),rgba(14,165,233,0.18),rgba(94,234,212,0.2))] opacity-70 blur-3xl"
        animate={shouldReduceMotion ? undefined : { rotate: [0, 10, 0] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 opacity-20">
        {!shouldReduceMotion
          ? particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  opacity: [0.25, 0.75, 0.25],
                  scale: [1, particle.scale, 1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }}
              />
            ))
          : null}
      </div>
    </div>
  );
}
