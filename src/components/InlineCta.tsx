import Link from 'next/link';
import { linkTitle } from '@/lib/link-titles';
import {
  CTA_PRIMARY_LABEL,
  CTA_TRUST_LINE,
  MIODOTTORE_BOOKING_URL,
  PHONE_HREF,
} from '@/lib/contact';

interface InlineCtaProps {
  title?: string;
  subtitle?: string;
}

export default function InlineCta({
  title = 'Vuoi fissare un primo colloquio in presenza?',
  subtitle = 'Nel primo contatto definiamo orario, sede e obiettivo del colloquio, senza impegno.',
}: InlineCtaProps) {
  return (
    <section className="section-container py-14 lg:py-20">
      <div className="max-w-xl">
        <h2 className="heading-md mb-3">{title}</h2>
        <p className="body-md mb-8">{subtitle}</p>
        <Link
          href="/contatti"
          title={linkTitle('/contatti')}
          className="btn-primary"
        >
          {CTA_PRIMARY_LABEL}
        </Link>
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
        </p>
        <p className="text-sm text-muted mt-4">{CTA_TRUST_LINE}</p>
      </div>
    </section>
  );
}
