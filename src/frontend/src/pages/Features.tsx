import {
  Flame,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Sprout,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface Feature {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  accentBar: string;
  tag: string;
}

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "100% Biodegradable",
    description:
      "Breaks down completely in natural environments within 90 days, leaving no microplastics or toxic residue behind.",
    Icon: Leaf,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    accentBar: "bg-emerald-400",
    tag: "Core Property",
  },
  {
    id: 2,
    title: "Sugarcane Bagasse",
    description:
      "Sourced from agricultural sugarcane waste — giving a by-product a second life instead of being burned or discarded.",
    Icon: Sprout,
    iconColor: "text-amber-700",
    iconBg: "bg-amber-50",
    accentBar: "bg-amber-400",
    tag: "Raw Material",
  },
  {
    id: 3,
    title: "Non-toxic & Food-Safe",
    description:
      "Zero chemical bleaches or coatings. FDA-compliant and safe for direct food contact at any temperature.",
    Icon: ShieldCheck,
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
    accentBar: "bg-teal-400",
    tag: "Safety Certified",
  },
  {
    id: 4,
    title: "Durable & Heat-Resistant",
    description:
      "Handles up to 120 °C without warping or leaching — built for hot meals, soups, and oily foods.",
    Icon: Flame,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    accentBar: "bg-orange-400",
    tag: "Performance",
  },
  {
    id: 5,
    title: "Compostable & Recyclable",
    description:
      "Certified compostable both at home and commercially — enriches soil instead of polluting it.",
    Icon: Recycle,
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    accentBar: "bg-green-400",
    tag: "End-of-Life",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [bouncing, setBouncing] = useState(false);
  const { Icon } = feature;

  function handleIconTap() {
    if (bouncing) return;
    setBouncing(true);
    setTimeout(() => setBouncing(false), 520);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="snap-center shrink-0 w-[76vw] max-w-[300px] bg-card rounded-2xl border border-border shadow-md p-5 flex flex-col gap-4"
      data-ocid={`feature-card-${feature.id}`}
    >
      {/* Tappable icon */}
      <button
        type="button"
        aria-label={`${feature.title} icon`}
        onClick={handleIconTap}
        className="self-start focus:outline-none"
        data-ocid={`feature-icon-btn-${feature.id}`}
      >
        <motion.div
          animate={bouncing ? { scale: [1, 1.35, 0.9, 1.12, 1] } : { scale: 1 }}
          transition={{ duration: 0.48, ease: "easeInOut" }}
          className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center`}
        >
          <Icon className={`w-7 h-7 ${feature.iconColor}`} />
        </motion.div>
      </button>

      {/* Tag pill */}
      <span className="self-start inline-block bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full -mt-1">
        {feature.tag}
      </span>

      {/* Text */}
      <div className="space-y-1.5 flex-1">
        <h3 className="text-base font-display font-semibold text-foreground leading-tight">
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Accent bar */}
      <div
        className={`h-1 w-10 rounded-full ${feature.accentBar} opacity-60`}
      />
    </motion.div>
  );
}

export default function Features() {
  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Page Header */}
      <div className="bg-card border-b border-border px-5 pt-8 pb-5">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground leading-tight">
              Product Features
            </h1>
            <p className="text-xs text-muted-foreground font-body">
              Why BIO-Pak is the smart sustainable choice
            </p>
          </div>
        </motion.div>
      </div>

      {/* Swipe hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="px-5 pt-5 pb-1 text-xs text-muted-foreground font-body"
      >
        Swipe to explore — tap icons for fun!
      </motion.p>

      {/* Horizontal snap carousel */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-4 pt-3"
        style={{ scrollbarWidth: "none" }}
        data-ocid="features-carousel"
      >
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
        {/* trailing spacer */}
        <div className="shrink-0 w-3" />
      </div>

      {/* All features list */}
      <div className="px-5 pt-4">
        <h2 className="text-sm font-display font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          All Features at a Glance
        </h2>
        <div className="space-y-2.5">
          {FEATURES.map((feature, index) => {
            const { Icon } = feature;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="flex items-center gap-3 bg-card rounded-xl p-3.5 border border-border shadow-sm"
                data-ocid={`feature-list-item-${feature.id}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl ${feature.iconBg} flex items-center justify-center shrink-0`}
                >
                  <Icon className={`w-4 h-4 ${feature.iconColor}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-display font-semibold text-foreground truncate">
                    {feature.title}
                  </p>
                  <p className="text-xs text-muted-foreground font-body line-clamp-1">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${feature.accentBar} shrink-0 opacity-70`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
