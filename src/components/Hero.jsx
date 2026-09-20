import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, GithubLogo, LinkedinLogo, MapPin } from "@phosphor-icons/react";
import { profile, stats } from "../data/profile";
import ScrambleText from "./ScrambleText";
import TracePlate from "./TracePlate";
import MagneticLink from "./MagneticLink";

// Motion's reducedMotion="user" strips transforms but not filters, so the
// blur has to be dropped by hand when the user asked for less movement.
const makeRise = (soft) => (delay = 0) => ({
  hidden: { opacity: 0, y: 24, ...(soft ? {} : { filter: "blur(6px)" }) },
  visible: {
    opacity: 1,
    y: 0,
    ...(soft ? {} : { filter: "blur(0px)" }),
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export default function Hero() {
  const rise = makeRise(useReducedMotion());

  return (
    <section id="top" className="relative min-h-[100dvh] pb-24 pt-28 md:pt-36">
      <motion.div
        initial="hidden"
        animate="visible"
        className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-20"
      >
        <div>
          <motion.div variants={rise(0)} className="flex flex-wrap items-center gap-2.5">
            <span className="eyebrow">
              <MapPin size={11} weight="bold" className="text-pine" />
              {profile.location}
            </span>
            <span className="eyebrow">B.Tech ECE &apos;27</span>
          </motion.div>

          <motion.h1
            variants={rise(0.08)}
            className="mt-7 text-[13vw] font-semibold leading-[0.88] tracking-[-0.04em] text-graphite-950 sm:text-7xl lg:text-[5.5rem]"
          >
            Chitrangana
            <span className="block text-graphite-300">Laxkar</span>
          </motion.h1>

          <motion.p
            variants={rise(0.16)}
            className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-sm text-graphite-700"
          >
            <span className="text-graphite-400">builds</span>
            <ScrambleText words={profile.roleRotation} className="text-pine" />
          </motion.p>

          <motion.p
            variants={rise(0.24)}
            className="mt-6 max-w-[54ch] text-base leading-relaxed text-graphite-700"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={rise(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticLink href="#work" className="btn-solid btn-nib-host">
              See the work
              <span className="btn-nib" aria-hidden="true">
                <ArrowDown size={14} weight="bold" />
              </span>
            </MagneticLink>
            <MagneticLink href={profile.github} className="btn-outline btn-nib-host">
              <GithubLogo size={16} weight="fill" className="text-graphite-700" />
              {profile.githubHandle}
              <span className="btn-nib" aria-hidden="true">
                <ArrowUpRight size={13} weight="bold" />
              </span>
            </MagneticLink>
            <MagneticLink href={profile.linkedin} className="btn-outline btn-nib-host">
              <LinkedinLogo size={16} weight="fill" className="text-graphite-700" />
              LinkedIn
              <span className="btn-nib" aria-hidden="true">
                <ArrowUpRight size={13} weight="bold" />
              </span>
            </MagneticLink>
          </motion.div>
        </div>

        <motion.div variants={rise(0.4)} className="lg:pt-6">
          <TracePlate />
        </motion.div>
      </motion.div>

      <motion.dl
        initial="hidden"
        animate="visible"
        variants={rise(0.5)}
        className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-plate border border-rule-soft bg-rule-soft sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group bg-paper-raised/70 px-6 py-7 transition-colors duration-500 ease-fluid hover:bg-paper-raised"
          >
            <dd className="font-mono text-4xl tracking-tight text-graphite-950">
              {stat.value}
              <span className="text-lg text-graphite-300">{stat.unit}</span>
            </dd>
            <dt className="label mt-3 block max-w-[26ch] normal-case tracking-[0.02em] text-graphite-500">
              {stat.label}
            </dt>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
