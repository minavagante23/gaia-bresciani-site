import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { Article } from '@/lib/articles';
import { getArticleHero } from '@/lib/articles';
import { linkTitle } from '@/lib/link-titles';

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-primary/[0.08]" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className="heading-md mb-6">
        Approfondimenti correlati
      </h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((related) => {
          const hero = getArticleHero(related.slug);
          return (
            <li key={related.slug}>
              <Link
                href={`/approfondimenti/${related.slug}`}
                title={linkTitle(`/approfondimenti/${related.slug}`, related.title)}
                className="group card-base card-hover overflow-hidden flex flex-col h-full"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-primary/[0.04]">
                  <Image
                    src={hero.src}
                    alt={hero.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-primary/45 mb-3">
                    <span>{related.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {related.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif font-semibold text-base leading-snug mb-2 group-hover:text-accent-deep transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-primary/60 leading-relaxed flex-1 line-clamp-3">
                    {related.excerpt}
                  </p>
                  <span className="mt-4 text-accent-deep text-sm font-medium flex items-center gap-1">
                    Leggi
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
