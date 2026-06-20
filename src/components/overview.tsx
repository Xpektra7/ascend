import Pill from "./pill";

export function MetricCard({
	metric,
	label,
}: {
	metric: string;
	label: string;
}) {
	return (
		<div className="bg-foreground/5 p-12 flex flex-col items-center gap-3">
			<h2 className="text-5xl">{metric}</h2>
			<span className="text-muted-foreground text-sm uppercase tracking-wider">
				{label}
			</span>
		</div>
	);
}

export default function Overview() {
	return (
		<section className="wrapper">
			<div className="container py-32 px-8 md:px-32 flex flex-col items-center text-center gap-4">
				<Pill text="OVERVIEW" />

				<h2 className="text-4xl md:text-6xl">Where design goes next.</h2>

				<p className="max-w-2xl text-xl mb-16">
					Ascend brings together designers and builders exploring what's next:
					from emerging tools to new creative workflows shaping digital
					products.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
					<MetricCard metric="20" label="voices shaping future" />
					<MetricCard metric="12" label="curated sessions" />
					<MetricCard metric="3" label="days in Ikoyi, Lagos" />
				</div>
			</div>
		</section>
	);
}
