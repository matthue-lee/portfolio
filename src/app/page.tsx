"use client";

import Image from "next/image";
import React from "react";
import { outfit } from "./fonts/outfit";
import SkillsSection from "./components/SkillsSection";
import TimelineComponent from "./components/Timeline";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function LandingPage() {
	const introText = "A dedicated and passionate engineer with a strong interest in technology and innovation. I thrive in dynamic environments where I can apply my skills to solve complex problems and contribute to meaningful projects. With a blend of technical expertise and hands-on experience, I enjoy tackling new challenges and continuously growing as both an engineer and a developer.";
	const textRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: textRef, offset: ["start end", "start start"] });

	// Compute color MotionValues for each character at the top level
	const colorMotionValues: MotionValue<string>[] = [];
	for (let i = 0; i < introText.length; i++) {
		const start = 0.68 + (i / introText.length) * 0.32;
		const end = 0.68 + ((i + 1) / introText.length) * 0.32;
		colorMotionValues.push(useTransform(scrollYProgress, [start, end], ["#6b7280", "#fff"]));
	}

	return (
		<div className={`bg-black text-gray-200 min-h-screen w-full overflow-x-hidden overflow-y-hidden ${outfit.className}`}>
			{/* Intro / About Section */}
			<section className="px-4 md:px-8 lg:px-12 pt-8">
				<h1 className="text-gray-200 text-6xl lg:text-8xl font-extrabold leading-tight text-center">
					MATTHEW LEE
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-stretch h-[800px]">
					<div ref={textRef} className="flex flex-col justify-center h-full">
						<p className="text-lg lg:text-3xl leading-relaxed lg:leading-loose">
							{introText.split("").map((char, i) => (
								<motion.span key={i} style={{ color: colorMotionValues[i] }}>{char}</motion.span>
							))}
						</p>
					</div>
					<div className="flex items-end h-full">
						<Image
							src="/images/about.jpg"
							alt="Lamina - Magic Mirror"
							width={600}
							height={800}
							className="rounded-xl object-cover shadow-lg w-full h-auto"
						/>
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section className="py-16 bg-black w-full">
				<div className="text-center px-4 md:px-8 lg:px-12 lg:mt-16">
					<h2 className="text-6xl font-bold text-gray-200">Explore My Work</h2>
				</div>
				<div className="flex flex-col md:flex-row md:items-start md:gap-12 px-4 md:px-8 lg:px-12">
					<div className="flex-1">
						{/* Skills Section */}
						<section className="py-10 md:pb-16">
							<SkillsSection />
						</section>
					</div>
				</div>

				<TimelineComponent />
			</section>
		</div>
	);
}
