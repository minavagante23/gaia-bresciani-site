import Link from 'next/link';
import { MessageCircle, Compass, ClipboardList, TrendingUp } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Primo Contatto',
    description:
      'Scrivimi o chiamami indicando in breve cosa stai vivendo, la sede preferita e la fascia oraria pi\u00f9 comoda.',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Colloquio Conoscitivo',
    description:
      'Nel primo incontro raccogliamo la situazione attuale, chiarisco come lavoro e valutiamo insieme gli obiettivi.',
  },
  {
    icon: ClipboardList,
    number: '03',
    title: 'Piano Personalizzato',
    description:
      'Se il percorso \u00e8 adatto, definiamo modalit\u00e0, frequenza, sede e tipo di lavoro pi\u00f9 utile per te.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Percorso Terapeutico',
    description:
      'Lavoriamo con continuit\u00e0 monitorando l\'andamento del percorso e adattandolo quando serve.',
  },
];

export default function MethodologySteps() {
  return (
    <section id="metodo" className="section-padding section-lazy">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow">Il percorso</p>
          <h2 className="heading-lg mb-4">
            Come funziona la terapia
          </h2>
          <p className="body-lg">
            Un percorso strutturato e trasparente, pensato per
            accompagnarti con chiarezza in ogni fase.
          </p>
          <p className="text-sm text-primary/60 mt-4">
            Ti rispondo entro 24 ore lavorative. Il primo colloquio serve a
            capire se questo spazio pu\u00f2 essere davvero utile per la tua
            situazione.
          </p>
          <p className="text-sm text-primary/60 mt-4">
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

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[2px] bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative text-center lg:text-center"
                >
                  <div className="relative inline-flex mb-6">
                    <span
                      aria-hidden="true"
                      className="section-index absolute -top-10 left-1/2 -translate-x-1/2 text-6xl"
                    >
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center relative z-10">
                      <Icon size={24} strokeWidth={1.6} className="text-accent" />
                    </div>
                  </div>

                  <h3 className="heading-md mb-3">{step.title}</h3>
                  <p className="body-md max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
