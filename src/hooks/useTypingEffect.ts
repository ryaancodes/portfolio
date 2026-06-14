import { useEffect, useState } from 'react';

interface UseTypingEffectOptions {
  words: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}

/**
 * Cycles through a list of words with a typewriter-style
 * type / pause / delete animation. Returns the text to render.
 */
export function useTypingEffect({
  words,
  typingSpeedMs = 80,
  deletingSpeedMs = 40,
  pauseMs = 1800,
}: UseTypingEffectOptions): string {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && text === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1),
        );
      },
      isDeleting ? deletingSpeedMs : typingSpeedMs,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs]);

  return text;
}
