import { brands } from "#/data/brands";
import Pill from "./pill";

const brandList = [
  ...brands.map((b, i) => ({ name: b, id: `a-${i}` })),
  ...brands.map((b, i) => ({ name: b, id: `b-${i}` })),
];

export default function Partners() {
  return (
    <section className="wrapper">
      <div className="container py-32 flex flex-col items-center text-center px-4 md:px-16">
        <Pill text="PARTNERS" />
        <h2 className="text-4xl md:text-6xl mt-6 mb-6">Trusted by the best.</h2>
        <p className="max-w-2xl text-base md:text-xl mb-20">
          We collaborate with leading organisations pushing the boundaries of
          design and technology.
        </p>
        <div className="w-full overflow-hidden">
          <div className="flex gap-8 w-max animate-scroll">
            {brandList.map((brand) => (
              <div
                key={brand.id}
                className="group size-28 border border-border hover:border-foreground flex items-center justify-center shrink-0 transition-colors duration-300"
              >
                <span className="text-xs text-text group-hover:text-foreground transition-colors duration-300 tracking-wider uppercase font-heading">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
