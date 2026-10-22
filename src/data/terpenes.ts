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
  // ── ICONIC CLASSICS ────────────────────────────────────────────────
  { id: "p1", name: "OG Kush", brand: "Hybrid", type: "Flower",
    description: "West Coast backbone. Earthy, pine, and fuel aroma. Leafly: myrcene, limonene, caryophyllene.",
    terpeneProfile: { myrcene: 0.38, limonene: 0.27, caryophyllene: 0.19, humulene: 0.09, pinene: 0.07 },
    rating: 4.7, thc: 23, imageGradient: "linear-gradient(135deg, #22d3ee, #f97316)" },
  { id: "p2", name: "Blue Dream", brand: "Hybrid", type: "Flower",
    description: "Balanced hybrid with sweet berry aroma. Myrcene-dominant with pinene support. Leafly's #1 strain.",
    terpeneProfile: { myrcene: 0.45, pinene: 0.20, caryophyllene: 0.15, limonene: 0.10, linalool: 0.10 },
    rating: 4.6, thc: 21, imageGradient: "linear-gradient(135deg, #22d3ee, #4ade80)" },
  { id: "p3", name: "Granddaddy Purple", brand: "Indica", type: "Flower",
    description: "Classic indica with heavy grape and berry notes. Leafly: myrcene dominant, then pinene and caryophyllene.",
    terpeneProfile: { myrcene: 0.44, pinene: 0.22, caryophyllene: 0.17, linalool: 0.10, limonene: 0.07 },
    rating: 4.5, thc: 23, imageGradient: "linear-gradient(135deg, #c084fc, #22d3ee)" },
  { id: "p4", name: "Northern Lights", brand: "Indica", type: "Flower",
    description: "Pure indica legend. Sweet, spicy aroma with full-body relaxation. Leafly: myrcene, caryophyllene, pinene.",
    terpeneProfile: { myrcene: 0.42, caryophyllene: 0.22, pinene: 0.15, limonene: 0.12, linalool: 0.09 },
    rating: 4.5, thc: 18, imageGradient: "linear-gradient(135deg, #22d3ee, #c084fc)" },
  { id: "p5", name: "Bubba Kush", brand: "Indica", type: "Flower",
    description: "Heavy indica with coffee and chocolate notes. Deeply sedating. Leafly: caryophyllene, limonene, myrcene.",
    terpeneProfile: { caryophyllene: 0.36, limonene: 0.28, myrcene: 0.18, humulene: 0.10, linalool: 0.08 },
    rating: 4.3, thc: 17, imageGradient: "linear-gradient(135deg, #f97316, #facc15)" },
  { id: "p6", name: "Gorilla Glue (GG4)", brand: "Hybrid", type: "Flower",
    description: "Pungent, earthy, sour. Multiple Cannabis Cup winner. Leafly: caryophyllene, myrcene, limonene.",
    terpeneProfile: { caryophyllene: 0.38, myrcene: 0.25, limonene: 0.20, humulene: 0.10, linalool: 0.07 },
    rating: 4.5, thc: 20, imageGradient: "linear-gradient(135deg, #f97316, #a3e635)" },
  { id: "p7", name: "Zkittlez", brand: "Indica", type: "Flower",
    description: "Candy-sweet fruit medley. 2015 Emerald Cup winner. Leafly: caryophyllene, linalool, humulene.",
    terpeneProfile: { caryophyllene: 0.36, linalool: 0.24, humulene: 0.18, myrcene: 0.12, limonene: 0.10 },
    rating: 4.4, thc: 15, imageGradient: "linear-gradient(135deg, #f97316, #c084fc)" },
  { id: "p8", name: "Purple Punch", brand: "Hybrid", type: "Flower",
    description: "Larry OG x Granddaddy Purple. Grape candy and blueberry muffin. Leafly: caryophyllene, limonene, pinene.",
    terpeneProfile: { caryophyllene: 0.35, limonene: 0.28, pinene: 0.18, myrcene: 0.12, linalool: 0.07 },
    rating: 4.5, thc: 18, imageGradient: "linear-gradient(135deg, #c084fc, #facc15)" },

  // ── MODERN CLASSICS ────────────────────────────────────────────────
  { id: "p9", name: "Do-Si-Dos", brand: "Indica", type: "Flower",
    description: "GSC x Face Off OG. Citrus brightness with peppery spice. Leafly: limonene, caryophyllene, linalool.",
    terpeneProfile: { limonene: 0.36, caryophyllene: 0.28, linalool: 0.18, myrcene: 0.12, humulene: 0.06 },
    rating: 4.7, thc: 21, imageGradient: "linear-gradient(135deg, #facc15, #c084fc)" },
  { id: "p10", name: "Wedding Cake", brand: "Hybrid", type: "Flower",
    description: "Rich, tangy with earthy pepper. Leafly: limonene dominant with caryophyllene and linalool.",
    terpeneProfile: { limonene: 0.38, caryophyllene: 0.26, linalool: 0.16, myrcene: 0.12, humulene: 0.08 },
    rating: 4.6, thc: 25, imageGradient: "linear-gradient(135deg, #facc15, #f0abfc)" },
  { id: "p11", name: "White Widow", brand: "Hybrid", type: "Flower",
    description: "Dutch coffeeshop icon since the 1990s. Earthy, woody, and pungent. Leafly: myrcene, caryophyllene, pinene.",
    terpeneProfile: { myrcene: 0.35, caryophyllene: 0.30, pinene: 0.18, limonene: 0.12, humulene: 0.05 },
    rating: 4.3, thc: 18, imageGradient: "linear-gradient(135deg, #22d3ee, #f97316)" },
  { id: "p12", name: "Runtz", brand: "Hybrid", type: "Flower",
    description: "Zkittlez x Gelato. Creamy fruit candy aroma. Leafly: caryophyllene, limonene, myrcene.",
    terpeneProfile: { caryophyllene: 0.36, limonene: 0.28, myrcene: 0.18, linalool: 0.10, humulene: 0.08 },
    rating: 4.6, thc: 24, imageGradient: "linear-gradient(135deg, #f97316, #facc15)" },
  { id: "p13", name: "Ice Cream Cake", brand: "Indica", type: "Flower",
    description: "Wedding Cake x Gelato #33. Vanilla, sweet dough, cream. Leafly: limonene, caryophyllene, linalool.",
    terpeneProfile: { limonene: 0.33, caryophyllene: 0.27, linalool: 0.19, myrcene: 0.13, humulene: 0.08 },
    rating: 4.5, thc: 23, imageGradient: "linear-gradient(135deg, #facc15, #f0abfc)" },
  { id: "p14", name: "Cereal Milk", brand: "Hybrid", type: "Flower",
    description: "Y Life x Snowman. Sweet, creamy, fruity. Leafly: caryophyllene, limonene, humulene.",
    terpeneProfile: { caryophyllene: 0.35, limonene: 0.27, humulene: 0.17, myrcene: 0.12, pinene: 0.09 },
    rating: 4.5, thc: 23, imageGradient: "linear-gradient(135deg, #f97316, #facc15)" },
  { id: "p15", name: "Lemon Cherry Gelato", brand: "Hybrid", type: "Flower",
    description: "Sunset Sherbet x Girl Scout Cookies. Sour lemon and sweet cherry. Leafly: caryophyllene, linalool, limonene.",
    terpeneProfile: { caryophyllene: 0.35, linalool: 0.25, limonene: 0.20, myrcene: 0.12, pinene: 0.08 },
    rating: 4.5, thc: 20, imageGradient: "linear-gradient(135deg, #f97316, #c084fc)" },

  // ── TRENDING / NEW SCHOOL ───────────────────────────────────────────
  { id: "p16", name: "GSC (Girl Scout Cookies)", brand: "Hybrid", type: "Flower",
    description: "Iconic dessert strain with mint, cherry, and lemon. Leafly: caryophyllene, myrcene, limonene.",
    terpeneProfile: { caryophyllene: 0.36, myrcene: 0.24, limonene: 0.19, humulene: 0.12, linalool: 0.09 },
    rating: 4.4, thc: 25, imageGradient: "linear-gradient(135deg, #f97316, #a3e635)" },
  { id: "p17", name: "Sour Diesel", brand: "Sativa", type: "Flower",
    description: "Pungent diesel fuel aroma with citrus undertones. Leafly: caryophyllene, myrcene, limonene.",
    terpeneProfile: { caryophyllene: 0.34, myrcene: 0.26, limonene: 0.20, pinene: 0.12, humulene: 0.08 },
    rating: 4.5, thc: 26, imageGradient: "linear-gradient(135deg, #f97316, #facc15)" },
  { id: "p18", name: "Gelato", brand: "Hybrid", type: "Flower",
    description: "Sweet sherbet and lavender cookie aroma. Leafly: caryophyllene, limonene, humulene.",
    terpeneProfile: { caryophyllene: 0.32, limonene: 0.27, humulene: 0.17, myrcene: 0.14, linalool: 0.10 },
    rating: 4.5, thc: 25, imageGradient: "linear-gradient(135deg, #f97316, #c084fc)" },
  { id: "p19", name: "GMO Cookies", brand: "Indica", type: "Flower",
    description: "GSC x Chemdawg. Pungent garlic, mushroom, onion. Leafly: caryophyllene, limonene, myrcene.",
    terpeneProfile: { caryophyllene: 0.38, limonene: 0.25, myrcene: 0.18, humulene: 0.12, linalool: 0.07 },
    rating: 4.5, thc: 27, imageGradient: "linear-gradient(135deg, #f97316, #a3e635)" },
  { id: "p20", name: "Biscotti", brand: "Indica", type: "Flower",
    description: "Gelato #25 x South Florida OG. Sweet cookies with diesel. Leafly: caryophyllene, limonene, myrcene.",
    terpeneProfile: { caryophyllene: 0.35, limonene: 0.26, myrcene: 0.17, linalool: 0.13, humulene: 0.09 },
    rating: 4.4, thc: 25, imageGradient: "linear-gradient(135deg, #f97316, #facc15)" },
  { id: "p21", name: "Gary Payton", brand: "Hybrid", type: "Flower",
    description: "The Y x Snowman by Cookies. Gassy, earthy, spicy. Leafly: caryophyllene, limonene, linalool.",
    terpeneProfile: { caryophyllene: 0.34, limonene: 0.27, linalool: 0.17, myrcene: 0.13, humulene: 0.09 },
    rating: 4.5, thc: 25, imageGradient: "linear-gradient(135deg, #f97316, #c084fc)" },
  { id: "p22", name: "Apple Fritter", brand: "Hybrid", type: "Flower",
    description: "Sour Apple x Animal Cookies. Sweet pastry with cheesy diesel. Leafly: caryophyllene, limonene, humulene.",
    terpeneProfile: { caryophyllene: 0.33, limonene: 0.27, humulene: 0.17, myrcene: 0.14, linalool: 0.09 },
    rating: 4.5, thc: 28, imageGradient: "linear-gradient(135deg, #f97316, #4ade80)" },
  { id: "p23", name: "London Pound Cake", brand: "Indica", type: "Flower",
    description: "Sunset Sherbet phenotype. Sweet lemon cake with berry. Leafly: caryophyllene, limonene, linalool.",
    terpeneProfile: { caryophyllene: 0.33, limonene: 0.28, linalool: 0.17, myrcene: 0.13, humulene: 0.09 },
    rating: 4.4, thc: 29, imageGradient: "linear-gradient(135deg, #f97316, #facc15)" },
  { id: "p24", name: "Sunset Sherbert", brand: "Indica", type: "Flower",
    description: "GSC phenotype. Sweet, fruity, dessert-like. Leafly: caryophyllene, limonene, humulene.",
    terpeneProfile: { caryophyllene: 0.33, limonene: 0.28, humulene: 0.16, myrcene: 0.14, linalool: 0.09 },
    rating: 4.4, thc: 21, imageGradient: "linear-gradient(135deg, #f97316, #fb923c)" },

  // ── TERPINOLENE-DOMINANT SATIVAS ────────────────────────────────────
  { id: "p25", name: "Jack Herer", brand: "Sativa", type: "Flower",
    description: "Legendary sativa named after the cannabis activist. Leafly: terpinolene dominant. Abstrax: ~34% terpinolene.",
    terpeneProfile: { terpinolene: 0.38, pinene: 0.22, caryophyllene: 0.17, myrcene: 0.13, limonene: 0.10 },
    rating: 4.4, thc: 18, imageGradient: "linear-gradient(135deg, #2dd4bf, #4ade80)" },
  { id: "p26", name: "Durban Poison", brand: "Sativa", type: "Flower",
    description: "Pure South African landrace sativa. Leafly: terpinolene dominant, followed by myrcene and ocimene.",
    terpeneProfile: { terpinolene: 0.40, myrcene: 0.23, ocimene: 0.17, limonene: 0.12, pinene: 0.08 },
    rating: 4.3, thc: 20, imageGradient: "linear-gradient(135deg, #2dd4bf, #fb923c)" },

  // ── DIVERSE PROFILES ───────────────────────────────────────────────
  { id: "p27", name: "Strawberry Cough", brand: "Sativa", type: "Flower",
    description: "Sweet strawberry fields aroma. Energizing and euphoric. Leafly: myrcene, pinene, caryophyllene.",
    terpeneProfile: { myrcene: 0.32, pinene: 0.28, caryophyllene: 0.18, limonene: 0.13, linalool: 0.09 },
    rating: 4.4, thc: 22, imageGradient: "linear-gradient(135deg, #fb7185, #4ade80)" },
  { id: "p28", name: "Trainwreck", brand: "Sativa", type: "Flower",
    description: "Hard-hitting sativa-leaning hybrid. Spicy pine and lemon. Leafly: terpinolene, myrcene, pinene.",
    terpeneProfile: { terpinolene: 0.38, myrcene: 0.25, pinene: 0.18, caryophyllene: 0.12, limonene: 0.07 },
    rating: 4.4, thc: 18, imageGradient: "linear-gradient(135deg, #2dd4bf, #4ade80)" },
  { id: "p29", name: "Pineapple Express", brand: "Hybrid", type: "Flower",
    description: "Trainwreck x Hawaiian. Tropical, cedar, and pineapple. Leafly: myrcene, caryophyllene, pinene.",
    terpeneProfile: { myrcene: 0.35, caryophyllene: 0.28, pinene: 0.18, limonene: 0.12, ocimene: 0.07 },
    rating: 4.4, thc: 19, imageGradient: "linear-gradient(135deg, #22d3ee, #fb923c)" },
  { id: "p30", name: "Mimosa", brand: "Hybrid", type: "Flower",
    description: "Purple Punch x Clementine. Tropical citrus and berry. Leafly: myrcene, pinene, caryophyllene.",
    terpeneProfile: { myrcene: 0.35, pinene: 0.25, caryophyllene: 0.20, limonene: 0.12, linalool: 0.08 },
    rating: 4.4, thc: 19, imageGradient: "linear-gradient(135deg, #22d3ee, #4ade80)" },
  { id: "p31", name: "MAC (Miracle Alien Cookies)", brand: "Hybrid", type: "Flower",
    description: "Alien Cookies x Starfighter x Columbian. Citrus, floral gas. Leafly: limonene, pinene, caryophyllene.",
    terpeneProfile: { limonene: 0.36, pinene: 0.24, caryophyllene: 0.20, myrcene: 0.12, humulene: 0.08 },
    rating: 4.5, thc: 22, imageGradient: "linear-gradient(135deg, #facc15, #4ade80)" },
  { id: "p32", name: "Tropicana Cookies", brand: "Hybrid", type: "Flower",
    description: "GSC x Tangie. Bright orange citrus with cookies. Leafly: caryophyllene, limonene, myrcene.",
    terpeneProfile: { caryophyllene: 0.31, limonene: 0.28, myrcene: 0.18, humulene: 0.13, ocimene: 0.10 },
    rating: 4.4, thc: 24, imageGradient: "linear-gradient(135deg, #fb923c, #facc15)" },
  { id: "p33", name: "Cherry Pie", brand: "Indica", type: "Flower",
    description: "Granddaddy Purple x Durban Poison. Sweet, tart cherry. Leafly: myrcene, caryophyllene, pinene.",
    terpeneProfile: { myrcene: 0.36, caryophyllene: 0.26, pinene: 0.17, limonene: 0.13, linalool: 0.08 },
    rating: 4.3, thc: 20, imageGradient: "linear-gradient(135deg, #fb7185, #4ade80)" },
  { id: "p34", name: "AK-47", brand: "Hybrid", type: "Flower",
    description: "Columbian x Mexican x Thai x Afghani. Earthy, floral, pungent. Leafly: myrcene, pinene, caryophyllene.",
    terpeneProfile: { myrcene: 0.40, pinene: 0.25, caryophyllene: 0.18, limonene: 0.10, humulene: 0.07 },
    rating: 4.4, thc: 20, imageGradient: "linear-gradient(135deg, #22d3ee, #4ade80)" },
  { id: "p35", name: "Amnesia Haze", brand: "Sativa", type: "Flower",
    description: "Multi-landrace cross. Earthy lemon haze. Leafly: myrcene, limonene, caryophyllene.",
    terpeneProfile: { myrcene: 0.35, limonene: 0.27, caryophyllene: 0.18, pinene: 0.12, humulene: 0.08 },
    rating: 4.4, thc: 22, imageGradient: "linear-gradient(135deg, #facc15, #22d3ee)" },
  { id: "p36", name: "Skywalker OG", brand: "Indica", type: "Flower",
    description: "OG Kush x Skywalker. Heavy, relaxing, potent. Leafly: myrcene, caryophyllene, limonene.",
    terpeneProfile: { myrcene: 0.40, caryophyllene: 0.24, limonene: 0.17, humulene: 0.11, linalool: 0.08 },
    rating: 4.5, thc: 26, imageGradient: "linear-gradient(135deg, #22d3ee, #c084fc)" },
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

  return scored.sort((a, b) => b.matchScore - a.matchScore).slice(0, 8);
}
