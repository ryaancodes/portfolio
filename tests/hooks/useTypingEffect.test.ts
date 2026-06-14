import { describe, expect, it, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

describe('useTypingEffect', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('types out the first word character by character', () => {
    vi.useFakeTimers();

    const { result } = renderHook(() =>
      useTypingEffect({ words: ['Hi'], typingSpeedMs: 10, pauseMs: 1000 }),
    );

    expect(result.current).toBe('');

    act(() => {
      vi.advanceTimersByTime(10);
    });
    expect(result.current).toBe('H');

    act(() => {
      vi.advanceTimersByTime(10);
    });
    expect(result.current).toBe('Hi');
  });
});
