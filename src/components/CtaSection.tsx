import AnimatedSection from './AnimatedSection';
import DeferredMount from './DeferredMount';
import { Phone, Mail } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';
import dynamic from 'next/dynamic';

const MioDottoreWidget = dynamic(() => import('./MioDottoreWidget'), {
  ssr: false,
  loading: () => (
    <a
      href="https://www.miodottore.it/gaia-miriam-teresa-bresciani/psicoterapeuta-psicologo-clinico-psicologo/brescia"
      target="_blank"
      rel="nofollow noopener noreferrer"
      title="Prenota un appuntamento su MioDottore"
      className="btn-outline w-full justify-center"
    >
      Verifica disponibilit&agrave; su MioDottore
    </a>
  ),
});

export default function CtaSection() {
  return (
    <section id="contatti" className="section-padding">
      <div className="section-container space-y-12">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark p-10 sm:p-14 lg:p-20 text-center">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/2 gpu" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2 gpu" aria-hidden="true" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-5 text-balance">
                Possiamo iniziare con un primo colloquio
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                Se per te &egrave; pi&ugrave; comodo raggiungere Credaro, possiamo
                fissare un appuntamento in presenza e valutare insieme come
                procedere. Ti rispondo entro 24 ore lavorative.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+393408389958"
                  title={linkTitle('tel:+393408389958')}
                  className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-deep text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-accent-dark hover:shadow-soft active:scale-[0.98]"
                >
                  <Phone size={17} />
                  Prenota un colloquio
                </a>
                <a
                  href="/contatti/#contact-form"
                  title={linkTitle('/contatti/#contact-form')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/20 active:scale-[0.98]"
                >
                  <Mail size={17} />
                  Scrivimi direttamente
                </a>
              </div>

              <p className="text-white/75 text-xs mt-8">
                Sedute da 70 a 100 &euro; &middot; Detraibili al 19% &middot; Fattura sanitaria
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="card-base card-glow p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="heading-md mb-4 text-center">Prenota su MioDottore</h3>
            <p className="body-md text-center mb-6">
              Scegli data e orario direttamente dal calendario.
              Puoi anche leggere le recensioni dei pazienti.
            </p>
            <DeferredMount timeoutMs={4000}>
              <MioDottoreWidget />
            </DeferredMount>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
