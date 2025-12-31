import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Providers } from "@/app/providers";
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";
import "@/app/css/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const SITE_URL = "https://kejian-tong.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kejian Tong | Software Engineer | AI Researcher",
    template: "%s | Kejian Tong",
  },
  description:
    "Official personal website of Kejian Tong — Software Engineer and AI Researcher specializing in backend architecture, distributed systems, machine learning, and NLP.",

  // Google Search Console verification (meta name="google-site-verification")
  verification: {
    google: "VfiWPwx4cxZkahHz0S5d5gUgZicnDGzLQChKc_t38Kg",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Kejian Tong",
    title: "Kejian Tong | Software Engineer | AI Researcher",
    description:
      "Official personal website of Kejian Tong — Software Engineer and AI Researcher specializing in backend architecture, distributed systems, machine learning, and NLP.",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 630,
        alt: "Kejian Tong portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kejian Tong | Software Engineer | AI Researcher",
    description:
      "Official personal website of Kejian Tong — Software Engineer and AI Researcher specializing in backend architecture, distributed systems, machine learning, and NLP.",
    images: ["/card.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/school-logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/school-logo.svg" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ JSON-LD structured data
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "Kejian Tong",
    url: SITE_URL,
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    // Use a stable, unique id for the person entity to allow reuse across pages
    "@id": `${SITE_URL}#kejian-tong`,
    name: "Kejian Tong",
    url: SITE_URL,
    description:
      "Software Engineer and AI Researcher specializing in backend architecture, distributed systems, machine learning, and NLP.",
    // Keep a primary jobTitle for compatibility, and add structured occupations below.
    jobTitle: ["Software Engineer", "AI Researcher"],
    hasOccupation: [
      { "@type": "Occupation", name: "Software Engineer" },
      { "@type": "Occupation", name: "AI Researcher" },
    ],
    image: `${SITE_URL}/card.png`,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE_URL,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Northeastern University",
        url: "https://www.northeastern.edu/",
      },
    ],
    // Use focused topic/field terms (not job titles) for knowsAbout
    knowsAbout: [
      "Software Engineering",
      "Backend Engineering",
      "Distributed Systems",
      "Microservices",
      "Cloud Architecture",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Large language models",
    ],
  };

  const stripTrailingSlashJs = `
(function() {
  try {
    var l = window.location;
    var p = l.pathname || "/";
    if (p.length > 1 && p.endsWith("/")) {
      var np = p.replace(/\\/+$/, "");
      l.replace(l.origin + np + l.search + l.hash);
    }
  } catch (e) {}
})();
`.trim();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: stripTrailingSlashJs }} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>

      <body
        className={`${inter.variable} ${sora.variable} font-sans text-white antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <div className="background-gradient" />
            <Navbar />
            <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 pb-24 pt-32 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
