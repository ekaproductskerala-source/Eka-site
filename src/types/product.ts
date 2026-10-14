export interface ProductVariant {
  id: string;
  volumeMl: number;
  priceInr: number;
  isIllustrativePrice: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  variants: ProductVariant[];
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
}
