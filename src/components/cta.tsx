import { Link } from "@tanstack/react-router";
import Button from "./button";

export default function Cta() {
  return (
    <section className="wrapper relative overflow-hidden">
      <div className="container relative py-32 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-center bg-cover -z-1" />
        <div className="absolute inset-0 bg-backround/70 -z-1" />
        <h2 className="text-4xl md:text-6xl mb-6">Be part of what's next.</h2>
        <p className="max-w-2xl text-base md:text-xl mb-12">
          Three days of talks, panels, and conversations exploring where design
          and technology go next.
        </p>
        <Link to="/" hash="passes"><Button text="get tickets" variant="secondary" /></Link>
      </div>
    </section>
  );
}
