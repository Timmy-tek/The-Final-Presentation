import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Tape } from './bits'
import { isPlaceholder, Txt } from './txt'

/* ---------- Big stat with count-up (numeric values only) ---------- */
export function StatCard({ value, suffix = '', label, className }: { value: string; suffix?: string; label: string; className?: string }) {
  const numeric = !isPlaceholder(value) && Number.isFinite(Number(value))
  return (
    <div className={cn('flex flex-col gap-3 border-t-[1.5px] border-current pt-5', className)}>
      {numeric ? (
        <span data-anim="count" data-value={value} data-suffix={suffix} className="font-display text-[120px] leading-[0.9] tracking-[-0.04em]">
          {`${value}${suffix}`}
        </span>
      ) : (
        <span className="font-display text-[64px] leading-none tracking-[-0.02em]">
          <Txt>{`${value}${suffix}`}</Txt>
        </span>
      )}
      <span className="mono text-[15px] leading-snug">
        <Txt>{label}</Txt>
      </span>
    </div>
  )
}

/* ---------- Ticker ---------- */
export function Ticker({ items, className, duration = 30 }: { items: string[]; className?: string; duration?: number }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="mono flex items-center gap-8 pr-8 text-[22px] font-bold text-paper">
          {item}
          <span className="inline-block size-2.5 rounded-full bg-red" aria-hidden />
        </li>
      ))}
    </ul>
  )
  return (
    <div className={cn('overflow-hidden bg-ink py-4', className)}>
      <div className="marquee flex w-max" style={{ '--marquee-dur': `${duration}s` } as CSSProperties}>
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  )
}

/* ---------- Sticker label block (cover type) ---------- */
const blockTones = {
  brown: 'bg-brown text-white',
  yellow: 'bg-yellow text-brown',
  white: 'bg-white text-brown',
}

export function LabelBlock({
  tone,
  rot = 0,
  children,
  className,
  style,
  tape,
  as: Tag = 'div',
}: {
  tone: keyof typeof blockTones
  rot?: number
  children: ReactNode
  className?: string
  style?: CSSProperties
  tape?: 'tl' | 'tr' | 'bl' | 'br'
  as?: 'div' | 'h1' | 'h2' | 'p' | 'span'
}) {
  return (
    <Tag
      data-anim="block"
      className={cn(
        'relative inline-block font-sticker font-extrabold tracking-[-0.03em] shadow-[0_14px_28px_rgb(0_0_0/0.28)]',
        blockTones[tone],
        className,
      )}
      style={{ rotate: `${rot}deg`, ...style }}
    >
      {tape === 'tl' && <Tape className="-top-4 -left-8" rot={-28} />}
      {tape === 'tr' && <Tape className="-top-4 -right-8" rot={28} />}
      {tape === 'bl' && <Tape className="-bottom-4 -left-8" rot={24} />}
      {tape === 'br' && <Tape className="-right-8 -bottom-4" rot={-24} />}
      {children}
    </Tag>
  )
}

/* ---------- Dashed selection box with handles ---------- */
export function SelectionBox({ className, color = '#F3EFCF' }: { className?: string; color?: string }) {
  return (
    <span aria-hidden data-anim="fade" className={cn('pointer-events-none absolute block', className)}>
      <svg className="absolute inset-0 size-full overflow-visible">
        <rect
          className="ants"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray="14 10"
        />
      </svg>
      {['-top-[7px] -left-[7px]', '-top-[7px] -right-[7px]', '-bottom-[7px] -left-[7px]', '-right-[7px] -bottom-[7px]'].map((p) => (
        <span key={p} className={cn('absolute size-[14px] border-2 bg-white', p)} style={{ borderColor: color === '#F3EFCF' ? '#5B3A21' : color }} />
      ))}
    </span>
  )
}
