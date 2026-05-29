import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Github, Linkedin, Mail, Send } from 'lucide-react';
import { siteConfig, socialLinks } from '../../data/site';
import type { ContactFormData, ContactFormErrors } from '../../types';
import {
  isContactEmailConfigured,
  sendContactEmail,
} from '../../utils/sendContactEmail';
import { hasErrors, validateContactForm } from '../../utils/validation';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

const initialForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error' | 'not_configured'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const emailReady = isContactEmailConfigured();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status !== 'idle' && status !== 'sending') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    if (!emailReady) {
      setStatus('not_configured');
      setErrorMessage(
        'Email service is not set up yet. Follow CONTACT-FORM-SETUP.md in the project folder.',
      );
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await sendContactEmail(form);
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Could not send message. Please try again or email me directly.',
      );
    }
  };

  return (
    <section id="contact" className="bg-slate-100/50 py-24 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeading
          title="Contact"
          subtitle="Have a project or opportunity? Let's talk."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 dark:text-slate-400">
              I&apos;m open to frontend roles, internships, and collaborations.
              Fill the form and I&apos;ll get your message by email — usually
              within 48 hours.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-flex items-center gap-2 font-medium text-accent hover:underline"
            >
              <Mail className="h-5 w-5" />
              {siteConfig.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-accent dark:text-slate-200"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 p-6 sm:p-8"
            noValidate
          >
            {!emailReady && (
              <div
                className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-100"
                role="status"
              >
                <AlertCircle className="h-5 w-5 shrink-0" />
                <p>
                  Form emails are not active until you add EmailJS keys in{' '}
                  <code className="rounded bg-amber-100 px-1 dark:bg-amber-900/60">
                    .env
                  </code>
                  . See <strong>CONTACT-FORM-SETUP.md</strong> (about 10 min).
                </p>
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? 'message-error' : undefined
                }
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={status === 'sending'}
            >
              <Send className="h-4 w-4" />
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>

            {status === 'success' && (
              <p className="flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                Message sent! I&apos;ll reply to your email soon.
              </p>
            )}

            {(status === 'error' || status === 'not_configured') && (
              <p className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {errorMessage}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
