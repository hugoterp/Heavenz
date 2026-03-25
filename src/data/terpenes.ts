export interface Terpene {
  id: string;
  name: string;
  flavor: string;
  color: string;
  colorRgb: string;
  icon: string;
  description: string;
  effects: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  type: string;
  description: string;
  terpeneProfile: Record<string, number>;
  rating: number;
  thc: number;
  imageGradient: string;
}

export const TERPENES: Terpene[] = [
  {
    id: "myrcene",
    name: "Myrcene",
    flavor: "Earthy & Musky",
    color: "#22d3ee",
    colorRgb: "34, 211, 238",
    icon: "🌿",
    description: "The most common terpene in cannabis. Earthy, herbal aroma with hints of musk.",
    effects: ["Relaxing", "Sedating", "Anti-inflammatory"],
  },
  {
    id: "limonene",
    name: "Limonene",
    flavor: "Citrus & Lemon",
    color: "#facc15",
    colorRgb: "250, 204, 21",
    icon: "🍋",
    description: "Bright citrus aroma. Found in lemon rinds and citrus fruits.",
    effects: ["Uplifting", "Stress Relief", "Energizing"],
  },
  {
    id: "linalool",
    name: "Linalool",
    flavor: "Floral & Lavender",
    color: "#c084fc",
    colorRgb: "192, 132, 252",
    icon: "💜",
    description: "Sweet floral scent reminiscent of lavender. Calming and soothing.",
    effects: ["Calming", "Sleep Aid", "Anti-anxiety"],
  },
  {
    id: "caryophyllene",
    name: "Caryophyllene",
    flavor: "Spicy & Peppery",
    color: "#f97316",
    colorRgb: "249, 115, 22",
    icon: "🌶️",
    description: "Spicy, peppery notes. Found in black pepper and cloves.",
    effects: ["Pain Relief", "Anti-inflammatory", "Relaxing"],
  },
  {
    id: "pinene",
    name: "Pinene",
    flavor: "Pine & Fresh",
    color: "#4ade80",
    colorRgb: "74, 222, 128",
    icon: "🌲",
    description: "Sharp pine aroma. Found in pine needles and rosemary.",
    effects: ["Alertness", "Focus", "Respiratory"],
  },
  {
    id: "terpinolene",
    name: "Terpinolene",
    flavor: "Herbal & Woody",
    color: "#2dd4bf",
    colorRgb: "45, 212, 191",
    icon: "🌾",
    description: "Complex herbal profile with woody and floral undertones.",
    effects: ["Uplifting", "Creative", "Antioxidant"],
  },
  {
    id: "humulene",
    name: "Humulene",
    flavor: "Hoppy & Earthy",
    color: "#a3e635",
    colorRgb: "163, 230, 53",
    icon: "🍺",
    description: "Earthy, woody aroma found in hops and coriander.",
    effects: ["Appetite Suppressant", "Anti-inflammatory", "Antibacterial"],
  },
  {
    id: "ocimene",
    name: "Ocimene",
    flavor: "Sweet & Tropical",
    color: "#fb923c",
    colorRgb: "251, 146, 60",
    icon: "🥭",
    description: "Sweet, tropical, herbaceous aroma. Found in mint and orchids.",
    effects: ["Energizing", "Decongestant", "Antiviral"],
  },
  {
    id: "bisabolol",
    name: "Bisabolol",
    flavor: "Chamomile & Gentle",
    color: "#f0abfc",
    colorRgb: "240, 171, 252",
    icon: "🌼",
    description: "Delicate floral aroma like chamomile. Gentle and soothing.",
    effects: ["Skin Healing", "Anti-irritation", "Calming"],
  },
  {
    id: "valencene",
    name: "Valencene",
    flavor: "Orange & Citrusy",
    color: "#fb7185",
    colorRgb: "251, 113, 133",
    icon: "🍊",
    description: "Sweet orange citrus aroma. Found in Valencia oranges.",
    effects: ["Uplifting", "Focus", "Anti-inflammatory"],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Cosmic Drift",
    brand: "Heavenz",
    type: "Flower",
    description: "A deeply relaxing indica with rich earthy tones and lavender notes.",
    terpeneProfile: { myrcene: 0.85, linalool: 0.7, caryophyllene: 0.4, bisabolol: 0.3 },
    rating: 4.8,
    thc: 28,
    imageGradient: "linear-gradient(135deg, #22d3ee, #c084fc)",
  },
  {
    id: "p2",
    name: "Solar Flare",
    brand: "Heavenz",
    type: "Cartridge",
    description: "Energizing sativa with bright citrus burst and pine freshness.",
    terpeneProfile: { limonene: 0.9, pinene: 0.75, terpinolene: 0.5, ocimene: 0.3 },
    rating: 4.7,
    thc: 85,
    imageGradient: "linear-gradient(135deg, #facc15, #4ade80)",
  },
  {
    id: "p3",
    name: "Nebula Haze",
    brand: "Heavenz",
    type: "Flower",
    description: "Balanced hybrid with tropical sweetness and spicy undertones.",
    terpeneProfile: { ocimene: 0.8, caryophyllene: 0.65, myrcene: 0.45, limonene: 0.35 },
    rating: 4.6,
    thc: 24,
    imageGradient: "linear-gradient(135deg, #fb923c, #f97316)",
  },
  {
    id: "p4",
    name: "Midnight Bloom",
    brand: "Heavenz",
    type: "Edible",
    description: "Floral indica-dominant with deep chamomile and lavender comfort.",
    terpeneProfile: { linalool: 0.9, bisabolol: 0.8, myrcene: 0.5, humulene: 0.25 },
    rating: 4.9,
    thc: 10,
    imageGradient: "linear-gradient(135deg, #c084fc, #f0abfc)",
  },
  {
    id: "p5",
    name: "Green Lightning",
    brand: "Heavenz",
    type: "Concentrate",
    description: "Sharp, focused sativa with pure pine and herbal clarity.",
    terpeneProfile: { pinene: 0.95, terpinolene: 0.6, humulene: 0.4, limonene: 0.35 },
    rating: 4.5,
    thc: 92,
    imageGradient: "linear-gradient(135deg, #4ade80, #a3e635)",
  },
  {
    id: "p6",
    name: "Sunset Ritual",
    brand: "Heavenz",
    type: "Pre-roll",
    description: "A warm evening blend of citrus, pepper, and gentle earth.",
    terpeneProfile: { valencene: 0.7, caryophyllene: 0.65, myrcene: 0.5, linalool: 0.3 },
    rating: 4.7,
    thc: 22,
    imageGradient: "linear-gradient(135deg, #fb7185, #f97316)",
  },
  {
    id: "p7",
    name: "Astral Cream",
    brand: "Heavenz",
    type: "Flower",
    description: "Creamy hybrid with balanced tropical and hoppy character.",
    terpeneProfile: { ocimene: 0.6, humulene: 0.55, linalool: 0.5, myrcene: 0.45 },
    rating: 4.4,
    thc: 20,
    imageGradient: "linear-gradient(135deg, #fb923c, #a3e635)",
  },
  {
    id: "p8",
    name: "Void Walker",
    brand: "Heavenz",
    type: "Cartridge",
    description: "Intense indica with maximum earthy depth and spice.",
    terpeneProfile: { myrcene: 0.95, caryophyllene: 0.75, humulene: 0.5, pinene: 0.2 },
    rating: 4.8,
    thc: 88,
    imageGradient: "linear-gradient(135deg, #22d3ee, #f97316)",
  },
  {
    id: "p9",
    name: "Prism Wave",
    brand: "Heavenz",
    type: "Flower",
    description: "Uplifting citrus explosion with sweet orange and lemon zest.",
    terpeneProfile: { limonene: 0.85, valencene: 0.8, terpinolene: 0.4, pinene: 0.3 },
    rating: 4.6,
    thc: 26,
    imageGradient: "linear-gradient(135deg, #facc15, #fb7185)",
  },
  {
    id: "p10",
    name: "Zen Garden",
    brand: "Heavenz",
    type: "Edible",
    description: "Peaceful blend of chamomile, lavender, and gentle herbal notes.",
    terpeneProfile: { bisabolol: 0.85, linalool: 0.75, terpinolene: 0.35, myrcene: 0.3 },
    rating: 4.9,
    thc: 5,
    imageGradient: "linear-gradient(135deg, #f0abfc, #2dd4bf)",
  },
];

export function getRecommendations(
  selectedTerpenes: Record<string, number>
): (Product & { matchScore: number })[] {
  const activeEntries = Object.entries(selectedTerpenes).filter(([, val]) => val > 0);
  if (activeEntries.length === 0) return [];

  const scored = PRODUCTS.map((product) => {
    let totalScore = 0;
    let totalWeight = 0;

    for (const [terpeneId, userValue] of activeEntries) {
      const normalizedUser = userValue / 100;
      const productValue = product.terpeneProfile[terpeneId] || 0;
      const weight = normalizedUser;
      // Score based on how close the product profile matches user preference
      const similarity = 1 - Math.abs(normalizedUser - productValue);
      // Boost score when product actually has this terpene
      const presenceBonus = productValue > 0 ? 0.3 : 0;
      totalScore += (similarity + presenceBonus) * weight;
      totalWeight += weight;
    }

    const matchScore = totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0;
    return { ...product, matchScore: Math.min(Math.round(matchScore), 99) };
  });

  return scored.sort((a, b) => b.matchScore - a.matchScore).slice(0, 5);
}
