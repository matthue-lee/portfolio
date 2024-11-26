'use client';

import Image from 'next/image';
import Link from 'next/link'

const hikes = [
  {
    title: "Everest Base Camp",
    slug: "everest-base-camp",
    description:
      "A legendary trek through the Himalayas, offering breathtaking views of Mount Everest and an unparalleled cultural experience in the heart of Nepal.",
    tags: ["Himalayan Adventure", "Cultural Immersion", "Stunning Scenery"],
    images: [
      "https://images.unsplash.com/photo-1700556581902-6aa21e96507c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ", // Everest trail
      "https://images.unsplash.com/photo-1662958882371-9b3c5d9a0c25?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Mount Everest view
    ],
  },
  {
    title: "Gokyo Lakes",
    slug: "gokyo-lakes",
    description:
      "A serene trek to the turquoise glacial lakes of Gokyo, surrounded by majestic Himalayan peaks and offering panoramic views from Gokyo Ri.",
    tags: ["Turquoise Glacial Lakes", "Panoramic Views", "Peaceful Atmosphere"],
    images: [
      "https://images.unsplash.com/photo-1471584363844-b3909b58d6f7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Gokyo Lakes view
      "https://images.unsplash.com/photo-1545660190-750cfd47fdde?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Peaks above lakes
    ],
  },
  {
    title: "Routeburn Track",
    slug: "routebourn",
    description:
      "One of New Zealand's Great Walks, this hike takes you through lush forests, alpine lakes, and rugged mountain landscapes.",
    tags: ["New Zealand Wilderness", "Alpine Lakes", "Diverse Landscapes"],
    images: [
      "https://images.unsplash.com/photo-1498116535454-8877d66c3b83?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Routeburn mountain range
      "https://images.unsplash.com/photo-1498605493985-d7d7593f905b?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Alpine lake
    ],
  },
  {
    title: "Tongariro Alpine Crossing",
    slug: "tongariro-alpine-crossing",
    description:
      "A challenging hike across volcanic landscapes, including craters, emerald lakes, and steaming vents, located in New Zealand's Tongariro National Park.",
    tags: ["Volcanic Landscapes", "Emerald Lakes", "Adventure Challenge"],
    images: [
      "https://images.unsplash.com/photo-1696673147643-28cdb0d8d11c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Emerald Lakes
      "https://images.unsplash.com/photo-1694819893189-10ce0b1cd6d7?q=80&w=2876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Volcanic craters
    ],
  },
  {
    title: "Milford Sound",
    slug: "milford-sound",
    description:
      "A stunning trek through Fiordland National Park, ending at the breathtaking Milford Sound, known for its dramatic fjords and waterfalls.",
    tags: ["Fjordland Scenery", "Waterfalls", "Unique Wildlife"],
    images: [
      "https://images.unsplash.com/photo-1523819088009-c3ecf1e34000?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Milford Sound fjord
      "https://images.unsplash.com/photo-1585627736648-d45b2478b2ef?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Milford waterfalls
    ],
  },
  {
    title: "Fox Glacier",
    slug: "fox-glacier",
    description:
      "A short hike that offers spectacular views of Fox Glacier, a massive ice field flowing through lush rainforests.",
    tags: ["Glacial Views", "Rainforest Trails", "Natural Beauty"],
    images: [
      "https://images.unsplash.com/photo-1582603658182-9f9288ff5183?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Fox Glacier
      "https://images.unsplash.com/photo-1508389377389-b8221c0bcc9e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Glacier and forest trail
    ],
  },
  {
    title: "Roy's Peak",
    slug: "roys-peak",
    description:
      "An iconic New Zealand hike offering sweeping views of Lake Wanaka and surrounding peaks, perfect for sunrise or sunset adventures.",
    tags: ["Panoramic Views", "Lake Wanaka", "Sunrise Hike"],
    images: [
      "https://images.unsplash.com/photo-1706820643404-71812d9d7d3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Roy's Peak trail
      "https://images.unsplash.com/photo-1524027556923-66e7ec51e251?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Lake Wanaka view
    ],
  },
];



export default function LandingPage() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">


      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
  {/* Title Spanning Both Columns */}
  <h1 className="text-6xl lg:text-8xl font-extraboldtext-justify">
    Matthew Lee
  </h1>

  {/* Content Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-stretch">
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





      <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Explore my Work</h2>
        <p className="mt-4 text-lg text-gray-600">
        With a blend of technical expertise and hands-on experience, I enjoy tackling new challenges and continuously growing as both a developer and a team player.        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-2 container mx-auto">
        {hikes.map((hike, index) => (
          <div
            key={index}
            className="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700"
          >
            <div className="grid grid-cols-2 gap-4 p-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{hike.title}</h3>
                <p className="mt-3 text-gray-600">{hike.description}</p>
                <ul className="mt-4 space-y-2">
                  {hike.tags.map((tag, idx) => (
                    <li
                      key={idx}
                      className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link href={`/hikes/${hike.slug}`}>
                  <button className="mt-6 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-400">
                    View Hike &rarr;
                  </button>
                </Link>
              </div>
              <div className="space-y-4">
                {hike.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${hike.title} image ${idx + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
