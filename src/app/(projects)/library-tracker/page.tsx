'use client';

import PageContainer from '../../components/PageContainer';

const stack = [
	'Python 3.11',
	'PyTorch · TorchVision',
	'OpenCV',
	'Pillow',
	'PaddleOCR',
	'Tesseract',
	'NumPy',
	'imutils',
	'Matplotlib (experiments)',
];

const workflow = [
	'CLI entry point (`main.py`) decides whether to run the full detection → crop → OCR chain or skip detection via `--cropped`.',
	'Spine detector (`spinedetector.py`) wraps `fasterrcnn_resnet50_fpn` and filters aspect ratios between 2.5 and 8.0, then applies `torchvision.ops.nms`.',
	'Crop generator (`crop_boxes.py`) converts frames to Pillow RGB and writes `book_#.jpg` crops under `runs/crops/` for reuse.',
	'OCR engines (`classic_pipeline.py`, `dbnet_pipeline.py`) apply CLAHE/bilateral/sharpen or Paddle DBNet + Tesseract to emit `{text, conf, box}` records.',
	'Debug preview (`main.py::_save_detection_preview`) overlays boxes on the shelf and saves `<stem>_first_detection.jpg` inside the output directory.',
];

const engines = [
	{
		title: 'Classic Pipeline',
		bullets: [
			'OpenCV CLAHE + bilateral denoise + sharpening tuned for spine text.',
			'Optional (currently disabled) Tesseract OSD deskew helper for speed/reliability trade-offs.',
			'Runs `pytesseract.image_to_data --oem 3 --psm 6`, aggregates non-blank tokens, and reports a consolidated block with average confidence.',
		],
	},
	{
		title: 'DBNet + Tesseract',
		bullets: [
			'PaddleOCR `PP-OCRv5_server_det` locates fine-grained polygons per crop.',
			'Orientation classifier (PP-LCNet) deskews before light sharpening.',
			'Tesseract (`image_to_string` + `image_to_data`) returns one block per polygon with detector + OCR confidences.',
		],
	},
];

const supportingScripts = [
	{ name: 'hough.py', detail: 'Canny + Hough sweeps that dump vertical edge visualisations into `output_images/`.' },
	{ name: 'sepBooks.py', detail: 'Early rectangular contour counter that informed blur kernel sizes (odd radii 7–37).' },
	{ name: 'rev.py', detail: 'Alternate rectangle finder using morphology + probabilistic Hough for rapid prototyping.' },
	{ name: 'rcnn.py', detail: 'Matplotlib notebook validating TorchVision detections on `test1.jpg` before shipping to `spinedetector.py`.' },
];

const assets = [
	'`test1.jpg`, `test2.jpg` — benchmark shelves used throughout development.',
	'`runs/` — default workspace with `crops/`, detection overlays, and optional preprocessing PNGs when `--outdir` is set.',
	'`output_images/` — batches of diagnostic plots from Hough/edge experiments.',
];

export default function LibraryTrackerPage() {
	return (
		<PageContainer className="bg-gray-50 text-slate-900">
			<main className="space-y-16 px-6 py-16">
				<section className="mx-auto max-w-5xl text-center">
					<p className="text-sm uppercase tracking-[0.4em] text-indigo-500">Library Tracker</p>
					<h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
						Detect, crop, and read every spine on a shelf photograph
					</h1>
					<p className="mt-6 text-lg text-slate-600">
						A command-line workflow that turns full-shelf photos into per-book OCR transcripts. TorchVision handles spine detection, Pillow writes the crops, and interchangeable OCR engines recover titles with confidence scores.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
						<span>Detection → Crop → OCR</span>
						<span>Runs entirely offline</span>
						<span>Debug artefacts in `runs/`</span>
					</div>
				</section>

				<section className="mx-auto max-w-5xl rounded-3xl border border-indigo-100 bg-white p-8">
					<h2 className="text-3xl font-semibold text-slate-900">Project Overview</h2>
					<p className="mt-4 text-slate-600">
						The goal is simple: automate cataloguing of physical shelves by detecting spines, cropping them, and running OCR so librarians can bootstrap inventories without manual data entry. Inputs can be a JPEG/PNG shelf photo or a directory of pre-cropped spines; outputs include OCR transcripts, detection previews, and intermediate artefacts stored under `runs/`.
					</p>
				</section>

				<section className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-3xl border border-indigo-100 bg-white p-8">
						<h3 className="text-sm uppercase tracking-[0.35em] text-indigo-500">Stack</h3>
						<div className="mt-4 flex flex-wrap gap-3">
							{stack.map((tool) => (
								<span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
									{tool}
								</span>
							))}
						</div>
					</div>
					<div className="rounded-3xl border border-indigo-100 bg-white p-8">
						<h3 className="text-sm uppercase tracking-[0.35em] text-indigo-500">End-to-End Workflow</h3>
						<ol className="mt-4 space-y-3 text-sm text-slate-600">
							{workflow.map((step, index) => (
								<li key={step} className="flex gap-3">
									<span className="font-semibold text-indigo-500">{index + 1}.</span>
									<span>{step}</span>
								</li>
							))}
						</ol>
					</div>
				</section>

				<section className="mx-auto max-w-6xl rounded-3xl border border-indigo-100 bg-white p-8">
					<h2 className="text-3xl font-semibold text-slate-900">OCR Engines</h2>
					<div className="mt-6 grid gap-6 md:grid-cols-2">
						{engines.map((engine) => (
							<div key={engine.title} className="rounded-3xl border border-slate-100 p-6">
								<p className="text-sm uppercase tracking-[0.3em] text-indigo-500">{engine.title}</p>
								<ul className="mt-4 space-y-3 text-sm text-slate-600">
									{engine.bullets.map((bullet) => (
										<li key={bullet} className="flex gap-3">
											<span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
											<span>{bullet}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				<section className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
					<div className="rounded-3xl border border-indigo-100 bg-white p-8">
						<h2 className="text-2xl font-semibold text-slate-900">Supporting Scripts & Experiments</h2>
						<ul className="mt-6 space-y-3 text-slate-600">
							{supportingScripts.map((script) => (
								<li key={script.name}>
									<p className="font-semibold text-slate-800">{script.name}</p>
									<p className="text-sm">{script.detail}</p>
								</li>
							))}
						</ul>
					</div>
					<div className="rounded-3xl border border-indigo-100 bg-white p-8">
						<h2 className="text-2xl font-semibold text-slate-900">Sample Assets & Outputs</h2>
						<ul className="mt-6 space-y-3 text-slate-600">
							{assets.map((asset) => (
								<li key={asset} className="flex gap-3">
									<span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
									<span>{asset}</span>
								</li>
							))}
						</ul>
					</div>
				</section>

				<p className="text-center text-xs uppercase tracking-[0.4em] text-slate-400">
					From raw shelf photo to searchable titles · Offline-first tooling
				</p>
			</main>
		</PageContainer>
	);
}
