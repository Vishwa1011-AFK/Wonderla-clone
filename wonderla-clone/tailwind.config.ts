// tailwind.config.ts
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
        'wonderla-bg': '#22304A',
        'wonderla-icon-blue': '#334DCF',
      },
      fontFamily: {
        sans: ['var(--font-mulish)', 'ui-sans-serif', 'system-ui'],

      },
    },
  },
  plugins: [
  ],
};
export default config;