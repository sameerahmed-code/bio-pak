import { TEAM_MEMBERS } from "@/data/team";
import { Quote, Users2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const AVATAR_STYLES: Record<string, { bg: string; shadow: string }> = {
  sajawal: {
    bg: "linear-gradient(135deg, #059669, #10b981)",
    shadow: "rgba(5,150,105,0.45)",
  },
  sameer: {
    bg: "linear-gradient(135deg, #0d9488, #14b8a6)",
    shadow: "rgba(13,148,136,0.45)",
  },
  shahzeb: {
    bg: "linear-gradient(135deg, #0891b2, #06b6d4)",
    shadow: "rgba(8,145,178,0.45)",
  },
  adeel: {
    bg: "linear-gradient(135deg, #16a34a, #22c55e)",
    shadow: "rgba(22,163,74,0.45)",
  },
};

function TeamCard({
  member,
  index,
}: { member: (typeof TEAM_MEMBERS)[0]; index: number }) {
  const [glowing, setGlowing] = useState(false);
  const style = AVATAR_STYLES[member.id] ?? {
    bg: `linear-gradient(135deg, ${member.color}, ${member.color}99)`,
    shadow: `${member.color}70`,
  };

  return (
    <motion.div
      className="bg-card rounded-3xl border border-border overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
      style={{
        boxShadow: glowing
          ? `0 0 0 3px ${style.shadow}, 0 8px 32px ${style.shadow}`
          : "0 1px 3px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.3s ease",
      }}
      whileTap={{ scale: 0.97 }}
      onTapStart={() => setGlowing(true)}
      onTap={() => setTimeout(() => setGlowing(false), 800)}
      onTapCancel={() => setGlowing(false)}
      data-ocid={`team-card-${member.id}`}
    >
      {/* Avatar area */}
      <div className="relative pt-6 pb-4 flex flex-col items-center bg-gradient-to-b from-accent/60 to-card">
        <motion.div
          className="relative"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2.6 + index * 0.35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* Glow halo */}
          <div
            className="absolute inset-0 rounded-full blur-md opacity-50"
            style={{ background: style.shadow, transform: "scale(1.25)" }}
          />
          {/* Avatar circle */}
          <div
            className="relative w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-display font-bold shadow-lg border-4 border-card"
            style={{ background: style.bg }}
          >
            {member.initials}
          </div>
        </motion.div>

        <h3 className="font-display font-bold text-foreground text-base mt-3">
          {member.name}
        </h3>
        <span
          className="text-[11px] font-semibold px-3 py-0.5 rounded-full mt-1.5 text-white"
          style={{ background: member.color }}
        >
          {member.role}
        </span>
      </div>

      {/* Quote */}
      <div className="px-5 py-4 flex gap-2.5 border-t border-border/50">
        <Quote size={15} className="text-primary flex-shrink-0 mt-0.5" />
        <p className="text-muted-foreground text-sm leading-relaxed italic">
          {member.quote}
        </p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div className="pb-8">
      {/* Green gradient header */}
      <div
        className="relative overflow-hidden px-5 pt-10 pb-8"
        style={{
          background:
            "linear-gradient(135deg, #059669 0%, #047857 60%, #065f46 100%)",
        }}
      >
        {/* Decorative blobs */}
        <motion.div
          className="absolute -top-8 -right-8 w-36 h-36 rounded-full"
          style={{ background: "rgba(16,185,129,0.25)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-6 w-24 h-24 rounded-full"
          style={{ background: "rgba(254,243,199,0.12)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Users2 size={20} className="text-white" />
            </div>
            <h1 className="font-display font-bold text-2xl text-white">
              Our Team
            </h1>
          </div>
          <p className="text-white/80 text-sm ml-0.5">
            The People Behind BIO-Pak
          </p>
        </motion.div>
      </div>

      {/* Mission banner */}
      <motion.div
        className="mx-5 mt-5 rounded-2xl p-4 flex items-center gap-3 border border-primary/20"
        style={{ background: "rgba(5,150,105,0.08)" }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
      >
        <span className="text-2xl">🌿</span>
        <div>
          <div className="font-display font-semibold text-foreground text-sm">
            Our Mission
          </div>
          <div className="text-xs text-muted-foreground">
            To eliminate single-use plastic from Pakistan — one product at a
            time.
          </div>
        </div>
      </motion.div>

      {/* Team cards — staggered entrance */}
      <div className="px-5 pt-5 grid grid-cols-2 gap-3">
        {TEAM_MEMBERS.map((member, i) => (
          <TeamCard key={member.id} member={member} index={i} />
        ))}
      </div>

      {/* Team values */}
      <div className="px-5 pt-6">
        <h2 className="font-display font-semibold text-foreground text-base mb-3">
          Team Values
        </h2>
        <div className="space-y-2">
          {[
            {
              id: "sustainability",
              icon: "🌱",
              value: "Sustainability First",
              desc: "Every decision considers environmental impact",
            },
            {
              id: "innovation",
              icon: "💡",
              value: "Innovation-Driven",
              desc: "Constantly improving our materials and processes",
            },
            {
              id: "community",
              icon: "🤝",
              value: "Community Impact",
              desc: "Creating green jobs across Pakistan",
            },
          ].map((v, i) => (
            <motion.div
              key={v.id}
              className="flex items-center gap-3 bg-card rounded-2xl p-3.5 border border-border shadow-sm"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-xl">{v.icon}</span>
              <div>
                <div className="font-medium text-sm text-foreground">
                  {v.value}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {v.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer tagline */}
      <motion.div
        className="px-5 pt-7 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-xs text-muted-foreground">
          🌍 United by a mission for a greener Pakistan
        </p>
      </motion.div>
    </div>
  );
}
