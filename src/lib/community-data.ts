export type Question = {
  id: string
  title: string
  body: string
  category: 'SEO' | 'Pricing' | 'Photography' | 'Marketing' | 'General'
  author_name: string
  created_at: string
  reply_count: number
}

export type Reply = {
  id: string
  question_id: string
  body: string
  author_name: string
  created_at: string
}

export const mockQuestions: Question[] = [
  {
    id: '1',
    title: 'How do I know if my keywords are actually working?',
    body: `I've been optimizing my listings for about 3 months now — changed all my titles to include more specific phrases, filled all 13 tags, and rewrote my descriptions. But my views are still pretty flat. Is there any way to actually tell which keywords are bringing people in, or is it basically a guessing game? I feel like I'm just making changes without knowing if they help.`,
    category: 'SEO',
    author_name: 'CeramicsByLouise',
    created_at: '2026-03-28T14:22:00Z',
    reply_count: 3,
  },
  {
    id: '2',
    title: 'My competitors charge way less — should I lower my prices?',
    body: `I make hand-poured soy candles and I price them at $18–$24. I keep finding shops selling what looks like the same thing for $9–$12. My materials alone cost me $6 per candle. I know I shouldn't race to the bottom but I'm not getting many sales either. How do you compete with this without tanking your margins?`,
    category: 'Pricing',
    author_name: 'WickAndWarmth',
    created_at: '2026-03-27T09:15:00Z',
    reply_count: 4,
  },
  {
    id: '3',
    title: 'Best background colors for product photos on a budget?',
    body: `I've been using a white foam board as my backdrop but some of my products (mostly dark ceramics and navy blue items) just disappear against it. I can't afford a full photography setup. What cheap backdrop options are working for people? Specifically for items that don't pop against white.`,
    category: 'Photography',
    author_name: 'ThrowingPots_Jen',
    created_at: '2026-03-26T18:44:00Z',
    reply_count: 3,
  },
  {
    id: '4',
    title: 'Does renewing listings every day actually boost views?',
    body: `I've read conflicting things about this. Some people swear renewing gives you a visibility bump, others say it's a waste of 20 cents and does nothing meaningful. I have about 40 active listings. If I started renewing 5 a day would it help, or am I better off spending that money on Etsy ads?`,
    category: 'SEO',
    author_name: 'LavenderThreads',
    created_at: '2026-03-25T11:30:00Z',
    reply_count: 3,
  },
  {
    id: '5',
    title: 'Has anyone actually driven real traffic from Pinterest to their Etsy shop?',
    body: `I keep reading that Pinterest is great for Etsy sellers but I've been pinning consistently for 4 months and my Etsy stats show almost no traffic from it. I'm pinning my listings, lifestyle photos, and some "tips" content. Am I missing something, or is Pinterest just overhyped for Etsy at this point?`,
    category: 'Marketing',
    author_name: 'PaperGoodsPenny',
    created_at: '2026-03-24T16:05:00Z',
    reply_count: 3,
  },
  {
    id: '6',
    title: 'How long did it realistically take you to get your first sale?',
    body: `I opened my shop 6 weeks ago selling handmade resin bookmarks and earrings. I have 18 listings, decent photos (I think), and I've filled out all the tags and descriptions. Zero sales so far. I'm trying not to panic but it's hard. When did your first sale come in and what do you think finally triggered it?`,
    category: 'General',
    author_name: 'ResinDreamer_K',
    created_at: '2026-03-23T10:22:00Z',
    reply_count: 5,
  },
  {
    id: '7',
    title: 'Free shipping vs separate shipping cost — which actually converts better?',
    body: `I've seen a lot of advice saying to offer free shipping because Etsy favors it in search. But when I rolled free shipping into my prices, my items looked expensive compared to competitors. Has anyone actually tested both and seen a clear difference in conversion? And does Etsy really rank you higher for offering free shipping?`,
    category: 'Pricing',
    author_name: 'KnittedByMargo',
    created_at: '2026-03-22T13:50:00Z',
    reply_count: 3,
  },
  {
    id: '8',
    title: 'Should I use all 13 tags or just the most relevant ones?',
    body: `I've always heard "fill all 13 tags" but lately I've been wondering if that advice is actually sound. If I'm stretching to fill tags 11–13 with loosely related phrases, could those weak tags actually hurt my relevancy? Or does Etsy just ignore irrelevant tags and there's no downside to filling them all?`,
    category: 'SEO',
    author_name: 'LetterPressLena',
    created_at: '2026-03-21T08:17:00Z',
    reply_count: 3,
  },
  {
    id: '9',
    title: 'Window light vs ring light for jewelry photos — which is better?',
    body: `I sell silver and gemstone jewelry. I've been using a ring light and my photos look sharp but the silver looks a bit flat and cold. A friend told me to try a north-facing window instead. But natural light changes throughout the day and I need consistency. What do you use and what results have you gotten?`,
    category: 'Photography',
    author_name: 'SilverFernJewels',
    created_at: '2026-03-20T15:33:00Z',
    reply_count: 3,
  },
  {
    id: '10',
    title: 'Does cross-posting on Instagram actually drive Etsy visits?',
    body: `I've been posting my products on Instagram 3–4 times a week for 5 months. I have about 800 followers and get decent engagement but my Etsy shop referral traffic from Instagram is almost nothing — like 2–3 visits a week. Is Instagram just not a sales driver for Etsy shops, or am I doing something wrong?`,
    category: 'Marketing',
    author_name: 'MacrameeMoments',
    created_at: '2026-03-19T12:00:00Z',
    reply_count: 3,
  },
  {
    id: '11',
    title: 'How do you handle an unfair 1-star review without sounding defensive?',
    body: `I got my first 1-star review last week. The buyer said the item "looked different from the photo" but my photos are accurate and I have 47 five-star reviews. I want to respond but everything I draft sounds either defensive or sycophantic. What's the right way to handle this? Does responding even matter for future buyers?`,
    category: 'General',
    author_name: 'WoodBurnedWonders',
    created_at: '2026-03-18T09:44:00Z',
    reply_count: 4,
  },
  {
    id: '12',
    title: 'How do you price international shipping without losing money?',
    body: `I'm based in the UK and keep getting orders from the US, Canada and Australia. Every time I ship internationally I end up undercharging because I guessed the weight wrong or forgot to account for packaging. I'm losing £3–6 per international order. How do you accurately calculate international shipping upfront without just guessing?`,
    category: 'Pricing',
    author_name: 'ScottishSoapworks',
    created_at: '2026-03-17T17:20:00Z',
    reply_count: 3,
  },
  {
    id: '13',
    title: 'Is adding a video to your listing actually worth the effort?',
    body: `I keep seeing advice that listing videos boost rankings. But filming, editing, and uploading 40+ videos sounds like a massive time investment for something I can't measure. Has anyone actually seen a noticeable difference in views or sales after adding videos? And how much time does it realistically take per listing?`,
    category: 'SEO',
    author_name: 'FeltByFiona',
    created_at: '2026-03-15T11:55:00Z',
    reply_count: 3,
  },
  {
    id: '14',
    title: 'What single thing got you your first 100 sales?',
    body: `I'm at 23 sales after 4 months and feeling stuck. I've done keyword research, improved my photos, and tried running small Etsy ads ($1/day). Nothing seems to break the plateau. For those of you who've made it past 100 sales — what was the thing that finally moved the needle? I'll try almost anything at this point.`,
    category: 'Marketing',
    author_name: 'PotteryByNadia',
    created_at: '2026-03-12T14:30:00Z',
    reply_count: 5,
  },
  {
    id: '15',
    title: 'Second Etsy shop or just expand my current one?',
    body: `I sell minimalist prints and digital planners. I'm now thinking about adding handmade candles, but they're a totally different vibe and customer. Should I keep everything under one shop (it's established, has 200+ sales and good reviews) or open a second shop for the candles? I know managing two shops is more work but I'm worried about diluting my brand.`,
    category: 'General',
    author_name: 'StudioNineDesigns',
    created_at: '2026-03-10T10:00:00Z',
    reply_count: 3,
  },
]

export const mockReplies: Reply[] = [
  // Question 1 - SEO keywords
  {
    id: 'r1',
    question_id: '1',
    body: `eRank has a tool called "Listing Audit" that shows how each listing ranks for specific search terms. It's not perfect but it's the closest thing we have to keyword-level data on Etsy. Run your top listings through it and compare the keyword grades before and after changes. That's how I started measuring whether my optimizations actually did anything.`,
    author_name: 'PrintablesByDana',
    created_at: '2026-03-28T15:10:00Z',
  },
  {
    id: 'r2',
    question_id: '1',
    body: `Etsy doesn't give us keyword-level analytics, so it's always a bit indirect. What I do: pick one listing, change only the title and tags, then check views week over week. If views improve over 2–3 weeks, the change helped. If not, I revert. It's slow but it's the only real way to A/B test on Etsy. Flat views after 3 months though — have you checked whether your listing quality score (CTR and conversion) might be the bigger issue?`,
    author_name: 'VintageMapsShop',
    created_at: '2026-03-28T16:42:00Z',
  },
  {
    id: 'r3',
    question_id: '1',
    body: `One thing that helped me was checking what search terms buyers are actually using in the Etsy Shop Manager under Stats. It's limited but you can see search terms that led to your shop. If you're ranking for those terms but not converting, the issue might be photos or pricing rather than keywords.`,
    author_name: 'CeramicMug_Collective',
    created_at: '2026-03-29T09:00:00Z',
  },

  // Question 2 - Pricing competition
  {
    id: 'r4',
    question_id: '2',
    body: `Those $9 candles are almost certainly made with cheap paraffin, synthetic fragrance oils, and no testing. If yours are genuinely different — pure soy, quality fragrance, proper cure time — say so explicitly in your listing. Buyers who care about quality will pay more. Those who won't were never your customer anyway. Trying to compete on price with mass producers always ends badly.`,
    author_name: 'CandleCraft_Meg',
    created_at: '2026-03-27T10:05:00Z',
  },
  {
    id: 'r5',
    question_id: '2',
    body: `I was in the same spot with handmade soap. What changed things for me: I stopped showing only the product and started showing the process — the oils, the pours, the cure. Buyers suddenly understood why mine cost more. Your story and process are your differentiation. No $9 candle has that.`,
    author_name: 'SoapsByRuth',
    created_at: '2026-03-27T11:30:00Z',
  },
  {
    id: 'r6',
    question_id: '2',
    body: `Do a real cost analysis — materials + time (at minimum wage) + Etsy fees + shipping supplies + a profit margin. If your true cost is $6 before any of that, $18 is probably already too low. Raise your prices and position yourself as premium. It sounds counterintuitive but I got MORE sales at higher prices because I looked more legitimate.`,
    author_name: 'HandmadeWithHannah',
    created_at: '2026-03-27T14:20:00Z',
  },
  {
    id: 'r7',
    question_id: '2',
    body: `Totally agree with the others. Also — look at who's actually buying from those $9 shops. Check their reviews. A lot of the complaints are "smells fake," "melted weird," "wick was terrible." Those buyers will leave you 5 stars. Price yourself out of the bargain tier and into the "treat yourself" category.`,
    author_name: 'LuxeWickStudio',
    created_at: '2026-03-28T08:00:00Z',
  },

  // Question 3 - Photography backdrops
  {
    id: 'r8',
    question_id: '3',
    body: `For dark ceramics, a warm grey or warm beige backdrop works really well — the contrast makes the item visible without the harsh jump of white. I buy large sheets of kraft paper and matte grey cardstock from art supply stores for under $5. Change the texture too — a linen fabric or wooden board can make dark items look stunning.`,
    author_name: 'ClayAndFire_Studio',
    created_at: '2026-03-26T19:30:00Z',
  },
  {
    id: 'r9',
    question_id: '3',
    body: `I shoot a lot of navy and dark items. My go-to is a warm terracotta or blush pink foam board — total cost about $3 at a dollar store. It complements cool-toned products beautifully and photographs really warmly. Stay away from stark white for anything dark or navy, you're right that it kills the contrast.`,
    author_name: 'HomeDyeStudio',
    created_at: '2026-03-27T08:15:00Z',
  },
  {
    id: 'r10',
    question_id: '3',
    body: `Textured vinyl backdrops are a game changer. I got two rolls from Amazon for about $25 — a marble and a warm concrete texture. They're washable, crease-free, and give a very editorial look. Way better than foam board for anything you want to look high-end.`,
    author_name: 'ProductPhotoPro_Amy',
    created_at: '2026-03-27T11:00:00Z',
  },

  // Question 4 - Renewing listings
  {
    id: 'r11',
    question_id: '4',
    body: `The boost from renewing is real but tiny and short-lived — usually 24 to 48 hours max, and only in very competitive searches. For most sellers it's not worth the 20 cents per renewal. You'd be much better off spending that money on Etsy ads, which give you predictable, measurable placement. I stopped renewing manually months ago and noticed no difference.`,
    author_name: 'SellerStrategist_Tom',
    created_at: '2026-03-25T12:15:00Z',
  },
  {
    id: 'r12',
    question_id: '4',
    body: `There's some evidence that renewing helps in less competitive niches where new listings get more air time. But in crowded categories, the algorithm weighs conversion rate and listing quality so heavily that a fresh renewal without strong sales history won't move the needle. Focus on getting existing listings to convert better — that compounds over time.`,
    author_name: 'EtsySEO_Maria',
    created_at: '2026-03-25T14:00:00Z',
  },
  {
    id: 'r13',
    question_id: '4',
    body: `I tested this for 6 weeks — renewed 5 listings per day, tracked views in a spreadsheet. Tiny bump on the day of renewal, gone within 48 hours. Spent $28 total, net views increase was maybe 15 across all listings. Not worth it. That same $28 in ads got me 12 sales. Ads win every time.`,
    author_name: 'DataDrivenDave_Etsy',
    created_at: '2026-03-26T09:30:00Z',
  },

  // Question 5 - Pinterest
  {
    id: 'r14',
    question_id: '5',
    body: `Pinterest traffic is very real but it takes longer than most people expect — typically 6 to 12 months to build real momentum because Pinterest is a long-tail search engine, not a social feed. The key is pinning keyword-rich content (not just products), like "10 gift ideas for plant lovers" boards that link back to relevant listings. Are you treating it like social media or like search?`,
    author_name: 'PinterestPinnerPro',
    created_at: '2026-03-24T17:00:00Z',
  },
  {
    id: 'r15',
    question_id: '5',
    body: `I get about 30% of my Etsy traffic from Pinterest now but it took me 8 months to get there. What worked: creating "gift guide" pins instead of just product pins, writing keyword-heavy pin descriptions, and pinning consistently 5–10 times per week. Also, Idea Pins (video pins) dramatically increased my reach once I started using them.`,
    author_name: 'PaperFlowerCo',
    created_at: '2026-03-24T18:30:00Z',
  },
  {
    id: 'r16',
    question_id: '5',
    body: `Four months is not long enough to judge Pinterest results honestly. I'd give it 12 months before deciding it doesn't work for your shop. Make sure your pins link directly to individual listings, not your shop homepage, and that your pin titles and descriptions include the exact phrases buyers search on Pinterest — they're different from Etsy keywords.`,
    author_name: 'GiftGuideGuru_Etsy',
    created_at: '2026-03-25T10:00:00Z',
  },

  // Question 6 - First sale
  {
    id: 'r17',
    question_id: '6',
    body: `My first sale came at week 10, completely out of nowhere. Nothing specific triggered it — I just kept listing consistently (added 3 new listings per week) and suddenly started getting views. The advice I wish I'd had earlier: 18 listings isn't enough. Shops with 40+ listings get significantly more search visibility just because you're covering more search terms. Keep adding.`,
    author_name: 'FirstSaleVictory_Etsy',
    created_at: '2026-03-23T11:00:00Z',
  },
  {
    id: 'r18',
    question_id: '6',
    body: `Six weeks is very early. I didn't get my first sale until month 3, and I now have 300+ sales. What finally helped was getting honest feedback on my photos from the Etsy Seller community — my photos were worse than I thought. Also, resin bookmarks are in a very competitive category. Make sure your niche is specific enough (e.g., "floral resin bookmarks" not just "resin bookmarks").`,
    author_name: 'ResinQueenCrafts',
    created_at: '2026-03-23T12:30:00Z',
  },
  {
    id: 'r19',
    question_id: '6',
    body: `For me it was turning on Etsy ads at $1/day. Got my first sale within a week. I know ads cost money but they work immediately while your organic ranking builds up. Think of it as paying to accelerate the process while your shop gets real purchase data, which helps organic ranking later.`,
    author_name: 'WaxSealWonders',
    created_at: '2026-03-23T14:00:00Z',
  },
  {
    id: 'r20',
    question_id: '6',
    body: `Mine was week 8 and it was from a long-tail search I hadn't even targeted intentionally. Etsy's algorithm is slow at first because it has no data on you yet. Every listing that gets a click and a purchase teaches the algorithm who your buyers are. Once you have 5–10 sales with positive reviews, things tend to accelerate on their own. Hang in there.`,
    author_name: 'BotanicalPrints_Rosa',
    created_at: '2026-03-24T08:00:00Z',
  },
  {
    id: 'r21',
    question_id: '6',
    body: `Completely normal timeline. Also check: are your photos on a plain white background with no lifestyle context? That was killing my CTR for months. Adding one photo of the bookmark inside an actual book made a huge difference. Buyers need to see the product in use.`,
    author_name: 'BookLoverCrafts',
    created_at: '2026-03-24T10:00:00Z',
  },

  // Question 7 - Free shipping
  {
    id: 'r22',
    question_id: '7',
    body: `Etsy does give a slight boost to listings offering free shipping to the US, but it's not as significant as people make it out to be. What matters more is total price (listing + shipping) as buyers see it. If your free shipping version costs $24 and a competitor shows $18 + $4 shipping, you look more expensive even though you're cheaper. I'd test both and track conversion rates.`,
    author_name: 'EtsyDataNerd',
    created_at: '2026-03-22T14:30:00Z',
  },
  {
    id: 'r23',
    question_id: '7',
    body: `I tested both versions of the same listing for 30 days each. Free shipping had a higher conversion rate — about 8% vs 5.5% — even though the listed price was higher. Buyers seem to trust free shipping listings more. The psychology of seeing $0 shipping is real. I've kept free shipping ever since.`,
    author_name: 'SucculentPotDesigns',
    created_at: '2026-03-22T16:00:00Z',
  },
  {
    id: 'r24',
    question_id: '7',
    body: `Category matters a lot here. For gifts (my main product), free shipping is almost expected. For large or heavy items where shipping is obviously expensive, showing the real shipping cost is more honest and buyers don't begrudge it. Know your customer's expectations in your category.`,
    author_name: 'GiftWrapGallery',
    created_at: '2026-03-23T08:00:00Z',
  },

  // Question 8 - Tags
  {
    id: 'r25',
    question_id: '8',
    body: `Fill all 13, but make them count. The strategy that works for me: tags 1–4 cover my main product phrases, tags 5–8 cover the occasion/recipient ("gift for teacher," "housewarming gift"), tags 9–11 cover the aesthetic ("cottagecore," "vintage inspired"), tags 12–13 cover material or process ("hand stamped," "letterpress"). Never repeat what's already in your title word for word.`,
    author_name: 'TagMasterEtsy',
    created_at: '2026-03-21T09:00:00Z',
  },
  {
    id: 'r26',
    question_id: '8',
    body: `There's no evidence that weak tags hurt you — Etsy simply doesn't use them if they're not relevant to a query. So the downside of a mediocre tag is zero impressions from that tag, not a penalty. That said, 13 well-researched tags covering different search angles will always outperform 8 great ones. Always fill all 13.`,
    author_name: 'SEOSellerSarah',
    created_at: '2026-03-21T11:30:00Z',
  },
  {
    id: 'r27',
    question_id: '8',
    body: `One tactic: look at your competitors' listings (the ones ranking well) and see what their titles and visible tags include. Not to copy them, but to identify gaps. If everyone in your niche is tagging "minimalist jewelry" and nobody tags "understated fine jewelry," that gap might be an opportunity if buyers are searching for it.`,
    author_name: 'CompetitorWatcher_Etsy',
    created_at: '2026-03-22T08:00:00Z',
  },

  // Question 9 - Photography light
  {
    id: 'r28',
    question_id: '9',
    body: `North-facing window light is the gold standard for jewelry photography specifically because it's diffused, soft, and doesn't create the harsh reflections you get from direct light sources. The silver will show its true texture and luster. The consistency issue is real — I shoot in a 2-hour window every Tuesday morning when I know the light is right, and I batch all my photos at once.`,
    author_name: 'JewelryPhotoPro_Lin',
    created_at: '2026-03-20T16:30:00Z',
  },
  {
    id: 'r29',
    question_id: '9',
    body: `Ring lights are designed for portrait photography — they create a circular catchlight that looks great in eyes but weird on metal and gems. If you want consistent artificial light for jewelry, look into softbox lights or a lightbox tent. A basic lightbox tent for $30–40 on Amazon gives you diffused light from multiple angles that makes metal jewelry look beautiful.`,
    author_name: 'GoldsmithGallery',
    created_at: '2026-03-20T17:45:00Z',
  },
  {
    id: 'r30',
    question_id: '9',
    body: `I switched from ring light to a north window + white foam board reflector opposite the window. The difference in my silver photos was night and day — actual three-dimensional sparkle instead of flat bright. Test it on one piece and compare. The light might not be exactly the same every day but you can get very consistent results with the same window at the same time of day.`,
    author_name: 'SterlingCraft_Emma',
    created_at: '2026-03-21T08:30:00Z',
  },

  // Question 10 - Instagram
  {
    id: 'r31',
    question_id: '10',
    body: `Instagram rarely drives direct Etsy traffic for small accounts — the link friction (bio link only, no clickable links in posts) kills most purchase intent before it gets to your shop. What Instagram IS good for is social proof. When buyers find you on Etsy and then see an active Instagram with real photos and engagement, it builds trust and improves conversion. Think of it as a legitimacy signal, not a traffic channel.`,
    author_name: 'MultiChannelMaker',
    created_at: '2026-03-19T13:00:00Z',
  },
  {
    id: 'r32',
    question_id: '10',
    body: `Pinterest beats Instagram for Etsy traffic by a wide margin in my experience. Pinterest content has a long shelf life (pins drive traffic for years), links go directly to product pages, and it functions like a search engine. I'd strongly suggest putting half that Instagram time into Pinterest and tracking the difference over 6 months.`,
    author_name: 'TrafficTestingTanya',
    created_at: '2026-03-19T15:00:00Z',
  },
  {
    id: 'r33',
    question_id: '10',
    body: `800 followers is still small for driving meaningful traffic. Accounts with 5K–10K+ followers in a focused niche start seeing real referrals. If you enjoy Instagram for building community and showing your process, keep doing it — it's good for brand building. But if your only goal is Etsy traffic, you'll see faster returns from Etsy ads or Pinterest.`,
    author_name: 'MacrameeCommunity',
    created_at: '2026-03-20T09:00:00Z',
  },

  // Question 11 - Bad review
  {
    id: 'r34',
    question_id: '11',
    body: `Always respond, but respond for future buyers — not to the reviewer. Future buyers read your response, not the person who left it. My formula: acknowledge their experience briefly (without agreeing it was your fault), mention what you stand behind ("our photos are shot with natural light to show accurate color"), and offer a remedy. Keep it under 3 sentences. Calm, professional, helpful.`,
    author_name: 'ReviewResponsePro',
    created_at: '2026-03-18T10:30:00Z',
  },
  {
    id: 'r35',
    question_id: '11',
    body: `I used to stress about 1-star reviews. Now I have 180+ reviews and two 1-stars. Both actually help me because my responses look mature and the contrast makes the 5-stars look more credible. Buyers are suspicious of perfect ratings — a real shop occasionally gets an unreasonable customer. Don't over-explain or apologize excessively; it looks worse than the original review.`,
    author_name: 'VetranSeller_Carol',
    created_at: '2026-03-18T11:45:00Z',
  },
  {
    id: 'r36',
    question_id: '11',
    body: `You can also report a review to Etsy if it violates their policies — e.g., if it contains false factual statements or is about shipping rather than the item. Etsy rarely removes them but it's worth trying. In the meantime, focus on getting more 5-star reviews to bury it numerically. One 1-star in 50 reviews reads differently than one in 10.`,
    author_name: 'EtsyPolicyExpert',
    created_at: '2026-03-19T08:00:00Z',
  },
  {
    id: 'r37',
    question_id: '11',
    body: `My rule: wait 24 hours before responding to any negative review. The first draft I write is always too emotional. The second draft, written a day later, is professional and measured. Buyers can tell when a seller is upset in their response and it reads badly. Cool off, then respond calmly.`,
    author_name: 'WoodBurnedMike',
    created_at: '2026-03-19T10:00:00Z',
  },

  // Question 12 - International shipping
  {
    id: 'r38',
    question_id: '12',
    body: `Get a digital kitchen scale and weigh everything including your packaging materials — box, tissue paper, tape, inserts. Then check the actual carrier rates (Royal Mail for UK, with zone-specific pricing for US/CA/AU) at your exact weights. Build in a 10–15% buffer to account for dimensional weight surcharges. I've used a spreadsheet with all my item + packaging weights for a year now and I've stopped losing money on international orders.`,
    author_name: 'UKSellerTips_Ben',
    created_at: '2026-03-17T18:00:00Z',
  },
  {
    id: 'r39',
    question_id: '12',
    body: `The mistake most people make is forgetting dimensional weight. Carriers charge based on whichever is higher — actual weight or dimensional weight (length × width × height / a divisor). A light but bulky package can cost significantly more than its actual weight suggests. Run your typical packages through the carrier's online calculator with actual measurements.`,
    author_name: 'ShippingSmarts_UK',
    created_at: '2026-03-18T09:30:00Z',
  },
  {
    id: 'r40',
    question_id: '12',
    body: `Consider setting international shipping as a flat rate slightly above your average actual cost. It means you occasionally overcharge by a little and occasionally undercharge a little, but it averages out and saves you the mental effort of recalculating every order. Make sure your flat rate reflects your heaviest typical item, not your lightest.`,
    author_name: 'EtsyUKProSeller',
    created_at: '2026-03-18T14:00:00Z',
  },

  // Question 13 - Videos
  {
    id: 'r41',
    question_id: '13',
    body: `Yes, absolutely worth it, but you don't need to do all 40 at once. Start with your 5 highest-traffic listings and add a simple 15-second video to each — just your hands holding and rotating the product, or showing it in use, shot vertically on your phone in good light. I added videos to my top 10 listings over two weeks and saw a 20–30% view increase on those listings within a month.`,
    author_name: 'VideoAddedValue',
    created_at: '2026-03-15T13:00:00Z',
  },
  {
    id: 'r42',
    question_id: '13',
    body: `The time investment is much less than you think once you have a process. I do 5 videos in about 45 minutes — same backdrop, same light, just different products. The editing is minimal (trim the clip, that's it). Etsy's own data showed listings with video convert better, and multiple high-volume sellers have reported ranking improvements. It's one of the highest ROI things you can do right now.`,
    author_name: 'FeltArtistFlo',
    created_at: '2026-03-15T15:00:00Z',
  },
  {
    id: 'r43',
    question_id: '13',
    body: `The ranking boost is real in competitive categories. I sell wedding stationery and added videos to my top 8 listings. Within 6 weeks, 3 of them moved to the first page for their main keyword. Could be coincidence, but the timing lined up perfectly with the video uploads. The video doesn't even have to be fancy — just smooth and well-lit.`,
    author_name: 'WeddingPaperCo',
    created_at: '2026-03-16T09:00:00Z',
  },

  // Question 14 - 100 sales
  {
    id: 'r44',
    question_id: '14',
    body: `For me it was switching from generic descriptions to really specific ones that addressed buyer questions before they asked them: dimensions, what it's made of, how it's packaged, processing time, whether it's food-safe, everything. My conversion rate jumped from 1% to 3.5% almost overnight. At 23 sales, you have enough shop data to see where buyers are dropping off — check your listing stats for visit-to-purchase ratios.`,
    author_name: 'ConversionCoach_Etsy',
    created_at: '2026-03-12T15:30:00Z',
  },
  {
    id: 'r45',
    question_id: '14',
    body: `I hit 100 sales after I started posting regularly on a ceramics Facebook group — not selling, just showing my process and answering questions. People would ask where to buy and I'd mention my Etsy shop. Community selling is underrated. Not Instagram or TikTok — actual interest-based communities where your potential buyers already hang out.`,
    author_name: 'CommunitySellerPaula',
    created_at: '2026-03-12T17:00:00Z',
  },
  {
    id: 'r46',
    question_id: '14',
    body: `The single thing that broke my plateau was niching down harder. I was selling "handmade pottery" and switched to "handmade pottery for plant lovers" — renamed listings, added new photos with plants, targeted plant-specific keywords. Suddenly I was a big fish in a smaller pond. From 20 sales to 100+ in about 3 months after that pivot.`,
    author_name: 'PlantPotteryStudio',
    created_at: '2026-03-13T08:00:00Z',
  },
  {
    id: 'r47',
    question_id: '14',
    body: `Etsy ads at $1–2/day for 30 days, pointed at your best-converting listing. Don't spread the budget thin across all listings. Pick your one strongest listing and put all the ad spend on it to get purchase data quickly. That purchase history then boosts its organic ranking. After 30 days you can widen the ad spend. This is the fastest repeatable method I've found.`,
    author_name: 'AdsStrategyNick',
    created_at: '2026-03-13T11:00:00Z',
  },
  {
    id: 'r48',
    question_id: '14',
    body: `Getting featured in a gift guide blog or newsletter — even a small one — gave me a sudden burst of 15 sales in 3 days that kickstarted my algorithm ranking. I sent 10 personal emails to small gift-guide bloggers in my niche. Three of them featured me for free. You don't need to go viral, just get one good placement.`,
    author_name: 'BlogFeatureSeller',
    created_at: '2026-03-14T09:00:00Z',
  },

  // Question 15 - Second shop
  {
    id: 'r49',
    question_id: '15',
    body: `The general advice is: two very different audiences and aesthetics = two shops. Buyers who find you via minimalist digital planners will be confused by candles and vice versa. More importantly, Etsy rewards niche consistency — if 60% of your shop's items are candles after you add them, your shop will start ranking for candle searches but your print audience may drift. It's cleaner to keep them separate.`,
    author_name: 'MultiShopMaster',
    created_at: '2026-03-10T11:00:00Z',
  },
  {
    id: 'r50',
    question_id: '15',
    body: `I have two shops and honestly it doubles the work for not quite double the income. The SEO, photography, fulfillment, and customer service demands add up. Unless candles are going to be a substantial income stream (at least 30% of your total Etsy revenue), I'd stay focused on growing the shop you already have. 200 sales is still early — there's a lot of room to grow before diversifying.`,
    author_name: 'TwoShopTruth_Leah',
    created_at: '2026-03-10T13:30:00Z',
  },
  {
    id: 'r51',
    question_id: '15',
    body: `You could test the candle market with a few listings in your current shop first, see if they sell, and only open a separate shop if they take off. That way you validate demand without the overhead of managing two shops. If candles become 50+ listings and strong sellers, then split. But don't pre-emptively solve a problem you don't have yet.`,
    author_name: 'TestBeforeLeap_Etsy',
    created_at: '2026-03-11T09:00:00Z',
  },
]

export function getMockQuestions(): Question[] {
  return mockQuestions
}

export function getMockQuestion(id: string): { question: Question | null; replies: Reply[] } {
  const question = mockQuestions.find(q => q.id === id) || null
  const replies = question ? mockReplies.filter(r => r.question_id === id) : []
  return { question, replies }
}
