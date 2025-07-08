'use client'
import React from 'react';
import Image from 'next/image';


export default function MagicMirrorPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black py-16">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-200 leading-tight">
            Lumora and Lamina OS
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-200">
            A sleek and innovative smart mirror system that integrates modern
            design with real-time functionality, making your day smarter and more efficient.
          </p>
        </div>
        <div className="mt-12 w-full relative aspect-w-16 aspect-h-9">
          <Image
            src="/images/mobile signup mockup.png"
            alt="Magic Mirror Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Tech Stack & About Section Side by Side */}
      <section className="px-4 md:px-8 lg:px-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Tech Stack + Image */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-200 mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 text-sm text-gray-300 mb-8">
              {["Next.js","React","TypeScript","Tailwind CSS","Framer Motion","Supabase","Firebase","MongoDB","Node.js","Python","OpenAI API","Vercel"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-gray-600 rounded-full hover:bg-gray-800 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/mobile signup mockup.png"
                alt="Mobile Signup Mockup"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          </div>
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-200 mb-6">About Lumora</h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Lumora is the hardware and software platform that powers the smart mirror. Built using Electron, React, and Node.js, it provides a seamless user experience with real-time updates on weather, calendar events, and news.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              I created a custom OS, Lamina OS, allowing the mirror to function independently. My first foray into creating an operating system, I worked off a fork of the open-source project MagicMirror, which is a popular platform for building smart mirrors. Lamina OS is designed to be lightweight and efficient, ensuring that the mirror operates smoothly while providing essential features like weather updates, calendar synchronization, and customizable widgets. Where I believe my new OS really shines, is through the Authentication module. With a QR code based auth flow, it allows a user to authenticate their mirror, and securely link accounts via the Personalisation Engine. 
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              The Personalisation Engine is a key feature of Lumora. A Next.JS web app, it allows users to securely link and manage various aspects of their mirror. Integrations with services such as Outlook, Gmail, Google Calendar, Spotify and more are available. 
            </p>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-gray-200 text-center lg:text-left">
            Key Features
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-gray-200">
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Real-time weather updates integrated through OpenWeather API.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Calendar synchronization for daily event tracking.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Customizable widgets for news, clock, and more.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Encrypted and secure OAuth flows, including external sources like Google and Outlook</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Custom OS with QR-Code based Auth Flow</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Secure session management and RESTful API&apos;s</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-gray-200 text-center lg:text-left">
            Gallery
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['coloredMirror.jpg', 'Bathroom render.png', 'first render.png', 'mockup desktop.png', 'mockup laptop.png'].map((img, index) => (
              <Image
                key={index}
                src={`/images/${img}`}
                alt={`Magic Mirror View ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg object-cover shadow-md"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
