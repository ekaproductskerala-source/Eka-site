import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "eka-virgin-coconut-oil",
    name: "EKA Virgin Coconut Oil",
    description:
      "Traditional hot-processed coconut oil, inspired by Naadan Urukku Velichennai.",
    image: "/images/eka-oil-placeholder.svg",
    imageAlt:
      "Illustrated placeholder for an EKA coconut oil product photograph",
    variants: [
      {
        id: "eka-vco-100",
        volumeMl: 100,
        priceInr: 120,
        isIllustrativePrice: true,
      },
      {
        id: "eka-vco-250",
        volumeMl: 250,
        priceInr: 250,
        isIllustrativePrice: true,
      },
      {
        id: "eka-vco-500",
        volumeMl: 500,
        priceInr: 450,
        isIllustrativePrice: true,
      },
      {
        id: "eka-vco-1000",
        volumeMl: 1000,
        priceInr: 820,
        isIllustrativePrice: true,
      },
    ],
  },
];
