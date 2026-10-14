import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ArtPlaceholder } from "@/components/home/ArtPlaceholder";

export function HeroSection() {
  return (
    <section className="hero page-gutter" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow">
          <span aria-hidden="true" />
          ROOTED IN KERALA&apos;S HERITAGE
        </p>
        <h1 id="hero-title">
          Not cold pressed.
          <br />
          <em>Hot &amp; honest.</em>
        </h1>
        <p className="hero__tagline">
          EKA <span>—</span> The Taste of Real Kerala
        </p>
        <p className="hero__description">
          Inspired by the Naadan Urukku Velichennai of Kerala homes, EKA brings
          a time-honoured way of preparing coconut oil into the present.
        </p>
        <div className="hero__actions">
          <a className="button button--dark" href="#oil">
            Explore our oil <ArrowUpRight size={17} />
          </a>
          <a className="button button--text" href="#tradition">
            Discover our tradition <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero__notes" aria-label="EKA values">
          <span>Kerala hot-process tradition</span>
          <span>Inspired by homegrown wisdom</span>
          <span>A story rooted in coconut</span>
        </div>
      </div>
      <div className="hero__visual">
        <ArtPlaceholder
          src="/images/eka-hero-placeholder.svg"
          alt="Illustrated placeholder showing a traditional brass uruli with coconut oil and coconuts"
          label="Illustration placeholder — replace with EKA process photography"
          className="hero__art"
          priority
        />
        <div
          className="hero__stamp"
          aria-label="Made with patience, from Kerala tradition"
        >
          <span>MADE WITH</span>
          <strong>PATIENCE</strong>
          <span>FROM KERALA, WITH CARE</span>
        </div>
        <div className="hero__image-number">
          01 <span>/</span> 05
        </div>
      </div>
      <a
        href="#tradition"
        className="hero__scroll"
        aria-label="Scroll to the EKA story"
      >
        <ArrowDown size={16} /> <span>SCROLL TO OUR STORY</span>
      </a>
    </section>
  );
}
