# Flexxi Global Trade — Global Merchant Exporter Web Platform

> **Tagline:** Connecting Nature to the World  
> **Brand Identity:** High-resolution transparent emblem with cargo vessel, airliner, and globe motif  
> **Aesthetic Philosophy:** Reliable Sovereign Navy Blue (`#071120`), Warm Gold (`#f59e0b`), Crisp White (`#ffffff`), and Vibrant Cyan (`#38bdf8`)  
> **Motion Design:** Smooth staggered page entrance / starting keyframe animations  
> **Deployment Target:** Cloudflare Pages & GitHub Pages (Static, Instant, Ultra-Secure)

---

## 🌟 Visual & Reliability Identity

### 1. Official Brand Logo & Identity
- High-resolution transparent PNG emblem saved at [`assets/images/logo.png`](assets/images/logo.png) integrated across all 14 site headers, footers, and favicons.
- Official brand slogan: **"Connecting Nature to the World"** with maritime and air cargo logistics symbology.
- Hover glow and scaling effects on brand icon containers.

---

### 2. Complete 10 Export Sectors & Sea Container Allocation System
Full sea-freight agricultural and food export portfolio divided into dedicated containerization modes:
1. **Powders** (`Dry 20ft/40ft`): Moringa powder, Banana powder, Onion powder, Tomato powder, Guar gum powder, Garlic powder, Ginger powder, Turmeric powder, Chilli powder.
2. **Nuts & Oilseeds** (`Dry 20ft/40ft`): Groundnut (Peanuts), Coconut (Desiccated & Whole), Cashew nuts, Sesame seeds, Mustard seeds, Castor seeds.
3. **Rice** (`Dry 20ft/40ft`): Basmati rice (1121, 1509), Non-Basmati rice (Sona Masoori, IR64, Parboiled rice, Broken rice).
4. **Agri & Commodities** (`Dry 20ft/40ft`): Onion, Guar gum, Potato, Garlic, Sugar (ICUMSA), Jaggery, Cotton bales, Maize (Corn), Wheat.
5. **Fresh Fruits** (`Reefer Refrigerated`): Pomegranate, Grapes, Mango (Alphonso & Kesar), Banana (Cavendish G9), Guava, Papaya, Watermelon, Orange.
6. **Fresh Vegetables** (`Reefer Refrigerated`): Red onion, Green chilli, Okra (Ladyfinger), Drumstick (Moringa pods), Lemon, Tomato, Ginger.
7. **Spices** (`Dry 20ft/40ft`): Turmeric, Red chilli (Sanam, Teja, Byadgi), Cumin (Jeera), Coriander, Black pepper, Cardamom, Cloves, Fenugreek.
8. **Pulses & Lentils** (`Dry 20ft/40ft`): Chickpeas (Kabuli Chana), Toor dal, Moong dal, Urad dal, Masoor dal.
9. **Beverages & Plantation** (`Dry 20ft/40ft`): Tea (Assam CTC, Orthodox, Green), Coffee beans (Robusta & Arabica), Cocoa.
10. **Processed & Frozen Foods** (`Reefer Refrigerated -18°C`): Mango pulp (Aseptic), Pickles, Pappad, Frozen vegetables (IQF), Frozen seafood (Shrimps, Fish).

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
