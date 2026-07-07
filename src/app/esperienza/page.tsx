import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';
import { Briefcase, Users, BookOpen, Shield } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Esperienza clinica e metodo | Psicologa vicino Sarnico, studio a Credaro',
  description:
    'Esperienza clinica e metodo di Gaia Bresciani, psicologa e psicoterapeuta con studio a Credaro per chi vive tra Sarnico e basso Lago d\'Iseo.',
  path: '/esperienza',
  ogTitle: 'Esperienza clinica e metodo | Gaia Bresciani Psicologa',
  ogDescription:
    'Metodo clinico chiaro e personalizzato, con studio a Credaro per chi cerca un riferimento vicino a Sarnico e basso Lago d\'Iseo.',
});

export default function EsperienzaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Esperienza' }]} />
      <PageHeader
        eyebrow="Formazione e pratica clinica"
        title="Esperienza clinica e metodo di lavoro"
        subtitle="Quando una persona cerca aiuto, spesso arriva dopo settimane o mesi di fatica, confusione e tensione emotiva."
      />

      <section className="section-container pb-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:col-span-3 space-y-6">
            <p className="body-lg">
              Nel mio lavoro unisco ascolto clinico, chiarezza e obiettivi concreti,
              in modo da dare direzione gi&agrave; dal primo colloquio.
            </p>
            <p className="body-md">
              Ricevo principalmente in studio a Credaro. Quando necessario,
              il percorso può proseguire anche online o nella sede secondaria
              di Castenedolo.
            </p>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <Image
                src="/assets/consulenza-psicologica-online-bergamo.webp"
                alt="Esperienza professionale di Gaia Bresciani, Psicologa Psicoterapeuta"
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
          <h2 className="heading-lg mb-4">Percorso professionale</h2>
          <p className="body-lg max-w-3xl mb-10">
            Formazione e pratica clinica sul campo, con bambini, adolescenti e adulti.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Users,
              title: 'Individui e coppie',
              text: 'Percorsi individuali e di coppia per adulti in momenti di crisi e transizione.',
            },
            {
              icon: BookOpen,
              title: 'Bambini e adolescenti',
              text: 'Sostegno ai pi\u00f9 giovani, coordinato con genitori e contesto scolastico.',
            },
            {
              icon: Briefcase,
              title: 'Equipe multidisciplinari',
              text: 'Esperienza in contesti territoriali e clinici con lavoro in equipe.',
            },
            {
              icon: Shield,
              title: 'Interventi personalizzati',
              text: 'Ogni intervento parte dalla lettura precisa della richiesta, evitando soluzioni standard.',
            },
          ].map((item, i) => {
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

      <section className="section-container pb-8">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg mb-4">Cosa puoi aspettarti dai colloqui</h2>
            <p className="body-lg">
              Un ambiente riservato, tempi chiari e un piano di lavoro condiviso.
            </p>
            <p className="body-md">
              Se vivi tra Sarnico e il basso Lago d&apos;Iseo, puoi trovare a
              Credaro un riferimento vicino e continuativo.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi capire se posso esserti utile?"
        subtitle="Indicami sede e fascia oraria preferita, ti rispondo entro 24 ore lavorative."
      />
    </>
  );
}
