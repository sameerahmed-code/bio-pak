import { useNavigate } from "@tanstack/react-router";
import {
  Factory,
  Leaf,
  Package,
  Phone,
  Recycle,
  Sprout,
  Users2,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { type FC, useRef } from "react";

// ─── Floating icon config ───────────────────────────────────────────────────
type FloatingIcon = {
  Icon: FC<{ size: number; strokeWidth: number }>;
  size: number;
  top: string;
  left?: string;
  right?: string;
  delay: number;
  opacity: number;
};

const FLOATING_ICONS: FloatingIcon[] = [
  { Icon: Leaf, size: 26, top: "10%", left: "7%", delay: 0, opacity: 0.28 },
  {
    Icon: Recycle,
    size: 20,
    top: "18%",
    right: "9%",
    delay: 0.7,
    opacity: 0.22,
  },
  { Icon: Sprout, size: 16, top: "52%", left: "4%", delay: 1.3, opacity: 0.2 },
  { Icon: Wind, size: 18, top: "38%", right: "5%", delay: 0.4, opacity: 0.18 },
  { Icon: Leaf, size: 12, top: "68%", right: "13%", delay: 1.1, opacity: 0.22 },
  {
    Icon: Recycle,
    size: 14,
    top: "76%",
    left: "11%",
    delay: 0.6,
    opacity: 0.16,
  },
];

// ─── Quick nav buttons ──────────────────────────────────────────────────────
const NAV_BUTTONS = [
  { label: "Products", Icon: Package, path: "/products" },
  { label: "Process", Icon: Factory, path: "/process" },
  { label: "Machinery", Icon: Wrench, path: "/machinery" },
  { label: "Team", Icon: Users2, path: "/team" },
  { label: "Contact", Icon: Phone, path: "/contact" },
] as const;

// ─── Stats ──────────────────────────────────────────────────────────────────
const STATS = [
  { value: "100%", label: "Bio", emoji: "🌿" },
  { value: "Eco", label: "Safe", emoji: "✅" },
  { value: "🇵🇰", label: "Made in PK", emoji: "" },
] as const;

// ─── Feature teasers ────────────────────────────────────────────────────────
const FEATURES = [
  {
    Icon: Leaf,
    title: "100% Biodegradable",
    desc: "Fully breaks down naturally, leaving zero harmful residue.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    Icon: Sprout,
    title: "Sugarcane Bagasse",
    desc: "Upcycled agricultural waste transformed into premium packaging.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    Icon: Zap,
    title: "Zero Toxins",
    desc: "Food-safe, non-toxic materials safe for humans and animals.",
    color: "bg-sky-100 text-sky-700",
  },
] as const;

export default function Home() {
  const navigate = useNavigate();
  const statsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const statsInView = useInView(statsRef, { once: true, margin: "-40px" });
  const navInView = useInView(navRef, { once: true, margin: "-40px" });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-60px",
  });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 to-emerald-800 pt-10 pb-20 px-5 min-h-[54vh] flex flex-col items-center justify-center">
        {/* floating eco icons */}
        {FLOATING_ICONS.map(
          ({ Icon, size, top, left, right, delay, opacity }, i) => (
            <motion.div
              // biome-ignore lint/suspicious/noArrayIndexKey: order never changes
              key={i}
              className="absolute pointer-events-none"
              style={{ top, left, right, opacity, color: "#d1fae5" }}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 3 + delay * 0.6,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Icon size={size} strokeWidth={1.5} />
            </motion.div>
          ),
        )}

        {/* Brand mark */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Leaf size={30} className="text-emerald-100" strokeWidth={2} />
            </div>
            <span className="font-display text-4xl font-bold text-white tracking-tight drop-shadow-md">
              BIO-Pak
            </span>
          </motion.div>

          <motion.p
            className="font-display text-[1.35rem] font-semibold text-emerald-50 leading-snug max-w-[280px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            Sustainable Packaging for a{" "}
            <span className="text-emerald-200">Greener Tomorrow</span>
          </motion.p>

          <motion.p
            className="text-emerald-200/80 text-sm max-w-[255px] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Turning sugarcane waste into eco-friendly packaging
          </motion.p>

          <motion.button
            type="button"
            data-ocid="hero-cta"
            className="bg-white text-emerald-700 font-display font-semibold px-8 py-3 rounded-full shadow-lg text-base transition-smooth"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate({ to: "/products" })}
          >
            Explore Products
          </motion.button>
        </motion.div>

        {/* decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden">
          <svg
            viewBox="0 0 375 40"
            preserveAspectRatio="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 40C93.75 13 187.5 0 281.25 0S375 13 375 40H0Z"
              fill="oklch(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="bg-background px-5 pt-5 pb-6" ref={statsRef}>
        <div className="flex justify-around">
          {STATS.map(({ value, label, emoji }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 24 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.12,
                ease: "easeOut",
              }}
            >
              {emoji && <span className="text-lg">{emoji}</span>}
              <span className="font-display text-2xl font-bold text-primary">
                {value}
              </span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* divider */}
      <div className="h-px bg-border mx-5" />

      {/* ── Quick Nav ── */}
      <section className="bg-muted/40 px-5 py-7" ref={navRef}>
        <motion.h2
          className="font-display text-xl font-bold text-foreground mb-5 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={navInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Explore BIO-Pak
        </motion.h2>
        <div className="grid grid-cols-5 gap-2">
          {NAV_BUTTONS.map(({ label, Icon, path }, i) => (
            <motion.button
              type="button"
              key={label}
              data-ocid={`nav-${label.toLowerCase()}`}
              className="flex flex-col items-center gap-1.5 p-2 rounded-2xl bg-gradient-to-b from-emerald-500 to-emerald-700 text-white shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={navInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.08 }}
              whileTap={{ scale: 0.93 }}
              onClick={() => navigate({ to: path })}
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] font-semibold leading-tight text-center">
                {label}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ── Features Teaser ── */}
      <section className="bg-background px-5 py-7" ref={featuresRef}>
        <motion.h2
          className="font-display text-xl font-bold text-foreground mb-5 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Why BIO-Pak?
        </motion.h2>
        <div className="flex flex-col gap-3">
          {FEATURES.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              className="flex items-start gap-4 bg-card rounded-2xl p-4 shadow-sm border border-border"
              initial={{ opacity: 0, x: -24 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.13, ease: "easeOut" }}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}
              >
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <p className="font-display font-semibold text-foreground text-sm mb-0.5">
                  {title}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="bg-muted/40 px-5 py-9 flex flex-col items-center gap-4"
        ref={ctaRef}
      >
        <motion.p
          className="text-muted-foreground text-sm text-center max-w-xs"
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Discover our full range of biodegradable packaging solutions
        </motion.p>
        <motion.button
          type="button"
          data-ocid="bottom-cta"
          className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-display font-semibold px-8 py-3.5 rounded-full text-sm shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            ctaInView
              ? {
                  opacity: 1,
                  scale: 1,
                  boxShadow: [
                    "0 4px 20px rgba(16,185,129,0.3)",
                    "0 4px 32px rgba(16,185,129,0.6)",
                    "0 4px 20px rgba(16,185,129,0.3)",
                  ],
                }
              : {}
          }
          transition={{
            opacity: { duration: 0.5, delay: 0.1 },
            scale: { duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] },
            boxShadow: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate({ to: "/products" })}
        >
          Learn More About Our Products
        </motion.button>
      </section>
    </div>
  );
}
