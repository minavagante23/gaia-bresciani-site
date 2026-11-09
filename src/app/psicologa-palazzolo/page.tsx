import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Psicologa per Palazzolo sull\'Oglio | 12 min da Credaro',
  description:
    'Studio a Credaro, circa 12 minuti da Palazzolo sull\'Oglio via Grumello. Parcheggio privato, orari Lun–Ven 9–19, primo colloquio in presenza.',
  path: '/psicologa-palazzolo',
  ogTitle: 'Psicologa per Palazzolo sull\'Oglio | 12 min da Credaro',
  ogDescription:
    'Da Palazzolo a Credaro in circa 12 minuti. Parcheggio privato, orari Lun–Ven 9–19, primo colloquio in presenza.',
});

const highlights = [
  {
    title: 'Circa 12 minuti da Palazzolo',
    text: 'Da Palazzolo sull\'Oglio si arriva a Credaro via Grumello del Monte o Castelli Calepio, senza entrare a Bergamo.',
  },
  {
    title: 'Primo colloquio a Credaro',
    text: 'Il primo incontro è in presenza in Via Piave 7. Online solo se serve continuità dopo l\'avvio in studio.',
  },
  {
    title: 'Parcheggio e orari feriali',
    text: 'Parcheggio privato nello studio. Dal lunedì al venerdì ricevo dalle 9 alle 19; sabato e domenica lo studio è chiuso.',
  },
];

export default function ZonaPalazzoloPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Zona Palazzolo sull\'Oglio' }]} />
      <PageHeader
        eyebrow="Area servita"
        title="Psicologa Palazzolo sull&apos;Oglio: studio a Credaro (12 min)"
        subtitle="Cerchi una psicologa a Palazzolo sull&apos;Oglio? Ricevo a Credaro in circa 12 minuti: parcheggio privato, orari Lun–Ven 9–19. Il primo colloquio è in presenza."
      />

      <section className="section-container pb-16">
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item) => (
            <AnimatedSection key={item.title}>
              <div className="card-base p-6 h-full">
                <h3 className="font-serif font-semibold text-base mb-2">{item.title}</h3>
                <p className="body-md">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="heading-lg">Da Palazzolo a Credaro, senza attraversare Bergamo</h2>
              <p className="body-md">
                Lo studio è in Via Piave 7 a Credaro (BG). Da Palazzolo
                sull&apos;Oglio il tragitto è di circa <strong>12 minuti</strong>{' '}
                via Grumello del Monte o Castelli Calepio. Stesso ordine di
                tempi da Capriolo, Chiuduno e Telgate.
              </p>
              <p className="body-md">
                Chi entra dalla A4 (casello Grumello) arriva in circa 10
                minuti. In studio c&apos;&egrave; parcheggio privato: non serve
                cercare posto in paese.
              </p>
              <p className="body-md">
                Lavoro con adulti e coppie su ansia, attacchi di panico,
                stress, difficoltà relazionali e traumi. Quando indicato,
                integro la{' '}
                <Link href="/emdr" className="link-inline">
                  terapia EMDR
                </Link>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Come funziona il primo colloquio</h2>
              <p className="body-md">
                Il primo incontro è in presenza a Credaro: capire la domanda,
                i tempi e se il percorso è adatto. Gli aspetti pratici
                (frequenza, orari, eventuale online) si chiariscono lì.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg">Come arrivare da Palazzolo</h2>
            <p className="body-md">
              Da <strong>Palazzolo centro</strong>: direzione Grumello del
              Monte, poi Credaro. Via Piave 7 è in paese, con parcheggio
              privato. Tempo di percorrenza: circa 12 minuti.
            </p>
            <p className="body-md">
              Dalla <strong>A4</strong>: uscita Grumello del Monte, poi
              indicazioni per Credaro (circa 10 minuti).
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-8">
        <AnimatedSection>
          <p className="body-md max-w-3xl">
            Vivi più verso il lago o la Val Calepio?{' '}
            <Link href="/psicologa-sarnico" className="link-inline">
              Sarnico
            </Link>
            {' · '}
            <Link href="/psicologa-villongo" className="link-inline">
              Villongo
            </Link>
            . Percorsi:{' '}
            <Link href="/terapia" className="link-inline">
              terapia individuale e di coppia
            </Link>
            .
          </p>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi verificare disponibilità per un primo colloquio?"
        subtitle="Indicami la zona da cui arrivi e la fascia oraria preferita: ti rispondo entro 24 ore lavorative."
      />
    </>
  );
}
