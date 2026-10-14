import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandStory } from "@/components/home/BrandStory";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhyEkaSection } from "@/components/home/WhyEkaSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { UsesSection } from "@/components/home/UsesSection";
import { AuthenticitySection } from "@/components/home/AuthenticitySection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <div className="announcement">
        A KERALA TRADITION, GENTLY CARRIED FORWARD <span>✳</span> NAADAN URUKKU
        VELICHENNAI
      </div>
      <Header />
      <main id="home">
        <HeroSection />
        <BrandStory />
        <ProductShowcase />
        <WhyEkaSection />
        <ProcessSection />
        <UsesSection />
        <AuthenticitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
