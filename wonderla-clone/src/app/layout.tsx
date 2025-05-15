import "./globals.css";
import { mulish } from '../lib/fonts';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wonderla Clone",
  description: "A clone of Wonderla Parks & Resort website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className} bg-wonderla-bg text-white`}>
        {children}
      </body>
    </html>
  );
}