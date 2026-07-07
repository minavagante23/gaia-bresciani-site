import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';
import { Compass, Layers, RefreshCw } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Terapia individuale e di coppia vicino Sarnico | Studio a Credaro',
  description:
    'Terapia individuale e di coppia con studio a Credaro, facilmente raggiungibile da Sarnico e basso Lago d\'Iseo. Primo colloquio per definire obiettivi e metodo.',
  path: '/terapia',
  ogTitle: 'Terapia individuale e di coppia | Gaia Bresciani',
  ogDescription:
    'Percorsi individuali e di coppia per ansia, relazioni, autostima e fasi di cambiamento, con metodo chiaro e personalizzato.',
});

export default function TerapiaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Terapia Individuale e di Coppia' }]} />
      <PageHeader
        eyebrow="Percorsi terapeutici"
        title="Terapia individuale e di coppia"
        subtitle="Ci sono fasi in cui si continua ad andare avanti, ma cresce un senso di fatica, confusione o distanza nelle relazioni."
      />

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <p className="body-md">
              Nel percorso terapeutico lavoriamo per comprendere cosa mantiene
              il disagio e come recuperare stabilit&agrave; emotiva, chiarezza e
              direzione.
            </p>
            <p className="body-md">
              Ricevo a Credaro, in una sede comoda anche per chi arriva da
              Sarnico e dal basso Lago d&apos;Iseo. Quando serve, resta
              disponibile anche una sede secondaria nell&apos;area di Brescia.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <h2 className="heading-lg mb-4">Come lavoro in terapia</h2>
          <p className="body-md max-w-3xl mb-10">Un percorso su misura, non standard.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Compass,
              title: 'Partiamo dal presente',
              text: 'Sintomi, storia personale, relazioni e risorse disponibili come punto di partenza.',
            },
            {
              icon: Layers,
              title: 'Obiettivi concreti',
              text: 'Nel primo colloquio condividiamo una lettura del problema e definiamo obiettivi misurabili.',
            },
            {
              icon: RefreshCw,
              title: 'Approccio integrato',
              text: 'L\'approccio adleriano considera la persona nella sua globalit\u00e0. Quando indicato, integro la terapia EMDR.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card-base p-7">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={22} strokeWidth={1.6} className="text-accent" />
                  </div>
                  <h3 className="heading-md mb-2">{item.title}</h3>
                  <p className="body-md">{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            <div className="space-y-4 flex-1">
              <h2 className="heading-lg mb-4">L&apos;approccio psicodinamico adleriano</h2>
              <p className="body-md">
                L&apos;approccio adleriano considera la persona nella sua
                globalit&agrave;: storia, emozioni, legami, valori e contesto di vita.
              </p>
              <p className="body-md">
                Quando indicato, integro la{' '}
                <Link href="/emdr" className="text-accent-deep hover:underline">
                  terapia EMDR
                </Link>{' '}
                per elaborare traumi, blocchi emotivi e stati di allerta persistenti.
              </p>
            </div>
            <div className="shrink-0 w-[160px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src="/assets/alfred-adler.webp"
                  alt="Alfred Adler, fondatore della Psicologia Individuale Adleriana"
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>
              <p className="text-xs text-primary/45 text-center mt-3">
                Alfred Adler &mdash; Psicologia Individuale
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Ti serve un primo confronto?"
        subtitle="Scrivimi senza impegno: nel primo incontro chiariremo obiettivi, modalità e tempi del percorso."
      />
    </>
  );
}
