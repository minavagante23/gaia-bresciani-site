import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';
import { CTA_PRIMARY_LABEL, CTA_TRUST_LINE } from '@/lib/contact';

const HERO_IMAGE = {
  src: '/assets/psicologa-gaia-bresciani-cutout.webp',
  alt: "Dott.ssa Gaia Bresciani, psicologa e psicoterapeuta a Sarnico e Lago d'Iseo",
  width: 700,
  height: 896,
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container w-full pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-8 lg:col-span-3">
            <p className="eyebrow flex items-center gap-2">
              <MapPin size={14} strokeWidth={2.5} />
              Studio zona Lago d&apos;Iseo
            </p>

            <h1 className="heading-xl text-balance">
              <span className="block">Un primo passo,</span>
              <span className="block text-accent-deep">senza fretta</span>
            </h1>

            <p className="font-serif text-xl lg:text-2xl font-semibold text-primary max-w-xl text-balance">
              Psicologa e Psicoterapeuta a Credaro (BG), vicino a Sarnico (BG) e al Lago d&apos;Iseo
            </p>

            <p className="body-lg max-w-xl">
              Sono Gaia Bresciani. Accompagno adulti e coppie con ansia,
              difficolt&agrave; relazionali, blocchi o esperienze traumatiche.
              Dal primo colloquio: ascolto clinico, chiarezza e obiettivi
              condivisi.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contatti"
                title={linkTitle('/contatti')}
                className="btn-primary gap-2"
              >
                {CTA_PRIMARY_LABEL}
                <ArrowRight size={16} />
              </Link>
              <a href="#metodo" title={linkTitle('#metodo')} className="btn-outline">
                Scopri il percorso
              </a>
            </div>

            <p className="pt-1 text-sm text-muted">{CTA_TRUST_LINE}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted">
              <span>Primo colloquio orientativo</span>
              <span>Credaro (BG) &middot; Vicino a Sarnico</span>
              <span>Parcheggio privato</span>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-2 lg:justify-end">
            <div className="relative w-[300px] lg:w-[350px]">
              <div
                className="absolute inset-x-0 top-14 bottom-0 rounded-[2rem] bg-accent/35"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-b-[2rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  width={HERO_IMAGE.width}
                  height={HERO_IMAGE.height}
                  decoding="async"
                  fetchPriority="high"
                  loading="eager"
                  sizes="(max-width: 1024px) 300px, 350px"
                  className="w-full [filter:saturate(0.95)_contrast(1.03)_drop-shadow(0_20px_32px_rgba(36,61,66,0.25))]"
                />
              </div>

              <a
                href="https://www.opl.it/psicologi/22433/Bresciani-Gaia-Miriam-Teresa"
                target="_blank"
                rel="noopener noreferrer"
                title="Scheda professionale su Albo Psicologi Lombardia"
                className="absolute bottom-4 left-4 block max-w-[240px] rounded-2xl border border-primary/[0.04] bg-white px-4 py-3 no-underline shadow-soft transition-shadow duration-300 hover:shadow-soft-lg md:bottom-5 md:left-5 lg:-left-7 lg:bottom-6"
              >
                <p className="text-[0.65rem] font-medium uppercase tracking-wider text-subtle">Albo Psicologi</p>
                <p className="mt-0.5 text-sm font-semibold text-primary">N. 22433 &mdash; Lombardia</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
