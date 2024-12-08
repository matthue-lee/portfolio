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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
