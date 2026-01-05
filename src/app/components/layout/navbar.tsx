"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";
import { personalData } from "@/utils/data/personal-data";
import { ThemeToggle } from "@/app/components/ui/theme-toggle";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Publications", href: "/#publications" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  // Writing hidden for now; placeholder kept in codebase.
  // { label: "Writing", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const activeHref = active ? `/#${active}` : "";

  const toggleMenu = () => setOpen((prev) => !prev);

  // Track scroll position to highlight the active nav item (only on homepage)
  useEffect(() => {
    if (!isHomePage) {
      setActive("");
      return;
    }

    const ids = [
      "about",
      "projects",
      "publications",
      "skills",
      "education",
      "contact",
    ]; // blog hidden

    let ticking = false;
    const offset = 120; // account for fixed header + spacing

    const updateActive = () => {
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));
      if (sections.length === 0) return;

      let current: string | null = null;
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= offset) {
          current = section.id;
        }
      });

      setActive(current ?? "");
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHomePage]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white sm:text-xl"
        >
          {personalData.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6 text-sm font-medium text-white/70">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "transition hover:text-white",
                  active && item.href === activeHref && "text-white"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={clsx(
          "md:hidden",
          "origin-top overflow-hidden transition-[max-height] duration-300 ease-out",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/60 px-4 py-5 text-white/80 shadow-xl">
          <nav className="flex flex-col gap-4 text-base">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white",
                  active &&
                    item.href === activeHref &&
                    "bg-white/10 text-white"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-end gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
