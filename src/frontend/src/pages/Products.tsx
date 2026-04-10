import { Badge } from "@/components/ui/badge";
import { Leaf, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface ProductItem {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: "Eco Bags",
    category: "Bags",
    description:
      "Sturdy reusable carry bags crafted from compressed sugarcane bagasse fibers. A naturally biodegradable replacement for single-use plastic bags — perfect for groceries and retail.",
    imageUrl: "https://picsum.photos/400/300?random=10",
  },
  {
    id: 2,
    name: "Food Containers",
    category: "Containers",
    description:
      "Leak-proof, heat-resistant food containers molded from sugarcane pulp. Safe for hot meals, microwave-ready, and fully compostable after use — ideal for takeaway and meal prep.",
    imageUrl: "https://picsum.photos/400/300?random=11",
  },
  {
    id: 3,
    name: "Protective Wraps",
    category: "Wraps",
    description:
      "Flexible bagasse-fiber wrapping sheets that cushion delicate items during shipping. Decomposes naturally within weeks, leaving zero microplastic residue.",
    imageUrl: "https://picsum.photos/400/300?random=12",
  },
];

export default function Products() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground leading-tight">
              Our Products
            </h1>
            <p className="text-xs text-muted-foreground font-body">
              Made from Sugarcane Bagasse
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.4 }}
        className="px-5 pt-5 pb-1 text-sm text-muted-foreground font-body"
      >
        Tap a product image to zoom in.
      </motion.p>

      {/* Cards */}
      <div className="px-5 pt-3 space-y-5">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.52,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-card rounded-2xl overflow-hidden shadow-md border border-border"
            data-ocid={`product-card-${product.id}`}
          >
            {/* Product Image — tap to zoom */}
            <button
              type="button"
              className="w-full block relative overflow-hidden group"
              onClick={() => setZoomedImage(product.imageUrl)}
              aria-label={`Zoom image of ${product.name}`}
              data-ocid={`product-image-btn-${product.id}`}
            >
              <motion.img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-52 object-cover group-active:scale-105 transition-smooth"
                whileTap={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              />
              {/* Zoom hint overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-smooth" />
              <span className="absolute bottom-2 right-3 bg-foreground/55 text-background text-[10px] px-2.5 py-0.5 rounded-full backdrop-blur-sm font-body">
                Tap to zoom
              </span>
            </button>

            {/* Card Body */}
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-display font-semibold text-foreground leading-tight">
                  {product.name}
                </h2>
                <Badge
                  variant="secondary"
                  className="shrink-0 text-xs bg-primary/10 text-primary border border-primary/20"
                >
                  {product.category}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {product.description}
              </p>

              {/* Bagasse badge */}
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  <Leaf className="w-3 h-3" />
                  Made from Sugarcane Bagasse
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            key="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm px-5"
            onClick={() => setZoomedImage(null)}
            data-ocid="zoom-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.78, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomedImage}
                alt="Zoomed product"
                className="w-full h-auto object-cover"
              />
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                aria-label="Close zoom"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-foreground/60 flex items-center justify-center text-background backdrop-blur-sm"
                data-ocid="zoom-modal-close"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
