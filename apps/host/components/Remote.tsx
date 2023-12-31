import dynamic from 'next/dynamic';
import { Suspense } from 'react';

//@ts-ignore
const RemoteIndex = dynamic(() => import('remote/pages/index'), {
  ssr: true,
});

export const RemoteApp = () => {
  return (
    <Suspense fallback="Loading remote app...">
      <RemoteIndex />
    </Suspense>
  );
};
