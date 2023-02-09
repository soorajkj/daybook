import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database';

export const createBrowserClient = () =>
  createBrowserSupabaseClient<Database>();
