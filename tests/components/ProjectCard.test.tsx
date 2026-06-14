import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/data/projects';

describe('ProjectCard', () => {
  it('renders project title and toggles details', () => {
    const project = PROJECTS[0];
    render(<ProjectCard project={project} index={0} />);

    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();

    const toggle = screen.getByRole('button', { name: /view details/i });
    expect(screen.queryByText(/key features/i)).not.toBeInTheDocument();

    fireEvent.click(toggle);
    expect(screen.getByText(/key features/i)).toBeInTheDocument();
  });
});
