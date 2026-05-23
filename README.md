# 🌿 VitaShop — Premium Wellness & Supplements Malaysia

A complete e-commerce website built for **FIT1011 — Introduction to E-Commerce** (April 2026 Semester).
VitaShop is a B2C online wellness store selling vitamins, fitness supplements, herbal remedies, and beauty/immunity products, with an optional monthly **Wellness Box** subscription.

> **Live URL** *(after deployment)*: `https://abusilawq.github.io/VitaShop/`
> **GitHub Repo**: `https://github.com/abusilawq/VitaShop`

---

## 📋 Table of Contents

1. [Demo Credentials](#-demo-credentials)
2. [Quick Start](#-quick-start)
3. [Deploy to GitHub Pages](#-deploy-to-github-pages)
4. [Project Structure](#-project-structure)
5. [Features](#-features)
6. [Assignment Mapping](#-assignment-mapping--how-each-rubric-criterion-is-addressed)
7. [Tech Stack](#-tech-stack)
8. [Documentation Reference](#-documentation-reference)

---

## 🔑 Demo Credentials

The site is fully functional in demo mode — no real payments are processed. Use these credentials to explore:

| Role | Email | Password |
|------|--------|-----------|
| **Admin** | `admin@vitashop.my` | `admin123` |
| **Customer** | `demo@vitashop.my` | `demo123` |

You can also register a new customer account via the [Register page](register.html) — it's stored in your browser's localStorage.

### Quick links once you're on the site
- **Customer site:** [`index.html`](index.html)
- **Admin login:** [`admin/index.html`](admin/index.html) → after login redirects to [`admin/dashboard.html`](admin/dashboard.html)

---

## 🚀 Quick Start

VitaShop is a fully **static** website — no server, no database, no build step. Everything runs in the browser using `localStorage` for state.

### Option A — Open directly
```bash
# Just open index.html in any modern browser:
open index.html         # macOS
start index.html        # Windows
xdg-open index.html     # Linux
```

### Option B — Local server (recommended for testing all features)
```bash
# Using Python (most systems)
python3 -m http.server 8080

# Using Node.js
npx serve .

# Then visit http://localhost:8080
```

---

## 🌐 Deploy to GitHub Pages

The easiest way to put VitaShop online and get a shareable URL for your assignment.

### Step 1 — Push this code to GitHub

From inside the project folder:

```bash
git init
git add .
git commit -m "Initial commit — VitaShop e-commerce site"
git branch -M main
git remote add origin https://github.com/abusilawq/VitaShop.git
git push -u origin main
```

> If the remote already has files, force-push with `git push -u origin main --force`
> (only safe on your own demo repo).

### Step 2 — Enable GitHub Pages

1. Go to your repo: `https://github.com/abusilawq/VitaShop`
2. Click **Settings → Pages** (left sidebar)
3. Under **Source**, choose **Deploy from a branch**
4. Select branch: **`main`** and folder: **`/ (root)`**
5. Click **Save**

After ~1 minute, your site goes live at:
**`https://abusilawq.github.io/VitaShop/`**

Submit this URL in your assignment documentation.

---

## 📂 Project Structure

```
VitaShop/
├── index.html              # Homepage (hero, bestsellers, subscription, testimonials)
├── shop.html               # Product catalogue with filters & search
├── product.html            # Single product detail with reviews & related items
├── cart.html               # Shopping cart with quantity controls
├── checkout.html           # Multi-step checkout (Malaysian payments)
├── order-success.html      # Order confirmation
├── subscription.html       # Monthly Wellness Box landing page
├── about.html              # Brand story, mission, values
├── contact.html            # Contact form
├── blog.html               # Wellness Journal (articles)
├── faq.html                # Help Center / FAQ
├── login.html              # Customer login
├── register.html           # Customer registration
├── account.html            # My Account (orders, profile)
│
├── admin/                  # Admin panel (separate access)
│   ├── index.html          # Admin login
│   ├── dashboard.html      # KPIs, revenue chart, recent orders, top products
│   ├── orders.html         # Order management (CRUD, status, CSV export)
│   ├── products.html       # Product management (full CRUD)
│   ├── customers.html      # Customer directory + detail modal
│   └── analytics.html      # 5 charts: revenue trend, category, payment, traffic, segments
│
├── css/
│   ├── styles.css          # Main design system (~2,800 lines)
│   └── admin.css           # Admin panel styles (~1,100 lines)
│
├── js/
│   ├── data.js             # Sample data: products, orders, customers, articles
│   ├── app.js              # Cart, Auth, Storage, header/footer, product cards
│   └── admin.js            # Admin sidebar, header, CRUD helpers
│
└── README.md               # This file
```

---

## ✨ Features

### 🛍️ Customer-facing
| Feature | Details |
|---|---|
| **Homepage** | Animated hero, category showcase, bestsellers, subscription banner, testimonials, blog teaser |
| **Product catalogue** | Filter by category, sort by price/rating, search by keyword |
| **Product detail** | Image gallery, size selector, customer reviews, related products, ingredients & benefits |
| **Cart** | Add/remove/update quantity, persistent across page reloads via localStorage |
| **Checkout** | 3-step flow — Contact → Shipping → Payment with Malaysian payment options (FPX with 8 banks, GrabPay, Touch 'n Go eWallet, Boost, Visa/Mastercard/AMEX) |
| **Wellness Box** | Monthly subscription landing page with goal-based personalisation |
| **Account** | Login/register (localStorage), order history, profile |
| **Blog & FAQ** | SEO-friendly content for organic traffic + customer support |
| **Responsive** | Mobile-first design, hamburger menu, touch-friendly |

### 🔐 Admin panel
| Feature | Details |
|---|---|
| **Dashboard** | 4 KPI cards (revenue, orders, customers, AOV), revenue line chart, category doughnut, recent orders table, top 5 products |
| **Orders** | Full list, filter by status, search, inline status updates, detail modal, CSV export, delete |
| **Products** | Full CRUD with modal form, category filter, search, stock indicators (in/low/out), edit images |
| **Customers** | Directory with VIP/Active/New segmentation, detail modal showing customer's order history, email shortcut, CSV export |
| **Analytics** | 5 charts using Chart.js — 12-month revenue trend (YoY comparison), category revenue, payment method distribution, traffic source, customer segments + top-performing products list |

### 🎨 Design system
- **Typography:** Fraunces (display serif) + Manrope (body sans-serif)
- **Palette:** Forest greens (`#0a2818` → `#e2f1ea`) + Vital orange accents (`#ff6b35`) + Cream neutrals (`#fcfaf5`)
- **Components:** Buttons (5 variants), cards, forms, tables, modals, status pills, payment selectors, toasts
- **Animations:** Hero fade-up stagger, marquee trust bar, hover transforms, modal slide-ins, page transitions

---

## 📚 Assignment Mapping — How each rubric criterion is addressed

This section maps directly to the **FIT1011 Marking Rubric** so your group can answer questions in the Q&A confidently.

### Website (10 marks)

| Criterion | Where to find it |
|---|---|
| **Concept** — Clear B2C wellness brand targeting health-conscious Malaysians | Homepage hero, About page, README intro |
| **Design** — Professional UI, consistent navigation, on-brand visuals | All pages share header/footer; design system in `css/styles.css` |
| **Content** — Searchable, organised, complete | Shop has filter + search, FAQ + blog provide depth, product pages have full descriptions, benefits, ingredients |
| **Execution** — Working transaction flow, feedback, search | Cart → Checkout → Confirmation flow works end-to-end; contact form on `contact.html`; reviews on `product.html`; admin can manage everything |

### Documentation (15 marks) — covered in your assignment write-up referencing this codebase

1. **Website (concept/design/content/execution)** — see screenshots from key pages, reference [Features](#-features) above
2. **Software** — see [Tech Stack](#-tech-stack) below for comparison-ready details
3. **Hardware** — see [Documentation Reference → Hardware](#hardware) below
4. **E-commerce Business Model** — see [Documentation Reference → Business Model](#business-model)
5. **Security & Payments** — see [Documentation Reference → Security](#security--payments)
6. **Marketing & Advertising** — see [Documentation Reference → Marketing](#marketing)

---

## 🛠 Tech Stack

| Layer | Choice | Why this over alternatives |
|---|---|---|
| **Frontend Markup** | HTML5 (semantic) | Standard, accessible, indexed by search engines |
| **Styling** | Custom CSS + CSS variables | Full control, zero JS framework overhead, smaller bundle than Tailwind |
| **Behaviour** | Vanilla JavaScript (ES6+) | No build step, no dependencies, runs in any browser |
| **Charts** | Chart.js 4.4.1 (CDN) | Lightweight, free, MIT licensed, good docs |
| **Fonts** | Google Fonts (Fraunces + Manrope) | Free, fast CDN, web-optimised |
| **Images** | Unsplash (royalty-free CDN) | High quality, optimised URLs, no licensing cost |
| **Storage** | Browser `localStorage` | Demo-appropriate, no backend server needed, persists across sessions |
| **Hosting** | GitHub Pages (HTTPS) | Free, fast, custom domain support, SSL by default |

### Software comparison table (use in your documentation)

| Stack option | Cost | Functionality | Suitability | Notes |
|---|---|---|---|---|
| **Custom HTML/CSS/JS (chosen)** | RM 0 (host: free) | Full design freedom, fast | ✅ Best for a learning project | Used here |
| **Shopify** | ~RM 137/month | Full e-com platform, payments built-in | ✅ Best for live retail | Locks you in, harder to customise deeply |
| **WooCommerce (WordPress)** | RM 50–200/month (hosting + plugins) | Plugin ecosystem, SEO-friendly | ✅ Good for content+commerce | Heavy, security maintenance overhead |
| **Wix** | RM 50–100/month | Drag-drop, easy | ⚠️ Limited customisation | What we used in v1, hit design ceiling |

---

## 📖 Documentation Reference

> Use these talking points directly in your assignment documentation and Q&A.

### Business Model
- **Type:** B2C with a hybrid subscription model (Monthly Wellness Box)
- **Revenue model:** Direct product sales + recurring subscription revenue
- **Target audience:**
  - **Primary:** Health-conscious Malaysians aged 25–45 in urban centres (KL, PJ, Subang, Penang)
  - **Secondary:** Gym-goers, working professionals, seniors managing health conditions
- **Why B2C+subscription (vs alternatives):**
  - **vs Pure B2C:** Subscription adds recurring revenue, increases customer lifetime value (CLV)
  - **vs B2B:** Wellness/supplements are personal purchases — direct-to-consumer is the natural fit
  - **vs Marketplace:** Owning the brand + customer relationship builds trust, which is critical for ingestibles
- **Fulfilment:** Self-fulfilment from KL warehouse with same-day dispatch (J&T, Poslaju)

### SWOT Analysis
| | |
|---|---|
| **Strengths** | Trusted brand, lab-tested products, fast same-day shipping, halal-certified, transparent sourcing, recurring revenue from subscriptions |
| **Weaknesses** | New brand (need to build trust), capital required for inventory, niche market |
| **Opportunities** | Post-COVID health boom, growing fitness/wellness culture, social commerce on TikTok/Instagram, Malaysian middle-class growth |
| **Threats** | iHerb, Watsons, Guardian have stronger distribution; counterfeit supplements harm category trust; regulatory changes by NPRA |

### Timeline
| Phase | Weeks | Deliverable |
|---|---|---|
| 1. Research & branding | 1–2 | Logo, palette, target persona, supplier shortlist |
| 2. Website build | 3–5 | This site — design, develop, content |
| 3. Product sourcing & QA | 4–6 | Lab certificates, KKM registration, inventory in warehouse |
| 4. Soft launch | 7 | Friends-and-family, 50 beta customers, gather feedback |
| 5. Marketing launch | 8–10 | Influencer campaigns, paid ads, SEO content live |

### Hardware
Hardware needs are split between **business infrastructure** and **end-user requirements**.

**For the business (us):**

| Component | Option A | Option B (chosen) | Justification |
|---|---|---|---|
| **Web hosting server** | Shared hosting (Exabytes RM 25/mo) | **GitHub Pages (free, CDN-backed)** | Free, HTTPS, global CDN |
| **Office computers** | Mac Studio (RM 9k) | **Mid-range MacBook Air M3 (RM 5k)** | Portable, sufficient for design/admin work |
| **Warehouse devices** | Basic Android tablets (RM 800) for inventory scanning | ✅ | Cost-effective barcode scanning + WhatsApp |
| **Network** | SOHO router (TP-Link AX3000 RM 600) | ✅ | Stable WiFi 6, enough for small team |
| **Backup storage** | NAS (Synology DS220+ RM 1,500) | ✅ | Off-site backup of customer data + designs |
| **Printer** | All-in-one ink-tank (Epson EcoTank RM 1,200) | ✅ | Low-cost printing of waybills + invoices |

**For end users (customers):**
- Any device with a modern browser (Chrome 90+, Safari 14+, Firefox 90+)
- Mobile-first design supports phones with 360px width upwards
- Internet connection — works on 4G/5G/WiFi

### Security & Payments
- **Encryption:** TLS 1.3 (HTTPS by default on GitHub Pages — green padlock visible in browser address bar)
- **Authentication:** Email + password with hashing recommended for production (currently plaintext in localStorage for demo only)
- **Fraud prevention:**
  - PCI-compliant gateway (iPay88 / Stripe) processes card details — we never store full card numbers
  - 3D Secure (OTP) for credit cards
  - Rate limiting on login attempts (production)
  - Device fingerprinting for high-value orders (production)
- **Data protection:** Compliance with Malaysian **Personal Data Protection Act (PDPA) 2010**
- **Recommended payment gateway:** **iPay88** — most popular in Malaysia, supports FPX (all major banks), all 5 eWallets (GrabPay, TNG, Boost, ShopeePay, MAE), and international cards. Alternative: **Stripe Malaysia** for cards-only.
- **Potential threats:**
  - SQL injection → mitigated by using parameterised queries when backend is added
  - XSS → mitigated by escaping user input (e.g. in product reviews)
  - Phishing → mitigated by SSL, clear domain, customer education
  - Data breaches → mitigated by encryption at rest + regular backups

### Marketing
- **SEO:** Blog content (`blog.html`) targets long-tail keywords like "buy vitamin D Malaysia", structured data via semantic HTML, fast page load, sitemap.xml (TODO)
- **SEM:** Google Ads targeting "vitamins Malaysia", "supplements KL", remarketing pixel
- **Social media:** TikTok short videos (product demos, customer testimonials), Instagram reels, Facebook community group
- **Influencer marketing:** Partnerships with fitness influencers (5K–50K followers tier — best ROI)
- **Email marketing:** Newsletter signup on every page, abandoned cart emails, subscriber-only promo codes
- **WhatsApp:** Order updates, customer care, broadcast campaigns
- **Promotions:** First-order 15% discount, loyalty points (1 RM = 1 point, 100 points = RM 10 off), free shipping over RM 150
- **Content marketing:** The Wellness Journal builds authority + drives organic traffic + nurtures prospects

---

## 👥 Team

Built for FIT1011 group assignment — April 2026 semester.

---

## 📄 License

Educational use only. Product photography from Unsplash (free license). Brand name "VitaShop" is fictional for academic purposes.
