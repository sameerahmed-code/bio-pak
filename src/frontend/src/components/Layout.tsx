import { cn } from "@/lib/utils";
import { Outlet, useRouter } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronDown,
  Cog,
  Factory,
  Home,
  MoreHorizontal,
  Package,
  Phone,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const PRIMARY_NAV = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Products", icon: Package, path: "/products" },
  { label: "Process", icon: Factory, path: "/process" },
  { label: "Team", icon: Users2, path: "/team" },
  { label: "Contact", icon: Phone, path: "/contact" },
] as const;

const MORE_ITEMS = [
  { label: "Features", icon: CheckCircle2, path: "/features" },
  { label: "Machinery", icon: Cog, path: "/machinery" },
  { label: "Advantages", icon: ShieldCheck, path: "/advantages" },
] as const;

type PrimaryPath = (typeof PRIMARY_NAV)[number]["path"];
type MorePath = (typeof MORE_ITEMS)[number]["path"];
type NavPath = PrimaryPath | MorePath;

export default function Layout() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const isActive = (path: NavPath) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  const isMoreActive = MORE_ITEMS.some((item) => isActive(item.path));

  const navigate = (path: NavPath) => {
    setMoreOpen(false);
    router.navigate({ to: path });
  };

  // Close popup when clicking outside
  useEffect(() => {
    if (!moreOpen) return;
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [moreOpen]);

  return (
    <div className="min-h-screen bg-background flex items-start justify-center">
      <div
        className="relative w-full max-w-[430px] min-h-screen flex flex-col bg-background shadow-xl overflow-hidden"
        style={{ height: "100dvh" }}
      >
        {/* Scrollable content area */}
        <main
          className="flex-1 overflow-y-auto pb-20 scroll-smooth"
          data-ocid="main-content"
        >
          <Outlet />
        </main>

        {/* Bottom Navigation */}
        <nav
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-card border-t border-border z-50 safe-area-inset-bottom"
          data-ocid="bottom-nav"
          style={{ boxShadow: "0 -2px 16px oklch(0.2 0.03 50 / 0.08)" }}
        >
          {/* More popup */}
          <AnimatePresence>
            {moreOpen && (
              <motion.div
                ref={moreRef}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute bottom-full right-0 mb-2 mr-3 bg-card border border-border rounded-2xl shadow-lg overflow-hidden min-w-[160px]"
                data-ocid="more-popup"
              >
                {MORE_ITEMS.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => navigate(item.path)}
                      className={cn(
                        "flex items-center gap-3 w-full px-4 py-3 transition-smooth text-left",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted/50",
                      )}
                      data-ocid={`nav-${item.label.toLowerCase()}`}
                    >
                      <item.icon
                        size={18}
                        strokeWidth={active ? 2.5 : 1.8}
                        className={
                          active ? "text-primary" : "text-muted-foreground"
                        }
                      />
                      <span
                        className={cn(
                          "text-sm font-medium font-body",
                          active && "font-semibold",
                        )}
                      >
                        {item.label}
                      </span>
                      {active && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </button>
                  );
                })}
                <div className="flex justify-center py-1 border-t border-border/50">
                  <ChevronDown size={14} className="text-muted-foreground" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-around px-2 py-2">
            {PRIMARY_NAV.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => {
                    setMoreOpen(false);
                    navigate(item.path);
                  }}
                  className={cn(
                    "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-smooth relative min-w-[52px]",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                  aria-label={item.label}
                  data-ocid={`nav-${item.label.toLowerCase()}`}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <item.icon
                    size={20}
                    strokeWidth={active ? 2.5 : 1.8}
                    className={cn(
                      "relative z-10 transition-smooth",
                      active ? "text-primary" : "text-muted-foreground",
                    )}
                  />
                  <span
                    className={cn(
                      "text-[10px] font-medium relative z-10 transition-smooth",
                      active
                        ? "text-primary font-semibold"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}

            {/* More button */}
            <button
              type="button"
              onClick={() => setMoreOpen((o) => !o)}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-smooth relative min-w-[52px]",
                isMoreActive || moreOpen
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
              aria-label="More"
              data-ocid="nav-more"
            >
              {(isMoreActive || moreOpen) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <MoreHorizontal
                size={20}
                strokeWidth={isMoreActive || moreOpen ? 2.5 : 1.8}
                className={cn(
                  "relative z-10 transition-smooth",
                  isMoreActive || moreOpen
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium relative z-10 transition-smooth",
                  isMoreActive || moreOpen
                    ? "text-primary font-semibold"
                    : "text-muted-foreground",
                )}
              >
                More
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
