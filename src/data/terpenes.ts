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

// Terpene profile data sourced from Leafly (leafly.com) certified lab testing.
// Values represent approximate share of total terpene content based on Leafly's
// ranked dominance data and published analytical ranges. Actual percentages vary
// by grower, harvest, and batch — always check the COA for a specific product.
// Note: valencene and bisabolol are rarely dominant in commercially tested strains.
export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "OG Kush",
    brand: "Hybrid",
    type: "Flower",
    description: "The backbone of West Coast cannabis. Earthy, pine, and fuel aroma. Leafly: myrcene, limonene, caryophyllene.",
    terpeneProfile: { myrcene: 0.38, limonene: 0.27, caryophyllene: 0.19, humulene: 0.09, pinene: 0.07 },
    rating: 4.7,
    thc: 23,
    imageGradient: "linear-gradient(135deg, #22d3ee, #f97316)",
  },
  {
    id: "p2",
    name: "Blue Dream",
    brand: "Hybrid",
    type: "Flower",
    description: "Balanced hybrid with sweet berry aroma. Myrcene-dominant with pinene and caryophyllene support. Leafly's #1 strain.",
    terpeneProfile: { myrcene: 0.45, pinene: 0.20, caryophyllene: 0.15, limonene: 0.10, linalool: 0.10 },
    rating: 4.6,
    thc: 21,
    imageGradient: "linear-gradient(135deg, #22d3ee, #4ade80)",
  },
  {
    id: "p3",
    name: "Granddaddy Purple",
    brand: "Indica",
    type: "Flower",
    description: "Classic indica with heavy grape and berry notes. Leafly: myrcene dominant, followed by pinene and caryophyllene.",
    terpeneProfile: { myrcene: 0.44, pinene: 0.22, caryophyllene: 0.17, linalool: 0.10, limonene: 0.07 },
    rating: 4.5,
    thc: 23,
    imageGradient: "linear-gradient(135deg, #c084fc, #22d3ee)",
  },
  {
    id: "p4",
    name: "Do-Si-Dos",
    brand: "Indica",
    type: "Flower",
    description: "GSC x Face Off OG cross. Citrus brightness with peppery spice and floral twist. Leafly: limonene, caryophyllene, linalool.",
    terpeneProfile: { limonene: 0.36, caryophyllene: 0.28, linalool: 0.18, myrcene: 0.12, humulene: 0.06 },
    rating: 4.7,
    thc: 21,
    imageGradient: "linear-gradient(135deg, #facc15, #c084fc)",
  },
  {
    id: "p5",
    name: "Wedding Cake",
    brand: "Hybrid",
    type: "Flower",
    description: "Rich, tangy with earthy pepper undertones. Leafly: limonene dominant with caryophyllene and linalool.",
    terpeneProfile: { limonene: 0.38, caryophyllene: 0.26, linalool: 0.16, myrcene: 0.12, humulene: 0.08 },
    rating: 4.6,
    thc: 25,
    imageGradient: "linear-gradient(135deg, #facc15, #f0abfc)",
  },
  {
    id: "p6",
    name: "GSC (Girl Scout Cookies)",
    brand: "Hybrid",
    type: "Flower",
    description: "Iconic dessert strain with mint, cherry, and lemon. Leafly: caryophyllene dominant, then myrcene and limonene.",
    terpeneProfile: { caryophyllene: 0.36, myrcene: 0.24, limonene: 0.19, humulene: 0.12, linalool: 0.09 },
    rating: 4.4,
    thc: 25,
    imageGradient: "linear-gradient(135deg, #f97316, #a3e635)",
  },
  {
    id: "p7",
    name: "Sour Diesel",
    brand: "Sativa",
    type: "Flower",
    description: "Pungent diesel fuel aroma with citrus undertones. Leafly: caryophyllene dominant, then myrcene and limonene.",
    terpeneProfile: { caryophyllene: 0.34, myrcene: 0.26, limonene: 0.20, pinene: 0.12, humulene: 0.08 },
    rating: 4.5,
    thc: 26,
    imageGradient: "linear-gradient(135deg, #f97316, #facc15)",
  },
  {
    id: "p8",
    name: "Gelato",
    brand: "Hybrid",
    type: "Flower",
    description: "Sweet sherbet and lavender cookie aroma. Leafly: caryophyllene dominant with limonene and humulene.",
    terpeneProfile: { caryophyllene: 0.32, limonene: 0.27, humulene: 0.17, myrcene: 0.14, linalool: 0.10 },
    rating: 4.5,
    thc: 25,
    imageGradient: "linear-gradient(135deg, #f97316, #c084fc)",
  },
  {
    id: "p9",
    name: "Jack Herer",
    brand: "Sativa",
    type: "Flower",
    description: "Legendary sativa named after the cannabis activist. Leafly: terpinolene dominant. Abstrax analysis: ~34% terpinolene.",
    terpeneProfile: { terpinolene: 0.38, pinene: 0.22, caryophyllene: 0.17, myrcene: 0.13, limonene: 0.10 },
    rating: 4.4,
    thc: 18,
    imageGradient: "linear-gradient(135deg, #2dd4bf, #4ade80)",
  },
  {
    id: "p10",
    name: "Durban Poison",
    brand: "Sativa",
    type: "Flower",
    description: "Pure South African landrace sativa. Leafly: terpinolene dominant, followed by myrcene and ocimene.",
    terpeneProfile: { terpinolene: 0.40, myrcene: 0.23, ocimene: 0.17, limonene: 0.12, pinene: 0.08 },
    rating: 4.3,
    thc: 20,
    imageGradient: "linear-gradient(135deg, #2dd4bf, #fb923c)",
  },
];

// Cosine similarity between the user's terpene preference vector and each
// product's terpene profile. This measures directional alignment — whether
// the product emphasizes the same terpenes the user cares about — regardless
// of absolute slider position. A coverage term penalizes products that lack
// terpenes the user selected.
export function getRecommendations(
  selectedTerpenes: Record<string, number>
): (Product & { matchScore: number })[] {
  const activeEntries = Object.entries(selectedTerpenes).filter(([, val]) => val > 0);
  if (activeEntries.length === 0) return [];

  const allIds = TERPENES.map((t) => t.id);
  const userVec = allIds.map((id) => (selectedTerpenes[id] || 0) / 100);

  const scored = PRODUCTS.map((product) => {
    const prodVec = allIds.map((id) => product.terpeneProfile[id] || 0);

    let dot = 0, magU = 0, magP = 0;
    for (let i = 0; i < allIds.length; i++) {
      dot += userVec[i] * prodVec[i];
      magU += userVec[i] ** 2;
      magP += prodVec[i] ** 2;
    }
    magU = Math.sqrt(magU);
    magP = Math.sqrt(magP);
    const cosSim = magU > 0 && magP > 0 ? dot / (magU * magP) : 0;

    let covered = 0, wanted = 0;
    for (const [id, val] of activeEntries) {
      const norm = val / 100;
      wanted += norm;
      covered += Math.min(norm, product.terpeneProfile[id] || 0);
    }
    const coverage = wanted > 0 ? covered / wanted : 0;

    const raw = cosSim * 0.65 + coverage * 0.35;
    const matchScore = Math.min(Math.round(raw * 100), 99);
    return { ...product, matchScore };
  });

  return scored.sort((a, b) => b.matchScore - a.matchScore).slice(0, 5);
}
