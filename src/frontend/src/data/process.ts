export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  imagePrompt: string;
  imageUrl: string;
  duration: string;
  icon: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Collection of Bagasse",
    description:
      "Raw sugarcane bagasse — the fibrous residue after juice extraction — is collected from nearby sugar mills, reducing agricultural waste.",
    imagePrompt:
      "Sugarcane bagasse collection from factory, eco-friendly process",
    imageUrl: "https://picsum.photos/seed/bagasse-collect/400/250",
    duration: "Ongoing",
    icon: "🌾",
  },
  {
    id: 2,
    title: "Cleaning & Preparation",
    description:
      "The collected bagasse is thoroughly washed to remove residual sugar, soil, and impurities, ensuring a clean starting material.",
    imagePrompt: "Cleaning and processing sugarcane bagasse industrial setup",
    imageUrl: "https://picsum.photos/seed/bagasse-clean/400/250",
    duration: "2–4 hours",
    icon: "🚿",
  },
  {
    id: 3,
    title: "Pulping Process",
    description:
      "Clean bagasse fibers are fed into industrial pulping machines that break them down into a smooth, homogeneous slurry.",
    imagePrompt: "Bagasse pulping machine converting waste into pulp",
    imageUrl: "https://picsum.photos/seed/bagasse-pulp/400/250",
    duration: "3–5 hours",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Mixing & Formulation",
    description:
      "The pulp is blended with natural binding agents and water-resistance enhancers to achieve optimal product properties.",
    imagePrompt: "Mixing biodegradable pulp materials in industrial mixer",
    imageUrl: "https://picsum.photos/seed/bagasse-mix/400/250",
    duration: "1–2 hours",
    icon: "🧪",
  },
  {
    id: 5,
    title: "Molding & Shaping",
    description:
      "Prepared pulp is poured into precision hydraulic molds that apply heat and pressure to form the desired container shapes.",
    imagePrompt: "Hydraulic molding machine shaping eco-friendly containers",
    imageUrl: "https://picsum.photos/seed/bagasse-mold/400/250",
    duration: "30–45 sec/unit",
    icon: "🏭",
  },
  {
    id: 6,
    title: "Drying & Pressing",
    description:
      "Molded products pass through hot press stations to eliminate residual moisture, enhancing structural strength and rigidity.",
    imagePrompt: "Hot press drying biodegradable packaging",
    imageUrl: "https://picsum.photos/seed/bagasse-dry/400/250",
    duration: "4–6 hours",
    icon: "🔥",
  },
  {
    id: 7,
    title: "Trimming & Finishing",
    description:
      "Excess material is trimmed with precision cutting machines, and each product receives a smooth finish for aesthetic appeal.",
    imagePrompt: "Cutting and trimming eco packaging products",
    imageUrl: "https://picsum.photos/seed/bagasse-trim/400/250",
    duration: "Per batch",
    icon: "✂️",
  },
  {
    id: 8,
    title: "Quality Testing",
    description:
      "Every batch undergoes rigorous testing for structural integrity, food safety compliance, biodegradability, and dimensional accuracy.",
    imagePrompt: "Quality testing biodegradable containers lab",
    imageUrl: "https://picsum.photos/seed/bagasse-test/400/250",
    duration: "24–48 hours",
    icon: "🔬",
  },
  {
    id: 9,
    title: "Packaging & Distribution",
    description:
      "Approved products are counted, stacked, wrapped in recycled paper, and dispatched to distributors and retail partners.",
    imagePrompt: "Packaging eco-friendly products for shipment",
    imageUrl: "https://picsum.photos/seed/bagasse-pack/400/250",
    duration: "Same day",
    icon: "📦",
  },
];
