import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/content/experience";
import {
  absoluteUrl,
  getSocialLink,
  siteConfig,
} from "@/config/site";

const entityUrl = absoluteUrl("/kejian-tong");
const githubUrl = getSocialLink("GitHub")?.href;
const linkedInUrl = getSocialLink("LinkedIn")?.href;
const scholarUrl = getSocialLink("Google Scholar")?.href;

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.entityTitle,
  },
  description: siteConfig.entityDescription,
  alternates: {
    canonical: entityUrl,
  },
  openGraph: {
    title: siteConfig.entityTitle,
    description: siteConfig.entityDescription,
    url: entityUrl,
    type: "profile",
  },
};

export default function KejianTongPage() {
  // Enhanced JSON-LD for this entity page
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}#kejian-tong`,
    name: siteConfig.name,
    givenName: "Kejian",
    familyName: "Tong",
    // point the person URL at the dedicated entity page, not the site root
    url: entityUrl,
    mainEntityOfPage: {
      "@type": "ProfilePage",
      "@id": entityUrl,
    },
    description: siteConfig.entityDescription,
    jobTitle: ["Software Engineer", "AI Researcher"],
    hasOccupation: [
      { "@type": "Occupation", name: "Software Engineer" },
      { "@type": "Occupation", name: "AI Researcher" },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Northeastern University",
      url: "https://www.northeastern.edu/",
      sameAs: "https://www.wikidata.org/wiki/Q49210",
    },
    educationalCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Master of Science in Computer Science",
      educationalLevel: "Master's degree",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Large Language Models",
      "Software Engineering",
      "Backend Engineering",
      "Distributed Systems",
      "Cloud Architecture",
    ],
    sameAs: [
      ...(githubUrl ? [githubUrl] : []),
      ...(scholarUrl ? [scholarUrl] : []),
      "https://www.researchgate.net/profile/Kejian-Tong",
      ...(linkedInUrl ? [linkedInUrl] : []),
      "https://orcid.org/0009-0002-5127-2711",
      "https://ieeexplore.ieee.org/author/658338598189173",
      "https://www.semanticscholar.org/author/Kejian-Tong/2368457510",
      "https://arxiv.org/a/tong_k_1.html",
      "https://www.techrxiv.org/users/934258",
      "https://www.wikidata.org/wiki/Q137643975",
    ],
    image: absoluteUrl("/card.png"),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: siteConfig.name,
        item: entityUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mx-auto max-w-4xl">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 text-sm text-white/60" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li aria-current="page" className="text-white/80">
              Kejian Tong
            </li>
          </ol>
        </nav>

        {/* Wikipedia-style heading */}
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Kejian Tong
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            <strong>Kejian Tong</strong> is a software engineer and AI
            researcher specializing in artificial intelligence, machine
            learning, deep learning, and natural language processing.
          </p>
        </header>

        {/* Main content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* Biography */}
          <section>
            <p className="text-white/70 leading-relaxed">
              He earned his Master of Science in Computer Science from
              Northeastern University and has published peer-reviewed research
              in IEEE and international conferences. His work focuses on
              intelligent systems, cloud-based AI architectures, and large-scale
              distributed machine learning systems.
            </p>
            <p className="text-white/70 leading-relaxed mt-4">
              Kejian Tong currently works as a Software Engineer in the United
              States and actively contributes to academic research, open-source
              projects, and applied AI engineering.
            </p>
          </section>

          {/* Education */}
          <section className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-bold text-white">
              Education
            </h2>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>
                  Master of Science in Computer Science, Northeastern University
                </span>
              </li>
            </ul>
          </section>

          {/* Experience */}
          <section className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-bold text-white">
              Experience
            </h2>
            <ul className="mt-4 space-y-2 text-white/70">
              {experiences.map((exp) => (
                <li key={exp.id} className="flex items-start gap-2">
                  <span className="text-white/50">–</span>
                  <span>
                    {exp.title}, {exp.organization}
                    {exp.location ? ` — ${exp.location}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Research Interests */}
          <section className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-bold text-white">
              Research Interests
            </h2>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>Artificial Intelligence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>Machine Learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>Deep Learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>Natural Language Processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>Large Language Models (LLM)</span>
              </li>
            </ul>
          </section>

          {/* Publications & Research */}
          <section className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-bold text-white">
              Publications &amp; Research
            </h2>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <a
                  href="https://scholar.google.com/citations?user=JUGvC_oAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Google Scholar
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <a
                  href="https://www.researchgate.net/profile/Kejian-Tong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  ResearchGate
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <a
                  href="https://orcid.org/0009-0002-5127-2711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  ORCID
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <a
                  href="https://arxiv.org/a/tong_k_1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  arXiv
                </a>
              </li>
            </ul>
          </section>

          {/* Professional Profiles */}
          <section className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-bold text-white">
              Professional Profiles
            </h2>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <a
                  href="https://www.linkedin.com/in/tongoliver/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <a
                  href="https://github.com/kejian-tong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <Link href="/" className="transition hover:text-white">
                  Personal Website
                </Link>
              </li>
            </ul>
          </section>
        </div>

        {/* Back to home */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to main site
          </Link>
        </footer>
      </article>
    </>
  );
}
