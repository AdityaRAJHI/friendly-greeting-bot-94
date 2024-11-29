import { supabase } from './supabase';

export const api = {
  setAuthHeader: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.access_token) {
      return {
        Authorization: `Bearer ${session.access_token}`,
      };
    }
    return {};
  },

  handleError: (error: any) => {
    console.error('API Error:', error);
    throw error;
  },

  get: async (url: string) => {
    try {
      const headers = await api.setAuthHeader();
      const response = await fetch(url, { headers });
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      return api.handleError(error);
    }
  },

  post: async (url: string, data: any) => {
    try {
      const headers = await api.setAuthHeader();
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      return api.handleError(error);
    }
  },
};