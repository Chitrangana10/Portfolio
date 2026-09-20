/* eslint-disable react/prop-types */
import React from "react";
import { motion, useReducedMotion } from "motion/react";

// Left-aligned heading: a pill eyebrow carrying the section index, then a rule
// that draws itself into view under the whole row.
export default function SectionHeading({ index, label, title, note }) {
  // Motion's reducedMotion="user" strips transforms but not filters.
  const soft = useReducedMotion();
  const blurIn = soft ? {} : { filter: "blur(5px)" };
  const blurOut = soft ? {} : { filter: "blur(0px)" };

  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-center gap-4">
        <span className="eyebrow">
          <span className="font-medium text-clay">{index}</span>
          <span className="h-2.5 w-px bg-rule" aria-hidden="true" />
          {label}
        </span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px flex-1 origin-left bg-gradient-to-r from-rule to-transparent"
        />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 20, ...blurIn }}
          whileInView={{ opacity: 1, y: 0, ...blurOut }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-semibold leading-[1.05] tracking-tight text-graphite-950 md:text-5xl"
        >
          {title}
        </motion.h2>
        {note ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[46ch] text-sm leading-relaxed text-graphite-500 md:pb-2"
          >
            {note}
          </motion.p>
        ) : null}
      </div>
    </header>
  );
}
