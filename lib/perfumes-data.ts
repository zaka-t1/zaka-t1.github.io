export interface Store {
  name: string
  price: number
  url: string
  logo: string
}

export interface Perfume {
  id: string
  name: string
  brand: string
  gender: "Hombre" | "Mujer"
  description: string
  image: string
  stores: Store[]
}

export const perfumes: Perfume[] = [
  {
    id: "1",
    name: "Sauvage Eau de Parfum",
    brand: "Dior",
    gender: "Hombre",
    description: "Fresco, especiado y amaderado. Un aroma icónico y versátil.",
    image: "/dior-sauvage-perfume-bottle-elegant.jpg",
    stores: [
      { name: "Falabella", price: 89990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 92990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 85990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
  {
    id: "2",
    name: "Acqua di Giò Profumo",
    brand: "Giorgio Armani",
    gender: "Hombre",
    description: "Clásico moderno con notas acuáticas y amaderadas intensas.",
    image: "/acqua-di-gio-profumo-bottle.jpg",
    stores: [
      { name: "Falabella", price: 94990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 89990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 91990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
  {
    id: "3",
    name: "Bleu de Chanel Eau de Parfum",
    brand: "Chanel",
    gender: "Hombre",
    description: "Elegancia y sofisticación en cada nota. Perfecto para cualquier ocasión.",
    image: "/bleu-de-chanel-perfume-bottle.jpg",
    stores: [
      { name: "Falabella", price: 99990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 97990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 95990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
  {
    id: "4",
    name: "Le Male Elixir",
    brand: "Jean Paul Gaultier",
    gender: "Hombre",
    description: "Dulce y potente. Una versión moderna del icónico Le Male.",
    image: "/jean-paul-gaultier-le-male-elixir-bottle.jpg",
    stores: [
      { name: "Falabella", price: 87990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 84990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 89990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
  {
    id: "5",
    name: "One Million",
    brand: "Paco Rabanne",
    gender: "Hombre",
    description: "Fragancia comercial con gran atractivo. Dulce y especiado.",
    image: "/paco-rabanne-one-million-gold-bottle.jpg",
    stores: [
      { name: "Falabella", price: 79990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 77990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 75990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
  {
    id: "6",
    name: "Spicebomb Extreme",
    brand: "Viktor & Rolf",
    gender: "Hombre",
    description: "Cálido y especiado. Ideal para clima frío y ocasiones nocturnas.",
    image: "/viktor-rolf-spicebomb-extreme-grenade-bottle.jpg",
    stores: [
      { name: "Falabella", price: 92990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 94990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 88990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
  {
    id: "7",
    name: "Y Eau de Parfum",
    brand: "Yves Saint Laurent",
    gender: "Hombre",
    description: "Moderno, fresco y aromático. Gran popularidad y reconocimiento.",
    image: "/ysl-y-eau-de-parfum-bottle.jpg",
    stores: [
      { name: "Falabella", price: 86990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 88990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 83990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
  {
    id: "8",
    name: "Boss Bottled",
    brand: "Hugo Boss",
    gender: "Hombre",
    description: "Clásico de oficina. Amaderado, especiado y pulcro.",
    image: "/hugo-boss-bottled-perfume-bottle.jpg",
    stores: [
      { name: "Falabella", price: 69990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 72990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 67990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
  {
    id: "9",
    name: "Good Girl",
    brand: "Carolina Herrera",
    gender: "Mujer",
    description: "Dulce, floral y oriental. Icónico diseño de tacón.",
    image: "/carolina-herrera-good-girl-high-heel-bottle.jpg",
    stores: [
      { name: "Falabella", price: 96990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 99990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 93990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
  {
    id: "10",
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    gender: "Mujer",
    description: "Adictivo con notas de café y vainilla. Sensual y nocturno.",
    image: "/ysl-black-opium-perfume-bottle.jpg",
    stores: [
      { name: "Falabella", price: 91990, url: "https://www.falabella.com", logo: "/falabella-logo.jpg" },
      { name: "Ripley", price: 89990, url: "https://www.ripley.cl", logo: "/ripley-logo.jpg" },
      { name: "Elite Perfumes", price: 87990, url: "https://www.eliteperfumes.cl", logo: "/elite-perfumes-logo.jpg" },
    ],
  },
]

export function getBestPrice(stores: Store[]): Store {
  return stores.reduce((best, current) => (current.price < best.price ? current : best))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(price)
}
