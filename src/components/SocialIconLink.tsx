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

/** Same 16×16 slot; Facebook path fills more of the viewBox, so slight optical scale. */
function LinkedInMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="block h-4 w-4"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="block h-4 w-4 scale-[0.9]"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const networkConfig = {
  linkedin: {
    href: LINKEDIN_URL,
    label: LINKEDIN_LABEL,
    Icon: LinkedInMark,
  },
  facebook: {
    href: FACEBOOK_URL,
    label: FACEBOOK_LABEL,
    Icon: FacebookMark,
  },
} as const;

const variantClass: Record<SocialVariant, string> = {
  light:
    'touch-target justify-center rounded-full bg-white/10 text-white/80 hover:bg-accent/20 hover:text-white transition-colors',
  dark:
    'inline-flex h-12 w-12 items-center justify-center rounded-full text-primary/65 hover:text-accent hover:bg-accent/[0.06] transition-colors',
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
      <span className="inline-flex h-4 w-4 items-center justify-center">
        <Icon />
      </span>
    </a>
  );
}
