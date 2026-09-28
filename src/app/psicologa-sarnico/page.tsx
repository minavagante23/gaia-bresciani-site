import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Psicologa per Sarnico | Studio a Credaro, 5 minuti',
  description:
    'Studio a Credaro, 5 minuti da Sarnico: parcheggio privato, anche il sabato, primo colloquio in presenza. Terapia individuale, di coppia ed EMDR.',
  path: '/psicologa-sarnico',
  ogTitle: 'Psicologa per Sarnico | Studio a Credaro, 5 minuti',
  ogDescription:
    '5 minuti da Sarnico, parcheggio privato, anche il sabato. Il primo colloquio si svolge in presenza a Credaro.',
});

const highlights = [
  {
    title: '5 minuti da Sarnico',
    text: 'Via Piave 7, Credaro: 2 km dal centro, SP469. Parcheggio privato nello studio, senza girare per il lungolago.',
  },
  {
    title: 'Primo colloquio a Credaro',
    text: 'Il primo incontro è in presenza a Credaro. Online solo se serve continuità, non come alternativa di default.',
  },
  {
    title: 'Anche il sabato',
    text: 'Orari fino a sera nei giorni feriali e il sabato mattina-pomeriggio. EMDR quando indicato.',
  },
];

export default function ZonaSarnicoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Zona Sarnico e Lago d\'Iseo' }]} />
      <PageHeader
        eyebrow="Area servita"
        title="Psicologa per Sarnico: studio a Credaro in 5 minuti"
        subtitle="Parcheggio privato, anche il sabato. Il primo colloquio si svolge in presenza a Credaro, non in centro paese."
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
              <h2 className="heading-lg">Studio a Credaro, 5 minuti da Sarnico</h2>
              <p className="body-md">
                Lo studio è in Via Piave 7 a Credaro (BG), a <strong>2 km dal
                centro di Sarnico</strong>: circa 5 minuti in auto sulla SP469.
                Dal lungolago si arriva senza attraversare il traffico del
                centro e si parcheggia in cortile.
              </p>
              <p className="body-md">
                Per chi vive a Sarnico, Paratico, Capriolo o Villongo è lo
                stesso bacino, con un accesso più semplice di una sede in
                paese: orari anche serali e il sabato, parcheggio privato,
                continuità del percorso più facile da mantenere.
              </p>
              <p className="body-md">
                Le richieste più frequenti: ansia, attacchi di panico,
                difficoltà relazionali, stanchezza emotiva, traumi. Quando
                indicato, integro la{' '}
                <Link href="/emdr" className="link-inline">
                  terapia EMDR
                </Link>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Come funziona il primo colloquio</h2>
              <p className="body-md">
                Il primo incontro è in presenza a Credaro. Serve a capire la
                domanda, i tempi e se questo spazio è adatto: non è una
                seduta “di prova” da remoto, salvo esigenze specifiche.
              </p>
              <p className="body-md">
                Si chiariscono frequenza, sede e aspettative. L&apos;obiettivo
                è una prima cornice chiara, senza forzare decisioni.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg">Come arrivare da Sarnico</h2>
            <p className="body-md">
              Da <strong>Sarnico centro</strong>: Via Lantieri verso sud, poi
              SP469 direzione Credaro. Via Piave 7 è sulla destra. Circa 5
              minuti. Parcheggio privato presso lo studio.
            </p>
            <p className="body-md">
              Da <strong>Paratico e Capriolo</strong>: SP469 direzione Sarnico.
              Credaro si incontra prima del centro di Sarnico.
            </p>
            <p className="body-md">
              Se preferisci evitare lo spostamento dopo i primi incontri,
              si può valutare la{' '}
              <Link href="/psicologa-online" className="link-inline">
                continuità online
              </Link>
              .
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-8">
        <AnimatedSection>
          <p className="body-md max-w-3xl">
            Approfondisci{' '}
            <Link href="/terapia" className="link-inline">
              terapia individuale e di coppia
            </Link>
            {' '}e{' '}
            <Link href="/emdr" className="link-inline">
              EMDR
            </Link>
            . Altre zone del bacino:{' '}
            <Link href="/psicologa-villongo" className="link-inline">
              Villongo
            </Link>
            ,{' '}
            <Link href="/psicologa-palazzolo" className="link-inline">
              Palazzolo sull&apos;Oglio
            </Link>
            {' '}e{' '}
            <Link href="/psicologa-lago-iseo" className="link-inline">
              Lago d&apos;Iseo
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
