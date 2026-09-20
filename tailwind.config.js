/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bricolage Grotesque", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        // Warm bone paper in four depths, one warm-neutral ink family, a cool
        // pine for live/system state and a clay for editorial ornament only.
        paper: {
          DEFAULT: "#f2efe9",
          raised: "#faf8f4",
          shell: "#e9e5dc", // the tray a core sits in
          sunk: "#e4dfd5",
          deep: "#d8d2c6",
        },
        graphite: {
          950: "#191714",
          900: "#221e19",
          700: "#453e37",
          // 500/400 are the two metadata greys; both clear 4.5:1 on paper and
          // on cores. 300 is display-only (large type, rules, disabled marks).
          500: "#655c53",
          400: "#6e655b",
          300: "#8c8378",
        },
        pine: {
          DEFAULT: "#1d6a57",
          soft: "#2e8b72",
          wash: "#e1eae4",
          deep: "#10382e",
        },
        clay: {
          DEFAULT: "#a85433",
          soft: "#c2703f",
          wash: "#f1e5dc",
        },
        rule: "rgba(25, 23, 20, 0.12)",
        "rule-soft": "rgba(25, 23, 20, 0.07)",
      },
      borderRadius: {
        plate: "1.75rem",
        // concentric with plate at p-1.5 (0.375rem)
        core: "1.375rem",
        nest: "1.125rem",
      },
      boxShadow: {
        // ambient and warm-tinted — never a hard black drop
        plate:
          "0 1px 1px rgba(25,23,20,0.03), 0 10px 20px -14px rgba(25,23,20,0.18), 0 34px 60px -34px rgba(25,23,20,0.30)",
        float:
          "0 2px 4px -2px rgba(25,23,20,0.06), 0 16px 32px -20px rgba(25,23,20,0.22), 0 48px 80px -48px rgba(25,23,20,0.34)",
        core: "inset 0 1px 0 0 rgba(255,255,255,0.85), 0 1px 2px -1px rgba(25,23,20,0.06)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.8)",
        well: "inset 0 1px 3px 0 rgba(25,23,20,0.06)",
        lift: "0 2px 0 0 rgba(25,23,20,0.06)",
      },
      transitionTimingFunction: {
        fluid: "cubic-bezier(0.32, 0.72, 0, 1)",
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
        swift: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
        dash: {
          to: { strokeDashoffset: "-24" },
        },
        caret: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.06)" },
        },
      },
      animation: {
        breathe: "breathe 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        dash: "dash 1.1s linear infinite",
        caret: "caret 1.05s steps(1) infinite",
        drift: "drift 22s cubic-bezier(0.44, 0, 0.56, 1) infinite",
      },
    },
  },
  plugins: [],
};
