import { ArrowUpRight } from "lucide-react";
import { ArtPlaceholder } from "@/components/home/ArtPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandStory() {
  return (
    <section
      className="story-section section-gutter"
      id="tradition"
      aria-labelledby="story-title"
    >
      <div className="story-section__image-column">
        <ArtPlaceholder
          src="/images/eka-story-placeholder.svg"
          alt="Illustrated placeholder of a Kerala home, coconut palm and courtyard"
          label="Illustration placeholder — add an EKA heritage photograph"
          className="story-section__art"
        />
        <p className="story-section__image-note">
          <span>01</span> A tradition shared from one generation to the next
        </p>
      </div>
      <div className="story-section__copy">
        <SectionHeading
          eyebrow="THE TRADITION BEHIND EKA"
          title="Some traditions are too precious to lose."
        />
        <p className="story-section__lead">
          In Kerala, coconut oil has always been more than an ingredient. It is
          part of our food, our homes, and our everyday traditions.
        </p>
        <p>
          Long before modern machines, our grandmothers prepared coconut oil
          with patience and care. At EKA, we draw inspiration from this heritage
          through the traditional hot-processing method known as{" "}
          <i>Naadan Urukku Velichennai.</i>
        </p>
        <p>
          Fresh coconut milk is gently heated in traditional vessels until the
          oil separates. No complicated story. Just a time-honoured tradition
          brought into the present.
        </p>
        <a className="text-link" href="#process">
          Follow the making <ArrowUpRight size={15} />
        </a>
        <span className="story-section__ornament" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}
