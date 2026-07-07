'use client';

import { useEffect, useState, type ReactNode } from 'react';

interface DeferredMountProps {
  children: ReactNode;
  timeoutMs?: number;
}

export default function DeferredMount({ children, timeoutMs = 2500 }: DeferredMountProps) {
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

  return <>{children}</>;
}
