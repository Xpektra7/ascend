export interface FaqItem {
	question: string;
	answer: string;
}

export const faq: FaqItem[] = [
	{
		question: "Who is Ascend for?",
		answer:
			"Ascend is designed for designers, engineers, product managers, and creative leaders exploring the intersection of AI, design, and emerging technologies.",
	},
	{
		question: "Will sessions be recorded?",
		answer:
			"Yes, all keynote and panel sessions will be recorded and made available to ticket holders within two weeks of the event.",
	},
	{
		question: "Is there a refund policy?",
		answer:
			"Full refunds are available up to 30 days before the event. 50% refunds are available up to 14 days before. We cannot offer refunds within 14 days of the event.",
	},
	{
		question: "Are there group or student discounts?",
		answer:
			"Yes — group discounts are available for teams of 5 or more. Student passes are offered at a reduced rate with valid ID proof.",
	},
	{
		question: "What should I bring?",
		answer:
			"Bring a laptop or tablet for workshops, a valid ID for check-in, and business cards for networking. Dress code is smart casual.",
	},
];
