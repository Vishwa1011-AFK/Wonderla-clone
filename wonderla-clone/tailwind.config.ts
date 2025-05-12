// wonderla-clone/tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wonderla-bg': '#22304A',          // Dark section background
        'wonderla-icon-blue': '#334DCF',   // For SVG icons and some text
        'wonderla-btn-yellow': '#FAD504',  // Button background from new HTML
        // 'wonderla-btn-text': '#22304A', // Example if button text is the dark blue
      },
      fontFamily: {
        sans: ['var(--font-mulish)', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: { // For rounded-3xl, rounded-4xl if needed
        '3xl': '1.5rem', // 24px
        '4xl': '2rem',   // 32px
      }
    },
  },
  plugins: [],
};
export default config;