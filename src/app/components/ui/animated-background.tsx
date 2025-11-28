"use client";

import { motion } from "framer-motion";

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

/**
 * Animated background with floating gradient orbs
 * Creates a subtle, professional spatial effect without being too flashy
 */
export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orb 1 */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/30 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated gradient orb 2 */}
      <motion.div
        className="absolute right-[10%] top-[10%] h-[350px] w-[350px] rounded-full bg-blue-500/25 blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Animated gradient orb 3 */}
      <motion.div
        className="absolute bottom-[10%] left-[40%] h-[300px] w-[300px] rounded-full bg-teal-400/20 blur-[90px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle particle effect with dots */}
      <div className="absolute inset-0 opacity-20">
        {particles.map((particle, i) => (
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
        ))}
      </div>
    </div>
  );
}
