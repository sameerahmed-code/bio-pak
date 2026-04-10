import { Leaf, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

const PHONE = "03161353972";
const EMAIL = "bio-pak5@gmail.com";
const WA_HREF = "https://wa.me/923161353972";
const TEL_HREF = "tel:+923161353972";
const MAIL_HREF =
  "mailto:bio-pak5@gmail.com?subject=BIO-Pak Inquiry&body=Hi BIO-Pak! I'm interested in your eco-friendly packaging products.";

const BUTTONS = [
  {
    id: "call",
    icon: Phone,
    label: "Call Us",
    sub: PHONE,
    href: TEL_HREF,
    bg: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    shadow: "rgba(5,150,105,0.4)",
    delay: 0,
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "Chat on WhatsApp",
    sub: "Open WhatsApp",
    href: WA_HREF,
    bg: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
    shadow: "rgba(37,211,102,0.4)",
    delay: 0.6,
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Us",
    sub: EMAIL,
    href: MAIL_HREF,
    bg: "linear-gradient(135deg, #78350f 0%, #92400e 100%)",
    shadow: "rgba(120,53,15,0.4)",
    delay: 1.2,
  },
];

function PulseButton({ btn }: { btn: (typeof BUTTONS)[0] }) {
  const Icon = btn.icon;
  return (
    <motion.a
      href={btn.href}
      target={btn.id === "whatsapp" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="relative flex items-center gap-4 rounded-2xl px-5 py-4 shadow-md overflow-hidden no-underline"
      style={{ background: btn.bg, WebkitTapHighlightColor: "transparent" }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + btn.delay * 0.2, duration: 0.5 }}
      whileTap={{ scale: 0.96 }}
      data-ocid={`contact-btn-${btn.id}`}
    >
      {/* Pulse ring overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ background: "rgba(255,255,255,0.15)" }}
        animate={{ scale: [1, 1.05, 1], opacity: [0, 0.6, 0] }}
        transition={{
          duration: 2.2,
          repeat: Number.POSITIVE_INFINITY,
          delay: btn.delay,
          ease: "easeInOut",
        }}
      />
      {/* Icon bubble */}
      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 relative z-10">
        <Icon size={22} className="text-white" />
      </div>
      <div className="relative z-10 min-w-0">
        <div className="text-white font-display font-semibold text-base leading-tight">
          {btn.label}
        </div>
        <div className="text-white/75 text-xs mt-0.5 truncate">{btn.sub}</div>
      </div>
      {/* Arrow */}
      <div className="ml-auto relative z-10 text-white/60 text-lg">›</div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <motion.div
      className="pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
              <MessageCircle size={20} className="text-white" />
            </div>
            <h1 className="font-display font-bold text-2xl text-white">
              Get in Touch
            </h1>
          </div>
          <p className="text-white/80 text-sm ml-0.5">
            Ready to make the switch to sustainable packaging?
          </p>
        </motion.div>
      </div>

      {/* Company info card */}
      <motion.div
        className="mx-5 mt-5 bg-card rounded-2xl border border-border p-4 flex items-center gap-4 shadow-sm"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        data-ocid="contact-company-card"
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-display font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #059669, #10b981)",
          }}
        >
          BP
        </div>
        <div className="min-w-0">
          <div className="font-display font-bold text-foreground text-base leading-tight">
            BIO-Pak
          </div>
          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
            Sustainable Packaging for a Greener Tomorrow
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <span className="text-sm">🇵🇰</span>
            <span className="text-xs text-muted-foreground font-medium">
              Pakistan
            </span>
          </div>
        </div>
      </motion.div>

      {/* Action buttons */}
      <div className="px-5 pt-5 space-y-3">
        {BUTTONS.map((btn) => (
          <PulseButton key={btn.id} btn={btn} />
        ))}
      </div>

      {/* Location card */}
      <motion.div
        className="mx-5 mt-5 bg-card rounded-2xl border border-border p-4 flex items-center gap-4 shadow-sm"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-ocid="contact-location"
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(5,150,105,0.12)" }}
        >
          <MapPin size={20} className="text-primary" />
        </div>
        <div>
          <div className="font-display font-semibold text-foreground text-sm">
            🇵🇰 Pakistan
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            Serving businesses across Pakistan
          </div>
        </div>
      </motion.div>

      {/* Social proof — committed tagline */}
      <motion.div
        className="mx-5 mt-5 rounded-2xl p-4 text-center"
        style={{
          background: "rgba(5,150,105,0.08)",
          border: "1px solid rgba(5,150,105,0.2)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        data-ocid="contact-social-proof"
      >
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Leaf size={16} className="text-primary" />
          </motion.div>
          <span className="font-display font-semibold text-foreground text-sm">
            Committed to a greener tomorrow
          </span>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <Leaf size={16} className="text-primary" />
          </motion.div>
        </div>
        <p className="text-xs text-muted-foreground">
          Every order helps reduce plastic waste in Pakistan 🌍
        </p>
      </motion.div>

      {/* Footer */}
      <div className="px-5 pt-7 text-center">
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BIO-Pak. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </motion.div>
  );
}
