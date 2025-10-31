import type { ReactNode } from "react";

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="prose-img:rounded-2xl prose-img:shadow-2xl prose-img:shadow-blue-500/10">
        {children}
      </div>
    </div>
  );
}
