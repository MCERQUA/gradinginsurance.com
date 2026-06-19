import type { Config } from "tailwindcss";

/* ============================================================
   GRADING INSURANCE — "Steel & Amber" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to industrial steel-slate (primary) /
   muted olive-grey (secondary) / safety amber (accent).
   clay = steel slate · sage = olive grey · gold = safety amber
   cream = warm paper · sand = soft sand
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        sand: "#EEE6D9",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#3A4A5C",
          dark: "#283543",
          light: "#56697E",
          50: "#EEF1F5",
          100: "#D6DEE7",
          200: "#AEBDD0",
          300: "#8295AE",
          400: "#56697E",
          500: "#3A4A5C",
          600: "#283543",
          700: "#1C2630",
          800: "#131A21",
          900: "#0B0F13",
        },
        sage: {
          DEFAULT: "#6E7B66",
          dark: "#525D4B",
          light: "#8C9982",
          50: "#F0F2ED",
          100: "#DDE3D6",
          200: "#BBC6B0",
          300: "#99A88B",
          400: "#7E8B73",
          500: "#6E7B66",
          600: "#525D4B",
          700: "#3F4839",
        },
        gold: {
          DEFAULT: "#C8842B",
          dark: "#9E661D",
          light: "#E0A657",
          50: "#FAF1E5",
          100: "#F4E2C6",
          200: "#EBC78E",
          300: "#DDA85A",
          400: "#C8842B",
          500: "#A36A1C",
          600: "#7E5111",
        },
        espresso: "#241F1A",
        cocoa: "#463E35",
        mocha: "#6B5D4F",
        adobe: "#E3D9C8",
        adobeDark: "#CFC1A8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FAF7F2 0%, #F3EBDE 40%, #EEE6D9 70%, #FAF7F2 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(58,74,92,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(110,123,102,0.10) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #3A4A5C 0%, #56697E 100%)",
        "sage-gradient": "linear-gradient(135deg, #6E7B66 0%, #8C9982 100%)",
        "gold-gradient": "linear-gradient(135deg, #C8842B 0%, #E0A657 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(40, 53, 67, 0.22), 0 4px 12px -6px rgba(36, 31, 26, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(40, 53, 67, 0.28), 0 10px 30px -10px rgba(36, 31, 26, 0.10)",
        card: "0 2px 8px -2px rgba(36, 31, 26, 0.06), 0 1px 3px -1px rgba(36, 31, 26, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(40, 53, 67, 0.24), 0 8px 20px -8px rgba(36, 31, 26, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(40, 53, 67, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
