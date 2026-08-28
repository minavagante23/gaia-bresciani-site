import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import Accordion from '@/components/Accordion';
import InlineCta from '@/components/InlineCta';
import FaqSchemaJsonLd from '@/components/FaqSchemaJsonLd';
import { createPageMetadata } from '@/lib/seo';
import { MapPin, Clock, Globe, RefreshCw, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Psicologa online: psicoterapia in videochiamata | Gaia Bresciani',
  description:
    'Percorsi di psicoterapia online in videochiamata con psicologa e psicoterapeuta iscritta all\'albo. Sedute riservate, anche alternate agli incontri in studio.',
  path: '/psicologa-online',
  ogTitle: 'Psicologa online - Colloqui in videochiamata | Gaia Bresciani',
  ogDescription:
    'Come funzionano i colloqui psicologici online: modalità, riservatezza, efficacia e quando è preferibile la seduta in presenza.',
});

const indications = [
  { icon: MapPin, text: 'Chi vive lontano dalle sedi di Credaro e Castenedolo' },
  { icon: Clock, text: 'Chi ha orari di lavoro rigidi o poco tempo per gli spostamenti' },
  { icon: Globe, text: 'Chi si è trasferito, anche all\'estero, e vuole un percorso in italiano' },
  { icon: RefreshCw, text: 'Chi ha già iniziato in studio e vuole dare continuità al percorso' },
  { icon: ShieldCheck, text: 'Chi in questo momento si sente più a suo agio da casa propria' },
];

const faqItems = [
  {
    question: 'Come si svolge un colloquio psicologico online?',
    answer:
      'La seduta si svolge in videochiamata su una piattaforma sicura: prima dell\'incontro ricevi il link di collegamento. Servono solo una connessione stabile e uno spazio riservato in cui parlare liberamente. Durata e struttura sono le stesse della seduta in studio.',
  },
  {
    question: 'La terapia online è efficace quanto quella in presenza?',
    answer:
      'Per molte situazioni sì: ansia, stress, difficoltà relazionali e sostegno psicologico si lavorano bene anche in videochiamata. In alcuni casi la presenza resta preferibile: lo valutiamo insieme al primo colloquio, senza forzare una modalità sull\'altra.',
  },
  {
    question: 'Quanto costa una seduta online?',
    answer:
      'La seduta online ha lo stesso costo della seduta in presenza. Costi e frequenza degli incontri vengono definiti con chiarezza al primo colloquio.',
  },
  {
    question: 'Posso alternare colloqui online e in studio?',
    answer:
      'Sì. Molte persone alternano le due modalità in base a impegni e spostamenti. Di norma il primo incontro si svolge in presenza a Credaro o Castenedolo, ma per chi vive lontano è possibile iniziare direttamente online.',
  },
];

export default function PsicologaOnlinePage() {
  return (
    <>
      <FaqSchemaJsonLd items={faqItems} />

      <Breadcrumb items={[{ label: 'Terapia online' }]} />
      <PageHeader
        eyebrow="Terapia online"
        title="Psicologa online: colloqui in videochiamata"
        subtitle="Un percorso psicologico serio anche a distanza: stessa cura, stessa riservatezza e la flessibilità di collegarsi da dove si è."
      />

      <section className="section-container pb-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:col-span-3 space-y-5">
            <p className="body-lg">
              I colloqui online non sono una versione ridotta della terapia: sono
              sedute a tutti gli effetti, con la stessa durata, la stessa
              struttura e lo stesso metodo del lavoro in studio.
            </p>
            <p className="body-md">
              Uso questa modalità da anni con chi vive lontano dalle sedi di
              Credaro e Castenedolo, con chi si è trasferito e con chi, per
              periodi della vita, non riesce a garantire la presenza. Quando la
              situazione lo richiede, ne parliamo e valutiamo insieme se la
              videochiamata è la strada giusta o se conviene incontrarsi di
              persona.
            </p>
            <p className="body-md">
              Se preferisci il lavoro in studio, puoi leggere la pagina{' '}
              <Link href="/terapia" className="link-inline">
                terapia individuale e di coppia
              </Link>{' '}
              oppure scrivermi dalla pagina{' '}
              <Link href="/contatti" className="link-inline">
                contatti
              </Link>{' '}
              indicando la modalità che senti più adatta.
            </p>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <Image
                src="/assets/consulenza-psicologica-online-bergamo.webp"
                alt="Consulenza psicologica online in videochiamata con Gaia Bresciani, psicologa e psicoterapeuta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 35vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <h2 className="heading-lg mb-4">Per chi &egrave; pensata la terapia online</h2>
          <p className="body-lg max-w-3xl mb-10">Le situazioni in cui la videochiamata aiuta di pi&ugrave;</p>
        </AnimatedSection>

        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl">
          {indications.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.text} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Icon size={18} strokeWidth={1.75} className="text-accent-deep" />
                </div>
                <p className="body-md text-primary pt-1.5">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg mb-4">Riservatezza e limiti della modalit&agrave; online</h2>
            <p className="body-md">
              La videochiamata avviene su una piattaforma sicura e senza
              registrazioni: vale il segreto professionale, esattamente come in
              studio. Da parte tua serve solo uno spazio in cui puoi parlare
              senza essere ascoltato o interrotto.
            </p>
            <p className="body-md">
              L&apos;online non &egrave; adatto a ogni situazione: in alcuni
              momenti clinici la presenza resta la scelta pi&ugrave; indicata, e
              alcune tecniche &mdash; come parte del lavoro{' '}
              <Link href="/emdr" className="link-inline">
                EMDR
              </Link>{' '}
              &mdash; possono richiedere la seduta in studio. Se emergono questi
              elementi, te lo dico con chiarezza e riorganizziamo il percorso.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-8">
        <AnimatedSection>
          <h2 className="heading-lg mb-6">Domande frequenti sulla terapia online</h2>
          <div className="max-w-3xl">
            <Accordion items={faqItems} />
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi capire se la terapia online fa per te?"
        subtitle="Scrivimi o chiamami: nel primo contatto valutiamo insieme la modalità più adatta alla tua situazione."
      />
    </>
  );
}
