import React from "react";
import { motion } from "motion/react";
import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <SectionHeading
        index="02"
        label="Experience"
        title="Ten weeks inside a platform with 3000+ AI tools."
        note="Production triage on someone else's codebase — reading unfamiliar systems fast, then leaving them measurably steadier."
      />

      <div className="ruled border-t border-rule">
        {experience.map((role) => (
          <motion.div
            key={role.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 py-10 md:grid-cols-[0.65fr_1.35fr] md:gap-16"
          >
            <div>
              <p className="label">{role.period}</p>
              <p className="mt-3 text-lg font-medium tracking-tight text-graphite-950">
                {role.company}
              </p>
              <p className="mt-1 text-sm text-graphite-500">{role.mode}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight text-graphite-950 md:text-2xl">
                {role.role}
              </h3>
              <ul className="mt-5 space-y-3">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-graphite-700"
                  >
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-pine/70" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {role.stack.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
