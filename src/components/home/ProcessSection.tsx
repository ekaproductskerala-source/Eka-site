import {
  CircleDot,
  CookingPot,
  Droplets,
  Flame,
  PackageCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Fresh coconuts",
    text: "It begins with the fruit at the heart of Kerala’s kitchens.",
    icon: CircleDot,
  },
  {
    number: "02",
    title: "Coconut milk",
    text: "The coconut is grated and worked to draw out its milk.",
    icon: Droplets,
  },
  {
    number: "03",
    title: "Gentle heating",
    text: "The milk is slowly heated in traditional vessels.",
    icon: Flame,
  },
  {
    number: "04",
    title: "Natural separation",
    text: "With patience, the oil separates from the coconut milk.",
    icon: CookingPot,
  },
  {
    number: "05",
    title: "EKA, ready",
    text: "The finished oil is prepared for careful packaging.",
    icon: PackageCheck,
  },
];

export function ProcessSection() {
  return (
    <section
      className="process-section section-gutter"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="process-section__heading">
        <SectionHeading
          eyebrow="A SLOWER KIND OF MAKING"
          title="From coconut to golden oil."
          description="A little patience. A familiar method. The steps that carry the tradition forward."
        />
        <p className="process-section__caption">
          THE NAADAN URUKKU WAY <span>—</span> 05 MOMENTS
        </p>
      </div>
      <ol className="process-timeline">
        {steps.map(({ number, title, text, icon: Icon }) => (
          <li className="process-step" key={number}>
            <div className="process-step__visual">
              <Icon size={31} strokeWidth={1.25} aria-hidden="true" />
              <span className="process-step__photo-label">
                EKA PHOTO TO COME
              </span>
            </div>
            <span className="process-step__number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
      <p className="process-section__note">
        Process visuals are placeholders. Confirm each production step with EKA
        before publishing.
      </p>
    </section>
  );
}
