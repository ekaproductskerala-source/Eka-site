import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductShowcase() {
  return (
    <section
      className="product-section section-gutter"
      id="oil"
      aria-labelledby="product-section-title"
    >
      <div className="product-section__heading">
        <SectionHeading
          eyebrow="THE EKA PANTRY"
          title="Discover the taste of real Kerala."
          description="A familiar aroma. A traditional character. A story carried in every pour."
        />
        <p className="product-section__aside">
          One oil, made the old way.
          <br />
          Just as it should be.
        </p>
      </div>
      <ProductCard />
      <p className="product-section__disclaimer">
        Product imagery and all listed prices are illustrative placeholders, not
        confirmed EKA product information.
      </p>
    </section>
  );
}
