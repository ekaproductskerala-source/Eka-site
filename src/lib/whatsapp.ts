import { formatInr, siteConfig } from "@/config/site";
import { getProduct, getVariant } from "@/lib/cart";
import type { CartItem } from "@/types/product";

export function buildOrderMessage(items: CartItem[]): string {
  const lines = ["Hello EKA, I would like to enquire about an order:", ""];
  let confirmedSubtotal = 0;
  let hasConfirmedPrice = false;

  for (const item of items) {
    const product = getProduct(item.productId);
    const variant = product && getVariant(product, item.variantId);
    if (!product || !variant) continue;

    lines.push(`Product: ${product.name}`);
    lines.push(`Volume: ${variant.volumeMl} ml`);
    lines.push(`Quantity: ${item.quantity}`);
    if (!variant.isIllustrativePrice) {
      const lineTotal = variant.priceInr * item.quantity;
      lines.push(`Unit price: ${formatInr(variant.priceInr)}`);
      lines.push(`Subtotal: ${formatInr(lineTotal)}`);
      confirmedSubtotal += lineTotal;
      hasConfirmedPrice = true;
    }
    lines.push("");
  }

  if (hasConfirmedPrice)
    lines.push(`Order total: ${formatInr(confirmedSubtotal)}`, "");
  lines.push("Please confirm availability and delivery details.");
  return lines.join("\n");
}

export function buildWhatsAppUrl(
  items: CartItem[],
  phoneNumber = siteConfig.whatsappNumber,
): string | undefined {
  const digits = phoneNumber.replace(/\D/g, "");
  if (!digits || items.length === 0) return undefined;
  return `https://wa.me/${digits}?text=${encodeURIComponent(buildOrderMessage(items))}`;
}
