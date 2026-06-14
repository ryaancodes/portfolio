import '@testing-library/jest-dom/vitest';

/**
 * jsdom does not implement IntersectionObserver, which Framer Motion's
 * `whileInView` relies on. Provide a minimal stub so components using
 * scroll-triggered animations can be rendered in tests.
 */
class IntersectionObserverStub implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver =
  IntersectionObserverStub as unknown as typeof IntersectionObserver;
