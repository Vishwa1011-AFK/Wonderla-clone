import type { Metadata } from "next";
import { Mulish } from "next/font/google"; 
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-mulish',
  weight: ['400', '700', '800', '900'] 
});

export const metadata: Metadata = {
  title: "Wonderla Rides Clone",
  description: "Frontend assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} font-sans antialiased bg-wonderla-bg`}>
        {children}
      </body>
    </html>
  );
}