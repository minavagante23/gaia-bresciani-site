import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Cookie Policy | Gaia Bresciani Psicologa',
  description:
    'Cookie policy del sito di Gaia Bresciani Psicologa: tipi di cookie, gestione del consenso e diritti dell\'utente ai sensi del GDPR.',
  path: '/cookie-policy',
  robots: { index: false, follow: true },
});

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Cookie Policy' }]} />
      <PageHeader title="Cookie Policy" />

      <section className="section-container pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-primary/75">
            <p className="body-md italic">Ultimo aggiornamento: 3 aprile 2026</p>

            <div>
              <h2 className="heading-md mb-3">Titolare del trattamento</h2>
              <p className="body-md">
                <strong>Dott.ssa Gaia Bresciani</strong> &ndash; Psicologa e Psicoterapeuta<br />
                Via Piave 7, 24060 Credaro (BG)<br />
                Email:{' '}
                <a href="mailto:gaia.bresciani23@gmail.com" className="text-accent-deep hover:underline">
                  gaia.bresciani23@gmail.com
                </a><br />
                P.IVA: 04558220168
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Cosa sono i cookie</h2>
              <p className="body-md">
                I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo
                dell&apos;utente (computer, tablet, smartphone) quando si visita un sito web.
                Servono a ricordare le preferenze dell&apos;utente, migliorare la navigazione
                e, in alcuni casi, monitorare le visite per scopi statistici o di marketing.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Base giuridica</h2>
              <p className="body-md">
                La presente policy &egrave; redatta ai sensi del Regolamento (UE) 2016/679
                (GDPR), del D.lgs. 196/2003 (Codice Privacy) come modificato dal D.lgs. 101/2018,
                della Direttiva 2002/58/CE (ePrivacy), e delle{' '}
                <strong>Linee guida cookie e altri strumenti di tracciamento</strong>{' '}
                del Garante per la protezione dei dati personali (provvedimento n. 231 del 10 giugno 2021).
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Tipologie di cookie utilizzati</h2>

              <h3 className="font-serif font-semibold text-lg mt-5 mb-2">
                Cookie tecnici (necessari) &ndash; sempre attivi
              </h3>
              <p className="body-md mb-3">
                Non richiedono il consenso dell&apos;utente (art. 122, comma 1, D.lgs. 196/2003).
                Sono indispensabili per il corretto funzionamento del sito.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-primary/10 rounded-lg overflow-hidden">
                  <thead className="bg-primary/[0.03]">
                    <tr>
                      <th className="text-left px-4 py-2.5 font-semibold text-primary/80 border-b border-primary/10">Cookie</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-primary/80 border-b border-primary/10">Finalit&agrave;</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-primary/80 border-b border-primary/10">Durata</th>
                    </tr>
                  </thead>
                  <tbody className="text-primary/65">
                    <tr>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]"><code className="text-xs bg-primary/[0.04] px-1.5 py-0.5 rounded">cookie_consent</code></td>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">Memorizza le preferenze di consenso dell&apos;utente</td>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">180 giorni</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif font-semibold text-lg mt-6 mb-2">
                Cookie funzionali &ndash; richiedono il consenso
              </h3>
              <p className="body-md mb-3">
                Consentono funzionalit&agrave; aggiuntive non strettamente necessarie.
                Vengono installati solo dopo che l&apos;utente ha espresso il proprio consenso
                tramite il banner.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-primary/10 rounded-lg overflow-hidden">
                  <thead className="bg-primary/[0.03]">
                    <tr>
                      <th className="text-left px-4 py-2.5 font-semibold text-primary/80 border-b border-primary/10">Servizio</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-primary/80 border-b border-primary/10">Fornitore</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-primary/80 border-b border-primary/10">Finalit&agrave;</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-primary/80 border-b border-primary/10">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody className="text-primary/65">
                    <tr>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">Google Maps</td>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">Google LLC</td>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">Visualizzazione mappe interattive nella pagina Contatti</td>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-deep hover:underline">
                          Link
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif font-semibold text-lg mt-6 mb-2">
                Cookie di profilazione e analitici
              </h3>
              <p className="body-md">
                Questo sito <strong>non utilizza</strong> cookie di profilazione, cookie analitici
                di terze parti, n&eacute; strumenti di tracciamento pubblicitario.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Servizi esterni senza cookie</h2>
              <p className="body-md mb-3">
                Il modulo di contatto utilizza il servizio{' '}
                <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-accent-deep hover:underline">Formspree</a>{' '}
                per l&apos;invio dei messaggi. Formspree riceve i dati inseriti nel modulo
                (nome, email, telefono, messaggio) al momento dell&apos;invio, ma non installa
                cookie sul dispositivo dell&apos;utente durante la navigazione.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Modalit&agrave; di consenso</h2>
              <p className="body-md mb-3">
                Al primo accesso al sito, un banner informa l&apos;utente sull&apos;utilizzo
                dei cookie e offre le seguenti opzioni:
              </p>
              <ul className="list-disc pl-6 space-y-2 body-md mb-3">
                <li>
                  <strong>Accetta tutti</strong>: autorizza l&apos;installazione di tutti i cookie,
                  inclusi quelli funzionali
                </li>
                <li>
                  <strong>Rifiuta non necessari</strong>: autorizza solo i cookie tecnici.
                  I servizi di terze parti (es. Google Maps) non verranno caricati
                </li>
                <li>
                  <strong>Personalizza</strong>: apre il pannello delle preferenze per
                  scegliere singole categorie di cookie
                </li>
                <li>
                  <strong>Chiusura (X)</strong>: equivale a &ldquo;Rifiuta non necessari&rdquo;
                  (solo cookie tecnici), come previsto dalle linee guida del Garante
                </li>
              </ul>
              <p className="body-md">
                Lo <strong>scroll della pagina non costituisce consenso</strong>, in conformit&agrave;
                con le indicazioni del Garante Privacy.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Durata e revoca del consenso</h2>
              <p className="body-md mb-3">
                Il consenso &egrave; valido per un periodo massimo di <strong>6 mesi</strong> (180 giorni)
                dalla data di espressione, come raccomandato dal Garante Privacy.
                Trascorso questo periodo, il banner verr&agrave; ripresentato.
              </p>
              <p className="body-md">
                L&apos;utente pu&ograve; <strong>revocare o modificare il consenso in qualsiasi momento</strong> tramite
                il link &ldquo;Gestisci cookie&rdquo; presente nel footer di ogni pagina del sito.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Gestione dei cookie tramite browser</h2>
              <p className="body-md mb-3">
                &Egrave; possibile gestire le preferenze relative ai cookie anche attraverso
                le impostazioni del proprio browser:
              </p>
              <ul className="list-disc pl-6 space-y-1 body-md">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent-deep hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-accent-deep hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent-deep hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-9956-218d1d5a4d49" target="_blank" rel="noopener noreferrer" className="text-accent-deep hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="body-md mt-3">
                La disattivazione dei cookie tecnici potrebbe compromettere
                il corretto funzionamento del sito.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Diritti dell&apos;utente</h2>
              <p className="body-md mb-3">
                Ai sensi degli artt. 15&ndash;22 del GDPR, l&apos;utente pu&ograve; in qualsiasi momento:
              </p>
              <ul className="list-disc pl-6 space-y-1 body-md">
                <li>Accedere ai propri dati personali</li>
                <li>Richiederne la rettifica o la cancellazione</li>
                <li>Limitarne il trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilit&agrave; dei dati</li>
                <li>Revocare il consenso prestato</li>
              </ul>
              <p className="body-md mt-3">
                Le richieste possono essere indirizzate al Titolare del Trattamento
                all&apos;indirizzo{' '}
                <a href="mailto:gaia.bresciani23@gmail.com" className="text-accent-deep hover:underline">
                  gaia.bresciani23@gmail.com
                </a>.
              </p>
              <p className="body-md mt-2">
                L&apos;utente ha inoltre il diritto di proporre reclamo all&apos;Autorit&agrave;
                Garante per la protezione dei dati personali:{' '}
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-accent-deep hover:underline">
                  www.garanteprivacy.it
                </a>.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/privacy-policy" className="text-accent-deep hover:underline font-medium">
                &larr; Consulta anche la Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
