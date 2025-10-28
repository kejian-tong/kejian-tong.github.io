"use client";

import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <BsSun className="h-5 w-5" />
      ) : (
        <BsMoonStars className="h-5 w-5" />
      )}
    </button>
  );
}
