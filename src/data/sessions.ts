import { days } from "./days";

export interface SessionDetail {
  slug: string;
  type: string;
  time: string;
  duration: string;
  title: string;
  description: string;
  body: string;
  speakers: { name: string; title: string; company: string; image: string }[];
  image: string;
  dayNumber: string;
  date: string;
}

const bodies: Record<string, string> = {
  "the-intelligence-of-design":
    "Artificial intelligence is no longer a distant frontier — it is here, embedded in the tools we use every day. This keynote explores how designers can move beyond using AI as a mere productivity booster and begin treating it as a genuine creative collaborator.",

  "prototyping-with-ai":
    "Move fast and break things — with a co-pilot. This hands-on workshop walks through rapid prototyping techniques using AI-powered design tools. Participants will build three working prototypes in 90 minutes, learning how to prompt, iterate, and ship faster than ever before.",

  "creativity-in-the-loop":
    "What happens to human creativity when machines can generate? This panel brings together designers, engineers, and researchers to debate the role of human intuition in an AI-augmented world. Expect candid conversation, opposing viewpoints, and no easy answers.",

  "building-at-scale":
    "Design systems are not just component libraries — they are living ecosystems. This talk covers the organizational, technical, and cultural challenges of building design infrastructure that serves thousands of products across multiple platforms and time zones.",

  "design-systems-deep-dive":
    "Go beyond tokens and components. This workshop explores advanced design system architecture: cross-platform synchronization, versioning strategies, contribution models, and how to measure the ROI of your system without losing your soul to spreadsheets.",

  "product-x-design":
    "The most successful products are built at the intersection of design thinking and business strategy. In this fireside chat, two industry veterans share stories from the trenches — what worked, what failed, and why the best designs are often the ones you never see.",

  "the-hand-and-the-machine":
    "As tools become more powerful, the value of craft becomes more rare. This closing keynote reflects on the tension between efficiency and artistry, and why the future of design belongs to those who can dance with machines without losing their human touch.",

  "emerging-tools-lab":
    "A fast-paced guided tour of the tools shaping the next generation of creative work. From generative 3D to browser-based neural networks, participants will experiment with eight emerging platforms and leave with a curated toolkit for further exploration.",

  "where-we-go-from-here":
    "Four days of ideas distilled into one conversation. Our closing panel brings together voices from across the conference to reflect on the themes, tensions, and breakthroughs that defined Ascend 2026 — and to ask the question that matters most: where do we go from here?",
};

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const speakerLookup: Record<string, { title: string; company: string; image: string }> = {
  "Yuki Tanaka": { title: "Design Director", company: "Google", image: "/images/speakers/yuki.webp" },
  "Aisha Okafor": { title: "Principal Engineer", company: "OpenAI", image: "/images/speakers/aisha.webp" },
  "Marcus Chen": { title: "Product Lead", company: "Figma", image: "/images/speakers/marcus.webp" },
  "Priya Patel": { title: "Creative Technologist", company: "Apple", image: "/images/speakers/priya.webp" },
  "Elena Voss": { title: "AI Researcher", company: "DeepMind", image: "/images/speakers/elena.webp" },
  "James Adeyemi": { title: "UX Director", company: "Spotify", image: "/images/speakers/james.webp" },
  "Hana Kim": { title: "Founder & CEO", company: "Layer", image: "/images/speakers/hana.webp" },
  "Ryo Nakamura": { title: "Head of Design", company: "Sony", image: "/images/speakers/ryo.webp" },
};

export function getAllSessions(): SessionDetail[] {
  const all: SessionDetail[] = [];
  for (const day of days) {
    for (const session of day.sessions) {
      all.push({
        slug: toSlug(session.title),
        type: session.type,
        time: session.time,
        duration: session.duration,
        title: session.title,
        description: session.description,
        body: bodies[toSlug(session.title)] || session.description,
        speakers: session.speakers.map((s) => ({
          name: s.name,
          ...speakerLookup[s.name],
        })),
        image: session.image,
        dayNumber: day.dayNumber,
        date: day.date,
      });
    }
  }
  return all;
}

export function getSessionBySlug(slug: string): SessionDetail | undefined {
  return getAllSessions().find((s) => s.slug === slug);
}

export function getSessionNav(slug: string): {
  prev: SessionDetail | null;
  next: SessionDetail | null;
} {
  const all = getAllSessions();
  const idx = all.findIndex((s) => s.slug === slug);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
