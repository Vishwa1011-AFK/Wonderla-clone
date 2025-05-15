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
        'wonderla-btn-yellow': '#FAD600',
        'wonderla-badge-purple': '#7471D9',
        'text-original': '#334DCF',
        'nav-text-gray': '#717D92',
        'nav-secondary-bg': '#22304A',
      },
      fontFamily: {
        sans: ['var(--font-mulish)'],
      },
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '3.125rem',
        '6xl': '3.75rem',
        'xl-cat': '1.25rem',
      },
      lineHeight: {
        'tightest': '1',
        'custom': '1.255',
        'tight': '1.25',
      },
      letterSpacing: {
        'custom-tighter': '-0.04em',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        't-26': '26px',
        't-22': '22px',
        'b-26': '26px',
        'b-22': '22px',
      },
      spacing: {
        'px': '1px',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '4.5': '1.125rem',
        '10': '2.5rem',
        '12': '3rem',
        '15': '3.75rem',
        '70': '17.5rem',
      },
      maxWidth: {
        '250': '250px',
      },
      minWidth: {
        '246': '246px',
      },
      height: {
        '105p': '105%',
      },
      aspectRatio: {
        '229/394': '229 / 394',
        '246/346': '246 / 346',
      },
      backgroundImage: {
        'ride-card-gradient-lg': 'linear-gradient(180deg, rgba(34,48,74,0) 34.08%, #22304A 100%)',
        'ride-card-gradient-default': 'linear-gradient(180deg, rgba(51,77,207,0) 42.94%, #334DCF 100%)',
        'ride-card-live-gradient': 'linear-gradient(180deg, rgba(245,245,245,0) 34.08%, rgba(34, 48, 74,1) 100%)',
      },
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        'nav-hr': '#E5E7EB', 
      }),
      zIndex: {
        '15': '15',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

export default config;
