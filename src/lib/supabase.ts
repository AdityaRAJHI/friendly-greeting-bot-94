import { createClient } from '@supabase/supabase-js';

// Default values for development - replace these with your actual Supabase project values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://fwdldbdaspvxowvnlozv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3ZGxkYmRhc3B2eG93dm5sb3p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MzQ0MjksImV4cCI6MjA0ODMxMDQyOX0.Xrx2oTIYxcbhMhTJCtUyQp1SKOAt_ojOsCdtXOuWKFU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const uploadProfileImage = async (file: File) => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `profile-images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('profile-images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('profile-images')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};