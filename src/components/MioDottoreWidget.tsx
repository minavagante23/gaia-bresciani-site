'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'lucide-react';
import { hasFunctionalConsent } from '@/lib/cookies';

/**
 * Docplanner CDN does not send Access-Control-Allow-Origin, so SRI cannot be used
 * (browsers require CORS for integrity checks on cross-origin scripts).
 * We gate the third-party script behind functional cookie consent instead.
 */
export default function MioDottoreWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(hasFunctionalConsent());

    const handleChange = () => {
      setAllowed(hasFunctionalConsent());
    };
    window.addEventListener('cookie-consent-change', handleChange);
    return () => window.removeEventListener('cookie-consent-change', handleChange);
  }, []);

  useEffect(() => {
    if (!allowed || loaded.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loaded.current) {
            loaded.current = true;
            const script = document.createElement('script');
            script.src = 'https://platform.docplanner.com/js/widget.js';
            script.async = true;
            script.referrerPolicy = 'strict-origin-when-cross-origin';
            document.body.appendChild(script);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [allowed]);

  if (!allowed) {
    return (
      <div className="w-full rounded-xl border border-primary/[0.08] bg-primary/[0.03] px-6 py-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
          <Calendar size={22} className="text-accent" />
        </div>
        <p className="mb-1 text-sm font-medium text-primary">Widget MioDottore non disponibile</p>
        <p className="mx-auto mb-4 max-w-sm text-xs leading-relaxed text-muted">
          Per caricare il calendario di prenotazione, accetta i cookie funzionali.
        </p>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
          className="btn-outline px-4 py-2 text-xs"
        >
          Gestisci cookie
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full">
      <a
        className="zl-url"
        data-zlw-a11y-title="Widget di prenotazione visite mediche"
        data-zlw-doctor="gaia-miriam-teresa-bresciani"
        data-zlw-hide-branding="true"
        data-zlw-opinion="true"
        data-zlw-saas-only="true"
        data-zlw-type="big_with_calendar"
        href="https://www.miodottore.it/gaia-miriam-teresa-bresciani/psicoterapeuta-psicologo-clinico-psicologo/brescia"
        id="zl-url"
        rel="nofollow"
        title="Prenota un appuntamento su MioDottore"
      >
        Verifica disponibilit&agrave; e recensioni su MioDottore
      </a>
    </div>
  );
}
