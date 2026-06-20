import { Link } from "@tanstack/react-router";
import { days } from "#/data/days";
import { speakers } from "#/data/speakers";

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const speakerImageMap = Object.fromEntries(
  speakers.map((s) => [s.name, s.image])
);

function SpeakerPill({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={speakerImageMap[name]}
        alt={name}
        className="w-8 h-8 object-cover"
      />
      <span className="text-sm">{name}</span>
    </div>
  );
}

function SessionCard({
  type,
  time,
  duration,
  title,
  description,
  speakers,
  image,
}: {
  type: string;
  time: string;
  duration: string;
  title: string;
  description: string;
  speakers: { name: string }[];
  image: string;
}) {
  return (
    <Link
      to="/session/$slug"
      params={{ slug: toSlug(title) }}
      viewTransition={{ types: ["slide-up"] }}
      className="flex flex-col md:flex-row group gap-8 p-8 border-b border-border hover:bg-foreground/5 items-center"
    >
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <span className="text-xs uppercase tracking-wider">
            {time}
            <span className="mx-2 text-foreground/30">|</span>
            {type}
            <span className="mx-2 text-foreground/30">|</span>
            {duration}
          </span>
          <h4 className="text-2xl mt-3">{title}</h4>
          <p className="mt-3 md:max-w-3/5 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          {speakers.map((s) => (
            <SpeakerPill key={s.name} name={s.name} />
          ))}
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full md:w-40 aspect-square  object-cover ease-in-out duration-300 group-hover:mr-4"
      />
    </Link>
  );
}

function DayBlock({
  dayNumber,
  date,
  themeTitle,
  description,
  sessions,
}: {
  dayNumber: string;
  date: string;
  themeTitle: string;
  description: string;
  sessions: {
    type: string;
    time: string;
    duration: string;
    title: string;
    description: string;
    speakers: { name: string }[];
    image: string;
  }[];
}) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-start gap-12 md:gap-16 border-b border-border last:border-b-0">
      <div className="md:sticky md:top-24 md:self-start w-full md:w-3/10 p-10 md:p-12">
        <h4 className=" tracking-wider text-lg">
          {dayNumber}
          <span className="text-muted-foreground! font-heading! ml-2">
            {date}
          </span>
        </h4>
        <h3 className="text-3xl md:text-4xl mt-2">{themeTitle}</h3>
        <p className="text-lg text-muted-foreground mt-2">{description}</p>
      </div>
      <div className="w-full md:w-7/10 flex flex-col">
        {sessions.map((s) => (
          <SessionCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  );
}

export default function Agenda() {
  return (
    <section className="wrapper">
      <div className="container">
        {days.map((day) => (
          <DayBlock key={day.dayNumber} {...day} />
        ))}
      </div>
    </section>
  );
}
