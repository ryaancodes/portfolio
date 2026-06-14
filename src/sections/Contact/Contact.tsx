import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, Mail, Send } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import { profile } from '@/data/profile';
import { SITE } from '@/constants';
import { sendContactMessage } from '@/services/contactService';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import type { ContactFormErrors, ContactFormValues } from '@/types/common';

const initialValues: ContactFormValues = { name: '', email: '', message: '' };

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please add a short message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}

export function Contact() {
  const [values, setValues]   = useState<ContactFormValues>(initialValues);
  const [errors, setErrors]   = useState<ContactFormErrors>({});
  const [status, setStatus]   = useState<'idle'|'submitting'|'success'|'redirected'|'error'>('idle');

  const handleChange =
    (field: keyof ContactFormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setStatus('submitting');
    const result = await sendContactMessage(values);
    if (result.status === 'error') { setStatus('error'); return; }
    setStatus(result.status === 'redirected' ? 'redirected' : 'success');
    setValues(initialValues);
  };

  return (
    <section id="contact" className="py-20 lg:py-[120px]">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14"
        >
          <span className="mb-4 block font-mono text-[13px] text-accent">05 · Contact</span>
          <h2 className="mb-4 text-[clamp(34px,5vw,52px)] font-bold leading-[1.1] tracking-tight text-ink">
            Let&apos;s work together.
          </h2>
          <p className="max-w-[50ch] text-[17px] leading-[1.7] text-muted">
            I&apos;m actively looking for software engineering internships. If you have an
            opening or just want to say hello — reach out.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* Left — quick-contact links */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="space-y-3">
              <p className="text-[13px] font-semibold uppercase tracking-widest text-muted/60">
                Email
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2.5 text-[17px] font-medium text-ink underline-offset-4 hover:text-accent hover:underline"
              >
                <Mail className="h-4 w-4 shrink-0 text-muted" />
                {SITE.email}
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3">
              <p className="text-[13px] font-semibold uppercase tracking-widest text-muted/60">
                Resume
              </p>
              <a href={profile.resumeUrl} download className="btn-secondary w-fit text-sm">
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3">
              <p className="text-[13px] font-semibold uppercase tracking-widest text-muted/60">
                Elsewhere
              </p>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-line bg-surface p-8 shadow-sm"
          >
            <ContactForm
              values={values}
              errors={errors}
              status={status}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Form sub-components ───────────────────────────────────────── */

interface ContactFormProps {
  values: ContactFormValues;
  errors: ContactFormErrors;
  status: 'idle' | 'submitting' | 'success' | 'redirected' | 'error';
  onChange: (
    field: keyof ContactFormValues,
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

function ContactForm({ values, errors, status, onChange, onSubmit }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <Field label="Name" error={errors.name}>
        <input
          type="text"
          value={values.name}
          onChange={onChange('name')}
          aria-invalid={!!errors.name}
          placeholder="Your name"
          className="field-input"
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={values.email}
          onChange={onChange('email')}
          aria-invalid={!!errors.email}
          placeholder="you@example.com"
          className="field-input"
        />
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          rows={5}
          value={values.message}
          onChange={onChange('message')}
          aria-invalid={!!errors.message}
          placeholder="What are you working on?"
          className="field-input resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary mt-1 justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Send message
      </button>

      {status === 'success' && (
        <p className="text-center text-[14px] text-teal" role="status">
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'redirected' && (
        <p className="text-center text-[14px] text-muted" role="status">
          Opening your email client…
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-[14px] text-red-500" role="alert">
          Something went wrong. Please email me directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-[12.5px] font-semibold uppercase tracking-widest text-muted/70">
        {label}
      </span>
      {children}
      {error && (
        <span className="text-[12.5px] text-red-500" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
