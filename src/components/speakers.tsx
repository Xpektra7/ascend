import { speakers } from "#/data/speakers";
import Pill from "./pill";

function SpeakerCard({
	name,
	title,
	company,
	image,
}: {
	name: string;
	title: string;
	company: string;
	image: string;
}) {
	return (
		<div className="border border-border flex flex-col text-left">
			<img src={image} alt={name} className="aspect-square w-full object-cover" />
			<div className="p-6 flex flex-col gap-1">
				<h3 className="text-lg">{name}</h3>
				<p className="text-sm text-muted-foreground">
					{title} <span className="text-foreground/30">|</span> {company}
				</p>
			</div>
		</div>
	);
}

export default function Speakers() {
	return (
		<section className="wrapper" id="speakers">
			<div className="container py-32 flex flex-col items-center text-center gap-4">
				<Pill text="SPEAKERS" />
				<h2 className="text-5xl md:text-6xl">Meet the lineup.</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
					{speakers.map((s) => (
						<SpeakerCard key={s.name} {...s} />
					))}
				</div>
			</div>
		</section>
	);
}
