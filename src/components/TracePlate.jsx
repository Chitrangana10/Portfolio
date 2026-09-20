import React, { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// The hero's live widget: a request trace that replays forever, so the page has
// one thing in it that is visibly running. Its own component, its own timer.
const TRACE = [
  { method: "POST", path: "/query", note: "statute lookup", ms: 12 },
  { method: "VEC", path: "faiss.search", note: "top-k 24", ms: 41 },
  { method: "BM25", path: "keyword.scan", note: "top-k 24", ms: 18 },
  { method: "RRF", path: "fuse.rank", note: "merged 31", ms: 3 },
  { method: "LLM", path: "gemini.answer", note: "4 citations", ms: 806 },
];

function TracePlate() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStep(TRACE.length);
      return undefined;
    }

    const id = window.setInterval(() => {
      setStep((current) => (current >= TRACE.length ? 1 : current + 1));
    }, 1100);

    return () => window.clearInterval(id);
  }, []);

  const done = step === TRACE.length;
  const elapsed = TRACE.slice(0, step).reduce((total, row) => total + row.ms, 0);

  return (
    <div className="shell">
      <div className="core overflow-hidden">
      <div className="flex items-center justify-between border-b border-rule-soft px-5 py-3.5">
        <span className="label">trace · legal-rag</span>
        <span className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              done ? "bg-pine" : "bg-pine animate-breathe"
            }`}
          />
          <span className="font-mono text-[11px] text-graphite-500">
            {done ? "200 OK" : "running"}
          </span>
        </span>
      </div>

      <ul className="ruled px-5 py-1.5">
        {TRACE.map((row, i) => {
          const state = i < step ? "done" : "idle";
          return (
            <li
              key={row.path}
              className={`flex items-center gap-3 py-2.5 transition-opacity duration-500 ${
                state === "done" ? "opacity-100" : "opacity-20"
              }`}
            >
              <span className="w-12 shrink-0 font-mono text-[10px] uppercase tracking-wider text-clay">
                {row.method}
              </span>
              <span className="min-w-0 flex-1 truncate font-mono text-xs text-graphite-900">
                {row.path}
              </span>
              <span className="hidden shrink-0 text-[11px] text-graphite-400 sm:block">
                {row.note}
              </span>
              <span className="w-12 shrink-0 text-right font-mono text-[11px] text-graphite-500">
                {state === "done" ? `${row.ms}ms` : "—"}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-between border-t border-rule-soft bg-paper-sunk/50 px-5 py-3">
        <span className="font-mono text-[11px] text-graphite-500">total</span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={elapsed}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="font-mono text-sm tracking-tight text-graphite-950"
          >
            {elapsed}ms
          </motion.span>
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
}

export default memo(TracePlate);
