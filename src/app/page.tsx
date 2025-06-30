"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { outfit } from "./fonts/outfit";
import SkillsSection from "./components/SkillsSection";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const projects = [
	{
		title: "Lamina",
		slug: "magic-mirror",
		description:
			"An innovative smart mirror system that combines modern design with real-time updates on weather, calendar events, and more.",
		tags: ["Smart Technology", "Real-Time Updates", "Elegant Design"],
		images: ["/images/first render.png"],
	},
	{
		title: "A Perfect Queue",
		slug: "a-perfect-queue",
		description:
			"An intuitive playlist creation tool that allows users to effortlessly generate playlists from their recently queued songs.",
		tags: ["Playlist Creation", "User-Friendly", "Music Integration"],
		images: ["/images/a perfect queue home.jpeg"],
	},
	{
		title: "Responsive Website",
		slug: "responsive-website",
		description:
			"A website designed to offer a seamless user experience across devices, adapting dynamically to mobile, tablet, and desktop layouts.",
		tags: ["Responsive Design", "Dynamic Layouts", "Cross-Device Compatibility"],
		images: ["/images/responsive comparison.png"],
	},
	{
		title: "Underactuated Gripper",
		slug: "gripper",
		description:
			"A cutting-edge robotic gripper that mimics human dexterity to securely grasp objects of various shapes and sizes with minimal actuation.",
		tags: ["Robotics", "Human-Like Dexterity", "Innovative Design"],
		images: ["/images/gripper-(4).png"],
	},
	{
		title: "Library Tracker",
		slug: "library-tracker",
		description:
			"A streamlined library management system that enables users to track borrowed books, due dates, and availability with ease.",
		tags: ["Library Management", "Easy Tracking", "User-Friendly"],
		images: [
			"https://images.unsplash.com/photo-1498116535454-8877d66c3b83?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
	},
];

export default function LandingPage() {
	return (
		<div className={`bg-black text-gray-200 min-h-screen w-full overflow-x-hidden overflow-y-hidden ${outfit.className}`}>
			{/* Intro / About Section */}
			<section className="px-4 md:px-8 lg:px-12 pt-8">
				<h1 className="text-gray-200 text-6xl lg:text-8xl font-extrabold leading-tight text-center">
					MATTHEW LEE
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-stretch">
					<div className="flex flex-col justify-between mt-10 lg:mt-20">
						<p className="text-lg lg:text-3xl text-gray-200">
							A dedicated and passionate individual with a strong interest in
							technology and innovation. I thrive in dynamic environments where
							I can apply my skills to solve complex problems and contribute to
							meaningful projects.
						</p>
					</div>
					<div className="flex items-end">
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
				<div className="text-center px-4 md:px-8 lg:px-12">
					<h2 className="text-6xl font-bold text-gray-200">Explore My Work</h2>
					<p className="mt-4 text-2xl text-gray-200 lg:mb-16">
						With a blend of technical expertise and hands-on experience,
						<br />
						I enjoy tackling new challenges and continuously growing as both a
						developer and a team player.
					</p>
				</div>
				<div className="flex flex-col md:flex-row md:items-start md:gap-12 px-4 md:px-8 lg:px-12 mt-8">
					<div className="flex-1">
						{/* Skills Section */}
						<section className="py-16">
							<SkillsSection />
						</section>
					</div>
				</div>

				{/* Full-width grid with small horizontal padding */}
				<div className="px-2 md:px-4 lg:px-40 mt-10">
					<div
						className="
              grid
              grid-cols-1 md:grid-cols-2
              gap-4 md:gap-6 lg:gap-8
              w-full

            "
					>
						{/* 1st row: full width, animated opacity based on percent in view (bottom edge triggers full opacity) */}
						{projects[0] && (() => {
							const ref = useRef(null);
							const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
							const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
							return (
								<motion.div
									ref={ref}
									style={{ opacity }}
									transition={{ duration: 0.5, ease: "easeOut" }}
									className="md:col-span-2"
								>
									<Link
										key={projects[0].slug}
										href={`/${projects[0].slug}`}
										className="group relative overflow-hidden rounded-lg shadow-lg aspect-[16/6] w-full h-full block"
									>
										<img
											src={projects[0].images[0]}
											alt={projects[0].title}
											className="w-full h-full object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-50"
										/>
										<div className="absolute inset-0 flex items-center justify-center p-4">
											<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 backdrop-blur-none group-hover:backdrop-blur-sm z-0" />
											<div className="relative z-10 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<h3 className="text-2xl font-bold">{projects[0].title}</h3>
												<p className="mt-2 text-sm">{projects[0].description}</p>
											</div>
										</div>
									</Link>
								</motion.div>
							);
						})()}
						{/* 2nd row: right column only, slides in from right proportional to scroll */}
						{projects[1] && (
							<div className="hidden md:block" />
						)}
						{projects[1] && (() => {
							const ref = useRef(null);
							const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
							const x = useTransform(scrollYProgress, [0, 1], [800, 0]);
							const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
							return (
								<motion.div
									ref={ref}
									style={{ x, opacity }}
									transition={{ duration: 0.5, ease: "easeOut" }}
									className="md:col-start-2"
								>
									<Link
										key={projects[1].slug}
										href={`/${projects[1].slug}`}
										className="group relative overflow-hidden overflow-x-hidden rounded-lg shadow-lg aspect-[16/9] w-full h-full block"
									>
										<img
											src={projects[1].images[0]}
											alt={projects[1].title}
											className="w-full h-full object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-50"
										/>
										<div className="absolute inset-0 flex items-center justify-center p-4">
											<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 backdrop-blur-none group-hover:backdrop-blur-sm z-0" />
											<div className="relative z-10 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<h3 className="text-2xl font-bold">{projects[1].title}</h3>
												<p className="mt-2 text-sm">{projects[1].description}</p>
											</div>
										</div>
									</Link>
								</motion.div>
							);
						})()}
						{/* 3rd row: left column only, slides in from left proportional to scroll */}
						{projects[2] && (() => {
							const ref = useRef(null);
							const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
							const x = useTransform(scrollYProgress, [0, 1], [-800, 0]);
							const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
							return (
								<motion.div
									ref={ref}
									style={{ x, opacity }}
									transition={{ duration: 0.5, ease: "easeOut" }}
									className="md:col-start-1"
								>
									<Link
										key={projects[2].slug}
										href={`/${projects[2].slug}`}
										className="group relative overflow-hidden rounded-lg shadow-lg aspect-[16/9] w-full h-full block"
									>
										<img
											src={projects[2].images[0]}
											alt={projects[2].title}
											className="w-full h-full object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-50"
										/>
										<div className="absolute inset-0 flex items-center justify-center p-4">
											<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 backdrop-blur-none group-hover:backdrop-blur-sm z-0" />
											<div className="relative z-10 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<h3 className="text-2xl font-bold">{projects[2].title}</h3>
												<p className="mt-2 text-sm">{projects[2].description}</p>
											</div>
										</div>
									</Link>
								</motion.div>
							);
						})()}
						{/* 4th row: full width, slides in from bottom proportional to scroll */}
						{projects[3] && (() => {
							const ref = useRef(null);
							const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
							const y = useTransform(scrollYProgress, [0, 1], [800, 0]);
							const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
							return (
								<motion.div
									ref={ref}
									style={{ y, opacity }}
									transition={{ duration: 0.5, ease: "easeOut" }}
									className="md:col-span-2"
								>
									<Link
										key={projects[3].slug}
										href={`/${projects[3].slug}`}
										className="group relative overflow-hidden rounded-lg shadow-lg aspect-[16/6] w-full h-full block"
									>
										<img
											src={projects[3].images[0]}
											alt={projects[3].title}
											className="w-full h-full object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-50"
										/>
										<div className="absolute inset-0 flex items-center justify-center p-4">
											<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 backdrop-blur-none group-hover:backdrop-blur-sm z-0" />
											<div className="relative z-10 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<h3 className="text-2xl font-bold">{projects[3].title}</h3>
												<p className="mt-2 text-sm">{projects[3].description}</p>
											</div>
										</div>
									</Link>
								</motion.div>
							);
						})()}
					</div>
				</div>
			</section>
		</div>
	);
}
