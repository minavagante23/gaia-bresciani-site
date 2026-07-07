import { Star, ExternalLink } from 'lucide-react';
import { MIODOTTORE_REVIEWS_URL, reviews } from '@/lib/reviews';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white/50 section-lazy section-wash">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">Recensioni</p>
          <h2 className="heading-lg mb-4">
            Cosa dicono i pazienti
          </h2>
          <p className="body-lg">
            Recensioni verificate di chi ha iniziato un percorso in studio o
            online.
          </p>
          <p className="text-sm text-primary/60 mt-4">
            Una parte delle persone che mi contatta arriva per ansia, momenti di
            blocco, difficoltà relazionali o eventi emotivamente intensi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="card-base card-hover card-glow p-6 flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm text-primary-light leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-4 pt-4 border-t border-primary/[0.06] flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">
                  {review.name}
                </span>
                <span className="text-[0.65rem] text-primary/40 uppercase tracking-wider">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={MIODOTTORE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Leggi tutte le recensioni su MioDottore"
            className="btn-outline btn-shine py-3 px-6 text-sm gap-2 inline-flex"
          >
            Leggi tutte le recensioni su MioDottore
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
