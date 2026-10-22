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
    name: "Granddaddy Purple",
    brand: "Indica",
    type: "Flower",
    description: "Classic indica with heavy grape and berry notes. Deep body relaxation with myrcene and linalool dominance.",
    terpeneProfile: { myrcene: 0.85, linalool: 0.65, caryophyllene: 0.35, pinene: 0.15 },
    rating: 4.8,
    thc: 23,
    imageGradient: "linear-gradient(135deg, #22d3ee, #c084fc)",
  },
  {
    id: "p2",
    name: "Super Lemon Haze",
    brand: "Sativa",
    type: "Flower",
    description: "Award-winning sativa with sharp lemon zest and sweet candy undertones. Energetic and uplifting.",
    terpeneProfile: { limonene: 0.90, terpinolene: 0.50, pinene: 0.40, ocimene: 0.25 },
    rating: 4.7,
    thc: 25,
    imageGradient: "linear-gradient(135deg, #facc15, #4ade80)",
  },
  {
    id: "p3",
    name: "Golden Goat",
    brand: "Hybrid",
    type: "Flower",
    description: "Tropical sativa-leaning hybrid with sweet spice. Known for its rare ocimene-forward profile.",
    terpeneProfile: { ocimene: 0.75, caryophyllene: 0.55, myrcene: 0.40, limonene: 0.30 },
    rating: 4.6,
    thc: 23,
    imageGradient: "linear-gradient(135deg, #fb923c, #f97316)",
  },
  {
    id: "p4",
    name: "Do-Si-Dos",
    brand: "Indica",
    type: "Flower",
    description: "Potent indica cross of Girl Scout Cookies and Face Off OG. Floral, earthy, and deeply calming.",
    terpeneProfile: { linalool: 0.80, myrcene: 0.60, caryophyllene: 0.45, bisabolol: 0.30 },
    rating: 4.9,
    thc: 28,
    imageGradient: "linear-gradient(135deg, #c084fc, #f0abfc)",
  },
  {
    id: "p5",
    name: "Jack Herer",
    brand: "Sativa",
    type: "Flower",
    description: "Legendary sativa named after the cannabis activist. Pine-forward with herbal clarity and creative energy.",
    terpeneProfile: { pinene: 0.85, terpinolene: 0.65, humulene: 0.35, limonene: 0.30 },
    rating: 4.7,
    thc: 24,
    imageGradient: "linear-gradient(135deg, #4ade80, #a3e635)",
  },
  {
    id: "p6",
    name: "GSC (Girl Scout Cookies)",
    brand: "Hybrid",
    type: "Flower",
    description: "Iconic hybrid with bold spice, sweet earth, and a euphoric high. Caryophyllene and humulene powerhouse.",
    terpeneProfile: { caryophyllene: 0.80, humulene: 0.55, linalool: 0.40, myrcene: 0.35 },
    rating: 4.8,
    thc: 27,
    imageGradient: "linear-gradient(135deg, #f97316, #a3e635)",
  },
  {
    id: "p7",
    name: "Tangie",
    brand: "Sativa",
    type: "Flower",
    description: "Remake of Tangerine Dream with explosive citrus aroma. Valencene-rich with bright, focused effects.",
    terpeneProfile: { valencene: 0.80, limonene: 0.70, terpinolene: 0.35, pinene: 0.25 },
    rating: 4.6,
    thc: 22,
    imageGradient: "linear-gradient(135deg, #fb7185, #facc15)",
  },
  {
    id: "p8",
    name: "OG Kush",
    brand: "Hybrid",
    type: "Flower",
    description: "The backbone of West Coast genetics. Complex earthy, pine, and fuel aroma with heavy body effects.",
    terpeneProfile: { myrcene: 0.90, caryophyllene: 0.70, limonene: 0.45, humulene: 0.30 },
    rating: 4.9,
    thc: 26,
    imageGradient: "linear-gradient(135deg, #22d3ee, #f97316)",
  },
  {
    id: "p9",
    name: "Durban Poison",
    brand: "Sativa",
    type: "Flower",
    description: "Pure South African landrace sativa. Sweet, spicy anise flavor with terpinolene driving creative energy.",
    terpeneProfile: { terpinolene: 0.85, myrcene: 0.45, ocimene: 0.40, limonene: 0.25 },
    rating: 4.5,
    thc: 21,
    imageGradient: "linear-gradient(135deg, #2dd4bf, #fb923c)",
  },
  {
    id: "p10",
    name: "Harle-Tsu",
    brand: "CBD",
    type: "Flower",
    description: "High-CBD strain crossing Harlequin and Sour Tsunami. Gentle chamomile and lavender for calm without intoxication.",
    terpeneProfile: { bisabolol: 0.80, linalool: 0.65, myrcene: 0.40, terpinolene: 0.25 },
    rating: 4.8,
    thc: 2,
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
