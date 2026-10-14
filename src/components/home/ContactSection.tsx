import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const whatsappDigits = siteConfig.whatsappNumber.replace(/\D/g, "");

  return (
    <section
      className="contact-section section-gutter"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-section__intro">
        <SectionHeading
          eyebrow="LET’S KEEP IN TOUCH"
          title="A little more Kerala, in your home."
          description="Questions about EKA? We’ll be glad to hear from you."
        />
      </div>
      <div className="contact-section__details">
        {siteConfig.address && (
          <div className="contact-detail">
            <MapPin size={19} />
            <div>
              <span>FIND US</span>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        )}
        {siteConfig.businessHours && (
          <div className="contact-detail">
            <span className="contact-detail__clock" aria-hidden="true">
              ◷
            </span>
            <div>
              <span>WHEN WE&apos;RE HERE</span>
              <p>{siteConfig.businessHours}</p>
            </div>
          </div>
        )}
        {siteConfig.email && (
          <a className="contact-detail" href={`mailto:${siteConfig.email}`}>
            <Mail size={19} />
            <div>
              <span>WRITE TO US</span>
              <p>{siteConfig.email}</p>
            </div>
            <ArrowUpRight size={16} />
          </a>
        )}
        {whatsappDigits && (
          <a
            className="contact-detail"
            href={`https://wa.me/${whatsappDigits}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} />
            <div>
              <span>WHATSAPP</span>
              <p>Start a conversation</p>
            </div>
            <ArrowUpRight size={16} />
          </a>
        )}
        {!siteConfig.address &&
          !siteConfig.businessHours &&
          !siteConfig.email &&
          !whatsappDigits && (
            <p className="contact-section__pending">
              EKA’s business contact details are being prepared. Please check
              back soon.
            </p>
          )}
      </div>
      <div className="contact-section__seal" aria-hidden="true">
        <span>EKA</span>
        <i>✳</i>
        <small>FROM KERALA, WITH CARE</small>
      </div>
    </section>
  );
}
