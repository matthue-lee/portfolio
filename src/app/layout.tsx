import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Navbar from './components/Navbar'
import { Analytics } from '@vercel/analytics/next';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Porfotlio | Matthew Lee",
  description: "Welcome to Matthew Lee's portfolio. I am a passionate engineer specializing in web development, smart technologies, and ML/AI. Explore my projects and skills that bridge the gap between engineering and software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black-900`}
      >
          <meta property="og:title" content="Matthew Lee | Full-Stack Developer & Innovator" />
          <meta property="og:description" content="Explore Matthew Lee's portfolio, showcasing expertise in full-stack development, responsive design, and innovative web technologies." />
          <meta property="og:image" content="https://www.matthewleeportfolio.com/images/main3.jpeg" />
          <meta property="og:url" content="https://www.matthewleeportfolio.com" />
          <meta property="og:site_name" content="Matthew Lee Portfolio" />
          <meta property="og:type" content="website" />
        <Navbar/>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
