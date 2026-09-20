import React from "react";
import { motion } from "motion/react";
import { GraduationCap } from "@phosphor-icons/react";
import { education } from "../data/profile";
import SectionHeading from "./SectionHeading";

const SEGMENTS = 20;
const filled = Math.round((8.43 / 10) * SEGMENTS);

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <SectionHeading
        index="04"
        label="Education"
        title="Electronics, taught. Backends, chosen."
        note="An ECE degree that keeps the systems layer honest — signals, microcontrollers and networks underneath the web work."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="shell"
        >
          <div className="core flex h-full flex-col p-7 md:p-9">
          <div className="flex items-start justify-between gap-4">
            <GraduationCap size={22} weight="duotone" className="text-pine" />
            <span className="label">{education.period}</span>
          </div>

          <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-tight text-graphite-950">
            {education.school}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-graphite-500">
            {education.degree}
          </p>
          <p className="mt-1 text-sm text-graphite-400">{education.place}</p>

          <div className="mt-9 border-t border-rule-soft pt-6 md:mt-auto">
            <div className="flex items-end justify-between">
              <span className="label">CGPA</span>
              <span className="font-mono text-3xl tracking-tight text-graphite-950">
                8.43
                <span className="text-base text-graphite-400">/10</span>
              </span>
            </div>

            <div className="mt-4 flex gap-1" aria-hidden="true">
              {Array.from({ length: SEGMENTS }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scaleY: 0.3 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.025, duration: 0.3 }}
                  className={`h-7 flex-1 origin-bottom rounded-[3px] ${
                    i < filled ? "bg-pine" : "bg-graphite-300/25"
                  }`}
                />
              ))}
            </div>
          </div>
          </div>
        </motion.div>

        <div>
          <p className="eyebrow mb-5">Relevant coursework</p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-plate border border-rule-soft bg-rule-soft sm:grid-cols-2">
            {education.coursework.map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.045 }}
                className="group bg-paper-raised px-5 py-4 transition-colors duration-500 ease-fluid hover:bg-pine-wash"
              >
                <span className="font-mono text-[10px] text-clay/70 transition-colors duration-500 ease-fluid group-hover:text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm text-graphite-700 transition-colors duration-500 ease-fluid group-hover:text-pine-deep">
                  {course}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
