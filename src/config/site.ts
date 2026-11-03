export const siteConfig = {
  name: "EKA",
  tagline: "The Taste of Real Kerala",
  whatsappNumber: "919986893369",
  email: "ekaproductskerala@gmail.com",
  address:
    "Thayyullathil,383/A/3,Kottiyamvelly Road,Villiappally,Kozhikode,Kerala,India",
  businessHours: "",
  socialLinks: {
    instagram: "",
    facebook: "",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Our story", href: "#tradition" },
    { label: "Our oil", href: "#oil" },
    { label: "Why EKA", href: "#why-eka" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const formatInr = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
