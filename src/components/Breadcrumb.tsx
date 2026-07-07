import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="section-container pt-24 lg:pt-28 pb-2">
      <ol
        className="flex items-center gap-1.5 text-sm text-primary/40"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            title={linkTitle('/')}
            itemProp="item"
            className="hover:text-primary/60 transition-colors"
          >
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <li
            key={item.label}
            className="flex items-center gap-1.5"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight size={12} className="text-primary/25" />
            {item.href ? (
              <Link
                href={item.href}
                title={linkTitle(item.href, item.label)}
                itemProp="item"
                className="hover:text-primary/60 transition-colors"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" className="text-primary/60">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
