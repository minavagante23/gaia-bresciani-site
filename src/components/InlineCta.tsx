import AnimatedSection from './AnimatedSection';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import Link from 'next/link';
import { linkTitle } from '@/lib/link-titles';
import {
  CTA_PRIMARY_LABEL,
  CTA_TRUST_LINE,
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
          <a href={PHONE_HREF} title={linkTitle(PHONE_HREF)} className="btn-outline gap-2 w-full sm:w-auto">
            <Phone size={16} />
            Chiamami
          </a>
          <Link href="/contatti/#contact-form" title={linkTitle('/contatti/#contact-form')} className="btn-outline gap-2 w-full sm:w-auto">
            <FileText size={16} />
            Compila il modulo
          </Link>
        </div>
        <p className="text-sm text-muted mt-6">{CTA_TRUST_LINE}</p>
      </div>
    </AnimatedSection>
  );
}
