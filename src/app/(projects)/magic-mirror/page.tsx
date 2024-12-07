import React from 'react';
import Image from 'next/image';

export default function MagicMirrorPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Magic Mirror
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            A sleek and innovative smart mirror system that integrates modern
            design with real-time functionality, making your day smarter and more efficient.
          </p>
        </div>
        <div className="mt-12 w-full relative aspect-w-16 aspect-h-9">
          <Image
            src="/images/magic-mirror.jpg" // Replace with your image path
            alt="Magic Mirror Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center lg:text-left">
            About the Magic Mirror
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            The Magic Mirror is a smart device that not only acts as a traditional mirror but
            also provides real-time updates on weather, calendar events, and news. This project
            was developed using technologies like Raspberry Pi, Next.js, and APIs to integrate
            multiple services into one seamless interface.
          </p>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            The minimalist design ensures it fits into any modern home, while its functionality
            is tailored to make everyday routines simpler and smarter.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center lg:text-left">
            Key Features
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-gray-600">
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

          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center lg:text-left">
            Gallery
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Image
              src="/images/coloredMirror.jpg" // Replace with your image paths
              alt="Magic Mirror View 1"
              width={400}
              height={300}
              className="rounded-lg object-cover shadow-md"
            />
            {/* <Image
              src="/images/mm1.jpeg"
              alt="Magic Mirror View 2"
              width={400}
              height={300}
              className="rounded-lg object-cover shadow-md"
            /> */}

          </div>
        </div>
      </section>
    </main>
  );
}
