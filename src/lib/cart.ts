import { products } from "@/data/products";
import type { CartItem, Product, ProductVariant } from "@/types/product";

export function getProduct(productId: string): Product | undefined {
  return products.find((product) => product.id === productId);
}

export function getVariant(
  product: Product,
  variantId: string,
): ProductVariant | undefined {
  return product.variants.find((variant) => variant.id === variantId);
}

export function getCartCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}

export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce((subtotal, item) => {
    const product = getProduct(item.productId);
    const variant = product && getVariant(product, item.variantId);
    return subtotal + (variant ? variant.priceInr * item.quantity : 0);
  }, 0);
}

export function getCartLine(
  items: CartItem[],
  productId: string,
  variantId: string,
) {
  return items.find(
    (item) => item.productId === productId && item.variantId === variantId,
  );
}
