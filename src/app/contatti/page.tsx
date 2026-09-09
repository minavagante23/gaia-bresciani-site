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
  EMAIL_DISPLAY,
  EMAIL_HREF,
  MIODOTTORE_BOOKING_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_ARIA,
  WHATSAPP_TITLE,
  WHATSAPP_URL,
} from '@/lib/contact';
import { MapPin, Phone, Mail, Clock, MessageCircle, Car, ExternalLink } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Prenota un primo colloquio | Psicologa a Credaro vicino Sarnico',
  description:
    'Vuoi iniziare un percorso di psicoterapia? Scrivimi su WhatsApp per un primo colloquio a Credaro, comodo da Sarnico. Risposta entro 24 ore; parcheggio privato in studio.',
  path: '/contatti',
  ogTitle: 'Prenota un primo colloquio | Gaia Bresciani',
  ogDescription:
    'WhatsApp per fissare un primo colloquio in presenza a Credaro, oppure MioDottore, telefono o modulo.',
});

const firstSteps = [
  {
    icon: MessageCircle,
    title: 'Cosa scrivere',
    text: 'Bastano zona da cui arrivi, fascia oraria preferita e una riga su cosa stai vivendo. Non serve raccontare tutto nel primo messaggio.',
  },
  {
    icon: Clock,
    title: 'Tempi di risposta',
    text: 'Ti rispondo entro 24 ore lavorative. Se preferisci scegliere data e ora da sola/o, puoi usare MioDottore.',
  },
  {
    icon: Car,
    title: 'Come arrivare',
    text: 'Studio a Via Piave 7, Credaro — circa 5 minuti da Sarnico. Parcheggio privato presso lo studio.',
  },
];

const studios = [
  {
    name: 'Credaro (BG)',
    address: 'Via Piave 7, 24060',
    area: 'Area Sarnico, Lago d\'Iseo, Grumello, Paratico, Capriolo, Villongo',
    note: 'Sede principale · Parcheggio privato',
    mapSrc: 'https://maps.google.com/maps?q=Via%20Piave%207,%20Credaro%20BG&t=&z=13&ie=UTF8&iwloc=&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/Via+Piave+7,+Credaro+BG',
  },
  {
    name: 'Castenedolo (BS)',
    address: 'Piazza Martiri della Libertà 7, 25014',
    area: 'Area Brescia, Montichiari, Rezzato, Ghedi, Prevalle, Mazzano',
    note: 'Sede secondaria, su disponibilità',
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
        subtitle="WhatsApp è il modo più rapido. Qui sotto trovi cosa scrivere, i tempi di risposta e come arrivare in studio."
      />

      <section className="section-container pb-12 sm:pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-8">
            <ul className="space-y-6">
              {firstSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                      <Icon size={18} strokeWidth={1.75} className="text-accent-deep" />
                    </div>
                    <div>
                      <h2 className="font-serif font-semibold text-base text-primary mb-1">
                        {step.title}
                      </h2>
                      <p className="body-md">{step.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="space-y-4 pt-2">
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

              <div>
                <a
                  href={MIODOTTORE_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline gap-2 w-full sm:w-auto"
                >
                  Oppure scegli data su MioDottore
                  <ExternalLink size={14} />
                </a>
              </div>

              <p className="text-sm text-muted">
                In alternativa:{' '}
                <a href={PHONE_HREF} className="link-inline">
                  chiama
                </a>
                {' · '}
                <a href="#contact-form" className="link-inline">
                  modulo
                </a>
                {' · '}
                <a href={EMAIL_HREF} className="link-inline">
                  email
                </a>
              </p>
              <p className="text-sm text-muted">{CTA_TRUST_LINE}</p>
            </div>

            <p className="body-md border-t border-primary/10 pt-6">
              Costi e durata sono in{' '}
              <Link href="/faq" className="link-inline">
                FAQ
              </Link>
              ; il metodo in{' '}
              <Link href="/terapia" className="link-inline">
                terapia individuale e di coppia
              </Link>
              . Per chi arriva da Sarnico:{' '}
              <Link href="/psicologa-sarnico" className="link-inline">
                indicazioni stradali
              </Link>
              .
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-16">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <AnimatedSection className="lg:col-span-2 h-full">
            <div className="card-base p-6 sm:p-8 space-y-6 h-full">
              <h2 className="heading-md">Altri riferimenti</h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href={PHONE_HREF}
                    className="flex items-start gap-3.5 rounded-xl -mx-2 px-2 py-1.5 hover:bg-primary/[0.03] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                      <Phone size={18} strokeWidth={1.75} className="text-accent-deep" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-sm font-medium text-primary-light mb-0.5">Telefono</p>
                      <p className="body-md text-primary !leading-snug">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={EMAIL_HREF}
                    className="flex items-start gap-3.5 rounded-xl -mx-2 px-2 py-1.5 hover:bg-primary/[0.03] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                      <Mail size={18} strokeWidth={1.75} className="text-accent-deep" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-sm font-medium text-primary-light mb-0.5">Email</p>
                      <p className="body-md text-primary !leading-snug break-words">
                        {EMAIL_DISPLAY}
                      </p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3.5 px-2 -mx-2 py-1.5">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Clock size={18} strokeWidth={1.75} className="text-accent-deep" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-medium text-primary-light mb-0.5">Orari</p>
                    <p className="body-md text-primary !leading-snug">
                      Lun-Ven 7-21, Sab 9-16:30
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3 h-full">
            <div className="card-base p-6 sm:p-8 h-full" id="contact-form">
              <h2 className="heading-md mb-3">Preferisci il modulo?</h2>
              <p className="body-md mb-6">
                Utile se non usi WhatsApp. Indica sede preferita e fascia oraria:
                per chi arriva da Sarnico e dal basso Lago d&apos;Iseo propongo di
                default Credaro.
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
            Credaro è la sede principale; Castenedolo e l&apos;online restano
            disponibili quando servono.
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
                    <p className="text-sm text-muted mt-1">{studio.note}</p>
                    <p className="text-sm text-muted mt-0.5">{studio.area}</p>
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
