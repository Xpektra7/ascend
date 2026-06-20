export interface Tier {
  name: string;
  note: string;
  price: string;
  per: string;
  popular?: boolean;
  features: string[];
}

export const tiers: Tier[] = [
  {
    name: "Starter",
    note: "Early bird pricing",
    price: "7000",
    per: "pass",
    features: [
      "Access to all keynotes",
      "Main conference days",
      "Networking reception",
      "Recordings post-event",
    ],
  },
  {
    name: "Standard",
    note: "Most popular choice",
    price: "15,000",
    per: "pass",
    popular: true,
    features: [
      "Everything in Starter",
      "All workshops & labs",
      "Priority seating",
      "Speaker meet & greet",
      "Exclusive swag pack",
    ],
  },
  {
    name: "VIP",
    note: "Limited availability",
    price: "30,000",
    per: "pass",
    features: [
      "Everything in Standard",
      "VIP lounge access",
      "One-on-one mentor sessions",
      "Private dinner with speakers",
      "Front-row seating",
      "Annual premium membership",
    ],
  },
];
