/* eslint-disable react/prop-types */
import React, { memo, useEffect, useRef, useState } from "react";

const GLYPHS = "abcdefghijklmnopqrstuvwxyz/\\_-*<>";

// Perpetual decode effect, isolated so the surrounding layout never re-renders.
// Drives one rAF loop and tears it down on unmount.
function ScrambleText({ words, interval = 2600, className = "" }) {
  const [text, setText] = useState(words[0]);
  const frame = useRef(0);
  const raf = useRef(0);
  const timer = useRef(0);
  const index = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || words.length < 2) return undefined;

    const scrambleTo = (target) => {
      const from = words[index.current];
      const length = Math.max(from.length, target.length);
      frame.current = 0;

      const tick = () => {
        const progress = frame.current / 18;
        let out = "";

        for (let i = 0; i < length; i += 1) {
          if (i < progress * length) {
            out += target[i] ?? "";
          } else {
            out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }

        setText(out);
        frame.current += 1;

        if (frame.current <= 18) {
          raf.current = requestAnimationFrame(tick);
        } else {
          setText(target);
        }
      };

      raf.current = requestAnimationFrame(tick);
    };

    const cycle = () => {
      const next = (index.current + 1) % words.length;
      scrambleTo(words[next]);
      index.current = next;
      timer.current = window.setTimeout(cycle, interval);
    };

    timer.current = window.setTimeout(cycle, interval);

    return () => {
      window.clearTimeout(timer.current);
      cancelAnimationFrame(raf.current);
    };
  }, [words, interval]);

  return (
    <span className={className}>
      {text}
      <span aria-hidden="true" className="ml-0.5 inline-block animate-caret text-pine">
        _
      </span>
    </span>
  );
}

export default memo(ScrambleText);
