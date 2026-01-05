"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { FadeInView } from "@/app/components/ui/fade-in-view";

export type BlogPost = {
  id: number;
  url: string;
  title: string;
  description: string | null;
  cover_image: string | null;
  published_at: string;
};

type BlogSectionProps = {
  username: string;
  initialPosts?: BlogPost[];
};

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export default function BlogSection({
  username,
  initialPosts = [],
}: BlogSectionProps) {
  const [posts, setPosts] = useState<BlogPost[]>(() => initialPosts);
  const [loading, setLoading] = useState(initialPosts.length === 0);

  useEffect(() => {
    if (!username) {
      setPosts([]);
      setLoading(false);
      return;
    }

    const cacheKey = `devto:posts:${username}`;
    const cacheTimeKey = `devto:posts:${username}:ts`;
    const hasInitial = initialPosts.length > 0;

    try {
      const cached = localStorage.getItem(cacheKey);
      const cachedAt = localStorage.getItem(cacheTimeKey);
      if (cached && cachedAt) {
        const age = Date.now() - Number(cachedAt);
        if (!Number.isNaN(age) && age < CACHE_TTL_MS) {
          const cachedPosts = JSON.parse(cached) as BlogPost[];
          setPosts(cachedPosts);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      // Ignore cache read errors and continue with live fetch
      if (typeof window !== "undefined") {
        // eslint-disable-next-line no-console
        console.warn("Blog cache read failed:", err);
      }
    }

    if (hasInitial) {
      setLoading(false);
      try {
        localStorage.setItem(cacheKey, JSON.stringify(initialPosts));
        localStorage.setItem(cacheTimeKey, Date.now().toString());
      } catch (err) {
        if (typeof window !== "undefined") {
          // eslint-disable-next-line no-console
          console.warn("Blog cache seed failed:", err);
        }
      }
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    async function loadPosts() {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${username}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          return;
        }
        const articles = (await response.json()) as BlogPost[];
        const filtered = articles
          .filter((article) => article.cover_image)
          .slice(0, 3);
        setPosts(filtered);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(filtered));
          localStorage.setItem(cacheTimeKey, Date.now().toString());
        } catch (err) {
          // Ignore cache write errors (quota, privacy mode)
          if (typeof window !== "undefined") {
            // eslint-disable-next-line no-console
            console.warn("Blog cache write failed:", err);
          }
        }
      } catch (err) {
        if ((err as Error)?.name !== "AbortError") {
          // eslint-disable-next-line no-console
          console.error("Failed to fetch blog posts:", err);
        }
      } finally {
        clearTimeout(timeout);
        setLoading(false);
      }
    }

    loadPosts();
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [username, initialPosts]);

  return (
    <section id="blog" className="scroll-mt-24">
      <FadeInView>
        <SectionHeading
          eyebrow="Writing"
          title="Latest posts"
          description="Occasional notes on building reliable systems and polished products."
        />
      </FadeInView>
      {loading ? (
        <FadeInView>
          <p className="mt-6 text-sm text-white/60">Loading posts…</p>
        </FadeInView>
      ) : posts.length === 0 ? (
        <FadeInView>
          <p className="mt-6 text-sm text-white/60">
            No recent posts found. Follow me on DEV to catch updates.
          </p>
        </FadeInView>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30"
            >
              <div className="relative h-40 w-full">
                {post.cover_image ? (
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white/5 text-white/40">
                    No cover
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="line-clamp-2 text-base font-semibold text-white">
                  {post.title}
                </h3>
                {post.description ? (
                  <p className="line-clamp-2 text-sm text-white/70">
                    {post.description}
                  </p>
                ) : null}
                <div className="pt-2">
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:text-slate-200"
                  >
                    Read on DEV
                    <span className="transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
