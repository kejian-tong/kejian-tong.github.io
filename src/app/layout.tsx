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
  title: "Kejian Tong · Software Engineer",
  description:
    "Portfolio of Kejian Tong, a Seattle-based software engineer building distributed systems and polished web experiences.",
  alternates: {
    canonical: "https://kejian-tong.github.io",
  },
  openGraph: {
    type: "website",
    url: "https://kejian-tong.github.io",
    siteName: "Kejian Tong",
    title: "Kejian Tong · Software Engineer",
    description:
      "Portfolio of Kejian Tong, an entry-level software engineer building distributed systems and polished web experiences.",
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
    title: "Kejian Tong · Software Engineer",
    description:
      "Portfolio of Kejian Tong, an entry-level software engineer building distributed systems and polished web experiences.",
    images: ["/card.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
              sameAs: [
                // Add or remove as appropriate for you
                "https://github.com/kejian-tong",
                "https://www.linkedin.com/in/kejian-tong/",
              ],
              affiliation: {
                "@type": "Organization",
                name: "Northeastern University",
                url: "https://www.northeastern.edu/",
              },
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
