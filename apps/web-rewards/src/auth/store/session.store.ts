import { create } from 'zustand';

const ACCESS_TOKEN_KEY = 'access_token';

interface SessionStore {
  isAuthenticated: boolean;
  token: string | null;
  setSession: (token: string) => void;
  cleanSession: () => void;
}

const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY) || null;

export const useSessionStore = create<SessionStore>((set) => ({
  isAuthenticated: !!accessToken,
  token: accessToken,
  setSession: (token: string) =>
    set(() => {
      sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
      return { token, isAuthenticated: true };
    }),
  cleanSession: () =>
    set(() => {
      sessionStorage.removeItem(ACCESS_TOKEN_KEY);
      return { token: null, isAuthenticated: false };
    }),
}));
