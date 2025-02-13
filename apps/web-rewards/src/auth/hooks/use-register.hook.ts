import { useEffect } from 'react';
import { registerUser } from '../services/register';
import { useSessionStore } from '../store/session.store';

export function useRegisterHook() {
  const accessToken = useSessionStore((state) => state.token);

  useEffect(() => {
    if (!accessToken) return;
    registerUser(accessToken).catch((err) => console.log(err));
  }, [accessToken]);
}
