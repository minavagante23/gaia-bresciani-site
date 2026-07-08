import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';
import { MapPin, Laptop, Clock, Target } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Psicologa Lago d\'Iseo | Studio a Credaro, basso Sebino',
  description:
    'Psicologa e psicoterapeuta per chi vive sul Lago d\'Iseo: studio a Credaro, comodo dalla riva bergamasca del Sebino, con possibilità di colloqui online.',
  path: '/psicologa-lago-iseo',
  ogTitle: 'Psicologa Lago d\'Iseo | Studio a Credaro',
  ogDescription:
    'Studio a Credaro per chi vive sul basso Sebino: comuni serviti, tempi di percorrenza e colloqui online per le zone più lontane del lago.',
});

const highlights = [
  {
    icon: MapPin,
    title: 'Comuni del lago serviti',
    text: 'Sarnico, Paratico, Predore, Tavernola Bergamasca, Iseo, Clusane, Sulzano e i paesi del basso Sebino.',
  },
  {
    icon: Laptop,
    title: 'Colloqui online',
    text: 'Per chi vive nelle zone più lontane del lago (alto Sebino, Montisola) è possibile svolgere il percorso online, in modo sicuro e riservato.',
  },
  {
    icon: Target,
    title: 'Ambiti frequenti',
    text: 'Ansia, attacchi di panico, stress, elaborazione di lutti e traumi, difficoltà relazionali e di coppia, autostima.',
  },
];

export default function ZonaLagoIseoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Zona Lago d\'Iseo' }]} />
      <PageHeader
        eyebrow="Area servita"
        title="Psicologa per chi vive sul Lago d'Iseo"
        subtitle="Lo studio di Credaro è a pochi minuti dal basso Sebino: qui trovi le informazioni pratiche per organizzare un primo colloquio."
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
              <h2 className="heading-lg">Uno studio a pochi minuti dal lago</h2>
              <p className="body-md">
                Lo studio si trova in Via Piave 7 a Credaro (BG), <strong>a circa
                5 minuti dall&apos;imbocco del lago a Sarnico</strong>. Per chi vive
                sulla riva bergamasca del Sebino - Sarnico, Predore, Tavernola
                Bergamasca - e sulla sponda bresciana del basso lago - Paratico,
                Iseo, Clusane - i tempi di percorrenza restano contenuti, tra i
                5 e i 20 minuti in auto.
              </p>
              <p className="body-md">
                È una soluzione pratica per chi cerca uno spazio di ascolto
                riservato senza doversi spostare verso Bergamo o Brescia:
                lo studio dispone di parcheggio privato e gli orari tengono
                conto delle esigenze di chi lavora.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Vivere sul lago e chiedere aiuto</h2>
              <p className="body-md">
                Nei paesi del lago le comunità sono piccole e la riservatezza
                conta: molte persone preferiscono uno studio fuori dal proprio
                paese, raggiungibile in pochi minuti ma lontano da sguardi
                familiari. Credaro, appena fuori dal circuito del lungolago,
                offre esattamente questo equilibrio.
              </p>
              <p className="body-md">
                Le richieste più frequenti riguardano ansia e attacchi di
                panico, periodi di stress prolungato, lutti e separazioni,
                difficoltà di coppia e traumi che continuano a farsi sentire
                nel presente. Quando indicato, il percorso può integrare la{' '}
                <Link href="/emdr" className="link-inline">
                  terapia EMDR
                </Link>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Se vivi nelle zone più lontane del Sebino</h2>
              <p className="body-md">
                Per chi abita nell&apos;alto lago (Lovere, Pisogne, Costa Volpino)
                o a Montisola, lo spostamento settimanale può diventare un
                ostacolo alla continuità del percorso. In questi casi è
                possibile valutare i{' '}
                <Link href="/contatti" className="link-inline">
                  colloqui online
                </Link>
                : stessa riservatezza e stessa struttura del lavoro in studio,
                senza il vincolo del viaggio.
              </p>
              <p className="body-md">
                Il primo colloquio serve proprio a definire insieme la formula
                più sostenibile: in presenza a Credaro, online, o alternando le
                due modalità.
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
              Vivi a Sarnico o in Val Calepio? Trovi indicazioni più precise
              nelle pagine dedicate a{' '}
              <Link href="/psicologa-sarnico" className="link-inline">
                Sarnico
              </Link>{' '}
              e{' '}
              <Link href="/psicologa-villongo" className="link-inline">
                Villongo
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
