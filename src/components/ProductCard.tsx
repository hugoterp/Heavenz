"use client";

import { motion } from "framer-motion";
import { TERPENES, type Product } from "@/data/terpenes";

interface ProductCardProps {
  product: Product & { matchScore: number };
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const topTerpenes = Object.entries(product.terpeneProfile)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="glass-card overflow-hidden group cursor-pointer"
    >
      {/* Gradient Header */}
      <div
        className="h-2 w-full"
        style={{ background: product.imageGradient }}
      />

      <div className="p-5">
        {/* Match Score Badge */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-text-secondary">{product.brand}</span>
              <span className="text-text-secondary">·</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-text-secondary">
                {product.type}
              </span>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
            className="relative"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center border-2"
              style={{
                borderColor:
                  product.matchScore > 80
                    ? "#22d3ee"
                    : product.matchScore > 60
                    ? "#a855f7"
                    : "#64748b",
                boxShadow:
                  product.matchScore > 80
                    ? "0 0 15px rgba(34,211,238,0.3)"
                    : product.matchScore > 60
                    ? "0 0 15px rgba(168,85,247,0.3)"
                    : "none",
              }}
            >
              <div className="text-center">
                <div
                  className="text-sm font-bold"
                  style={{
                    color:
                      product.matchScore > 80
                        ? "#22d3ee"
                        : product.matchScore > 60
                        ? "#a855f7"
                        : "#94a3b8",
                  }}
                >
                  {product.matchScore}
                </div>
                <div className="text-[8px] text-text-secondary uppercase tracking-wider">
                  match
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-xs text-text-secondary leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Terpene Mini Bars */}
        <div className="space-y-2 mb-4">
          {topTerpenes.map(([terpeneId, value]) => {
            const terpene = TERPENES.find((t) => t.id === terpeneId);
            if (!terpene) return null;
            return (
              <div key={terpeneId} className="flex items-center gap-2">
                <span className="text-xs w-20 truncate" style={{ color: terpene.color }}>
                  {terpene.icon} {terpene.name}
                </span>
                <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${terpene.color}66, ${terpene.color})`,
                      boxShadow: `0 0 8px ${terpene.color}44`,
                    }}
                  />
                </div>
                <span className="text-[10px] text-text-secondary w-8 text-right">
                  {Math.round(value * 100)}%
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs text-text-primary">{product.rating}</span>
          </div>
          <span className="text-xs text-text-secondary">
            THC {product.thc}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
