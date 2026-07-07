import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';

const WHATSAPP_URL =
  'https://wa.me/393408389958?text=' +
  encodeURIComponent('Salve, vorrei informazioni per un primo colloquio.');

const navLinks = [
  { href: '/chi-sono', label: 'Chi sono' },
  { href: '/terapia', label: 'Servizi' },
  { href: '/emdr', label: 'EMDR' },
  { href: '/approfondimenti', label: 'Approfondimenti' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contatti', label: 'Contatti' },
] as const;

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-white shadow-sm">
      <nav
        className="section-container flex items-center justify-between h-16 lg:h-20"
        aria-label="Navigazione principale"
      >
        <Link
          href="/"
          title={linkTitle('/')}
          className="touch-target font-serif text-primary font-bold text-lg lg:text-xl gap-x-2 sm:gap-x-2.5 flex-wrap"
        >
          <span className="hidden sm:inline tracking-tight">Psicologa e Psicoterapeuta</span>
          <span className="tracking-tight">Gaia Bresciani</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={linkTitle(link.href, link.label)}
              className="link-underline text-primary-light hover:text-primary transition-colors duration-200 text-[0.9rem] font-medium"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent gap-2 py-2.5 px-5 text-[0.85rem]"
            aria-label="Scrivi su WhatsApp alla Dott.ssa Gaia Bresciani"
            title="Scrivi su WhatsApp a Gaia Bresciani"
          >
            <MessageCircle size={16} strokeWidth={2} />
            Scrivimi su WhatsApp
          </a>
        </div>

        <div className="lg:hidden">
          <input
            type="checkbox"
            id="mobile-nav-toggle"
            className="peer sr-only"
            aria-hidden="true"
          />
          <label
            htmlFor="mobile-nav-toggle"
            className="relative z-[60] w-11 h-11 flex items-center justify-center -mr-1 cursor-pointer"
            aria-label="Apri o chiudi menu di navigazione"
          >
            <span className="sr-only">Menu</span>
            <span className="w-6 flex flex-col items-end gap-[5px]" aria-hidden="true">
              <span className="mobile-nav-bar-top h-[2px] w-6 bg-primary rounded-full transition-all duration-300 origin-center" />
              <span className="mobile-nav-bar-mid h-[2px] w-4 bg-primary rounded-full transition-all duration-300" />
              <span className="mobile-nav-bar-bot h-[2px] w-5 bg-primary rounded-full transition-all duration-300 origin-center" />
            </span>
          </label>

          <label
            htmlFor="mobile-nav-toggle"
            className="fixed inset-0 z-[55] bg-primary/60 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300 peer-checked:opacity-100 peer-checked:pointer-events-auto"
            aria-hidden="true"
          />

          <div
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background z-[58]
                       flex flex-col pt-24 px-8 pb-8 shadow-soft-xl overflow-y-auto overscroll-contain
                       translate-x-full transition-transform duration-300 ease-out pointer-events-none
                       peer-checked:translate-x-0 peer-checked:pointer-events-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  title={linkTitle(link.href, link.label)}
                  className="block text-primary py-3 text-lg font-medium border-b border-primary/[0.06]
                             hover:text-accent-deep transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-8 flex flex-col gap-3">
              <a
                href="tel:+393408389958"
                title={linkTitle('tel:+393408389958')}
                className="btn-accent text-center"
              >
                <Phone size={16} className="mr-2 inline" />
                Chiamami
              </a>
              <a
                href="mailto:gaia.bresciani23@gmail.com"
                title={linkTitle('mailto:gaia.bresciani23@gmail.com')}
                className="btn-outline text-center"
              >
                Scrivi una email
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
