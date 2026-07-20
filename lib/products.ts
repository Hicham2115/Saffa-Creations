import type { StaticImageData } from "next/image";
import womenJellabas from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_34_10 PM.png";
import luxuryCollection from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_35_24 PM.png";
import weddingCollection from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_37_02 PM.png";
import newArrivals from "@/app/assets/collections/ChatGPT Image Jul 20, 2026, 01_38_12 PM.png";

export type ProductCategory =
  | "Women Jellabas"
  | "Luxury Collection"
  | "Wedding Collection"
  | "New Arrivals";

export interface Product {
  slug: string;
  name: string;
  price: string;
  image: StaticImageData;
  category: ProductCategory;
  badge: "NEW" | "LIMITED" | null;
  colors: string[];
}

export const productCategories: ProductCategory[] = [
  "Women Jellabas",
  "Luxury Collection",
  "Wedding Collection",
  "New Arrivals",
];

export const products: Product[] = [
  {
    slug: "lina-jellaba",
    name: "Lina Jellaba",
    price: "2,400.00 MAD",
    image: womenJellabas,
    category: "Women Jellabas",
    badge: "NEW",
    colors: ["#f3ede1", "#b08f5f", "#6b7350"],
  },
  {
    slug: "nour-jellaba",
    name: "Nour Jellaba",
    price: "2,300.00 MAD",
    image: luxuryCollection,
    category: "Luxury Collection",
    badge: null,
    colors: ["#6b7350", "#c8a978", "#d9d5cc"],
  },
  {
    slug: "yasmin-jellaba",
    name: "Yasmin Jellaba",
    price: "2,600.00 MAD",
    image: weddingCollection,
    category: "Wedding Collection",
    badge: "NEW",
    colors: ["#f3ede1", "#c8a978", "#d9d5cc"],
  },
  {
    slug: "maya-jellaba",
    name: "Maya Jellaba",
    price: "2,200.00 MAD",
    image: newArrivals,
    category: "New Arrivals",
    badge: null,
    colors: ["#b08f5f", "#f3ede1", "#3a3a3a"],
  },
  {
    slug: "amira-jellaba",
    name: "Amira Jellaba",
    price: "2,750.00 MAD",
    image: womenJellabas,
    category: "Women Jellabas",
    badge: null,
    colors: ["#3a3a3a", "#c8a978", "#f3ede1"],
  },
  {
    slug: "salma-jellaba",
    name: "Salma Jellaba",
    price: "3,100.00 MAD",
    image: luxuryCollection,
    category: "Luxury Collection",
    badge: "LIMITED",
    colors: ["#6b7350", "#f3ede1", "#b08f5f"],
  },
  {
    slug: "khadija-jellaba",
    name: "Khadija Jellaba",
    price: "3,400.00 MAD",
    image: weddingCollection,
    category: "Wedding Collection",
    badge: null,
    colors: ["#f3ede1", "#d9d5cc", "#c8a978"],
  },
  {
    slug: "imane-jellaba",
    name: "Imane Jellaba",
    price: "2,150.00 MAD",
    image: newArrivals,
    category: "New Arrivals",
    badge: "NEW",
    colors: ["#c8a978", "#3a3a3a", "#f3ede1"],
  },
  {
    slug: "hiba-jellaba",
    name: "Hiba Jellaba",
    price: "2,500.00 MAD",
    image: womenJellabas,
    category: "Women Jellabas",
    badge: null,
    colors: ["#d9d5cc", "#b08f5f", "#6b7350"],
  },
  {
    slug: "rania-jellaba",
    name: "Rania Jellaba",
    price: "3,600.00 MAD",
    image: luxuryCollection,
    category: "Luxury Collection",
    badge: null,
    colors: ["#3a3a3a", "#f3ede1", "#c8a978"],
  },
  {
    slug: "zineb-jellaba",
    name: "Zineb Jellaba",
    price: "3,200.00 MAD",
    image: weddingCollection,
    category: "Wedding Collection",
    badge: "LIMITED",
    colors: ["#f3ede1", "#b08f5f", "#d9d5cc"],
  },
  {
    slug: "layla-jellaba",
    name: "Layla Jellaba",
    price: "2,050.00 MAD",
    image: newArrivals,
    category: "New Arrivals",
    badge: null,
    colors: ["#6b7350", "#d9d5cc", "#c8a978"],
  },
];
