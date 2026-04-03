export type Lesson = {
  slug: string
  title: string
  duration: string
  content: string
  takeaways: string[]
}

export type Course = {
  id: string
  slug: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  totalDuration: string
  lessonCount: number
  color: string
  icon: string
  lessons: Lesson[]
}

export const courses: Course[] = [
  {
    id: '1',
    slug: 'etsy-seo-masterclass',
    title: 'Etsy SEO Masterclass',
    description: 'Learn exactly how Etsy\'s search algorithm works and build a keyword strategy that drives consistent, compounding traffic to your shop.',
    difficulty: 'Beginner',
    totalDuration: '52 min',
    lessonCount: 5,
    color: 'bg-amber-50 border-amber-200',
    icon: '🔍',
    lessons: [
      {
        slug: 'how-etsy-search-works',
        title: 'How Etsy\'s Search Algorithm Works',
        duration: '10 min',
        content: `Understanding Etsy's search algorithm is the foundation of everything else in this course. Before you can optimize anything, you need to know what the algorithm is actually trying to do — and why.

Etsy's search has one goal: connect buyers with the products most likely to make them happy. That sounds simple, but it means the algorithm is constantly evaluating not just what you've written in your listing, but how real buyers have responded to it over time.

**The four core ranking factors**

The first factor is relevancy — how well your listing's title, tags, attributes, and description match the search query a buyer typed. This is the most controllable factor and where most optimization work lives. Exact phrase matches in your title carry the most weight, followed by tags.

The second factor is listing quality score. Etsy tracks what happens when your listing appears in search results. Do buyers click on it? Do they buy after clicking? A high click-through rate combined with a strong conversion rate signals that your listing is genuinely satisfying buyer intent — and Etsy rewards that with more exposure.

The third factor is shop quality score. This reflects your shop's overall health: average review rating, whether you respond to messages promptly, how complete your shop profile is, and your sales history. A newer shop with fewer sales will generally rank below an established shop with strong reviews, even with identical listings. This is temporary — it improves as you sell.

The fourth factor is recency. New and recently-renewed listings get a short-lived ranking boost, typically lasting 24–72 hours. This is why sellers renewing listings sometimes see a traffic spike. It's real, but short-term. Don't rely on renewals as an SEO strategy.

**What this means practically**

The most important implication is that search ranking is not just about writing good titles. It's a feedback loop. Good keywords get your listing seen. Good photos and pricing get buyers to click. Good product quality and packaging earn five-star reviews. Those reviews improve your shop quality score, which improves your ranking, which gets you more traffic.

Every decision in your shop — pricing, photography, customer service — is indirectly an SEO decision. Sellers who understand this build compounding momentum. Sellers who only think about keywords plateau.

In the next lesson, we'll go deep on keyword research — specifically how to find the exact phrases your buyers are searching right now.`,
        takeaways: [
          'Etsy\'s algorithm weighs relevancy, listing quality score, shop quality score, and recency',
          'Listing quality score is driven by click-through rate and conversion rate — not just keywords',
          'SEO is a feedback loop: good keywords → clicks → sales → better ranking',
          'Shop quality score improves over time as you sell and earn reviews — be patient',
        ],
      },
      {
        slug: 'keyword-research',
        title: 'Keyword Research for Etsy',
        duration: '12 min',
        content: `Keyword research is the process of finding the exact phrases real buyers type into Etsy's search bar when they're looking for products like yours. It's not guesswork. There are reliable methods that surface what's actually being searched — and it makes an enormous difference.

**Start with Etsy's own search bar**

The most underused keyword research tool is completely free and updated in real time: Etsy's autocomplete. Open a private browser window (so your history doesn't influence results), go to Etsy.com, and start typing the first two or three words of a phrase related to your product. Watch the dropdown suggestions carefully.

Those suggestions are pulled from real buyer searches. They're not random. Type "personalized" and you'll see dozens of phrase completions — "personalized gifts for mom," "personalized jewelry," "personalized wedding gifts." Every one of those is a search that real buyers are performing regularly.

Write down every suggestion that's relevant to your product. These become your seed keyword list.

**Why long-tail keywords win**

A "short-tail" keyword is a broad, one or two-word phrase: "candle," "necklace," "print." These have enormous search volume but brutal competition — thousands of listings targeting the exact same phrase.

A "long-tail" keyword is a specific multi-word phrase: "soy candle lavender anxiety relief," "dainty gold initial necklace minimalist," "botanical print living room watercolor." These have lower volume but much higher buyer intent and far less competition.

A listing that ranks #3 for "lavender soy candle gift for her" will consistently outsell a listing that ranks #400 for "candle." Long-tail is not a consolation prize — it's the smarter play.

**Using keyword research tools**

Two tools worth knowing: eRank and Marmalead. Both connect to Etsy's API and show you estimated monthly search volume, competition levels, and click-through rates for specific keywords. Neither is perfect, but both are dramatically better than guessing.

The workflow: take your seed keywords from Etsy autocomplete, plug them into eRank or Marmalead, check the volume and competition, and prioritize phrases with meaningful search volume and low-to-medium competition.

**Study your top competitors**

Find three or four shops that are clearly winning in your niche. Read their listing titles carefully. Notice the exact phrases they've chosen. Look at their tags by checking their listing source code. They've done keyword research already — you can learn from it.

Also read their reviews. The words buyers use in five-star reviews — "perfect gift for my minimalist friend," "exactly what I was looking for" — are phrasing that other buyers search. Reviews are a keyword goldmine.`,
        takeaways: [
          'Etsy\'s autocomplete shows real buyer searches — use it in a private window for unbiased results',
          'Long-tail keywords (4-6 word phrases) have less competition and higher buyer intent than broad terms',
          'eRank and Marmalead give you search volume data to prioritize the best keywords',
          'Competitor titles and buyer reviews are free keyword research sources most sellers overlook',
        ],
      },
      {
        slug: 'titles-and-tags',
        title: 'Optimizing Your Titles and Tags',
        duration: '11 min',
        content: `Your title and tags are the two most direct signals you send to Etsy's search algorithm. They're where most of your optimization effort should live — and most sellers are using them poorly.

**Title structure: front-load your best keyword**

Etsy gives you 140 characters for your title. The first 40 characters are the most important — they're what appears in search results on mobile, and they carry the most algorithmic weight.

Put your single most important keyword phrase first. Be specific and descriptive. Use natural language — Etsy's algorithm has become significantly better at understanding semantic meaning, so readable titles now outperform keyword-stuffed ones.

Structure that works: [Primary keyword phrase] — [Secondary description], [Third keyword angle]

Example for a hand-thrown pottery mug:
"Handmade Ceramic Coffee Mug — Rustic Pottery Cup for Home, Unique Gift for Coffee Lover"

Example that doesn't work as well:
"mug ceramic handmade pottery rustic coffee cup unique gift lover home"

The first is readable, front-loads the primary keyword, and adds a secondary angle. The second is a keyword string that Etsy's algorithm has learned to value less.

**Using all 13 tags strategically**

Etsy gives you 13 tags and most sellers fill 8–10. Fill all 13. Every unused tag is a missed ranking opportunity.

The strategic approach: use tags to cover angles not already captured in your title. If your title says "Handmade Ceramic Coffee Mug," your tags shouldn't just repeat "handmade ceramic coffee mug." Instead, cover:

- Occasion: "housewarming gift," "birthday gift for him"
- Recipient: "gift for coffee lover," "gift for coworker"
- Aesthetic: "cottagecore kitchen," "japandi home decor"
- Material/process: "wheel thrown pottery," "stoneware cup"
- Related use: "tea mug," "soup mug," "large coffee cup"

Each tag is a multi-word phrase, never a single word. "Gift" as a tag is nearly worthless. "Unique gift for coffee lover" is specific and searchable.

**The title/tag relationship**

Etsy reads your title and tags together, not separately. Repeating the exact same phrase in both is redundant — the algorithm has already recorded that phrase from your title. Use your tags to expand your semantic footprint with different but related phrases. More angles covered means more searches where your listing is eligible to appear.

One final note: update your titles and tags seasonally. In October and November, add holiday gifting angles. In January, add "Valentine's Day" phrases. Etsy's algorithm picks up changes within a few days.`,
        takeaways: [
          'Put your primary keyword in the first 40 characters of your title — that\'s what shows in search',
          'Use readable, natural titles — Etsy\'s AI understands semantic meaning, not just exact matches',
          'Use all 13 tags and make them cover different angles than your title (occasion, recipient, aesthetic)',
          'Never use single-word tags — always use multi-word search phrases that buyers actually type',
        ],
      },
      {
        slug: 'attributes-and-descriptions',
        title: 'Listing Attributes and Descriptions',
        duration: '9 min',
        content: `Most sellers spend all their optimization energy on titles and tags, then leave two significant ranking factors almost completely untouched: attributes and listing descriptions. This lesson covers both.

**Attributes: the most skipped SEO task**

When you create or edit a listing, Etsy asks you to fill in attributes specific to your category — things like color, material, occasion, style, recipient, and size. These fields feed directly into the filters buyers use when narrowing search results.

Here's why this matters: a buyer might search "silver necklace" and then filter results by "minimalist style" or "gift for her." Listings with those attributes filled in appear in those filtered results. Listings without completed attributes simply don't appear — even if the product is a perfect match.

Filling in attributes takes two to three minutes per listing and most sellers skip it entirely. That means if you complete yours, you're automatically visible in filter-based searches where most of your competitors are invisible.

The rule is simple: fill in every attribute Etsy offers for your category. Don't leave anything blank. If an attribute doesn't perfectly fit, choose the closest option.

**Descriptions: SEO value and conversion value**

Your listing description serves two purposes simultaneously: helping search ranking and convincing the buyer to purchase.

For SEO: Etsy's algorithm reads your description and uses it as additional context for relevancy scoring. The first 160 characters are the most important — they often appear as the meta description in Google search results, driving off-platform traffic. Lead with your most important keyword phrase and a compelling statement about what makes the product special.

For conversion: a good description answers every question a buyer might have before they think to ask it. Dimensions, materials, care instructions, personalization process, shipping timeframes, what's included. Buyers who have all their questions answered in the listing buy more and leave better reviews.

**Structuring your description**

A format that works well:

- First sentence: primary keyword phrase + the product's key benefit or unique quality
- Second paragraph: materials, dimensions, key details
- Third paragraph: personalization or custom options if applicable
- Fourth paragraph: care instructions and what to expect when it arrives
- Final line: a warm, human closing that sounds like a real person wrote it

Avoid description padding — generic filler sentences like "this beautiful item makes a wonderful gift for anyone on your list" that say nothing specific. Buyers can sense hollow copy, and it damages the trust you're trying to build.`,
        takeaways: [
          'Filling in all listing attributes makes you visible in filter-based searches your competitors miss',
          'The first 160 characters of your description appear in Google results — lead with your best keyword',
          'Descriptions serve both SEO (algorithm context) and conversion (answering buyer questions)',
          'Avoid generic filler sentences — every line should tell the buyer something specific and useful',
        ],
      },
      {
        slug: 'tracking-seo-progress',
        title: 'Tracking and Improving Your SEO Over Time',
        duration: '10 min',
        content: `The sellers who compound their SEO results year over year aren't necessarily smarter or more talented — they track their performance systematically and iterate based on data. This final lesson covers exactly how to do that.

**What to look at in Etsy Stats**

Etsy provides a Stats dashboard in your Shop Manager that's more useful than most sellers realize. Open it weekly and pay attention to three things:

First, your traffic sources. How much of your traffic comes from Etsy search vs. direct vs. external sources? The proportion of Etsy search traffic tells you how dependent you are on the algorithm and whether your SEO work is moving the needle.

Second, your top search terms. Etsy shows you the specific phrases buyers searched before clicking on your listings. Read this list every week. You'll often find phrases you didn't optimize for that are already sending you traffic — those are buried opportunities to double down on.

Third, the views-to-favorites-to-sales funnel. High views with few favorites signals a thumbnail problem (buyers are seeing your listing but not being drawn in). High favorites with few sales signals a price or trust problem (buyers like it but aren't converting). Understanding where buyers drop off tells you exactly where to focus.

**Using eRank for deeper analysis**

eRank's Listing Audit tool grades your active listings across multiple SEO factors and flags specific issues: titles that are too short, unused tags, low-competition keyword opportunities, missing attributes. Run this on your top 20 listings quarterly.

eRank also tracks your listing's search rank for specific keywords over time. If a listing that was ranking #8 for "handmade ceramic mug" drops to #34 after you changed the title, you know the change hurt you. If it climbs after a change, you know what worked.

**The iteration process**

Never change two things at once in a listing. Change the title or the tags — not both simultaneously. Wait two weeks. Check your stats. Did views improve? Did conversion rate hold? If yes, the change helped. If no, try something different.

This is slow but it's how you build real knowledge about what actually works in your specific niche, for your specific buyers. Generic SEO advice — including this course — gives you a foundation. But your best keyword data will come from your own shop's performance over time.

**The compounding reality**

Etsy SEO rewards patience. A listing with strong keywords, good photos, competitive pricing, and 40 five-star reviews will almost always outrank a listing with better keywords but no reviews and weak photos. The full package compounds.

Sellers who work on all the factors — not just keywords — and who track and iterate consistently are the ones who look back two years later and can't quite believe how far their traffic has grown.`,
        takeaways: [
          'Check Etsy Stats weekly — focus on top search terms, traffic sources, and the views-to-sales funnel',
          'High views + low sales = conversion problem (photos or price). Low views + decent sales = SEO problem (title/tags)',
          'Change only one thing at a time in a listing so you can measure what actually worked',
          'eRank\'s Listing Audit tool flags specific SEO issues across your active listings — run it quarterly',
        ],
      },
    ],
  },

  {
    id: '2',
    slug: 'pricing-for-profit',
    title: 'Pricing for Profit',
    description: 'Build a pricing strategy that covers every cost, pays you fairly, and positions your shop for long-term growth — without the guilt of charging what you\'re worth.',
    difficulty: 'Beginner',
    totalDuration: '38 min',
    lessonCount: 4,
    color: 'bg-emerald-50 border-emerald-200',
    icon: '💰',
    lessons: [
      {
        slug: 'why-sellers-underprice',
        title: 'Why Most Etsy Sellers Underprice',
        duration: '8 min',
        content: `Before we get to formulas and numbers, we need to talk about mindset — because pricing problems on Etsy are almost never mathematical. They're psychological. Understanding why you underprice is the first step to fixing it.

**The comparison trap**

Most sellers price by looking at what competitors charge and trying to come in slightly lower. The logic seems sound: if someone is selling a similar candle for $18, pricing at $16 will capture their buyers.

But this reasoning has a fatal flaw. You don't know whether that $18 seller is profitable. You don't know their cost structure, their labor rate, or whether they're burning out and about to close their shop. You're anchoring your pricing to someone else's potentially broken math.

The only valid starting point for pricing is your own costs. Everything else comes after that.

**The "someone won't pay that much" fear**

The most common thing I hear from sellers who underprice: "I'm afraid people won't buy it at that price." This fear is understandable and almost always wrong.

Here's what actually happens when you underprice: You attract buyers who chose you primarily because you were cheapest. These buyers often value price above quality. They're more likely to complain, less likely to leave reviews, and least likely to come back. You've built a customer base of bargain hunters.

Meanwhile, the shops charging 40% more than you are attracting buyers who value craftsmanship, story, and uniqueness. These buyers leave glowing reviews and tell their friends. They come back for holidays and birthdays.

Underpricing doesn't just hurt your margin. It attracts the wrong buyers.

**The undervaluing math in action**

Say you make a hand-stitched leather wallet. Materials: $8. Time: 90 minutes. You price it at $28 because similar wallets on Etsy sell for $22–$35 and you want to be "competitive."

At $28, with Etsy's ~10.5% fees, you net about $25. Subtract $8 materials. That leaves $17 for 90 minutes of work — about $11.33 per hour. No overhead, no equipment amortization, no business growth funds.

The same wallet priced at $52 nets you about $46.50. Subtract $8 materials. That's $38.50 for 90 minutes — about $25.67 per hour. Same product. Same effort. More than double the effective pay rate.

The difference between $28 and $52 is not whether buyers will buy it. It's whether you believe they will.`,
        takeaways: [
          'Pricing from competitors\' prices is dangerous — you don\'t know if they\'re profitable either',
          'Underpricing attracts bargain-hunter buyers who complain more and return less',
          'The fear that nobody will buy at a higher price is almost always wrong — test it before assuming',
          'The math of underpricing is brutal: a small price increase can more than double your effective hourly rate',
        ],
      },
      {
        slug: 'full-cost-formula',
        title: 'The Full Cost Formula',
        duration: '10 min',
        content: `Now we build the formula. Price every product you sell through this framework and you'll never accidentally lose money on a sale again.

**The formula**

**Price = (Materials + Labor + Overhead) × 2 + Etsy Fees**

This isn't a suggestion or a rough guide. It's the structural foundation of a sustainable handmade business. Let's break down every component.

**Materials cost**

Every physical input that goes into one unit. Raw materials, yes — but also everything else: the box, the tissue paper, the ribbon, the sticker, the thank-you card, the poly mailer, the tape. Most sellers calculate materials and forget packaging entirely, which typically adds $1.50–$4.00 per order to real costs.

If you buy supplies in bulk, divide the bulk cost by unit count to get per-item cost. A $24 roll of kraft paper that yields 80 packages costs $0.30 per package — worth tracking.

**Labor cost**

Pay yourself a real hourly wage. Minimum $18–$20 per hour. If you have specialized skills — precision jewelry work, intricate embroidery, complex woodworking — $25–$35 per hour is appropriate.

Critically: track your actual time per item for at least two weeks. Most makers estimate their production time at about 60% of what it actually takes once you include cutting, finishing, quality checking, and packaging. Your labor cost is almost certainly higher than you think.

**Overhead**

Your monthly business expenses divided by the number of units you produce per month. This includes: Etsy subscription, software subscriptions, tool and equipment costs (amortized over their useful life), studio rent or workspace costs, and photography equipment. For most small shops this works out to $1–$3 per item.

**The ×2 markup**

The doubling factor isn't greed — it's business infrastructure. The ×2 creates your profit margin, funds your ability to run 20% sales without losing money, enables wholesale pricing at half your retail price, and provides capital to reinvest in growth. Without it, you're covering costs but not building anything.

**Etsy fees**

Etsy charges approximately 10.5% on every sale (6.5% transaction fee + ~3.5% payment processing + amortized $0.20 listing fee). Add this to your calculated price, or divide your pre-fee price by 0.895 to find your listing price.

**A worked example**

Hand-thrown ceramic mug: Materials $4.20 + Labor (40 min at $20/hr = $13.33) + Overhead $1.80 = $19.33. Times 2 = $38.66. Plus 11% fees = $42.93. List at $44.

That might feel high. Search Etsy for handmade ceramic mugs right now. Quality pieces sell for $38–$68. You're not overcharging. You've just been undercharging.`,
        takeaways: [
          'The formula: (Materials + Labor + Overhead) × 2, then add ~11% for Etsy fees',
          'Always include packaging in materials cost — it typically adds $1.50–$4.00 per order',
          'Track actual production time for two weeks — most sellers underestimate it by 40%',
          'The ×2 markup is not greed — it funds your ability to run sales, wholesale, and reinvest in growth',
        ],
      },
      {
        slug: 'pricing-psychology',
        title: 'Pricing Psychology on Etsy',
        duration: '9 min',
        content: `The math of pricing tells you your minimum viable price. Psychology tells you how to present that price in a way that maximizes both perceived value and conversion rate. Both matter.

**Price signals quality**

On Etsy, where buyers are specifically looking for handmade, unique, and artisan goods, high prices are a signal — not a deterrent. When a buyer sees a hand-poured candle priced at $12 next to one priced at $38, many buyers assume the $38 candle is better. They may be right. Or the $12 seller may just be undercharging. But perception precedes reality in purchase decisions.

This is especially true for gift purchases, which account for a large percentage of Etsy sales. A buyer buying a gift wants to be seen as generous. A $12 gift feels cheap. A $38 gift feels thoughtful. The buyer will often choose the more expensive option specifically because it signals more care.

**Charm pricing: $X9 vs round numbers**

Psychological pricing research consistently shows that $39 converts slightly better than $40 for price-sensitive purchases. The "X9" format triggers a perception of value and deal.

However, for premium handmade goods, there's a counter-argument: round numbers ($40, $65, $120) can signal confidence and premium positioning. "$40" reads as intentional. "$38.99" reads as calculated.

My recommendation: use charm pricing ($X9) for your lower-priced items under $30 and round numbers for anything positioned as premium or luxury.

**Anchoring with multiple price points**

If you sell a product in multiple sizes or tiers, list your most expensive option first. Buyers establish a price anchor from the first option they see. A buyer who sees "Large: $68" before seeing "Small: $42" perceives the $42 as the reasonable middle option. The same buyer who sees "Small: $42" first may think $68 is expensive.

This is why product pages often lead with premium variants. It's not accidental.

**Free shipping psychology**

Etsy's research shows listings with free shipping convert meaningfully better than identical listings with visible shipping charges. The psychology: buyers hate additional charges appearing at checkout. A $44 item with free shipping converts better than a $38 item plus $6 shipping — even though the buyer pays the same.

If you raise your prices to absorb shipping costs and mark items as free shipping, you'll typically see conversion rate improve enough to offset the slight reduction in margin. Worth testing.

**The premium positioning test**

Not sure if your buyers will accept higher prices? Test it. Raise your price on one listing by 25%. Run it for three weeks. If your conversion rate stays flat or drops only slightly, raise it again. Keep going until conversion rate drops materially. That's your ceiling — and it's probably higher than you assumed.`,
        takeaways: [
          'Higher prices signal quality on Etsy — especially for gifts, where price communicates how much you care',
          'Use $X9 pricing for lower-priced items and round numbers for premium or luxury positioning',
          'List your most expensive variant first to anchor buyers to a higher price reference',
          'Free shipping outperforms equivalent listings with visible shipping charges — absorb it into your price',
        ],
      },
      {
        slug: 'raising-prices',
        title: 'Raising Your Prices Without Losing Sales',
        duration: '11 min',
        content: `You've run the formula. You know you're underpriced. Now comes the part most sellers dread: actually changing the numbers. This lesson is about how to do it without the panic, without losing your buyer base, and with a plan for doing it right.

**The three fears — and the reality behind each**

Fear #1: "My existing buyers will notice and be upset." Reality: the vast majority of buyers never see your old price. They find you through search, see your current price, and make a decision. The 2% who follow your shop closely enough to notice a price change are not your growth engine — and a polite message explaining that you've updated your pricing as your business has grown is all the response you'll ever need.

Fear #2: "My sales will drop." Reality: sometimes they do — briefly. A 25% price increase often causes a temporary dip in conversion rate, followed by a return to near-normal levels within four to six weeks. In the meantime, you're making substantially more per sale. The net effect on revenue is almost always positive.

Fear #3: "My competitors are cheaper and buyers will go to them." Reality: some will. The buyers who choose purely on price were never your best customers. You're not trying to win every sale. You're trying to win the right sales — from buyers who value what you make and will leave five-star reviews and come back.

**The incremental approach**

If the idea of raising prices 40% overnight feels too risky, raise them incrementally. 15% every four to six weeks until you reach your target price. This is slower but gentler on your conversion rate statistics and gives your shop time to adjust.

The incremental approach works particularly well if you're raising prices alongside real improvements: new photography, better packaging, a more polished shop banner. Each improvement justifies the higher price visually.

**Invest in presentation before you raise**

The perceived value ceiling of your product is set by how it's presented. If your photos look like they were taken on a kitchen counter with overhead lighting, raising your price to premium levels will likely hurt conversion. But if your photos are beautifully lit, your listing description tells a compelling story, and your packaging is thoughtfully done, premium pricing feels entirely appropriate.

Before a major price increase: retake the photos. Rewrite the description. Improve the packaging. Then raise the price.

**What to do with outlier low-priced listings**

Many shops have a few listings that are priced dramatically below everything else — leftover from an earlier era, or never properly calculated. Raise these gradually or, if they're no longer worth making at a fair price, retire them. A listing that loses you money on every sale is not a "gateway" product — it's a drain.

You have built something real. Charge accordingly.`,
        takeaways: [
          'Most fears about price increases are unfounded — buyers rarely notice, and sales typically recover in 4–6 weeks',
          'Raise prices incrementally (15% at a time) if a sudden large increase feels too risky',
          'Improve your photos and packaging before raising prices — presentation sets the perceived value ceiling',
          'Buyers who choose purely on price are not your best customers — let them go to cheaper competitors',
        ],
      },
    ],
  },

  {
    id: '3',
    slug: 'product-photography-101',
    title: 'Product Photography 101',
    description: 'Take scroll-stopping product photos with the phone in your pocket. Master light, composition, and editing without expensive gear or studio space.',
    difficulty: 'Beginner',
    totalDuration: '37 min',
    lessonCount: 4,
    color: 'bg-pink-50 border-pink-200',
    icon: '📸',
    lessons: [
      {
        slug: 'lighting-fundamentals',
        title: 'Lighting Fundamentals for Product Shots',
        duration: '10 min',
        content: `If you could only master one skill in product photography, it should be lighting. Not composition. Not editing. Not camera technique. Lighting. It accounts for roughly 70% of the difference between amateur and professional-looking product shots — and the best light source available to most sellers is completely free.

**Why light matters so much**

Light defines shape, reveals texture, and communicates mood. A rough ceramic mug photographed in warm raking light looks artisan and tactile. The same mug under flat overhead fluorescent light looks cheap and lifeless. The product didn't change. The light did.

On Etsy, buyers can't touch your products. They can't feel the weight of a candle jar or the texture of a knitted throw. Photography has to simulate that sensory information — and light is the primary tool for doing so.

**The window light setup**

Natural light from a window is the most beautiful, most flattering, and most accessible light source for product photography. Here's the setup that works:

Find a window that receives bright indirect light — not direct sunbeams, which create harsh shadows and hot spots. Morning light (east-facing windows) and late afternoon light (west-facing windows) tend to have a warmer, softer quality than midday. North-facing windows give the most consistent light throughout the day because they never receive direct sun.

Place your product 12–24 inches from the window glass, parallel to it. The light should skim across the product from the side, which reveals texture and dimension far better than light coming from directly behind you.

The single most impactful $2 purchase you can make for your photography: a white foam board from the dollar store. Place it on the opposite side of your product from the window. It reflects window light back into the shadow side, reducing harsh shadows and lifting detail in darker areas. This alone will noticeably improve your photos.

**What to avoid**

Overhead ceiling lights create shadows that fall directly downward, creating unflattering dark areas under products. Turn them off when shooting. They also create a color cast (usually yellowish) that makes whites look dingy.

Mixing natural and artificial light in the same shot creates competing color temperatures — some areas will look warm, others cool, and white balance becomes nearly impossible to fix in editing.

Direct sunbeams create blown-out highlights (pure white areas with no detail) and hard shadows. Move to indirect light.

**The overcast day secret**

Heavily overcast days are actually ideal for product photography. The clouds act as an enormous diffuser, spreading light evenly across your subject from the entire sky. Shadows are minimal, colors are accurate, and the light has a soft, luminous quality that's difficult to achieve artificially. When you see a gray sky, set up your shoot.

Experiment with different window positions and times of day. Once you find a setup that consistently produces beautiful results for your specific products, photograph everything there — consistency of light creates a consistent shop aesthetic that builds buyer trust.`,
        takeaways: [
          'Lighting accounts for ~70% of photo quality — it\'s the most important skill to master',
          'Window light (indirect, not direct sun) is free, beautiful, and better than most artificial setups',
          'A $2 white foam board on the shadow side dramatically reduces harsh shadows',
          'Overcast days create perfect diffused light — don\'t wait for sunshine to shoot',
        ],
      },
      {
        slug: 'composition-and-backdrops',
        title: 'Composition and Backdrops',
        duration: '9 min',
        content: `Great light gets buyers to linger on your photo. Great composition guides their eye to exactly what you want them to see. Together they determine whether a buyer clicks — and in Etsy search, a click is everything.

**The rule of thirds**

The most useful composition principle in photography: imagine your frame divided into a 3×3 grid (you can enable this in your phone's camera settings). Place your subject at one of the four intersection points of those grid lines rather than dead center.

Why does this work? The human eye doesn't naturally rest at the center of an image — it moves in an "F" or "Z" pattern, scanning from upper left to upper right and down. Placing your subject slightly off-center creates a more dynamic image that holds attention longer.

That said: rules exist to be broken. Clean, centered product shots on white backgrounds are a staple of Etsy photography for good reason — they're clear, professional, and easy to scan. Use off-center compositions for lifestyle and styled shots, not necessarily for your primary listing thumbnail.

**Negative space**

Negative space is the empty area around your subject. Most beginners fill the frame — the product takes up 90% of the image with no breathing room. Professional product photography consistently uses generous negative space.

Why: empty space draws the eye to the subject. A candle floating in a sea of white background reads more premium than the same candle jammed edge-to-edge in the frame. The space communicates calm, intentionality, and quality.

Leave at least 20–30% of your frame as empty space around your primary subject.

**Backdrop options and what they communicate**

Your backdrop is not neutral — it communicates something about your brand. Choose intentionally.

**White or very light gray** creates a clean, e-commerce look that puts all attention on the product. It photographs neutrally, is easy to make consistent, and is the universal starting point. Works for virtually every category.

**Natural textures** — linen, raw cotton, unbleached paper, weathered wood — communicate artisan quality, warmth, and handmade authenticity. Excellent for candles, ceramics, jewelry, and anything with a "slow living" or cottagecore aesthetic.

**Marble contact paper** ($12 on Amazon) photographs beautifully as a surface and reads as upscale. Works well for skincare, jewelry, and cosmetics.

**Colored paper** from an art or craft store adds mood and seasonality. A dusty sage green backdrop for spring products, deep burgundy for fall. Change it every season.

The most important rule: whatever you choose, use it consistently. A shop with 40 listings shot on 6 different backdrops looks chaotic. A shop with 40 listings all shot on the same warm linen looks curated and professional — even if the individual photos are imperfect.`,
        takeaways: [
          'Use the rule of thirds for lifestyle shots; centered compositions work well for clean product thumbnails',
          'Leave 20–30% of the frame as empty space — negative space makes products read as premium',
          'Your backdrop communicates your brand — choose it intentionally and use it consistently',
          'Consistency across all your listing photos creates a curated, professional shop aesthetic',
        ],
      },
      {
        slug: 'iphone-camera-settings',
        title: 'iPhone Settings and Camera Techniques',
        duration: '8 min',
        content: `The gap between your phone's default camera output and professional-looking product shots is almost entirely determined by how you use the settings — not the hardware. Modern iPhones (and most recent Android phones) have more than enough capability to produce excellent product photography. Here's how to unlock it.

**Portrait mode for hero shots**

Portrait mode uses the phone's depth sensor and computational photography to blur the background (creating "bokeh") while keeping the subject sharp. This effect — traditionally only achievable with expensive camera lenses — immediately elevates the perceived quality of a product shot.

Best conditions for Portrait mode: product 1–3 feet from the camera, distinct contrast between subject and background, good light. Portrait mode struggles in low light and with very flat, textureless subjects.

Use it for your primary hero shots and close-up detail images. Switch to standard photo mode for flat lays and overhead shots where you want everything in focus.

**Lock your exposure and focus**

The biggest frustration with phone cameras in product photography: they keep adjusting exposure and focus as you move, resulting in inconsistently lit shots. Fix this with AE/AF lock.

Tap and hold on your subject in the Camera app until you see "AE/AF Lock" appear at the top of the screen. This locks both the exposure (brightness) and focus point. The camera will no longer adjust as you move the phone slightly or as ambient light changes. Every shot in the sequence will be consistent.

Tap elsewhere on the screen to release the lock when you want to recompose.

**Enable the grid**

Go to Settings → Camera → Grid and turn it on. The grid divides your viewfinder into thirds both horizontally and vertically — the lines you need for rule-of-thirds composition. Having them visible while you're shooting makes compositional decisions intuitive rather than guesswork.

**Shoot in ProRAW (iPhone 12 Pro and later)**

ProRAW captures significantly more image data than standard JPEG — specifically in the highlight and shadow areas. When you edit in Lightroom Mobile, ProRAW files give you more latitude to recover detail in bright or dark areas without the image looking artificial.

The tradeoff: ProRAW files are 10–25 MB each versus 3–5 MB for JPEG. This uses more storage but is worth it for product photography where you're shooting a limited number of intentional frames rather than hundreds of snapshots.

**Shoot multiple orientations**

Etsy listing thumbnails display as squares. Shoot each setup in both square/horizontal and vertical orientations so you have options when cropping without losing important parts of the image. Vertical images also work for Pinterest and Instagram Stories, extending the usefulness of each shoot.

**A note on ring lights**

Ring lights create a distinctive circular reflection in shiny or glossy surfaces — visible in the eyes of portraits, in the glaze of ceramics, in jewelry and glass. For most product photography, ring lights are actually a poor choice because of this. Window light produces no visible reflection and looks more natural. Reserve ring lights for video content where the reflection is less visible.`,
        takeaways: [
          'Portrait mode creates professional bokeh blur — use it for hero shots and close-up detail photos',
          'Tap and hold to set AE/AF lock — this keeps exposure and focus consistent across a sequence of shots',
          'Enable the camera grid in Settings for easier rule-of-thirds composition while shooting',
          'Shoot in ProRAW for more editing flexibility — especially useful for recovering highlights and shadows',
        ],
      },
      {
        slug: 'editing-photos-free',
        title: 'Editing Your Photos for Free',
        duration: '10 min',
        content: `Shooting is half the job. Editing is where good photos become great ones. The good news: the best photo editing tool for product photography is completely free, and the workflow takes about 90 seconds per image once you've learned it.

**Lightroom Mobile: the free standard**

Adobe Lightroom Mobile has a robust free tier that covers everything you need for product photo editing. It's available on both iOS and Android. The interface is clean, the controls are precise, and — critically — you can create and save presets that apply a consistent edit to every photo in your shop with one tap.

Download it. Everything in this lesson assumes you're using it.

**The editing workflow**

**Step 1: White Balance.** This is your first and most important adjustment. White balance determines whether whites in your image look truly white or have a color cast (yellow from warm light, blue from cool light). Drag the Temperature slider left to cool the image (remove yellow), right to warm it (add warmth). Stop when white areas look like clean white paper.

**Step 2: Exposure.** Adjust overall brightness. For product photography, err slightly toward brighter — a touch overexposed reads more fresh and clean than a slightly dark image. Pull up until the product looks bright and clear without blowing out (losing detail in) the brightest areas.

**Step 3: Contrast.** A small contrast increase (around +15–25) adds depth and dimension to the image. Be subtle — too much contrast looks harsh.

**Step 4: Highlights and Shadows.** If bright areas look blown out, pull Highlights down slightly to recover detail. If dark areas look muddy, push Shadows up slightly to lift them.

**Step 5: Clarity.** Clarity adds mid-tone contrast, which enhances the appearance of texture and sharpness. A small boost (+10–15) makes fabric look more tactile, ceramic glazes more luminous, and wood grain more visible. Don't overdo it — heavy clarity processing looks crunchy.

**Step 6: Vibrance.** Vibrance gently increases color saturation without oversaturating skin tones or already-vivid colors. A slight Vibrance boost (+10–20) makes colors feel more alive without looking artificial.

**Creating a preset**

Once you've edited one photo to look exactly how you want, save those settings as a preset (tap the "..." menu → Create Preset). Name it something like "SellerBuds Product." For every subsequent product photo, import it, tap your preset, and you're 80% of the way to done. Minor tweaks for individual photos take 20–30 seconds.

This creates visual consistency across your entire shop — every photo has the same color temperature, brightness, and tonal quality — which is one of the strongest signals of a professional, trustworthy shop.

**What to avoid**

Avoid Instagram-style filters. Buyers can immediately identify heavy filter processing, and it creates a mismatch between the photo and the actual product — which leads to disappointment on receipt and poor reviews.

Avoid cropping too aggressively. If you need to crop significantly, you probably needed to move the camera closer or reframe during the shoot.

Avoid sharpening tools unless you really know what you're doing. Heavy sharpening creates digital artifacts around edges that look unnatural in print-sized versions.

Your edits should make the product look its very best version of itself — not a different product entirely.`,
        takeaways: [
          'Lightroom Mobile\'s free tier covers everything you need — download it and learn these six adjustments',
          'Fix white balance first — it\'s the most impactful single edit you can make to a product photo',
          'Save your settings as a Lightroom preset and apply it to every photo for consistent shop aesthetics',
          'Avoid heavy filters — your edit should make the product look like its best real self, not a different product',
        ],
      },
    ],
  },
]

export function getCourse(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug)
}

export function getLesson(courseSlug: string, lessonSlug: string): { course: Course; lesson: Lesson; index: number } | undefined {
  const course = getCourse(courseSlug)
  if (!course) return undefined
  const index = course.lessons.findIndex(l => l.slug === lessonSlug)
  if (index === -1) return undefined
  return { course, lesson: course.lessons[index], index }
}
