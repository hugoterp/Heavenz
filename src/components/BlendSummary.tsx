"use client";

import { motion } from "framer-motion";
import { TERPENES } from "@/data/terpenes";

interface BlendSummaryProps {
  values: Record<string, number>;
}

export default function BlendSummary({ values }: BlendSummaryProps) {
  const active = Object.entries(values).filter(([, v]) => v > 0);
  const total = active.reduce((sum, [, v]) => sum + v, 0);

  if (active.length === 0) return null;

  // Collect all unique effects from selected terpenes
  const effectSet = new Set<string>();
  for (const [id] of active) {
    const t = TERPENES.find((t) => t.id === id);
    if (t) t.effects.forEach((e) => effectSet.add(e));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
        Blend Profile
      </h3>

      {/* Stacked proportion bar */}
      <div className="h-3 rounded-full overflow-hidden flex mb-4">
        {active.map(([id, value]) => {
          const terpene = TERPENES.find((t) => t.id === id);
          if (!terpene) return null;
          const width = (value / total) * 100;
          return (
            <motion.div
              key={id}
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{ duration: 0.5 }}
              style={{
                background: terpene.color,
                boxShadow: `0 0 8px ${terpene.color}44`,
              }}
              className="h-full"
              title={`${terpene.name}: ${Math.round(width)}%`}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
        {active.map(([id, value]) => {
          const terpene = TERPENES.find((t) => t.id === id);
          if (!terpene) return null;
          return (
            <div key={id} className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: terpene.color }}
              />
              <span className="text-xs text-text-secondary">
                {terpene.name}{" "}
                <span style={{ color: terpene.color }}>
                  {Math.round((value / total) * 100)}%
                </span>
              </span>
            </div>
          );
        })}
      </div>

      {/* Expected Effects */}
      <div>
        <h4 className="text-xs text-text-secondary mb-2 uppercase tracking-wider">
          Expected Effects
        </h4>
        <div className="flex flex-wrap gap-2">
          {Array.from(effectSet).map((effect) => (
            <span
              key={effect}
              className="text-[10px] px-2.5 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
            >
              {effect}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
