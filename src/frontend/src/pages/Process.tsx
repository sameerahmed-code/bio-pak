import { PROCESS_STEPS } from "@/data/process";
import { Cog } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const STEP_DESCRIPTIONS: Record<number, string> = {
  1: "Raw sugarcane fibers are collected directly after juice extraction at sugar mills. These fibrous by-products, known as bagasse, are gathered in bulk and transported to the BIO-Pak facility. This step transforms agricultural waste into the foundation of eco-friendly packaging.",
  2: "Collected bagasse is thoroughly washed and sorted to remove residual sugar, dirt, and debris. Industrial-grade cleaning systems ensure only the purest fibers proceed to the next stage. Proper preparation here is critical to the quality and safety of the final product.",
  3: "Cleaned fibers are fed into industrial pulping machines that break them down into a fine, uniform pulp. Water is added to control consistency throughout the mechanical process. The resulting pulp forms the raw material for all BIO-Pak packaging products.",
  4: "The fiber pulp is blended with natural, food-safe binding agents to achieve optimal structural integrity. Precise ratios are maintained by automated mixing systems to ensure batch consistency. No synthetic chemicals are introduced — the formulation remains fully biodegradable.",
  5: "Hydraulic mold presses shape the blended pulp into product forms — trays, containers, cups, and more. High pressure ensures dense, even distribution of material throughout each mold cavity. Each product emerges with consistent dimensions and a smooth surface finish.",
  6: "Freshly molded products are passed through hot press machines that remove residual moisture and harden the structure. Controlled temperatures ensure thorough drying without compromising biodegradability. This step gives BIO-Pak products their characteristic durability and heat resistance.",
  7: "Edges are precision-trimmed and surfaces smoothed using automated cutting and finishing machines. Any flash or excess material is removed to achieve a clean, professional appearance. Products are visually inspected at this stage before moving to quality testing.",
  8: "Each production batch undergoes rigorous laboratory testing for durability, heat tolerance, food safety, and biodegradability compliance. Testing follows international packaging standards to ensure suitability for food contact applications. Only approved batches advance to the packaging stage.",
  9: "Finished products are packed in eco-friendly, recyclable outer packaging ready for shipment. Orders are sorted, labeled, and dispatched to distributors and clients across Pakistan and beyond. BIO-Pak ensures every delivery upholds the same environmental commitment as the products themselves.",
};

function StepCard({
  step,
  index,
  stepRef,
}: {
  step: (typeof PROCESS_STEPS)[0];
  index: number;
  stepRef: (el: HTMLDivElement | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const isOdd = index % 2 === 0;

  return (
    <div
      ref={(el) => {
        stepRef(el);
      }}
      data-ocid={`process-step-${step.id}`}
    >
      <div ref={cardRef} className="relative flex items-start gap-0">
        {/* Timeline spine + circle */}
        <div className="relative flex flex-col items-center flex-shrink-0 w-12 mr-3">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.1,
              type: "spring",
              stiffness: 220,
            }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-md flex-shrink-0"
          >
            <span className="text-lg leading-none">{step.icon}</span>
          </motion.div>
          {index < PROCESS_STEPS.length - 1 && (
            <div className="w-0.5 flex-1 min-h-[8rem] bg-gradient-to-b from-primary/60 to-primary/15 mt-1" />
          )}
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex-1 mb-8 bg-card rounded-2xl overflow-hidden shadow-sm border border-border"
        >
          <div className="w-full h-40 overflow-hidden bg-muted relative">
            <img
              src={step.imageUrl}
              alt={step.title}
              className="w-full h-full object-cover transition-smooth hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm text-muted-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full font-body">
              {step.duration}
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full font-body">
                Step {step.id}
              </span>
            </div>
            <h3 className="text-base font-bold text-foreground font-display mb-2 leading-tight">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              {STEP_DESCRIPTIONS[step.id]}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Process() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSteps = new Set<number>();

    const updateProgress = () => {
      if (visibleSteps.size === 0) return;
      const firstVisible = Math.min(...Array.from(visibleSteps));
      setCurrentStep(firstVisible + 1);
      setScrollProgress((firstVisible + 1) / PROCESS_STEPS.length);
    };

    for (let i = 0; i < stepRefs.current.length; i++) {
      const el = stepRefs.current[i];
      if (!el) continue;
      const idx = i;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              visibleSteps.add(idx);
            } else {
              visibleSteps.delete(idx);
            }
          }
          updateProgress();
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const obs of observers) obs.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-card border-b border-border px-5 pt-6 pb-5"
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <Cog className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground font-display">
            Manufacturing Process
          </h1>
        </div>
        <p className="text-sm text-muted-foreground font-body ml-12">
          From Bagasse to Product
        </p>
      </motion.div>

      {/* Sticky Progress Bar */}
      <div
        className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border px-5 py-3 shadow-sm"
        data-ocid="process-progress"
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-muted-foreground font-body">
            Progress
          </span>
          <span className="text-xs font-bold text-primary font-display">
            Step {currentStep} of 9
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        {/* Step dots indicator */}
        <div className="flex justify-between mt-2 px-0.5">
          {PROCESS_STEPS.map((s) => (
            <div
              key={s.id}
              className={`w-1.5 h-1.5 rounded-full transition-smooth ${
                s.id <= currentStep
                  ? "bg-primary scale-110"
                  : "bg-muted-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 pt-6 pb-10 max-w-lg mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-xs text-muted-foreground text-center mb-6 font-body"
        >
          Scroll to explore our 9-step manufacturing journey
        </motion.p>

        {PROCESS_STEPS.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            index={index}
            stepRef={(el) => {
              stepRefs.current[index] = el;
            }}
          />
        ))}

        {/* Completion badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="flex flex-col items-center gap-3 pt-2 pb-4"
          data-ocid="process-complete"
        >
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <span className="text-2xl">✅</span>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-foreground font-display">
              Process Complete
            </p>
            <p className="text-sm text-muted-foreground font-body">
              Ready for eco-conscious consumers
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
