# Prompt: Build EKA Virgin Coconut Oil Marketing Website

Act as a senior Next.js developer, UI/UX designer, and frontend architect. Build a complete, responsive, premium marketing website for **EKA Virgin Coconut Oil**, a Kerala traditional hot-processed coconut oil brand.

The website should communicate Kerala's heritage, authenticity, traditional preparation methods, natural aroma, and product purity. The design must feel **classic, traditional, elegant, trustworthy, and premium**, rather than like a generic modern e-commerce website.

## 1. Project Requirements

- Build the website using **Next.js with TypeScript**.
- Use the App Router.
- Use reusable, loosely coupled React components.
- Use Tailwind CSS for styling if already configured; otherwise, configure it appropriately.
- Follow clean coding practices and maintain a scalable folder structure.
- Make the website fully responsive for desktop, tablet, and mobile.
- Use accessible semantic HTML and keyboard-friendly interactions.
- Optimize images, fonts, and performance using Next.js best practices.
- Do not introduce unnecessary dependencies.
- Inspect the existing project before making changes and reuse its current setup where appropriate.
- Implement actual functional interactions, not just static mockups.

## 2. Brand Identity and Design Direction

**Brand:** EKA Virgin Coconut Oil

**Tagline:** EKA – The Taste of Real Kerala

**Brand positioning:** Traditional Kerala hot-processed virgin coconut oil made using the authentic Naadan Urukku Velichennai method.

### Visual style

Create a classic Kerala-inspired design with a premium, heritage aesthetic.

Color palette:

- Deep coconut-leaf green for primary branding.
- Warm ivory and cream for page backgrounds.
- Coconut brown and dark earthy tones for text.
- Muted antique gold for accents, borders, and highlights.

Typography:

- Use an elegant serif font for headings.
- Use a clean, readable font for body text.
- Use generous spacing, subtle borders, and refined typography.

Design elements:

- Traditional Kerala homes and kitchens.
- Coconut palms and fresh coconuts.
- Traditional uruli vessels and the oil extraction process.
- Warm natural lighting and earthy textures.
- Subtle traditional Kerala-inspired decorative details.

Avoid:

- Excessive gradients and flashy animations.
- Overly futuristic designs.
- Generic SaaS layouts.
- Excessive rounded cards and pill-shaped buttons.
- A cluttered shopping marketplace appearance.
- Unsupported product claims or fake customer testimonials.

Use suitable high-quality images for coconuts, Kerala heritage, traditional oil preparation, and product photography. If actual EKA product images are unavailable, use clearly replaceable image placeholders and document where real product assets should be added.

## 3. Website Structure

Create the following sections.

### A. Header and Navigation

Build a responsive header containing:

- EKA brand logo or a typographic logo placeholder.
- Home.
- Our Tradition.
- Our Product.
- Why EKA.
- Contact.

Include a prominent **Shop Now** button.

Requirements:

- Sticky or elegantly positioned header.
- Mobile navigation menu.
- Smooth scrolling to page sections where appropriate.
- Clear active and hover states.
- Use a simple, traditional logo treatment.

### B. Hero Section

Create a visually striking hero section with a premium product image on one side and brand messaging on the other.

Content:

**Eyebrow:** ROOTED IN KERALA'S HERITAGE

**Main heading:** Not Cold Pressed. Hot & Honest.

**Subheading:** EKA – The Taste of Real Kerala

**Description:**

EKA Virgin Coconut Oil is made using Kerala's traditional hot-process method, inspired by generations of homegrown wisdom. Fresh coconut milk is gently heated to extract naturally aromatic coconut oil, preserving the taste and character of our heritage.

**Primary CTA:** Explore Our Oil

**Secondary CTA:** Discover Our Tradition

Add small trust highlights:

- Traditional Kerala Hot Process
- Made from Fresh Coconuts
- No Added Preservatives

Make the hero emotional and authentic, connecting customers to the familiar aroma of a traditional Kerala kitchen.

### C. Brand Story: The Tradition Behind EKA

Section heading:

**Some Traditions Are Too Precious to Lose.**

Content:

In Kerala, coconut oil has always been more than an ingredient. It is part of our food, our homes, and our everyday traditions.

Long before modern machines, our grandmothers prepared coconut oil with patience and care. At EKA, we draw inspiration from this heritage through our traditional hot-processing method, known as Naadan Urukku Velichennai.

Fresh coconut milk is gently heated in traditional vessels until the oil separates naturally.

No complicated processes. Just a time-honoured tradition brought into the present.

Design this section using heritage photography, editorial typography, and an elegant storytelling layout.

### D. Product Showcase

Create a dedicated product section with reusable product cards.

Section heading:

**Discover the Taste of Real Kerala**

Short description:

Experience the rich aroma and traditional character of EKA Virgin Coconut Oil.

Initially, create a configurable product catalogue with placeholder product images and sample product data. Make it easy to replace these placeholders with real products later.

Each product card must display:

- Product image.
- Product name.
- Short description.
- Price placeholder.
- Available volume options in ml.
- Quantity selector.
- Add to Cart or Order on WhatsApp button.

Example configurable product variants:

- 100 ml
- 250 ml
- 500 ml
- 1,000 ml

These are example variants only. Keep the available volumes and prices in a central product data file so they can be changed without modifying the UI components.

### Product interaction requirements

Implement the following functionality:

1. Allow users to select a volume in ml.
2. Update the displayed price based on the selected variant.
3. Allow users to increase or decrease quantity.
4. Prevent quantity from going below one.
5. Display the selected volume and quantity in the order summary.
6. Add selected products to a lightweight shopping cart.
7. Display the cart item count and subtotal.
8. Allow users to update quantities and remove items from the cart.
9. Preserve the selected product variant and quantity when adding an item to the cart.
10. Provide a clear empty-cart state.

Do not invent real prices. Use clearly marked placeholder prices until actual prices are configured.

Keep the cart implementation simple and avoid adding payment gateway integration unless requested separately.

### E. Why Traditional Hot-Processed Coconut Oil?

Section heading:

**The Warmth of Tradition in Every Drop**

Explain the brand's traditional preparation method using four feature blocks.

**1. Traditional Naadan Urukku Method**

Inspired by the traditional Kerala method of gently heating fresh coconut milk to separate the oil.

**2. Rich Natural Aroma**

Celebrate the characteristic roasted coconut aroma associated with traditional hot-processed coconut oil.

**3. Simple Ingredients**

Made with fresh Kerala coconuts, without added preservatives, artificial colours, or unnecessary additives, subject to confirmation of actual production practices.

**4. Generations of Heritage**

Inspired by the way coconut oil has been prepared and used in Kerala homes for generations.

Use tasteful icons or small illustrations, not generic corporate icons everywhere.

Important: Present traditional preparation as EKA's defining brand identity. Do not make unsupported claims that hot-processed oil is universally healthier, safer, or superior to cold-pressed oil.

### F. Traditional Preparation Process

Create an engaging visual storytelling section explaining the process:

1. Fresh Coconuts — Coconuts sourced from Kerala farms.
2. Fresh Coconut Milk — Coconuts are de-husked, grated, and processed to extract fresh coconut milk.
3. Gentle Heating — Coconut milk is slowly heated in traditional vessels.
4. Natural Separation — Oil separates through the traditional preparation process.
5. EKA Virgin Coconut Oil — The resulting oil is prepared for packaging.

Use a horizontal timeline on desktop and a vertical timeline on mobile.

Include suitable images or replaceable visual placeholders for every step.

### G. Uses of EKA Coconut Oil

Create an attractive section showcasing traditional uses:

- Everyday Kerala cooking.
- Traditional hair care.
- Body massage.
- Traditional lamp lighting and ceremonial use.

Use separate visual tiles with appropriate photography.

Keep descriptions informational and avoid medical or therapeutic promises.

### H. Authenticity and Natural Characteristics

Section heading:

**Nature Has Its Own Way of Saying It's Real.**

Content:

Traditional coconut oil can naturally change between solid and liquid states depending on temperature. Its colour, texture, and aroma may also vary with the coconut and preparation process.

Include a tasteful section highlighting:

- Natural coconut aroma.
- Characteristic golden appearance, where applicable.
- Temperature-dependent solidification and melting.
- Traditional preparation.

Do not describe any single characteristic as definitive proof of purity. Do not promise that the oil never spoils or has a guaranteed shelf life without supporting evidence.

### I. Contact and WhatsApp Ordering

Create a dedicated contact section and footer.

Include configurable fields for:

- Business address.
- WhatsApp phone number.
- Business email.
- Business hours.
- Social media links.

Keep the actual business information in a central configuration file.

#### WhatsApp integration

Implement functional WhatsApp links using:

https://wa.me/WHATSAPP_NUMBER

Replace WHATSAPP_NUMBER with the configured phone number in international format, containing digits only.

For product orders, generate a prefilled WhatsApp message containing:

- Product name.
- Selected volume in ml.
- Quantity.
- Unit price, if configured.
- Subtotal, if configured.

Example message:

Hello EKA, I would like to order:

Product: EKA Virgin Coconut Oil
Volume: 500 ml
Quantity: 2
Total: [Calculated subtotal]

Please confirm availability and delivery details.

Encode the message safely using URL encoding.

Use `https://wa.me/` links that open WhatsApp through the browser or installed app as supported by the device.

Add a floating WhatsApp contact button on desktop and mobile. Ensure it does not obscure navigation, content, or mobile controls.

### J. Footer

Include:

- EKA logo.
- EKA – The Taste of Real Kerala.
- Quick navigation links.
- Contact address.
- WhatsApp contact.
- Copyright notice.
- Privacy Policy placeholder.
- Terms and Conditions placeholder.

Keep the footer classic, elegant, and consistent with the rest of the website.

## 4. Technical Architecture

Use a clean and reusable component structure similar to:

src/
app/
layout.tsx
page.tsx
globals.css
components/
layout/
Header.tsx
Footer.tsx
MobileNavigation.tsx
home/
HeroSection.tsx
BrandStory.tsx
ProductShowcase.tsx
WhyEkaSection.tsx
ProcessSection.tsx
UsesSection.tsx
AuthenticitySection.tsx
ContactSection.tsx
products/
ProductCard.tsx
VariantSelector.tsx
QuantitySelector.tsx
CartDrawer.tsx
CartItem.tsx
ui/
Button.tsx
SectionHeading.tsx
config/
site.ts
data/
products.ts
lib/
whatsapp.ts
cart.ts
types/
product.ts

Adapt this structure to the existing repository if necessary.

Use TypeScript interfaces or types for products, product variants, cart items, and site configuration.

Keep product data, pricing, business details, and WhatsApp configuration separate from presentation components.

Use React state or a lightweight existing state-management solution for cart interactions. Do not add Redux or another state library unless it is already appropriate for the project.

## 5. Product Data Model

Create a product data model similar to:

- id
- name
- description
- image
- variants

Each variant should contain:

- id
- volumeMl
- price

The selected variant should be identified by its variant ID, not just its displayed label.

Create sample product data with clearly identifiable placeholder values. Never present placeholder prices or sample product images as confirmed business information.

Keep the data model flexible enough to support additional coconut oil products later.

## 6. SEO and Performance

Implement:

- Page title: EKA Virgin Coconut Oil – The Taste of Real Kerala.
- Appropriate meta description.
- Open Graph metadata.
- Semantic heading hierarchy.
- Descriptive image alt text.
- Responsive images.
- Optimized font loading.
- Accessible navigation and form controls.
- Good Core Web Vitals practices.
- A favicon or simple EKA brand mark placeholder.

Ensure the website can be indexed by search engines and renders correctly on mobile devices.

## 7. Quality and Testing

Before completing the task:

- Verify that the Next.js app builds successfully.
- Run TypeScript checks.
- Fix linting errors.
- Test responsive layouts.
- Test mobile navigation.
- Test product volume selection.
- Test quantity controls.
- Test cart additions, updates, removals, and subtotal calculations.
- Test WhatsApp URL generation and message encoding.
- Check missing product images and placeholder handling.
- Check for broken links and console errors.

Do not claim a test has passed unless it has actually been run.

## 8. Expected Deliverable

Build the working website directly in the current repository.

Do not stop after creating a plan or providing example code. Implement the website and all required components.

After implementation, provide:

1. Summary of the completed pages and sections.
2. Project structure.
3. Setup and run instructions.
4. List of placeholder information that must be replaced, including product prices, real product images, business address, and WhatsApp number.
5. Any tests performed and remaining limitations.

**Final design goal:** When visitors open the EKA website, they should immediately feel the warmth of Kerala's traditional coconut oil-making heritage. The website should look like a genuine, established regional brand with a timeless identity, clear product selection, and a convenient WhatsApp ordering experience.
