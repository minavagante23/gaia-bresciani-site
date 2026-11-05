import { Linkedin, Facebook } from 'lucide-react';
import {
  FACEBOOK_LABEL,
  FACEBOOK_URL,
  LINKEDIN_LABEL,
  LINKEDIN_URL,
} from '@/lib/contact';

type SocialNetwork = 'linkedin' | 'facebook';
type SocialVariant = 'light' | 'dark';

interface SocialIconLinkProps {
  network: SocialNetwork;
  variant?: SocialVariant;
  className?: string;
}

const networkConfig = {
  linkedin: {
    href: LINKEDIN_URL,
    label: LINKEDIN_LABEL,
    Icon: Linkedin,
  },
  facebook: {
    href: FACEBOOK_URL,
    label: FACEBOOK_LABEL,
    Icon: Facebook,
  },
} as const;

const variantClass: Record<SocialVariant, string> = {
  light:
    'touch-target justify-center rounded-full bg-white/10 text-white/80 hover:bg-accent/20 hover:text-white transition-colors',
  dark:
    'inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/10 text-primary/70 hover:border-accent/40 hover:text-accent hover:bg-accent/[0.06] transition-colors',
};

export default function SocialIconLink({
  network,
  variant = 'dark',
  className = '',
}: SocialIconLinkProps) {
  const { href, label, Icon } = networkConfig[network];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`${variantClass[variant]} ${className}`.trim()}
    >
      <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}
