-- Run this in your Supabase SQL editor to set up the community forum tables.

-- Questions table
create table public.questions (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  body text not null,
  category text not null check (category in ('SEO', 'Pricing', 'Photography', 'Marketing', 'General')),
  author_name text not null default 'Anonymous Seller',
  created_at timestamptz default now(),
  reply_count integer default 0
);

-- Replies table
create table public.replies (
  id uuid default gen_random_uuid() primary key,
  question_id uuid not null references public.questions(id) on delete cascade,
  body text not null,
  author_name text not null default 'Anonymous Seller',
  created_at timestamptz default now()
);

-- Trigger: auto-update reply_count when a reply is added or deleted
create or replace function public.update_reply_count()
returns trigger language plpgsql as $$
begin
  if TG_OP = 'INSERT' then
    update public.questions set reply_count = reply_count + 1 where id = NEW.question_id;
  elsif TG_OP = 'DELETE' then
    update public.questions set reply_count = reply_count - 1 where id = OLD.question_id;
  end if;
  return null;
end;
$$;

create trigger on_reply_change
after insert or delete on public.replies
for each row execute function public.update_reply_count();

-- Row Level Security
alter table public.questions enable row level security;
alter table public.replies enable row level security;

create policy "Anyone can read questions"  on public.questions for select using (true);
create policy "Anyone can post questions"  on public.questions for insert with check (true);
create policy "Anyone can read replies"    on public.replies   for select using (true);
create policy "Anyone can post replies"    on public.replies   for insert with check (true);
