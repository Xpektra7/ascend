import Button from "./button";

export default function Hero() {
	return (
		<section className="wrapper">
			<div className="container h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8">
				<p className="text-xl">3-day AI & design conference</p>
				<h1 className="text-7xl">ASCEND 2026</h1>
				<p className="max-w-lg text-center text-xl">
					Exploring how AI is reshaping creativity, digital products, and the
					future.
				</p>
				<div className="flex gap-4">
					<Button text="get tickets" variant="button" />
					<Button text="view schedule" variant="secondary" />
				</div>
			</div>
		</section>
	);
}
