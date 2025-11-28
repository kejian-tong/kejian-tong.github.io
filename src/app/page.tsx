import HeroSection from "@/app/components/sections/hero";
import AboutSection from "@/app/components/sections/about";
import SkillsSection from "@/app/components/sections/skills";
import ProjectsSection from "@/app/components/sections/projects";
import EducationSection from "@/app/components/sections/education";
import ContactSection from "@/app/components/sections/contact";
import BlogSection, { type BlogPost } from "@/app/components/sections/blog";
import { personalData } from "@/utils/data/personal-data";

async function getBlogPosts(username: string): Promise<BlogPost[]> {
  if (!username) return [];
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}`,
      {
        next: { revalidate: 60 * 60 }, // refresh hourly without hammering the API
        signal: controller.signal,
      }
    );
    if (!response.ok) return [];
    const articles = (await response.json()) as BlogPost[];
    return articles.filter((article) => article.cover_image).slice(0, 3);
  } catch (err) {
    // Silence abort and network errors so the homepage doesn't fail rendering
    if ((err as Error)?.name !== "AbortError") {
      // eslint-disable-next-line no-console
      console.error("Failed to fetch blog posts:", err);
    }
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

export default async function HomePage() {
  const shouldShowBlog = Boolean(
    personalData.showBlog && personalData.devUsername
  );
  const posts = shouldShowBlog
    ? await getBlogPosts(personalData.devUsername)
    : [];
  return (
    <div className="space-y-24">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      {shouldShowBlog && <BlogSection posts={posts} />}
      <ContactSection />
    </div>
  );
}
