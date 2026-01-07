import Home from '@/interfaces/home/page';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Home />
    </Suspense>
  );
}
