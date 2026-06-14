import { SITE } from '@/constants';
import type { ContactFormValues } from '@/types/common';

export type ContactResult =
  | { status: 'sent' }
  | { status: 'redirected' }
  | { status: 'error'; message: string };

/**
 * Sends a contact form submission.
 *
 * If `VITE_CONTACT_FORM_ENDPOINT` is configured (e.g. a Formspree or
 * serverless function URL), the message is POSTed there as JSON.
 * Otherwise, it falls back to opening the user's mail client with a
 * pre-filled `mailto:` link so the portfolio works without a backend.
 */
export async function sendContactMessage(values: ContactFormValues): Promise<ContactResult> {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return { status: 'sent' };
    } catch (error) {
      return {
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong.',
      };
    }
  }

  const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
  const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

  return { status: 'redirected' };
}
