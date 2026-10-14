import type { Metadata } from "next";
import { CartProvider } from "@/components/cart/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FloatingWhatsApp } from "@/components/cart/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  title: "EKA Virgin Coconut Oil – The Taste of Real Kerala",
  description:
    "A Kerala tradition, gently carried forward. Discover EKA Virgin Coconut Oil and the story of Naadan Urukku Velichennai.",
  openGraph: {
    title: "EKA Virgin Coconut Oil – The Taste of Real Kerala",
    description: "A Kerala tradition, gently carried forward.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
