import Pill from "./pill";

function SpeakerCard({
  name,
  title,
  company,
  color,
}: {
  name: string;
  title: string;
  company: string;
  color: string;
}) {
  return (
    <div className="border border-border flex flex-col text-left">
      <div className={`aspect-square w-full ${color}`} />
      <div className="p-6 flex flex-col gap-1">
        <h3 className="text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">
          {title} <span className="text-foreground/30">|</span> {company}
        </p>
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section className="wrapper">
      <div className="container py-32 flex flex-col items-center text-center gap-4">
        <Pill text="SPEAKERS" />
        <h2 className="text-5xl md:text-6xl">Meet the lineup.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-8">
          <SpeakerCard
            name="Yuki Tanaka"
            title="Design Director"
            company="Google"
            color="bg-zinc-800"
          />
          <SpeakerCard
            name="Aisha Okafor"
            title="Principal Engineer"
            company="OpenAI"
            color="bg-zinc-700"
          />
          <SpeakerCard
            name="Marcus Chen"
            title="Product Lead"
            company="Figma"
            color="bg-zinc-800"
          />
          <SpeakerCard
            name="Priya Patel"
            title="Creative Technologist"
            company="Apple"
            color="bg-zinc-700"
          />
          <SpeakerCard
            name="Elena Voss"
            title="AI Researcher"
            company="DeepMind"
            color="bg-zinc-800"
          />
          <SpeakerCard
            name="James Adeyemi"
            title="UX Director"
            company="Spotify"
            color="bg-zinc-700"
          />
          <SpeakerCard
            name="Hana Kim"
            title="Founder & CEO"
            company="Layer"
            color="bg-zinc-800"
          />
          <SpeakerCard
            name="Ryo Nakamura"
            title="Head of Design"
            company="Sony"
            color="bg-zinc-700"
          />
        </div>
      </div>
    </section>
  );
}
