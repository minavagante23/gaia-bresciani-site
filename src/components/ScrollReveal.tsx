'use client';

import { useEffect } from 'react';

/**
 * Fade-up delle sezioni allo scroll (una sola volta).
 * Non tocca il markup renderizzato: nasconde via JS solo le sezioni sotto la
 * piega, quindi senza JavaScript o con prefers-reduced-motion attivo le
 * sezioni restano semplicemente visibili.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    // Tutte le sezioni della home tranne la hero, che ha già hero-enter.
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('#main-content > section ~ section'),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      // Margine superiore enorme: così anche le sezioni "scavalcate" con un
      // salto (link ancora, scroll veloce) risultano dentro il root esteso e
      // vengono rivelate; senza, resterebbero nascoste per sempre.
      { rootMargin: '100000px 0px -8% 0px' },
    );

    // Nascondi solo le sezioni sotto la piega: niente flash su quelle già visibili.
    const foldLine = window.innerHeight * 0.9;
    for (const section of sections) {
      if (section.getBoundingClientRect().top > foldLine) {
        section.classList.add('reveal');
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
