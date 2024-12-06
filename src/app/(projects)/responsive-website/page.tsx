import Image from 'next/image';

const MobileFirstPortfolioPage = () => {
  return (
    <main className="flex flex-col items-center justify-center px-4 md:px-16 lg:px-32 py-8">
      <section className="text-center mb-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Mobile-First Hiking Adventure Website</h1>
          <p className="text-lg md:text-xl text-gray-700">
            This project showcases a hiking-themed website designed with a mobile-first approach. The platform provides users with detailed trail information, gear recommendations, and tips for planning their next adventure, all while maintaining a seamless and visually appealing experience across devices.
          </p>
        </div>
      </section>

      <section className="w-full mb-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Process & Skills</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I began the project by focusing on the needs of mobile users, who are often on the go when planning hiking trips. The design prioritizes readability and ease of navigation, with collapsible menus and interactive maps. 
            <br /><br />
            Modern CSS techniques like <span className="font-medium">Flexbox</span> and <span className="font-medium">CSS Grid</span> were essential for creating a layout that adapts dynamically to different screen sizes. I also utilized <span className="font-medium">media queries</span> to tailor the design for larger screens, enhancing the user experience on desktops and tablets.
            <br /><br />
            Tools like <span className="font-medium">Figma</span> were used for wireframing and prototyping, while performance and accessibility were optimized with <span className="font-medium">Lighthouse</span>. Cross-browser testing ensured consistent functionality across all major platforms. This project deepened my expertise in responsive design and creating user-focused digital experiences.
          </p>
        </div>
      </section>

      <section className="w-full mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Comparison: Mobile vs. Desktop</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium mb-2">Mobile Version</h3>
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="/images/home-mobile.png"
                alt="Mobile version of the home page"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium mb-2">Desktop Version</h3>
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="/images/home-desktop.png"
                alt="Desktop version of the home page"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Another Comparison</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium mb-2">Mobile Version</h3>
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="/images/hikes-mobile.png"
                alt="Mobile version of the hikes page"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium mb-2">Desktop Version</h3>
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="/images/hikes-desktop.png"
                alt="Desktop version of the hikes page"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileFirstPortfolioPage;
