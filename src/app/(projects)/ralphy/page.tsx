'use client'
import React from 'react';
import Image from 'next/image';

export default function RalphyPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black py-16">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-200 leading-tight">
            Ralphy
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-200">
            A full-stack campaign and reward platform built for brands and creators to collaborate,
            with QR code receipts, Supabase Edge Functions, and custom analytics dashboards.
          </p>
        </div>
        <div className="mt-12 w-full relative aspect-w-16 aspect-h-9">
          <Image
            src="/images/ralphy schema.png"
            alt="Ralphy Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Tech Stack & About Section */}
      <section className="px-4 md:px-8 lg:px-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-200 mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 text-sm text-gray-300 mb-8">
              {[
                'Next.js','React','TypeScript','Tailwind CSS','Supabase','Edge Functions','PostgreSQL',
                'Vercel','shadcn/ui','Recharts','Node.js'
              ].map((tech) => (
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
                src="/images/ralphy mock 2.png"
                alt="Ralphy Dashboard"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-200 mb-6">About Ralphy</h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Ralphy is a creator reward system where brands launch campaigns and users upload
              receipts to enter giveaways. Built as a modern marketing alternative to influencer tracking,
              it features campaign management, and secure user authentication.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              One challenge faced while building this platform was the database design. I chose to work with POSTGreSQL, via a Supabase hosted backend.
              Defining the relations between campaigns, receipts, and users was crucial to ensure that each receipt could be linked to the correct campaign and user.
              This involved creating a robust schema that could handle complex queries and relationships, while also ensuring data integrity and security.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
                The platform also includes a dynamic dashboard for campaign management, built with shadcn/ui components, allowing brands to filter and view campaigns easily.
                The admin view features signed URL generation for secure receipt previews, ensuring that sensitive data is protected while still accessible to authorized users.
            </p>            
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-gray-200 text-center lg:text-left">
            Key Features
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-gray-200">
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Dynamic dashboard with campaign filtering and modals via shadcn/ui.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Signed URL generation for secure receipt preview in admin view.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Automatic linking of receipt entries to campaigns using creator codes.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Pagination-ready API design and filtering via PostgreSQL views.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Custom CORS headers and RLS policies for secure data access.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['ralphy 1.png', 'ralphy 3.png', 'ralphy 4.png', 'ralphy mock 1.png', 'ralphy schema.png'].map((img, index) => {
              const isSchema = img === 'ralphy schema.png';
              return (
                <div
                  key={index}
                  className={isSchema ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}
                >
                  <Image
                    src={`/images/${img}`}
                    alt={`Ralphy Screenshot ${index + 1}`}
                    width={isSchema ? 900 : 400}
                    height={isSchema ? 600 : 300}
                    className={`rounded-lg object-cover shadow-md ${isSchema ? 'w-full h-auto' : ''}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}