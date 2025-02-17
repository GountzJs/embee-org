import { useEffect, useRef } from 'react';

interface InfiniteScrollObserverProps {
  onIntersect: () => void;
  isLoading: boolean;
  threshold?: number;
  disabled?: boolean;
}

export function InfiniteScrollObserver({
  onIntersect,
  isLoading,
  threshold = 1.0,
  disabled = false,
}: InfiniteScrollObserverProps) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !disabled) {
          onIntersect();
        }
      },
      { threshold },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading, onIntersect, threshold, disabled]);

  return (
    <div
      ref={sentinelRef}
      style={{ height: '20px', background: 'transparent' }}
    />
  );
}
