import React from "react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-rule py-10 pb-28 md:pb-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] text-graphite-400">
          © {new Date().getFullYear()} {profile.name} · Built with React, Vite and Tailwind
        </p>
        <a
          href="#top"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite-500 transition-colors duration-500 ease-fluid hover:text-clay"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
