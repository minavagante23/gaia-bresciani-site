import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import { getAllArticles, getArticleHero } from '@/lib/articles';
import { linkTitle } from '@/lib/link-titles';

const insights = getAllArticles().slice(0, 4);

export default function InsightsGrid() {
  return (
    <section id="approfondimenti" className="section-padding bg-white/50 section-lazy section-wash">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="eyebrow">Risorse utili</p>
            <h2 className="heading-lg">Approfondimenti</h2>
          </div>
          <Link
            href="/approfondimenti"
            title={linkTitle('/approfondimenti')}
            className="text-accent-deep hover:text-primary font-medium text-sm transition-colors flex items-center gap-1 self-start sm:self-auto"
          >
            Vedi tutti
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {insights.map((article) => {
            const hero = getArticleHero(article.slug);
            return (
              <div key={article.title}>
                <Link
                  href={`/approfondimenti/${article.slug}`}
                  title={linkTitle(`/approfondimenti/${article.slug}`, article.title)}
                  className="group card-base card-hover card-glow overflow-hidden flex flex-col h-full"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-primary/[0.04]">
                    <Image
                      src={hero.src}
                      alt={hero.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-primary/45 mb-4">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif font-semibold text-base leading-snug mb-3 group-hover:text-accent-deep transition-[color,transform] duration-300 group-hover:translate-x-0.5">
                      {article.title}
                    </h3>

                    <p className="text-sm text-primary/60 leading-relaxed flex-1">
                      {article.excerpt}
                    </p>

                    <span className="mt-4 text-accent-deep text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 group-hover:translate-x-0.5">
                      Leggi
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
