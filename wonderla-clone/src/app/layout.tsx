import "./globals.css";
import { mulish } from '../lib/fonts';
import Header from "@/components/Header"; 

export const metadata = {
  title: "Wonderla Clone - Single Page",
  description: "A single-page clone of Wonderla Parks & Resort website section",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-hidden"> 
      <body className={`${mulish.className} bg-wonderla-bg text-white h-full flex flex-col overflow-hidden`}>
        <Header />
        <main className="flex-grow overflow-hidden"> 
          {children}
        </main>
      </body>
    </html>
  );
}