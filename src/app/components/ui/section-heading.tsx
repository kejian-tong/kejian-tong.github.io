interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-white/70">{description}</p>
      ) : null}
    </div>
  );
}
