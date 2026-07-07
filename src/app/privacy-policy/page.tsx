import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy | Gaia Bresciani Psicologa',
  description:
    'Privacy policy del sito di Gaia Bresciani Psicologa: trattamento dati, finalità e diritti dell\'utente ai sensi del GDPR.',
  path: '/privacy-policy',
  robots: { index: false, follow: true },
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
      <PageHeader title="Privacy Policy" />

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
                <a href="mailto:gaia.bresciani23@gmail.com" className="link-inline">
                  gaia.bresciani23@gmail.com
                </a><br />
                Telefono:{' '}
                <a href="tel:+393408389958" className="link-inline">
                  +39 340 838 9958
                </a><br />
                P.IVA: 04558220168
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Normativa di riferimento</h2>
              <p className="body-md">
                La presente informativa &egrave; resa ai sensi dell&apos;art. 13 del Regolamento (UE)
                2016/679 (GDPR) e del D.lgs. 196/2003 (Codice Privacy) come modificato
                dal D.lgs. 101/2018.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Tipologie di dati raccolti</h2>

              <h3 className="font-serif font-semibold text-lg mt-5 mb-2">Dati di navigazione</h3>
              <p className="body-md mb-3">
                I sistemi informatici preposti al funzionamento di questo sito acquisiscono,
                nel corso del loro normale esercizio, alcuni dati la cui trasmissione &egrave;
                implicita nell&apos;uso dei protocolli di comunicazione Internet (es. indirizzi IP,
                orari delle richieste, metodo HTTP). Questi dati non sono associati a utenti
                identificati e vengono utilizzati per garantire il funzionamento del servizio.
              </p>

              <h3 className="font-serif font-semibold text-lg mt-5 mb-2">Dati forniti volontariamente</h3>
              <p className="body-md">
                Tramite il modulo di contatto del sito, l&apos;utente pu&ograve; fornire
                volontariamente i seguenti dati: nome, cognome, indirizzo email, numero
                di telefono e un messaggio di testo libero. Questi dati vengono trattati
                esclusivamente per rispondere alla richiesta dell&apos;utente.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Finalit&agrave; e base giuridica del trattamento</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-primary/10 rounded-lg overflow-hidden">
                  <thead className="bg-primary/[0.03]">
                    <tr>
                      <th className="text-left px-4 py-2.5 font-semibold text-primary/80 border-b border-primary/10">Finalit&agrave;</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-primary/80 border-b border-primary/10">Base giuridica</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">Risposta a richieste di contatto</td>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">Consenso dell&apos;interessato (art. 6.1.a GDPR)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">Funzionamento tecnico del sito</td>
                      <td className="px-4 py-2.5 border-b border-primary/[0.06]">Legittimo interesse del Titolare (art. 6.1.f GDPR)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5">Caricamento mappe interattive (Google Maps)</td>
                      <td className="px-4 py-2.5">Consenso dell&apos;interessato (art. 6.1.a GDPR)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="heading-md mb-3">Servizi di terze parti</h2>

              <h3 className="font-serif font-semibold text-lg mt-5 mb-2">Formspree (modulo di contatto)</h3>
              <p className="body-md mb-3">
                I dati inseriti nel modulo di contatto vengono trasmessi tramite il servizio
                Formspree (Formspree Inc., USA) per consentire la ricezione del messaggio
                via email. Formspree agisce in qualit&agrave; di responsabile del trattamento.
                I dati non vengono conservati oltre il tempo necessario all&apos;invio.{' '}
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="link-inline">
                  Privacy Policy di Formspree
                </a>.
              </p>

              <h3 className="font-serif font-semibold text-lg mt-5 mb-2">Google Maps (mappe interattive)</h3>
              <p className="body-md">
                Nella pagina Contatti, previo consenso dell&apos;utente, vengono caricate
                mappe interattive fornite da Google LLC. Google pu&ograve; impostare cookie
                e raccogliere dati secondo la propria informativa.{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="link-inline">
                  Privacy Policy di Google
                </a>.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Cookie</h2>
              <p className="body-md">
                Per informazioni dettagliate sui cookie utilizzati, sulle categorie,
                sulla gestione del consenso e sulle modalit&agrave; di revoca, consulta
                la{' '}
                <Link href="/cookie-policy" className="link-inline">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Periodo di conservazione</h2>
              <p className="body-md">
                I dati forniti tramite il modulo di contatto sono conservati per il tempo
                strettamente necessario a rispondere alla richiesta e, successivamente,
                per il tempo previsto dagli obblighi di legge. I dati di navigazione
                non vengono conservati oltre la sessione.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Trasferimento dati extra-UE</h2>
              <p className="body-md">
                L&apos;utilizzo dei servizi Formspree e Google Maps pu&ograve; comportare
                il trasferimento di dati verso gli Stati Uniti. Il trasferimento avviene
                sulla base delle garanzie previste dal Data Privacy Framework (DPF)
                UE-USA o, ove applicabili, delle clausole contrattuali standard (SCC)
                approvate dalla Commissione Europea.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Diritti dell&apos;utente</h2>
              <p className="body-md mb-3">
                Ai sensi degli artt. 15&ndash;22 del GDPR, l&apos;utente pu&ograve; esercitare
                i seguenti diritti:
              </p>
              <ul className="list-disc pl-6 space-y-1 body-md">
                <li><strong>Accesso</strong> ai propri dati personali (art. 15)</li>
                <li><strong>Rettifica</strong> dei dati inesatti (art. 16)</li>
                <li><strong>Cancellazione</strong> (&ldquo;diritto all&apos;oblio&rdquo;, art. 17)</li>
                <li><strong>Limitazione</strong> del trattamento (art. 18)</li>
                <li><strong>Portabilit&agrave;</strong> dei dati (art. 20)</li>
                <li><strong>Opposizione</strong> al trattamento (art. 21)</li>
                <li><strong>Revoca del consenso</strong> in qualsiasi momento (art. 7.3)</li>
              </ul>
              <p className="body-md mt-3">
                Le richieste possono essere inviate via email a{' '}
                <a href="mailto:gaia.bresciani23@gmail.com" className="link-inline">
                  gaia.bresciani23@gmail.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Reclamo all&apos;Autorit&agrave; di controllo</h2>
              <p className="body-md">
                L&apos;utente ha il diritto di proporre reclamo all&apos;Autorit&agrave;
                Garante per la protezione dei dati personali qualora ritenga che il
                trattamento dei propri dati violi la normativa vigente:{' '}
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="link-inline">
                  www.garanteprivacy.it
                </a>.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Aggiornamenti</h2>
              <p className="body-md">
                La presente informativa pu&ograve; essere aggiornata periodicamente.
                La data dell&apos;ultimo aggiornamento &egrave; indicata all&apos;inizio
                del documento. Si consiglia di consultare regolarmente questa pagina.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/cookie-policy" className="link-inline">
                &larr; Consulta anche la Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
