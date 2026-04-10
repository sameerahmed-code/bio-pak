import {
  Globe,
  Leaf,
  Recycle,
  ShieldCheck,
  Sprout,
  Star,
  TrendingDown,
} from "lucide-react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ADVANTAGES: Advantage[] = [
  {
    id: "plastic-pollution",
    title: "Reduces Plastic Pollution",
    description:
      "Replaces single-use plastics, keeping microplastics out of soil and waterways.",
    icon: <Leaf size={22} />,
    color: "bg-green-500/15 text-green-700",
  },
  {
    id: "agricultural-waste",
    title: "Uses Agricultural Waste",
    description:
      "Transforms sugarcane bagasse byproduct into value with zero virgin extraction.",
    icon: <Sprout size={22} />,
    color: "bg-emerald-500/15 text-emerald-700",
  },
  {
    id: "eco-friendly",
    title: "Eco-Friendly & Sustainable",
    description:
      "Decomposes naturally within 90 days, leaving zero toxic residue.",
    icon: <Recycle size={22} />,
    color: "bg-teal-500/15 text-teal-700",
  },
  {
    id: "safe",
    title: "Safe for Humans & Animals",
    description:
      "No harmful dyes or chemical coatings — FDA food-contact safety certified.",
    icon: <ShieldCheck size={22} />,
    color: "bg-primary/15 text-primary",
  },
  {
    id: "cost-effective",
    title: "Cost-Effective Long Term",
    description:
      "Lower disposal costs and rising plastic taxes make BIO-Pak the smarter choice.",
    icon: <TrendingDown size={22} />,
    color: "bg-secondary/15 text-secondary",
  },
  {
    id: "green-economy",
    title: "Supports Green Economy",
    description:
      "Creates local jobs, partners with farmers, and reinvests in clean manufacturing.",
    icon: <Globe size={22} />,
    color: "bg-cyan-500/15 text-cyan-700",
  },
  {
    id: "brand-image",
    title: "Improves Brand Image",
    description:
      "73% of consumers prefer eco-conscious brands — lead with sustainability.",
    icon: <Star size={22} />,
    color: "bg-amber-500/15 text-amber-700",
  },
];

const STATS = [
  { value: 7, suffix: "+", label: "Benefits" },
  { value: 100, suffix: "%", label: "Bio" },
  { value: 3, suffix: " Certs", label: "Eco Certified" },
];

function CountUpStat({
  target,
  suffix,
  label,
}: { target: number; suffix: string; label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate(count, target, { duration: 1.6, ease: "easeOut" });
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, count]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="font-display font-bold text-primary text-2xl leading-none">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function AdvantageCard({ adv, index }: { adv: Advantage; index: number }) {
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    setTapped(true);
    setTimeout(() => setTapped(false), 500);
  };

  return (
    <motion.div
      className="bg-card rounded-2xl border border-border shadow-sm p-4 flex flex-col items-center text-center gap-3 cursor-pointer active:scale-95 transition-smooth"
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      onTap={handleTap}
      data-ocid={`advantage-card-${adv.id}`}
    >
      <motion.div
        className={`w-14 h-14 rounded-full flex items-center justify-center ${adv.color}`}
        animate={tapped ? { scale: [1, 1.35, 0.9, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        {adv.icon}
      </motion.div>
      <div>
        <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-1">
          {adv.title}
        </h3>
        <p className="text-muted-foreground text-[11px] leading-relaxed">
          {adv.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Advantages() {
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
            <Star size={18} className="text-primary" />
          </div>
          <h1 className="font-display font-bold text-2xl text-foreground">
            Why Choose BIO-Pak?
          </h1>
        </motion.div>
        <motion.p
          className="text-muted-foreground text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Benefits of Biodegradable Packaging
        </motion.p>
      </div>

      {/* Stats bar */}
      <motion.div
        className="mx-5 mt-4 bg-card rounded-2xl border border-border shadow-sm px-4 py-4 grid grid-cols-3 divide-x divide-border"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        data-ocid="advantages-stats-bar"
      >
        {STATS.map((s) => (
          <CountUpStat
            key={s.label}
            target={s.value}
            suffix={s.suffix}
            label={s.label}
          />
        ))}
      </motion.div>

      {/* Section title */}
      <div className="px-5 pt-5 pb-2">
        <h2 className="font-display font-semibold text-foreground text-base">
          All Benefits
        </h2>
        <p className="text-muted-foreground text-xs mt-0.5">
          Tap any card to see the icon bounce
        </p>
      </div>

      {/* 2-column advantages grid */}
      <div className="px-5 grid grid-cols-2 gap-3">
        {ADVANTAGES.map((adv, i) => (
          <AdvantageCard key={adv.id} adv={adv} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mx-5 mt-6 bg-primary rounded-2xl p-5 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-ocid="advantages-cta"
      >
        <div className="text-3xl mb-2">🌍</div>
        <h3 className="font-display font-bold text-primary-foreground text-base mb-1">
          Join the Green Revolution
        </h3>
        <p className="text-primary-foreground/80 text-xs leading-relaxed">
          Partner with BIO-Pak and lead your industry toward a sustainable
          future.
        </p>
      </motion.div>
    </div>
  );
}
