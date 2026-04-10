export interface Machine {
  id: string;
  name: string;
  description: string;
  specs: string[];
  imagePrompt: string;
  imageUrl: string;
  icon: string;
}

export const MACHINES: Machine[] = [
  {
    id: "pulping",
    name: "Bagasse Pulping Machine",
    description:
      "Industrial-grade pulping unit that converts raw sugarcane bagasse into smooth fiber pulp using high-speed rotating blades and water.",
    specs: [
      "Capacity: 500 kg/hr",
      "Motor: 75 kW",
      "Stainless steel construction",
      "Automated feed control",
    ],
    imagePrompt: "Industrial sugarcane bagasse pulping machine",
    imageUrl: "https://picsum.photos/seed/machine-pulp/400/260",
    icon: "⚙️",
  },
  {
    id: "hydraulic-molding",
    name: "Hydraulic Molding Machine",
    description:
      "High-pressure hydraulic press that shapes pre-formed pulp into precise container and plate geometries with consistent wall thickness.",
    specs: [
      "Press force: 200 tons",
      "Cycle time: 30s",
      "Multi-cavity molds",
      "PLC controlled",
    ],
    imagePrompt: "Hydraulic molding machine biodegradable packaging",
    imageUrl: "https://picsum.photos/seed/machine-mold/400/260",
    icon: "🔩",
  },
  {
    id: "hot-press",
    name: "Hot Press Machine",
    description:
      "Heated pressing stations that eliminate moisture from molded products while simultaneously improving rigidity and surface smoothness.",
    specs: [
      "Temperature: up to 200°C",
      "Pressure: 50 bar",
      "Energy-efficient design",
      "Digital temperature control",
    ],
    imagePrompt: "Hot press machine eco product drying",
    imageUrl: "https://picsum.photos/seed/machine-press/400/260",
    icon: "🔥",
  },
  {
    id: "cutting",
    name: "Cutting & Trimming Machine",
    description:
      "CNC-guided trimming stations that remove flash material and ensure dimensional accuracy across all product types.",
    specs: [
      "Precision: ±0.5 mm",
      "Speed: 120 cuts/min",
      "Adjustable die sets",
      "Waste collection system",
    ],
    imagePrompt: "Cutting trimming machine packaging industry",
    imageUrl: "https://picsum.photos/seed/machine-cut/400/260",
    icon: "✂️",
  },
  {
    id: "quality-testing",
    name: "Quality Testing Equipment",
    description:
      "Laboratory testing suite for food-safety, compression, and biodegradability analysis of finished products.",
    specs: [
      "Compression tester",
      "Moisture analyzer",
      "Food-safety scanner",
      "Biodegradability chamber",
    ],
    imagePrompt: "Lab equipment biodegradable material testing",
    imageUrl: "https://picsum.photos/seed/machine-test/400/260",
    icon: "🔬",
  },
  {
    id: "packaging",
    name: "Automated Packaging Machine",
    description:
      "High-speed counting, stacking, and wrapping unit that prepares products for shipment in recycled paper and biodegradable films.",
    specs: [
      "Speed: 200 pcs/min",
      "Auto-counting",
      "Barcode labeling",
      "Minimal operator input",
    ],
    imagePrompt: "Automated packaging machine eco products",
    imageUrl: "https://picsum.photos/seed/machine-pkg/400/260",
    icon: "📦",
  },
];
