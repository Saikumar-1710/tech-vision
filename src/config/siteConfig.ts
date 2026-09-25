/**
 * ============================================================
 *  SKSOFT — SITE CONFIGURATION
 * ============================================================
 *  This is the ONE file to edit when you want to change:
 *    - Brand name / tagline
 *    - Contact details (email, phone, WhatsApp, location)
 *    - Social links
 *    - WhatsApp pre-filled message
 *
 *  Everything on the website reads from here.
 * ============================================================
 */

export const siteConfig = {
  /** Brand */
  name: 'Sksoft',
  tagline: 'Ideas In. Products Out.',
  description:
    'A team of skilled developers helping startups, businesses and entrepreneurs turn ideas into powerful websites, applications and software.',

  /** Contact details — replace with your real details */
  email: 'hello@sksoft.dev',
  phone: '+91 98765 43210',
  phoneHref: '+919876543210', // digits only, used for tel: links
  location: 'Hyderabad, India — Working Worldwide',

  /**
   * WhatsApp — CHANGE THIS NUMBER to your own.
   * Format: country code + number, digits only (no +, spaces or dashes).
   * Example: '919876543210' for +91 98765 43210
   */
  whatsappNumber: '919876543210',

  /** Pre-filled message used by the floating WhatsApp button */
  whatsappMessage: 'Hi Sksoft, I would like to discuss a software development project.',

  /** Social links — replace "#" with your real profile URLs */
  socials: {
    github: 'https://github.com/sksoft',
    linkedin: 'https://linkedin.com/company/sksoft',
    instagram: 'https://instagram.com/sksoft',
    twitter: 'https://x.com/sksoft',
  },

  /** Copyright year shown in the footer */
  copyrightYear: 2026,
} as const;

/** Builds a wa.me deep link with the pre-filled message. */
export function whatsappLink(message: string = siteConfig.whatsappMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}