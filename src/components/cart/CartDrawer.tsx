"use client";

import { ArrowUpRight, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import { formatInr, siteConfig } from "@/config/site";
import { getProduct, getVariant } from "@/lib/cart";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useCart } from "@/components/cart/CartContext";
import { QuantitySelector } from "@/components/products/QuantitySelector";

export function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQuantity, removeItem } =
    useCart();
  const orderUrl = buildWhatsAppUrl(items);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeCart();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeCart, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="cart-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeCart();
      }}
    >
      <aside
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="cart-drawer__header">
          <div>
            <p className="eyebrow">A LITTLE EKA, YOUR WAY</p>
            <h2 id="cart-title">
              Your bag{" "}
              <span>
                ({items.reduce((sum, item) => sum + item.quantity, 0)})
              </span>
            </h2>
          </div>
          <button
            className="icon-button"
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X size={21} />
          </button>
        </div>
        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty__icon">
              <ShoppingBag size={25} strokeWidth={1.5} />
            </span>
            <h3>Your bag is waiting.</h3>
            <p>Choose a size of EKA to begin your order.</p>
            <button className="text-link" type="button" onClick={closeCart}>
              Discover the oil <ArrowUpRight size={15} />
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {items.map((item) => {
                const product = getProduct(item.productId);
                const variant = product && getVariant(product, item.variantId);
                if (!product || !variant) return null;
                return (
                  <div
                    className="cart-item"
                    key={`${item.productId}-${item.variantId}`}
                  >
                    <div className="cart-item__mark" aria-hidden="true">
                      E
                    </div>
                    <div className="cart-item__body">
                      <div className="cart-item__heading">
                        <h3>{product.name}</h3>
                        <button
                          className="icon-button icon-button--small"
                          type="button"
                          onClick={() =>
                            removeItem(item.productId, item.variantId)
                          }
                          aria-label={`Remove ${product.name}, ${variant.volumeMl} ml`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p>
                        {variant.volumeMl.toLocaleString("en-IN")} ml ·{" "}
                        {formatInr(variant.priceInr)} <span>illustrative</span>
                      </p>
                      <div className="cart-item__bottom">
                        <QuantitySelector
                          quantity={item.quantity}
                          onChange={(quantity) =>
                            updateQuantity(
                              item.productId,
                              item.variantId,
                              quantity,
                            )
                          }
                          label={`${variant.volumeMl} ml quantity`}
                        />
                        <strong>
                          {formatInr(variant.priceInr * item.quantity)}
                        </strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-drawer__summary">
              <div className="cart-drawer__subtotal">
                <span>Illustrative subtotal</span>
                <strong>{formatInr(subtotal)}</strong>
              </div>
              <p>
                Sample total only. Final pricing and delivery to be confirmed.
              </p>
              {orderUrl ? (
                <a
                  className="button button--dark cart-drawer__checkout"
                  href={orderUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire on WhatsApp <ArrowUpRight size={17} />
                </a>
              ) : (
                <div className="cart-drawer__unavailable" role="status">
                  WhatsApp ordering will be available when EKA&apos;s number is
                  added in site settings.
                </div>
              )}
              <p className="cart-drawer__fineprint">
                No payment is collected on this site.
              </p>
              {siteConfig.email && (
                <a
                  className="cart-drawer__email"
                  href={`mailto:${siteConfig.email}`}
                >
                  Prefer email? Contact EKA
                </a>
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
