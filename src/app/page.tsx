"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerpeneSelector from "@/components/TerpeneSelector";
import RadarChart from "@/components/RadarChart";
import ProductCard from "@/components/ProductCard";
import BlendSummary from "@/components/BlendSummary";
import { getRecommendations } from "@/data/terpenes";

export default function Home() {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const handleToggle = (id: string) => {
    setSelected((prev) => {
      if (id in prev) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: 50 };
    });
  };

  const handleSliderChange = (id: string, value: number) => {
    setSelected((prev) => ({ ...prev, [id]: value }));
  };

  const recommendations = useMemo(() => getRecommendations(selected), [selected]);
  const hasSelection = Object.keys(selected).length > 0;

  return (
    <div className="min-h-screen grid-bg relative">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-accent-pink/3 rounded-full blur-3xl" />
      </div>

      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"
          style={{ animation: "scan-line 8s linear infinite" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-black tracking-tighter"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink bg-clip-text text-transparent">
              HEAVENZ
            </span>
          </motion.h1>
          <motion.p
            className="text-text-secondary mt-2 text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Terpene Flavor Architect
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 mx-auto h-px w-48 bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"
          />
        </motion.header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Terpene Selector */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-6 sticky top-8">
              <TerpeneSelector
                selected={selected}
                onToggle={handleToggle}
                onSliderChange={handleSliderChange}
              />
            </div>
          </motion.div>

          {/* Right: Visualization + Results */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Radar Chart */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold tracking-tight">
                  <span className="text-accent-cyan">◆</span> Blend Visualization
                </h2>
                {hasSelection && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelected({})}
                    className="text-xs text-text-secondary hover:text-red-400 transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-red-400/30 cursor-pointer"
                  >
                    Reset All
                  </motion.button>
                )}
              </div>
              <RadarChart values={selected} />
            </div>

            {/* Blend Summary */}
            <AnimatePresence>
              {hasSelection && <BlendSummary values={selected} />}
            </AnimatePresence>

            {/* Product Recommendations */}
            <AnimatePresence>
              {recommendations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <h2 className="text-lg font-bold tracking-tight">
                      <span className="text-accent-purple">◆</span> Recommended For
                      You
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent-purple/30 to-transparent" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <AnimatePresence mode="popLayout">
                      {recommendations.map((product, index) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          index={index}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 pb-8"
        >
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
          <p className="text-text-secondary text-xs tracking-wider">
            HEAVENZ — Elevate Your Experience
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
