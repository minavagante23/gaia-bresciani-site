import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import RelatedArticles from '@/components/RelatedArticles';
import {
  getAllSlugs,
  getArticleBySlug,
  getArticleHero,
  getRelatedArticles,
} from '@/lib/articles';
import { createPageMetadata } from '@/lib/seo';
import { Clock, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const hero = getArticleHero(article.slug);

  return createPageMetadata({
    title: `${article.title} | Gaia Bresciani Psicologa`,
    description: article.excerpt,
    path: `/approfondimenti/${article.slug}`,
    openGraphType: 'article',
    publishedTime: article.publishedAt,
    images: [{ url: hero.src, alt: hero.alt }],
    twitterImage: hero.src,
  });
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const hero = getArticleHero(article.slug);
  const relatedArticles = getRelatedArticles(article.slug, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `https://www.gaiabrescianipsicologa.it${hero.src}`,
    inLanguage: 'it-IT',
    author: { '@id': 'https://www.gaiabrescianipsicologa.it/#person' },
    publisher: { '@id': 'https://www.gaiabrescianipsicologa.it/#localbusiness' },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: `https://www.gaiabrescianipsicologa.it/approfondimenti/${article.slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb
        items={[
          { label: 'Approfondimenti', href: '/approfondimenti' },
          { label: article.title },
        ]}
      />

      <article className="section-container pt-8 pb-16 lg:pb-24">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] font-medium uppercase tracking-wider text-accent-deep bg-accent/[0.07] px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="heading-lg mb-5 text-balance">{article.title}</h1>

            <div className="photo-grade relative aspect-[16/9] overflow-hidden rounded-2xl mb-8 shadow-soft">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>

            <div className="flex items-center gap-4 text-sm text-primary/45 mb-10 pb-8 border-b border-primary/[0.08]">
              <span>{article.date}</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {article.readTime} di lettura
              </span>
              <span>Dott.ssa Gaia Bresciani</span>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-5">
              {article.content.map((block, i) => {
                if (typeof block === 'string') {
                  return (
                    <p key={i} className="body-md leading-[1.85]">
                      {block}
                    </p>
                  );
                }
                if (block.type === 'h2') {
                  return (
                    <h2 key={i} className="heading-md pt-4">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'cta') {
                  return (
                    <aside
                      key={i}
                      className="card-base p-5 sm:p-6 my-2 bg-accent/[0.04] border border-accent/10"
                    >
                      <p className="body-md leading-[1.75]">
                        {block.before}{' '}
                        {block.links.map((link, j) => (
                          <span key={link.href}>
                            {j > 0 && (j === block.links.length - 1 ? ' o ' : ', ')}
                            <Link href={link.href} className="link-inline">
                              {link.label}
                            </Link>
                          </span>
                        ))}
                        {block.after ?? '.'}
                      </p>
                    </aside>
                  );
                }
                return (
                  <ul key={i} className="space-y-2 pl-5 list-disc marker:text-accent">
                    {block.items.map((item, j) => (
                      <li key={j} className="body-md leading-[1.7]">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              })}
            </div>
          </AnimatedSection>

          <RelatedArticles articles={relatedArticles} />

          <AnimatedSection>
            <div className="mt-12 pt-8 border-t border-primary/[0.08]">
              <div className="card-base p-6 mb-6 bg-accent/[0.04]">
                <p className="text-sm text-muted leading-relaxed">
                  Se ti riconosci in quello che hai letto, puoi approfondire{' '}
                  <Link href="/terapia" className="link-inline">
                    terapia individuale e di coppia
                  </Link>
                  , valutare se può esserti utile un lavoro{' '}
                  <Link href="/emdr" className="link-inline">
                    EMDR
                  </Link>{' '}
                  oppure vedere come raggiungere lo studio dalla{' '}
                  <Link href="/psicologa-sarnico" className="link-inline">
                    zona di Sarnico e del basso Lago d&apos;Iseo
                  </Link>
                  . Per informazioni e disponibilità, trovi i riferimenti nella pagina{' '}
                  <Link href="/contatti" className="link-inline">
                    Contatti
                  </Link>
                  .
                </p>
              </div>
              <Link
                href="/approfondimenti"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary/60 hover:text-accent-deep transition-colors"
              >
                <ArrowLeft size={15} />
                Tutti gli approfondimenti
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </article>

      <InlineCta
        title="Vuoi parlare di quello che stai vivendo?"
        subtitle="Il primo colloquio serve a capire insieme da dove partire, senza impegno. Se arrivi da Sarnico o dal basso Lago d'Iseo, ricevo a Credaro."
      />
    </>
  );
}
