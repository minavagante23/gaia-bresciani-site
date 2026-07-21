import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { createPageMetadata } from '@/lib/seo';
import { Compass, Layers, RefreshCw } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Terapia individuale e di coppia a Credaro | Vicino Sarnico',
  description:
    'Percorso di psicoterapia individuale o di coppia a Credaro, comodo da Sarnico e Lago d\'Iseo. Primo colloquio per obiettivi, tempi e metodo chiaro.',
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
        subtitle="Un percorso chiaro per ansia, relazioni, autostima e momenti di blocco, con studio a Credaro vicino a Sarnico."
      />

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <p className="body-md">
              Nel percorso terapeutico lavoriamo per comprendere cosa mantiene
              il disagio e come recuperare stabilit&agrave; emotiva, chiarezza e
              direzione. Non parto da etichette generiche: partiamo da quello
              che oggi pesa nella tua vita e da obiettivi realistici da
              condividere fin dal primo colloquio.
            </p>
            <p className="body-md">
              Ricevo a Credaro, in una sede comoda anche per chi arriva da{' '}
              <Link href="/psicologa-sarnico" className="link-inline">
                Sarnico e dal basso Lago d&apos;Iseo
              </Link>
              . Quando serve, resta disponibile anche una sede secondaria
              nell&apos;area di Brescia e, in alcuni casi, la continuit&agrave;
              online.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <h2 className="heading-lg mb-4">Per chi &egrave; pensata</h2>
          <p className="body-md max-w-3xl mb-6">
            La terapia individuale &egrave; utile quando ansia, stress,
            difficolt&agrave; relazionali, bassa autostima o un senso di blocco
            iniziano a condizionare sonno, lavoro o relazioni. La terapia di
            coppia &egrave; indicata quando il dialogo si spezza, i conflitti si
            ripetono o la distanza emotiva diventa difficile da gestire da soli.
          </p>
          <p className="body-md max-w-3xl">
            Tra i temi pi&ugrave; frequenti:{' '}
            <Link href="/approfondimenti/ansia-attacchi-panico" className="link-inline">
              ansia e attacchi di panico
            </Link>
            ,{' '}
            <Link href="/approfondimenti/dipendenza-affettiva" className="link-inline">
              dinamiche di dipendenza affettiva
            </Link>
            ,{' '}
            <Link href="/approfondimenti/autostima-bassa" className="link-inline">
              autostima fragile
            </Link>
            ,{' '}
            <Link href="/approfondimenti/stanchezza-emotiva" className="link-inline">
              stanchezza emotiva
            </Link>{' '}
            e crisi di coppia. Se vuoi una panoramica dedicata al lavoro a due,
            puoi leggere anche l&apos;approfondimento sulla{' '}
            <Link href="/approfondimenti/terapia-di-coppia" className="link-inline">
              terapia di coppia
            </Link>
            .
          </p>
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
              text: "L'approccio adleriano considera la persona nella sua globalità. Quando indicato, integro la terapia EMDR.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title}>
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
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg mb-4">Individuale e di coppia: come scegliere</h2>
            <p className="body-md">
              Nel percorso individuale lo spazio &egrave; dedicato a te: storia,
              emozioni, schemi che si ripetono e obiettivi personali. Nella
              terapia di coppia lavoriamo sulla comunicazione, sui cicli di
              conflitto e su ci&ograve; che rende difficile sentirsi ascoltati.
            </p>
            <p className="body-md">
              Non sempre &egrave; necessario scegliere subito: nel primo
              colloquio valutiamo insieme se ha pi&ugrave; senso partire da un
              lavoro individuale, da un percorso a due, o da un&apos;integrazione
              successiva.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg mb-4">L&apos;approccio psicodinamico adleriano</h2>
            <p className="body-md">
              L&apos;approccio adleriano, fondato sulla Psicologia Individuale di
              Alfred Adler, considera la persona nella sua globalit&agrave;:
              storia, emozioni, legami, valori e contesto di vita.
            </p>
            <p className="body-md">
              Quando indicato, integro la{' '}
              <Link href="/emdr" className="link-inline">
                terapia EMDR
              </Link>{' '}
              per elaborare traumi, blocchi emotivi e stati di allerta persistenti.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg mb-4">Tempi, costi e primo colloquio</h2>
            <p className="body-md">
              Una seduta dura circa 50 minuti. La durata del percorso dipende
              dagli obiettivi e dalla complessit&agrave; della situazione: lo
              definiamo insieme in modo trasparente. Il compenso di una seduta
              &egrave; compreso tra 70 e 100 euro, a seconda del tipo di
              percorso; i dettagli pratici li trovi anche nella pagina{' '}
              <Link href="/faq" className="link-inline">
                FAQ
              </Link>
              .
            </p>
            <p className="body-md">
              Il primo colloquio serve a chiarire la richiesta, capire se il
              percorso &egrave; adatto e definire i passi successivi, senza
              pressione. Per disponibilit&agrave; e sede puoi scrivere dalla
              pagina{' '}
              <Link href="/contatti" className="link-inline">
                Contatti
              </Link>
              .
            </p>
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
