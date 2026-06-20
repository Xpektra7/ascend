import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Timer } from "lucide-react";
import { getSessionBySlug, getSessionNav } from "#/data/sessions";

export const Route = createFileRoute("/session/$slug")({
  component: SessionDetail,
  notFoundComponent: () => (
    <div className="wrapper pt-48">
      <div className="container px-8 md:px-16 max-w-3xl">
        <h1 className="text-4xl">Session not found</h1>
        <Link
          to="/"
          className="text-muted-foreground hover:text-foreground mt-4 block"
        >
          Back to schedule
        </Link>
      </div>
    </div>
  ),
});

function SessionDetail() {
  const { slug } = Route.useParams();
  const session = getSessionBySlug(slug);
  const { prev, next } = getSessionNav(slug);

  if (!session) return null;

  return (
    <div className="wraper min-h-screen flex flex-col">
      <div className="container flex-1 h-[calc(100dvh-12rem)] overflow-y-scroll flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:self-stretch flex flex-col pt-24 px-8 md:px-16 lg:px-20 xl:px-24 border-r border-border main-content">
          <Link
            to="/"
            hash="schedule"
            viewTransition={{ types: ["slide-down"] }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-8 mb-16 w-fit"
          >
            <ArrowLeft size={14} />
            Back to schedule
          </Link>

          <div className="border-b border-border pb-12">
            <span className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-4 py-1.5 w-fit">
              {session.type}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mt-4 leading-tight">
              {session.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              {session.description}
            </p>
          </div>

          <div className="border-b border-border py-4">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {session.body}
            </p>
          </div>

          <div className="border-b border-border py-4">
            <div className="flex gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-muted-foreground" />
                <span>
                  {session.dayNumber} &mdash; {session.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-muted-foreground" />
                <span>{session.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Timer size={14} className="text-muted-foreground" />
                <span>{session.duration}</span>
              </div>
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
              Speakers
            </h2>
            <div className="flex flex-row flex-wrap gap-6">
              {session.speakers.map((speaker) => (
                <div key={speaker.name} className="flex items-center gap-4">
                  <div className={`size-12 shrink-0 ${speaker.color}`} />
                  <div>
                    <p className="text-sm">{speaker.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {speaker.title} &mdash; {speaker.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 md:self-stretch z-20">
          <div className={`flex-1 ${session.imgColor}`} />
        </div>
      </div>

      <div className="h-24 container border-t border-border flex items-center justify-between px-8 md:px-16">
        {prev ? (
          <Link
            to="/session/$slug"
            params={{ slug: prev.slug }}
            viewTransition={{ types: ["slide-right"] }}
            className="flex items-center gap-3 py-4 group"
          >
            <ArrowLeft size={14} className="text-muted-foreground" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">{prev.time}</p>
              <p className="text-sm group-hover:text-foreground transition-colors">
                {prev.title}
              </p>
            </div>
          </Link>
        ) : (
          <div className="py-4">
            <p className="text-xs text-muted-foreground">First session</p>
          </div>
        )}

        {next ? (
          <Link
            to="/session/$slug"
            params={{ slug: next.slug }}
            viewTransition={{ types: ["slide-left"] }}
            className="flex items-center gap-3 py-4 group"
          >
            <div className="text-right">
              <p className="text-xs text-muted-foreground">{next.time}</p>
              <p className="text-sm group-hover:text-foreground transition-colors">
                {next.title}
              </p>
            </div>
            <ArrowLeft size={14} className="text-muted-foreground rotate-180" />
          </Link>
        ) : (
          <div className="py-4">
            <p className="text-xs text-muted-foreground">Last session</p>
          </div>
        )}
      </div>
    </div>
  );
}
