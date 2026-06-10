# Nammu Website — Source of Truth

This document is the **single source of truth** for the Nammu marketing site: its
architecture, design system, and **all copy**. When code changes, this file changes
with it, and vice versa. Anything not yet decided is marked `[[PLACEHOLDER: …]]`.

A lean, three-page site. Social proof leans on named industry testimonials; seafood
specialization runs throughout.

> **Implementation status (2026-06-08):** New architecture, design system, and all
> three pages are built. Home (`/`), About (`/about`), and Product (`/product`) are
> live in code; legal pages unchanged. Copy below is what ships today; `[[PLACEHOLDER]]`
> markers are still open and rendered visibly on the site until filled.

---

## Positioning & Brand

**Slogan:** "We speak seafood."

**Who we are:** Nammu builds AI-powered software for seafood companies.

**Why this matters:** Trust is the currency in this industry, and being seafood-specific and speaking the language are how you earn it.

**What we offer — two paths:**

**The Platform** — Everything a seafood sales and procurement operation runs on, in one place: demand forecasting, CRM, live inventory, automated outreach, a direct order portal, business intelligence, order entry, and Nemo (AI assistant).

**Custom Builds** — A platform isn't the only way to work with us. When the need is narrower, we build to fit it: macros, workflows, and automations that take a manual job off someone's plate. Think reconciling inventory by hand in Excel, or updating price lists row by row.

---

## 0. Design Direction

**Aesthetic:** Modern tech / crisp — Stripe / Linear-adjacent. Structured grid,
soft depth (subtle shadows, not heavy rounded cards), tasteful gradients, bold
geometric sans. Professional and sleek; deliberately _not_ playful.

**Principles**

- Whitespace is a feature. Let sections breathe.
- One accent color does the heavy lifting; everything else is navy + neutral grays.
- Motion is subtle and purposeful (fades, slides on scroll), never decorative-for-its-own-sake.
- Every section earns its place; no filler.

### Design System

> Proposed tokens — refine during build. Current palette is retained but desaturated/rationalized.

**Color**

- `navy` (anchor / headings / dark sections): `#09142f` — **in code**
- `accent` (links, highlights, accent buttons): `#1f7fc2` _(desaturated from old `#209bdd`)_ — **in code; confirm**
- `accent-soft` (tints, hovers, gradient stops): `#c0dffa` — **in code**
- `teal` (secondary accent, used sparingly): `#0d9aab`
- Neutrals:
  - `ink` (body text): `#1c2430`
  - `slate` (secondary text): `#5a6573`
  - `line` (hairlines/borders): `#e6eaef`
  - `surface` (off-white section bg): `#f7f9fc`
  - `white`: `#ffffff`
- Gradient (hero / accent panels): `linear-gradient(135deg, accent-soft → white)` or navy→teal for dark panels. `[[PLACEHOLDER: finalize gradient]]`

**Typography**

- Headlines: bold geometric sans `[[PLACEHOLDER: choose font — e.g. Inter Tight / Geist / Söhne / General Sans]]`
- Body: Inter (already loaded) or system sans.
- Scale: display `~3.5rem`, h1 `2.75rem`, h2 `2rem`, h3 `1.4rem`, body `1.05rem`, small `0.9rem`. Tighter line-height on headings (1.1–1.2).

**Components**

- Buttons: primary (filled accent/navy), secondary (outline). Rounded `8px`, not pill-shaped, for a crisper feel.
- Cards: `white` bg, `1px solid line`, `12–16px` radius, soft shadow `0 4px 16px rgba(9,20,47,0.06)`.
- Hairline rules to divide content instead of heavy borders.
- Logo strip: grayscale logos, low opacity, single row.

**Motion**

- Section content fades/slides up on scroll-into-view.
- Hover: subtle lift + shadow on interactive elements.
- Respect `prefers-reduced-motion`.

**Voice & Tone**

- Confident, plain-spoken, industry-fluent. Speaks to seafood sales & purchasing teams.
- Light, tasteful seafood framing in headers (e.g. "straight from the source") — but never gimmicky.

---

## 1. Site Architecture

**Pages / Routes**
| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Single-scroll pitch — carries the whole story. |
| `/privacy` | Privacy Policy | Legal (existing). |
| `/terms` | Terms of Service | Legal (existing). |
| `/hero` | LinkedIn banner | Utility: standalone LinkedIn cover (1128 × 191) to screenshot. Not in nav (`LinkedInBanner.js`). |
| `/old` | Previous site | The pre-overhaul site (recovered from commit `c04ea18` into an isolated `src/old/` namespace) for side-by-side comparison. Not in nav. |

> **Single-page site.** No dedicated Product or About pages. The home page carries everything, and the way to go deeper is to book a demo. The header is just the logo + a single Request a Demo CTA (no nav links, no hamburger), and every secondary CTA ("Learn more", "Book a demo") opens the demo modal. Only the legal pages are separate routes.

**Global elements** (every page): Header / nav, Footer, Demo Request modal. Routing scrolls to the top of the page on every navigation (`ScrollToTop.js`).

---

## 2. Global Elements

### 2.1 Header / Nav

Sticky. Transparent over the hero on home → solid white on scroll. Just the logo + a single CTA (no nav links, no hamburger — single-page site).

- **Logo** (links Home)
- **Primary CTA:** `Request a Demo` (opens demo modal) — accent-filled with a nudging arrow, the clear focal action. — **in code**

### 2.2 Footer

The whole bottom of the site, consolidated into one clean navy footer. **No marketing copy** — just the ability to send a message plus the essentials. — **in code (`Footer.js`)**

- **Top row** (two columns):
  - Left (brand): inverted logo + slogan `We speak seafood.` + email `hello@nammu.ai` (mailto, mail icon) + LinkedIn icon button → `https://www.linkedin.com/company/nammu-ai`
  - Right: a compact **message form** in a light (white) card on the navy footer. Fields: Name*, Email*, Company, Phone, Message → `Send message`. Posts to `https://website-backend-blush.vercel.app/send-email` (to `hello@nammu.ai`); success/error inline.
- Single hairline rule, then **bottom row:** `© {year} Nammu, Inc. All rights reserved.` (left) · `Privacy Policy` · `Terms of Service` (right).
- White text, dimmed secondary elements, accent hover states. The page ends FAQ (white) → this footer (navy).

### 2.3 Demo Request Modal

Triggered by any "Request a Demo" CTA. **Single clean column** with one clear primary path (the form). Blurred backdrop, gentle entrance animation, accent focus rings; honors reduced-motion. Intentionally light on text.

- Heading: "Request a demo"
- Subtitle: "We'll be in touch within one business day."
- Fields: Full Name*, Company Name*, Email Address\*, Phone Number, "What problems are you hoping to solve?"
- Submit: **Request demo** (accent button, full width); shows "Sending..." while submitting
- Secondary path (de-emphasized link, below a divider): "Prefer to pick a time? **Book a meeting →**" → `https://calendar.app.google/7euKD4X9tD61rPTf9` (opens new tab). Kept as a small link so it doesn't compete with the form.
- Success: "Thank you! Your request has been sent. We'll contact you within 1 business day."
- Error: "There was an error sending your request. Please try again or contact us at hello@nammu.ai."
- Backend: POSTs to `https://website-backend-blush.vercel.app/send-email`, to `hello@nammu.ai`.

---

## 3. Home (single scroll)

Section order: **Hero → Testimonials → The Seafood Problem (why we exist) → Product Overview (what we build) → Business Impact → Founders → FAQ.** The contact/message form lives in the footer (there's no separate Final CTA band). (Testimonials lead high since trust is the currency in seafood; "what we build" is immediately followed by the business impact it delivers; the founders block bridges into Why Nammu.) Section backgrounds alternate surface/white for rhythm.

### 3.1 Hero

Contained two-column hero, consistent with the rest of the site (sleek, not full-bleed): headline / subhead / single CTA on the left over a restrained light gradient; a single real seafood photo in a clean rounded frame on the right. Header is transparent-over-light (navy) on the home page, solid white on scroll. No em dashes in body copy (brand preference). Keep seafood-specificity to the slogan + one subhead mention; don't over-repeat.

- **No eyebrow.**
- **Headline:** `We speak seafood.` — **in code** (the brand slogan)
- **Subhead:** Nammu is the **seafood industry's trusted software partner**, offering a holistic AI sales and procurement platform, custom builds, and workflow automation. — **in code** *("seafood industry's trusted software partner" is highlighted navy/bold and kept on one line on desktop; "AI" used once)*
- **CTA:** `Request a Demo` (opens demo modal) — single, accent-filled, large, with a nudging arrow. The home page's primary job is to drive demo requests, so this is the clear focal action. — **in code**
- **Capability chips:** under the CTA, a row of small summative chips with icons — `AI-powered`, `Sales & procurement`, `ERP-integrated` — high-altitude positioning (the tech, the breadth, the fit), not a feature list. Signals that Nammu is software/AI since the imagery already covers the industry half. Adds density. — **in code**
- **Visual:** **No product screenshots, no carousel.** A sleek layered editorial mosaic of real seafood-industry photos on the right, spanning the whole supply chain (boats → docks → aquaculture → processing): one large focal card with a stacked column of smaller cards, white borders, soft shadows, gentle floating motion, and subtle pointer-parallax depth. Contained (not full-bleed). Honors reduced-motion. Built in `HeroCollage.js` from five images in `src/assets/`: `hero1.jpg` (salmon line), `hero2.jpg` (aquaculture tanks), `hero3.jpeg` (processing floor), `hero4.jpg` (unloading at the dock), `hero5.jpg` (boat at the harbor). `[[PLACEHOLDER: hero1–5 are client stand-ins — swap for final licensed/retouched shots]]`

### 3.2 Testimonials

Leads high since trust is the currency in seafood: credible names before the pitch. A featured quote (industry-association endorsement) + two supporting cards. Each **leads with the source** — company logo, then name and role — with the quote as secondary supporting text, since who is vouching matters more than the exact wording. Reveal-on-scroll animation. — **in code (`Testimonials.js`)**

- **Eyebrow:** `Trusted in the industry`
- **Section header:** `Built with the people who move seafood.`

**Featured testimonial (NFI Sushi Council — association endorsement leads):**

> "Nammu gives the NFI Sushi Council the infrastructure to organize, engage, and activate our membership in a far more meaningful way. As we grow the council, the platform helps us turn individual companies into a connected network with a stronger collective voice, greater visibility, and more impact across the sushi and seafood industry."
> — **Dick Jones**, Executive Director, **NFI Sushi Council** (logo: `NFI Logo.jpg`)

**Supporting testimonials (Stavis Seafoods, logo `Stavis.png`):**

> "Nammu has made our team more efficient and productive, with clear visibility into customer behavior and ordering patterns so our sales team can focus on selling. What stands out most is the team's understanding of the fast-paced seafood business. Nammu has helped bring our 98-year-old company into the future."
> — **Todd Rushing**, VP Sales, **Stavis Seafoods**

> "Working with the Nammu team has been a great experience. They took the time to understand our day-to-day sales needs and delivered a platform we use daily, with data that's easy to navigate and act on. We're grateful for the partnership and look forward to continuing to work together."
> — **Tiffany Walker**, Sales Manager, **Stavis Seafoods**

- `[[PLACEHOLDER: additional testimonials from other companies to broaden beyond Stavis + NFI]]`

### 3.3 The Seafood Problem

Why generic food software breaks; the "why we exist" argument, placed under the founders/social-proof block. Eyebrow + title only (consistent with sections above). Four concise cards, each with an **icon**, then an optimistic closing panel that reframes the problem as an opportunity.

- **Eyebrow:** `Why we exist`
- **Section header:** `Generic software wasn't built for seafood.`
- **Problem points** (icon + copy each):
  1. **Volatile supply and pricing** (trend icon) — Supply and price shift constantly. Meeting that pace requires real-time information, accurate forecasts, and intuitive workflows.
  2. **Expansive product catalogs** (layers icon) — Seafood has its own vernacular, from container building to product transformations. It needs software built for it.
  3. **Relationship-driven sales** (people icon) — Deals close through trust built over years. Software should support those relationships, not interrupt them.
  4. **Data trapped in legacy ERPs** (database icon) — Legacy ERPs were built for accounting, not sales or purchasing. The data is there, but teams can't reach it in time.
- **Closing band** (sleek two-column: copy on a plain white left, a real seafood photo on the right; restrained, not a heavy block). Currently uses `public/heroimage.jpg`. `[[PLACEHOLDER: swap for a more appetizing "best protein" hero shot if available]]`
  - Title: `The world's best protein deserves better software.`
  - Line: "Among the healthiest and most sustainable proteins on earth, yet one of the most underserved by technology. That's why Nammu exists."

### 3.4 Product Overview ("What we build")

The "what we build" overview: two ways to work with Nammu (the platform, or a custom build), linking to the Product page. **Two equal-size light cards**, each with a visual at the top: Platform (with a capability checklist) + Custom Builds, then the CTA. — **in code (`ProductOverview.js`)**

- **Platform card visual:** a live **app-window showcase** that auto-cross-fades through 5 real product screenshots (`Platform1`–`Platform5.png`), each labeled — Business intelligence, Sales dashboard, AI Chatbot, Automated outreach, CRM — with clickable dots. Doubles as a tour of the platform's breadth. (`PlatformShowcase.js`)
- **Custom Builds card visual:** a simple, flashy **animation** that fills the card — a spreadsheet (`inventory.xlsx`) auto-populating its cells in a cascading, glowing wave, with a pulsing "⚡ Populating" badge — conveys "we automate the manual work." Loops; honors reduced-motion. (`CustomBuildsAnimation.js`)

- **Eyebrow:** `What we build`
- **Section header:** `Two ways to work with Nammu.`
- **Supporting line:** Whether you're ready for a full platform or just need one manual workflow automated, we meet you where you are.

**Path 1 — The Platform** (card, equal height):
- Title: "Sales and procurement, in one place"
- Blurb: Modular by design, so you use just the modules you need.
- Capabilities (checklist): Demand forecasting · CRM · Live inventory · Automated outreach · Direct order portal · Business intelligence · Order entry · Nemo (AI chatbot)

**Path 2 — Custom Builds** (card, equal height):
- Title: "We'll build what you need"
- Blurb: Tailored to the job, so you skip the manual work.
- Build list (8, arrow markers, parallel to the Platform checklist, no label): Inventory reconciliation · Order entry · Data pipeline · Spreadsheet automation · Custom reports & exports · Price list updates · ERP integrations · Invoice processing

- **CTA:** `Learn more` (prominent navy primary button, large, with arrow — consistent with the Founders "Meet the team" button) → **opens the demo modal** (no product page; the way to learn more is to book a demo).

(Business impact is its own section, §3.5.)

### 3.5 Business Impact

Business impact, pulled out of the product overview into its own section so it isn't lumped in with "what we build." Three stat cards (icon + big number + line) covering time savings, sales, and purchasing. — **in code (`Impact.js`)**

- **Eyebrow:** `Business impact`
- **Section header:** `What changes when you run on Nammu.` *(general framing; the figures below are illustrative, not claimed as measured)*
- Stat cards (large number + line, content vertically centered) `[[PLACEHOLDER: figures are illustrative — replace with verified metrics]]`:
  - **40%** (clock icon) — less time spent on manual work
  - **20%** (trend icon) — lift in profitability across the business
  - **99.9%** (check icon) — accuracy across AI and automation

### 3.6 Founders

The "founders in the field" block — embedded-in-the-industry proof, placed after "what we build" so it bridges into Why Nammu. Its own standalone section (white background). — **in code (`Founders.js`)**

- **Eyebrow:** `In the field`
- **Section header:** `We're part of the seafood community.` *(about being embedded, not posturing expertise)*
- **Subtitle:** We meet you where you are. Book a demo at the next event, or we'll come to you. *(conveys we'll meet clients at events/conferences or visit them)*
- A **flush photo collage** of all 6 real founder photos from across the industry (Seafood Expo Global, the show floor, with industry leaders, the NFI Global Seafood Market Conference where Nammu sponsored). `founders4.jpeg` is a tall full-body shot, so it anchors the collage as a **vertical** image on the left, with three across the top and two equal-width landscape shots across the bottom (8-col grid), all flush with no bad crops. Rounded with soft shadow. Source: `src/assets/founders1.jpeg`–`founders6.jpeg`. — **in code**
- **CTA:** `Book a demo` (prominent navy primary button, large, with arrow) → **opens the demo modal** (no About page). — **in code**

### 3.7 FAQ

A plain FAQ accordion (the "Why Nammu" differentiators block was removed). Eyebrow + title, then expandable questions. — **in code (`FAQ.js`)**

- **Eyebrow:** `FAQ`
- **Section header:** `Your common questions, answered.`
- **Questions:**
  - **Do we have to replace our ERP?** No. Nammu layers on top of your existing ERP and delivers value without a migration.
  - **What if we're not ready for a full platform?** That's common in this industry. We also do custom builds that automate manual workflows without committing to a platform.
  - **Which systems does Nammu integrate with?** Microsoft, SeaSoft, SAP, NetSuite, NetYield, QuickBooks, and more.
  - **How long does it take to get started?** We move quickly. Where a typical ERP transition takes 9 to 12 months, most teams are up and running on Nammu in 1 month.
  - **Is Nammu a CRM?** CRM is just one part of the Nammu platform, among many other sales and procurement tools.
  - **What makes Nammu seafood specific?** Our focus on seafood goes beyond the companies we serve. The product handles the seafood-specific nuances generic software ignores, like catch weight, product transformations, and container building.

(No separate Final CTA section — the message form lives in the footer; see §2.2.)

---

## 4. About Us — no dedicated page

**Decision:** there is no `/about` route. The founder/community story is carried on the home page by the **Founders / "In the field"** section (§3.6) — real photos of the team across the industry, plus the "we meet you where you are" message. The CTA there opens the demo modal rather than linking to an About page.

Held for later if an About page is ever revived: founder bios, origin story / founder-market-fit, why-seafood-why-now, advisors. `[[PLACEHOLDER: not built]]`

---

## 5. Product — no dedicated page

**Decision:** there is no `/product` route. The home page carries the product story (the Platform showcase in §3.4 + Custom Builds + Business Impact), and the path to learn more is to book a demo. All "Learn more" CTAs open the demo modal.

Reference detail that lives on the home page or is held for the demo:
- **Platform capabilities:** Demand forecasting · CRM · Live inventory · Automated outreach · Direct order portal · Business intelligence · Order entry · Nemo (AI chatbot)
- **Custom Builds examples:** Inventory reconciliation · Order entry · Data pipeline · Spreadsheet automation · Custom reports & exports · Price list updates · ERP integrations · Invoice processing
- **Integrations:** Microsoft, SeaSoft, SAP, NetSuite, NetYield, QuickBooks, and more (surfaced as the hero "ERP-integrated" chip; no standalone integrations section on the site).

---

## 6. Legal Pages

- `/privacy` — Privacy Policy (existing copy, keep as-is unless noted). `[[PLACEHOLDER: review needed?]]`
- `/terms` — Terms of Service (existing copy, keep as-is unless noted). `[[PLACEHOLDER: review needed?]]`

---

## 7. Asset & Placeholder Inventory

Running list of everything still needed. Update as we fill in.

**Copy**

- Confirm hero headlines (Home now `We speak seafood.`; About; Product)
- The Seafood Problem — finalized problem points
- FAQ answers (implementation time, security, pricing)
- About: full story, why-now, founder bios, advisor list
- Product: capability deep-dive detail copy (per platform feature)
- Custom Builds: real examples / mini case studies
- Additional testimonials beyond Stavis

**Images / Visuals**

- Hero product screenshot(s) — Home & Product (existing: `Product1–5.png`, `iPad.jpg`)
- Team headshots (About)
- Advisor headshots (About)
- Integration/customer logos cleared for display (existing assets: `BC.png`, `SeaSoft.png`, `SAP.png`, `NetSuite.png`, `NetYield.png`, `Stavis.png`, `NFI Logo.jpg`, `GSMC*`)
- Final logo / favicon set (existing: `logo.png`, `invertedlogo.png`, `logo192/512.png`)

**Decisions**

- Font selection (headline + body) — _currently Inter for both; headline font TBD_
- Final accent color & gradient — _currently `#1f7fc2` accent; hero & CTA gradients in code, confirm_
- Mobile nav pattern — **decided: hamburger → dropdown menu (in code)**
- Footer nav columns y/n — _not added; footer kept minimal_
- Hero: single screenshot vs. carousel — **decided: single screenshot (in code)**
- Trust/logo strip placement & which logos — _placeholder strip rendered under hero; logos TBD_

**Known facts (confirmed)**

- Slogan: **"We speak seafood."**
- Seafood-only B2B (companies, distributors, wholesalers); never non-seafood
- Two offerings: the Platform + Custom Builds
- Platform capabilities: demand forecasting, CRM, live inventory, automated outreach, direct order portal, business intelligence, order entry, Nemo (AI assistant)
- AI assistant is named **Nemo**
- Contact: `hello@nammu.ai`
- LinkedIn: `linkedin.com/company/nammu-ai`
- Booking link: `https://calendar.app.google/7euKD4X9tD61rPTf9`
- Customer: Stavis Seafoods (98-year-old company)
- Systems referenced: Microsoft, SeaSoft, SAP, NetSuite, NetYield, QuickBooks
- Email backend: `https://website-backend-blush.vercel.app/send-email`
