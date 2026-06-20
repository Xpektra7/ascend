export interface Route {
	method: string;
	description: string;
	action: string;
	url: string;
}

export const routes: Route[] = [
	{
		method: "By air",
		description:
			"Fly into Murtala Muhammed International Airport (LOS). The venue is a 25-minute drive via the Third Mainland Bridge.",
		action: "search flights",
		url: "https://www.google.com/travel/flights?q=flights+to+LOS",
	},
	{
		method: "By road",
		description:
			"Located on Bourdillon Road, Ikoyi. Accessible via Awolowo Road or the Lekki-Ikoyi Link Bridge from the island.",
		action: "plan route",
		url: "https://maps.google.com/?daddr=25+Bourdillon+Road+Ikoyi+Lagos+Nigeria",
	},
	{
		method: "By Metro",
		description:
			"The nearest metro stop is Ikoyi Station on the Blue Line. A 10-minute walk or quick ride-share from the station.",
		action: "view route",
		url: "https://maps.google.com/?q=Ikoyi+Station+Lagos",
	},
];
