import Image from 'next/image';
import Link from 'next/link';
import PageContainer from '../../components/PageContainer';

const techStack = [
	'Python',
	'scikit-learn',
	'XGBoost',
	'NumPy',
	'Pandas',
	'matplotlib',
	'Seaborn',
	'DSSP parsing',
	'PDB processing',
	'Cross-validation',
	'Feature engineering',
];

const featureBuckets = [
	{
		title: 'FASTA-derived sequence descriptors',
		description:
			'Composition-heavy sequence descriptors capture amino acid balance, charge distribution, and hydrophobic trends that influence stretch response.',
		items: [
			'Amino acid composition vectors and physicochemical group ratios',
			'Net charge, fraction charged residues, and calculated pI',
			'Kyte-Doolittle hydrophobicity mean and variance per domain',
		],
	},
	{
		title: 'DSSP secondary-structure metrics',
		description:
			'Hand-crafted strand statistics summarize β-architecture complexity beyond simple counts.',
		items: [
			'Strand and helix fractions with context on β-richness',
			'Mean strand/segment lengths (Ln_A, Lm_A) and longest strand Lf_A',
			'Per-residue transition frequencies to quantify architectural disorder',
		],
	},
	{
		title: 'PDB geometry & contact topology',
		description:
			'3D descriptors approximate packing and solvent exposure drivers of mechanostability.',
		items: [
			'Cα–Cα contact density within 8Å and β-sheet topology proxies',
			'Radius of gyration alongside solvent-accessible surface area (SASA)',
			'Percent buried residues to flag tightly packed cores',
		],
	},
];

const validationFocus = [
	'5-fold cross-validation for initial screening across all models',
	'Nested CV for Ridge/Lasso α selection to avoid optimistic bias',
	'Leave-One-Out CV (LOOCV) on nonlinear ensembles to maximize data use',
	'Removal of perfectly collinear descriptors (e.g., Lf_A vs residue count)',
	'Strict separation of feature scaling statistics inside each fold',
];

const resultsComparison = [
	{
		title: 'Linear baselines',
		summary: 'Length-only, Ridge, and Lasso regressors struggled with the multi-collinear 70-feature space.',
		metrics: [
			{ label: 'R²', value: '≤ 0.0 (often 	)' },
			{ label: 'MAE', value: '≈ 0.18' },
			{ label: 'RMSE', value: '≈ 0.25' },
		],
		notes:
			'Even after alpha tuning, penalties simply zeroed weights and failed to beat the simple residue-length baseline, highlighting the limits of linear additivity in this regime.',
	},
	{
		title: 'Nonlinear ensembles',
		summary: 'Random Forest (400 trees, depth=5) and XGBoost (600 trees, lr=0.05) captured distributed interactions.',
		metrics: [
			{ label: 'R²', value: '≈ 0.30' },
			{ label: 'MAE', value: '≈ 0.15' },
			{ label: 'RMSE', value: '≈ 0.21' },
		],
		notes:
			'Performance held across 5-fold and LOOCV splits, showing ~30% of Fmax variance is predictable without implying causality.',
	},
];

const galleryImages = [
	{
		title: 'Correlation heatmap',
		description: 'Multicollinearity across ~70 descriptors motivated feature pruning and regularization-aware validation.',
		src: '/images/compsci380/correlation_heatmap.png',
	},
	{
		title: 'Fmax relationships',
		description: 'Pairwise views reinforce that no single descriptor dominates mechanical strength.',
		src: '/images/compsci380/fmax_relationships.png',
		boxed: true,
	},
	{
		title: 'Random Forest importances',
		description: 'Contact density and strand topology emerge as leading nonlinear cues.',
		src: '/images/compsci380/feature_importance_random_forest.png',
	},
	{
		title: 'XGBoost importances',
		description: 'Boosting favors combinations of SASA, β-topology, and charge balance features.',
		src: '/images/compsci380/feature_importance_xgboost.png',
	},
];

const futureDirections = [
	'Larger β-rich domain collections spanning experimental and simulated pulls',
	'Graph neural networks that reason over residue-level contact maps',
	'Geometric deep-learning features (curvature, torsion, interface exposure)',
	'Augment descriptors with molecular dynamics-derived mechanical observables',
];

export default function ProjectPage() {
	return (
		<PageContainer className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-slate-100">
			<main>
			<section className="relative isolate overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-20">
				<div className="mx-auto max-w-5xl">
					<p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Academic ML Research · 6-week sprint</p>
					<h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
						Predicting Mechanical Strength of β-Sheet Protein Domains
					</h1>
					<p className="mt-6 text-lg text-slate-200 sm:text-xl">
						Sequence-, secondary-structure-, and geometry-aware descriptors were combined with nonlinear ensembles to estimate the peak stretching force (Fmax) observed in Sulkowska &amp; Cieplak&apos;s β-rich protein survey.
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<Link
							href="https://github.com/matthue-lee/compsci_380"
							target="_blank"
							rel="noreferrer"
							className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
						>
							View GitHub Repository
						</Link>
						<Link
							href="/papers/compsci_380-Final.pdf"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:text-white"
						>
							Download PDF Report
						</Link>
					</div>
					<div className="mt-10 grid gap-6 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 sm:grid-cols-2">
						<div>
							<p className="text-xs uppercase tracking-[0.3em] text-slate-400">Research Question</p>
							<p className="mt-3 text-base text-slate-100">
								How much of the mechanical strength (Fmax) variance across 54 β-sheet-rich protein domains can be explained from engineered descriptors derived from FASTA, DSSP, and PDB sources?
							</p>
						</div>
						<div>
							<p className="text-xs uppercase tracking-[0.3em] text-slate-400">Challenges</p>
							<ul className="mt-3 space-y-2 text-base text-slate-100">
								<li>Only 54 samples versus ~70 correlated descriptors</li>
								<li>Potential overfitting and signal dilution in linear models</li>
								<li>Need for rigorous cross-validation and honest uncertainty</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="px-6 py-16">
				<div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-3">
					<div className="lg:col-span-2 space-y-6">
						<h2 className="text-3xl font-semibold text-white">Research Overview</h2>
						<p className="text-lg text-slate-200">
							Predicting force-clamp strength in β-sheet domains is difficult because mechanical stability emerges from distributed interactions such as hydrogen-bond ladders, strand topology, and solvent shielding. Length alone is insufficient, and causal claims are inappropriate with such a small cohort. This study therefore targets predictive—not causal—insight by quantifying how far carefully validated ML can push accuracy without overstating confidence.
						</p>
						<p className="text-lg text-slate-200">
							A bespoke feature set translates FASTA sequence statistics, DSSP secondary-structure summaries, and PDB-level geometric descriptors into a compact dataframe. Each transformation is traceable, enabling reproducible notebooks and sanity checks for collinearity. Emphasis is placed on modeling discipline over flashy metrics: the best models explain roughly 30% of Fmax variance, underscoring that remaining variance likely depends on nonlinear physics yet to be captured.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white">Technical Stack</h3>
						<div className="mt-4 flex flex-wrap gap-3">
							{techStack.map((tool) => (
								<span key={tool} className="rounded-full border border-slate-700 px-4 py-1 text-sm text-slate-200">
									{tool}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="bg-slate-900/30 px-6 py-16">
				<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-6">
						<h2 className="text-3xl font-semibold text-white">Dataset &amp; Feature Engineering</h2>
						<p className="text-slate-200">
							The dataset contains 54 β-rich domains curated from Sulkowska &amp; Cieplak&apos;s theoretical stretching survey. Roughly 70 engineered descriptors describe sequence balance, secondary-structure geometry, and packing density. Multicollinearity is pervasive, so perfectly correlated pairs (notably Lf_A vs residue count) are removed before modeling, and all statistics are recomputed inside each CV split to avoid leakage.
						</p>
						<p className="text-slate-200">
							Sequence descriptors capture amino acid charge and hydrophobic balance, DSSP-derived metrics summarize β-topology length scales, and PDB-derived features quantify contact density, SASA, and beta-sheet connectivity. These engineered signals provide richer hypotheses than scalar length alone while retaining interpretability needed for structural biology discussions.
						</p>
						<div className="grid gap-6 md:grid-cols-2">
							{featureBuckets.map((bucket) => (
								<div key={bucket.title} className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5">
									<p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">{bucket.title}</p>
									<p className="mt-2 text-sm text-slate-300">{bucket.description}</p>
									<ul className="mt-3 space-y-2 text-sm text-slate-200">
										{bucket.items.map((item) => (
											<li key={item}>• {item}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
					<figure className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4">
						<Image
							src="/images/compsci380/correlation_heatmap.png"
							alt="Correlation heatmap for engineered descriptors"
							width={1200}
							height={900}
							className="rounded-2xl object-cover"
						/>
						<figcaption className="mt-4 text-sm text-slate-300">
							Correlation structure reveals clusters of redundant descriptors, guiding pruning and informing the need for nonlinear models that can consider interactions without assuming independence.
						</figcaption>
					</figure>
				</div>
			</section>

			<section className="px-6 py-16">
				<div className="mx-auto max-w-6xl space-y-12">
					<div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
						<div>
							<h2 className="text-3xl font-semibold text-white">Validation Strategy</h2>
							<p className="mt-4 text-lg text-slate-200">
								Every metric reported stems from cross-validation; there is no single train/test split that could inflate performance given only 54 samples. The workflow emphasized reproducibility and conservative estimates.
							</p>
							<ul className="mt-6 space-y-3 text-slate-200">
								{validationFocus.map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="space-y-6">
							<h3 className="text-3xl font-semibold text-white">Model Results</h3>
							<div className="grid gap-6 md:grid-cols-2">
								{resultsComparison.map((entry) => (
									<div key={entry.title} className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6">
										<p className="text-sm uppercase tracking-[0.3em] text-indigo-200">{entry.title}</p>
										<p className="mt-3 text-base font-semibold text-white">{entry.summary}</p>
										<dl className="mt-5 space-y-2 text-sm text-slate-200">
											{entry.metrics.map((metric) => (
												<div key={metric.label} className="flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-2">
													<dt className="font-semibold text-indigo-200">{metric.label}</dt>
													<dd>{metric.value}</dd>
												</div>
											))}
										</dl>
										<p className="mt-4 text-sm text-slate-300">{entry.notes}</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="rounded-3xl border border-indigo-500/50 bg-indigo-500/10 p-8 text-slate-100">
						<p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200">Key Insight</p>
						<p className="mt-4 text-lg">
							Nonlinear models explain roughly 30% of Fmax variance by capturing distributed structural interactions. Linear models that assume additive effects cannot match the data, reiterating that mechanostability is governed by collective β-sheet architecture rather than any single descriptor.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-slate-900/40 px-6 py-16">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-semibold text-white">Results</h2>
					<div className="mt-10 grid gap-8 md:grid-cols-2">
						{galleryImages.map((item) => (
							<figure key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950/40 p-4">
								{item.boxed ? (
									<div className="flex h-full w-full items-center justify-center">
										<div className="w-full max-w-[85%] rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
											<Image
												src={item.src}
												alt={item.title}
												width={1000}
												height={650}
												className="rounded-xl object-cover"
											/>
										</div>
									</div>
								) : (
									<Image
										src={item.src}
										alt={item.title}
										width={1000}
										height={650}
										className="rounded-2xl object-cover"
									/>
								)}
								<figcaption className="mt-3 text-sm text-slate-300">
									<span className="font-semibold text-white">{item.title}:</span> {item.description}
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</section>

			<section className="px-6 py-16">
				<div className="mx-auto max-w-5xl space-y-12">
					<div className="grid gap-8 md:grid-cols-2">
						<div className="rounded-3xl border border-slate-800 bg-slate-950/30 p-8">
							<h3 className="text-2xl font-semibold text-white">Future Directions</h3>
							<ul className="mt-6 space-y-3 text-slate-200">
								{futureDirections.map((direction) => (
									<li key={direction} className="flex gap-3">
										<span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
										<span>{direction}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-3xl border border-slate-800 bg-slate-950/30 p-8">
							<h3 className="text-2xl font-semibold text-white">Reproducibility</h3>
							<p className="mt-4 text-slate-200">
								The public repository exposes notebooks, feature-generation scripts, and configuration files used for all experiments. Every figure on this page comes from that code, ensuring transparent provenance.
							</p>
							<ol className="mt-6 space-y-3 text-sm text-slate-200">
								<li>
									<span className="font-semibold text-white">Clone:</span> <code className="rounded bg-slate-900 px-2 py-1">git clone https://github.com/matthue-lee/compsci_380</code>
								</li>
								<li>
									<span className="font-semibold text-white">Environment:</span> create a Python ≥3.10 virtual environment and install the repository requirements (<code className="rounded bg-slate-900 px-2 py-1">pip install -r requirements.txt</code>).
								</li>
								<li>
									<span className="font-semibold text-white">Run:</span> execute the documented notebooks or training scripts to regenerate cross-validation tables and figures. All scripts log fold-wise metrics for auditing.
								</li>
							</ol>
							<div className="mt-6 flex flex-wrap gap-4">
								<Link
									href="https://github.com/matthue-lee/compsci_380"
									target="_blank"
									rel="noreferrer"
									className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-100 transition hover:border-white"
								>
									GitHub Repository
								</Link>
							<Link
									href="/papers/compsci_380-Final.pdf"
									target="_blank"
									rel="noreferrer"
									className="rounded-full border border-indigo-400 px-5 py-2 text-sm text-indigo-200 transition hover:bg-indigo-500/20"
								>
									Download Report
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			</main>
		</PageContainer>
	);
}
