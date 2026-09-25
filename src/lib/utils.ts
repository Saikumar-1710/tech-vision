/** Small shared helpers used across the site. */

/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** Smoothly scrolls to a section id, accounting for the sticky navbar. */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** Generates deterministic initials from a name, e.g. "Sai Kumar" -> "SK". */
export function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

/** Accent gradient map used by generated avatars and mockups. */
export const accentGradients: Record<string, string> = {
  indigo: 'from-indigo-500 to-indigo-800',
  violet: 'from-violet-500 to-purple-800',
  cyan: 'from-cyan-400 to-sky-700',
  emerald: 'from-emerald-400 to-teal-700',
  amber: 'from-amber-400 to-orange-600',
  rose: 'from-rose-400 to-pink-700',
};

/** Accent text/border map for small badges. */
export const accentSoft: Record<string, string> = {
  indigo: 'text-indigo-300 border-indigo-400/30 bg-indigo-500/10',
  violet: 'text-violet-300 border-violet-400/30 bg-violet-500/10',
  cyan: 'text-cyan-300 border-cyan-400/30 bg-cyan-500/10',
  emerald: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10',
  amber: 'text-amber-300 border-amber-400/30 bg-amber-500/10',
  rose: 'text-rose-300 border-rose-400/30 bg-rose-500/10',
};