import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialLinks } from '@/components/SocialLinks';
import { SOCIAL_LINKS } from '@/data/social';

describe('SocialLinks', () => {
  it('renders a link for every entry in SOCIAL_LINKS', () => {
    render(<SocialLinks />);

    SOCIAL_LINKS.forEach(({ label }) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });
  });
});
