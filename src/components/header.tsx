import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import Button from "./button";

export default function Header() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => { document.body.style.overflow = ""; };
	}, [open]);

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

				<div className="hidden md:block">
					<Link to="/" hash="passes"><Button text="get tickets" variant="button" /></Link>
				</div>

				<button
					type="button"
					aria-label="Menu"
					onClick={() => setOpen(!open)}
					className="relative z-50 md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
				>
					<span
						className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${open ? "rotate-45 translate-y-1" : ""}`}
					/>
					<span
						className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-1" : ""}`}
					/>
				</button>
			</div>

			<div
				className={`md:hidden fixed inset-y-0 right-0 w-full bg-backround z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} pt-24`}
			>
				<Link to="/" hash="overview" onClick={() => setOpen(false)}><Button text="about" /></Link>
				<Link to="/" hash="speakers" onClick={() => setOpen(false)}><Button text="speakers" /></Link>
				<Link to="/" hash="schedule" onClick={() => setOpen(false)}><Button text="schedule" /></Link>
				<Link to="/" hash="location" onClick={() => setOpen(false)}><Button text="location" /></Link>
				<Link to="/" hash="passes" onClick={() => setOpen(false)}><Button text="get tickets" variant="button" /></Link>
			</div>
		</section>
	);
}
