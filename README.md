# Flexxi Global Trade — B2B Merchant Exporter Web Platform

> **Tagline:** Bridging Indian Quality to the World  
> **Business Focus:** B2B Merchant Exporter (Agro commodities, superfood powders, hydrocolloids, and dehydrated food ingredients)  
> **Deployment Target:** Cloudflare Pages (Static Site Generation / Zero Server Overhead)

---

## 🌟 Executive Overview
This web platform is purpose-built for **Flexxi Global Trade**, an Indian international merchant export enterprise. The design embodies modern corporate international trade standards with Tailwind CSS glassmorphism, responsive navigation, SEO metadata, laboratory-tested sourcing verification, and direct buyer RFQ (Request for Quotation) workflows.

---

## 📐 Design System & Principles

1. **Dynamic Section Asymmetry & Bento Grid:** Grouping features and commodities into varying-sized, rounded containers (`bento-card`) with subtle gradient borders.
2. **Generous Section Padding:** 8rem–9rem spacing (`py-28 lg:py-36`) allowing the design to breathe.
3. **Glassmorphic Navigation:** Frosted glass navbar with backdrop filter blur (`backdrop-filter: blur(20px)`).
4. **The 60-30-10 Color Architecture:**
   - 60% Dominant: Non-pure black deep charcoal/navy (`#0b0f19`).
   - 30% Structural: Slate text and subtle borders (`rgba(255, 255, 255, 0.08)`).
   - 10% Accent: Electric Sky Blue (`#0284c7`, `#38bdf8`) reserved strictly for CTAs and key actions.
5. **Micro-Interactions & Motion:**
   - Smooth hover lifts (`translateY(-5px)`) and glowing borders.
   - Magnetic button physics on primary CTAs (`magnetic-btn`).
   - Scroll-driven staggered entry using `IntersectionObserver`.
   - Infinite horizontal marquee ticker for agro commodities.
   - Top scroll progress bar (`#scroll-progress`).

---

## 📂 Site Architecture & File Structure

```
flexxiglobaltrade/
│
├── _headers                     # Cloudflare Pages security headers (CSP, nosniff, frame protection)
├── index.html                   # 01. Homepage (Hero, core metrics, portfolio, why choose us)
├── about.html                   # 02. About Us (Merchant exporter model, vision, mission, ethics)
├── products.html                # 03. All Products Catalog Overview
├── quality.html                 # 04. Quality & Sourcing (4-Stage Quality Gate, COA, lab testing)
├── export-process.html          # 05. Export Process & Logistics (6-stage workflow from RFQ to Port)
├── markets.html                 # 06. Global Markets (Target markets: Malaysia, UAE, Singapore, USA)
├── rfq.html                     # 07. Request a Quote (Formal B2B RFQ inquiry form)
├── contact.html                 # 08. Contact Us (Direct channels, WhatsApp, email, trade office)
│
├── products/                    # Dedicated SEO-friendly Individual Product Pages:
│   ├── moringa-powder.html      # Moringa Oleifera Leaf Powder (Nutraceutical grade)
│   ├── guar-gum-powder.html     # Guar Gum Powder (3500-8000 cps, food/industrial)
│   ├── onion-powder.html        # Dehydrated Onion Powder, Flakes & Minced
│   ├── banana-powder.html       # Natural Green & Ripe Banana Fruit Powder
│   ├── groundnut.html           # Indian Groundnuts / Peanuts (Bold & Java counts)
│   └── basmati-rice.html        # Authentic Basmati Rice (1121, 1509 Steam / Sella)
│
└── assets/
    ├── css/
    │   └── style.css            # Custom glassmorphism, glowing radial gradients, animations
    └── js/
        └── main.js              # Mobile drawer toggle, RFQ form processing, security sanitization
```

---

## 🛡️ Adherence to Business Guidelines & Compliance
1. **Merchant Exporter Clarity:** The platform transparently highlights the merchant exporter business model — leveraging direct farm-gate and mill sourcing across Gujarat, Maharashtra, Rajasthan, and Punjab.
2. **Target Markets vs. False Claims:** Compliant with guidelines, countries like **Malaysia, UAE, Singapore, and USA** are presented strictly as **Target Expansion Markets**, without fabricated export history.
3. **Certifications & Verifications:** Clarifies that Certificates of Analysis (COA) and phytosanitary certificates are lot-specific and issued upon laboratory batch testing.
4. **B2B Bulk Focus:** Zero retail shopping carts or online consumer card processing. Focus is 100% on container volumes, metric tons, and Proforma Invoices (Incoterms 2020: FOB, CIF, CFR).
5. **Always-Accessible WhatsApp:** Floating pulsating WhatsApp contact button and direct email desk available across all pages and mobile screens.

---

## 🔒 Security & Code Quality Audit
- **Cloudflare `_headers`:** Included with `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy`.
- **Sanitized Inputs:** All RFQ form submissions handle user inputs through strict URI encoding to prevent script injection and XSS vectors.
- **Rel Hardening:** All external links (`target="_blank"`) enforce `rel="noopener noreferrer"`.
- **Zero Heavy Runtime Dependencies:** Pure vanilla HTML5, Tailwind CSS, FontAwesome icons, and Vanilla JavaScript for maximum Lighthouse performance and instant Cloudflare CDN caching.

---

## 🚀 How to Deploy on Cloudflare Pages

### Option A: Cloudflare Git Integration (Recommended)
1. Push this directory to your GitHub or GitLab repository.
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `.` (root directory)
5. Click **Save and Deploy**. Cloudflare Pages will serve the static site globally across 300+ edge locations with free automatic SSL.

---

## 📞 Business Contact Details
- **Email:** info@flexxiglobaltrade.com
- **WhatsApp:** +91 98765 43210
- **Location:** Maharashtra / Gujarat Sourcing Corridor, India
- **Core Operations:** Direct Sourcing · Laboratory COA Verification · Marine Logistics Coordination
