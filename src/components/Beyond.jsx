import React from "react";
import { motion } from "motion/react";
import { beyond } from "../data/profile";
import { Constellation, Podium, Wave } from "./BeyondWidgets";

const WIDGETS = { podium: Podium, wave: Wave, grid: Constellation };

export default function Beyond() {
  const [lead, ...rest] = beyond;
  const LeadWidget = WIDGETS[lead.widget];

  return (
    <section className="pb-24 md:pb-32">
      <div className="flex items-center gap-4">
        <span className="eyebrow">
          <span className="font-medium text-clay">05</span>
          <span className="h-2.5 w-px bg-rule" aria-hidden="true" />
          Off the keyboard
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-rule to-transparent" />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-[1.35fr_1fr] md:gap-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="shell"
        >
          <div className="core flex h-full flex-col justify-between gap-10 p-7 md:p-9">
          <div>
            <p className="label">{lead.metricLabel}</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-graphite-950 md:text-3xl">
              {lead.title}
            </h3>
            <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-graphite-500">
              {lead.detail}
            </p>
          </div>

          <div className="flex items-end justify-between gap-8">
            <span className="font-mono text-5xl leading-none tracking-tight text-pine md:text-6xl">
              {lead.metric}
            </span>
            <LeadWidget />
          </div>
          </div>
        </motion.article>

        <div className="grid gap-5 md:gap-6">
          {rest.map((item, index) => {
            const Widget = WIDGETS[item.widget];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 * (index + 1),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="shell h-full"
              >
                <div className="core flex h-full items-center justify-between gap-6 p-7">
                <div>
                  <h3 className="text-base font-medium tracking-tight text-graphite-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-graphite-500">
                    {item.detail}
                  </p>
                </div>
                <div className="shrink-0">
                  <Widget />
                </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
