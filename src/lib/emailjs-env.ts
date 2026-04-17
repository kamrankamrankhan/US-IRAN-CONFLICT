/**
 * EmailJS (https://www.emailjs.com/) — add to `.env.local`:
 *
 * NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
 * NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
 * NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
 *
 * Template should use variables: {{from_name}}, {{from_email}}, {{message}}
 * (or change keys in EmailJsContactForm to match your template).
 */

export type EmailJsPublicConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

export function getEmailJsPublicConfig(): EmailJsPublicConfig | null {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? '';
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? '';
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? '';
  if (!serviceId || !templateId || !publicKey) return null;
  return { serviceId, templateId, publicKey };
}
