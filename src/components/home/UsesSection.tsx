import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const uses = [
  {
    number: "01",
    title: "In the kitchen",
    text: "A familiar companion for everyday Kerala cooking.",
    image: "/images/use-kitchen.png",
    imageAlt: "Coconut oil used in Kerala cooking",
    tone: "cooking",
  },
  {
    number: "02",
    title: "Hair care rituals",
    text: "Part of traditional hair-oiling routines across generations.",
    image: "/images/use-hair.png",
    imageAlt: "Coconut oil used in a hair care ritual",
    tone: "hair",
  },
  {
    number: "03",
    title: "A moment of care",
    text: "Used in traditional body massage and everyday self-care.",
    image: "/images/use-care.png",
    imageAlt: "Coconut oil used for personal care",
    tone: "care",
  },
  {
    number: "04",
    title: "For the evening lamp",
    text: "A place in traditional lamp-lighting and ceremonial moments.",
    image: "/images/use-lamp.png",
    imageAlt: "Coconut oil used in a traditional evening lamp",
    tone: "lamp",
  },
];

export function UsesSection() {
  return (
    <section
      className="uses-section section-gutter"
      id="uses"
      aria-labelledby="uses-title"
    >
      <div className="uses-section__heading">
        <SectionHeading
          eyebrow="A PLACE IN EVERYDAY LIFE"
          title="One tradition, many little rituals."
          description="From the kitchen to quiet moments at home, coconut oil has always found its place."
        />
        <p className="uses-section__disclaimer">
          Traditional uses vary from home to home. No medical or therapeutic
          benefit is implied.
        </p>
      </div>
      <div className="uses-grid">
        {uses.map(({ number, title, text, image, imageAlt, tone }) => (
          <article className={`use-tile use-tile--${tone}`} key={number}>
            <div className="use-tile__art">
              <Image
                className="use-tile__image"
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 25vw"
              />
            </div>
            <div className="use-tile__copy">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
