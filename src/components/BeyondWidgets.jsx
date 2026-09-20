import React, { memo } from "react";
import { motion } from "motion/react";

// Three small perpetual-motion widgets. Each is memoized and self-contained so
// their loops never re-render the surrounding bento.
const spring = { type: "spring", stiffness: 90, damping: 16 };

export const Podium = memo(function Podium() {
  const bars = [
    { h: 36, label: "2" },
    { h: 58, label: "1" },
    { h: 28, label: "3" },
  ];

  return (
    <div className="flex items-end justify-center gap-2" aria-hidden="true">
      {bars.map((bar, i) => (
        <motion.div
          key={bar.label}
          style={{ height: bar.h }}
          initial={{ scaleY: 0.12 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 * i }}
          className={`w-10 origin-bottom rounded-t-md ${
            bar.label === "1" ? "bg-pine" : "bg-graphite-300/55"
          }`}
        >
          <motion.span
            animate={bar.label === "1" ? { y: [0, -4, 0] } : undefined}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="block pt-2 text-center font-mono text-[10px] text-paper"
          >
            {bar.label === "1" ? "1" : ""}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
});

export const Wave = memo(function Wave() {
  const bars = [10, 22, 34, 26, 16, 30, 40, 24, 12, 26, 18, 32];

  return (
    <div className="flex h-14 items-center justify-center gap-1.5" aria-hidden="true">
      {bars.map((height, i) => (
        <motion.span
          key={i}
          animate={{ scaleY: [0.35, 1, 0.5, 0.85, 0.35] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.09,
          }}
          style={{ height }}
          className="w-1 origin-center rounded-full bg-pine/75"
        />
      ))}
    </div>
  );
});

export const Constellation = memo(function Constellation() {
  const dots = Array.from({ length: 16 });

  return (
    <div className="grid grid-cols-4 gap-2.5" aria-hidden="true">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.18, 0.9, 0.18] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 5) * 0.4,
          }}
          className="h-1.5 w-1.5 rounded-full bg-clay/85"
        />
      ))}
    </div>
  );
});
