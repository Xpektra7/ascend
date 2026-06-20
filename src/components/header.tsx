import { Link } from "@tanstack/react-router";
import Button from "./button";

export default function Header() {
	return (
		<section className="wrapper fixed top-0 inset-x-0 z-50 bg-backround">
			<div className="container h-24 flex justify-between items-center px-8 md:px-16">
				<Link to="/"><h1 className="text-xl md:text-2xl">ASCEND</h1></Link>
				<div className="hidden md:flex items-center">
					<Link to="/" hash="overview"><Button text="about" /></Link>
					<Link to="/" hash="speakers"><Button text="speakers" /></Link>
					<Link to="/" hash="schedule"><Button text="schedule" /></Link>
					<Link to="/" hash="location"><Button text="location" /></Link>
				</div>
				<Link to="/" hash="passes"><Button text="get tickets" variant="button" /></Link>
			</div>
		</section>
	);
}
