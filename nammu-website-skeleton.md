# Nammu Website — Source of Truth

This document is the **single source of truth** for the Nammu marketing site: its
architecture, design system, and **all copy**. When code changes, this file changes
with it, and vice versa. Anything not yet decided is marked `[[PLACEHOLDER: …]]`.

A **single-page** marketing site: everything lives on **Home** (capabilities, team, press), plus legal pages. Social proof leans
on named industry testimonials; seafood specialization runs throughout.

> **Implementation status (2026-06-17):** New architecture, design system, and all
> pages are built. Home (`/`) and About (`/about`) are live in
> code; legal pages unchanged. **There is no longer a dedicated Product page** —
> product capabilities now live on the home page as a series of horizontal
> "jobs-to-be-done" sections (§3.5). **Press is no longer its own page/tab** — its
> coverage is folded into a home-page section (§3.6). The header carries real nav (About +
> Book a Demo) with a mobile hamburger. Copy below is
> what ships today; `[[PLACEHOLDER]]` markers are still open and rendered visibly on
> the site until filled.

---

## Positioning & Brand

**Tagline:** "AI for Seafood" (was "Reimagining seafood software.")

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

- Global reset: `*, *::before, *::after { box-sizing: border-box; }` in `index.css` so `width: 100%` + padding never overflows the viewport. — **in code**
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
| `/` | **Home** | The whole story on one scroll — hero, testimonials, capabilities, team, press, and FAQ. |
| `/privacy` | Privacy Policy | Legal (existing). |
| `/terms` | Terms of Service | Legal (existing). |
| `/hero` | LinkedIn banner | Utility: standalone LinkedIn cover (1128 × 191) to screenshot. Not in nav (`LinkedInBanner.js`). |

> **Single-page site.** The header has **no nav links** now — just the logo + a **Book a Demo** button (opens the demo modal). The home page carries everything: capabilities (§3.2), the **Our Team** section (§3.4) and **Press** (§3.6). `Book a Demo` everywhere opens the modal (the conversion action); the footer message form is unchanged. The previous `/old`, `/product`, `/press`, and `/about` routes were all removed.

**Global elements** (every page): Header / nav, Footer, Demo Request modal. Routing scrolls to the top of the page on every navigation (`ScrollToTop.js`).

---

## 2. Global Elements

### 2.1 Header / Nav

Sticky. Transparent over the hero on home → solid white on scroll (and solid white on all other routes). Logo + nav links + primary CTA. — **in code (`Header.js`)**

- **Logo** (links Home)
- **Nav links (anchor tabs, in page order):** `Product` (→ `#capabilities`), `Team` (→ `#team`), `Press` (→ `#press`), `FAQ` (→ `#faq`). On the home page they **smooth-scroll** to the section; from a legal page they navigate to `/#id` and `ScrollToTop` scrolls there once it renders. Navy, accent on hover. On mobile they live in the hamburger dropdown (with the CTA).
- **Primary CTA:** `Book a Demo` (opens demo modal) — accent-filled with a nudging arrow, the clear focal action.
- **Mobile:** the links collapse into a **hamburger → dropdown** (links + Book a Demo); the bar goes solid white while open.

### 2.2 Footer

The whole bottom of the site, consolidated into one clean navy footer. **No marketing copy** — just the ability to send a message plus the essentials. — **in code (`Footer.js`)**

- **Top row** (two columns):
  - Left (brand): inverted logo + email `hello@nammu.ai` (mailto, mail icon) + a **white** LinkedIn icon button (translucent-white circle, was light-blue) → `https://www.linkedin.com/company/nammu-ai`. **No text slogan** (the "AI for Seafood" line was removed).
  - Right: a compact **message form** in a light (white) card on the navy footer. Fields: Name*, Email*, Company, Phone, Message → `Send message`. Posts to `https://website-backend-blush.vercel.app/send-email` (to `hello@nammu.ai`); success/error inline.
- Single hairline rule, then **bottom row:** `© {year} Nammu, Inc. All rights reserved.` (left) · `Privacy Policy` · `Terms of Service` (right).
- White text, dimmed secondary elements, accent hover states. The page ends FAQ (white) → this footer (navy).

### 2.3 Demo Request Modal

Triggered by any "Book a Demo" CTA. **Single clean column** with one clear primary path (the form). Blurred backdrop, gentle entrance animation, accent focus rings; honors reduced-motion. Intentionally light on text.

- Heading: "Book a demo"
- Subtitle: "We'll be in touch within one business day."
- Fields: Full Name*, Company Name*, Email Address\*, Phone Number, "What problems are you hoping to solve?"
- Submit: **Request demo** (accent button, full width); shows "Sending..." while submitting
- Secondary path (de-emphasized link, below a divider): "Prefer to pick a time? **Book a meeting →**" → `https://calendar.app.google/7euKD4X9tD61rPTf9` (opens new tab). Kept as a small link so it doesn't compete with the form.
- Success: "Thank you! Your request has been sent. We'll contact you within 1 business day."
- Error: "There was an error sending your request. Please try again or contact us at hello@nammu.ai."
- Backend: POSTs to `https://website-backend-blush.vercel.app/send-email`, to `hello@nammu.ai`.

---

## 3. Home (single scroll)

Section order: **Hero → Testimonials (scrollable trust cards) → Capabilities (5 jobs-to-be-done) → CTA band (mid-scroll "Book a Demo") → Our Team → Press (carousel) → FAQ.** Everything lives on the home page — **there is no longer an `/about` page** (the team was folded in, §3.4) and the **"Nammu in the wild" photo gallery was removed**. **Testimonials sit immediately under the hero** so trust lands right away (the hero's wave divider dissolves into them); the hero leads into the **product story** (capabilities), then a **mid-scroll CTA band** (§3.3a) that gives the viewer a place to book a demo without scrolling back up, then the **Our Team** credential cards (who's building it), then **Press** coverage, then FAQ. No "Why we exist" / Seafood Problem essay and no mission statement (the capability panels already show those problems being solved). The contact/message form lives in the footer (no separate _final_ CTA band, but there is the mid-scroll CTA band above). Section backgrounds alternate for rhythm: Testimonials `surface` (the hero's wave divider fills `surface` to match) · Capabilities intro `white`, rows alternate `surface`/`white` (ending `surface`) · CTA band soft accent-tint gradient (`#eef5fc → #e7f0fa`, hairline top/bottom) · Our Team `white` · Press `surface` · FAQ `white` (then the navy footer).

### 3.1 Hero

**Single, centered, above-the-fold band** (`min-height ~86vh`), built in `Hero.js`. Its job: situate what Nammu is, feel alive (seafood + AI/software, no UI), drive a demo, and segue into the capabilities without feeling abrupt. **No product screenshots, no two-column layout** — both were removed. Header is transparent-over-light (navy) on the home page, solid white on scroll. No em dashes in body copy (brand preference). Fully fluid via `clamp()`. **The hero (and the §3.2 product intro) deliberately lead on _positioning_, not "software/platform":** Nammu is framed as a partner that does things _for_ seafood teams (capabilities that resonate), not a platform they must adopt — the viewer's mental image is intentionally looser than "a product." The footer tagline is `AI for Seafood` (§2.2).

- **No logo up top** (the standalone hero logo, its glow, and rising bubbles were removed — the brand presence now comes from the swimming logo-fish in the backdrop and the bubble device below).
- **Headline:** `Bringing AI to Seafood` — **in code** (title case, no period — a brand-tagline treatment; `AI` is rendered with a **teal→accent gradient** for a pop of brand color). Kept to **one line** via `white-space: nowrap` + a `clamp()` font that scales down on narrow screens. (Iterated: `Seafood's first AI partner.` → `AI built for seafood.` → `Seafood's trusted AI partner.` → `Bringing AI to seafood.` → `Seafood's Trusted AI Partner` → `Bringing AI to Seafood`.)
- **Rotating capability line (the key device):** `Helping your team ` + a cycling phrase that **rides inside a glassy "bubble"** (a pill with a soft top sheen, a small catch-light, and a frosted `backdrop-filter`). The bubble is a **fixed width = the longest phrase**: invisible sizers (one per phrase) overlap in a single inline-grid cell to set the slot width, and the pills are **absolutely positioned to fill that box** (so the pills take no part in sizing — only the sizers do). The phrase is **centered inside** the constant-width pill, so it never resizes and **`Helping your team` never shifts**. Each new bubble **floats up from below to carry the words into place** (`nm-bub-in`) while the outgoing one **pops away quickly in place** (`nm-bub-out`, slightly delayed so phrases never overlap at a readable opacity; the outgoing bubble is dropped after ~420ms). Phrases are **outcome-focused** (what a decision-maker cares about, not literal product features), kept ~15–18 chars so each looks balanced in the fixed pill (6 total): `grow your business` · `win new accounts` · `boost your margins` · `move more product` · `forecast demand` · `automate busywork`. Reduced-motion shows the first phrase statically (no bubble). — **in code (`BubblePhrase`)**
- **CTA:** a single `Book a Demo` (accent, arrow, opens demo modal — the focal action) with a **soft pulsing glow** to draw the eye. (The label is `Book a Demo` everywhere now — hero, header nav, About, and the modal heading.) Earlier tries that were removed as not-belonging/ugly: a secondary `See what we do` button, an `AI for seafood sales & procurement` eyebrow chip, an `As featured in` press-logo strip, and an "Up and running in weeks…" reassurance line. The hero's substance/life now comes from the headline, the bubble line, and the animated backdrop rather than extra rows. — **in code**
- **Segue into testimonials:** no scroll-cue chevron and no secondary button — the §3.3 testimonial cards sit tight under the hero and **peek above the fold**, so the hand-off into the trust strip happens organically as the viewer scrolls.
- **Backdrop (seafood + AI/software, no UI):** a drifting **aurora** of three blurred brand blobs (accent + teal + a soft accent-soft glow low-center), three layers of **flowing current/wave lines** (tiling wave strokes scrolling horizontally) in the lower third, a handful of faint **Nammu logo-marks swimming** across the lower "water" like little fish, and ~10 small glassy **bubbles drifting up** through the whole hero (varied size/speed/drift) for underwater life. The base gradient keeps a light-blue tint at the bottom (not pure white) so the divider reads. Brand colors only; the fish/bubbles render only when motion is allowed (reduced-motion shows a calm static scene). — **in code**
- **De-sparsing (kept):** the rotating bubble line is **enlarged** for prominence, a soft **radial spotlight** sits behind the content so the text reads off the busy backdrop, and the **vertical spacing between the three lines (headline · bubble line · CTA) was loosened** for more breathing room (then dialed back to a middle once it read too airy). (Pointer parallax was tried and **cut**.) — **in code**
- **Wave divider (the seamless hand-off):** a two-layer SVG **wave** (accent-soft behind, `surface` in front) along the hero's bottom edge that dissolves the hero into the `surface` **Testimonials** strip (§3.3) directly below, so the transition is continuous rather than a hard cut. — **in code**
- *(Removed: the product-screenshot collage `HeroCollage.js` and the logo-orbit `HeroVisual.js`; the `hero1–5.png` screenshots are no longer used by the hero, only referenced as style cues in the capability graphics' comments. The earlier static subhead and the faint grid were dropped in favor of the chips + current/wave visuals.)*

### 3.2 Capabilities (jobs-to-be-done)

The product story, told on the home page as a series of **horizontal sections — one per job to be done**, right after the hero. Each row is two-column (copy + an animated, code-built graphic), alternating which side the graphic sits on. **Responsive behavior:** on desktop the copy hugs the outer edge of its column (left on normal rows, **right-aligned on the reversed/animation-left rows**) so both row types fill the width symmetrically; on **mobile/tablet** (≤900px) the row stacks text-then-graphic and the copy is **centered** (so the full-width graphic doesn't strand it against the left edge). Graphics are built at a fixed 16:10 design size and **scaled to fit their frame** (via a measured-width wrapper), so they keep exact proportions and never clip/distort at any width. Each graphic is a first-pass, refinable animation; all honor `prefers-reduced-motion`. — **in code (`Capabilities.js`, graphics in `CapabilityGraphics.js` + reused `CustomBuildsAnimation.js`)**

- **Intro (two clear parts — the ways we work, then a hand-off to example capabilities):** eyebrow `What we do`, header `We meet you where you are.`, subtitle `Whether it's fixing one nagging process or revamping your tech stack.` Then **three "ways we work" cards** in a row (icon in a rounded-square tile + title + a concise one-line description). Each card's icon has its **own color** on a matching soft tile so they read as distinct:
  - ⚡ **Workflow automation** (blue `accent`) — *Tedious manual work, like reconciling inventory, automated.*
  - `</>` **Custom software** (teal) — *Built to fit how you work, like a bespoke forecasting system.* (the "fits your existing operation" spirit + a concrete example, ~same length as the other two)
  - ▦ **AI platform** (indigo `#5b62e0`) — *A full sales and purchasing suite, use only what you need.* (modular / pick-what-you-need, without saying "à la carte")
  Then a **transition cue** into the rows — the label `A few examples` with a **bouncing down-chevron** — which, with the background flip to the first `surface` row, reads clearly as "the example capabilities are below." (Replaced the earlier floating icon+label chips, which didn't read as a unit.)
- Capability copy is **scannable bullets, not prose** (a few-seconds read; clear key takeaways). The **AI assistant leads**.
- **The five jobs** (copy is first-pass; refine freely):
  1. **AI assistant** — "Ask for any report." Bullets: *Build complex reports in plain language · Answers that took days, back in seconds.* *Graphic (`AssistantGraphic`):* a full Nemo chat — the header shows the **Nammu logo mark (`/logo512.png`)** next to "Nemo / AI assistant" in the top-left — where **the user is shown typing the request into the input bar** (character-by-character with a blinking caret; the text fills the bar and scrolls like a real input), then it sends — a complex plain-language request ("Build a Q2 margin report by SKU, compare to last year, and flag accounts trending down"), a multi-step "working" pass (pulled orders → joined 2025 → computed margin by SKU), then the built report (a margin-by-SKU table of realistic items like "20/30 Skin-On Salmon Filet" with vs-LY deltas + a "3 accounts trending down" flag, which **stays on screen** through the export turn), then the user **types** "Export this to Excel" → a downloadable `q2-margin-by-sku.xlsx`. (The separate "Real-time dashboards" row was removed.)
  2. **Lead tracking** — "Win new accounts." (headline framed on the decision-maker outcome, not IC-level lead hygiene). Bullets (short, framed on what the software delivers — oversight + a pipeline — not on the leader having to prioritize): *See exactly who your team is pursuing · A steady pipeline of new business.* *Graphic (`LeadsGraphic`):* a looped, choreographed interaction with a Board/Map toggle. **Board** — a **Kanban pipeline** (New → Contacted → Qualified → Converted, search field, "4 converted / 2026 target 8" progress bar) where a **visible cursor moves to the "Harbor Tide Co." card in Contacted and clicks it** to open a **compact lead-detail card** (mirrors `LeadCard.png`: name + status pill, `SENA` tag, fields — Location / Products of interest / Est. annual revenue / Primary contact — and a "Call Tim" task). The cursor then **checks off the "Call Tim" task** (checkbox fills, title strikes through), the **card closes**, and it **toggles to the Map** — a recognizable lower-48 silhouette (traced from real lat/lon landmarks) of accounts by location with pins popping in (echoing `hero4.png`). Then it loops. (No drag-and-drop.)
  3. **Live inventory** — "Always know where you stand." Bullets lead with the two takeaways (time savings + accuracy, without over-claiming): *Save hours of manual reconciliation · Inventory you can actually trust.* *Graphic (`InventoryGraphic`):* a two-view, looped interaction. **List** — `Live inventory` + a pulsing `● LIVE` badge, a **sync strip** (`Auto-synced from` + the **Microsoft Business Central** and **Lineage** logos, with **dots flowing** along a connector) feeding a live table (SKU · On hand · Available · **Incoming** — quantity on the row baseline with its **ETA date below**) whose cells tick/flash automatically. A **cursor clicks the "16/20 White Shrimp" row** → the **Detail** for that SKU: On hand / Available / Committed KPIs; a **Stored at** section badged with the **Lineage** logo (Boston 9,400 lb · Newark 4,660 lb); and a **Recent activity ledger** badged with the **Business Central** logo (Date · Activity · **Change** · **Balance**) showing how on-hand progressed to today — `Jul 5 Sold to Ocean Crest −1,200 → 14,060` · `Jul 2 Received shipment +3,000 → 15,260` · `Jul 1 Opening balance → 12,260` (top balance ties to the On-hand KPI). Then it loops.
  4. **AI outreach** — "Grow every account." (business impact = growing revenue from existing accounts). Bullets (AI surfaces the opportunity an overwhelmed rep misses → bigger/more frequent orders; **no "Nemo" in marketing copy** — not formally introduced on the site): *AI spots the opportunities you'd miss · Bigger, more frequent orders.* *Graphic (`OutreachGraphic`, modeled on the app's "Next action" column in `nammu-frontend/SalespersonBottomContent.js`):* a two-view, looped flow. **List** — `My accounts` + a `Nemo insights` pill; an Account / **Next action** table where each next action is a **Nemo insight cell** (Nemo logo + actionable text with a bolded count + chevron; **teal** = opportunity, **yellow/amber** = lapse risk): `2 SKUs due to reorder` · `3 new SKUs they'll likely buy` · `1 go-to item is slipping` (yellow) · `No order in 3 weeks` (yellow). A **cursor clicks the lapse insight** ("No order in 3 weeks" → Coastal Catch Co.) → the **Detail**: the account + an amber `At risk` tag; an **Order cadence** timeline (evenly-spaced past-order ticks, then a long **red overdue stretch** to a red "Today" marker — the gap is visibly far wider than the usual `~weekly` cadence, ≈ 21 days); and the re-engagement email **being drafted by the AI** — a prominent `[Nemo logo] Nemo is drafting …` header (pulsing logo + animated dots) while the **body types in** (caret), the **Send button stays muted/disabled until the draft finishes**, then a `Drafted by Nemo` state with a **channel toggle** (email/text/call, email active). **Only after the draft is done** does the cursor **click Send → "Sending…" → "Sent ✓"** (the full execute flow). Then it loops.
  5. **Demand forecasting** — "Optimize every purchase." (CEO-level framing: today every buyer keeps a custom Excel sheet; Nammu automates the forecasting and unifies purchasing). Bullets (key takeaways only, detail lives in the graphic): *Automated forecasting, no spreadsheets · Avoid stockouts and overbuying.* *Graphic (`ForecastGraphic`):* a two-view, looped interaction. **List** — a **shrimp SKU purchasing table** (SKU · On hand · Price · Margin · **Position**), where Position is a long/short key pill (Long = amber overstocked · Healthy = green · Short = red, needs purchase). A **cursor moves to the short "21/25 Black Tiger Shrimp" row and clicks it**, opening the **Detail** — that SKU's 4wk/13wk toggle, KPI tiles (Avg burn rate 1,800 lb/wk · On hand 2,400 lb · ~1.3 weeks of cover), a **static** inventory **draw-down chart** (solid on-hand history hands off at "Now" to a dashed projection that crosses the **red dashed reorder line**, marked "Jul 8" — no "Reorder point" text label, no chart animation), and a **Recommended order** banner with quantity + date (`9,000 lb · by Jul 8`). Then it loops.
- `[[PLACEHOLDER: graphics + copy are a starting point — refine per capability.]]`

### 3.3 Testimonials (scrollable trust strip, right under the hero)

Social proof placed **immediately under the hero, with no heading**, so it reads as **part of the hero** rather than a separate section (a heading there broke the flow). The hero's wave divider dissolves into it (`surface` bg) and the top padding is tight so the cards sit right under the hero. **Full cards, always visible** — on desktop a **3-up grid** (all three at once); on mobile they **swipe** horizontally (scroll-snap, hidden scrollbar). **No edge-fade mask.** Each card = a decorative quote mark, a **short punchy pull**, then logo + name + role. Leads with NFI (association endorsement). — **in code (`Testimonials.js`)**

- **Light framing** above the cards: just the eyebrow `Trusted in the industry` (the lead line was dropped). The displayed quotes are **shortened pulls** (the full quotes were too long for cards):
  - **Dick Jones**, Executive Director, **NFI Sushi Council** (`NFI Logo.jpg`) — *"Nammu gives the NFI Sushi Council the infrastructure to organize and activate our membership, turning individual companies into a connected network with greater visibility and impact."*
  - **Todd Rushing**, VP Sales, **Stavis Seafoods** (`Stavis.png`) — *"Nammu made our team more efficient and productive, with clear visibility into ordering patterns so our sales team can focus on selling. They get the fast-paced seafood business."*
  - **Tiffany Walker**, Sales Manager, **Stavis Seafoods** — *"They took the time to understand our day-to-day sales needs and delivered a platform we use daily, with data that's easy to navigate and act on."*
- `[[PLACEHOLDER: additional testimonials from other companies to broaden beyond Stavis + NFI]]`

### 3.3a CTA band (mid-scroll "work with us")

A light conversion band placed **right after the capabilities** (`CTA.js`), so a viewer who has just seen what Nammu does has a place to act without scrolling back up to the nav/hero. **Deliberately not a repeat "Book a Demo" navy block** — it **continues the "we meet you where you are / many ways to work with us" narrative** and is framed **consultatively** (tell us your problem, we'll figure out what fits), so it doesn't read as "watch this one fixed product." — **in code (`pages/sections/CTA.js`)**

- **Background:** soft accent-tint gradient (`linear-gradient(120deg, #eef5fc → #e7f0fa)`) with hairline top/bottom rules and a faint white center glow — a gentle divider, **not** the earlier hard navy block (which read as too aggressive for a mid-page break).
- **Eyebrow:** `Work with us`
- **Title:** `Let's find what fits your operation.`
- **Subtitle:** `Tell us how your business runs today, and we'll find where we can help most.` (kept short and **consultative / listen-first** — they tell us about the business, then we identify the **highest-impact** areas; concrete payoff (not the too-casual/open-ended "figure out the rest"), deliberately **not** a fixed-product pitch, and does **not** restate the title's "what fits" or re-explain the modes/capabilities above.)
- **CTA:** `Let's talk` (accent button, arrow) — opens the **same demo modal** as every other CTA; the softer label avoids the "fixed product demo" connotation since "Book a Demo" already appears in the nav and hero.

### 3.4 Our Team (credibility through people)

The old `/about` page was **folded into the home page**. Instead of a "why seafood" essay or a mission statement (the capability panels already demonstrate those problems being solved), we establish credibility through **people and presence** — show, don't tell. — **in code (`Team.js`)**

- **Our Team** (`white`, `id="team"`): eyebrow `Our team`, header `The people building Nammu.` A grid of **brief credential cards** — headshot, name, role, one or two **accolades** (small bulleted list), and a **relevant logo**. Then an **Advisors** sub-block (eyebrow `Advisors`, header `Guided by industry leaders.`) with the same card style.
  - Each card: **real headshot** + name (with an inline **LinkedIn icon** next to it) + a single accolade line + one or more logos (**no role/title**). Founders: **Ethan Huang** (`Brown University, Applied Math`, **Brown** logo), **Bert Vandereydt** (`MIT PhD, NFI Future Leader '26`, **MIT** + **NFI** logos), **Griffin McCauley** (`Brown University, Applied Math`, **Brown** logo). Advisor: **Derek Figueroa** — `Former CEO, Seattle Fish Company` · `Former Chair, National Fisheries Institute` (**Seattle Fish Co.** + **NFI** logos). Cards support **multiple logos in a row**, with per-card heights so the differently-proportioned marks read evenly. Visual treatment: a soft tinted-gradient card background with a blurred accent **glow** behind a **gradient ring** around each (enlarged ~112px) headshot, and a subtle **hover lift**. Headshots are web-optimized portraits (~700px wide, downscaled from the originals so they don't render grainy in the small avatar), cropped/zoomed per-person via CSS `background-size` + `background-position` so faces are centered and matched in size.
  - **LinkedIn links:** every card links to that person's LinkedIn — both an **inline icon beside the name** (slate, accent on hover) **and the headshot itself is clickable** (the photo/ring is wrapped in the same link). All open in a new tab. The name's line-height is tightened (`1.1`) so the inline icon centers consistently across cards. Profiles: Ethan `linkedin.com/in/ethanhuang218`, Bert `linkedin.com/in/bertvandereydt`, Griffin `linkedin.com/in/griffin-mccauley-187b6423a`, Derek `linkedin.com/in/derekfigueroa`.
- The **"Nammu in the wild" photo gallery was removed** (along with `Founders.js` and the six founder photos). FAQ is now the last section before the footer.
- *(Removed: the `AboutTeaser.js` home teaser, `About.js`, and the `/about` route. `SeafoodProblem.js` is now unused.)*

### 3.5 FAQ

A plain FAQ accordion (the "Why Nammu" differentiators block was removed). Eyebrow + title, then expandable questions. — **in code (`FAQ.js`)**

- **Eyebrow:** `FAQ`
- **Section header:** `Your common questions, answered.`
- **Questions** (answers grounded in the rest of the site; "Is Nammu a CRM?", "What is Nammu?", and "How does Nammu use AI?" were removed), in order:
  - **What if we're not ready for a full platform?** That's common in this industry. We also do workflow automation and custom builds without committing to a full platform.
  - **Which systems does Nammu integrate with?** The systems seafood teams already run, including Microsoft Business Central, SAP, NetSuite, SeaSoft, NetYield, and QuickBooks, plus cold-storage partners like Lineage and AmeriCold. Using something else? We'll connect to it.
  - **How long does it take to get started?** We move quickly. Where a typical ERP transition takes 9 to 12 months, most teams are up and running on Nammu in 1 month.
  - **Do we have to replace our ERP?** No. Nammu layers on top of your existing ERP and delivers value without a migration.
  - **What makes Nammu seafood specific?** Our focus on seafood goes beyond the companies we serve. The product handles the seafood-specific nuances generic software ignores, like catch weight, product transformations, and container building.

(No separate _final_ CTA section after FAQ — the message form lives in the footer (§2.2); the conversion band sits mid-scroll after the capabilities instead (§3.3a).)

### 3.6 Press (in the news)

Real coverage of Nammu, **folded into the home page** as the closing credibility section before the footer (it used to be a standalone `/press` page). — **in code (`pages/sections/Press.js`)**

- **Centered, single-column layout** (`surface`): heading, then the logo strip, then the article carousel.
- **Heading:** centered `SectionHeading` — eyebrow `Press`, title `Nammu in the news.`
- **"As seen in" strip:** the label `As seen in` on its **own row**, then a centered row of **seven outlet logos in white chips** (full color, per-logo heights tuned so the mixed wordmarks/marks read evenly), in order: **IntraFish · SeafoodSource · Expana · Undercurrent News · Perishable News · Seafood News · Yahoo**. (Lead logos are the priority outlets; the rest follow in no particular order. Conveys breadth of coverage beyond the few featured articles.)
- **Carousel:** **three** articles (the duplicate Stavis story is deduped to the Expana/SeafoodNews version), one at a time in a large centered card, with prev/next arrows + dots and auto-advance (paused under `prefers-reduced-motion`; crossfade on change). Each card = **outlet logo** · date · headline · excerpt · `Read article →` (the whole card links out in a new tab). SeafoodNews carries the **Expana** logo (its parent publisher), which ships on a dark background (`Expana Logo.png`) and gets rounded corners. Newest first:
  1. **IntraFish** — "'It's not like chicken': The AI startup betting on seafood's messiest data problem" (June 15, 2026).
  2. **IntraFish** — "AI seafood platform Nammu taps Derek Figueroa as strategic advisor" (April 15, 2026).
  3. **SeafoodNews** (Expana) — "Nammu Announces Full-Team Rollout at Stavis Seafoods…" (March 13, 2026).
- **Press inquiries:** `hello@nammu.ai` (centered, below the carousel).

---

## 4. About

**There is no longer an `/about` page.** Who-we-are now lives on the home page as the **Our Team** section — see **§3.4**. The standalone `About.js`, the `AboutTeaser.js` home teaser, and the `/about` route were removed; the "Why we exist" / Seafood Problem essay and the mission statement were dropped entirely (`SeafoodProblem.js` was deleted).

---

## 5. Press

**Press is no longer its own page.** Its coverage now lives as a section on the home page — see **§3.6**. The standalone `/press` route and `pages/Press.js` were removed.

---

## 6. Legal Pages

- `/privacy` — Privacy Policy (existing copy, keep as-is unless noted). `[[PLACEHOLDER: review needed?]]`
- `/terms` — Terms of Service (existing copy, keep as-is unless noted). `[[PLACEHOLDER: review needed?]]`

---

## 7. Asset & Placeholder Inventory

Running list of everything still needed. Update as we fill in.

**Copy**

- Confirm hero headlines (Home now `Reimagining seafood software.`; About) + the 7 capability section titles/copy
- The Seafood Problem — finalized problem points
- FAQ answers (implementation time, security, pricing)
- About: full story, why-now, founder bios, advisor list
- Capability sections (§3.5): refine the animated graphics + copy per job to be done
- Custom Builds: real examples / mini case studies
- Press: **populated** with 4 real articles (IntraFish ×2, Perishable News, SeafoodNews) and outlet logos in full color (`Intrafish Logo.png`, `Perishable News Logo.png`, `Expana Logo.png` — Expana = SeafoodNews's publisher; ships on a dark background, shown with rounded corners)
- Additional testimonials beyond Stavis

**Images / Visuals**

- Product screenshots for the hero / capability graphics (existing: `Product1–5.png`, `Platform1–5.png`, `iPad.jpg`)
- Team headshots (About)
- Advisor headshots (About)
- Integration/customer logos cleared for display (existing assets: `BC.png`, `SeaSoft.png`, `SAP.png`, `NetSuite.png`, `NetYield.png`, `Stavis.png`, `NFI Logo.jpg`, `GSMC*`)
- Final logo / favicon set (existing: `logo.png`, `invertedlogo.png`, `logo192/512.png`)

**Decisions**

- Font selection (headline + body) — _currently Inter for both; headline font TBD_
- Final accent color & gradient — _currently `#1f7fc2` accent; hero & CTA gradients in code, confirm_
- Mobile nav pattern — **decided: hamburger → dropdown menu (in code)**
- Footer nav columns y/n — _not added; footer kept minimal_
- Hero — **decided: a single centered above-the-fold band (`Hero.js`): small logo mark, the `Seafood's first AI partner.` headline, a typewriter that cycles "what Nammu does for you" capability phrases, Book a Demo + See what we do CTAs, a scroll cue, over a drifting aurora + faint grid backdrop. No product screenshots, no two-column layout.** Supersedes (in order): the logo-orbit visual `HeroVisual.js`, the product-screenshot collage `HeroCollage.js`, the single-screenshot, the seafood-photo mosaic, and the all-five-at-once mosaic. Rationale: the above-the-fold should situate Nammu, feel sleek/AI/software without literal UI, drive a demo, and segue into the capabilities; Nammu is framed as a partner that does things for teams, not a platform to adopt.
- Site structure — **decided: a single-page site (Home), plus legal pages. Header nav is anchor tabs that jump to home sections (What we do · Team · FAQ · Press) + the Book a Demo CTA. Everything (capabilities §3.2, team §3.4, press §3.6) is a section on the home page; About and Press are no longer separate pages.** Supersedes the single-page, four-page (`/product`), three-page (`/press`), and two-page (`/about`) structures.
- Trust/logo strip placement & which logos — _placeholder strip rendered under hero; logos TBD_

**Known facts (confirmed)**

- Footer: **no text slogan** (the "AI for Seafood" line was removed); the LinkedIn icon is **white** on a translucent-white circle (was light blue). Browser title tag remains "AI for seafood".
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
