import { days } from "#/data/days";
import Pill from "./pill";

function ThemeCard({
	index,
	title,
	description,
	image,
}: {
	index: string;
	title: string;
	description: string;
	image: string;
}) {
	return (
		<div className=" flex flex-col text-left">
			<img src={image} alt={title} className="aspect-square w-full object-cover" />
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
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{days.map((day) => (
						<ThemeCard
							key={day.themeIndex}
							index={day.themeIndex}
							title={day.themeTitle}
							description={day.themeDescription}
							image={day.themeImage}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
