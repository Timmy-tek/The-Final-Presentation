import { Fragment } from 'react'
import { cn } from '@/lib/utils'

const BRACKET = /(\[[^\]]+\])/g

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim())

/** Renders text; any [BRACKETED] segment becomes a visible "fill me in" chip. */
export function Txt({ children, className }: { children: string; className?: string }) {
  const parts = children.split(BRACKET).filter(Boolean)
  return (
    <>
      {parts.map((part, i) =>
        isPlaceholder(part) ? (
          <span
            key={i}
            title="Edit in /data/slides.ts"
            className={cn(
              'rounded-[4px] border border-dashed border-ink/60 bg-yellow/80 px-[0.25em] text-ink [box-decoration-break:clone]',
              className,
            )}
          >
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
