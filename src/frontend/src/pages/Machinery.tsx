import { ChevronDown, ChevronUp, Wrench } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Machine {
  id: string;
  name: string;
  brief: string;
  details: string;
  specs: string[];
  imageIndex: number;
}

const MACHINES: Machine[] = [
  {
    id: "pulping",
    name: "Bagasse Pulping Machine",
    brief: "Converts raw bagasse into fine pulp",
    details:
      "Industrial-grade pulping unit using high-speed rotating blades and continuous water flow to break down sugarcane bagasse into smooth, uniform fiber pulp ready for molding.",
    specs: [
      "Capacity: 500 kg/hr",
      "Motor: 75 kW",
      "Stainless steel build",
      "Automated feed control",
    ],
    imageIndex: 1,
  },
  {
    id: "hydraulic-molding",
    name: "Hydraulic Molding Machine",
    brief: "Presses pulp into product shapes under high pressure",
    details:
      "High-pressure hydraulic press that forces pre-formed pulp into precision container and plate geometries with consistent wall thickness and clean surface finish.",
    specs: [
      "Press force: 200 tons",
      "Cycle time: 30s",
      "Multi-cavity molds",
      "PLC controlled",
    ],
    imageIndex: 2,
  },
  {
    id: "hot-press",
    name: "Hot Press Machine",
    brief: "Dries and hardens products with controlled heat",
    details:
      "Heated pressing stations eliminate residual moisture while simultaneously increasing rigidity, surface smoothness, and heat-resistance of the molded biodegradable products.",
    specs: [
      "Temp: up to 200°C",
      "Pressure: 50 bar",
      "Energy-efficient",
      "Digital temp control",
    ],
    imageIndex: 3,
  },
  {
    id: "cutting",
    name: "Cutting & Trimming Machine",
    brief: "Trims edges for precise, clean product finishing",
    details:
      "CNC-guided trimming stations remove flash material and ensure dimensional accuracy across all product types, delivering retail-ready edges with ±0.5 mm tolerance.",
    specs: [
      "Precision: ±0.5 mm",
      "Speed: 120 cuts/min",
      "Adjustable die sets",
      "Waste collection",
    ],
    imageIndex: 4,
  },
  {
    id: "quality-testing",
    name: "Quality Testing Equipment",
    brief: "Tests durability, food safety, and biodegradability",
    details:
      "Full laboratory testing suite that validates food-contact safety, structural compression strength, moisture resistance, and certified biodegradability of every product batch.",
    specs: [
      "Compression tester",
      "Moisture analyzer",
      "Food-safety scanner",
      "Biodegradability chamber",
    ],
    imageIndex: 5,
  },
  {
    id: "packaging",
    name: "Packaging Machine",
    brief: "Packages products for shipment with eco-friendly materials",
    details:
      "High-speed automated counting, stacking, and wrapping station that prepares finished products for shipment using only recycled paper and certified biodegradable films.",
    specs: [
      "Speed: 200 pcs/min",
      "Auto-counting",
      "Barcode labeling",
      "Eco-film wrapping",
    ],
    imageIndex: 6,
  },
];

function MachineCard({ machine, index }: { machine: Machine; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-card rounded-2xl overflow-hidden border-t-4 border-t-primary border border-border shadow-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
      data-ocid={`machine-card-${machine.id}`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-muted/40">
        <motion.img
          src={`https://picsum.photos/400/250?random=${machine.imageIndex}`}
          alt={machine.name}
          className="w-full h-full object-cover"
          animate={{ scale: expanded ? 1.06 : 1 }}
          transition={{ duration: 0.4 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="font-display font-bold text-white text-base drop-shadow-sm leading-tight">
            {machine.name}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm rounded-full px-2.5 py-1">
          <span className="text-[10px] font-semibold text-primary-foreground">
            #{index + 1}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          {machine.brief}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-primary text-xs font-semibold transition-smooth active:scale-95 hover:text-primary/80"
          data-ocid={`machine-expand-${machine.id}`}
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <ChevronUp size={14} /> Hide Details
            </>
          ) : (
            <>
              <ChevronDown size={14} /> View Details
            </>
          )}
        </button>

        {/* Expanded details with AnimatePresence */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3">
                <p className="text-foreground text-xs leading-relaxed border-l-2 border-primary pl-3">
                  {machine.details}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {machine.specs.map((spec) => (
                    <div
                      key={spec}
                      className="bg-primary/8 rounded-xl px-3 py-2 flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-[11px] text-foreground leading-snug">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Machinery() {
  return (
    <div className="pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/20 via-accent/50 to-background px-5 pt-10 pb-7">
        <motion.div
          className="flex items-center gap-2.5 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
            <Wrench size={18} className="text-primary" />
          </div>
          <h1 className="font-display font-bold text-2xl text-foreground">
            Our Machinery
          </h1>
        </motion.div>
        <motion.p
          className="text-muted-foreground text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Industrial Equipment for Quality Production
        </motion.p>
      </div>

      {/* Stats bar */}
      <div className="px-5 py-3 grid grid-cols-3 gap-2.5">
        {[
          { value: `${MACHINES.length}`, label: "Machines" },
          { value: "500+", label: "kg/hr Capacity" },
          { value: "24/7", label: "Operation" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card rounded-2xl px-3 py-2.5 text-center border border-border shadow-sm"
          >
            <div className="font-display font-bold text-primary text-lg leading-none mb-0.5">
              {stat.value}
            </div>
            <div className="text-[10px] text-muted-foreground leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Machine cards */}
      <div className="px-5 space-y-4 pt-2">
        {MACHINES.map((machine, i) => (
          <MachineCard key={machine.id} machine={machine} index={i} />
        ))}
      </div>
    </div>
  );
}
