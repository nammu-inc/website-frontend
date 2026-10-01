// Everything Nammu writes itself: Between Tides issues and blog posts. The full
// posts live on LinkedIn; the site only indexes them in the Insights section on
// home. Outside coverage belongs in
// Press, not here.
//
// Add new entries at the top (newest first). `type` picks the tag:
//   "newsletter" -> Between Tides,  "blog" -> Blog
//
// {
//   type: "newsletter",
//   date: "October 1, 2026",
//   title: "Post title as it appears on LinkedIn",
//   excerpt: "One or two sentences on what the post covers.",
//   url: "https://www.linkedin.com/pulse/...",
// },
export const POSTS = [
  {
    type: "newsletter",
    date: "September 24, 2026",
    title: "Between Tides #3: Special sushi edition!",
    excerpt:
      "Takeaways from the Sushi Summit in DC: where U.S. sushi still has room to grow, how Norway spent two decades turning farmed cod into a business now reaching U.S. markets, and the story of how Norwegian salmon first made it onto sushi menus in Japan.",
    url: "https://www.linkedin.com/pulse/between-tides-3-special-sushi-edition-nammu-ai-jzvie",
  },
];

export const NEWSLETTER_NAME = "Between Tides";
export const LINKEDIN_URL = "https://www.linkedin.com/company/nammu-ai";

export const postLabel = (post) =>
  post.type === "newsletter" ? NEWSLETTER_NAME : "Blog";
