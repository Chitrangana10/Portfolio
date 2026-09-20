import React, { useMemo } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { profile, sections } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

// Floating bottom dock: section pills with a shared-element indicator, and a
// hairline scroll-progress bar welded to its top edge.
export default function Dock() {
  const ids = useMemo(() => sections.map((s) => s.id), []);
  const active = useActiveSection(ids);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-full border border-white/60 bg-paper-raised/70 py-1.5 pl-1.5 pr-4 shadow-plate backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 ease-fluid hover:bg-paper-raised/90"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-graphite-950 font-mono text-[11px] font-medium text-paper transition-colors duration-500 ease-fluid group-hover:bg-pine">
            {profile.initials}
          </span>
          <span className="font-mono text-[11px] tracking-tight text-graphite-700">
            {profile.name.split(" ")[0].toLowerCase()}
          </span>
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="group hidden items-center gap-2 rounded-full border border-white/60 bg-paper-raised/70 px-4 py-2 font-mono text-[11px] text-graphite-700 shadow-plate backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 ease-fluid hover:bg-paper-raised/90 hover:text-graphite-950 sm:inline-flex"
        >
          <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-pine" aria-hidden="true" />
          Available for internships
          <ArrowUpRight
            size={12}
            weight="bold"
            className="text-graphite-400 transition-transform duration-500 ease-fluid group-hover:-translate-y-px group-hover:translate-x-px"
          />
        </a>
      </div>

      <nav
        aria-label="Section navigation"
        className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:bottom-6"
      >
        <div className="relative max-w-full overflow-hidden rounded-full border border-white/60 bg-paper-raised/75 p-1 shadow-float backdrop-blur-2xl backdrop-saturate-150">
          <motion.div
            style={{ scaleX: progress }}
            className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-pine to-clay"
          />
          <ul className="no-scrollbar flex max-w-full items-center gap-0.5 overflow-x-auto">
            {sections.map((section) => {
              const isActive = active === section.id;
              return (
                // "Top" is redundant on phones — the wordmark already goes there,
                // and dropping it keeps the dock inside a 360px viewport.
                <li key={section.id} className={section.id === "top" ? "hidden sm:block" : undefined}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block whitespace-nowrap rounded-full px-2.5 py-2 font-mono text-[10.5px] tracking-tight transition-colors duration-200 sm:px-3 sm:text-[11px] md:px-4 ${
                      isActive
                        ? "text-paper"
                        : "text-graphite-500 hover:text-graphite-950"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="dock-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-full bg-graphite-950 shadow-lift"
                      />
                    ) : null}
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
