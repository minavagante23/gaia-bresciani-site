import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';
import { MapPin, Users, Clock, Target } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Psicologa vicino Villongo | Studio a Credaro, Val Calepio',
  description:
    'Psicologa e psicoterapeuta a Credaro, a pochi minuti da Villongo. Informazioni pratiche per chi vive in Val Calepio e lungo la direttrice Bergamo-Sarnico.',
  path: '/psicologa-villongo',
  ogTitle: 'Psicologa vicino Villongo | Studio a Credaro',
  ogDescription:
    'Studio a Credaro, a pochi minuti da Villongo: aree servite, primo colloquio e come raggiungere lo studio dalla Val Calepio.',
});

const highlights = [
  {
    icon: MapPin,
    title: 'Comuni serviti',
    text: 'Villongo, Credaro, Castelli Calepio, Gandosso, Foresto Sparso, Adrara San Martino, Adrara San Rocco e la Val Calepio.',
  },
  {
    icon: Users,
    title: 'Primo colloquio',
    text: 'Il primo incontro si svolge di norma in presenza a Credaro; per chi ha esigenze particolari è possibile valutare la modalità online.',
  },
  {
    icon: Target,
    title: 'Ambiti frequenti',
    text: 'Ansia, attacchi di panico, stress lavorativo, difficoltà relazionali, autostima, traumi e momenti di cambiamento.',
  },
];

export default function ZonaVillongoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Zona Villongo e Val Calepio' }]} />
      <PageHeader
        eyebrow="Area servita"
        title="Psicologa a due passi da Villongo, in Val Calepio"
        subtitle="Informazioni pratiche se vivi a Villongo o nei comuni della Val Calepio e stai valutando un primo colloquio."
      />

      <section className="section-container pb-16">
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item) => {
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
              <h2 className="heading-lg">Uno studio confinante con Villongo</h2>
              <p className="body-md">
                Lo studio si trova in Via Piave 7 a Credaro (BG), <strong>comune
                confinante con Villongo</strong>: dal centro di Villongo si arriva
                in circa 3 minuti in auto, senza attraversare traffico o strade
                complesse. Per molte persone della zona è di fatto lo studio
                psicologico più vicino a casa.
              </p>
              <p className="body-md">
                La posizione è comoda anche per chi vive negli altri comuni della
                Val Calepio: Castelli Calepio, Gandosso, Foresto Sparso, Adrara
                San Martino e Adrara San Rocco distano tutti pochi minuti di auto.
              </p>
              <p className="body-md">
                Le richieste più frequenti riguardano ansia e attacchi di panico,
                stress accumulato tra lavoro e famiglia, difficoltà di coppia e
                momenti di transizione che diventano faticosi da gestire da soli.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Per chi si sposta sulla direttrice Bergamo-Sarnico</h2>
              <p className="body-md">
                Credaro si trova lungo il percorso che collega Bergamo al basso
                Sebino. Chi lavora o studia a Bergamo e rientra verso la Val
                Calepio può fissare il colloquio al rientro, senza deviazioni:
                lo studio dispone di <strong>parcheggio privato</strong> e gli
                orari degli appuntamenti tengono conto degli spostamenti
                casa-lavoro.
              </p>
              <p className="body-md">
                Da Bergamo lo studio si raggiunge in circa 25-30 minuti; chi
                arriva dall&apos;autostrada A4 può uscire a Grumello del Monte e
                proseguire per Credaro in circa 10 minuti.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Come funziona il primo colloquio</h2>
              <p className="body-md">
                Il primo incontro serve a comprendere la domanda di aiuto e a
                valutare insieme la strada più adatta: raccogliamo gli elementi
                principali del problema, la sua storia e le risorse già presenti.
              </p>
              <p className="body-md">
                Si chiariscono anche gli aspetti pratici: frequenza degli
                incontri, modalità in presenza o online, aspettative realistiche
                sul percorso. Quando indicato, il lavoro può integrare la{' '}
                <Link href="/emdr" className="link-inline">
                  terapia EMDR
                </Link>{' '}
                per l&apos;elaborazione di esperienze traumatiche.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-8">
        <AnimatedSection>
          <div className="card-base p-6 flex items-start gap-4">
            <Clock size={20} className="text-accent shrink-0 mt-0.5" />
            <p className="body-md">
              Vivi più vicino al lago? Consulta le pagine dedicate a{' '}
              <Link href="/psicologa-sarnico" className="link-inline">
                Sarnico
              </Link>{' '}
              e al{' '}
              <Link href="/psicologa-lago-iseo" className="link-inline">
                Lago d&apos;Iseo
              </Link>
              , oppure approfondisci la{' '}
              <Link href="/terapia" className="link-inline">
                terapia individuale e di coppia
              </Link>.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi verificare disponibilità per un primo colloquio?"
        subtitle="Indicami la zona da cui arrivi e la fascia oraria preferita: ti rispondo entro 24 ore lavorative."
      />
    </>
  );
}
