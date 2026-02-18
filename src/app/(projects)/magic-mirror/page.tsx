'use client'
import React from 'react';
import Image from 'next/image';
import PageContainer from '../../components/PageContainer';

const stackChips = [
	'Next.js App Router',
	'MagicMirror²',
	'Supabase Auth & RLS',
	'OAuth (Google · Spotify · Outlook)',
	'Google Places API',
	'Tailwind UI system',
];

const dataFlow = [
	'Mirror boots → `mirror-auth` requests UUID + JWT via `/api/issueMirrorToken` and renders a device QR code.',
	'User scans QR, authenticates on phone, and `/api/linkMirrorID` binds mirror ↔ user identity in Supabase/Mongo.',
	'Loader holds MagicMirror modules until Supabase confirms pairing via `/api/checkSession` polling.',
	'JWT-protected modules call `/api/getLocation|getEmail|getSpotifyPlaying|getGoogleCalendarEvents` with mirror UUID headers.',
	'Edge Functions/fetchers refresh OAuth tokens server-side, rewrite module configs, and stream commute/weather context back to the device.',
];

const keyDecisions = [
	'Auth-only boot path so mirrors stay inert until a user proves ownership with QR pairing.',
	'Server-side OAuth custody—hardware only holds Lumora-issued JWTs, never Google/Spotify secrets.',
	'Supabase Row-Level Security enforces which mirrors can reach personalization rows.',
	'Next.js API routes double as the aggregation layer for commute, calendar, and media services.',
];

const innovations = [
	{
		title: 'QR Pairing Flow',
		detail:
			'`mirror-auth` renders device-specific QR codes and polls `/api/checkSession` until Supabase signals a successful link—no keyboard required.',
	},
	{
		title: 'Secure Mirror Identity',
		detail:
			'Every mirror gets a UUID + JWT combo. Modules sign each request, and Supabase RLS gates which rows or OAuth tokens it can touch.',
	},
	{
		title: 'OAuth Aggregation Layer',
		detail:
			'Edge Functions broker Google/Spotify/Outlook scopes so node helpers only see Lumora JWTs, simplifying renewals and audits.',
	},
	{
		title: 'Personalisation Engine',
		detail:
			'Dashboard writers update commute routes, location, and service toggles; `/api/getLocation` et al. push those into MagicMirror at runtime.',
	},
	{
		title: 'Modular Runtime',
		detail:
			'`Loader.loadDeferredModules` injects weather/calendar/music widgets only after auth, allowing product-tier feature flags.',
	},
];

const challenges = [
	'Factory-reset trust chain: solved with UUID storage plus QR confirmation and Supabase-backed polling.',
	'OAuth secrets on hardware: addressed by proxying every integration through JWT-guarded Next.js APIs.',
	'Dynamic module config: runtime rewrites and node-helpers keep upstream MagicMirror modules untouched.',
	'UX continuity: mirror-auth hides itself and broadcasts `USER_AUTHENTICATED_DETAILS` while deferred modules spin up.',
];

const outcomes = [
	'Pairing completes after a single QR scan (~10 seconds of polling) with no data leaving the mirror pre-auth.',
	'Weather, calendar, email, and Spotify modules now call JWT-only APIs, keeping OAuth refresh tokens confined to Supabase.',
	'Dashboard JSON manifests let ops toggle which modules appear per hardware SKU without reflashing.',
	'Google Places commute data and market feeds slot into mirrors via backend releases alone.',
];


const galleryImages = ['coloredMirror.jpg', 'Bathroom render.png', 'first render.png', 'mockup desktop.png', 'mockup laptop.png'];

export default function MagicMirrorPage() {
	return (
		<PageContainer className="bg-black text-gray-200">
			<main className="min-h-screen space-y-16">
				<section className="relative px-6 py-16">
					<div className="mx-auto max-w-5xl text-center">
						<p className="text-sm uppercase tracking-[0.4em] text-pink-200">Lumora · Lamina OS</p>
						<h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
							Luxury smart mirrors that stay personal without leaking secrets
						</h1>
						<p className="mt-6 text-lg text-gray-300">
							Led full-stack development of a MagicMirror-based platform with secure QR pairing, Supabase-backed personalization, and OAuth aggregation so commute, calendar, and music data follow the owner from phone to glass in under 30 seconds.
						</p>
					</div>
					<div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10">
						<Image
							src="/images/mobile signup mockup.png"
							alt="Lumora QR pairing experience"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 960px"
						/>
					</div>
				</section>

				<section className="px-6">
					<div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8">
						<h2 className="text-3xl font-semibold text-white">Problem</h2>
						<p className="mt-4 text-gray-300">
							Status-quo mirrors are hobby builds: static configs, no identity model, and no secure way to surface calendars or music. Luxury buyers expect a mirror that pairs instantly, respects privacy, and adapts across product tiers without touching JSON on-device.
						</p>
						<p className="mt-4 text-gray-300">
							Lumora solves this by issuing mirror UUIDs, hiding OAuth credentials behind the cloud, and giving ops a dashboard to toggle experiences remotely.
						</p>
					</div>
				</section>

				<section className="px-6">
					<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
						<div>
							<h2 className="text-3xl font-semibold text-white">Technical Architecture</h2>
							<p className="mt-4 text-gray-300">
								MagicMirror² handles rendering while Next.js App Router APIs, Supabase, and Firebase Auth orchestrate identity, pairing, and personalization. All OAuth tokens stay in Supabase/Mongo; mirrors only ever present Lumora-issued JWTs.
							</p>
							<div className="mt-6 space-y-3 text-sm text-gray-200">
								{stackChips.map((chip) => (
									<span key={chip} className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gray-300">
										{chip}
									</span>
								))}
							</div>
						</div>
						<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
							<h3 className="text-sm uppercase tracking-[0.35em] text-pink-200">Data Flow</h3>
							<ol className="mt-4 space-y-3 text-sm text-gray-200">
								{dataFlow.map((item, idx) => (
									<li key={item} className="flex gap-3">
										<span className="font-semibold text-pink-300">{idx + 1}.</span>
										<span>{item}</span>
									</li>
								))}
							</ol>
						</div>
					</div>
					<div className="mx-auto mt-10 max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6">
						<h3 className="text-sm uppercase tracking-[0.35em] text-pink-200">Key Decisions</h3>
						<ul className="mt-4 space-y-3 text-gray-200">
							{keyDecisions.map((decision) => (
								<li key={decision} className="flex gap-3">
									<span className="mt-1 h-2 w-2 rounded-full bg-pink-300" />
									<span>{decision}</span>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="px-6">
					<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
						<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
							<h2 className="text-3xl font-semibold text-white">Core Innovations</h2>
							<ul className="mt-6 space-y-4 text-gray-200">
								{innovations.map((innovation) => (
									<li key={innovation.title}>
										<p className="text-sm uppercase tracking-[0.3em] text-pink-200">{innovation.title}</p>
										<p className="text-sm text-gray-300">{innovation.detail}</p>
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
							<h2 className="text-3xl font-semibold text-white">Engineering Challenges</h2>
							<ul className="mt-6 space-y-3 text-gray-200">
								{challenges.map((challenge) => (
									<li key={challenge} className="flex gap-3">
										<span className="mt-1 h-2 w-2 rounded-full bg-pink-300" />
										<span>{challenge}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section className="px-6">
					<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
						<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
							<h2 className="text-3xl font-semibold text-white">Results & Outcomes</h2>
							<ul className="mt-6 space-y-3 text-gray-200">
								{outcomes.map((outcome) => (
									<li key={outcome} className="flex gap-3">
										<span className="mt-1 h-2 w-2 rounded-full bg-pink-300" />
										<span>{outcome}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section className="px-6 pb-16">
					<div className="mx-auto max-w-6xl">
						<h2 className="text-3xl font-semibold text-white">Hardware & UI Gallery</h2>
						<p className="mt-4 text-gray-300">
							Frames from the Athena, Apollo, and Lunar collections share the same software core. These renders show how the authenticated runtime blends with luxury interiors while reflecting commute, media, and inbox modules.
						</p>
						<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{galleryImages.map((img, index) => (
								<div key={img} className="overflow-hidden rounded-3xl border border-white/10">
									<Image
										src={`/images/${img}`}
										alt={`Lumora render ${index + 1}`}
										width={600}
										height={400}
										className="h-full w-full object-cover"
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</PageContainer>
	);
}
