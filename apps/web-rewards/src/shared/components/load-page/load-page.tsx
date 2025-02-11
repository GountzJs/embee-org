import { Suspense } from 'react';

interface Props {
  children: React.ReactNode;
}

export function LoadPage({ children }: Props) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
