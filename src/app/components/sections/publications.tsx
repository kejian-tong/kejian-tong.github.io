"use client";
import React from "react";

import Link from "next/link";

import { publications } from "@/utils/data/publications-data";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { FadeInView } from "@/app/components/ui/fade-in-view";
import { motion } from "framer-motion";

const Publications = () => {
  return (
    <section id="publications" className="scroll-mt-24">
      <FadeInView>
        <SectionHeading
          eyebrow="Publications"
          title="Publications"
          description="Selected peer-reviewed papers and preprints."
        />
      </FadeInView>

      <div className="mt-4 flex justify-end">
        <a
          href="https://scholar.google.com/citations?user=JUGvC_oAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
        >
          See all publications on Google Scholar
        </a>
      </div>

      <div className="mt-8 grid gap-6">
        {publications.map((paper, index) => (
          <FadeInView key={index} delay={index * 0.06}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 transition-shadow hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="space-y-3 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-slate-200 underline-offset-4 hover:underline"
                    >
                      {paper.title}
                    </a>
                  </h3>
                </div>

                <p className="text-sm text-white/70">{paper.authors}</p>
                <p className="text-sm text-white/60 italic">
                  {paper.publication}, {paper.year}
                </p>
              </div>
            </motion.article>
          </FadeInView>
        ))}
      </div>
    </section>
  );
};

export default Publications;
