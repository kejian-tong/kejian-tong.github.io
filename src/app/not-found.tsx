import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-white">
        404 — Page not found
      </h1>
      <p className="text-white/70">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
      >
        Back to home
      </Link>
    </div>
  );
}
