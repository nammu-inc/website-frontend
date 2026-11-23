import nemoBody from "./case-studies/a-look-inside-nemo";
import portalBody from "./case-studies/inside-nammus-direct-order-portal";

// Customer case studies, hosted on nammu.ai at /case-studies/:slug and listed in
// the Case studies section on home. Add new entries at the top (newest first).
//
// To add one: put the body HTML in src/data/case-studies/<slug>.js (same tag set
// as the existing files) and its images in public/images/case-studies/<slug>/, with the
// cover as 1.jpg. Resize images to ~1600px wide JPEG.
export const CASE_STUDIES = [
  {
    slug: "a-look-inside-nemo",
    customer: "Stavis Seafoods",
    date: "November 18, 2026",
    title: "A look inside Nemo",
    subtitle: "With Todd Rushing from Stavis Seafoods",
    excerpt:
      "How Stavis Seafoods' VP of Sales uses Nemo to go from a monthly sales number to the categories and customers behind it.",
    cover: "/images/case-studies/a-look-inside-nemo/1.jpg",
    body: nemoBody,
  },
  {
    slug: "inside-nammus-direct-order-portal",
    customer: "Greenhead Lobster",
    date: "November 16, 2026",
    title: "Inside Nammu's direct order portal",
    subtitle: "A walkthrough with Greenhead Lobster",
    excerpt:
      "How Greenhead Lobster replaced orders sent by email and text with a portal where customers pick items, set quantities, and choose a date.",
    cover: "/images/case-studies/inside-nammus-direct-order-portal/1.jpg",
    body: portalBody,
  },
];

export const findCaseStudy = (slug) =>
  CASE_STUDIES.find((c) => c.slug === slug);
