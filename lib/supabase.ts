import { createClient } from "@supabase/supabase-js";

// Safe lazy getter — returns null if env vars are not configured yet
export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

// Named export for convenience — may be null at build time
export const supabase = getSupabase();
