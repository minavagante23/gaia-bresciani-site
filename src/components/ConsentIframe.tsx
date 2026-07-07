'use client';

import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { hasFunctionalConsent } from '@/lib/cookies';

interface ConsentIframeProps {
  src: string;
  title: string;
  className?: string;
  mapsUrl?: string;
}

export default function ConsentIframe({ src, title, className, mapsUrl }: ConsentIframeProps) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(hasFunctionalConsent());

    const handleChange = () => setAllowed(hasFunctionalConsent());
    window.addEventListener('cookie-consent-change', handleChange);
    return () => window.removeEventListener('cookie-consent-change', handleChange);
  }, []);

  if (allowed) {
    return (
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        className={className}
      />
    );
  }

  return (
    <div className={`${className} bg-primary/[0.03] border border-primary/[0.08] flex flex-col items-center justify-center gap-4 text-center px-6`}>
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
        <MapPin size={22} className="text-accent" />
      </div>
      <div>
        <p className="text-sm font-medium text-primary mb-1">Mappa non disponibile</p>
        <p className="text-xs text-primary/55 leading-relaxed max-w-xs">
          Per visualizzare la mappa interattiva, accetta i cookie funzionali.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <button
          onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
          className="btn-outline py-2 px-4 text-xs"
        >
          Gestisci cookie
        </button>
        {mapsUrl && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Apri la sede in Google Maps"
            className="btn-accent py-2 px-4 text-xs gap-1.5"
          >
            <MapPin size={13} />
            Apri in Google Maps
          </a>
        )}
      </div>
    </div>
  );
}
