// ProjectHero.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
	slug: string;
	images: string[];
	title: string;
	description: string;
};

export default function ProjectHero({ project }: { project: Project }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<motion.div
			ref={ref}
			style={{ opacity }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className="md:col-span-2"
		>
			<Link
				href={`/${project.slug}`}
				className="group relative overflow-hidden rounded-lg shadow-lg aspect-[16/6] w-full h-full block"
			>
				<Image
					src={project.images[0]}
					alt={project.title}
					fill
					className="object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-50"
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
