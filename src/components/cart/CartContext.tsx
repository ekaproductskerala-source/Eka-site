"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCartCount, getCartLine, getCartSubtotal } from "@/lib/cart";
import type { CartItem } from "@/types/product";

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (productId: string, variantId: string, quantity: number) => void;
  updateQuantity: (
    productId: string,
    variantId: string,
    quantity: number,
  ) => void;
  removeItem: (productId: string, variantId: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "eka-cart-v1";

export function CartProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedItems = window.localStorage.getItem(STORAGE_KEY);
      if (savedItems) {
        const parsed: unknown = JSON.parse(savedItems);
        if (Array.isArray(parsed)) setItems(parsed as CartItem[]);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded)
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hasLoaded, items]);

  function addItem(productId: string, variantId: string, quantity: number) {
    setItems((current) => {
      const existing = getCartLine(current, productId, variantId);
      if (!existing) return [...current, { productId, variantId, quantity }];
      return current.map((item) =>
        item === existing
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    });
  }

  function updateQuantity(
    productId: string,
    variantId: string,
    quantity: number,
  ) {
    if (quantity < 1) return;
    setItems((current) =>
      current.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item,
      ),
    );
  }

  function removeItem(productId: string, variantId: string) {
    setItems((current) =>
      current.filter(
        (item) => item.productId !== productId || item.variantId !== variantId,
      ),
    );
  }

  const value: CartContextValue = {
    items,
    count: getCartCount(items),
    subtotal: getCartSubtotal(items),
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    updateQuantity,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
