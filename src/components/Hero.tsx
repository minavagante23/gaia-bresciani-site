import { ArrowRight, Clock3, MapPin, ShieldCheck } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';

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
              'radial-gradient(120% 85% at 82% -10%, rgba(209,166,132,0.12), transparent 52%), radial-gradient(95% 75% at -5% 105%, rgba(45,70,76,0.06), transparent 55%)',
          }}
        />
      </div>

      <div className="section-container w-full pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-8 lg:col-span-3">
            <p className="eyebrow flex items-center gap-2">
              <MapPin size={14} strokeWidth={2.5} />
              Studio zona Lago d&apos;Iseo
            </p>

            <h1 className="heading-xl text-balance">
              <span className="block">So che chiedere aiuto</span>
              <span className="block text-accent-deep">non &egrave; facile</span>
            </h1>

            <h2 className="text-lg lg:text-xl font-medium text-primary-light max-w-xl">
              Psicologa e Psicoterapeuta a Credaro, vicino a Sarnico e al Lago d&apos;Iseo
            </h2>

            <p className="body-lg max-w-xl">
              So che chiedere aiuto non &egrave; facile. Sono Gaia Bresciani,
              psicologa e psicoterapeuta con studio a Credaro, vicino Sarnico e al
              Lago d&apos;Iseo. Ricevo adulti e coppie che stanno attraversando
              ansia, difficolt&agrave; relazionali, momenti di blocco o esperienze
              traumatiche. Il mio approccio unisce ascolto clinico, chiarezza e
              obiettivi condivisi gi&agrave; dal primo colloquio.
            </p>

            <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="card-base p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <ShieldCheck size={16} className="shrink-0 text-accent" />
                  Approccio chiaro
                </div>
                <p className="mt-2 text-sm text-muted">
                  Psicoterapia psicodinamica adleriana, con integrazione EMDR
                  quando indicata.
                </p>
              </div>
              <div className="card-base p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <MapPin size={16} className="shrink-0 text-accent" />
                  Studio comodo
                </div>
                <p className="mt-2 text-sm text-muted">
                  Credaro, vicino a Sarnico, con parcheggio privato presso lo
                  studio.
                </p>
              </div>
              <div className="card-base p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Clock3 size={16} className="shrink-0 text-accent" />
                  Primo passo semplice
                </div>
                <p className="mt-2 text-sm text-muted">
                  Un primo contatto chiaro, senza pressione, per chi sente che
                  chiedere aiuto non &egrave; facile.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contatti" title={linkTitle('#contatti')} className="btn-primary btn-shine gap-2">
                Prenota un colloquio
                <ArrowRight size={16} />
              </a>
              <a href="#metodo" title={linkTitle('#metodo')} className="btn-outline">
                Scopri il percorso
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-muted">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Primo colloquio orientativo
              </span>
              <span>Credaro (BG) &middot; Vicino a Sarnico</span>
              <span>Parcheggio privato &middot; Online quando utile</span>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-2 lg:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 bg-accent/15 blur-2xl gpu"
                style={{ borderRadius: '60% 40% 55% 45% / 55% 50% 50% 45%' }}
                aria-hidden="true"
              />
              <div className="photo-grade relative aspect-[3/4] w-[300px] overflow-hidden rounded-[200px_200px_28px_28px] shadow-soft-lg lg:w-[350px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  width={HERO_IMAGE.width}
                  height={HERO_IMAGE.height}
                  decoding="sync"
                  fetchPriority="high"
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
