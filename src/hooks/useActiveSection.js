import { useEffect, useState } from "react";

// Tracks which section owns the upper third of the viewport. IntersectionObserver
// only — no scroll listeners, so this never blocks the main thread.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.intersectionRatio);
        });

        let best = null;
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });

        if (best && bestRatio > 0) setActive(best);
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
