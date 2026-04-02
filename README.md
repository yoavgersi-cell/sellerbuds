# SellerBuds

A magazine-style blog and community for Etsy sellers. Built with Next.js 14, Supabase, and Tailwind CSS.

## Features

- Magazine-style homepage with featured article and most-read sidebar
- Article pages with simple markdown rendering
- Category pages (Growth, Marketing, Pricing, Photography, Stories)
- Newsletter signup with Supabase persistence
- Admin panel to create and edit articles
- Works in demo mode with mock data (no Supabase required)
- Fully responsive, mobile-first design
- Deploy-ready for Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials (or leave as-is to run in demo mode with mock data).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Setup (Optional)

To enable real data persistence:

1. Create a project at [supabase.com](https://supabase.com)
2. Run the SQL in `supabase/schema.sql` in the Supabase SQL editor
3. Optionally run `supabase/seed.sql` to populate sample articles
4. Copy your project URL and anon key to `.env.local`

### Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key |

## Project Structure

```
src/
  app/
    page.tsx              # Homepage
    article/[slug]/       # Article detail pages
    category/[slug]/      # Category listing pages
    newsletter/           # Newsletter signup page
    admin/                # Admin article management
    api/
      subscribe/          # Newsletter subscription endpoint
      admin/articles/     # Article CRUD endpoints
  components/
    Header.tsx            # Site header with navigation
    Footer.tsx            # Site footer
    ArticleCard.tsx       # Article card (featured + grid variants)
    NewsletterForm.tsx    # Email signup form
  lib/
    supabase.ts           # Supabase client + types
    articles.ts           # Data access functions
    mock-data.ts          # Sample articles for demo mode
supabase/
  schema.sql              # Database schema
  seed.sql                # Sample data
```

## Pages

- `/` - Homepage with featured article, most-read sidebar, and article grid
- `/article/[slug]` - Full article with content rendering
- `/category/[slug]` - Articles filtered by category
- `/newsletter` - Newsletter signup
- `/admin` - Article management (list, create, edit)

## Deploying to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add your Supabase environment variables in Vercel project settings
4. Deploy

## Design

- Primary color: `#C4612C` (warm orange)
- Background: `#FFF8F4` (warm off-white)
- Fonts: Playfair Display (serif headings) + Inter (body)
- Warm, editorial, magazine aesthetic
