'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ScrollProgressBar = dynamic(() => import('./ScrollProgressBar'), { ssr: false });
const FloatingContact = dynamic(() => import('./FloatingContact'), { ssr: false });
const CookieBanner = dynamic(() => import('./CookieBanner'), { ssr: false });

interface DeferredChromeProps {
  timeoutMs?: number;
}

export default function DeferredChrome({ timeoutMs = 2500 }: DeferredChromeProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mount = () => setReady(true);

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(mount, { timeout: timeoutMs });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(mount, Math.min(timeoutMs, 1500));
    return () => clearTimeout(timer);
  }, [timeoutMs]);

  if (!ready) return null;

  return (
    <>
      <ScrollProgressBar />
      <FloatingContact />
      <CookieBanner />
    </>
  );
}
