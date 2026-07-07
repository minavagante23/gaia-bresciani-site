import { Mail, MessageCircle } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';

const WHATSAPP_URL =
  'https://wa.me/393408389958?text=' +
  encodeURIComponent(
    'Salve, vorrei informazioni per un primo colloquio.'
  );

export default function FloatingContact() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-primary/10 bg-white/95 px-3 py-2.5 backdrop-blur-sm shadow-soft-lg lg:hidden"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-[1.3] items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white active:scale-[0.98] transition-transform"
        aria-label="Scrivi su WhatsApp alla Dott.ssa Gaia Bresciani, risposta entro 24 ore"
        title="Scrivi su WhatsApp a Gaia Bresciani"
      >
        <MessageCircle size={17} strokeWidth={2} />
        WhatsApp &middot; risposta in 24h
      </a>
      <a
        href="/contatti/#contact-form"
        title={linkTitle('/contatti/#contact-form')}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-deep px-4 py-3 text-sm font-medium text-white active:scale-[0.98] transition-transform"
        aria-label="Vai al modulo di contatto"
      >
        <Mail size={17} strokeWidth={2} />
        Scrivimi
      </a>
    </div>
  );
}
