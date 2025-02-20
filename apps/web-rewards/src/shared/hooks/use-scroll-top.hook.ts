import { useEffect } from 'react';

export function useScrollTopHook() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
}
