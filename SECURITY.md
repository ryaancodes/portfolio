# Security Policy

## Supported Versions

This portfolio is a single, continuously-deployed `main` branch.
Only the latest deployed version is supported.

| Version | Supported |
| ------- | --------- |
| main    | ✅        |

## Reporting a Vulnerability

This is a personal portfolio with no backend, authentication, or
user data storage — the attack surface is intentionally minimal.
That said, if you find a security issue (e.g. a dependency
vulnerability, an XSS vector in the contact form, or a misconfigured
header), please report it privately rather than opening a public
issue:

- **Email:** ryaandevnani@gmail.com

Please include:

1. A description of the issue and its potential impact.
2. Steps to reproduce (if applicable).
3. Any suggested remediation.

I'll acknowledge reports within a few days and aim to resolve
confirmed issues promptly.

## Notes on the contact form

The contact form either POSTs JSON to an external endpoint
configured via `VITE_CONTACT_FORM_ENDPOINT`, or falls back to a
`mailto:` link. No form data is stored by this application itself —
any storage/processing is handled by the configured third-party
endpoint, which should be reviewed independently for its own
security and privacy practices.

## Dependencies

Dependencies are managed via `package.json` / `package-lock.json`.
Run `npm audit` periodically and keep dependencies up to date,
especially `vite`, `react`, and `react-dom`.
