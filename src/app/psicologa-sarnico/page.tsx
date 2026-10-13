import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import Accordion from '@/components/Accordion';
import InlineCta from '@/components/InlineCta';
import FaqSchemaJsonLd from '@/components/FaqSchemaJsonLd';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "Psicologa Sarnico e Lago d'Iseo | Studio a Credaro (2 km) | Gaia Bresciani",
  description:
    "Cerchi una psicologa a Sarnico? Lo studio è a Credaro, a 2 km dal centro (circa 5 minuti in auto): parcheggio privato, anche sabato e sera. Terapia individuale, di coppia ed EMDR.",
  path: '/psicologa-sarnico',
  ogTitle: "Psicologa Sarnico e Lago d'Iseo | Studio a Credaro (2 km) | Gaia Bresciani",
  ogDescription:
    "Psicologa per Sarnico e Lago d'Iseo con studio a Credaro a 2 km: 5 minuti, parcheggio privato, primo colloquio in presenza.",
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

const faqItems = [
  {
    question: "C'\u00e8 uno studio di psicologia a Sarnico?",
    answer:
      "Non ricevo in centro a Sarnico: lo studio \u00e8 a Credaro, Via Piave 7, a circa 2 km dal centro di Sarnico (circa 5 minuti in auto sulla SP469). \u00c8 la scelta pi\u00f9 pratica per parcheggio, orari serali e sabato, senza il traffico del lungolago.",
  },
  {
    question: 'Quanto ci vuole da Sarnico allo studio?',
    answer:
      'Da Sarnico centro: Via Lantieri verso sud, poi SP469 direzione Credaro. Via Piave 7 \u00e8 sulla destra. Circa 5 minuti. Parcheggio privato e gratuito presso lo studio.',
  },
  {
    question: 'Il primo colloquio \u00e8 obbligatorio in presenza?',
    answer:
      'Di norma s\u00ec: il primo incontro si svolge in presenza a Credaro. Serve a capire la domanda, i tempi e se questo spazio \u00e8 adatto. La continuit\u00e0 online si valuta dopo, se serve.',
  },
  {
    question: "Come prenoto da Sarnico o dal Lago d'Iseo?",
    answer:
      'Puoi scrivere da Contatti (WhatsApp \u00e8 il modo pi\u00f9 rapido) oppure prenotare su MioDottore. Indica la zona da cui arrivi e la fascia oraria preferita: ti rispondo entro 24 ore lavorative.',
  },
];

export default function ZonaSarnicoPage() {
  return (
    <>
      <FaqSchemaJsonLd items={faqItems} />
      <Breadcrumb items={[{ label: "Zona Sarnico e Lago d'Iseo" }]} />
      <PageHeader
        eyebrow="Area servita"
        title="Psicologa a Sarnico e Lago d'Iseo: studio a Credaro a 2 km"
        subtitle="Cerchi una psicologa a Sarnico? Ricevo a Credaro, a 5 minuti: parcheggio privato, anche il sabato. Il primo colloquio è in presenza, non in centro paese."
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
              <h2 className="heading-lg">Perché Credaro (e non Sarnico)</h2>
              <p className="body-md">
                Chi cerca una <strong>psicologa a Sarnico</strong> spesso
                immagina una sede in paese. Il mio studio è a Credaro, Via
                Piave 7: <strong>2 km dal centro di Sarnico</strong>, circa 5
                minuti in auto sulla SP469. Non è un indirizzo a Sarnico, ed è
                una scelta consapevole.
              </p>
              <p className="body-md">
                A Credaro c&apos;è parcheggio privato in cortile (niente giro
                sul lungolago), orari anche serali e il sabato, e un accesso
                più semplice dal basso Lago d&apos;Iseo e dalla Val Calepio.
                Per chi vive a Sarnico, Paratico, Capriolo o Villongo è lo
                stesso bacino, con meno attrito pratico di una sede in centro.
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
              <h2 className="heading-lg">Info pratiche: 5 minuti e parcheggio</h2>
              <p className="body-md">
                Da <strong>Sarnico centro</strong>: Via Lantieri verso sud, poi
                SP469 direzione Credaro. Via Piave 7 è sulla destra. Circa 5
                minuti. Parcheggio privato e gratuito presso lo studio.
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

            <div className="space-y-4">
              <h2 className="heading-lg">Come funziona il primo colloquio</h2>
              <p className="body-md">
                Il primo incontro è in presenza a Credaro. Serve a capire la
                domanda, i tempi e se questo spazio è adatto: non è una
                seduta “di prova” da remoto, salvo esigenze specifiche.
              </p>
              <p className="body-md">
                Si chiariscono frequenza, sede e aspettative. L&apos;obiettivo
                è una prima cornice chiara, senza forzare decisioni. Per
                prenotare:{' '}
                <Link href="/contatti" className="link-inline">
                  Contatti
                </Link>
                {' '}oppure MioDottore dalla sezione sotto.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl">
            <h2 className="heading-lg mb-6">Domande frequenti su Sarnico</h2>
            <Accordion items={faqItems} />
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
        title="Prenota un primo colloquio da Sarnico o dal Lago d'Iseo"
        subtitle="Scrivimi da Contatti (WhatsApp è il più rapido) oppure scegli data e ora su MioDottore. Indica la zona e la fascia oraria: ti rispondo entro 24 ore lavorative."
      />
    </>
  );
}
