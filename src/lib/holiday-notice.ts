/** Avviso chiusura estiva — non usare heading SEO */

export const HOLIDAY_CLOSED_FROM = '14 agosto';
export const HOLIDAY_CLOSED_TO = '4 settembre';

/** Visibile fino a fine giornata del 4 settembre 2026 (Europe/Rome). */
export const HOLIDAY_NOTICE_UNTIL = '2026-09-04T22:00:00.000Z'; // 4 set 23:59 CEST approx

export const HOLIDAY_NOTICE_STORAGE_KEY = 'holiday-notice-dismissed-2026-08';

export function isHolidayNoticeActive(now = new Date()): boolean {
  return now.getTime() <= Date.parse(HOLIDAY_NOTICE_UNTIL);
}
