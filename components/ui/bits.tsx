import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Txt } from './txt'

/* ---------- Tape ---------- */
export function Tape({
  className,
  rot = -6,
  w = 120,
  h = 34,
  style,
}: {
  className?: string
  rot?: number
  w?: number
  h?: number
  style?: CSSProperties
}) {
  return (
    <span aria-hidden className={cn('pointer-events-none absolute z-20 block', className)} style={{ rotate: `${rot}deg`, ...style }}>
      <span
        data-anim="tape"
        className="block bg-[#f3efcf]/60 shadow-[0_1px_2px_rgb(0_0_0/0.15)] backdrop-saturate-50"
        style={{
          width: w,
          height: h,
          clipPath:
            'polygon(0 8%, 4% 0, 9% 10%, 14% 2%, 86% 2%, 91% 10%, 96% 0, 100% 8%, 97% 50%, 100% 92%, 95% 100%, 90% 90%, 85% 100%, 15% 98%, 9% 90%, 4% 100%, 0 92%, 3% 50%)',
        }}
      />
    </span>
  )
}

/* ---------- Tag / Pill ---------- */
const tagTones = {
  outline: 'border-current bg-transparent',
  ink: 'border-ink bg-ink text-cream',
  yellow: 'border-ink bg-yellow text-ink',
  orange: 'border-transparent bg-orange text-ink',
  purple: 'border-transparent bg-purple text-ink',
  lime: 'border-transparent bg-lime text-ink',
  cream: 'border-cream text-cream',
}

export function Tag({
  children,
  tone = 'outline',
  className,
  size = 'md',
}: {
  children: ReactNode
  tone?: keyof typeof tagTones
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  return (
    <span
      className={cn(
        'mono inline-flex items-center whitespace-nowrap rounded-full border',
        size === 'sm' && 'px-2.5 py-0.5 text-[12px]',
        size === 'md' && 'px-4 py-1 text-[15px]',
        size === 'lg' && 'px-6 py-2 text-[20px]',
        tagTones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

/* ---------- MonoLabel ---------- */
export function MonoLabel({ children, className, anim = true }: { children: string; className?: string; anim?: boolean }) {
  return (
    <span data-anim={anim ? 'mono' : undefined} className={cn('mono inline-block text-[15px] whitespace-nowrap', className)}>
      [ <Txt>{children}</Txt> ]
    </span>
  )
}

/* ---------- Crosshair ---------- */
export function Crosshair({ x, y, className, opacity = 0.35 }: { x: number; y: number; className?: string; opacity?: number }) {
  return (
    <span
      aria-hidden
      className={cn('crosshair pointer-events-none absolute block size-[14px]', className)}
      style={{ left: x - 7, top: y - 7, '--cross-o': opacity } as CSSProperties}
    >
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
    </span>
  )
}

/* ---------- Handwritten note ---------- */
export function Hand({ children, className, rot = -4 }: { children: ReactNode; className?: string; rot?: number }) {
  return (
    <p data-anim="fade" className={cn('font-hand text-[44px] leading-none font-bold', className)} style={{ rotate: `${rot}deg` }}>
      {children}
    </p>
  )
}

/* ---------- Masked headline lines ---------- */
export function Lines({
  lines,
  className,
  lineClassName,
  as: Tag = 'h2',
}: {
  lines: ReactNode[]
  className?: string
  lineClassName?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div'
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <span data-anim="line" className={cn('block', lineClassName)}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}

/* ---------- Status dot ---------- */
export function StatusDot({ tone, label }: { tone: 'live' | 'shipped' | 'handoff' | 'wip' | 'unknown'; label: string }) {
  const color = {
    live: 'bg-[#2fbf4a]',
    shipped: 'bg-ink',
    handoff: 'bg-orange',
    wip: 'bg-purple',
    unknown: 'bg-graphite-soft',
  }[tone]
  return (
    <span className="inline-flex items-center gap-2">
      <span>[</span>
      <span className={cn('inline-block size-2.5 rounded-full', color)} />
      <Txt>{label}</Txt>
      <span>]</span>
    </span>
  )
}
