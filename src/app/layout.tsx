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

export const metadata: Metadata = {
  metadataBase: new URL("https://kejian-tong.github.io"),
  title: "Kejian Tong · Software Engineer",
  description:
    "Portfolio of Kejian Tong, a Seattle-based software engineer building distributed systems and polished web experiences.",
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
