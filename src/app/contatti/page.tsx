import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ConsentIframe from '@/components/ConsentIframe';
import { createPageMetadata } from '@/lib/seo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Contatti e primo colloquio | Studio a Credaro per chi arriva da Sarnico',
  description:
    'Contatti per un primo colloquio psicologico nello studio di Credaro, comodo per chi arriva da Sarnico e dal basso Lago d\'Iseo.',
  path: '/contatti',
  ogTitle: 'Contatti | Studio a Credaro vicino Sarnico',
  ogDescription:
    'Contatti rapidi per fissare un primo colloquio e chiarire sede, orari e modalità del percorso.',
});

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefono',
    value: '+39 340 838 9958',
    href: 'tel:+393408389958',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'gaia.bresciani23@gmail.com',
    href: 'mailto:gaia.bresciani23@gmail.com',
  },
  {
    icon: Clock,
    label: 'Orari',
    value: 'Lun-Ven 7-21, Sab 9-16:30',
  },
];

const studios = [
  {
    name: 'Credaro (BG)',
    address: 'Via Piave 7, 24060',
    area: 'Area Sarnico, Lago d\'Iseo, Grumello, Paratico, Capriolo, Villongo',
    mapSrc: 'https://maps.google.com/maps?q=Via%20Piave%207,%20Credaro%20BG&t=&z=13&ie=UTF8&iwloc=&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/Via+Piave+7,+Credaro+BG',
  },
  {
    name: 'Castenedolo (BS)',
    address: 'Piazza Martiri della Libertà 7, 25014',
    area: 'Area Brescia, Montichiari, Rezzato, Ghedi, Prevalle, Mazzano',
    mapSrc: 'https://maps.google.com/maps?q=45.4710,10.3005&z=11&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/Piazza+Martiri+della+Libertà+7,+Castenedolo+BS',
  },
];

export default function ContattiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Contatti' }]} />
      <PageHeader
        eyebrow="Contatti"
        title="Contatti e primo colloquio"
        subtitle="Se vuoi, puoi indicarmi sede preferita, fascia oraria e una breve descrizione della situazione, così da orientare meglio il primo contatto."
      />

      <section className="section-container pb-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <AnimatedSection className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="heading-md mb-6">Informazioni di contatto</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon size={18} strokeWidth={1.6} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-primary/45 uppercase tracking-wider font-medium mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-primary">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:bg-primary/[0.02] rounded-xl p-2 -m-2 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="p-2 -m-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card-base p-5 space-y-3">
              <h3 className="font-serif font-semibold text-base text-primary">
                Perché molte persone scelgono Credaro
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>Raggiungibile in pochi minuti da Sarnico, Paratico, Villongo e Capriolo.</li>
                <li>Parcheggio privato presente presso lo studio.</li>
                <li>Una sede tranquilla, utile per dare continuità al percorso.</li>
              </ul>
            </div>

            <div className="card-base p-5 space-y-3">
              <h3 className="font-serif font-semibold text-base text-primary">
                Altre modalità disponibili
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                La sede di riferimento è a Credaro; quando utile, sono disponibili
                anche colloqui online e una seconda sede a Castenedolo. Approfondisci le pagine
                dedicate a{' '}
                <Link href="/psicologa-sarnico" className="link-inline">
                  Sarnico e Lago d&apos;Iseo
                </Link>
                ,{' '}
                <Link href="/psicologa-villongo" className="link-inline">
                  Villongo e Val Calepio
                </Link>{' '}
                e{' '}
                <Link href="/psicologa-lago-iseo" className="link-inline">
                  Lago d&apos;Iseo
                </Link>
                , oppure consulta{' '}
                <Link href="/terapia" className="link-inline">
                  terapia individuale e di coppia
                </Link>
                .
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3">
            <div className="card-base p-6 sm:p-8" id="contact-form">
              <h2 className="heading-md mb-6">Scrivimi direttamente</h2>
              <p className="text-sm text-primary/60 mb-6">
                Se per te è comodo raggiungere Credaro, puoi indicarlo nel modulo:
                è la sede che propongo di default per chi arriva dalla zona di
                Sarnico e del basso Lago d&apos;Iseo.
              </p>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <h2 className="heading-lg mb-10">Le sedi</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {studios.map((studio, i) => (
            <AnimatedSection key={studio.name}>
              <div className="space-y-4">
                <div className="card-base p-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif font-semibold text-base mb-0.5">
                        {studio.name}
                      </h3>
                      <p className="text-sm text-primary/60">{studio.address}</p>
                      <p className="text-xs text-primary/45 mt-1">{studio.area}</p>
                    </div>
                  </div>
                </div>
                <ConsentIframe
                  src={studio.mapSrc}
                  title={`Mappa ${studio.name}`}
                  className="w-full h-[300px] rounded-2xl"
                  mapsUrl={studio.mapsUrl}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
