'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Magic Mirror",
    slug: "magic-mirror",
    description:
      "An innovative smart mirror system that combines modern design with functionality, providing real-time updates on weather, calendar events, and more.",
    tags: ["Smart Technology", "Real-Time Updates", "Elegant Design"],
    images: [
      "/images/coloredMirror.jpg"
    ],
  },
  {
    title: "A Perfect Queue",
    slug: "a-perfect-queue",
    description:
      "An intuitive playlist creation tool that allows users to effortlessly generate playlists from their recently queued songs. Designed with a sleek interface and seamless integration with music APIs.",
    tags: ["Playlist Creation", "User-Friendly", "Music Integration"],
    images: ["/images/a perfect queue home.jpeg"],
  },
  {
    title: "Responsive Website",
    slug: "responsive-website",
    description:
      "A website designed to offer a seamless user experience across devices, adapting dynamically to mobile, tablet, and desktop layouts.",
    tags: ["Responsive Design", "Dynamic Layouts", "Cross-Device Compatibility"],
    images: [
      "/images/responsive comparison.png"
    ],
  },
  {
    title: "Underactuated Gripper",
    slug: "gripper",
    description:
      "A cutting-edge robotic gripper that mimics human dexterity to securely grasp objects of various shapes and sizes with minimal actuation.",
    tags: ["Robotics", "Human-Like Dexterity", "Innovative Design"],
    images: [
      "https://images.unsplash.com/photo-1471584363844-b3909b58d6f7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const mutedPalette = [
    "rgba(204, 88, 3, 0.2)",  // Burnt Orange
    "rgba(226, 113, 29, 0.2)", // Rusty Orange
    "rgba(255, 149, 5, 0.2)",  // Deep Orange
    "rgba(255, 182, 39, 0.2)", // Bright Orange
    "rgba(255, 201, 113, 0.2)", // Light Yellow-Orange
  ];

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="text-gray-600 text-6xl lg:text-8xl font-extrabold leading-tight text-justify">
          MATTHEW LEE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-stretch">
          <div className="flex flex-col justify-between h-full">
            <p className="text-xlg lg:text-3xl text-gray-700">
              A dedicated and passionate individual with a strong interest in
              technology and innovation. I thrive in dynamic environments where
              I can apply my skills to solve complex problems and contribute to
              meaningful projects.
            </p>
            <div className="mt-12 lg:mt-auto">
              <Image
                src="/images/coloredMirror.jpg"
                alt="Design Work"
                layout="intrinsic"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="flex items-end h-full">
            <Image
              src="/images/about.jpg"
              alt="Your Image"
              layout="intrinsic"
              width={600}
              height={800}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 lg:mt-8">Explore my Work</h2>
          <p className="mt-4 text-lg text-gray-600 lg:mb-16">
            With a blend of technical expertise and hands-on experience, 
            <br />I enjoy tackling new challenges and continuously growing as both a developer and a team player.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 container mx-auto">
          {projects.map((project, index) => (
            <Link key={index} href={`/${project.slug}`} className="block">
              <div
                className={`relative grid md:grid-cols-2 items-center border shadow-sm rounded-xl p-6 sm:mx-2 transform transition-transform duration-300 hover:scale-105`}
                style={{ backgroundColor: mutedPalette[index % mutedPalette.length] }}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="mt-3 text-gray-600">{project.description}</p>
                  <ul className="mt-4 space-y-2">
                    {project.tags.map((tag, idx) => (
                      <li
                        key={idx}
                        className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} image`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
