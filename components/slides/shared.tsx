import { cn } from '@/lib/utils'
import { MonoLabel } from '@/components/ui/bits'
import { Txt } from '@/components/ui/txt'

/** Row numbers down the left edge of the INK pinboard surfaces. */
export function RowNumbers({ count, top = 128, gap = 64, className }: { count: number; top?: number; gap?: number; className?: string }) {
  return (
    <ol aria-hidden className={cn('pointer-events-none absolute left-[34px] text-cream/60', className)} style={{ top }}>
      {Array.from({ length: count }, (_, i) => (
        <li key={i} className="mono text-[14px]" style={{ height: gap }}>
          {i + 1}
        </li>
      ))}
    </ol>
  )
}

export function FigLabel({ fig, title, className }: { fig: string; title: string; className?: string }) {
  return (
    <div className={cn('absolute top-[132px] left-[96px]', className)}>
      <MonoLabel>{`FIG. ${fig} - ${title.toUpperCase()}`}</MonoLabel>
    </div>
  )
}

export function MonoLink({ label, href, className, dark = false }: { label: string; href: string; className?: string; dark?: boolean }) {
  const external = href.startsWith('http')
  return (
    <a
      data-interactive
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn('link-marker mono text-[15px]', dark ? 'text-cream' : 'text-ink', className)}
    >
      <Txt>{label}</Txt> <span aria-hidden>↗</span>
    </a>
  )
}

/** Simple graphite head-and-shoulders silhouette used until a real cutout is uploaded. */
export function SilhouetteArt({ w = 640 }: { w?: number }) {
  return (
    <svg width={w} height={w * 1.25} viewBox="0 0 640 800" aria-hidden>
      <ellipse cx="320" cy="250" rx="138" ry="166" fill="#C6C6C0" />
      <path d="M232 120 C250 40 420 30 450 130 C470 190 440 210 430 230 C410 160 300 150 230 200 Z" fill="#B7B7B0" />
      <rect x="268" y="380" width="104" height="90" fill="#C6C6C0" />
      <path d="M40 800 C50 600 170 480 320 470 C470 480 590 600 600 800 Z" fill="#C6C6C0" />
    </svg>
  )
}
