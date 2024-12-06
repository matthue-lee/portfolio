import Image from "next/image";
// new stuff
export default function ProjectPage() {
  return (
    <main className="flex flex-col items-center p-8 md:p-16 text-black">
      {/* Header Section */}
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold mt-2 mb-4 md:text-5xl text-black">
          A Perfect Queue - Project Overview
        </h1>
        <p className="text-gray-400 text-lg">
          Explore the design and development process behind &quot;A Perfect Queue,&quot; a project combining frontend interactivity and backend functionality to deliver a seamless playlist creation experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 w-full max-w-3xl">
        <Image
          src="/images/a perfect queue.jpeg" // Replace with your project image path
          alt="A Perfect Queue"
          width={1000}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-12 w-full max-w-3xl text-left">
        {/* Frontend Section */}
        <h2 className="text-2xl font-semibold mb-4">Frontend Skills Used</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Designed a responsive UI using modern CSS frameworks like TailwindCSS.</li>
          <li>Implemented typography and color styling to create a clean and professional aesthetic.</li>
          <li>Built interactive elements such as input fields and a glowing &quot;Create&quot; button with CSS transitions.</li>
          <li>Developed the interface with Next.js for fast, component-based development.</li>
          <li>Incorporated a dark theme for a sleek, modern look.</li>
        </ul>

        {/* Backend Section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Backend Skills Used</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Integrated backend logic with Node.js and Express to handle user inputs and data processing.</li>
          <li>Connected to external services (e.g., Spotify API) for playlist creation via RESTful APIs.</li>
          <li>Designed serverless functions for efficient backend operations, leveraging Next.js capabilities.</li>
        </ul>

        {/* Development Skills Section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Development Skills and Tools</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Used Git and GitHub for version control and collaborative development.</li>
          <li>Implemented animations and hover effects for an engaging user experience.</li>
          <li>Deployed the project on Vercel for fast and reliable hosting.</li>
        </ul>

        {/* Summary Section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Summary</h2>
        <p className="text-gray-600 leading-relaxed">
          &quot;A Perfect Queue&quot; demonstrates my ability to merge design and technical skills to create a highly interactive and functional web application. The project showcases expertise in frontend development (React/Next.js, TailwindCSS), backend development (Node.js, RESTful APIs), and deployment (Vercel). It highlights my ability to deliver a user-friendly, visually appealing product while implementing efficient backend processes.
        </p>
      </div>
    </main>
  );
}
