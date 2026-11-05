import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';
import CookiePreferencesButton from './CookiePreferencesButton';
import SocialIconLink from './SocialIconLink';

const footerLinks = [
  { href: '/chi-sono', label: 'Chi sono' },
  { href: '/esperienza', label: 'Esperienza' },
  { href: '/terapia', label: 'Servizi' },
  { href: '/emdr', label: 'EMDR' },
  { href: '/psicologa-online', label: 'Terapia online' },
  { href: '/approfondimenti', label: 'Approfondimenti' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contatti', label: 'Contatti' },
];

const zoneLinks = [
  { href: '/psicologa-sarnico', label: 'Psicologa vicino Sarnico' },
  { href: '/psicologa-palazzolo', label: 'Palazzolo sull\'Oglio' },
  { href: '/psicologa-villongo', label: 'Villongo e Val Calepio' },
  { href: '/psicologa-lago-iseo', label: 'Lago d\'Iseo' },
  { href: '/contatti', label: 'Castenedolo - zona Brescia' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/85">
      <div className="section-container py-16 lg:py-20 pb-28 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" title={linkTitle('/')} className="inline-block font-serif text-white font-bold text-xl mb-2">
              Gaia Bresciani
            </Link>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              Psicologa e Psicoterapeuta specializzata in Psicoterapia
              Psicodinamica Adleriana e Terapia EMDR.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigazione
            </h4>
            <ul className="space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={linkTitle(link.href, link.label)}
                    className="touch-target-block text-sm text-white/80 hover:text-accent transition-colors duration-200"
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
            <ul className="space-y-1">
              {zoneLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={linkTitle(link.href, link.label)}
                    className="touch-target-block text-sm text-white/80 hover:text-accent transition-colors duration-200"
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
            <ul className="space-y-1">
              <li>
                <a
                  href="tel:+393408389958"
                  title={linkTitle('tel:+393408389958')}
                  className="touch-target-block gap-3 text-sm hover:text-accent transition-colors"
                >
                  <Phone size={16} className="text-accent shrink-0" />
                  +39 340 838 9958
                </a>
              </li>
              <li>
                <a
                  href="mailto:gaia.bresciani23@gmail.com"
                  title={linkTitle('mailto:gaia.bresciani23@gmail.com')}
                  className="touch-target-block gap-3 text-sm hover:text-accent transition-colors"
                >
                  <Mail size={16} className="text-accent shrink-0" />
                  gaia.bresciani23@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-2 mt-6">
              <SocialIconLink network="linkedin" variant="light" />
              <SocialIconLink network="facebook" variant="light" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/75">
            &copy; 2026 Gaia Bresciani &mdash; Psicologa e Psicoterapeuta. Tutti i diritti riservati.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/75">
            <span>P.I. 04558220168 · </span>
            <Link href="/privacy-policy" title={linkTitle('/privacy-policy')} className="touch-target text-white/75 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span> · </span>
            <Link href="/cookie-policy" title={linkTitle('/cookie-policy')} className="touch-target text-white/75 hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <CookiePreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
