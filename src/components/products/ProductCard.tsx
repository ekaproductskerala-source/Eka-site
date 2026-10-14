"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { formatInr } from "@/config/site";
import { products } from "@/data/products";
import { useCart } from "@/components/cart/CartContext";
import { ArtPlaceholder } from "@/components/home/ArtPlaceholder";
import { QuantitySelector } from "@/components/products/QuantitySelector";

const product = products[0];

export function ProductCard() {
  const [variantId, setVariantId] = useState(product.variants[2].id);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();
  const variant =
    product.variants.find((item) => item.id === variantId) ??
    product.variants[0];

  function addToBag() {
    addItem(product.id, variant.id, quantity);
    openCart();
  }

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <ArtPlaceholder
          src={product.image}
          alt={product.imageAlt}
          label="Product image placeholder"
          className="product-card__image"
        />
        <span className="product-card__edition">Naadan urukku</span>
      </div>
      <div className="product-card__details">
        <div className="product-card__title-row">
          <div>
            <p className="eyebrow">THE ORIGINAL</p>
            <h3>{product.name}</h3>
          </div>
          <span className="product-card__index">01 / 01</span>
        </div>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__selection">
          <label htmlFor="product-volume">Choose a size</label>
          <select
            id="product-volume"
            value={variantId}
            onChange={(event) => setVariantId(event.target.value)}
          >
            {product.variants.map((option) => (
              <option value={option.id} key={option.id}>
                {option.volumeMl.toLocaleString("en-IN")} ml
              </option>
            ))}
          </select>
          <span className="product-card__price">
            {formatInr(variant.priceInr)} <small>illustrative</small>
          </span>
        </div>
        <div className="product-card__purchase">
          <QuantitySelector
            quantity={quantity}
            onChange={setQuantity}
            label="product quantity"
          />
          <button
            className="button button--dark product-card__add"
            type="button"
            onClick={addToBag}
          >
            Add to bag <ArrowUpRight size={17} />
          </button>
        </div>
        <p className="product-card__notice">
          Sample pricing for demonstration only. Final price to be confirmed.
        </p>
      </div>
    </article>
  );
}
