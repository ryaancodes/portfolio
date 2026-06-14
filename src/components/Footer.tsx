export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-center">
      <p className="text-[13px] text-muted">
        Designed &amp; built by{' '}
        <span className="font-mono text-ink">Ryaan Devnani</span>{' '}
        &middot; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
