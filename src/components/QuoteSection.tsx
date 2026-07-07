import AnimatedSection from './AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';
import { linkTitle } from '@/lib/link-titles';

export default function QuoteSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 overflow-hidden section-lazy">
      <div className="section-container space-y-12">
        <AnimatedSection>
          <Link
            href="/psicologa-sarnico"
            className="group relative block max-w-md mx-auto rounded-2xl overflow-hidden shadow-soft-lg transition-[box-shadow,transform] duration-300 hover:shadow-soft-xl hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Psicologa a Sarnico e Lago d'Iseo: studio a Credaro e informazioni sulla zona"
            title={linkTitle('/psicologa-sarnico')}
          >
            <Image
              src="/assets/psicologa-lago-iseo-sarnico.webp"
              alt="Studio di psicologia Gaia Bresciani a Credaro, riferimento per percorsi psicologici vicino a Sarnico e Lago d'Iseo"
              width={640}
              height={540}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 80vw, 640px"
            />
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 text-accent/15 text-[5rem] sm:text-[8rem] font-serif leading-none select-none" aria-hidden="true">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="text-[1.32rem] sm:text-2xl lg:text-[1.75rem] font-serif text-primary leading-[1.58] italic text-balance">
                L&apos;individuo non &egrave; vittima del proprio passato,
                ma creatore del proprio futuro.
              </p>
              <footer className="mt-6">
                <cite className="not-italic text-sm text-primary/50 font-sans">
                  Alfred Adler &mdash; Fondatore della Psicologia Individuale
                </cite>
              </footer>
            </blockquote>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
