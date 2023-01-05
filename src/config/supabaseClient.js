import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL
const supabaseKey = import.meta.env.REACT_APP_ANON_KEY
const Supabase = createClient(supabaseUrl, supabaseKey) 

export default Supabase;