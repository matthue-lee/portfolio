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
  title: "Portfolio | Matthew Lee",
  description: "Welcome to my portfolio. I am a passionate engineer specializing in web development, smart technologies, and ML/AI. Explore my projects and skills that bridge the gap between engineering and software development.",
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
          <meta property="og:title" content="Portfolio | Matthew Lee" />
          <meta property="og:description" content="Welcome to my portfolio. I am a passionate engineer specializing in web development, smart technologies, and ML/AI. Explore my projects and skills that bridge the gap between engineering and software development." />
          <meta property="og:image" content="https://www.matthew-rc-lee.com/images/main3.jpeg" />
          <meta property="og:url" content="https://www.matthew-rc-lee.com" />
          <meta property="og:site_name" content="Portfolio | Matthew Lee" />
          <meta property="og:type" content="website" />
        <Navbar/>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
