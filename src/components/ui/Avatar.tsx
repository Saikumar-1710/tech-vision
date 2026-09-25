import { cn, initials, accentGradients } from '@/lib/utils';

interface GradientAvatarProps {
  name: string;
  accent?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  /** Optional real photo path — when provided, renders an <img> instead */
  photo?: string;
}

const sizeMap: Record<string, string> = {
  sm: 'h-9 w-9 text-xs',
  md: 'h-12 w-12 text-sm',
  lg: 'h-16 w-16 text-lg',
  xl: 'h-20 w-20 text-xl',
};

/**
 * Generated avatar: gradient background + initials.
 * Swap in a real photo anytime via the `photo` prop.
 */
export function GradientAvatar({ name, accent = 'indigo', size = 'md', className, photo }: GradientAvatarProps) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className={cn('rounded-full object-cover ring-1 ring-white/10', sizeMap[size], className)}
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex shrink-0 select-none items-center justify-center rounded-full bg-gradient-to-br font-display font-bold text-on-accent/95 ring-1 ring-white/15',
        accentGradients[accent] ?? accentGradients.indigo,
        sizeMap[size],
        className
      )}
    >
      {initials(name)}
    </div>
  );
}