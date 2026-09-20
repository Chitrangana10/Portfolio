import React from "react";
import { motion } from "motion/react";
import { capabilities } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Capabilities() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <SectionHeading
        index="03"
        label="Stack"
        title="What I reach for."
        note="Ordered by how often it ends up in a terminal window, not by how it looks on a résumé."
      />

      <div className="ruled border-y border-rule">
        {capabilities.map((row, index) => (
          <motion.div
            key={row.group}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group grid gap-4 py-7 transition-colors duration-500 ease-fluid md:grid-cols-[0.42fr_1.58fr] md:gap-10 md:hover:bg-paper-raised"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-clay">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-medium tracking-tight text-graphite-950">
                {row.group}
              </h3>
            </div>

            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {row.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm text-graphite-700 transition-colors duration-500 ease-fluid group-hover:text-graphite-950"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
