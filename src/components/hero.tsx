import Button from "./button";

export default function Hero() {
  return (
    <section className="wrapper relative overflow-hidden">
      <div className="container relative h-[calc(100vh-6rem)] flex flex-col text-foreground! items-center justify-center gap-8 px-8 md:px-16">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-center bg-cover -z-1" />
        <div className="absolute inset-0 bg-backround/70 -z-1" />
        <p className="text-base text-foreground! md:text-xl">
          3-day AI & design conference
        </p>
        <h1 className="text-6xl text-center md:text-8xl">ASCEND 2026</h1>
        <p className="max-w-lg text-foreground! text-center text-base md:text-xl">
          Exploring how AI is reshaping creativity, digital products, and the
          future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button text="get tickets" variant="button" />
          <Button text="view schedule" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
