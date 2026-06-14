import type { SocialLink } from '@/types/common';
import { SITE } from '@/constants';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/ryaancodes', icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ryaandevnani13',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/ryaaandevnani',
    icon: 'instagram',
  },
  { label: 'Email', url: `mailto:${SITE.email}`, icon: 'mail' },
];
