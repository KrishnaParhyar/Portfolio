import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function isContactEmailConfigured(): boolean {
  return Boolean(serviceId && templateId && publicKey);
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!isContactEmailConfigured()) {
    throw new Error(
      'Email is not configured. Add EmailJS keys to your .env file (see CONTACT-FORM-SETUP.md).',
    );
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.name,
      reply_to: data.email,
      user_email: data.email,
      message: data.message,
      subject: `Portfolio — Hire Me inquiry from ${data.name}`,
    },
    { publicKey },
  );
}
