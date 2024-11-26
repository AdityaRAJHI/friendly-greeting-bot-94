export const loggerMiddleware = (action: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${new Date().toISOString()}] ${action}:`, data || '');
  }
};