"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { useCart } from "@/components/cart/CartContext";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        onClick={closeMenu}
        aria-label="EKA home"
      >
        <span className="wordmark__seal" aria-hidden="true">
          E
        </span>
        <span className="wordmark__copy">
          <strong>EKA</strong>
          <small>The taste of real Kerala</small>
        </span>
      </a>
      <button
        className="icon-button site-header__menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav
        id="primary-navigation"
        className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
        aria-label="Main navigation"
      >
        {siteConfig.navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="site-header__actions">
        <button
          className="cart-trigger"
          type="button"
          onClick={openCart}
          aria-label={`Open cart, ${count} items`}
        >
          <ShoppingBag size={18} strokeWidth={1.7} />
          <span>Bag</span>
          <span className="cart-trigger__count" aria-live="polite">
            {count}
          </span>
        </button>
        <a className="button button--dark site-header__shop" href="#oil">
          Shop the oil <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
