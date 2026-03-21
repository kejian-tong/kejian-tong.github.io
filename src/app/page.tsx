import type { Metadata } from "next";
import HeroSection from "@/app/components/sections/hero";
import AboutSection from "@/app/components/sections/about";
import SkillsSection from "@/app/components/sections/skills";
import ProjectsSection from "@/app/components/sections/projects";
import PublicationsSection from "@/app/components/sections/publications";
import EducationSection from "@/app/components/sections/education";
import ContactSection from "@/app/components/sections/contact";
import BlogSection, { type BlogPost } from "@/app/components/sections/blog";
import { personalData } from "@/utils/data/personal-data";
import devtoFallback from "@/utils/data/devto-fallback.json";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kejian-tong.github.io",
  },
  openGraph: {
    url: "https://kejian-tong.github.io",
  },
};

async function getBlogPosts(username: string): Promise<BlogPost[]> {
  if (!username) return [];
  const fallbackPosts = devtoFallback as BlogPost[];
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}`,
      { signal: controller.signal }
    );
    if (!response.ok) return fallbackPosts.length ? fallbackPosts : [];
    const articles = (await response.json()) as BlogPost[];
    return articles.filter((article) => article.cover_image).slice(0, 3);
  } catch (err) {
    if ((err as Error)?.name !== "AbortError") {
      // eslint-disable-next-line no-console
      console.error("Failed to fetch blog posts:", err);
    }
    return fallbackPosts.length ? fallbackPosts : [];
  } finally {
    clearTimeout(timeout);
  }
}

export default async function HomePage() {
  const shouldShowBlog = Boolean(
    personalData.showBlog && personalData.devUsername
  );
  const initialPosts = shouldShowBlog
    ? await getBlogPosts(personalData.devUsername)
    : [];
  return (
    <div className="space-y-24">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PublicationsSection />
      <SkillsSection />
      <EducationSection />
      {shouldShowBlog && (
        <BlogSection
          username={personalData.devUsername}
          initialPosts={initialPosts}
        />
      )}
      <ContactSection />
    </div>
  );
}
