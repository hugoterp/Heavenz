"use client";

import { motion } from "framer-motion";
import { TERPENES, type Product } from "@/data/terpenes";

interface ProductCardProps {
  product: Product & { matchScore: number };
  index: number;
  userBlend: Record<string, number>;
}

export default function ProductCard({ product, index, userBlend }: ProductCardProps) {
  const topTerpenes = Object.entries(product.terpeneProfile)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 4);

  const userTotal = Object.values(userBlend).reduce((s, v) => s + v, 0);

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
                  product.matchScore > 70
                    ? "#22d3ee"
                    : product.matchScore > 45
                    ? "#a855f7"
                    : "#64748b",
                boxShadow:
                  product.matchScore > 70
                    ? "0 0 15px rgba(34,211,238,0.3)"
                    : product.matchScore > 45
                    ? "0 0 15px rgba(168,85,247,0.3)"
                    : "none",
              }}
            >
              <div className="text-center">
                <div
                  className="text-sm font-bold"
                  style={{
                    color:
                      product.matchScore > 70
                        ? "#22d3ee"
                        : product.matchScore > 45
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

        {/* Terpene Comparison Bars: User Blend vs Strain Profile */}
        <div className="space-y-2.5 mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] uppercase tracking-wider text-text-secondary">Terpene Profile Comparison</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[9px] text-accent-cyan">
                <span className="w-3 h-1 rounded-full bg-accent-cyan inline-block" /> You
              </span>
              <span className="flex items-center gap-1 text-[9px] text-accent-purple">
                <span className="w-3 h-1 rounded-full bg-accent-purple inline-block" /> Strain
              </span>
            </div>
          </div>
          {topTerpenes.map(([terpeneId, strainValue]) => {
            const terpene = TERPENES.find((t) => t.id === terpeneId);
            if (!terpene) return null;
            const userNorm = userTotal > 0 ? (userBlend[terpeneId] || 0) / userTotal : 0;
            return (
              <div key={terpeneId}>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] w-20 truncate" style={{ color: terpene.color }}>
                    {terpene.icon} {terpene.name}
                  </span>
                  <span className="text-[9px] text-text-secondary w-14 text-right tabular-nums">
                    {Math.round(userNorm * 100)}% / {Math.round(strainValue * 100)}%
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  {/* User blend bar */}
                  <div className="flex-1 h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(userNorm * 200, 100)}%` }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      className="h-full rounded-full bg-accent-cyan"
                      style={{
                        boxShadow: "0 0 6px rgba(0,240,255,0.3)",
                      }}
                    />
                  </div>
                  {/* Strain profile bar */}
                  <div className="flex-1 h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${strainValue * 200}%` }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${terpene.color}66, ${terpene.color})`,
                        boxShadow: `0 0 6px ${terpene.color}33`,
                      }}
                    />
                  </div>
                </div>
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
