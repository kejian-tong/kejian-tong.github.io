import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://kejian-tong.github.io";

export const metadata: Metadata = {
  title: "Kejian Tong - Software Engineer and AI Researcher",
  description:
    "Kejian Tong is a software engineer and AI researcher specializing in artificial intelligence, machine learning, deep learning, large language models, and natural language processing. He earned his Master of Science in Computer Science from Northeastern University.",
  alternates: {
    canonical: `${SITE_URL}/kejian-tong`,
  },
  openGraph: {
    title: "Kejian Tong - Software Engineer and AI Researcher",
    description:
      "Software Engineer and AI Researcher specializing in artificial intelligence, machine learning, deep learning, large language models, and natural language processing.",
    url: `${SITE_URL}/kejian-tong`,
    type: "profile",
  },
};

export default function KejianTongPage() {
  // Enhanced JSON-LD for this entity page
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}#kejian-tong`,
    name: "Kejian Tong",
    givenName: "Kejian",
    familyName: "Tong",
    url: SITE_URL,
    mainEntityOfPage: {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/kejian-tong`,
    },
    description:
      "Software Engineer and AI Researcher specializing in artificial intelligence, machine learning, deep learning, large language models, and natural language processing.",
    jobTitle: ["Software Engineer", "AI Researcher"],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Software Engineer",
        occupationLocation: {
          "@type": "Country",
          name: "United States",
        },
      },
      {
        "@type": "Occupation",
        name: "AI Researcher",
        occupationLocation: {
          "@type": "Country",
          name: "United States",
        },
      },
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
      "https://github.com/kejian-tong",
      "https://scholar.google.com/citations?user=JUGvC_oAAAAJ&hl=en",
      "https://www.researchgate.net/profile/Kejian-Tong",
      "https://www.linkedin.com/in/tongoliver/",
      "https://orcid.org/0009-0002-5127-2711",
      "https://ieeexplore.ieee.org/author/658338598189173",
      "https://www.semanticscholar.org/author/Kejian-Tong/2368457510",
      "https://arxiv.org/a/tong_k_1.html",
      "https://www.techrxiv.org/users/934258",
      "https://www.wikidata.org/wiki/Q137643975",
    ],
    image: `${SITE_URL}/card.png`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kejian Tong",
        item: `${SITE_URL}/kejian-tong`,
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
                <span>
                  Google Scholar:{" "}
                  <a
                    href="https://scholar.google.com/citations?user=JUGvC_oAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    [link]
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>
                  ResearchGate:{" "}
                  <a
                    href="https://www.researchgate.net/profile/Kejian-Tong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    [link]
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>
                  ORCID:{" "}
                  <a
                    href="https://orcid.org/0009-0002-5127-2711"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    [link]
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>
                  arXiv:{" "}
                  <a
                    href="https://arxiv.org/a/tong_k_1.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    [link]
                  </a>
                </span>
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
                <span>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/tongoliver/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    [link]
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>
                  GitHub:{" "}
                  <a
                    href="https://github.com/kejian-tong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    [link]
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50">–</span>
                <span>
                  Personal Website:{" "}
                  <Link
                    href="/"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    [link]
                  </Link>
                </span>
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
