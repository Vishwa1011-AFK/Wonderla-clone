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
        'wonderla-bg': '#22304A',
        'wonderla-icon-blue': '#334DCF',
        'wonderla-btn-yellow': '#FAD504',
        'wonderla-badge-purple': '#7471D9',
      },
      fontFamily: {
        sans: ['var(--font-mulish)', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '3.125rem',
        '6xl': '3.75rem',
        'xl-cat': '1.25rem',
      },
      lineHeight: {
        'tightest': '1',      // Class: leading-tightest
        'custom': '1.255',  // Class: leading-custom
      },
      letterSpacing: {
        'custom-tighter': '-0.04em', // Class: tracking-custom-tighter
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;