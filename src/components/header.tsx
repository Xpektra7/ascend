import Button from "./button";

export default function Header() {
	return (
		<section className="wrapper fixed top-0 inset-x-0 z-50 bg-backround">
			<div className="container h-24 flex justify-between items-center px-8 md:px-16">
				<h1 className="text-2xl">ASCEND</h1>
				<div className="flex items-center">
					<Button text="about" />
					<Button text="speakers" />
					<Button text="schedule" />
					<Button text="location" />
				</div>
				<Button text="get tickets" variant="button" />
			</div>
		</section>
	);
}
