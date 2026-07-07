import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export default function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  return <div className={className}>{children}</div>;
}
