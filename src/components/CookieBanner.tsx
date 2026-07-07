'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { X, Settings2, Shield } from 'lucide-react';
import { getConsent, setConsent, type CookieConsent } from '@/lib/cookies';
import { linkTitle } from '@/lib/link-titles';

function saveAndDispatch(consent: CookieConsent) {
  setConsent(consent);
  window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [functional, setFunctional] = useState(false);

  useEffect(() => {
    const existing = getConsent();
    if (!existing) {
      setVisible(true);
    }

    const handleOpen = () => {
      const current = getConsent();
      setFunctional(current?.functional ?? false);
      setShowPrefs(true);
      setVisible(true);
    };
    window.addEventListener('open-cookie-preferences', handleOpen);
    return () => window.removeEventListener('open-cookie-preferences', handleOpen);
  }, []);

  const accept = useCallback(() => {
    saveAndDispatch({ technical: true, functional: true, timestamp: Date.now() });
    setVisible(false);
    setShowPrefs(false);
  }, []);

  const reject = useCallback(() => {
    saveAndDispatch({ technical: true, functional: false, timestamp: Date.now() });
    setVisible(false);
    setShowPrefs(false);
  }, []);

  const savePrefs = useCallback(() => {
    saveAndDispatch({ technical: true, functional, timestamp: Date.now() });
    setVisible(false);
    setShowPrefs(false);
  }, [functional]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center pointer-events-none">
      <div
        className={`pointer-events-auto w-full transition-opacity duration-300 ${
          showPrefs ? 'fixed inset-0 bg-primary/40 backdrop-blur-sm flex items-center justify-center p-4' : ''
        }`}
        onClick={showPrefs ? (e) => { if (e.target === e.currentTarget) reject(); } : undefined}
      >
        {!showPrefs ? (
          /* ───── FIRST LAYER: Banner ───── */
          <div className="mx-auto max-w-3xl mb-4 sm:mb-6 mx-4 sm:mx-6">
            <div className="bg-white rounded-2xl shadow-soft-xl border border-primary/[0.08] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-accent/10 items-center justify-center shrink-0 mt-0.5">
                  <Shield size={20} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif font-semibold text-base text-primary mb-2">
                    Questo sito utilizza i cookie
                  </h2>
                  <p className="text-sm text-primary/65 leading-relaxed mb-4">
                    Utilizziamo cookie tecnici necessari al funzionamento del sito e, con il tuo
                    consenso, cookie funzionali per le mappe interattive di Google Maps.
                    Puoi accettare, rifiutare o personalizzare le tue preferenze.{' '}
                    <Link href="/cookie-policy" title={linkTitle('/cookie-policy')} className="text-accent-deep hover:underline">
                      Cookie Policy
                    </Link>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <button onClick={accept} className="btn-accent py-2.5 px-5 text-sm flex-1 sm:flex-initial">
                      Accetta tutti
                    </button>
                    <button onClick={reject} className="btn-outline py-2.5 px-5 text-sm flex-1 sm:flex-initial">
                      Rifiuta non necessari
                    </button>
                    <button
                      onClick={() => {
                        const current = getConsent();
                        setFunctional(current?.functional ?? false);
                        setShowPrefs(true);
                      }}
                      className="btn-outline py-2.5 px-5 text-sm flex-1 sm:flex-initial gap-1.5"
                    >
                      <Settings2 size={14} />
                      Personalizza
                    </button>
                  </div>
                </div>

                <button
                  onClick={reject}
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/5 transition-colors"
                  aria-label="Chiudi e rifiuta cookie non necessari"
                >
                  <X size={16} className="text-primary/40" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ───── SECOND LAYER: Preferences Panel ───── */
          <div
            className="bg-white rounded-2xl shadow-soft-xl border border-primary/[0.08] w-full max-w-lg max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-primary/[0.06] px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <h2 className="font-serif font-semibold text-lg text-primary">Preferenze cookie</h2>
              <button
                onClick={reject}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/5 transition-colors"
                aria-label="Chiudi"
              >
                <X size={16} className="text-primary/40" />
              </button>
            </div>

            <div className="px-6 py-5 space-y-5">
              <p className="text-sm text-primary/65 leading-relaxed">
                Scegli quali categorie di cookie autorizzare. I cookie tecnici sono sempre
                attivi perch&eacute; necessari al funzionamento del sito.
                Per maggiori informazioni consulta la{' '}
                <Link href="/cookie-policy" title={linkTitle('/cookie-policy')} className="text-accent-deep hover:underline">
                  Cookie Policy
                </Link>.
              </p>

              {/* Technical - always on */}
              <div className="rounded-xl border border-primary/[0.08] p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm text-primary">Cookie tecnici</h3>
                  <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium">
                    Sempre attivi
                  </span>
                </div>
                <p className="text-xs text-primary/55 leading-relaxed">
                  Necessari per la navigazione e il funzionamento del sito.
                  Includono il cookie di memorizzazione delle preferenze di consenso.
                  Non richiedono consenso (art. 122 D.lgs. 196/2003).
                </p>
              </div>

              {/* Functional */}
              <div className="rounded-xl border border-primary/[0.08] p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm text-primary">Cookie funzionali</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={functional}
                      onChange={(e) => setFunctional(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-[22px] bg-primary/15 peer-focus:ring-2 peer-focus:ring-accent/30
                                    rounded-full peer-checked:bg-accent transition-colors
                                    after:content-[''] after:absolute after:top-[3px] after:left-[3px]
                                    after:bg-white after:rounded-full after:h-4 after:w-4
                                    after:transition-transform peer-checked:after:translate-x-[18px]
                                    after:shadow-sm" />
                  </label>
                </div>
                <p className="text-xs text-primary/55 leading-relaxed">
                  Consentono funzionalit&agrave; aggiuntive come le mappe interattive
                  di Google Maps nella pagina Contatti. Questi cookie sono impostati
                  da Google e possono tracciare la navigazione su altri siti.
                </p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-primary/[0.06] px-6 py-4 rounded-b-2xl flex flex-col sm:flex-row gap-2.5">
              <button onClick={savePrefs} className="btn-accent py-2.5 px-5 text-sm flex-1">
                Salva preferenze
              </button>
              <button onClick={accept} className="btn-outline py-2.5 px-5 text-sm flex-1">
                Accetta tutti
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
