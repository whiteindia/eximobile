-- ============================================================
-- EXIMOBILE — Supabase Database Schema
-- Run this in Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. Inquiries table
--    Stores all contact form submissions from the website.
CREATE TABLE IF NOT EXISTS inquiries (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name         text        NOT NULL,
  email        text        NOT NULL,
  phone        text,
  company      text,
  country      text,
  product_slug text,
  message      text        NOT NULL,
  status       text        NOT NULL DEFAULT 'new'
                           CHECK (status IN ('new', 'read', 'replied')),
  created_at   timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security (inquiries are insert-only from the public)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (website visitors submitting the form)
CREATE POLICY "Allow public inserts" ON inquiries
  FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated users (admins) can read/update inquiries
CREATE POLICY "Allow authenticated reads" ON inquiries
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated updates" ON inquiries
  FOR UPDATE TO authenticated USING (true);

-- Index for fast sorting in the admin panel
CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS inquiries_status_idx ON inquiries (status);


-- 2. WhatsApp click tracking table
--    Logs every WhatsApp button click from the website.
CREATE TABLE IF NOT EXISTS whatsapp_clicks (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  page       text,                           -- e.g. "home-hero", "product-detail"
  product    text,                           -- product slug if on a product page
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE whatsapp_clicks ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (tracking fires on click)
CREATE POLICY "Allow public inserts" ON whatsapp_clicks
  FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated users can view analytics
CREATE POLICY "Allow authenticated reads" ON whatsapp_clicks
  FOR SELECT TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS whatsapp_clicks_created_at_idx ON whatsapp_clicks (created_at DESC);


-- ============================================================
-- Optional: Verify tables were created
-- ============================================================
-- SELECT table_name FROM information_schema.tables
-- WHERE table_schema = 'public'
-- ORDER BY table_name;
