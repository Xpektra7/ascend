import { routes } from "#/data/routes";
import Pill from "./pill";

function RouteCard({
  method,
  description,
  action,
  url,
}: {
  method: string;
  description: string;
  action: string;
  url: string;
}) {
  return (
    <div className="border border-border p-8 flex flex-col gap-4">
      <h3 className="text-xl">{method}</h3>
      <p className="text-sm text-muted-foregroundleading-relaxed">
        {description}
      </p>
      <div className="mt-auto">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full font-heading px-8 py-4 text-center cursor-pointer bg-transparent text-foreground! border border-border hover:bg-foreground/5 transition-colors duration-300 ease-in-out uppercase text-sm"
        >
          {action}
        </a>
      </div>
    </div>
  );
}

export default function Location() {
  return (
    <section className="wrapper" id="location">
      <div className="container py-32 flex flex-col items-center text-center px-8 md:px-32">
        <Pill text="LOCATION" />
        <h2 className="text-4xl md:text-6xl mt-6 mb-6">
          Getting to the venue.
        </h2>
        <p className="max-w-2xl text-base md:text-xl mb-16">
          Ikoyi, Lagos — easily accessible by air, road, and rail.
        </p>

        <div className="w-full aspect-3/2 md:aspect-4/1 mb-20 overflow-hidden relative">
          <div className="absolute inset-0 bg-zinc-800/50 flex items-center justify-center">
            <span className="text-muted-foreground text-sm uppercase tracking-wider">
              map placeholder
            </span>
          </div>
          <iframe
            title="Venue location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=3.4167%2C6.4500%2C3.4667%2C6.4700&layer=mapnik&marker=6.4600%2C3.4417"
            className="w-full h-full relative z-10"
            loading="lazy"
          />
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
