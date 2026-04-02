-- Create articles table
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  category TEXT CHECK (category IN ('Growth', 'Marketing', 'Pricing', 'Photography', 'Stories')),
  author TEXT,
  read_time INTEGER DEFAULT 5,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  featured BOOLEAN DEFAULT FALSE,
  cover_image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create subscribers table
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Public can read articles
CREATE POLICY "Articles are publicly readable" ON articles
  FOR SELECT USING (true);

-- Public can insert articles (for admin, no auth needed)
CREATE POLICY "Articles can be inserted" ON articles
  FOR INSERT WITH CHECK (true);

-- Public can update articles
CREATE POLICY "Articles can be updated" ON articles
  FOR UPDATE USING (true);

-- Public can insert subscribers (newsletter signup)
CREATE POLICY "Anyone can subscribe" ON subscribers
  FOR INSERT WITH CHECK (true);
