"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  label: string;
}

export function QuantitySelector({
  quantity,
  onChange,
  label,
}: QuantitySelectorProps) {
  return (
    <div className="quantity-control" aria-label={label}>
      <button
        type="button"
        className="quantity-control__button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        aria-label={`Decrease ${label}`}
        disabled={quantity <= 1}
      >
        <Minus size={14} />
      </button>
      <span className="quantity-control__value" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        className="quantity-control__button"
        onClick={() => onChange(quantity + 1)}
        aria-label={`Increase ${label}`}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
