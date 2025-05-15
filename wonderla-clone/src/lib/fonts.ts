import { Mulish } from 'next/font/google';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: 'swap',
  variable: '--font-mulish',
});

export { mulish };