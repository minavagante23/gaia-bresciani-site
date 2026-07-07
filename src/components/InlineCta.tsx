import AnimatedSection from './AnimatedSection';
import { Phone, Mail, FileText } from 'lucide-react';
import Link from 'next/link';
import { linkTitle } from '@/lib/link-titles';

interface InlineCtaProps {
  title?: string;
  subtitle?: string;
}

export default function InlineCta({
  title = 'Vuoi fissare un primo colloquio?',
  subtitle = 'Scrivimi senza impegno: nel primo contatto definiamo orario, modalita e obiettivo del colloquio.',
}: InlineCtaProps) {
  return (
    <AnimatedSection className="section-container py-14 lg:py-20">
      <div className="card-base p-8 sm:p-10 lg:p-12 text-center bg-gradient-to-br from-primary/[0.02] to-accent/[0.04]">
        <h2 className="heading-md mb-3">{title}</h2>
        <p className="body-md max-w-lg mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="tel:+393408389958" title={linkTitle('tel:+393408389958')} className="btn-primary gap-2 w-full sm:w-auto">
            <Phone size={16} />
            Chiamami
          </a>
          <Link href="/contatti" title={linkTitle('/contatti')} className="btn-outline gap-2 w-full sm:w-auto">
            <FileText size={16} />
            Compila il modulo
          </Link>
          <a href="mailto:gaia.bresciani23@gmail.com" title={linkTitle('mailto:gaia.bresciani23@gmail.com')} className="btn-outline gap-2 w-full sm:w-auto">
            <Mail size={16} />
            Invia email
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
