import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({ children, className }: AnimatedSectionProps) {
  if (className) {
    return <div className={className}>{children}</div>;
  }

  return children;
}
