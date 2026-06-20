import { days } from "#/data/days";
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
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{days.map((day) => (
						<ThemeCard
							key={day.themeIndex}
							index={day.themeIndex}
							title={day.themeTitle}
							description={day.themeDescription}
							color={day.color}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
