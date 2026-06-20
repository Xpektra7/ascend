export interface Session {
	type: string;
	duration: string;
	title: string;
	description: string;
	speakers: { name: string; color: string }[];
	imgColor: string;
}

export interface Day {
	dayNumber: string;
	date: string;
	description: string;
	themeIndex: string;
	themeTitle: string;
	themeDescription: string;
	color: string;
	sessions: Session[];
}

export const days: Day[] = [
	{
		dayNumber: "Day 1",
		date: "Wed, June 14",
		description:
			"Exploring the intersection of artificial intelligence and creative design.",
		themeIndex: "001",
		themeTitle: "AI & Creativity",
		themeDescription:
			"Exploring how artificial intelligence is reshaping design workflows, creative expression, and the role of the modern designer.",
		color: "bg-zinc-800",
		sessions: [
			{
				type: "Keynote",
				duration: "45 min",
				title: "The Intelligence of Design",
				description: "AI reshaping the creative process",
				speakers: [{ name: "Yuki Tanaka", color: "bg-zinc-600" }],
				imgColor: "bg-zinc-700",
			},
			{
				type: "Workshop",
				duration: "90 min",
				title: "Prototyping with AI",
				description: "Rapid prototyping with AI tools",
				speakers: [
					{ name: "Marcus Chen", color: "bg-zinc-600" },
					{ name: "Hana Kim", color: "bg-zinc-600" },
				],
				imgColor: "bg-zinc-700",
			},
			{
				type: "Panel",
				duration: "60 min",
				title: "Creativity in the Loop",
				description: "Human creativity meets machine intelligence",
				speakers: [
					{ name: "Aisha Okafor", color: "bg-zinc-600" },
					{ name: "Priya Patel", color: "bg-zinc-600" },
					{ name: "Elena Voss", color: "bg-zinc-600" },
				],
				imgColor: "bg-zinc-700",
			},
		],
	},
	{
		dayNumber: "Day 2",
		date: "Thu, June 15",
		description:
			"Deep dives into product strategy, design systems, and building at scale.",
		themeIndex: "002",
		themeTitle: "Product & Systems",
		themeDescription:
			"Scalable design systems, product strategy, and building for longevity in a rapidly shifting technological landscape.",
		color: "bg-zinc-700",
		sessions: [
			{
				type: "Keynote",
				duration: "45 min",
				title: "Building at Scale",
				description: "Shipping design systems at scale",
				speakers: [{ name: "James Adeyemi", color: "bg-zinc-600" }],
				imgColor: "bg-zinc-800",
			},
			{
				type: "Workshop",
				duration: "90 min",
				title: "Design Systems Deep Dive",
				description: "Architecting complex design systems",
				speakers: [
					{ name: "Hana Kim", color: "bg-zinc-600" },
					{ name: "Ryo Nakamura", color: "bg-zinc-600" },
				],
				imgColor: "bg-zinc-800",
			},
			{
				type: "Fireside Chat",
				duration: "45 min",
				title: "Product x Design",
				description: "Bridging product strategy and design",
				speakers: [
					{ name: "Yuki Tanaka", color: "bg-zinc-600" },
					{ name: "Marcus Chen", color: "bg-zinc-600" },
				],
				imgColor: "bg-zinc-800",
			},
		],
	},
	{
		dayNumber: "Day 3",
		date: "Fri, June 16",
		description:
			"Hands-on workshops, emerging tools, and conversations about what's next.",
		themeIndex: "003",
		themeTitle: "Future of Craft",
		themeDescription:
			"Emerging tools, hands-on workshops, and the evolving relationship between maker, material, and machine.",
		color: "bg-zinc-600",
		sessions: [
			{
				type: "Keynote",
				duration: "45 min",
				title: "The Hand and the Machine",
				description: "Craftsmanship meets modern technology",
				speakers: [{ name: "Priya Patel", color: "bg-zinc-600" }],
				imgColor: "bg-zinc-800",
			},
			{
				type: "Workshop",
				duration: "90 min",
				title: "Emerging Tools Lab",
				description: "Hands-on with creative tools",
				speakers: [
					{ name: "Elena Voss", color: "bg-zinc-600" },
					{ name: "Ryo Nakamura", color: "bg-zinc-600" },
				],
				imgColor: "bg-zinc-800",
			},
			{
				type: "Closing Panel",
				duration: "60 min",
				title: "Where We Go From Here",
				description: "Reflecting on conference key themes",
				speakers: [
					{ name: "Yuki Tanaka", color: "bg-zinc-600" },
					{ name: "Aisha Okafor", color: "bg-zinc-600" },
					{ name: "James Adeyemi", color: "bg-zinc-600" },
					{ name: "Priya Patel", color: "bg-zinc-600" },
				],
				imgColor: "bg-zinc-800",
			},
		],
	},
];
