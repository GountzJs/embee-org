import { useEffect, useState } from 'react';

interface Props {
  value: string;
}

export function useDebounceUsersHook({ value }: Props) {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isBouncing, setIsbouncing] = useState(false);

  useEffect(() => {
    if (value.length >= 3) {
      if (timer) clearTimeout(timer);
      setIsbouncing(true);
      setTimer(
        setTimeout(() => {
          setIsbouncing(false);
          if (value === debouncedValue) return;
          setDebouncedValue(value);
        }, 1000),
      );
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {
    value: debouncedValue,
    isBouncing,
  };
}
