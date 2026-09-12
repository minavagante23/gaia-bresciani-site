import { MessageCircle } from 'lucide-react';
import {
  CTA_PRIMARY_SHORT,
  WHATSAPP_ARIA,
  WHATSAPP_TITLE,
  WHATSAPP_URL,
} from '@/lib/contact';

export default function FloatingContact() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/10 bg-white/95 px-3 py-2.5 backdrop-blur-sm shadow-soft-lg lg:hidden"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white active:scale-[0.98] transition-transform"
        aria-label={WHATSAPP_ARIA}
        title={WHATSAPP_TITLE}
      >
        <MessageCircle size={17} strokeWidth={2} />
        {CTA_PRIMARY_SHORT}
      </a>
    </div>
  );
}
