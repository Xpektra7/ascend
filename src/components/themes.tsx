import Pill from "./pill";

function ThemeCard({
	index,
	title,
	description,
	color,
}: {
	index: string;
	title: string;
	description: string;
	color: string;
}) {
	return (
		<div className=" flex flex-col text-left">
			<div className={`aspect-square w-full ${color}`} />
			<div className="p-8 flex flex-col gap-3">
				<span className="text-sm">{index}</span>
				<h3 className="text-2xl">{title}</h3>
				<p className="leading-relaxed">{description}</p>
			</div>
		</div>
	);
}

export default function Themes() {
	return (
		<section className="wrapper">
			<div className="container py-32 flex flex-col items-center text-center gap-8 ">
				<Pill text="MAIN THEMES" />
				{/*<h2 className="text-5xl md:text-6xl">Three tracks, one vision.</h2>*/}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
					<ThemeCard
						index="001"
						title="AI & Creativity"
						description="Exploring how artificial intelligence is reshaping design workflows, creative expression, and the role of the modern designer."
						color="bg-zinc-800"
					/>
					<ThemeCard
						index="002"
						title="Product & Systems"
						description="Scalable design systems, product strategy, and building for longevity in a rapidly shifting technological landscape."
						color="bg-zinc-700"
					/>
					<ThemeCard
						index="003"
						title="Future of Craft"
						description="Emerging tools, hands-on workshops, and the evolving relationship between maker, material, and machine."
						color="bg-zinc-600"
					/>
				</div>
			</div>
		</section>
	);
}
