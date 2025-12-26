"use client";
import React from "react";

import Link from "next/link";

import { papers } from "@/utils/data/papers-data";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { FadeInView } from "@/app/components/ui/fade-in-view";

const Papers = () => {
  return (
    <section id="papers" className="scroll-mt-24">
      <FadeInView>
        <SectionHeading
          eyebrow="Publications"
          title="Recent Papers"
          description="Selected peer-reviewed papers and preprints."
        />
      </FadeInView>

      <div className="mt-8 grid gap-6">
        {papers.map((paper, index) => (
          <FadeInView key={index} delay={index * 0.06}>
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 transition-shadow hover:shadow-xl">
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
            </article>
          </FadeInView>
        ))}
      </div>
    </section>
  );
};

export default Papers;
