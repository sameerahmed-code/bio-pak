export type PlaceholderCategory =
  | "process"
  | "machinery"
  | "product"
  | "team"
  | "general";

const PROCESS_SEEDS: Record<number, string> = {
  1: "sugarcane-field-harvest",
  2: "industrial-water-wash",
  3: "factory-pulp-machine",
  4: "industrial-mixer-blend",
  5: "hydraulic-press-mold",
  6: "hot-press-dryer",
  7: "cutting-machine-trim",
  8: "lab-quality-test",
  9: "warehouse-shipment",
};

const MACHINERY_SEEDS: Record<number, string> = {
  1: "pulping-industrial-machine",
  2: "hydraulic-molding-press",
  3: "hot-press-station",
  4: "cnc-cutting-trim",
  5: "laboratory-testing-equipment",
  6: "automated-packaging-line",
};

export function getPlaceholderUrl(
  category: PlaceholderCategory,
  index: number,
  width = 400,
  height = 250,
): string {
  if (category === "process") {
    const seed = PROCESS_SEEDS[index] ?? `process-step-${index}`;
    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
  }
  if (category === "machinery") {
    const seed = MACHINERY_SEEDS[index] ?? `machine-${index}`;
    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
  }
  if (category === "product") {
    return `https://picsum.photos/seed/product-${index}/${width}/${height}`;
  }
  if (category === "team") {
    return `https://picsum.photos/seed/team-avatar-${index}/${width}/${height}`;
  }
  return `https://picsum.photos/seed/biopak-${index}/${width}/${height}`;
}

export function getSvgPlaceholder(label: string, bgColor = "#d1fae5"): string {
  const encoded = encodeURIComponent(`
    <svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="250" fill="${bgColor}"/>
      <text x="200" y="125" font-family="sans-serif" font-size="18" fill="#059669" text-anchor="middle" dominant-baseline="middle">${label}</text>
    </svg>
  `);
  return `data:image/svg+xml,${encoded}`;
}
