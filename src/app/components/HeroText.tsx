import React from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface HeroTextProps {
  text: string;
  className?: string;
}

export default function HeroText({ text, className = "" }: HeroTextProps) {
  const textRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start end", "start start"] });
  const [progress, setProgress] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  function lerpColor(a: string, b: string, t: number) {
    const ah = parseInt(a.replace('#', ''), 16), bh = parseInt(b.replace('#', ''), 16);
    const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
    const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);
    return `rgb(${rr},${rg},${rb})`;
  }

  return (
    <div ref={textRef} className={className}>
      <p className="text-lg lg:text-3xl leading-relaxed lg:leading-loose">
        {text.split("").map((char, i) => {
          const start = 0.5 + (i / text.length) * 0.5;
          const end = 0.5 + ((i + 1) / text.length) * 0.5;
          let t = 0;
          if (progress <= start) t = 0;
          else if (progress >= end) t = 1;
          else t = (progress - start) / (end - start);
          const color = lerpColor("#4b5563", "#ffffff", t); // gray-600 to white
          return (
            <span key={i} style={{ color }}>{char}</span>
          );
        })}
      </p>
    </div>
  );
}
