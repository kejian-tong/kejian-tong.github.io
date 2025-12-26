import type { Metadata } from "next";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://kejian-tong.github.io"),
  title: "Kejian Tong | Software Engineer | AI Researcher",
  description:
    "Official personal website of Kejian Tong — Software Engineer, AI Researcher specializing in backend architecture, distributed systems, machine learning and NLP.",
  alternates: {
    canonical: "https://kejian-tong.github.io",
  },
  verification: {
    google: "VfiWPwx4cxZkahHz0S5d5gUgZicnDGzLQChKc_t38Kg",
  },
  openGraph: {
    type: "website",
    url: "https://kejian-tong.github.io",
    siteName: "Kejian Tong",
    title: "Kejian Tong | Software Engineer | AI Researcher",
    description:
      "Official personal website of Kejian Tong — Software Engineer, AI Researcher specializing in backend architecture, distributed systems, machine learning and NLP.",
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
    site: "@",
    creator: "@",
    title: "Kejian Tong | Software Engineer | AI Researcher",
    description:
      "Official personal website of Kejian Tong — Software Engineer, AI Researcher specializing in backend architecture, distributed systems, machine learning and NLP.",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} font-sans text-white antialiased`}
      >
        {/* Structured data for better discovery on Google */}
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kejian Tong",
              url: "https://kejian-tong.github.io",
            }),
          }}
        />
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kejian Tong",
              url: "https://kejian-tong.github.io",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/kejian-tong",
                "https://scholar.google.com/citations?user=JUGvC_oAAAAJ&hl=en",
                "https://www.researchgate.net/profile/Kejian-Tong",
                "https://www.linkedin.com/in/tongoliver/",
                "https://orcid.org/0009-0002-5127-2711",
                "https://ieeexplore.ieee.org/author/658338598189173",
                "https://www.semanticscholar.org/author/Kejian-Tong/2368457510",
                "https://arxiv.org/a/tong_k_1.html",
                "https://www.techrxiv.org/users/934258"
              ],
              affiliation: {
                "@type": "Organization",
                name: "Northeastern University",
                url: "https://www.northeastern.edu/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://kejian-tong.github.io/school-logo.svg",
                },
              },
            }),
          }}
        />
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kejian Tong",
              url: "https://kejian-tong.github.io",
              logo: "https://kejian-tong.github.io/school-logo.svg",
            }),
          }}
        />
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
