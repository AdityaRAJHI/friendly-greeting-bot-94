import { NavigateFunction } from 'react-router-dom';

export const checkAuth = (navigate: NavigateFunction) => {
  const token = localStorage.getItem('auth_token');
  
  if (!token) {
    navigate('/opening');
    return false;
  }
  return true;
};

export const setAuthToken = (token: string) => {
  localStorage.setItem('auth_token', token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('auth_token');
};