import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Engineering",
    content: (
      <p>
        With a background in Biomedical Engineering, I have a strong foundation in
        mechanical and electrical design, CAD, prototyping, and robotics. My
        experience includes working on innovative projects that integrate smart
        technologies into everyday applications.
      </p>
    ),
  },
  {
    title: "Fullstack Development",
    content: (
      <p>
        I specialize in building responsive web applications using modern frameworks
        like React and Next.js. My skills include developing REST APIs, managing
        databases, and ensuring a seamless user experience through effective UI/UX
        design.
      </p>
    ),
  },
  {
    title: "ML/AI",
    content: (
      <p>
        I have experience in machine learning and AI, focusing on developing
        intelligent systems that can learn from data. This includes working with
        libraries like TensorFlow and PyTorch to create models that enhance user
        interactions and automate processes. Previously I worked at Allsite AI, a
        company creating a generative AI designed to reduce the time to complete a
        building site development by as much as 90%.
      </p>
    ),
  },
];

export default function SkillsAccordion({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number | null;
  setSelectedIndex: (idx: number | null) => void;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl mt-8 text-left pl-4 md:pl-8 lg:pl-36"
      value={selectedIndex !== null ? items[selectedIndex].title : undefined}
      onValueChange={(val) => {
        // If the clicked item is already open, close it and deselect the carousel in one click
        if (!val || (selectedIndex !== null && items[selectedIndex].title === val)) {
          setSelectedIndex(null);
          return;
        }
        const idx = items.findIndex((i) => i.title === val);
        setSelectedIndex(idx !== -1 ? idx : null);
      }}
    >
      {items.map((item) => (
        <AccordionItem
          value={item.title}
          key={item.title}
          className="border-none bg-transparent p-0"
        >
          <AccordionTrigger className="text-4xl font-semibold px-0 py-5 hover:scale-110 no-underline focus:outline-none text-gray-200 bg-transparent border-none shadow-none text-left justify-start" style={{boxShadow: 'none', border: 'none', background: 'none'}}>
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="px-0 pb-2 text-gray-200 text-xl bg-transparent border-none shadow-none text-left" style={{boxShadow: 'none', border: 'none', background: 'none'}}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
