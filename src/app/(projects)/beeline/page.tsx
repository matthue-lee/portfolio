import Link from 'next/link';
import PageContainer from '../../components/PageContainer';

const stackHighlights = [
	{ label: 'Mission', value: 'Convert dense NZ Beehive releases into trusted 2-minute briefs.' },
	{ label: 'Stack Focus', value: 'Flask API, BullMQ workers, Postgres/pgvector, Meilisearch, Grafana Alloy.' },
	{ label: 'AI Layer', value: 'GPT-4o-mini summaries, deterministic entity extraction, hybrid retrieval.' },
];

const architectureStages = [
	{
		title: 'Scheduler & Queues',
		description:
			'Cron-grade scheduler seeds BullMQ queues for ingest, summarize, verify, embed, link, and entity workflows. Jobs persist with retry/dead-letter behavior so no release is lost.',
	},
	{
		title: 'Ingestion Pipeline',
		description:
			'RSS fetch → HTML cleaning → dedupe → Postgres storage happen within a single orchestrator. Summary/verification/entity extraction hooks run in parallel for speed.',
	},
	{
		title: 'AI Layer',
		description:
			'GPT-4o-mini prompt templates are versioned and validated with schema-enforced responses. Claims cite release sentences and flow through verification before publication.',
	},
	{
		title: 'Search & Linking',
		description:
			'Meilisearch indexes BM25 text while pgvector stores embeddings. Hybrid retrieval powers cross-links to Stuff/RNZ coverage for every claim.',
	},
	{
		title: 'Observability & Cost',
		description:
			'Prometheus metrics, Grafana Alloy dashboards, Redis cost breaker, and per-call token accounting keep the stack reliable and within budget.',
	},
];

const deliverables = [
	'Structured ingestion API exposing /releases, /search, /jobs, /costs, and /metrics with OTP-protected admin flows.',
	'LLM pipeline logging prompts, schema versions, tokens, latency, cost, and traceable citations.',
	'Hybrid Meilisearch + pgvector retrieval for stance-aware linking to external coverage.',
	'Gold-standard evaluation datasets with nightly ROUGE/NDCG targets and Github Actions enforcement.',
	'Runbook-driven operations with Docker Compose stack, Grafana/Loki configs, and incident playbooks.',
];

const nextSteps = [
	{ title: 'Mobile UX', detail: 'Expo/React Native client for offline browsing of releases and briefs.' },
	{ title: 'Email Digest', detail: 'Daily Resend-powered digest with ministry filters and personalization.' },
	{ title: 'Admin Enhancements', detail: 'Prompt testing harness, entity merges, QA overrides for non-technical reviewers.' },
	{ title: 'Launch Readiness', detail: 'Fly.io deployment, 200 concurrent user load tests, and runbook handoff.' },
];

export default function BeeLinePage() {
	return (
		<PageContainer className="bg-slate-950 text-slate-100">
			<main className="space-y-16 px-6 py-16">
				<section className="mx-auto max-w-5xl">
					<p className="text-sm uppercase tracking-[0.35em] text-amber-300">BeeLine Policy Briefing System</p>
					<h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
						Transforming Beehive releases into fast, trustworthy briefings
					</h1>
					<p className="mt-6 text-lg text-slate-200">
						BeeLine ingests official NZ government communications, verifies every claim, and publishes two-minute briefs with citations and cross-news context. The production pipeline combines deterministic ingestion, prompt-versioned summarization, hybrid retrieval, and Redis-backed cost controls aimed at newsroom-grade reliability.
					</p>
					<div className="mt-8 grid gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 sm:grid-cols-3">
						{stackHighlights.map((item) => (
							<div key={item.label}>
								<p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
								<p className="mt-2 text-sm text-slate-100">{item.value}</p>
							</div>
						))}
					</div>
				</section>

				<section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-6">
						<h2 className="text-3xl font-semibold text-white">System Overview</h2>
						<p className="text-slate-200">
							The ingest service exposes REST endpoints for releases, search, jobs, costs, and metrics. Admin-only OTP flows unlock entity QA and flag resolution, while every AI call logs prompt version, latency, tokens, and cost so operations can trace statements back to their sources.
						</p>
						<p className="text-slate-200">
							A scheduler seeds BullMQ queues every few minutes, feeding parallel workers for summarization, verification, embedding, and cross-linking. Outputs flow into Postgres, pgvector, and Meilisearch so briefs gain contextual coverage in under a minute.
						</p>
					</div>
					<div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
						<h3 className="text-sm uppercase tracking-[0.35em] text-amber-200">Architecture Stack</h3>
						<ul className="mt-4 space-y-4 text-sm text-slate-200">
							{architectureStages.map((stage) => (
								<li key={stage.title}>
									<p className="font-semibold text-white">{stage.title}</p>
									<p className="mt-1 text-slate-300">{stage.description}</p>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
					<div className="grid gap-8 lg:grid-cols-2">
						<div>
							<h2 className="text-3xl font-semibold text-white">Structured AI Pipeline</h2>
							<p className="mt-4 text-slate-200">
								Prompt templates are version-controlled with weighted rollout support. GPT-4o-mini responses pass through Zod-style schema validation, sentence-level verification, and citation tagging before landing in Postgres. Redis caches deterministic entity extraction and houses a circuit breaker that flips to extractive summaries when costs near hourly/daily/monthly limits.
							</p>
							<ul className="mt-6 space-y-3 text-slate-200">
								<li>Hybrid BM25/vector search ensures briefs link to Stuff/RNZ coverage without hallucination.</li>
								<li>Cost tracker logs tokens and latency per job for Grafana Alloy dashboards.</li>
								<li>Verification service flags contentious claims for admin QA with traceable release sentences.</li>
							</ul>
						</div>
						<div>
							<h3 className="text-sm uppercase tracking-[0.35em] text-amber-200">Key Deliverables</h3>
							<ul className="mt-4 space-y-3 text-slate-200">
								{deliverables.map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
					<h2 className="text-3xl font-semibold text-white">Visuals in Progress</h2>
					<p className="mt-4 text-slate-200">
						Dashboard and queue screenshots are in development. In the meantime, the published <Link href="/papers/beeline-runbook.md" target="_blank" rel="noreferrer" className="text-amber-300 underline underline-offset-4">draft runbook</Link> documents incident flows, cost breaker steps, and queue recovery checklists.
					</p>
					<ul className="mt-6 space-y-3 text-slate-200">
						<li>Target visuals: scheduler timeline, ingestion job board, admin QA flow, and upcoming React Native concepts.</li>
						<li>Each will include annotations highlighting metrics, prompts, and schema traces.</li>
						<li>Links will be added once real screenshots replace placeholders.</li>
					</ul>
				</section>

				<section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
					<div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
						<h3 className="text-2xl font-semibold text-white">Runbook-Driven Operations</h3>
						<p className="mt-4 text-slate-200">
							Docker Compose spins up Postgres, Redis, Meilisearch, API, scheduler, workers, and Grafana Alloy. Monitoring configs export metrics + alerts to Grafana Cloud, and runbooks document responses for cost breaker events, queue backlog, or LLM outages.
						</p>
						<ul className="mt-6 space-y-3 text-sm text-slate-200">
							<li>Scripts handle embedding backfills, search evals, prompt overrides, and breaker admin.</li>
							<li>Evaluation datasets ensure nightly ROUGE/NDCG regressions are caught in CI.</li>
							<li>OTP-protected admin endpoints secure QA + override workflows.</li>
						</ul>
					</div>
					<div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
						<h3 className="text-2xl font-semibold text-white">What’s Next</h3>
						<ul className="mt-6 space-y-4 text-slate-200">
							{nextSteps.map((step) => (
								<li key={step.title}>
									<p className="text-sm uppercase tracking-[0.3em] text-amber-200">{step.title}</p>
									<p className="text-sm text-slate-300">{step.detail}</p>
								</li>
							))}
						</ul>
					</div>
				</section>

				<p className="text-center text-xs uppercase tracking-[0.4em] text-slate-500">
					Every statement cites a source · Automated flags keep humans in the loop
				</p>
			</main>
		</PageContainer>
	);
}
