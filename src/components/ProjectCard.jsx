/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, GithubLogo, Minus, Plus } from "@phosphor-icons/react";
import ProjectDiagram from "./ProjectDiagram";

// One card in the sticky stack. It scales down slightly as the next card climbs
// over it, so the stack reads as physical depth rather than a scrolling list.
export default function ProjectCard({ project, index, total }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.18", "end 0.35"],
  });
  // Scale only — never opacity: these plates are opaque on purpose so the card
  // underneath stays hidden as the stack compresses.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  const flip = index % 2 === 1;
  const preview = project.points.slice(0, 2);
  const rest = project.points.slice(2);

  return (
    <div
      ref={ref}
      className="md:sticky"
      style={{ top: `calc(6rem + ${index * 1.5}rem)` }}
    >
      <motion.article style={{ scale }} className="shell shadow-float">
        <div className="core overflow-hidden">
        <div className="flex flex-col gap-1 border-b border-rule-soft bg-paper-raised px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:px-9">
          <span className="label">
            <span className="text-clay">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-graphite-300"> / {String(total).padStart(2, "0")}</span>
          </span>
          <span className="label">
            {project.kind} · {project.year}
          </span>
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12 md:p-9">
          <div className={flip ? "md:order-2" : undefined}>
            <h3 className="text-2xl font-semibold tracking-tight text-graphite-950 md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-graphite-500">
              {project.tagline}
            </p>

            <ul className="mt-6 space-y-3">
              {preview.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-graphite-700">
                  <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-pine/70" />
                  {point}
                </li>
              ))}
            </ul>

            <AnimatePresence initial={false}>
              {open && rest.length > 0 ? (
                <motion.ul
                  key="rest"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="space-y-3 overflow-hidden"
                >
                  <li className="h-3" aria-hidden="true" />
                  {rest.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-graphite-700"
                    >
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-pine/70" />
                      {point}
                    </li>
                  ))}
                </motion.ul>
              ) : null}
            </AnimatePresence>

            {rest.length > 0 ? (
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-rule-soft bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-graphite-500 transition-all duration-500 ease-fluid hover:border-rule hover:text-clay active:scale-[0.97]"
              >
                {open ? <Minus size={12} weight="bold" /> : <Plus size={12} weight="bold" />}
                {open ? "Fewer notes" : `${rest.length} more build notes`}
              </button>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-1.5">
              {project.stack.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>

            {project.repo || project.demo ? (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline btn-nib-host py-1 pl-5 text-xs"
                  >
                    <GithubLogo size={14} weight="fill" className="text-graphite-700" />
                    Source
                    <span className="btn-nib h-7 w-7" aria-hidden="true">
                      <ArrowUpRight size={12} weight="bold" />
                    </span>
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-solid btn-nib-host py-1 pl-5 text-xs"
                  >
                    Live
                    <span className="btn-nib h-7 w-7" aria-hidden="true">
                      <ArrowUpRight size={12} weight="bold" />
                    </span>
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className={`well p-4 md:p-6 ${flip ? "md:order-1" : ""}`}>
            <div className="aspect-[356/176]">
              <ProjectDiagram kind={project.diagram} />
            </div>
          </div>
        </div>
        </div>
      </motion.article>
    </div>
  );
}
