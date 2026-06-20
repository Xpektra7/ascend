import { createFileRoute } from "@tanstack/react-router";
import Details from "#/components/details";
import Header from "#/components/header";
import Hero from "#/components/hero";
import Overview from "#/components/overview";
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
    </div>
  );
}
