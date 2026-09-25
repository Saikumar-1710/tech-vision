import { useState, type FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig, whatsappLink } from '@/config/siteConfig';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

/**
 * ============================================================
 *  CONTACT — frontend-only form (NO backend submission)
 * ============================================================
 *  The form validates locally and shows a success message.
 *
 *  EASY INTEGRATION POINTS (pick ONE when you're ready):
 *
 *  1) EmailJS  → npm i @emailjs/browser
 *     In handleSubmit(), replace the fake delay with:
 *       import emailjs from '@emailjs/browser';
 *       await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY');
 *
 *  2) Formspree → set `action="https://formspree.io/f/YOUR_FORM_ID"`
 *     and method="post" on the <form>, then remove the JS handling.
 *
 *  3) WhatsApp  → build a wa.me link from the form data (see whatsappLink()
 *     in src/config/siteConfig.ts) and window.open() it in handleSubmit().
 *
 *  4) Google Forms → point the form's action at your Google Form
 *     entry IDs, or embed the form via an <iframe>.
 * ============================================================
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
};

const projectTypes = [
  'Website',
  'Web Application',
  'Mobile App',
  'SaaS Platform',
  'E-Commerce Store',
  'Backend / API',
  'AI & Automation',
  'Custom Software',
  'Other',
];

const budgets = ['< $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+', 'Not sure yet'];

const contactInfo = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us instantly', href: whatsappLink() },
  { icon: MapPin, label: 'Location', value: siteConfig.location, href: undefined },
];

/** Validates the form; returns an object of field errors (empty = valid). */
function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (data.phone.trim() && !/^[+\d][\d\s\-()]{5,}$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!data.projectType) errors.projectType = 'Please select a project type.';
  if (!data.message.trim()) {
    errors.message = 'Please tell us a little about your project.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Please add a bit more detail (at least 10 characters).';
  }
  return errors;
}

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const set = (field: keyof FormData) => (e: { target: { value: string } }) => {
    setData((d) => ({ ...d, [field]: e.target.value }));
    // Clear the field error as the user types
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    /* ------------------------------------------------------------
       STATIC SITE: no backend submission.
       Integrate EmailJS / Formspree / WhatsApp / Google Forms here
       (see the comment block at the top of this file).
       ------------------------------------------------------------ */
    setStatus('sending');
    window.setTimeout(() => {
      setStatus('sent');
      setData(initialData);
    }, 900);
  };

  const inputClass = (hasError?: string) =>
    cn(
      'w-full rounded-xl border input-glass px-4 py-3 text-sm text-white placeholder:text-slate-500',
      'transition-colors duration-200 focus:outline-none focus:ring-2',
      hasError
        ? 'border-rose-400/50 focus:border-rose-400/60 focus:ring-rose-400/20'
        : 'border-white/[0.08] focus:border-brand-400/50 focus:ring-brand-400/20'
    );

  return (
    <Section id="contact" className="bg-ink-900/40">
      <SectionHeading
        label="Contact"
        title="Let's Talk About Your Project"
        subtitle="Share a few details and we'll get back to you with next steps, timelines and an honest estimate."
      />

      <div ref={ref} className="reveal grid gap-8 lg:grid-cols-5">
        {/* Left — contact info */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          {contactInfo.map((item) => {
            const content = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-400/20 bg-brand-500/10 text-brand-300">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-slate-200">{item.value}</span>
                </span>
              </>
            );
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card card-hover flex items-center gap-4 p-4"
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="card flex items-center gap-4 p-4">
                {content}
              </div>
            );
          })}

          {/* Response-time note */}
          <div className="card mt-2 p-5">
            <p className="text-sm leading-relaxed text-slate-400">
              <span className="font-semibold text-white">Fast response, no pressure.</span> We
              usually reply within one business day with honest feedback about scope, timeline and
              budget.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="card p-6 sm:p-8 lg:col-span-3">
          {status === 'sent' ? (
            /* Success state */
            <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30">
                <CheckCircle2 className="h-8 w-8 text-emerald-300" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Thank you! We'll get back to you soon.
              </h3>
              <p className="mt-2 max-w-sm text-sm text-slate-400">
                Your project inquiry has been noted. In the meantime, feel free to message us
                directly on WhatsApp for a faster reply.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Message on WhatsApp
                </a>
                <button onClick={() => setStatus('idle')} className="btn-secondary">
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Name <span className="text-brand-300">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={data.name}
                    onChange={set('name')}
                    placeholder="Your full name"
                    className={inputClass(errors.name)}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-rose-300">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Email <span className="text-brand-300">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={data.email}
                    onChange={set('email')}
                    placeholder="you@company.com"
                    className={inputClass(errors.email)}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-rose-300">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={data.phone}
                    onChange={set('phone')}
                    placeholder="+91 98765 43210"
                    className={inputClass(errors.phone)}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="mt-1.5 text-xs text-rose-300">{errors.phone}</p>}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="contact-company" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={data.company}
                    onChange={set('company')}
                    placeholder="Company / startup name"
                    className={inputClass()}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="contact-type" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Project Type <span className="text-brand-300">*</span>
                  </label>
                  <select
                    id="contact-type"
                    value={data.projectType}
                    onChange={set('projectType')}
                    className={cn(inputClass(errors.projectType), 'appearance-none')}
                    aria-invalid={!!errors.projectType}
                  >
                    <option value="" disabled className="bg-ink-800">
                      Select a project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-ink-800">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && <p className="mt-1.5 text-xs text-rose-300">{errors.projectType}</p>}
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="contact-budget" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Budget
                  </label>
                  <select
                    id="contact-budget"
                    value={data.budget}
                    onChange={set('budget')}
                    className={cn(inputClass(), 'appearance-none')}
                  >
                    <option value="" disabled className="bg-ink-800">
                      Select a budget range
                    </option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-ink-800">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Message <span className="text-brand-300">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={data.message}
                    onChange={set('message')}
                    placeholder="Tell us what you want to build, the problem it solves, and any timeline in mind…"
                    className={cn(inputClass(errors.message), 'resize-y')}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-rose-300">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Project Inquiry
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}