import { CookingPot, Flame, House, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    number: "01",
    title: "Naadan Urukku",
    text: "Inspired by Kerala’s traditional method of gently heating fresh coconut milk until oil separates.",
    icon: CookingPot,
  },
  {
    number: "02",
    title: "A familiar aroma",
    text: "The characteristic, gently roasted coconut aroma is part of the tradition we honour.",
    icon: Flame,
  },
  {
    number: "03",
    title: "Simple at heart",
    text: "We believe in knowing what goes into the things we bring home. Ingredient details belong in the open.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Made of memory",
    text: "Rooted in the way coconut oil has long been prepared and welcomed into Kerala homes.",
    icon: House,
  },
];

export function WhyEkaSection() {
  return (
    <section
      className="why-section section-gutter"
      id="why-eka"
      aria-labelledby="why-title"
    >
      <div className="why-section__top">
        <SectionHeading
          eyebrow="THE EKA WAY"
          title="The warmth of tradition in every drop."
          description="Not a claim of better. A way of making that feels like home."
        />
        <span className="why-section__seal" aria-hidden="true">
          <span>KERALA</span>
          <strong>E</strong>
          <span>TRADITION</span>
        </span>
      </div>
      <div className="reason-grid">
        {reasons.map(({ number, title, text, icon: Icon }) => (
          <article className="reason" key={number}>
            <div className="reason__top">
              <span>{number}</span>
              <Icon size={27} strokeWidth={1.35} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <p className="why-section__note">
        Preparation and ingredient details should be confirmed against
        EKA&apos;s actual production before publication.
      </p>
    </section>
  );
}
