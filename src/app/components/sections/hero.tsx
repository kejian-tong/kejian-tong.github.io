"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import { contactsData } from "@/utils/data/contacts-data";
import { Stat } from "@/utils/types/content";

const stats: Stat[] = [
  {
    label: "Core Focus",
    value: "Distributed systems",
    helper: "Event-driven, resilient services",
  },
  {
    label: "Toolbox",
    value: "Java · React · Cloud",
    helper: "End-to-end delivery",
  },
  {
    label: "Community",
    value: "Mentor & collaborator",
    helper: "Always shipping with teammates",
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-16 shadow-2xl shadow-blue-500/10 backdrop-blur-md sm:px-10">
      <div className="absolute inset-0 -z-10 blur-3xl">
        <div className="hero-blob" />
      </div>

      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70"
            variants={heroVariants}
          >
            Hello, I’m {personalData.name}
          </motion.span>
          <motion.h1
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.3rem] lg:leading-[1.1]"
            variants={heroVariants}
          >
            Software engineer crafting scalable services and memorable product
            experiences.
          </motion.h1>
          <motion.p
            className="max-w-xl text-base text-white/70 sm:text-lg"
            variants={heroVariants}
          >
            {personalData.summary}
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-3"
            variants={heroVariants}
          >
            <Link
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Explore projects
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href={`mailto:${contactsData.email}`}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Start a conversation
            </Link>
          </motion.div>
          <motion.ul
            className="grid gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={heroVariants}
          >
            {stats.map((stat, index) => (
              <motion.li
                key={stat.label}
                custom={index + 2}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                className="rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  {stat.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {stat.value}
                </p>
                {stat.helper ? (
                  <p className="mt-1 text-sm text-white/60">{stat.helper}</p>
                ) : null}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative h-80 w-80 overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-2xl shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-transparent to-purple-500/30" />
            <Image
              src={personalData.profileImage}
              alt={personalData.name}
              fill
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/60 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Highlights
              </p>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                {personalData.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
