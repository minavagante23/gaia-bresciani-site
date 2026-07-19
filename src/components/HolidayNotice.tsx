'use client';

import { useCallback, useEffect, useState } from 'react';
import { CalendarDays, MessageCircle, X } from 'lucide-react';
import {
  HOLIDAY_CLOSED_FROM,
  HOLIDAY_CLOSED_TO,
  HOLIDAY_NOTICE_STORAGE_KEY,
  isHolidayNoticeActive,
} from '@/lib/holiday-notice';
import {
  WHATSAPP_ARIA,
  WHATSAPP_TITLE,
  WHATSAPP_URL,
} from '@/lib/contact';

/**
 * Barra informativa sottile sotto la navbar.
 * Usa <aside>/<p> — nessun heading, così non compete con H1 SEO.
 */
export default function HolidayNotice() {
  const [visible, setVisible] = useState(() => isHolidayNoticeActive());

  useEffect(() => {
    if (!isHolidayNoticeActive()) {
      setVisible(false);
      return;
    }
    try {
      if (sessionStorage.getItem(HOLIDAY_NOTICE_STORAGE_KEY) === '1') {
        setVisible(false);
      }
    } catch {
      /* private mode */
    }
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(HOLIDAY_NOTICE_STORAGE_KEY, '1');
    } catch {
      /* private mode */
    }
  }, []);

  if (!visible) return null;

  return (
    <>
      <aside
        role="status"
        aria-live="polite"
        aria-label="Avviso chiusura studio"
        className="fixed top-16 lg:top-20 inset-x-0 z-40 border-b border-accent/25 bg-[#2D464C] text-white shadow-sm"
      >
        <div className="section-container flex items-start sm:items-center gap-3 py-2.5 sm:py-2">
          <CalendarDays
            size={16}
            strokeWidth={2}
            className="mt-0.5 sm:mt-0 shrink-0 text-accent"
            aria-hidden="true"
          />
          <p className="flex-1 text-[0.8rem] sm:text-[0.85rem] leading-snug text-white/90">
            <span className="font-medium text-white">
              Studio chiuso dal {HOLIDAY_CLOSED_FROM} al {HOLIDAY_CLOSED_TO}.
            </span>{' '}
            La Dott.ssa Bresciani resta reperibile per la prenotazione delle sedute.{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              title={WHATSAPP_TITLE}
              aria-label={WHATSAPP_ARIA}
              className="inline-flex items-center gap-1 font-semibold text-accent underline-offset-2 hover:underline"
            >
              <MessageCircle size={13} strokeWidth={2.5} aria-hidden="true" />
              Prenota su WhatsApp
            </a>
          </p>
          <button
            type="button"
            onClick={dismiss}
            className="touch-target shrink-0 -mr-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Chiudi avviso"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>
      </aside>
      {/* Spacer: evita che la barra fissa copra i titoli SEO sotto la navbar */}
      <div className="h-[3.25rem] sm:h-10" aria-hidden="true" />
    </>
  );
}
