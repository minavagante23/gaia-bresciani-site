'use client';

export default function CookiePreferencesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
      className="touch-target text-white/75 hover:text-white transition-colors"
    >
      Gestisci cookie
    </button>
  );
}
