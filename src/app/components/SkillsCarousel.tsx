import React from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/gripper-(2).png",
    alt: "Engineering",
  },
  {
    src: "/images/mobile signup mockup.png",
    alt: "Fullstack Development",
  },
  {
    src: "/images/lda classifier.jpg",
    alt: "ML/AI",
  },
];

export default function SkillsCarousel({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number | null;
  setSelectedIndex: (idx: number | null) => void;
}) {
  return (
    <div className="hidden md:flex items-center gap-6 mt-16">
      {images.map((img, idx) => (
        <button
          key={img.alt}
          onClick={() => setSelectedIndex(selectedIndex === idx ? null : idx)}
          className={`transition-all duration-300 rounded-lg overflow-hidden shadow-lg ${selectedIndex === idx ? 'scale-125' : 'opacity-60 scale-95'}`}
          style={{ width: 180, height: 180 }}
          aria-label={img.alt}
        >
          <Image src={img.src} alt={img.alt} width={180} height={180} className="object-cover w-full h-full" />
        </button>
      ))}
    </div>
  );
}
