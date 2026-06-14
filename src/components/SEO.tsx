import { useEffect } from 'react';
import { SITE } from '@/constants';

interface SEOProps {
  title?: string;
  description?: string;
}

/**
 * Lightweight, dependency-free document head manager.
 * Updates <title> and the meta description tag on mount.
 * For a multi-page app this would be replaced with a router-aware
 * solution (e.g. react-helmet-async).
 */
export function SEO({ title = SITE.title, description = SITE.description }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [title, description]);

  return null;
}
