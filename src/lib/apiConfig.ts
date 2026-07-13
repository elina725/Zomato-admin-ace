const defaultApiUrl = 'https://zomato-backend-production-cf7a.up.railway.app/api';

// Override this value per environment with VITE_API_URL.
export const API_URL = (import.meta.env.VITE_API_URL || defaultApiUrl).replace(/\/$/, '');
