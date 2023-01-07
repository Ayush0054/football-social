import { createClient } from '@supabase/supabase-js'
// import {  supabaseKey, supabaseUrl } from './constants'
console.log(import.meta.env.VITE_SUPABASE_URL);
export const supabase = createClient(
   import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_ANON_KEY
);