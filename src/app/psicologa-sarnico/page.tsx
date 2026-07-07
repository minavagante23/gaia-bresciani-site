import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';
import { MapPin, Users, Clock, Target } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Psicologa vicino Sarnico | Studio a Credaro per il basso Lago d\'Iseo',
  description:
    'Informazioni pratiche per chi vive tra Sarnico e il basso Lago d\'Iseo e desidera raggiungere lo studio di Credaro per un primo colloquio.',
  path: '/psicologa-sarnico',
  ogTitle: 'Psicologa vicino Sarnico | Studio a Credaro',
  ogDescription:
    'Tempi di percorrenza, aree servite e prime informazioni utili per chi desidera raggiungere la sede di Credaro.',
});

const highlights = [
  {
    icon: MapPin,
    title: 'Comuni serviti',
    text: 'Sarnico, Paratico, Capriolo, Villongo, Credaro, Castelli Calepio, Grumello del Monte, Palazzolo sull\'Oglio.',
  },
  {
    icon: Users,
    title: 'Primo colloquio',
    text: 'Di norma il primo incontro si svolge in presenza a Credaro; in alcuni casi puo essere utile valutare anche la modalita online.',
  },
  {
    icon: Target,
    title: 'Ambiti frequenti',
    text: 'Ansia, attacchi di panico, stress, difficolta relazionali, crisi di coppia, traumi e transizioni.',
  },
];

export default function ZonaSarnicoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Zona Sarnico e Lago d\'Iseo' }]} />
      <PageHeader
        eyebrow="Area servita"
        title="Una sede comoda per chi vive tra Sarnico e Lago d'Iseo"
        subtitle="Qui trovi alcune informazioni pratiche se stai valutando un primo colloquio a Credaro."
      />

      <section className="section-container pb-16">
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title}>
                <div className="card-base p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.6} className="text-accent" />
                  </div>
                  <h3 className="font-serif font-semibold text-base mb-2">{item.title}</h3>
                  <p className="body-md">{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="heading-lg">Un punto di riferimento vicino a Sarnico</h2>
              <p className="body-md">
                Lo studio di Credaro si trova a <strong>soli 2 km dal centro di
                Sarnico</strong>, raggiungibile in circa 5 minuti in auto lungo
                la SP469. Dalla zona lungolago di Sarnico bastano pochi minuti
                per arrivare allo studio di Via Piave 7, Credaro (BG).
              </p>
              <p className="body-md">
                Questo rende il percorso pratico anche per chi vive a Paratico,
                Villongo, Capriolo e nei comuni del basso Lago d&apos;Iseo,
                con tempi di spostamento contenuti e la possibilita di
                organizzare appuntamenti compatibili con lavoro e famiglia.
              </p>
              <p className="body-md">
                Molte persone arrivano in studio per affrontare ansia,
                stanchezza emotiva, difficolta relazionali o momenti di
                cambiamento che stanno diventando difficili da sostenere da soli.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Come funziona il primo colloquio</h2>
              <p className="body-md">
                Il primo incontro serve a comprendere la domanda di aiuto e valutare la
                strada piu adatta. Raccogliamo i principali elementi del problema, la
                sua evoluzione e le risorse gia presenti.
              </p>
              <p className="body-md">
                Si chiariscono anche aspetti pratici: frequenza, modalita in presenza
                o online, e aspettative realistiche sul percorso. L&apos;obiettivo e
                dare una prima cornice chiara, senza forzare decisioni premature.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Obiettivi del percorso e tempi</h2>
              <p className="body-md">
                Il lavoro inizia con la riduzione dei sintomi piu urgenti: gestione
                dell&apos;ansia, miglioramento del sonno, regolazione emotiva. In una fase
                successiva si approfondiscono i nodi relazionali e gli schemi ricorrenti.
              </p>
              <p className="body-md">
                Quando indicato, puo essere integrato un lavoro specifico sul
                trauma con{' '}
                <Link href="/emdr" className="link-inline">
                  approccio EMDR
                </Link>.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg">Come raggiungere lo studio da Sarnico</h2>
            <p className="body-md">
              Da <strong>Sarnico centro</strong>: percorri Via Lantieri verso sud
              e prosegui sulla SP469 in direzione Credaro. Lo studio si trova in
              Via Piave 7, Credaro (BG), sulla destra. Tempo di percorrenza: circa 5 minuti.
            </p>
            <p className="body-md">
              Da <strong>Paratico e Capriolo</strong>: segui la SP469 direzione
              Sarnico. Credaro si incontra prima di raggiungere Sarnico.
              Parcheggio privato presente presso lo studio.
            </p>
            <p className="body-md">
              Per molte persone questo aspetto pratico conta: poter raggiungere
              lo studio senza spostamenti lunghi o complessi aiuta a mantenere
              costanza e continuita nel percorso.
            </p>
            <p className="body-md">
              Se preferisci evitare lo spostamento, e possibile iniziare
              o proseguire il percorso con{' '}
              <Link href="/contatti" className="link-inline">
                colloqui online
              </Link>{' '}
              sicuri e riservati.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-8">
        <AnimatedSection>
          <div className="card-base p-6 flex items-start gap-4">
            <Clock size={20} className="text-accent shrink-0 mt-0.5" />
            <p className="body-md">
              Approfondisci i trattamenti:{' '}
              <Link href="/terapia" className="link-inline">
                terapia individuale e di coppia
              </Link>{' '}
              e{' '}
              <Link href="/emdr" className="link-inline">
                terapia EMDR
              </Link>.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi verificare disponibilita per un primo colloquio?"
        subtitle="Indicami la zona da cui arrivi e la fascia oraria preferita: ti rispondo entro 24 ore lavorative."
      />
    </>
  );
}
