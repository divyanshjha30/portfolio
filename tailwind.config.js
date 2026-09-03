/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08080A",
          2: "#0E0E11",
          3: "#16161A",
          4: "#1E1E24",
        },
        paper: {
          DEFAULT: "#F4F4F0",
          dim: "#B4B4BC",
          muted: "#7C7C86",
          faint: "#4A4A52",
        },
        accent: {
          DEFAULT: "#CBFF46",
          dim: "#9FCC2E",
        },
        iris: "#6E8BFF",
        line: "rgba(244,244,240,0.08)",
      },
      borderColor: {
        line: "rgba(244,244,240,0.08)",
      },
      fontFamily: {
        sans: [
          "Inter Tight",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
