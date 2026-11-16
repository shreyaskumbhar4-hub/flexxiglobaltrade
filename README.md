# Flexxi Global Trade — Global Merchant Exporter Web Platform

> **Tagline:** Connecting Nature to the World  
> **Brand Identity:** High-resolution transparent emblem with cargo vessel, airliner, and globe motif  
> **Aesthetic Philosophy:** Reliable Sovereign Navy Blue (`#071120`), Warm Gold (`#f59e0b`), Crisp White (`#ffffff`), and Vibrant Cyan (`#38bdf8`)  
> **Motion Design:** Smooth staggered page entrance / starting keyframe animations  
> **Deployment Target:** Cloudflare Pages & GitHub Pages (Static, Instant, Ultra-Secure)

---

## 🌟 Visual & Reliability Identity

### 1. Official Brand Logo & Production Background Atmosphere
- High-resolution transparent PNG emblem saved at [`assets/images/logo.png`](assets/images/logo.png) integrated across all 14 site headers, footers, and favicons.
- **High-Visibility Professional Theme**:
  - Lightened and elevated base maritime navy from `#071120` to `#0b1528` with richer slate cards (`#182c52`), crisp typography (`#e2e8f0` and `#ffffff`), and vibrant blue/gold glows (`rgba(59, 130, 246, 0.55)`).
  - Prominent Navbar Logo: Upgraded brand logo to larger responsive dimensions (`w-14 h-14 sm:w-16 sm:h-16`) with a spacious `h-24` navbar, crisp `FLEXXI` display typography, and a dedicated status badge.
- **Smart Auto-Hiding Navigation Bar & Device Responsiveness**:
  - Automatically slides up and hides (`.nav-hidden`) when scrolling down, revealing the centered watermark logo and hero content in full viewport.
  - Automatically slides back down and reveals when scrolling up or at the top of the page.
  - Calibrated responsive layout for mobile, tablet (iPad/tablets up to 1279px via clean hamburger drawer), and wide desktop displays (1280px+).
- **Proportionate Background Watermark**:
  - Resized from 780px to a balanced **540px (`max-width: 72vw; max-height: 65vh; top: 55%`)** on desktop and **340px on mobile/tablets**, completely clearing the top navigation bar so it never gets cropped or hidden.
- **Moving Words Maritime Announcement Ribbon (`.subnav-ticker`)**:
  - Positioned seamlessly directly beneath the navbar across all 14 pages.
  - Continuous infinite marquee animation featuring live port gateways (JNPT, Mundra), active reefer cold-chain (-18°C), 100% lab COA certification, container modes, global export corridors, and regulatory recognitions (APEDA, Spices Board, FSSAI).
- **Ambient Blurred Background Watermark (`body::before`)**: 
  - Perfectly centered in the viewport (`top: 50%; left: 50%; transform: translate(-50%, -50%)`).
  - Tuned to **20% opacity (`opacity: 0.20`)** with a light, crisp blur (`filter: blur(2px) drop-shadow(...)`), making the globe, ship, airplane, and brand details cleanly discernible while preserving text contrast and readability.
  - Layered with `z-index: 0` and `pointer-events: none` beneath elevated content containers (`z-index: 1`) to eliminate any overlap issues.
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
