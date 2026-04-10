export interface Product {
  id: string;
  name: string;
  description: string;
  material: string;
  imageUrl: string;
  badge: string;
  details: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "bags",
    name: "Eco Bags",
    description:
      "Lightweight carry bags made entirely from sugarcane bagasse pulp, suitable for retail and grocery.",
    material: "Sugarcane Bagasse",
    imageUrl: "/assets/generated/product-bags.jpg",
    badge: "Best Seller",
    details: [
      "100% biodegradable",
      "Load-bearing up to 5kg",
      "Water-resistant coating",
      "Available in 3 sizes",
    ],
  },
  {
    id: "containers",
    name: "Food Containers",
    description:
      "Sturdy food-grade containers for takeout and meal prep, microwave-safe and compostable.",
    material: "Sugarcane Bagasse",
    imageUrl: "/assets/generated/product-containers.jpg",
    badge: "Food Safe",
    details: [
      "Microwave safe up to 120°C",
      "Oil & water resistant",
      "FDA compliant",
      "Stackable design",
    ],
  },
  {
    id: "wraps",
    name: "Packaging Wraps",
    description:
      "Flexible wrapping sheets for produce and bakery items — fully compostable in 90 days.",
    material: "Sugarcane Bagasse",
    imageUrl: "/assets/generated/product-wraps.jpg",
    badge: "Compostable",
    details: [
      "Decomposes in 90 days",
      "Breathable texture",
      "No chemical coatings",
      "Custom sizes available",
    ],
  },
  {
    id: "cups",
    name: "Beverage Cups",
    description:
      "Insulated cups for hot and cold beverages, replacing single-use plastic cups at events.",
    material: "Sugarcane Bagasse",
    imageUrl: "/assets/generated/product-cups.jpg",
    badge: "Heat Resistant",
    details: [
      "Hot drinks up to 90°C",
      "Cold drinks any temp",
      "Double-wall insulation",
      "250ml & 350ml options",
    ],
  },
  {
    id: "plates",
    name: "Serving Plates",
    description:
      "Elegant serving plates ideal for catering, events, and everyday dining. Grease-resistant.",
    material: "Sugarcane Bagasse",
    imageUrl: "/assets/generated/product-plates.jpg",
    badge: "Event Ready",
    details: [
      "Grease resistant",
      "Cut-resistant surface",
      '6" and 9" sizes',
      "Bulk packs available",
    ],
  },
  {
    id: "trays",
    name: "Meal Trays",
    description:
      "Multi-compartment meal trays for school canteens, airlines, and hospital catering.",
    material: "Sugarcane Bagasse",
    imageUrl: "/assets/generated/product-trays.jpg",
    badge: "Multi-Use",
    details: [
      "3-compartment design",
      "Leak-proof dividers",
      "Stackable for storage",
      "Airline approved",
    ],
  },
];
