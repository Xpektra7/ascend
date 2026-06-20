import { tiers } from "#/data/pricing";
import Pill from "./pill";

function TierCard({
  name,
  note,
  price,
  per,
  features,
  popular,
}: {
  name: string;
  note: string;
  price: string;
  per: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`flex flex-col text-left p-10 border ${popular ? "border-foreground/20 bg-foreground/5 scale-[1.02]" : "border-border"}`}
    >
      {popular && <Pill text="POPULAR" />}
      <h3 className="text-xl mt-6">{name}</h3>
      <p className="text-sm mt-1">{note}</p>

      <div className="mt-8 mb-8">
        <span className="text-4xl font-heading!">₦{price}</span>
        <span className="text-sm ml-2">/{per}</span>
      </div>

      <div className="border-t border-border pt-8 flex flex-col gap-4">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-3 text-sm ">
            <span className="text-foreground mt-0.5">•</span>
            {f}
          </div>
        ))}
      </div>
      <div className="mt-auto pt-10">
        <button
          type="button"
          className="w-full font-heading px-8 py-4 cursor-pointer bg-transparent text-foreground! border border-border hover:bg-foreground/5 transition-colors duration-300 ease-in-out uppercase"
        >
          get tickets
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="wrapper">
      <div className="container py-32 px-8 md:px-16 flex flex-col items-center text-center">
        <Pill text="PASSES" />
        <h2 className="text-4xl md:text-6xl mt-6 mb-6">
          Choose your experience.
        </h2>
        <p className="max-w-2xl text-base md:text-xl mb-20">
          Three tiers built for designers, builders, and leaders — pick the one
          that fits your journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <TierCard key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
