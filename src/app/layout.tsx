import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Navbar from './components/Navbar'

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
  title: "Matthew Web Developer Consultant Engineer",
  description: "Welcome to Matthew Lee's portfolio. I am a passionate full-stack developer specializing in responsive design, smart technologies, and innovative web solutions. Explore my projects in web development, robotics, and smart systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
          <meta property="og:title" content="Matthew Lee | Full-Stack Developer & Innovator" />
          <meta property="og:description" content="Explore Matthew Lee's portfolio, showcasing expertise in full-stack development, responsive design, and innovative web technologies." />
          <meta property="og:image" content="https://www.matthewleeportfolio.com/images/main3.jpeg" />
          <meta property="og:url" content="https://www.matthewleeportfolio.com" />
          <meta property="og:site_name" content="Matthew Lee Portfolio" />
          <meta property="og:type" content="website" />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
