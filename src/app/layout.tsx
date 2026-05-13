import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Providers } from "@/app/providers";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",

  // Google Search Console verification (meta name="google-site-verification")
  verification: {
    google: "VfiWPwx4cxZkahHz0S5d5gUgZicnDGzLQChKc_t38Kg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
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
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
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
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-US",
  };

  // Note: we intentionally do not declare a Person JSON-LD here.  the
  // `/kejian-tong` page is the canonical, unique entity page and emits
  // the only Person object.  keeping two makes Google see conflicting
  // entities which can hurt Knowledge Panel stability.

  // removed client-side URL normalization per SEO advice —
  // canonical and server output already stabilise paths.

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
