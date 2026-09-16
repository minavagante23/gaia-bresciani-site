import Link from 'next/link';
import { linkTitle } from '@/lib/link-titles';
import {
  CTA_PRIMARY_LABEL,
  CTA_TRUST_LINE,
  MIODOTTORE_BOOKING_URL,
  PHONE_HREF,
} from '@/lib/contact';

export default function CtaSection() {
  return (
    <section id="contatti" className="section-padding">
      <div className="section-container">
        <div className="max-w-xl">
          <h2 className="heading-lg mb-4 text-balance">
            Possiamo iniziare con un primo colloquio in presenza
          </h2>
          <p className="body-lg mb-8">
            Valutiamo insieme un appuntamento nello studio di Credaro, comodo
            da Sarnico e dal basso Lago d&apos;Iseo.
          </p>

          <Link
            href="/contatti"
            title={linkTitle('/contatti')}
            className="btn-primary"
          >
            {CTA_PRIMARY_LABEL}
          </Link>

          <p className="text-sm text-muted mt-6">{CTA_TRUST_LINE}</p>

          <p className="text-sm text-muted mt-4">
            Oppure{' '}
            <a href={PHONE_HREF} className="link-inline">
              chiama
            </a>
            {' · '}
            <Link href="/contatti/#contact-form" className="link-inline">
              modulo
            </Link>
            {' · '}
            <a
              href={MIODOTTORE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-inline"
            >
              MioDottore
            </a>
          </p>

          <p className="text-sm text-muted mt-8">
            Sedute da 70 a 100 &euro; &middot; Detraibili al 19% &middot; Fattura sanitaria
          </p>
        </div>
      </div>
    </section>
  );
}
