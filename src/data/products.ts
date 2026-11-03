import type { Product } from "@/types/product";
import proudctImage from "../../public/product/product-one.jpg.jpeg";
export const products: Product[] = [
  {
    id: "eka-virgin-coconut-oil",
    name: "EKA Virgin Coconut Oil",
    description:
      "Traditional hot-processed coconut oil, inspired by Naadan Urukku Velichennai.",
    image: proudctImage,
    imageAlt:
      "Illustrated placeholder for an EKA coconut oil product photograph",
    variants: [
      {
        id: "eka-vco-100",
        volumeMl: 200,
        priceInr: 300,
        isIllustrativePrice: true,
      },
      {
        id: "eka-vco-250",
        volumeMl: 100,
        priceInr: 150,
        isIllustrativePrice: true,
      },
    ],
  },
];
