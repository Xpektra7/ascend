import { createFileRoute } from "@tanstack/react-router";
import Agenda from "#/components/agenda";
import Cta from "#/components/cta";
import Details from "#/components/details";
import Faq from "#/components/faq";
import Footer from "#/components/footer";
import Header from "#/components/header";
import Hero from "#/components/hero";
import Location from "#/components/location";
import Overview from "#/components/overview";
import Partners from "#/components/partners";
import Pricing from "#/components/pricing";
import Schedule from "#/components/schedule";
import Speakers from "#/components/speakers";
import Themes from "#/components/themes";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="">
			<Header />
			<Hero />
			<Details />
			<Overview />
			<Themes />
			<Speakers />
			<Schedule />
			<Agenda />
			<Partners />
			<Pricing />
			<Location />
			<Faq />
			<Cta />
			<Footer />
		</div>
	);
}
