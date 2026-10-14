export const siteConfig = {
  name: "EKA",
  tagline: "The Taste of Real Kerala",
  whatsappNumber: "919663802694",
  email: "",
  address: "",
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
