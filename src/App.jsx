import React from "react";
import { MotionConfig } from "motion/react";
import Dock from "./components/Dock";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import Education from "./components/Education";
import Beyond from "./components/Beyond";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-[100dvh] bg-paper text-graphite-700 antialiased selection:bg-pine selection:text-paper">
        <a
          href="#main"
          className="btn-solid fixed left-4 top-4 z-50 -translate-y-24 focus:translate-y-0"
        >
          Skip to content
        </a>

        <div aria-hidden="true" className="aura" />
        <div aria-hidden="true" className="blueprint" />
        <div aria-hidden="true" className="grain" />

        <Dock />

        <main id="main" tabIndex={-1} className="relative z-10 outline-none">
          <div className="mx-auto max-w-[1180px] px-5 md:px-10">
            <Hero />
            <Projects />
            <Experience />
            <Capabilities />
            <Education />
            <Beyond />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </MotionConfig>
  );
}
