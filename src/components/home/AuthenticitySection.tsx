import { Droplets, Flower2, Sun, Waves } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const characteristics = [
  {
    title: "A coconut aroma",
    text: "The scent can reflect the coconut and the way it is prepared.",
    icon: Flower2,
  },
  {
    title: "Colour with character",
    text: "Natural colour may vary with the coconut and preparation.",
    icon: Sun,
  },
  {
    title: "Warm or cool",
    text: "Coconut oil can solidify in cooler temperatures and become liquid when warm.",
    icon: Waves,
  },
  {
    title: "Made with tradition",
    text: "EKA’s story is inspired by the Naadan Urukku method.",
    icon: Droplets,
  },
];

export function AuthenticitySection() {
  return (
    <section
      className="nature-section section-gutter"
      id="nature"
      aria-labelledby="nature-title"
    >
      <div className="nature-section__heading">
        <SectionHeading
          eyebrow="A NOTE FROM NATURE"
          title="Nature has its own way of changing."
          description="Traditional coconut oil can look and feel a little different from one temperature, coconut, or preparation to the next."
        />
        <span className="nature-section__mark" aria-hidden="true">
          E<span>✳</span>
        </span>
      </div>
      <div className="nature-grid">
        {characteristics.map(({ title, text, icon: Icon }, index) => (
          <article className="nature-point" key={title}>
            <span className="nature-point__number">0{index + 1}</span>
            <Icon size={22} strokeWidth={1.35} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <p className="nature-section__caution">
        Colour, texture, aroma, and state are natural variations, not
        stand-alone proof of purity or quality. Always refer to the product
        label for storage and use guidance.
      </p>
    </section>
  );
}
