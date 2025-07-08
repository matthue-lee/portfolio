import React from 'react';
import Image from 'next/image';

export default function page() {
  // Define your content array with images
  const contentArray = [
    { id: 1, src: "/images/model1.jpg", alt: "Image 1" },
    { id: 2, src: "/images/model2.jpg", alt: "Image 2" },
    { id: 3, src: "/images/model3.jpg", alt: "Image 3" },
    { id: 4, src: "/images/model4.jpg", alt: "Image 4" },
    { id: 5, src: "/images/model5.jpg", alt: "Image 5" },
    { id: 6, src: "/images/model6.jpg", alt: "Image 6" },
    { id: 7, src: "/images/model7.jpg", alt: "Image 7" },
    { id: 8, src: "/images/model8.jpg", alt: "Image 8" },
    { id: 9, src: "/images/model9.jpg", alt: "Image 9" },
    { id: 10, src: "/images/model10.png", alt: "Image 10" },
    { id: 11, src: "/images/model11.png", alt: "Image 11" },
    { id: 12, src: "/images/model12.png", alt: "Image 12" },
  ];

  return (
    <section className="w-full mx-auto px-6 lg:px-12 bg-black">
      {/* Header with Links */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Main Title */}
        <h1 className="text-gray-400 text-4xl lg:text-8xl font-extrabold leading-tight">
          MODELLING
        </h1>

        {/* Agency Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm lg:text-base text-gray-500 mt-4 md:ml-4 md:mt-0">
          <a href="https://www.kult.com.au/sedcard/matthew-lee/80980" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Australia | Kult
          </a>
          <a href="https://supermgmt.co/divisions/models/portfolios/matthew-lee" target="_blank" rel="noopener noreferrer" className="hover:underline">
            New Zealand | Super
          </a>
          <a href="https://yumodels.it/w/models/mod/mod-22613-matthew-lee" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Milan | Yu
          </a>
          <a href="https://www.selectmodel.com/paris/men/verve/matthew-lee" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Paris | Select
          </a>
        </div>
      </div>

      {/* Responsive Masonry-style Image Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="columns-1 sm:columns-2 md:columns-4 gap-8 space-y-8">
          {contentArray.map((item, idx) => {
            const heights = [180, 260, 340, 420, 500];
            const height = heights[idx % heights.length];
            return (
              <div
                key={item.id}
                style={{ height: `${height}px` }}
                className="mb-8 w-full shadow-lg overflow-hidden break-inside-avoid"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300} // Adjusted width for consistent sizing
                  height={height} // Randomized height for masonry effect
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
