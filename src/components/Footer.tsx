import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { siteConfig, whatsappLink } from '@/config/siteConfig';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { scrollToSection } from '@/lib/utils';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', id: 'about' },
      { label: 'Developers', id: 'developers' },
      { label: 'Projects', id: 'projects' },
      { label: 'Contact', id: 'contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', id: 'services' },
      { label: 'Mobile Development', id: 'services' },
      { label: 'SaaS', id: 'services' },
      { label: 'E-Commerce', id: 'services' },
      { label: 'AI & Automation', id: 'services' },
    ],
  },
  {
    title: 'Technologies',
    links: [
      { label: 'React', id: 'technologies' },
      { label: 'Java', id: 'technologies' },
      { label: 'Spring Boot', id: 'technologies' },
      { label: 'Flutter', id: 'technologies' },
      { label: 'Node.js', id: 'technologies' },
      { label: 'Python', id: 'technologies' },
    ],
  },
];

const socials = [
  { icon: Github, label: 'GitHub', href: siteConfig.socials.github },
  { icon: Linkedin, label: 'LinkedIn', href: siteConfig.socials.linkedin },
  { icon: Instagram, label: 'Instagram', href: siteConfig.socials.instagram },
  { icon: MessageCircle, label: 'WhatsApp', href: whatsappLink() },
];

/** Premium footer: brand, link columns, socials, legal row —
 *  scroll-reveal stagger + shimmer hairline + floating glow orbs. */
export function Footer() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-900/60 backdrop-blur-xl">
      {/* Animated shimmer hairline */}
      <span className="footer-shimmer-line" aria-hidden="true" />
      {/* Floating glow orbs */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 animate-float-slow rounded-full bg-brand-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 animate-float-slower rounded-full bg-accent-500/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div ref={ref} className="reveal reveal-group container-site relative py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="reveal-item lg:col-span-4" style={{ transitionDelay: '0ms' }}>
            <Logo showTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-200"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((column, i) => (
            <nav
              key={column.title}
              className="reveal-item lg:col-span-2"
              style={{ transitionDelay: `${(i + 1) * 90}ms` }}
              aria-label={column.title}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Connect */}
          <div className="reveal-item lg:col-span-2" style={{ transitionDelay: '360ms' }}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="reveal-item mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-7 sm:flex-row"
          style={{ transitionDelay: '450ms' }}
        >
          <p className="text-xs text-slate-500">
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-xs text-slate-500 transition-colors hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#home" className="text-xs text-slate-500 transition-colors hover:text-slate-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}