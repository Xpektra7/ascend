export interface Route {
	method: string;
	description: string;
	action: string;
}

export const routes: Route[] = [
	{
		method: "By air",
		description:
			"Fly into Murtala Muhammed International Airport (LOS). The venue is a 25-minute drive via the Third Mainland Bridge.",
		action: "search flights",
	},
	{
		method: "By road",
		description:
			"Located on Bourdillon Road, Ikoyi. Accessible via Awolowo Road or the Lekki-Ikoyi Link Bridge from the island.",
		action: "plan route",
	},
	{
		method: "By Metro",
		description:
			"The nearest metro stop is Ikoyi Station on the Blue Line. A 10-minute walk or quick ride-share from the station.",
		action: "view route",
	},
];
