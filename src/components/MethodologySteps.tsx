import Link from 'next/link';
import { linkTitle } from '@/lib/link-titles';

const steps = [
  {
    title: 'Primo contatto',
    description:
      'Scrivimi o chiamami indicando in breve cosa stai vivendo, la sede preferita e la fascia oraria pi\u00f9 comoda.',
  },
  {
    title: 'Colloquio conoscitivo',
    description:
      'Nel primo incontro raccogliamo la situazione attuale, chiarisco come lavoro e valutiamo insieme gli obiettivi.',
  },
  {
    title: 'Piano personalizzato',
    description:
      'Se il percorso \u00e8 adatto, definiamo modalit\u00e0, frequenza, sede e tipo di lavoro pi\u00f9 utile per te.',
  },
  {
    title: 'Percorso terapeutico',
    description:
      'Lavoriamo con continuit\u00e0 monitorando l\'andamento del percorso e adattandolo quando serve.',
  },
];

export default function MethodologySteps() {
  return (
    <section id="metodo" className="section-padding section-lazy">
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow">Il percorso</p>
          <h2 className="heading-lg mb-4">Come funziona la terapia</h2>
          <p className="body-lg">
            Un percorso strutturato e trasparente, pensato per
            accompagnarti con chiarezza in ogni fase.
          </p>
          <p className="text-sm text-muted mt-4">
            Ti rispondo entro 24 ore lavorative. Il primo colloquio serve a
            capire se questo spazio pu&ograve; essere davvero utile per la tua
            situazione.
          </p>
          <p className="text-sm text-muted mt-4">
            Se vuoi capire come raggiungere lo studio, puoi vedere anche{' '}
            <Link
              href="/psicologa-sarnico"
              title={linkTitle('/psicologa-sarnico')}
              className="link-inline"
            >
              la pagina dedicata a Sarnico e al basso Lago d&apos;Iseo
            </Link>
            .
          </p>
        </div>

        <div className="max-w-2xl space-y-8">
          {steps.map((step) => (
            <div key={step.title}>
              <h3 className="heading-md mb-2">{step.title}</h3>
              <p className="body-md">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
