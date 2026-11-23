// Case study body as HTML, converted from the original Substack post. Images live in
// public/images/case-studies/a-look-inside-nemo/. Allowed tags: p, h2, h3, em, strong, a, br, figure > img,
// and <p class="nm-note"> for the small highlighted notes under screenshots.
const body = "<p><em>“Explain our sales numbers of this month”</em></p>\n" +
  "<p>That was the request Todd Rushing had asked Nemo the day before we caught up. The team at Stavis Seafoods was discussing sales of the last 4 weeks, and Todd, their VP of Sales, was looking at what was happening across different products and customers.</p>\n" +
  "<p>Nemo is our AI assistant, connected to your ERP and the business data you already have in Nammu. You can ask it questions about your sales, customers, and margins, then keep asking follow-ups as you work through the answer.</p>\n" +
  "<p>Todd uses several AI tools. Grok is his driving companion, Gemini helps with personal questions, and he uses Claude for work. For his company’s numbers, he comes back to Nemo.</p>\n" +
  "<p><em>“When you guys first approached us, it was framed as an AI tool. And to me, Nemo was everything that my vision was or my expectation for Nammu was. It’s met, if not exceeded, my expectations.”</em></p>\n" +
  "<p>When we asked Todd how easy it was to start using Nemo, his answer was short: “<em>Very easy. Extremely easy.</em>” He uses it to ask about the company’s numbers, then follows up as he works through the answers.</p>\n" +
  "<p>Here’s a look at how he uses it, alongside a separate walkthrough we put together to show what those conversations look like.</p>\n" +
  "<h2>Start with a question about your business</h2>\n" +
  "<p>You can start with something as straightforward as how sales compare with last year. Nemo brings back the figures, and you decide where to go next.</p>\n" +
  "<figure><img src=\"/images/case-studies/a-look-inside-nemo/2.jpg\" width=\"1066\" height=\"356\" alt=\"\" loading=\"lazy\"></figure>\n" +
  "<p><em>A sales question brings back a weekly comparison. Screenshots show a separate walkthrough, not Todd’s interview conversation. Data is from our demo website.</em></p>\n" +
  "<h2>Then ask the next question</h2>\n" +
  "<p>Todd’s advice is to build up the conversation. He starts with a broad question and gets more specific as he sees the answers.</p>\n" +
  "<p><em>“My approach to Nemo, which I love about Nemo, and I’ve been trying to encourage this to all the people in our company, is that you need to kind of build up to the conversation. I start off with a very general part, and then I drill down, drill and drill down.”</em></p>\n" +
  "<p>That’s what he did when he was looking into the slower sales weeks. Nemo started with revenue. Todd wanted volume, so he asked for that instead. Then he asked about product categories.</p>\n" +
  "<p>We followed the same approach in the example below. The first answer showed revenue up 20.4% over the comparison period. The follow-up asks which categories explain the changes in pounds sold.</p>\n" +
  "<figure><img src=\"/images/case-studies/a-look-inside-nemo/3.jpg\" width=\"1066\" height=\"499\" alt=\"\" loading=\"lazy\"></figure>\n" +
  "<p class=\"nm-note\">Demo data only. All figures shown are illustrative and do not represent actual Stavis Seafoods data.</p>\n" +
  "<p><em>The follow-up keeps the same comparison period and changes the view to pounds sold by category.</em></p>\n" +
  "<p>Atlantic salmon is the largest increase in the table, with 22,438 additional pounds. Domestic shrimp is also up, while small pelagics and hake are down. You now have specific categories to investigate, even though the overall revenue number looked healthy.</p>\n" +
  "<h2>Find the customers behind the change</h2>\n" +
  "<p>A change in a product category usually leads to another question: who is buying more or less? One large account changing its orders calls for a different conversation from a decline across many customers.</p>\n" +
  "<p>Todd worked through categories this way, looking at the customer breakdown for each. In our walkthrough, we picked domestic shrimp and asked where the increase was coming from.</p>\n" +
  "<figure><img src=\"/images/case-studies/a-look-inside-nemo/4.jpg\" width=\"1066\" height=\"687\" alt=\"\" loading=\"lazy\"></figure>\n" +
  "<p class=\"nm-note\">Demo data only. All figures shown are illustrative and do not represent actual Stavis Seafoods data.</p>\n" +
  "<p><em>From product category to customer detail, in the same conversation.</em></p>\n" +
  "<p>Nemo returns the customers contributing to the change, with their pounds purchased in each period. That gives the sales team somewhere to start: check in with an account that has started buying the product, or understand why another customer’s orders have changed.</p>\n" +
  "<p>The questions can stay conversational. As Todd described it:</p>\n" +
  "<p><em>“With Nemo prompting, it’ll be more conversational. I start with one point and I’ll start drilling down, drilling down, drilling down.”</em></p>\n" +
  "<h2>Work out where to spend your time</h2>\n" +
  "<p>Todd also uses Nemo to think about sales priorities. On the morning we spoke, he was working through how to set goals and KPIs for the sales team.</p>\n" +
  "<p>He wanted to understand which accounts deserved more attention and which needed a closer look. That led to questions about customer efficiency, revenue, margins, and order frequency, followed by requests to break the results down by salesperson.</p>\n" +
  "<p>A useful place to start is customer concentration. How much of your gross profit comes from a small group of accounts? And does the familiar 80/20 rule actually describe your business?</p>\n" +
  "<figure><img src=\"/images/case-studies/a-look-inside-nemo/5.jpg\" width=\"1066\" height=\"654\" alt=\"\" loading=\"lazy\"></figure>\n" +
  "<p class=\"nm-note\">Demo data only. All figures shown are illustrative and do not represent actual Stavis Seafoods data.</p>\n" +
  "<p><em>Ask about customer concentration, then look at the accounts behind the result.</em></p>\n" +
  "<p>In this example, Nemo reports that 125 of 285 customers, or 43.9%, account for 80% of gross profit. It also shows the ten biggest contributors, including their revenue and margins.</p>\n" +
  "<p>That gives you more to work with when reviewing an account than its sales total alone. A large customer with a thin margin may need a different conversation from a smaller customer whose purchases generate more gross profit per dollar of sales.</p>\n" +
  "<h2>Take a closer look at smaller orders</h2>\n" +
  "<p>You can also ask about accounts that order often but contribute little gross profit. The follow-up below brings together order count, average order value, gross profit, and the salesperson responsible.</p>\n" +
  "<figure><img src=\"/images/case-studies/a-look-inside-nemo/6.jpg\" width=\"1066\" height=\"381\" alt=\"\" loading=\"lazy\"></figure>\n" +
  "<p class=\"nm-note\">Demo data only. All figures shown are illustrative and do not represent actual Stavis Seafoods data.</p>\n" +
  "<p><em>A short list of accounts to review with the sales team.</em></p>\n" +
  "<p>In our walkthrough, we asked Nemo to identify accounts that ordered frequently but contributed little gross profit. One account it returned had placed 72 orders and generated $337 in gross profit over the year, about $4.68 per order.</p>\n" +
  "<p>That gives the sales team something specific to investigate. Could orders be consolidated? Does pricing need attention? Is there a reason to keep serving the account this way? Nemo helps identify where to look; the team brings its knowledge of the customer to the conversation.</p>\n" +
  "<h2>The business value</h2>\n" +
  "<p>Being able to ask these questions directly can mean less time spent pulling figures together. A sales meeting can start with the products and accounts that need attention, with more of the preparation already done.</p>\n" +
  "<p>For a five-person team, saving 20 minutes on three analyses each week would free up five hours across the team. Over 50 working weeks, that’s 250 hours, roughly 31 eight-hour working days that could go towards customer conversations and follow-ups.</p>\n" +
  "<p>This is an illustrative calculation. It assumes each analysis takes 20 minutes less overall, including the time needed to check Nemo’s answer. The actual saving will depend on how often the team uses it and how long those analyses currently take.</p>\n" +
  "<p>There is also value in following a question further. Seeing a change in sales, asking which category explains it, and getting down to the customer gives your team something specific to discuss or follow up on.</p>\n" +
  "<p>Todd’s advice to another seafood leader was pretty straightforward:</p>\n" +
  "<p><em>“I would highly recommend using it. But use it as a tool to see what’s going on. And I would strongly encourage them to have their other people use it as well.”</em></p>\n" +
  "<p>If you’d like to see what Nemo could help your team find in your own numbers, we’d be happy to show you.</p>";

export default body;
