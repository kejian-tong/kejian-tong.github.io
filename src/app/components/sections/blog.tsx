import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/app/components/ui/section-heading";

export type BlogPost = {
  id: number;
  url: string;
  title: string;
  description: string | null;
  cover_image: string | null;
  published_at: string;
};

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Writing"
        title="Latest posts"
        description="Occasional notes on building reliable systems and polished products."
      />
      {!posts || posts.length === 0 ? (
        <p className="mt-6 text-sm text-white/60">
          No recent posts found. Follow me on DEV to catch updates.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30"
            >
              <div className="relative h-40 w-full">
                {post.cover_image ? (
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    fill
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
                    className="inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:text-slate-200"
                  >
                    Read on DEV
                    <span className="transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
