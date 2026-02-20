import PageContainer from '../../components/PageContainer';

const stackHighlights = [
	{ label: 'Mission', value: 'Convert dense NZ Beehive releases into trusted 2-minute briefs.' },
	{ label: 'Stack Focus', value: 'Flask API, BullMQ workers, Postgres/pgvector, Meilisearch, Grafana Alloy.' },
	{ label: 'AI Layer', value: 'GPT-4o-mini summaries, deterministic entity extraction, hybrid retrieval.' },
];

const architectureStages = [
	{
		title: 'Ingestion Pipeline',
		description:
			'`IngestionPipeline` wires RSS fetching, article retrieval, HTML cleaning, DB upserts, summary generation, entity extraction, embedding upkeep, and cross-linking (pipeline.py).',
	},
	{
		title: 'Feed Handling',
		description:
			'RSS modules respect robots.txt, cooldowns, and canonical IDs before hitting cleaner/storage layers (rss.py, cleaner.py, storage.py).',
	},
	{
		title: 'Flask API',
		description:
			'Health, metrics, `/ingest/run`, `/releases`, hybrid `/search/*`, `/jobs`, and `/costs` endpoints are instrumented for Prometheus (app.py).',
	},
	{
		title: 'Schedulers & CLI',
		description:
			'CLI backfills ingestion jobs while the async scheduler loops work on cadences and exposes its own metrics (cli.py, scheduler/service.py).',
	},
];

const deliverables = [
	'Production Flask API with `/releases`, `/search`, `/jobs`, `/ingest/run`, `/costs`, and `/metrics`, plus OTP-only admin routes.',
	'LLM summaries + verification pipeline with Redis caching, prompt guardrails, token/cost logging, and claim persistence.',
	'Hybrid search layer synchronizing Meilisearch indexes and pgvector embeddings for releases + news articles.',
	'Docker Compose stack deploying Postgres+pgvector, Redis, Meilisearch, Flask API, scheduler, Node workers, and Grafana Alloy.',
	'Docs/runbooks, monitoring guides, and evaluation datasets for reproducible operations.',
];

const entitySearch = [
	'Entity extraction combines curated NZ dictionaries, regex detectors, spaCy models, and canonicalizers before persisting normalized entities + mentions (entity_extraction/*).',
	'External news RSS feeds are ingested, deduped, embedded, entity-tagged, and pruned for cross-linking (crosslink/news_ingestor.py).',
	'Hybrid linker falls back from semantic hits to lexical cosine similarity so every release can cite rationale-backed external articles (crosslink/linker.py).',
	'Search service keeps Meilisearch indexes and pgvector embeddings in sync while embeddings come from the OpenAI-backed service (search/service.py, embeddings/service.py).',
];

const queueAutomation = [
	'BullMQ workers share a base class that streams metrics, stores runs/failures in Postgres, and currently logs placeholder ingest/summarize jobs (workers/src/workers/*).',
	'Worker metrics registry + Express server expose `/health` and `/metrics` so queue depth and latency stay observable.',
	'CLI helpers enqueue demo work or replay failed jobs from the database, speeding up retry workflows.',
	'Python scripts such as `generate_summaries.py` let operators backfill summaries without touching the API.',
];

const operationsList = [
	'Passwordless admin login, bearer sessions, audit logs, and JSON APIs for entities, flags, and job runs live under `/api/admin/*`.',
	'Prometheus and Sentry instrumentation span ingestion runs, scheduler jobs, RSS fetches, HTTP routes, summaries, verification, and news ingestion.',
	'Docker Compose provisions Postgres+pgvector, Redis, Meilisearch, API, scheduler, Node worker, and Grafana Alloy so local stacks mirror staging.',
	'Monitoring guides, evaluation datasets, and runbooks document scrape configs, dashboards, alert ideas, and dataset refresh steps.',
];

const nextSteps = [
	{ title: 'Queue automation', detail: 'Populate BullMQ workers with real ingest/summary tasks and wire cost breaker hooks.' },
	{ title: 'Search UX', detail: 'Expose the existing hybrid search endpoints through a React client or CLI to validate relevance.' },
	{ title: 'Evaluation loop', detail: 'Wire the evaluation datasets into CI to run nightly ROUGE/NDCG and retrieval metrics.' },
	{ title: 'Admin tooling', detail: 'Expand /api/admin flows for prompt testing, entity QA, and job overrides.' },
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
						BeeLine ingests official NZ government communications, summarizes them with GPT-4o-mini, verifies each claim, and cross-links releases to independent coverage. Everything from RSS ingestion to LLM guardrails and cost tracking is implemented in the repository—no vaporware, just a production-ready stack.
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
							The Flask API ships health, metrics, `/ingest/run`, `/releases`, `/search`, `/jobs`, `/costs`, and OTP-gated admin routes. Every LLM call records prompt versions, latency, token counts, and costs so statements can be traced back to the source sentence.
						</p>
						<p className="text-slate-200">
							CLI tooling and the Python scheduler can run or backfill ingestion jobs on configurable cadences. BullMQ workers already stream metrics and log placeholder ingest/summarize jobs, ready to be wired into the pipeline as the next milestone.
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
								`beeline_ingestor/summarization/service.py` selects active prompt templates, caches outputs in Redis, records token/cost telemetry, and persists structured payloads. Claims flow into verification services (`verification/*`), which retrieve evidence sentences and flag questionable statements before surfacing them via the API.
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
					<h2 className="text-3xl font-semibold text-white">Entities, Linking & Search</h2>
					<ul className="mt-6 space-y-3 text-slate-200">
						{entitySearch.map((item) => (
							<li key={item} className="flex gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</section>

				<section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
					<div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
						<h3 className="text-2xl font-semibold text-white">Runbook-Driven Operations</h3>
						<p className="mt-4 text-slate-200">
							Docker Compose spins up Postgres, Redis, Meilisearch, API, scheduler, workers, and Grafana Alloy. Monitoring configs export metrics + alerts to Grafana Cloud, and runbooks document responses for cost breaker events, queue backlog, or LLM outages.
						</p>
						<ul className="mt-6 space-y-3 text-sm text-slate-200">
							{operationsList.map((item) => (
								<li key={item} className="flex gap-3">
									<span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
									<span>{item}</span>
								</li>
							))}
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

				<section className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
					<h2 className="text-3xl font-semibold text-white">Queues & Automation</h2>
					<ul className="mt-6 space-y-3 text-slate-200">
						{queueAutomation.map((item) => (
							<li key={item} className="flex gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</section>
			</main>
		</PageContainer>
	);
}
