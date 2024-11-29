
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VybG50dWNxeXR4dWxvcHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NTI4NDcsImV4cCI6MjA0ODMyODg0N30.6ZIwGWhX3ZnWIcpG7LFmfpcGBQWJA_oPUEWCmoX20N8';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or API key is missing.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
