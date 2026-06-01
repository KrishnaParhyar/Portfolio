import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function isContactEmailConfigured(): boolean {
  return Boolean(
    serviceId &&
    serviceId !== 'your_service_id' &&
    templateId &&
    templateId !== 'your_template_id' &&
    publicKey &&
    publicKey !== 'your_public_key'
  );
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!isContactEmailConfigured()) {
    // Graceful fallback: Open default mail client pre-filled with the message details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    const mailtoUrl = `mailto:srikrishnadevi47@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    return;
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
