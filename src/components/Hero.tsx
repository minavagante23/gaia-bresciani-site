import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';
import {
  CTA_PRIMARY_LABEL,
  CTA_TRUST_LINE,
  WHATSAPP_ARIA,
  WHATSAPP_TITLE,
  WHATSAPP_URL,
} from '@/lib/contact';

const HERO_IMAGE = {
  src: '/assets/psicologa-sarnico-gaia-bresciani.webp',
  alt: "Dott.ssa Gaia Bresciani, psicologa e psicoterapeuta a Sarnico e Lago d'Iseo",
  width: 350,
  height: 467,
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 85% at 82% -10%, rgba(90,125,116,0.14), transparent 52%), radial-gradient(95% 75% at -5% 105%, rgba(36,61,66,0.07), transparent 55%)',
          }}
        />
      </div>

      <div className="section-container w-full pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-8 lg:col-span-3 hero-enter">
            <p className="eyebrow flex items-center gap-2">
              <MapPin size={14} strokeWidth={2.5} />
              Studio zona Lago d&apos;Iseo
            </p>

            {/* Titolo emotivo visivamente dominante; H1 semantico con keyword locali. */}
            <p className="heading-xl text-balance">
              <span className="block">Un primo passo,</span>
              <span className="block text-accent-deep">senza fretta</span>
            </p>

            <h1 className="font-serif text-xl lg:text-2xl font-semibold text-primary max-w-xl text-balance">
              Psicologa e Psicoterapeuta a Credaro, vicino a Sarnico e al Lago d&apos;Iseo
            </h1>

            <p className="body-lg max-w-xl">
              Sono Gaia Bresciani. Accompagno adulti e coppie con ansia, difficolt&agrave;
              relazionali, blocchi o esperienze traumatiche. Dal primo colloquio:
              ascolto clinico, chiarezza e obiettivi condivisi.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={WHATSAPP_TITLE}
                aria-label={WHATSAPP_ARIA}
                className="btn-primary btn-shine gap-2"
              >
                <MessageCircle size={16} />
                {CTA_PRIMARY_LABEL}
                <ArrowRight size={16} />
              </a>
              <a href="#metodo" title={linkTitle('#metodo')} className="btn-outline">
                Scopri il percorso
              </a>
            </div>

            <p className="pt-1 text-sm text-muted">{CTA_TRUST_LINE}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Primo colloquio orientativo
              </span>
              <span>Credaro (BG) &middot; Vicino a Sarnico</span>
              <span>Parcheggio privato</span>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-2 lg:justify-end hero-enter-delayed">
            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 bg-accent/15 blur-2xl gpu"
                style={{ borderRadius: '60% 40% 55% 45% / 55% 50% 50% 45%' }}
                aria-hidden="true"
              />
              <div className="photo-grade hero-photo relative aspect-[3/4] w-[300px] overflow-hidden rounded-[200px_200px_28px_28px] shadow-soft-lg lg:w-[350px]">
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
                  className="h-full w-full object-cover"
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
