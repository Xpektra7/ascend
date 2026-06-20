import Pill from "./pill";

export default function Schedule() {
	return (
		<section className="wrapper">
			<div className="container py-32 flex flex-col items-center text-center px-8 md:px-16">
				<Pill text="SCHEDULE" />
				<h2 className="text-4xl md:text-6xl mt-6 mb-6">What you can expect</h2>
				<p className="max-w-2xl text-base md:text-xl">
					Ascend brings together designers and builders exploring what's next:
					from emerging tools to new creative workflows shaping digital
					products.
				</p>
			</div>
		</section>
	);
}
