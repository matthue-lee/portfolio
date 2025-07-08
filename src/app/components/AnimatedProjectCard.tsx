import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";

// infer type for ScrollOffset from useScroll parameters
type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

type AnimatedProjectCardProps = {
  project: {
    slug: string;
    images: string[];
    title: string;
    description: string;
  };
  direction?: "right" | "left" | "bottom" | "fade";
  offset?: ScrollOffset;
  distance?: number;
  className?: string;
  aspect?: string; // e.g. "aspect-[16/9]"
};

export default function AnimatedProjectCard({
  project,
  direction = "fade",
  offset = ["start end", "center center"],
  distance = 800,
  className = "",
  aspect = "aspect-[16/9]",
}: AnimatedProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });

    let x: MotionValue<number> | undefined;
    let y: MotionValue<number> | undefined;

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const xRight = useTransform(scrollYProgress, [0, 1], [distance, 0]);
    const xLeft = useTransform(scrollYProgress, [0, 1], [-distance, 0]);
    const yBottom = useTransform(scrollYProgress, [0, 1], [distance, 0]);

    switch (direction) {
    case "right":
        x = xRight;
        break;
    case "left":
        x = xLeft;
        break;
    case "bottom":
        y = yBottom;
        break;
    }

    const style = { x, y, opacity };

  return (
    <motion.div
      ref={ref}
      style={style}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${className} ${aspect}`}
    >
      <Link
        key={project.slug}
        href={`/${project.slug}`}
        className="group relative overflow-hidden rounded-lg shadow-lg w-full h-full block"
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 backdrop-blur-none group-hover:backdrop-blur-sm z-0" />
          <div className="relative z-10 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-sm">{project.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
