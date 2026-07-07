import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MapPin, Phone, Mail } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';

const CookiePreferencesButton = dynamic(() => import('./CookiePreferencesButton'), {
  ssr: false,
  loading: () => (
    <Link href="/cookie-policy" title={linkTitle('/cookie-policy')} className="hover:text-white/60 transition-colors">
      Gestisci cookie
    </Link>
  ),
});

const footerLinks = [
  { href: '/chi-sono', label: 'Chi sono' },
  { href: '/esperienza', label: 'Esperienza' },
  { href: '/terapia', label: 'Servizi' },
  { href: '/emdr', label: 'EMDR' },
  { href: '/approfondimenti', label: 'Approfondimenti' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contatti', label: 'Contatti' },
];

const zoneLinks = [
  { href: '/psicologa-sarnico', label: 'Credaro - zona Sarnico e Lago d\'Iseo' },
  { href: '/contatti', label: 'Castenedolo - zona Brescia' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="section-container py-16 lg:py-20 pb-28 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" title={linkTitle('/')} className="font-serif text-white font-bold text-xl block mb-4">
              Gaia Bresciani
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Psicologa e Psicoterapeuta specializzata in Psicoterapia
              Psicodinamica Adleriana e Terapia EMDR.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={linkTitle(link.href, link.label)}
                    className="text-sm text-white/55 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Zona
            </h4>
            <ul className="space-y-3">
              {zoneLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={linkTitle(link.href, link.label)}
                    className="text-sm text-white/55 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Studi
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Via Piave 7, 24060 Credaro (BG)</span>
              </li>
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Piazza Martiri della Libert&agrave; 7, 25014 Castenedolo (BS)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+393408389958"
                  title={linkTitle('tel:+393408389958')}
                  className="flex gap-3 text-sm hover:text-accent transition-colors"
                >
                  <Phone size={16} className="text-accent shrink-0 mt-0.5" />
                  +39 340 838 9958
                </a>
              </li>
              <li>
                <a
                  href="mailto:gaia.bresciani23@gmail.com"
                  title={linkTitle('mailto:gaia.bresciani23@gmail.com')}
                  className="flex gap-3 text-sm hover:text-accent transition-colors"
                >
                  <Mail size={16} className="text-accent shrink-0 mt-0.5" />
                  gaia.bresciani23@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/gaia-bresciani-357aa8106/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profilo LinkedIn di Gaia Bresciani"
                title="Profilo LinkedIn di Gaia Bresciani"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/StudioPrivatoViaPiave7CredaroBG/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pagina Facebook dello studio"
                title="Pagina Facebook dello studio di psicologia"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Gaia Bresciani &mdash; Psicologa e Psicoterapeuta. Tutti i diritti riservati.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/40">
            <span>P.I. 04558220168</span>
            <Link href="/privacy-policy" title={linkTitle('/privacy-policy')} className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" title={linkTitle('/cookie-policy')} className="hover:text-white/60 transition-colors">
              Cookie Policy
            </Link>
            <CookiePreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
