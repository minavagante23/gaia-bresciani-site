import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { getAllArticles, getArticleHero } from '@/lib/articles';
import { createPageMetadata } from '@/lib/seo';
import { ArrowUpRight, Clock } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Approfondimenti Psicologia Sarnico e Lago d\'Iseo | Gaia Bresciani',
  description:
    'Approfondimenti su ansia, panico, stress, burnout lavorativo, autostima, perfezionismo, adolescenza e terapia di coppia. Guide pratiche per orientarti prima di iniziare un percorso psicologico.',
  path: '/approfondimenti',
  ogTitle: 'Approfondimenti | Psicologa Sarnico e Lago d\'Iseo | Gaia Bresciani',
  ogDescription:
    'Articoli pratici su ansia, stress e lavoro, burnout, relazioni, autostima, perfezionismo e adolescenza per capire meglio i sintomi e quando chiedere supporto psicologico.',
});

const articles = getAllArticles();

export default function ApprofondimentiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Approfondimenti' }]} />
      <PageHeader
        eyebrow="Risorse e guide"
        title="Approfondimenti"
        subtitle="Articoli pratici su ansia, attacchi di panico, autostima, relazioni e adolescenza. Per capire meglio cosa stai vivendo e come muovere il primo passo."
      />

      <section className="section-container pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => {
            const hero = getArticleHero(article.slug);
            return (
            <AnimatedSection key={article.title} delay={i * 0.06}>
              <Link
                href={`/approfondimenti/${article.slug}`}
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
                <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-primary/45 mb-4">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-serif font-semibold text-base leading-snug mb-3 group-hover:text-accent-deep transition-colors">
                  {article.title}
                </h2>

                <p className="text-sm text-primary/60 leading-relaxed flex-1 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-medium uppercase tracking-wider text-accent-deep bg-accent/[0.07] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-accent-deep text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Leggi l&apos;articolo
                  <ArrowUpRight size={14} />
                </span>
                </div>
              </Link>
            </AnimatedSection>
            );
          })}
        </div>
      </section>

      <InlineCta
        title="Vuoi capire quale percorso è più adatto?"
        subtitle="Scrivimi senza impegno: nel primo colloquio definiamo obiettivi e modalità."
      />
    </>
  );
}
