import { routes } from "#/data/routes";
import Pill from "./pill";

function RouteCard({
  method,
  description,
  action,
}: {
  method: string;
  description: string;
  action: string;
}) {
  return (
    <div className="border border-border p-8 flex flex-col gap-4">
      <h3 className="text-xl">{method}</h3>
      <p className="text-sm text-muted-foregroundleading-relaxed">
        {description}
      </p>
      <div className="mt-auto">
        <button
          type="button"
          className="w-full font-heading px-8 py-4 cursor-pointer bg-transparent text-foreground! border border-border hover:bg-foreground/5 transition-colors duration-300 ease-in-out uppercase text-sm"
        >
          {action}
        </button>
      </div>
    </div>
  );
}

export default function Location() {
  return (
    <section className="wrapper">
      <div className="container py-32 flex flex-col items-center text-center px-8 md:px-32">
        <Pill text="LOCATION" />
        <h2 className="text-4xl md:text-6xl mt-6 mb-6">
          Getting to the venue.
        </h2>
        <p className="max-w-2xl text-base md:text-xl mb-16">
          Ikoyi, Lagos — easily accessible by air, road, and rail.
        </p>

        <div className="w-full aspect-3/2 md:aspect-4/1 bg-zinc-800/50 mb-20 flex items-center justify-center">
          <span className="text-muted-foreground text-sm uppercase tracking-wider">
            map placeholder
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {routes.map((r) => (
            <RouteCard key={r.method} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
