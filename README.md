# Flexxi Global Trade — Global Merchant Exporter Web Platform

> **Tagline:** Bridging Indian Quality to the World  
> **Aesthetic Philosophy:** Reliable Sovereign Navy Blue (`#071120`), Warm Gold (`#f59e0b`), Crisp White (`#ffffff`), and Vibrant Cyan (`#38bdf8`)  
> **Motion Design:** Smooth staggered page entrance / starting keyframe animations  
> **Deployment Target:** Cloudflare Pages (Static, Instant, Ultra-Secure)

---

## 🌟 Visual & Reliability Identity

### 1. High-Trust Color System (No Over-Bright "Red" Warning Clutter)
- **Deep Maritime Navy (`#071120` & `#0d1b32`)**: Evokes safety, stability, and professional corporate dependability.
- **Sovereign Royal Blue (`#2563eb`)**: High-confidence primary button styling (`btn-primary-blue`) communicating trust and reliability.
- **Warm Champagne Gold (`#f59e0b` & `#d97706`)**: Elegant secondary accent tone (`btn-warm-gold`) for catalog actions, symbolizing value and certified origin.
- **Crisp Snow White & Ice Slates**: High contrast text hierarchy for zero eye fatigue.

---

### 2. Attractive Animated Header & Starting Keyframe Motion
To deliver an engaging, polished experience from the moment any page loads:
- **`header-entrance-anim`**: Entire navbar slides smoothly down into view (`navSlideDown 0.7s cubic-bezier(0.16, 1, 0.3, 1)`).
- **`navbar-shimmer-border`**: Dynamic horizontal light beam continuously sweeps across the underside of the header (`shimmerEffect 4s ease-in-out infinite`).
- **`logo-icon-box` & Interactive Compass Spin**: The maritime compass icon gracefully pivots on hover and features a luminous halo glow.
- **`nav-link-item` Hover Dynamics**: Nav items display an animated expand-from-center underline with subtle color glow on hover.
- **`animate-hero-fade-down` & `animate-hero-fade-up`**: Hero badges, headings, and lead copy slide gracefully into position with staggered cubic-bezier curves.
- **`animate-hero-card` & `floating-element`**: Action Hub tracking card scales into focus with a continuous gentle floating float oscillation (`floating-element`).
- **Consistent Parity**: All 14 pages (8 top-level + 6 product deep dives) share the exact same attractive animated header, shimmer effect, and responsive mobile menu.

---

### 3. Integrated Logistics & Sourcing Features
- **Interactive Waybill & Shipment Verification**: Real-time status lookup verifying JNPT/Mundra gate-in and COA batch release.
- **Dynamic Increment Counters**: Highlights `100%` COA Testing, `6+` Primary Commodities, and `<24h` RFQ Turnaround.
- **Structured Content Cards**: Built with sleek vector line icons and dynamic blue-gold highlight borders.
- **Responsive Collapsible Drawer**: Mobile-friendly slide-down navigation drawer.

---

## 📂 Site Directory Structure

```
flexxiglobaltrade/
│
├── .github/
│   └── workflows/
│       └── deploy-pages.yml     # Automated GitHub Pages CI/CD workflow
├── .nojekyll                    # Disables Jekyll processing on GitHub Pages
├── _headers                     # Cloudflare Pages security headers (CSP, nosniff, frame protection)
├── index.html                   # 01. Homepage (Starting animations, Action Hub, Counters, Services)
├── about.html                   # 02. About Us (Merchant Exporter business model & ethics)
├── products.html                # 03. All Products Catalog Overview
├── quality.html                 # 04. Quality & Sourcing (4-Stage Quality Gate, COA, lab testing)
├── export-process.html          # 05. Export Process & Logistics (6-stage workflow from RFQ to Port)
├── markets.html                 # 06. Global Markets (Target markets: Malaysia, UAE, Singapore, USA)
├── rfq.html                     # 07. Request a Quote (Formal B2B RFQ inquiry form)
├── contact.html                 # 08. Contact Us (Direct channels, WhatsApp, email, trade office)
│
├── products/                    # Dedicated Individual Product Pages:
│   ├── moringa-powder.html      # Moringa Oleifera Leaf Powder (Nutraceutical grade)
│   ├── guar-gum-powder.html     # Guar Gum Powder (3500-8000 cps, food/industrial)
│   ├── onion-powder.html        # Dehydrated Onion Powder, Flakes & Minced
│   ├── banana-powder.html       # Natural Green & Ripe Banana Fruit Powder
│   ├── groundnut.html           # Indian Groundnuts / Peanuts (Bold & Java counts)
│   └── basmati-rice.html        # Authentic Basmati Rice (1121, 1509 Steam / Sella)
│
└── assets/
    ├── css/
    │   └── style.css            # Reliable design tokens, starting keyframes, gold & blue accents
    └── js/
        └── main.js              # Tracking simulation, counter increments, drawer menu, safe RFQ
```

---

## 🚀 GitHub Actions Deployment (GitHub Pages)

The website includes an automated GitHub Actions deployment workflow located at [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

### Quick Setup Steps:
1. Push your repository to GitHub.
2. In your GitHub repository, navigate to **Settings** &gt; **Pages**.
3. Under **Build and deployment** &gt; **Source**, select **GitHub Actions**.
4. Every push to `main` or `master` will automatically publish the website to GitHub Pages.

---

## ☁️ Cloudflare Pages Deployment
1. Connect this repository to your **Cloudflare Dashboard &gt; Workers &amp; Pages**.
2. Framework preset: **None**, Build command: **Empty**, Output directory: **`.`** (root).
3. Instant global deployment on Cloudflare Edge with automated HTTPS and native `_headers` security enforcement.
