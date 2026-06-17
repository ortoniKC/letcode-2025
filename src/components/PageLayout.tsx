import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  /** Primary glow color: 'emerald' (default) | 'indigo' | 'violet' | 'teal' */
  glowColor?: "emerald" | "indigo" | "violet" | "teal";
  className?: string;
}

/**
 * Standard page wrapper used across all pages.
 * Provides: fixed ambient glow orbs, dot-pattern background, correct pt-16 pb-16 spacing.
 */
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  glowColor = "emerald",
  className = "",
}) => {
  const orb1Class =
    glowColor === "indigo"
      ? "glow-orb-indigo"
      : glowColor === "violet"
      ? "glow-orb-violet"
      : glowColor === "teal"
      ? "glow-orb-emerald"
      : "glow-orb-emerald";

  const orb2Class =
    glowColor === "emerald"
      ? "glow-orb-indigo"
      : glowColor === "teal"
      ? "glow-orb-indigo"
      : "glow-orb-emerald";

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Ambient background layer — fixed so it covers the full viewport */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className={`absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full ${orb1Class} opacity-40 dark:opacity-60`}
        />
        <div
          className={`absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full ${orb2Class} opacity-30 dark:opacity-50`}
        />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      {/* Page content */}
      <div className="pt-16 pb-16">{children}</div>
    </div>
  );
};

export default PageLayout;
