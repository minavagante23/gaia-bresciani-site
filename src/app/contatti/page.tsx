import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ConsentIframe from '@/components/ConsentIframe';
import { createPageMetadata } from '@/lib/seo';
import {
  CTA_PRIMARY_LABEL,
  CTA_TRUST_LINE,
  WHATSAPP_ARIA,
  WHATSAPP_TITLE,
  WHATSAPP_URL,
} from '@/lib/contact';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Prenota un primo colloquio | Psicologa a Credaro vicino Sarnico',
  description:
    'Vuoi iniziare un percorso di psicoterapia? Prenota un primo colloquio a Credaro, comodo da Sarnico e Lago d\'Iseo. WhatsApp, telefono o modulo: risposta entro 24 ore.',
  path: '/contatti',
  ogTitle: 'Prenota un primo colloquio | Gaia Bresciani',
  ogDescription:
    'Contatti rapidi per fissare un primo colloquio in presenza a Credaro o chiarire sede, orari e modalità del percorso.',
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
        subtitle="Il modo più rapido per fissare un colloquio in presenza è WhatsApp. In alternativa puoi chiamarmi o usare il modulo qui sotto."
      />

      <section className="section-container pb-12 sm:pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-5">
            <p className="body-md">
              Il primo contatto serve solo a chiarire richiesta, sede e fascia oraria:
              bastano poche righe su cosa stai vivendo. Riservatezza garantita; costi e
              durata sono in{' '}
              <Link href="/faq" className="link-inline">
                FAQ
              </Link>
              , il metodo in{' '}
              <Link href="/terapia" className="link-inline">
                terapia individuale e di coppia
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={WHATSAPP_TITLE}
                aria-label={WHATSAPP_ARIA}
                className="btn-primary gap-2 w-full sm:w-auto"
              >
                <MessageCircle size={16} />
                {CTA_PRIMARY_LABEL}
              </a>
              <a href="#contact-form" className="btn-outline w-full sm:w-auto">
                Oppure compila il modulo
              </a>
            </div>
            <p className="text-sm text-muted">{CTA_TRUST_LINE}</p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <AnimatedSection className="lg:col-span-2 h-full">
            <div className="card-base p-6 sm:p-8 space-y-8 h-full flex flex-col">
              <div>
                <h2 className="heading-md mb-5">Informazioni di contatto</h2>
                <ul className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                          <Icon size={18} strokeWidth={1.75} className="text-accent-deep" />
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <p className="text-sm font-medium text-primary-light mb-0.5">
                            {item.label}
                          </p>
                          <p className="body-md text-primary !leading-snug break-words">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block rounded-xl -mx-2 px-2 py-1.5 hover:bg-primary/[0.03] transition-colors"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="px-2 -mx-2 py-1.5">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="space-y-3 border-t border-primary/10 pt-6">
                <h3 className="heading-md">Perché molte persone scelgono Credaro</h3>
                <ul className="space-y-2 body-md list-disc pl-5">
                  <li>Raggiungibile in pochi minuti da Sarnico, Paratico, Villongo e Capriolo.</li>
                  <li>Parcheggio privato presente presso lo studio.</li>
                  <li>Una sede tranquilla, utile per dare continuità al percorso.</li>
                </ul>
              </div>

              <div className="space-y-3 border-t border-primary/10 pt-6 mt-auto">
                <h3 className="heading-md">Altre modalità disponibili</h3>
                <p className="body-md">
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
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3 h-full">
            <div className="card-base p-6 sm:p-8 h-full" id="contact-form">
              <h2 className="heading-md mb-3">Scrivimi direttamente</h2>
              <p className="body-md mb-6">
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
          <h2 className="heading-lg mb-3">Le sedi</h2>
          <p className="body-md max-w-2xl mb-10">
            Due sedi in presenza, più la possibilità di colloqui online quando serve.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {studios.map((studio) => (
            <AnimatedSection key={studio.name}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent-deep shrink-0 mt-1" />
                  <div>
                    <h3 className="heading-md mb-1">{studio.name}</h3>
                    <p className="body-md !leading-snug">{studio.address}</p>
                    <p className="text-sm text-muted mt-1">{studio.area}</p>
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
