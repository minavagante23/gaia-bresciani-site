'use client';

import { useEffect, useRef } from 'react';

export default function MioDottoreWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loaded.current) {
            loaded.current = true;
            const script = document.createElement('script');
            script.src = 'https://platform.docplanner.com/js/widget.js';
            script.async = true;
            document.body.appendChild(script);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

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
