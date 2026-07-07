import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';
import { Zap, ShieldCheck, Brain, HeartPulse, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'EMDR per traumi e ansia vicino Sarnico | Gaia Bresciani',
  description:
    'Terapia EMDR a Credaro per traumi, ansia e ricordi disturbanti. Un percorso graduale per ridurre attivazione emotiva e ritrovare equilibrio.',
  path: '/emdr',
  ogDescription:
    'EMDR a Credaro per traumi, ansia e blocchi emotivi, con valutazione iniziale e piano di lavoro personalizzato.',
});

const indications = [
  { icon: AlertTriangle, text: 'Traumi psicologici singoli o ripetuti' },
  { icon: HeartPulse, text: 'Lutti, separazioni o eventi critici' },
  { icon: Zap, text: 'Ansia intensa e attacchi di panico' },
  { icon: ShieldCheck, text: 'Blocchi emotivi e senso di inadeguatezza' },
  { icon: Brain, text: 'Sintomi da stress post-traumatico' },
];

export default function EmdrPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Terapia EMDR' }]} />
      <PageHeader
        eyebrow="Terapia EMDR"
        title="EMDR per traumi e ansia vicino Sarnico"
        subtitle="Un approccio psicoterapeutico riconosciuto per il trattamento di traumi, eventi stressanti e ricordi che continuano ad attivare sofferenza."
      />

      <section className="section-container pb-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:col-span-3 space-y-5">
            <p className="body-lg">
              <a
                href="https://emdr.it/emdr-2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-inline font-semibold"
              >
                EMDR
              </a>{' '}
              (Eye Movement Desensitization and Reprocessing) permette al cervello
              di rielaborare esperienze difficili attraverso stimolazioni bilaterali,
              riducendo sintomi come allerta, evitamento e pensieri intrusivi.
            </p>
            <p className="body-md">
              Sono iscritta all&apos;elenco ufficiale dei{' '}
              <a
                href="https://emdr.it/terapeuti/lombardia/provincia/bergamo/comune/credaro/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-inline"
              >
                terapeuti EMDR della Lombardia
              </a>.
            </p>
            <p className="body-md">
              Per informazioni su sedi e spostamenti, visita la pagina{' '}
              <Link href="/psicologa-sarnico" className="link-inline">
                zona Sarnico e Lago d&apos;Iseo
              </Link>.
            </p>
            <p className="body-md">
              Se desideri un primo confronto prima di iniziare, puoi usare la pagina{' '}
              <Link href="/contatti" className="link-inline">
                contatti
              </Link>{' '}
              per indicare disponibilità e sede preferita.
            </p>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <Image
                src="/assets/terapia-emdr-lago-iseo.webp"
                alt="Terapia EMDR con Gaia Bresciani, psicologa a Credaro e Lago d'Iseo"
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
          <h2 className="heading-lg mb-4">Quando può essere utile l&apos;EMDR</h2>
          <p className="body-lg max-w-3xl mb-10">Indicazioni cliniche più frequenti</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {indications.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.text}>
                <div className="card-base p-5 flex flex-col items-center text-center h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                    <Icon size={20} strokeWidth={1.6} className="text-accent" />
                  </div>
                  <p className="text-sm font-medium text-primary/80 leading-snug">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="section-container pb-8">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <p className="body-md">
              L&apos;EMDR non è una scorciatoia, ma un metodo strutturato che
              viene integrato nel percorso psicoterapeutico dopo una valutazione
              iniziale.
            </p>
            <p className="body-md">
              Offro questo lavoro a chi vive tra Lago d&apos;Iseo, Sarnico e aree vicine.
            </p>
            <p className="body-md">
              Se vuoi una panoramica più ampia sul lavoro clinico, puoi leggere anche la pagina{' '}
              <Link href="/terapia" className="link-inline">
                terapia individuale e di coppia
              </Link>.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi capire se l'EMDR è adatto alla tua situazione?"
        subtitle="Nel primo colloquio valutiamo insieme indicazioni, tempi e modalità del trattamento."
      />
    </>
  );
}
