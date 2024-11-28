'use client';

import Image from 'next/image';
import Link from 'next/link'

const projects = [
  {
    title: "Magic Mirror",
    slug: "magic-mirror",
    description:
      "An innovative smart mirror system that combines modern design with functionality, providing real-time updates on weather, calendar events, and more.",
    tags: ["Smart Technology", "Real-Time Updates", "Elegant Design"],
    images: [
      "https://images.unsplash.com/photo-1700556581902-6aa21e96507c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Magic Mirror concept
      "https://images.unsplash.com/photo-1662958882371-9b3c5d9a0c25?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Smart home integration
    ],
  },
  {
    title: "Underactuated Gripper",
    slug: "gripper",
    description:
      "A cutting-edge robotic gripper that mimics human dexterity to securely grasp objects of various shapes and sizes with minimal actuation.",
    tags: ["Robotics", "Human-Like Dexterity", "Innovative Design"],
    images: [
      "https://images.unsplash.com/photo-1471584363844-b3909b58d6f7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Robotic arm close-up
      "https://images.unsplash.com/photo-1545660190-750cfd47fdde?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Precision gripping
    ],
  },
  {
    title: "Library Tracker",
    slug: "library-tracker",
    description:
      "A streamlined library management system that enables users to track borrowed books, due dates, and availability with ease.",
    tags: ["Library Management", "Easy Tracking", "User-Friendly"],
    images: [
      "https://images.unsplash.com/photo-1498116535454-8877d66c3b83?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Organized library shelves
      "https://images.unsplash.com/photo-1498605493985-d7d7593f905b?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Digital catalog interface
    ],
  },
  {
    title: "BudgetNav",
    slug: "budget-nav",
    description:
      "A personal finance tool that empowers users to allocate budgets, track expenses, and gain insights into their spending habits.",
    tags: ["Personal Finance", "Expense Tracking", "Budget Management"],
    images: [
      "https://images.unsplash.com/photo-1696673147643-28cdb0d8d11c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Budget tracking interface
      "https://images.unsplash.com/photo-1694819893189-10ce0b1cd6d7?q=80&w=2876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Analytics dashboard
    ],
  },
];



export default function LandingPage() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">


      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title Spanning Both Columns */}
        <h1 className="text-gray-600 text-6xl lg:text-8xl font-extrabold leading-tight text-justify">
          MATTHEW LEE
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-stretch">
          {/* Left Column: Body Text + Small Image */}
          <div className="flex flex-col justify-between h-full">
            {/* Body Text */}
            <div>
              <p className="text-xlg lg:text-3xl text-gray-700">
                A dedicated and passionate individual with a strong interest in
                technology and innovation. I thrive in dynamic environments
                where I can apply my skills to solve complex problems and
                contribute to meaningful projects.
              </p>
            </div>

            {/* Full-Space Image */}
            <div className="mt-12 lg:mt-auto">
              <Image
                src="/images/coloredMirror.jpg" // Replace with your image path
                alt="Design Work"
                layout="intrinsic"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Right Column: Large Image */}
          <div className="flex items-end h-full">
            <Image
              src="/images/about.jpg" // Replace with your image path
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
      <br/>I enjoy
      tackling new challenges and continuously growing as both a developer and
      a team player.
    </p>
  </div>

  <div className="mt-12 grid grid-cols-1 gap-10 container mx-auto">
    {projects.map((project, index) => (
      <div
        key={index}
        className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center border shadow-sm rounded-xl p-6 ${
          index % 5 === 0
            ? "bg-[#DEE7EC]" // Muted version of dark teal
            : index % 5 === 1
            ? "bg-[#D1E7E0]" // Muted teal
            : index % 5 === 2
            ? "bg-[#F6E6C8]" // Muted yellow
            : index % 5 === 3
            ? "bg-[#FAD5C6]" // Muted orange
            : "bg-[#F4B7A7]" // Muted red
        }`}
      >
        {/* Left Content: Title, Description, Tags, and Link */}
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
          <Link href={`/${project.slug}`}>
            <button className="mt-6 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-400">
              View Project &rarr;
            </button>
          </Link>
        </div>

        {/* Right Content: Images */}
        <div className="flex flex-col space-y-4">
          {project.images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${project.title} image ${idx + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}
