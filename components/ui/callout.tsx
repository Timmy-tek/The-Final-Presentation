import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Pt = { x: number; y: number }

/**
 * Thin elbow line in slide coordinates (1920x1080) from a square marker to a mono caption.
 * The line draws on (data-anim="draw"), the caption types on after it.
 */
export function Callout({
  from,
  to,
  children,
  dark = false,
  captionW = 260,
  className,
  captionClassName,
}: {
  from: Pt
  to: Pt
  children: ReactNode
  dark?: boolean
  captionW?: number
  className?: string
  captionClassName?: string
}) {
  const dir = Math.sign(to.x - from.x) || 1
  const dy = to.y - from.y
  const knee = { x: from.x + dir * Math.min(Math.abs(dy) * 0.8, Math.abs(to.x - from.x) * 0.5), y: to.y }
  const d = `M${from.x} ${from.y} L${knee.x} ${knee.y} L${to.x} ${to.y}`
  const stroke = dark ? '#F3EFCF' : '#111'

  return (
    <div className={cn('pointer-events-none absolute inset-0', className)}>
      <svg className="absolute inset-0 overflow-visible" width={1920} height={1080} aria-hidden>
        <path data-anim="draw" pathLength={1} strokeDasharray="1" d={d} fill="none" stroke={stroke} strokeWidth="1.5" />
      </svg>
      <span
        data-anim="fade"
        aria-hidden
        className={cn('absolute grid size-[24px] place-items-center border-[1.5px]', dark ? 'border-cream bg-ink' : 'border-ink bg-paper')}
        style={{ left: from.x - 12, top: from.y - 12 }}
      >
        <span className={cn('size-[10px]', dark ? 'bg-cream' : 'bg-ink')} />
      </span>
      <div
        data-anim="mono"
        className={cn('mono absolute flex text-[15px] leading-snug', dark ? 'text-cream' : 'text-ink', dir > 0 ? 'justify-start text-left' : 'justify-end text-right')}
        style={{
          width: captionW,
          top: to.y - 12,
          left: dir > 0 ? to.x + 14 : to.x - 14 - captionW,
        }}
      >
        <span className={captionClassName}>{children}</span>
      </div>
    </div>
  )
}
