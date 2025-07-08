import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// This array should match the one in your main page
const projects = [
	{
		title: "Lumora",
		slug: "magic-mirror",
		description:
			"An innovative smart mirror system that combines modern design with real-time updates on weather, calendar events, and more.",
		tags: ["Custom OS", "API Integrations", "OAuth flow", "Full-Stack"],
		images: ["/images/first render.png"],
	},
	{
		title: "Underactuated Gripper",
		slug: "gripper",
		description:
			"A cutting-edge robotic gripper that mimics human dexterity to securely grasp objects of various shapes and sizes with minimal actuation.",
		tags: ["Robotics", "Biomedical Engineering", "Product Design"],
		images: ["/images/gripper-(4).png"],
	},
	{
		title: "Ralphy",
		slug: "ralphy",
		description:
			"A B2B SAAS platform for brands and creators to collaborate, featuring QR code receipts, Supabase Edge Functions, and custom analytics dashboards.",
		tags: ["Full-Stack", "Databases", "Dashboards"],
		images: ["/images/ralphy mock 1.png"]
	},
	{
		title: "Library Tracker",
		slug: "library-tracker",
		description:
			"An application that leverages computer vision and OCR technologies to automatically detect and extract book titles from images of book spines.",
		tags: ["Library Management", "Easy Tracking", "User-Friendly"],
		images: [
			"https://images.unsplash.com/photo-1498116535454-8877d66c3b83?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
	},
    {
		title: "A Perfect Queue",
		slug: "a-perfect-queue",
		description:
			"An intuitive playlist creation tool that allows users to effortlessly generate playlists from their recently queued songs.",
		tags: ["UI Design", "API-Integration", "OAuth flow"],
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
];

function AnimatedTimelineCard({ project }: { project: typeof projects[0] }) {
	const ref = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
	const x = useTransform(scrollYProgress, [0, 1], [800, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<motion.div
			ref={ref}
			style={{ x, opacity }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="w-full lg:w-[60%]"
		>
			<Link href={`/${project.slug}`} className="group relative overflow-hidden rounded-lg shadow-lg w-full h-full block">
				<img
					src={project.images[0]}
					alt={project.title}
					width={700}
					height={500}
					className="w-full h-full object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-50"
				/>
				<div className="absolute inset-0 flex items-center justify-center p-4">
					<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 backdrop-blur-none group-hover:backdrop-blur-sm z-0" />
					<div className="relative z-10 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<p className="mt-2 text-sm">{project.description}</p>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}

export default function TimelineComponent() {
	const data = projects.map((project) => ({
		title: project.title,
		content: (
			<div className="flex justify-center">
				<AnimatedTimelineCard project={project} />
			</div>
		),
	}));

	return (
		<div className="relative w-full overflow-clip">
			<Timeline data={data} />
		</div>
	);
}
