"use client";

import { motion } from "framer-motion";
import { TERPENES } from "@/data/terpenes";

interface RadarChartProps {
  values: Record<string, number>;
}

export default function RadarChart({ values }: RadarChartProps) {
  const activeTerpenes = TERPENES.filter((t) => t.id in values);
  const count = activeTerpenes.length;

  if (count === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-text-secondary">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4 opacity-20"
          >
            ◇
          </motion.div>
          <p className="text-sm">Your blend visualization will appear here</p>
        </div>
      </div>
    );
  }

  const size = 300;
  const center = size / 2;
  const radius = 120;
  const levels = 4;

  // Calculate polygon points
  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / count - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const getLabelPoint = (index: number) => {
    const angle = (Math.PI * 2 * index) / count - Math.PI / 2;
    const r = radius + 30;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Build data polygon path
  const dataPoints = activeTerpenes.map((t, i) => getPoint(i, values[t.id]));
  const dataPath =
    dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  // Grid polygons
  const gridPaths = Array.from({ length: levels }, (_, level) => {
    const levelRadius = ((level + 1) / levels) * 100;
    const points = activeTerpenes.map((_, i) => getPoint(i, levelRadius));
    return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
  });

  // Axis lines
  const axisLines = activeTerpenes.map((_, i) => {
    const end = getPoint(i, 100);
    return { x1: center, y1: center, x2: end.x, y2: end.y };
  });

  // Determine dominant color for glow
  let dominantColor = "#00f0ff";
  let maxVal = 0;
  for (const t of activeTerpenes) {
    if (values[t.id] > maxVal) {
      maxVal = values[t.id];
      dominantColor = t.color;
    }
  }

  return (
    <div className="relative">
      {/* Background glow effect */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${dominantColor}44 0%, transparent 70%)`,
        }}
      />

      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full max-w-[400px] mx-auto">
        <defs>
          <radialGradient id="chartGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={dominantColor} stopOpacity="0.15" />
            <stop offset="100%" stopColor={dominantColor} stopOpacity="0" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="dataFill" x1="0%" y1="0%" x2="100%" y2="100%">
            {activeTerpenes.map((t, i) => (
              <stop
                key={t.id}
                offset={`${(i / Math.max(activeTerpenes.length - 1, 1)) * 100}%`}
                stopColor={t.color}
                stopOpacity="0.3"
              />
            ))}
          </linearGradient>

          <linearGradient id="dataStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            {activeTerpenes.map((t, i) => (
              <stop
                key={t.id}
                offset={`${(i / Math.max(activeTerpenes.length - 1, 1)) * 100}%`}
                stopColor={t.color}
                stopOpacity="1"
              />
            ))}
          </linearGradient>
        </defs>

        {/* Background glow */}
        <circle cx={center} cy={center} r={radius} fill="url(#chartGlow)" />

        {/* Grid */}
        {gridPaths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ transformOrigin: "center" }}
          />
        ))}

        {/* Axis lines */}
        {axisLines.map((line, i) => (
          <line
            key={i}
            {...line}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}

        {/* Data polygon */}
        <motion.path
          d={dataPath}
          fill="url(#dataFill)"
          stroke="url(#dataStroke)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ transformOrigin: "center" }}
        />

        {/* Data points */}
        {dataPoints.map((point, i) => (
          <motion.circle
            key={activeTerpenes[i].id}
            cx={point.x}
            cy={point.y}
            r="5"
            fill={activeTerpenes[i].color}
            filter="url(#glow)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
          >
            <animate
              attributeName="r"
              values="4;6;4"
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
          </motion.circle>
        ))}

        {/* Labels */}
        {activeTerpenes.map((terpene, i) => {
          const pos = getLabelPoint(i);
          return (
            <motion.g
              key={terpene.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <text
                x={pos.x}
                y={pos.y - 6}
                textAnchor="middle"
                fill={terpene.color}
                fontSize="10"
                fontWeight="600"
              >
                {terpene.icon} {terpene.name}
              </text>
              <text
                x={pos.x}
                y={pos.y + 8}
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="9"
              >
                {values[terpene.id]}%
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
