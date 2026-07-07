import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';
import { GraduationCap, Target, Handshake } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Chi sono | Psicologa vicino Sarnico con studio a Credaro',
  description:
    'Conosci Gaia Bresciani, psicologa e psicoterapeuta con studio a Credaro, punto di riferimento per chi vive tra Sarnico e basso Lago d\'Iseo.',
  path: '/chi-sono',
  ogDescription:
    'Approccio clinico adleriano ed EMDR, con percorsi personalizzati per ansia, relazioni, autostima e momenti di crisi.',
});

export default function ChiSonoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Chi sono' }]} />
      <PageHeader
        eyebrow="Psicologa e Psicoterapeuta"
        title="Chi sono"
        subtitle="Metto al centro la persona, non la diagnosi. Ogni percorso parte da te, dalla tua storia e da quello che stai vivendo."
      />

      <section className="section-container pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:col-span-3 space-y-10">
            <div className="space-y-4">
              <p className="body-lg">
                Sono Gaia Bresciani, <strong>psicologa e psicoterapeuta</strong>.
                Ricevo a Credaro, in una sede facilmente raggiungibile anche da
                Sarnico e dai comuni vicini del Lago d&apos;Iseo.
              </p>
              <p className="body-md">
                Quando necessario, il percorso pu&ograve; proseguire anche online
                o essere organizzato nella sede secondaria di Castenedolo.
              </p>
            </div>

            <figure className="relative pl-6 border-l-2 border-accent/40">
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-7 font-serif text-6xl leading-none text-accent/25 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="font-serif text-xl sm:text-2xl leading-snug text-primary">
                Ho scelto di diventare psicoterapeuta perch&eacute; credo che ognuno
                meriti uno spazio in cui sentirsi ascoltato senza giudizio.
              </blockquote>
              <figcaption className="body-md mt-4">
                So che chiedere aiuto &egrave; difficile &mdash; spesso chi arriva in
                studio ci ha pensato a lungo prima di farlo. Il mio obiettivo &egrave;
                creare le condizioni perch&eacute; quel primo passo non sia spaventoso,
                ma l&apos;inizio di un cambiamento reale e sostenibile.
              </figcaption>
            </figure>

            <dl className="border-t border-primary/[0.08] divide-y divide-primary/[0.08]">
              <div className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-6 py-4">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-deep pt-0.5">
                  Formazione
                </dt>
                <dd className="body-md">Psicologia Clinica e della Salute.</dd>
              </div>
              <div className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-6 py-4">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-deep pt-0.5">
                  Albo
                </dt>
                <dd className="body-md">
                  Iscritta all&apos;
                  <a
                    href="https://www.opl.it/psicologi/22433/Bresciani-Gaia-Miriam-Teresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-deep hover:underline"
                  >
                    Albo Professionale degli Psicologi della Lombardia
                  </a>{' '}
                  (n. 22433).
                </dd>
              </div>
              <div className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-6 py-4">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-deep pt-0.5">
                  Specializzazione
                </dt>
                <dd className="body-md">
                  Psicoterapia Psicodinamica Adleriana presso l&apos;
                  <a
                    href="https://www.scuolaadleriana.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-deep hover:underline"
                  >
                    Istituto Alfred Adler
                  </a>
                  .
                </dd>
              </div>
              <div className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-6 py-4">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-deep pt-0.5">
                  Approccio
                </dt>
                <dd className="body-md">
                  Ascolto clinico, obiettivi condivisi e rispetto dei tuoi tempi.
                </dd>
              </div>
            </dl>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-[280px]">
              <div
                className="absolute -inset-5 -z-10 bg-accent/12 blur-2xl gpu"
                style={{ borderRadius: '60% 40% 55% 45% / 55% 50% 50% 45%' }}
                aria-hidden="true"
              />
              <div className="photo-grade relative aspect-[3/4] overflow-hidden rounded-[180px_180px_24px_24px] shadow-soft-lg">
                <Image
                  src="/assets/studio-psicologia-lago-iseo-sarnico.webp"
                  alt="Ritratto professionale Gaia Bresciani, psicologa psicoterapeuta a Sarnico e Lago d'Iseo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 280px"
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-primary/55">
                <span className="h-px w-8 bg-accent/50" />
                Studio di Credaro (BG)
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <p className="eyebrow">Il metodo</p>
          <h2 className="heading-lg mb-10">Come lavoro</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              number: '01',
              icon: Handshake,
              title: 'Accoglienza',
              text: 'Il primo incontro serve a comprendere cosa stai vivendo: sintomi, contesto e bisogno principale.',
            },
            {
              number: '02',
              icon: Target,
              title: 'Obiettivi concreti',
              text: 'Costruiamo un percorso sostenibile, con obiettivi realistici e una direzione clinica chiara.',
            },
            {
              number: '03',
              icon: GraduationCap,
              title: 'Metodo integrato',
              text: 'Approccio psicodinamico adleriano, con possibilità di integrare EMDR quando indicato.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card-base p-7 relative overflow-hidden h-full">
                  <span
                    aria-hidden="true"
                    className="section-index absolute top-4 right-5 text-5xl"
                  >
                    {item.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative z-10">
                    <Icon size={22} strokeWidth={1.6} className="text-accent" />
                  </div>
                  <h3 className="heading-md mb-2 relative z-10">{item.title}</h3>
                  <p className="body-md relative z-10">{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="section-container pb-8">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg mb-4">Per chi cerca un supporto in zona</h2>
            <p className="body-md">
              Se vivi tra Sarnico e il basso Lago d&apos;Iseo, puoi contare su
              un riferimento stabile in presenza a Credaro.
            </p>
            <p className="body-md">
              L&apos;obiettivo &egrave; aiutarti a <strong>ritrovare equilibrio</strong>,
              regolazione emotiva e un modo pi&ugrave; efficace di affrontare quello
              che stai attraversando.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi capire da dove iniziare?"
        subtitle="Scrivimi senza impegno: valutiamo insieme il primo colloquio e la modalità più adatta."
      />
    </>
  );
}
