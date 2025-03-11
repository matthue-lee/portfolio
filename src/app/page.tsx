"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Magic Mirror",
    slug: "magic-mirror",
    description:
      "An innovative smart mirror system that combines modern design with real-time updates on weather, calendar events, and more.",
    tags: ["Smart Technology", "Real-Time Updates", "Elegant Design"],
    images: ["/images/coloredMirror.jpg"],
  },
  {
    title: "A Perfect Queue",
    slug: "a-perfect-queue",
    description:
      "An intuitive playlist creation tool that allows users to effortlessly generate playlists from their recently queued songs.",
    tags: ["Playlist Creation", "User-Friendly", "Music Integration"],
    images: ["/images/a perfect queue home.jpeg"],
  },
  {
    title: "Responsive Website",
    slug: "responsive-website",
    description:
      "A website designed to offer a seamless user experience across devices, adapting dynamically to mobile, tablet, and desktop layouts.",
    tags: ["Responsive Design", "Dynamic Layouts", "Cross-Device Compatibility"],
    images: ["/images/responsive comparison.png"],
  },
  {
    title: "Underactuated Gripper",
    slug: "gripper",
    description:
      "A cutting-edge robotic gripper that mimics human dexterity to securely grasp objects of various shapes and sizes with minimal actuation.",
    tags: ["Robotics", "Human-Like Dexterity", "Innovative Design"],
    images: [
      "/images/gripper-(4).png",
    ],
  },
  {
    title: "Library Tracker",
    slug: "library-tracker",
    description:
      "A streamlined library management system that enables users to track borrowed books, due dates, and availability with ease.",
    tags: ["Library Management", "Easy Tracking", "User-Friendly"],
    images: [
      "https://images.unsplash.com/photo-1498116535454-8877d66c3b83?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

export default function LandingPage() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen w-full">
      {/* Intro / About Section */}
      <section className="px-4 md:px-8 lg:px-12 pt-8">
        <h1 className="text-gray-800 text-6xl lg:text-8xl font-extrabold leading-tight text-center">
          MATTHEW LEE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-stretch">
          <div className="flex flex-col justify-between">
            <p className="text-lg lg:text-3xl text-gray-700">
              A dedicated and passionate individual with a strong interest in
              technology and innovation. I thrive in dynamic environments where
              I can apply my skills to solve complex problems and contribute to
              meaningful projects.
            </p>
            <div className="mt-12 lg:mt-auto">
              <Image
                src="/images/coloredMirror.jpg"
                alt="Design Work"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="flex items-end">
            <Image
              src="/images/about.jpg"
              alt="Your Image"
              width={600}
              height={800}
              className="rounded-xl object-cover shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-100 w-full">
        <div className="text-center px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-gray-800">Explore My Work</h2>
          <p className="mt-4 text-lg text-gray-600 lg:mb-16">
            With a blend of technical expertise and hands-on experience,
            <br />
            I enjoy tackling new challenges and continuously growing as both a
            developer and a team player.
          </p>
        </div>

        {/* Full-width grid with small horizontal padding */}
        <div className="px-2 md:px-4 lg:px-6">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
              md:gap-6
              lg:gap-8
              w-full
            "
          >
            {projects.map((project, index) => {
              const isFullWidth = index % 3 === 0;
              return (
                <Link
                  key={project.slug}
                  href={`/${project.slug}`}
                  className={`relative overflow-hidden rounded-lg shadow-lg aspect-[16/9] 
                    transition-transform duration-300 hover:scale-105
                    ${isFullWidth ? "md:col-span-2" : ""}
                  `}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex items-center justify-center text-white p-4 transition duration-300">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-sm">{project.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
