"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TERPENES, type Terpene } from "@/data/terpenes";

interface TerpeneSelectorProps {
  selected: Record<string, number>;
  onToggle: (id: string) => void;
  onSliderChange: (id: string, value: number) => void;
}

export default function TerpeneSelector({
  selected,
  onToggle,
  onSliderChange,
}: TerpeneSelectorProps) {
  const isSelected = (id: string) => id in selected;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight glow-text-cyan">
          Select Your Terpenes
        </h2>
        <p className="text-text-secondary mt-1 text-sm">
          Choose flavors and dial in your perfect blend
        </p>
      </div>

      {/* Terpene Chips Grid */}
      <div className="flex flex-wrap gap-3">
        {TERPENES.map((terpene) => (
          <TerpeneChip
            key={terpene.id}
            terpene={terpene}
            active={isSelected(terpene.id)}
            onToggle={() => onToggle(terpene.id)}
          />
        ))}
      </div>

      {/* Active Sliders */}
      <AnimatePresence mode="popLayout">
        {TERPENES.filter((t) => isSelected(t.id)).map((terpene, index) => (
          <motion.div
            key={terpene.id}
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <TerpeneSlider
              terpene={terpene}
              value={selected[terpene.id]}
              onChange={(val) => onSliderChange(terpene.id, val)}
              onRemove={() => onToggle(terpene.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {Object.keys(selected).length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-text-secondary"
        >
          <div className="text-4xl mb-3 opacity-30">✦</div>
          <p className="text-sm">Tap terpenes above to start building your blend</p>
        </motion.div>
      )}
    </div>
  );
}

function TerpeneChip({
  terpene,
  active,
  onToggle,
}: {
  terpene: Terpene;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer"
    >
      <div
        className={`
          flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
          transition-all duration-300 border
          ${
            active
              ? "border-transparent text-white"
              : "border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary bg-bg-card"
          }
        `}
        style={
          active
            ? {
                background: `linear-gradient(135deg, ${terpene.color}22, ${terpene.color}44)`,
                borderColor: `${terpene.color}66`,
                boxShadow: `0 0 20px ${terpene.color}33, inset 0 0 20px ${terpene.color}11`,
              }
            : undefined
        }
      >
        <span className="text-base">{terpene.icon}</span>
        <span>{terpene.name}</span>
        {active && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full"
            style={{ background: terpene.color, boxShadow: `0 0 8px ${terpene.color}` }}
          />
        )}
      </div>
    </motion.button>
  );
}

function TerpeneSlider({
  terpene,
  value,
  onChange,
  onRemove,
}: {
  terpene: Terpene;
  value: number;
  onChange: (val: number) => void;
  onRemove: () => void;
}) {
  return (
    <div className="glass-card p-5 mb-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{terpene.icon}</span>
          <div>
            <span className="font-semibold text-sm" style={{ color: terpene.color }}>
              {terpene.name}
            </span>
            <span className="text-text-secondary text-xs ml-2">{terpene.flavor}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <motion.span
            key={value}
            initial={{ scale: 1.3, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-lg font-bold tabular-nums min-w-[3ch] text-right"
            style={{ color: terpene.color }}
          >
            {value}
          </motion.span>
          <span className="text-text-secondary text-xs">%</span>
          <button
            onClick={onRemove}
            className="text-text-secondary hover:text-red-400 transition-colors ml-2 text-lg cursor-pointer"
          >
            ×
          </button>
        </div>
      </div>

      {/* Slider Track */}
      <div className="relative">
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 h-1 rounded-full transition-all duration-150"
          style={{
            width: `${value}%`,
            background: `linear-gradient(90deg, ${terpene.color}66, ${terpene.color})`,
            boxShadow: `0 0 10px ${terpene.color}44`,
          }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative z-10 w-full"
          style={
            {
              "--slider-color": terpene.color,
            } as React.CSSProperties
          }
        />
      </div>

      {/* Effect Tags */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {terpene.effects.map((effect) => (
          <span
            key={effect}
            className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              color: `${terpene.color}cc`,
              background: `${terpene.color}11`,
              border: `1px solid ${terpene.color}22`,
            }}
          >
            {effect}
          </span>
        ))}
      </div>
    </div>
  );
}
