import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!digits) return null;

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${digits}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with EKA on WhatsApp"
    >
      <MessageCircle size={20} />
      <span>Talk to EKA</span>
    </a>
  );
}
