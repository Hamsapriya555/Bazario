// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dmudwreqlwpalkidlqjc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtdWR3cmVxbHdwYWxraWRscWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MDg1MDQsImV4cCI6MjA2OTA4NDUwNH0.Cqm5zr0XXp9EgwkSgGpnq9o5JE8g1n3vHvr41Ff5Xao";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});