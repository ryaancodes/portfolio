import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary';

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

/**
 * Shared call-to-action button, rendered as either a <button> or an <a>.
 * Visual styling matches the original hand-written `.btn-primary` /
 * `.btn-secondary` classes from the static site.
 */
export function Button(props: ButtonProps | AnchorProps) {
  const { variant = 'primary', children, className } = props;
  const classes = cn(variant === 'primary' ? 'btn-primary' : 'btn-secondary', className);

  if (props.as === 'a') {
    const { as: _as, variant: _v, className: _c, children: _ch, ...anchorProps } = props;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, className: _c, children: _ch, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
