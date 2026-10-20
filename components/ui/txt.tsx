import { Fragment } from 'react'
import { cn } from '@/lib/utils'

const BRACKET = /(\[[^\]]+\]|{red:[^}]+})/g

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim())
export const isRed = (value: string) => /^{red:.*}$/.test(value.trim())

/** Renders text; any [BRACKETED] segment becomes a visible "fill me in" chip. */
export function Txt({ children, className }: { children: string; className?: string }) {
  const parts = children.split(BRACKET).filter(Boolean)
  return (
    <>
      {parts.map((part, i) => {
        if (isPlaceholder(part)) {
          return (
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
          )
        }
        if (isRed(part)) {
          return (
            <span key={i} className="text-red">
              {part.slice(5, -1)}
            </span>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
