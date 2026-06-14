import { Mail } from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/Icons';
import { SOCIAL_LINKS } from '@/data/social';
import { cn } from '@/utils/cn';

const ICONS = {
  github:    GithubIcon,
  linkedin:  LinkedinIcon,
  instagram: InstagramIcon,
  mail:      Mail,
} as const;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {SOCIAL_LINKS.map(({ label, url, icon }) => {
        const Icon = ICONS[icon];
        return (
          <a
            key={label}
            href={url}
            target={icon === 'mail' ? undefined : '_blank'}
            rel={icon === 'mail' ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-bg"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
