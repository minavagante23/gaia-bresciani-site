import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { MessageCircle } from 'lucide-react';
import {
  CTA_PRIMARY_LABEL,
  CTA_TRUST_LINE,
  MIODOTTORE_BOOKING_URL,
  PHONE_HREF,
  WHATSAPP_ARIA,
  WHATSAPP_TITLE,
  WHATSAPP_URL,
} from '@/lib/contact';

interface InlineCtaProps {
  title?: string;
  subtitle?: string;
}

export default function InlineCta({
  title = 'Vuoi fissare un primo colloquio in presenza?',
  subtitle = 'Scrivimi su WhatsApp senza impegno: nel primo contatto definiamo orario, sede e obiettivo del colloquio.',
}: InlineCtaProps) {
  return (
    <AnimatedSection className="section-container py-14 lg:py-20">
      <div className="card-base p-8 sm:p-10 lg:p-12 text-center bg-gradient-to-br from-primary/[0.02] to-accent/[0.04]">
        <h2 className="heading-md mb-3">{title}</h2>
        <p className="body-md max-w-lg mx-auto mb-8">{subtitle}</p>
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
        <p className="text-sm text-muted mt-5">
          Oppure{' '}
          <a
            href={MIODOTTORE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-inline"
          >
            MioDottore
          </a>
          {' · '}
          <a href={PHONE_HREF} className="link-inline">
            chiama
          </a>
          {' · '}
          <Link href="/contatti/" className="link-inline">
            contatti
          </Link>
        </p>
        <p className="text-sm text-muted mt-4">{CTA_TRUST_LINE}</p>
      </div>
    </AnimatedSection>
  );
}
