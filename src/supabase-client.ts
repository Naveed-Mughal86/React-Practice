import {createClient} from "@supabase/supabase-js"

export const supabase = createClient(
    "https://vaunbkfqcicvsjzivoqt.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhdW5ia2ZxY2ljdnNqeml2b3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0NDQ4NzksImV4cCI6MjA5MTAyMDg3OX0.NkAa6pcr-wds_1ZOimTG9FDtNYvwsXajuYEu2xd4gKY"
)