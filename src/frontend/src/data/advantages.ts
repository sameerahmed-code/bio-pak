export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}

export const ADVANTAGES: Advantage[] = [
  {
    id: "plastic-pollution",
    title: "Reduces Plastic Pollution",
    description:
      "Every BIO-Pak product directly replaces a single-use plastic item, keeping microplastics out of soil and waterways.",
    icon: "🚫",
    stat: "8M+",
    statLabel: "tons of plastic enter oceans yearly",
  },
  {
    id: "agricultural-waste",
    title: "Uses Agricultural Waste",
    description:
      "Sugarcane bagasse is an abundantly available byproduct. We transform waste into value with zero virgin resource extraction.",
    icon: "♻️",
    stat: "300M",
    statLabel: "tons of bagasse produced annually worldwide",
  },
  {
    id: "eco-friendly",
    title: "Eco-Friendly & Sustainable",
    description:
      "Our products decompose naturally within 90 days, leaving zero toxic residue in composting or landfill conditions.",
    icon: "🌿",
    stat: "90",
    statLabel: "days to full decomposition",
  },
  {
    id: "safe",
    title: "Safe for Humans & Animals",
    description:
      "No harmful dyes, bleaches, or chemical coatings. Every product passes FDA and food-contact safety standards.",
    icon: "🛡️",
    stat: "100%",
    statLabel: "non-toxic certified",
  },
  {
    id: "cost-effective",
    title: "Cost-Effective Long Term",
    description:
      "Bulk pricing, lower waste-disposal costs, and rising plastic taxes make BIO-Pak the financially smarter choice.",
    icon: "💰",
    stat: "30%",
    statLabel: "average savings vs plastic alternatives",
  },
  {
    id: "green-economy",
    title: "Supports Green Economy",
    description:
      "We create local jobs, partner with Pakistani farmers, and reinvest in cleaner manufacturing each year.",
    icon: "🌱",
    stat: "200+",
    statLabel: "local jobs supported",
  },
  {
    id: "brand-image",
    title: "Improves Brand Image",
    description:
      "Consumers increasingly choose sustainable brands. Switching to BIO-Pak signals environmental leadership.",
    icon: "⭐",
    stat: "73%",
    statLabel: "consumers prefer eco-conscious brands",
  },
];
