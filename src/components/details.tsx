import { details } from "#/data/details";

export default function Details() {
  return (
    <section className="wrapper">
      <div className="container h-24 flex justify-between items-center px-4 md:px-16 text-xs md:text-sm uppercase gap-2 py-4 md:py-0">
        <h3>{details.left}</h3>
        <h3>{details.right}</h3>
      </div>
    </section>
  );
}
