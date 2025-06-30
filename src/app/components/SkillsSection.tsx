import React, { useState } from "react";
import SkillsAccordion from "./SkillsAccordion";
import SkillsCarousel from "./SkillsCarousel";

export default function SkillsSection() {
const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col md:flex-row md:items-start md:gap-12 px-4 md:px-8 lg:px-12 mt-8">
      <div className="flex-1">
        <SkillsAccordion selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </div>
      <div className="flex-1 flex justify-center md:justify-start mt-8 md:mt-0">
        <SkillsCarousel selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </div>
    </div>
  );
}
