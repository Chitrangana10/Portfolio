import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { profile, projects } from "../data/profile";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <SectionHeading
        index="01"
        label="Selected work"
        title="Four systems, built end to end."
        note="Each one shipped past the demo stage — containerised, authenticated, deployed, and designed to fail gracefully rather than loudly."
      />

      <div className="space-y-6 md:space-y-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-end">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-rule-soft bg-paper-raised/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-graphite-500 shadow-inset transition-all duration-500 ease-fluid hover:border-rule hover:text-graphite-950"
        >
          Everything else on GitHub
          <ArrowUpRight
            size={12}
            weight="bold"
            className="text-clay transition-transform duration-500 ease-fluid group-hover:-translate-y-px group-hover:translate-x-px"
          />
        </a>
      </div>
    </section>
  );
}
